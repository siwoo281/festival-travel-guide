import { fetchUnsplashImage, getExchangeRate } from '../services/apiService.js';
import { festivalsData } from '../data/festivals.js';
import { marketAnalysis } from '../data/market.js';
import { itineraryData } from '../data/itineraries.js';
import { LazyImageLoader, computeDDay } from '../utils/utils.js';

let modalTriggerElement = null;
let budgetChartInstance = null;

// ===== 유틸리티 함수: 데이터 검증 및 안전 처리 =====

/**
 * HTML 이스케이프 (XSS 방지)
 * @param {string} text - 이스케이프할 텍스트
 * @returns {string} 이스케이프된 텍스트
 */
function escapeHtml(text) {
    if (text == null) return '';
    const div = document.createElement('div');
    div.textContent = String(text);
    return div.innerHTML;
}

/**
 * 안전한 숫자 파싱 (음수 방지, 기본값 처리)
 * @param {any} value - 파싱할 값
 * @param {number} defaultValue - 기본값
 * @param {number} min - 최소값
 * @returns {number}
 */
function safeParseInt(value, defaultValue = 0, min = 0) {
    const parsed = parseInt(value, 10);
    if (isNaN(parsed) || parsed < min) return defaultValue;
    return parsed;
}

/**
 * 안전한 숫자 파싱 (부동소수점)
 * @param {any} value - 파싱할 값
 * @param {number} defaultValue - 기본값
 * @param {number} min - 최소값
 * @returns {number}
 */
function safeParseFloat(value, defaultValue = 0, min = 0) {
    const parsed = parseFloat(value);
    if (isNaN(parsed) || parsed < min) return defaultValue;
    return parsed;
}

/**
 * 안전한 객체 속성 접근
 * @param {Object} obj - 객체
 * @param {string} path - 속성 경로 (점 표기법)
 * @param {any} defaultValue - 기본값
 * @returns {any}
 */
function safeGet(obj, path, defaultValue = null) {
    if (!obj || typeof obj !== 'object') return defaultValue;
    const keys = path.split('.');
    let current = obj;
    for (const key of keys) {
        if (current == null || typeof current !== 'object') return defaultValue;
        current = current[key];
    }
    return current !== undefined ? current : defaultValue;
}

/**
 * 배열이 비어있지 않은지 확인
 * @param {Array} arr - 배열
 * @returns {boolean}
 */
function isNonEmptyArray(arr) {
    return Array.isArray(arr) && arr.length > 0;
}

/**
 * Chart.js 로드 확인
 * @returns {boolean}
 */
function isChartJsLoaded() {
    return typeof window !== 'undefined' && window.Chart && typeof window.Chart === 'function';
}

/**
 * DOM 요소가 준비될 때까지 대기
 * @param {string} id - 요소 ID
 * @param {Function} callback - 콜백 함수
 * @param {number} maxAttempts - 최대 시도 횟수
 */
function waitForElement(id, callback, maxAttempts = 20) {
    const element = document.getElementById(id);
    if (element) {
        callback(element);
    } else if (maxAttempts > 0) {
        setTimeout(() => waitForElement(id, callback, maxAttempts - 1), 50);
    } else {
        console.warn(`Element #${id} not found after ${maxAttempts} attempts`);
    }
}

/**
 * 안전한 이미지 URL 생성 (폴백 포함)
 * @param {string} imageUrl - 이미지 URL
 * @param {string} fallbackUrl - 폴백 URL
 * @returns {string}
 */
function getSafeImageUrl(imageUrl, fallbackUrl = '/images/placeholder.jpg') {
    if (!imageUrl || typeof imageUrl !== 'string' || !imageUrl.trim()) {
        return fallbackUrl;
    }
    try {
        return encodeURI(imageUrl.trim());
    } catch (e) {
        console.warn('Image URL encoding failed:', e);
        return fallbackUrl;
    }
}

/**
 * 축제별 비즈니스 데이터 생성 (수익성 분석용)
 * @param {string} festivalId - 축제 ID
 * @returns {Object} 비즈니스 데이터 객체
 */
function getBusinessData(festivalId) {
    const festival = festivalsData[festivalId];
    if (!festival) return null;

    // 기본 상품 가격 추출 (₩ 제거 후 숫자만)
    const basePrice = parseInt(festival.price.replace(/[^\d]/g, '')) || 2000000;
    
    // 1인당 변동 원가 (Variable Costs) - 축제별 특성 반영
    const variableCosts = {
        flight: Math.round(basePrice * getFlightCostRatio(festivalId)),
        hotel: Math.round(basePrice * getHotelCostRatio(festivalId)),
        ticket: Math.round(basePrice * getTicketCostRatio(festivalId)),
        transport: Math.round(basePrice * 0.05),
        guide_ops: Math.round(basePrice * 0.08),
        meals: Math.round(basePrice * 0.12)
    };
    
    const totalVariableCost = Object.values(variableCosts).reduce((sum, cost) => sum + cost, 0);
    
    // 총 고정 원가 (Fixed Costs) - 축제 규모별 차등
    const fixedCosts = getFixedCosts(festivalId, basePrice);
    
    // 상품 티어 정의
    const tiers = [
        { 
            name: 'Basic', 
            price: Math.round(basePrice * 0.75), 
            description: '필수 항공/숙박/입장권 포함',
            features: getBasicFeatures(festivalId)
        },
        { 
            name: 'Standard', 
            price: basePrice, 
            description: '기본 투어 + 전문 가이드 포함',
            features: getStandardFeatures(festivalId)
        },
        { 
            name: 'Premium', 
            price: Math.round(basePrice * 1.4), 
            description: '전용 차량 + 고급 숙소 + VIP 체험',
            features: getPremiumFeatures(festivalId)
        }
    ];
    
    // 손익분기점 계산
    const contributionMargin = basePrice - totalVariableCost;
    const breakEvenPoint = contributionMargin > 0 ? Math.ceil(fixedCosts / contributionMargin) : null;
    
    return {
        festivalId,
        basePrice,
        variableCosts,
        totalVariableCost,
        fixedCosts,
        tiers,
        contributionMargin,
        breakEvenPoint,
        marginRate: contributionMargin > 0 ? (contributionMargin / basePrice) * 100 : 0
    };
}

// 축제별 항공료 비율 결정
function getFlightCostRatio(festivalId) {
    const longHaulFestivals = ['carnival', 'tomorrowland', 'up-alaaf', 'dia-de-muertos'];
    const mediumHaulFestivals = ['oktoberfest', 'tomatina', 'fringe', 'oktober-alt'];
    
    if (longHaulFestivals.includes(festivalId)) return 0.45; // 장거리
    if (mediumHaulFestivals.includes(festivalId)) return 0.35; // 중거리
    return 0.25; // 단거리 (아시아권)
}

// 축제별 숙박비 비율 결정
function getHotelCostRatio(festivalId) {
    const expensiveCities = ['tomorrowland', 'fringe', 'oktoberfest'];
    const moderateCities = ['carnival', 'tomatina', 'up-alaaf'];
    
    if (expensiveCities.includes(festivalId)) return 0.25;
    if (moderateCities.includes(festivalId)) return 0.20;
    return 0.15;
}

// 축제별 티켓 비용 비율
function getTicketCostRatio(festivalId) {
    const premiumFestivals = ['tomorrowland', 'oktoberfest'];
    if (premiumFestivals.includes(festivalId)) return 0.15;
    return 0.08;
}

// 축제별 고정비용 계산
function getFixedCosts(festivalId, basePrice) {
    const largeFestivals = ['oktoberfest', 'carnival', 'tomorrowland'];
    const mediumFestivals = ['tomatina', 'fringe', 'up-alaaf'];
    
    if (largeFestivals.includes(festivalId)) return Math.round(basePrice * 8); // 대형 축제
    if (mediumFestivals.includes(festivalId)) return Math.round(basePrice * 6); // 중형 축제
    return Math.round(basePrice * 4); // 소형 축제
}

// 티어별 기능 정의
function getBasicFeatures(festivalId) {
    return [
        '왕복 항공료 (이코노미)',
        '3성급 호텔 숙박',
        '축제 입장권',
        '공항 픽업/센딩',
        '기본 여행자 보험'
    ];
}

function getStandardFeatures(festivalId) {
    return [
        '왕복 항공료 (이코노미+)',
        '4성급 호텔 숙박',
        '축제 프리미엄 입장권',
        '전문 한국인 가이드',
        '주요 관광지 투어',
        '그룹 셔틀 서비스',
        '포괄 여행자 보험'
    ];
}

function getPremiumFeatures(festivalId) {
    const premiumFeatures = [
        '왕복 항공료 (비즈니스 업그레이드 옵션)',
        '5성급 럭셔리 호텔',
        'VIP 축제 패스',
        '전용 차량 & 프라이빗 가이드',
        '독점 체험 프로그램',
        '고급 레스토랑 예약',
        '24시간 컨시어지 서비스',
        '프리미엄 보험 패키지'
    ];
    
    // 축제별 특별 혜택 추가
    if (festivalId === 'tomorrowland') {
        premiumFeatures.push('백스테이지 투어', 'DJ 만남 기회');
    } else if (festivalId === 'oktoberfest') {
        premiumFeatures.push('전용 텐트 예약', '양조장 VIP 투어');
    } else if (festivalId === 'carnival') {
        premiumFeatures.push('삼바 학교 VIP 관람석', '프라이빗 파티 초대');
    }
    
    return premiumFeatures;
}

function getFlightInfo(festival) {
    const location = festival.location || '';
    if (location.includes('스페인')) return '인천 → 마드리드 (14시간)';
    if (location.includes('독일')) return '인천 → 프랑크푸르트 (12시간)';
    if (location.includes('브라질')) return '인천 → 상파울루 (24시간)';
    if (location.includes('중국')) return '인천 → 하얼빈 (3시간)';
    if (location.includes('일본')) return '인천 → 도쿄 (2시간)';
    if (location.includes('영국')) return '인천 → 런던 (12시간)';
    if (location.includes('태국')) return '인천 → 방콕 (6시간)';
    if (location.includes('멕시코')) return '인천 → 멕시코시티 (20시간)';
    if (location.includes('인도')) return '인천 → 델리 (8시간)';
    if (location.includes('벨기에')) return '인천 → 브뤼셀 (12시간)';
    if (location.includes('미국')) return '인천 → LA (12시간)';
    if (location.includes('대만')) return '인천 → 타이베이 (2.5시간)';
    return '직항 또는 경유';
}

function getAccommodationInfo(festival) {
    const budget = festival.budget || {};
    const accommodation = budget['숙박'] || 500000;
    if (accommodation >= 700000) return '4-5성급 호텔';
    if (accommodation >= 500000) return '3-4성급 호텔';
    return '2-3성급 호텔';
}

function getLanguageInfo(festival) {
    const location = festival.location || '';
    if (location.includes('스페인')) return '스페인어 (영어 가능)';
    if (location.includes('독일')) return '독일어 (영어 가능)';
    if (location.includes('브라질')) return '포르투갈어';
    if (location.includes('중국')) return '중국어';
    if (location.includes('일본')) return '일본어';
    if (location.includes('영국')) return '영어';
    if (location.includes('태국')) return '태국어 (영어 가능)';
    if (location.includes('멕시코')) return '스페인어';
    if (location.includes('인도')) return '힌디어/영어';
    if (location.includes('벨기에')) return '네덜란드어/영어';
    if (location.includes('미국')) return '영어';
    if (location.includes('대만')) return '중국어 (번체)';
    return '현지어/영어';
}

function getCurrencyInfo(festival) {
    const location = festival.location || '';
    if (location.includes('스페인') || location.includes('독일') || location.includes('벨기에')) return '유로 (EUR)';
    if (location.includes('브라질')) return '헤알 (BRL)';
    if (location.includes('중국')) return '위안 (CNY)';
    if (location.includes('일본')) return '엔 (JPY)';
    if (location.includes('영국')) return '파운드 (GBP)';
    if (location.includes('태국')) return '바트 (THB)';
    if (location.includes('멕시코')) return '페소 (MXN)';
    if (location.includes('인도')) return '루피 (INR)';
    if (location.includes('미국')) return '달러 (USD)';
    if (location.includes('대만')) return '신타이완달러 (TWD)';
    return '현지 통화';
}

function getWeatherInfo(festival) {
    const period = festival.period || '';
    if (period.includes('1월') || period.includes('2월')) return '겨울 (춥거나 따뜻)';
    if (period.includes('3월') || period.includes('4월')) return '봄 (온화함)';
    if (period.includes('7월') || period.includes('8월')) return '여름 (더움)';
    if (period.includes('9월') || period.includes('10월')) return '가을 (선선함)';
    return '계절 확인 필요';
}

function getTimezoneInfo(festival) {
    const location = festival.location || '';
    if (location.includes('스페인') || location.includes('독일') || location.includes('벨기에')) return 'UTC+1 (-8시간)';
    if (location.includes('브라질')) return 'UTC-3 (-12시간)';
    if (location.includes('중국')) return 'UTC+8 (-1시간)';
    if (location.includes('일본')) return 'UTC+9 (동일)';
    if (location.includes('영국')) return 'UTC+0 (-9시간)';
    if (location.includes('태국')) return 'UTC+7 (-2시간)';
    if (location.includes('멕시코')) return 'UTC-6 (-15시간)';
    if (location.includes('인도')) return 'UTC+5:30 (-3.5시간)';
    if (location.includes('미국')) return 'UTC-8 (-17시간)';
    if (location.includes('대만')) return 'UTC+8 (-1시간)';
    return '시차 확인 필요';
}

export function createFestivalCard(festival, options = {}) {
    const flagUrl = festival.countryCode ? `https://flagcdn.com/w40/${festival.countryCode.toLowerCase()}.png` : '';
    const baseDays = parseInt((festival.duration || '').replace(/[^0-9]/g, '')) || 5;
    const colClass = options.columnClass || 'col-md-6 col-lg-4';

    // 이미지 URL 처리 개선 (안전한 인코딩)
    let imageUrl = '';
    let fallbackUrl = 'https://via.placeholder.com/400x300?text=Image+not+found';
    
    try {
        if (festival.image?.trim()) {
            imageUrl = encodeURI(festival.image);
        } else if (festival.fallbackImage?.trim()) {
            imageUrl = encodeURI(festival.fallbackImage);
        } else {
            imageUrl = fallbackUrl;
        }
        
        if (festival.fallbackImage?.trim()) {
            fallbackUrl = encodeURI(festival.fallbackImage);
        }
    } catch (e) {
        console.warn('Image URL encoding failed:', e);
        imageUrl = fallbackUrl;
    }

    return `
        <div class="${colClass} mb-4">
            <div class="festival-card" 
                 role="button" 
                 tabindex="0" 
                 data-festival-id="${festival.id}" 
                 data-base-days="${baseDays}"
                 data-action="detail">
                <div class="festival-card-image">
                    <img src="${imageUrl}" alt="${festival.name}" loading="eager" onerror="this.onerror=null; this.src='${fallbackUrl}'">
                    ${flagUrl ? `<img src="${flagUrl}" alt="국기" class="festival-flag">` : ''}
                </div>
                <div class="festival-content">
                    <h3>${festival.name}</h3>
                    <p class="festival-location"><i class="fas fa-map-marker-alt"></i> ${festival.location}</p>
                    <p class="festival-date"><i class="fas fa-calendar"></i> ${festival.period}</p>
                    <p class="festival-description">${festival.description}</p>
                    ${festival.flightPrice ? `
                    <div class="flight-widget">
                        <div class="flight-info">
                            <i class="fas fa-plane"></i>
                            <div class="flight-details">
                                <span class="flight-price">₩${parseInt(festival.flightPrice).toLocaleString()}</span>
                                <span class="flight-meta">${festival.flightDuration || ''} · ${festival.flightAirline || ''}</span>
                            </div>
                        </div>
                    </div>` : ''}
                    <div class="festival-footer">
                        <span class="festival-price">${festival.price}</span>
                        <div class="d-flex gap-2">
                            <button class="btn btn-outline-secondary btn-sm" 
                                    data-action="planner" 
                                    data-festival-id="${festival.id}" 
                                    data-days="${baseDays}"
                                    aria-label="${festival.name} 패키지 기획">패키지 기획</button>
                            <button class="btn btn-primary btn-sm" 
                                    data-action="detail" 
                                    data-festival-id="${festival.id}"
                                    aria-label="${festival.name} 상세 보기">자세히 보기</button>
                        </div>
                    </div>
                </div>
                <div id="planner-${festival.id}" 
                     class="planner-panel" 
                     aria-hidden="true"
                     aria-labelledby="planner-header-${festival.id}">
                    <div class="planner-header" id="planner-header-${festival.id}">
                        <h5><i class="fas fa-suitcase-rolling"></i> ${festival.name} 패키지 기획</h5>
                        <button class="btn btn-sm btn-light" 
                                aria-label="패널 닫기" 
                                data-action="planner-close"
                                data-festival-id="${festival.id}"
                                data-days="${baseDays}">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <div class="planner-body">
                        <div class="row g-3">
                            <div class="col-6">
                                <label class="form-label" for="plan-${festival.id}-start">출발일</label>
                                <input type="date" 
                                       class="form-control" 
                                       id="plan-${festival.id}-start"
                                       aria-label="출발일 선택" />
                            </div>
                            <div class="col-6">
                                <label class="form-label" for="plan-${festival.id}-days">여행 일수</label>
                                <input type="number" 
                                       class="form-control" 
                                       id="plan-${festival.id}-days" 
                                       min="1" 
                                       value="${baseDays}"
                                       aria-label="여행 일수" />
                            </div>
                            <div class="col-6">
                                <label class="form-label" for="plan-${festival.id}-people">인원</label>
                                <input type="number" 
                                       class="form-control" 
                                       id="plan-${festival.id}-people" 
                                       min="1" 
                                       value="2"
                                       aria-label="여행 인원" />
                            </div>
                            <div class="col-6">
                                <label class="form-label" for="plan-${festival.id}-budget">1인 최대 예산 (원)</label>
                                <input type="number" 
                                       class="form-control" 
                                       id="plan-${festival.id}-budget" 
                                       min="0" 
                                       placeholder="예: 2500000"
                                       aria-label="1인 최대 예산" />
                            </div>
                        </div>
                        <hr class="my-3" />
                        <div class="row g-3">
                            <div class="col-md-6">
                                <label class="form-label">포함 항목</label>
                                <div class="planner-checklist" id="plan-${festival.id}-includes" role="group" aria-label="포함 항목 선택">
                                    ${Object.keys(festival.budget || {}).map(key => {
                                        const mapIcons = { '항공권': 'plane', '숙박': 'hotel', '식사': 'utensils', '입장료': 'ticket', '교통': 'bus', '기타': 'ellipsis-h' };
                                        const icon = mapIcons[key] || 'check';
                                        return `
                                            <label class="form-check form-check-inline">
                                                <input class="form-check-input" 
                                                       type="checkbox" 
                                                       value="${key}" 
                                                       checked
                                                       aria-label="${key} 포함" />
                                                <span class="form-check-label"><i class="fas fa-${icon}"></i> ${key}</span>
                                            </label>
                                        `;
                                    }).join('')}
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">추천 관광지 선택</label>
                                <div class="planner-checklist" id="plan-${festival.id}-spots" role="group" aria-label="추천 관광지 선택">
                                    ${(festival.attractions || []).map((a, idx) => `
                                        <label class="form-check">
                                            <input class="form-check-input" 
                                                   type="checkbox" 
                                                   value="${a.name}" 
                                                   ${idx < 2 ? 'checked' : ''}
                                                   aria-label="${a.name} 관광지 선택" />
                                            <span class="form-check-label">${a.name}</span>
                                        </label>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-wrap gap-2 mt-3">
                            <button class="btn btn-sm btn-primary" 
                                    data-action="estimate"
                                    data-festival-id="${festival.id}"
                                    aria-label="견적 계산">
                                <i class="fas fa-calculator"></i> 견적 계산
                            </button>
                            <button class="btn btn-sm btn-outline-primary" 
                                    data-action="save-plan"
                                    data-festival-id="${festival.id}"
                                    aria-label="계획 저장">
                                <i class="fas fa-bookmark"></i> 계획 저장
                            </button>
                            <button class="btn btn-sm btn-outline-secondary" 
                                    data-action="copy-plan"
                                    data-festival-id="${festival.id}"
                                    aria-label="요약 복사">
                                <i class="fas fa-share"></i> 요약 복사
                            </button>
                        </div>
                        <div class="plan-summary mt-3" id="plan-${festival.id}-summary" role="status" aria-live="polite"></div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export function loadFestivalCards() {
    const container = document.getElementById('festivalCards');
    if (!container) return;

    showSkeletonCards(container);

    container.innerHTML = Object.values(festivalsData)
        .map(createFestivalCard)
        .join('');
    
    const lazyLoader = new LazyImageLoader();
    lazyLoader.observe();
}

export function showSkeletonCards(container, count = 3) {
    const skeletonHTML = `
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="card festival-card h-100 skeleton">
                <div class="skeleton-image card-img-top"></div>
                <div class="card-body">
                    <div class="skeleton-line h-25"></div>
                    <div class="skeleton-line w-75"></div>
                    <div class="skeleton-line w-50"></div>
                </div>
            </div>
        </div>
    `;
    container.innerHTML = skeletonHTML.repeat(count);
}

export function setupModalHandlers() {
    const modal = document.getElementById('festivalModal');
    if (!modal) return;

    modal.addEventListener('hidden.bs.modal', () => {
        if (modalTriggerElement) {
            modalTriggerElement.focus();
        }
        history.pushState("", document.title, window.location.pathname + window.location.search);
        if (budgetChartInstance) {
            budgetChartInstance.destroy();
            budgetChartInstance = null;
        }
    });

    const budgetTabTrigger = document.querySelector('a[data-bs-toggle="tab"][href="#budget"]');
    if (budgetTabTrigger) {
        budgetTabTrigger.addEventListener('shown.bs.tab', function() {
            const festivalId = modal.dataset.festivalId;
            if (!festivalId) return;
            const festival = festivalsData[festivalId];
            if (festival && !budgetChartInstance) {
                displayBudgetChart(festival.budget || {}, festival.price || '');
            }
        });
    }
}

export function resetToOverviewTab() {
    const overviewTab = document.querySelector('#festivalModal .nav-tabs .nav-link[href="#overview"]');
    if (overviewTab) {
        new bootstrap.Tab(overviewTab).show();
    }
}

export async function showFestivalDetail(festivalId, targetTab = 'overview') {
    const festival = festivalsData[festivalId];
    if (!festival) {
        console.error('Festival not found:', festivalId);
        return;
    }

    modalTriggerElement = document.activeElement;
    const modalElement = document.getElementById('festivalModal');
    const modal = bootstrap.Modal.getInstance(modalElement) || new bootstrap.Modal(modalElement);
    
    modalElement.dataset.festivalId = festivalId;

    await populateModalWithFestivalData(festival, festivalId);
    // 모바일 탭 드롭다운 동기화 초기화
    try { window.setupMobileTabSelector && window.setupMobileTabSelector(); } catch {}
    
    resetToOverviewTab();
    modal.show();

    const tabId = targetTab || 'overview';
    history.pushState(null, null, `#${festivalId}/${tabId}`);
    const targetTabEl = document.querySelector(`#festivalModal .nav-tabs .nav-link[href="#${tabId}"]`);
    if (targetTabEl) {
        new bootstrap.Tab(targetTabEl).show();
    }
}

export async function populateModalWithFestivalData(festival, festivalId) {
    document.getElementById('festivalModalLabel').textContent = festival.name;
    
    // 개요 탭 렌더링
    displayFestivalOverview(festival, 'festival-overview');

    // 패키지 정보 탭 렌더링
    if (festival.packageDetails) {
        displayPackageInfo(festival.packageDetails, 'package-info-container');
    }

    // 여행 일정표 탭 렌더링
    displayItinerary(festival.id, 'itinerary-content-container');

    // 경비 차트 탭 렌더링
    displayBudgetChart(festival.budget || {}, festival.price || '', 'budget-chart-container');

    // 여행 팁 탭 렌더링
    displayTravelTips(festival.tips || {}, 'travel-tips-container');

    // 상품 구성 탭 렌더링
    displayProductTiers(festival.id, 'product-tiers-container');

    // 손익 분기점 탭 렌더링
    displayBreakEvenAnalysis(festival.id, 'breakeven-container');

    // 수요 시뮬레이션 탭 렌더링
    initDemandSimulator(festival.id, 'demand-simulator-container');
}

/**
 * 축제 개요 표시
 * @param {Object} festival - 축제 데이터
 * @param {string} containerId - 컨테이너 ID
 */
function displayFestivalOverview(festival, containerId) {
    try {
        const container = document.getElementById(containerId);
        if (!container) {
            console.warn(`Container #${containerId} not found`);
            return;
        }

        if (!festival || typeof festival !== 'object') {
            container.innerHTML = '<div class="alert alert-warning">축제 정보를 불러올 수 없습니다.</div>';
            return;
        }

        // 안전한 이미지 URL 처리
        const heroImage = getSafeImageUrl(festival.image || festival.fallbackImage);
        const fallbackImage = getSafeImageUrl(festival.fallbackImage, '/images/placeholder.jpg');
        
        // XSS 방지: 텍스트는 escapeHtml 사용, HTML은 신뢰할 수 있는 소스에서만
        const festivalName = escapeHtml(festival.name || '');
        const festivalDescription = escapeHtml(festival.description || '');
        const detailedHtml = festival.detailedDescription || `
            <h4>축제 소개</h4>
            <p>${festivalDescription}</p>
        `;

        // 주요 관광지 (이미지 폴백 처리, XSS 방지)
        const attractionsHtml = isNonEmptyArray(festival.attractions)
            ? festival.attractions.map(attraction => {
                const attName = escapeHtml(attraction.name || '');
                const attDesc = escapeHtml(attraction.description || '');
                const attImage = getSafeImageUrl(attraction.image, fallbackImage);
                return `
                    <div class="col-md-6 mb-3">
                        <div class="card h-100" role="article" aria-label="${attName} 관광지">
                            <img src="${attImage}" 
                                 class="card-img-top" 
                                 alt="${attName}" 
                                 style="height: 200px; object-fit: cover;"
                                 loading="lazy"
                                 onerror="this.onerror=null; this.src='${fallbackImage}'">
                            <div class="card-body">
                                <h6 class="card-title mb-1">${attName}</h6>
                                <p class="card-text small text-muted mb-0">${attDesc}</p>
                            </div>
                        </div>
                    </div>
                `;
            }).join('')
            : '<p class="text-muted">정보를 준비 중입니다.</p>';

        // 현지 음식 (이미지 폴백, XSS 방지)
        const localFoodHtml = isNonEmptyArray(festival.localFood)
            ? `
            <h5 class="mt-4 mb-3">현지 음식</h5>
            <div class="row" role="list" aria-label="현지 음식 목록">
                ${festival.localFood.map(food => {
                    const foodName = escapeHtml(food.name || '');
                    const foodDesc = escapeHtml(food.description || '');
                    const foodPrice = escapeHtml(food.price || '');
                    const foodImage = food.image ? getSafeImageUrl(food.image, fallbackImage) : null;
                    return `
                        <div class="col-md-6 mb-3" role="listitem">
                            <div class="card h-100">
                                ${foodImage ? `
                                    <img src="${foodImage}" 
                                         class="card-img-top" 
                                         alt="${foodName}" 
                                         style="height: 160px; object-fit: cover;"
                                         loading="lazy"
                                         onerror="this.onerror=null; this.src='${fallbackImage}'">
                                ` : ''}
                                <div class="card-body">
                                    <div class="d-flex justify-content-between align-items-center mb-1">
                                        <h6 class="card-title mb-0">${foodName}</h6>
                                        ${food.mustTry ? '<span class="badge bg-danger" aria-label="추천 음식">Must Try</span>' : ''}
                                    </div>
                                    <p class="small text-muted mb-1">${foodDesc}</p>
                                    ${foodPrice ? `<small class="text-muted">가격: ${foodPrice}</small>` : ''}
                                </div>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>`
            : '';

        // 추천 레스토랑 (XSS 방지)
        const restaurantsHtml = isNonEmptyArray(festival.restaurants)
            ? `
            <h5 class="mt-4 mb-3">추천 레스토랑</h5>
            <div class="list-group" role="list" aria-label="추천 레스토랑 목록">
                ${festival.restaurants.map(r => {
                    const rName = escapeHtml(r.name || '');
                    const rDesc = escapeHtml(r.description || '');
                    const rType = escapeHtml(r.type || '');
                    const rPriceRange = escapeHtml(r.priceRange || '');
                    const rSpecialty = escapeHtml(r.specialty || '');
                    const rAddress = escapeHtml(r.address || '');
                    const rRating = safeParseFloat(r.rating, 0);
                    return `
                        <div class="list-group-item" role="listitem">
                            <div class="d-flex w-100 justify-content-between">
                                <h6 class="mb-1">${rName}</h6>
                                ${rRating > 0 ? `<small class="text-muted" aria-label="평점 ${rRating}점">★ ${rRating.toFixed(1)}</small>` : ''}
                            </div>
                            <p class="mb-1 small">${rDesc}</p>
                            <small class="text-muted">
                                ${rType ? `${rType} · ` : ''}
                                ${rPriceRange ? `${rPriceRange} · ` : ''}
                                ${rSpecialty ? `${rSpecialty} · ` : ''}
                                ${rAddress}
                            </small>
                        </div>
                    `;
                }).join('')}
            </div>`
            : '';

        // 주변 명소 (XSS 방지)
        const nearbyHtml = isNonEmptyArray(festival.nearbyAttractions)
            ? `
            <h5 class="mt-4 mb-3">주변 명소</h5>
            <div class="row" role="list" aria-label="주변 명소 목록">
                ${festival.nearbyAttractions.map(n => {
                    const nName = escapeHtml(n.name || '');
                    const nDesc = escapeHtml(n.description || '');
                    const nDistance = escapeHtml(n.distance || '');
                    const nTime = escapeHtml(n.time || '');
                    return `
                        <div class="col-md-6 mb-2" role="listitem">
                            <div class="p-2 border rounded h-100">
                                <strong>${nName}</strong>
                                ${nDistance ? `<span class="badge bg-light text-dark ms-2" aria-label="거리 ${nDistance}">${nDistance}</span>` : ''}
                                <p class="small mb-1 mt-2">${nDesc}</p>
                                ${nTime ? `<small class="text-muted">이동: ${nTime}</small>` : ''}
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>`
            : '';

        // 비자 정보 (XSS 방지)
        const visaHtml = festival.visaInfo
            ? `
            <div class="card mt-3" role="region" aria-labelledby="visa-info-title">
                <div class="card-header">
                    <h6 class="mb-0" id="visa-info-title">비자/입국 정보</h6>
                </div>
                <div class="card-body">
                    <p><strong>필요 여부:</strong> ${festival.visaInfo.required ? '비자 필요' : '무비자 가능'}</p>
                    ${festival.visaInfo.details ? `<p class="small text-muted mb-1">${escapeHtml(festival.visaInfo.details)}</p>` : ''}
                    ${festival.visaInfo.additionalInfo ? `<small class="text-muted">${escapeHtml(festival.visaInfo.additionalInfo)}</small>` : ''}
                </div>
            </div>`
            : '';

        // 긴급 연락처 (XSS 방지)
        const emergencyHtml = festival.emergency
            ? `
            <div class="card mt-3" role="region" aria-labelledby="emergency-info-title">
                <div class="card-header">
                    <h6 class="mb-0" id="emergency-info-title">긴급 연락처</h6>
                </div>
                <div class="card-body">
                    ${festival.emergency.embassy ? `
                        <p class="mb-1"><strong>대사관:</strong> ${escapeHtml(festival.emergency.embassy.name || '')}</p>
                        ${festival.emergency.embassy.phone ? `<small class="text-muted d-block">전화: ${escapeHtml(festival.emergency.embassy.phone)}</small>` : ''}
                        ${festival.emergency.embassy.emergency ? `<small class="text-muted d-block">긴급: ${escapeHtml(festival.emergency.embassy.emergency)}</small>` : ''}
                    ` : ''}
                    ${festival.emergency.police ? `<p class="mb-1"><strong>경찰:</strong> ${escapeHtml(festival.emergency.police)}</p>` : ''}
                    ${festival.emergency.ambulance ? `<p class="mb-1"><strong>구급:</strong> ${escapeHtml(festival.emergency.ambulance)}</p>` : ''}
                    ${festival.emergency.hospital ? `<p class="mb-1"><strong>병원:</strong> ${escapeHtml(festival.emergency.hospital)}</p>` : ''}
                </div>
            </div>`
            : '';

        // 빠른 팁 (XSS 방지, 배열 검증)
        const quickTips = festival.tips || {};
        const quickTipsHtml = (isNonEmptyArray(quickTips.주의사항) || isNonEmptyArray(quickTips.준비물) || isNonEmptyArray(quickTips.추천))
            ? `
            <div class="card mt-3" role="region" aria-labelledby="quick-tips-title">
                <div class="card-header">
                    <h6 class="mb-0" id="quick-tips-title">빠른 팁</h6>
                </div>
                <div class="card-body">
                    <div class="small">
                        ${isNonEmptyArray(quickTips.주의사항) ? `<p class="mb-1"><strong>⚠️ 주의:</strong> ${quickTips.주의사항.slice(0, 3).map(t => escapeHtml(t)).join(', ')}</p>` : ''}
                        ${isNonEmptyArray(quickTips.준비물) ? `<p class="mb-1"><strong>🎒 준비:</strong> ${quickTips.준비물.slice(0, 3).map(t => escapeHtml(t)).join(', ')}</p>` : ''}
                        ${isNonEmptyArray(quickTips.추천) ? `<p class="mb-0"><strong>💡 추천:</strong> ${quickTips.추천.slice(0, 3).map(t => escapeHtml(t)).join(', ')}</p>` : ''}
                    </div>
                </div>
            </div>`
            : '';

        // 지도 (접근성 개선: title 속성 추가)
        const mapHtml = festival.mapUrl
            ? `
            <div class="card mt-3" role="region" aria-labelledby="map-title">
                <div class="card-header">
                    <h6 class="mb-0" id="map-title">지도</h6>
                </div>
                <div class="card-body p-0">
                    <iframe src="${escapeHtml(festival.mapUrl)}" 
                            width="100%" 
                            height="220" 
                            style="border:0;" 
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade"
                            title="${festivalName} 축제 위치 지도"
                            aria-label="${festivalName} 축제 위치 지도"></iframe>
                </div>
            </div>`
            : '';

        container.innerHTML = `
            <div class="row">
                <div class="col-md-8">
                    ${heroImage ? `
                    <div class="card mb-3" role="article" aria-label="${festivalName} 축제 개요">
                        <div style="position:relative; width:100%; padding-top:56.25%; overflow:hidden; background:#f6f7f8;">
                            <img src="${heroImage}" 
                                 alt="${festivalName}" 
                                 style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover;"
                                 loading="eager"
                                 onerror="this.onerror=null; this.src='${fallbackImage}'">
                        </div>
                        <div class="card-body">
                            ${detailedHtml}
                            <div class="mt-3 d-flex flex-wrap gap-2" role="list" aria-label="축제 정보 배지">
                                ${festival.nextDate ? `<span class="badge bg-primary" aria-label="다음 일정 ${escapeHtml(festival.nextDate)}">다음 일정: ${escapeHtml(festival.nextDate)}</span>` : ''}
                                ${festival.duration ? `<span class="badge bg-secondary" aria-label="기간 ${escapeHtml(festival.duration)}">${escapeHtml(festival.duration)}</span>` : ''}
                                ${festival.target ? `<span class="badge bg-info text-dark" aria-label="대상 ${escapeHtml(festival.target)}">${escapeHtml(festival.target)}</span>` : ''}
                            </div>
                        </div>
                    </div>` : `
                    <div class="festival-detail-info mb-3">${detailedHtml}</div>`}

                    <h5 class="mt-2 mb-3">축제 하이라이트</h5>
                    <div class="row" role="list" aria-label="축제 하이라이트">${attractionsHtml}</div>

                    ${localFoodHtml}
                    ${restaurantsHtml}
                    ${nearbyHtml}
                </div>
                
                <div class="col-md-4">
                    <div class="card" role="region" aria-labelledby="travel-info-title">
                        <div class="card-header">
                            <h6 class="mb-0" id="travel-info-title">여행 정보</h6>
                        </div>
                        <div class="card-body">
                            <p><strong>📍 위치:</strong> ${escapeHtml(festival.location || '-')}</p>
                            <p><strong>📅 기간:</strong> ${escapeHtml(festival.period || '-')}</p>
                            <p><strong>⏰ 일정:</strong> ${escapeHtml(festival.duration || '-')}</p>
                            <p><strong>💰 가격:</strong> ${escapeHtml(festival.price || '-')}</p>
                            <p><strong>🎯 대상:</strong> ${escapeHtml(festival.target || '-')}</p>
                        </div>
                    </div>

                    ${festival.weather ? `
                    <div class="card mt-3" role="region" aria-labelledby="weather-info-title">
                        <div class="card-header">
                            <h6 class="mb-0" id="weather-info-title">날씨 정보</h6>
                        </div>
                        <div class="card-body">
                            <p><strong>🌡️ 기온:</strong> ${escapeHtml(festival.weather.temperature || '-')}</p>
                            <p><strong>🌤️ 계절:</strong> ${escapeHtml(festival.weather.season || '-')}</p>
                            <p><strong>☔ 강수:</strong> ${escapeHtml(festival.weather.precipitation || '-')}</p>
                            <p><strong>👕 복장:</strong> ${escapeHtml(festival.weather.recommendation || '-')}</p>
                        </div>
                    </div>
                    ` : ''}

                    ${visaHtml}
                    ${emergencyHtml}
                    ${quickTipsHtml}
                    ${mapHtml}
                </div>
            </div>
        `;
    } catch (error) {
        console.error('Error displaying festival overview:', error);
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    <h5><i class="fas fa-exclamation-triangle me-2"></i>오류가 발생했습니다</h5>
                    <p>축제 정보를 불러오는 중 문제가 발생했습니다. 페이지를 새로고침해주세요.</p>
                    <button class="btn btn-sm btn-outline-danger" onclick="location.reload()">
                        <i class="fas fa-redo me-1"></i>새로고침
                    </button>
                </div>
            `;
        }
    }
}

export function displayQuickInfo(festival) {
    const container = document.getElementById('quickInfo');
    if (!container) return;
    const info = [
        { icon: 'fa-plane', label: '항공', value: getFlightInfo(festival) },
        { icon: 'fa-hotel', label: '숙박', value: getAccommodationInfo(festival) },
        { icon: 'fa-language', label: '언어', value: getLanguageInfo(festival) },
        { icon: 'fa-money-bill-wave', label: '통화', value: getCurrencyInfo(festival) },
        { icon: 'fa-thermometer-half', label: '날씨', value: getWeatherInfo(festival) },
        { icon: 'fa-clock', label: '시차', value: getTimezoneInfo(festival) }
    ];
    container.innerHTML = info.map(i => `
        <div class="quick-info-item">
            <i class="fas ${i.icon}"></i>
            <div><small>${i.label}</small><strong>${i.value}</strong></div>
        </div>
    `).join('');
}

/**
 * 여행 팁 표시
 * @param {Object} tips - 여행 팁 데이터
 * @param {string} containerId - 컨테이너 ID
 */
export function displayTravelTips(tips, containerId) {
    try {
        const container = document.getElementById(containerId);
        if (!container) {
            console.warn(`Container #${containerId} not found`);
            return;
        }

        // 데이터 검증
        if (!tips || typeof tips !== 'object' || Object.keys(tips).length === 0) {
            container.innerHTML = '<div class="alert alert-info" role="status">여행 팁 정보를 준비 중입니다.</div>';
            return;
        }

        // 안전한 배열 처리
        const 준비물 = isNonEmptyArray(tips.준비물) ? tips.준비물 : [];
        const 주의사항 = isNonEmptyArray(tips.주의사항) ? tips.주의사항 : [];
        const 추천 = isNonEmptyArray(tips.추천) ? tips.추천 : [];

        const hasAnyTips = 준비물.length > 0 || 주의사항.length > 0 || 추천.length > 0;

        if (!hasAnyTips) {
            container.innerHTML = '<div class="alert alert-info" role="status">여행 팁 정보를 준비 중입니다.</div>';
            return;
        }

        container.innerHTML = `
            <div class="travel-tips" role="region" aria-labelledby="travel-tips-title">
                <h4 class="text-center mb-4" id="travel-tips-title">여행 팁 & 주의사항</h4>
                
                <div class="row">
                    ${준비물.length > 0 ? `
                    <div class="col-md-4">
                        <div class="card" role="region" aria-labelledby="preparation-title">
                            <div class="card-header bg-info text-white">
                                <h6 class="mb-0" id="preparation-title">🎒 준비물</h6>
                            </div>
                            <div class="card-body">
                                <ul class="list-unstyled" role="list" aria-label="준비물 목록">
                                    ${준비물.map(item => `
                                        <li class="mb-2" role="listitem">
                                            <i class="fas fa-check-circle text-info me-2" aria-hidden="true"></i>
                                            ${escapeHtml(item)}
                                        </li>
                                    `).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>
                    ` : ''}
                    
                    ${주의사항.length > 0 ? `
                    <div class="col-md-4">
                        <div class="card" role="region" aria-labelledby="warnings-title">
                            <div class="card-header bg-warning text-white">
                                <h6 class="mb-0" id="warnings-title">⚠️ 주의사항</h6>
                            </div>
                            <div class="card-body">
                                <ul class="list-unstyled" role="list" aria-label="주의사항 목록">
                                    ${주의사항.map(item => `
                                        <li class="mb-2" role="listitem">
                                            <i class="fas fa-exclamation-triangle text-warning me-2" aria-hidden="true"></i>
                                            ${escapeHtml(item)}
                                        </li>
                                    `).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>
                    ` : ''}
                    
                    ${추천.length > 0 ? `
                    <div class="col-md-4">
                        <div class="card" role="region" aria-labelledby="recommendations-title">
                            <div class="card-header bg-success text-white">
                                <h6 class="mb-0" id="recommendations-title">💡 추천</h6>
                            </div>
                            <div class="card-body">
                                <ul class="list-unstyled" role="list" aria-label="추천 사항 목록">
                                    ${추천.map(item => `
                                        <li class="mb-2" role="listitem">
                                            <i class="fas fa-lightbulb text-success me-2" aria-hidden="true"></i>
                                            ${escapeHtml(item)}
                                        </li>
                                    `).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>
                    ` : ''}
                </div>
            </div>
        `;
    } catch (error) {
        console.error('Error displaying travel tips:', error);
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    <h5><i class="fas fa-exclamation-triangle me-2"></i>오류가 발생했습니다</h5>
                    <p>여행 팁 정보를 불러오는 중 문제가 발생했습니다.</p>
                </div>
            `;
        }
    }
}

/**
 * 패키지 정보 표시
 * @param {Object} packageDetails - 패키지 상세 정보
 * @param {string} containerId - 컨테이너 ID
 */
export function displayPackageInfo(packageDetails, containerId) {
    try {
        const container = document.getElementById(containerId);
        if (!container) {
            console.warn(`Container #${containerId} not found`);
            return;
        }

        // 데이터 검증
        if (!packageDetails || typeof packageDetails !== 'object') {
            container.innerHTML = '<p class="text-muted" role="status">패키지 정보를 준비 중입니다.</p>';
            return;
        }

        // 안전한 배열 처리
        const included = isNonEmptyArray(packageDetails.included) ? packageDetails.included : [];
        const excluded = isNonEmptyArray(packageDetails.excluded) ? packageDetails.excluded : [];
        const departureDates = isNonEmptyArray(packageDetails.departureDates) ? packageDetails.departureDates : [];
        const groupDiscount = packageDetails.groupDiscount && typeof packageDetails.groupDiscount === 'object' 
            ? packageDetails.groupDiscount 
            : null;
        const productCode = escapeHtml(packageDetails.productCode || 'TBD');

        container.innerHTML = `
            <div class="row" role="region" aria-label="패키지 정보">
                <div class="col-md-6">
                    <div class="card" role="region" aria-labelledby="included-title">
                        <div class="card-header bg-success text-white">
                            <h6 class="mb-0" id="included-title">✅ 포함 사항</h6>
                        </div>
                        <div class="card-body">
                            ${included.length > 0 ? `
                                <ul class="list-unstyled" role="list" aria-label="포함 사항 목록">
                                    ${included.map(item => `
                                        <li class="mb-2" role="listitem">
                                            <i class="fas fa-check text-success me-2" aria-hidden="true"></i>
                                            ${escapeHtml(item)}
                                        </li>
                                    `).join('')}
                                </ul>
                            ` : '<p class="text-muted mb-0">정보 준비 중</p>'}
                        </div>
                    </div>
                </div>
                
                <div class="col-md-6">
                    <div class="card" role="region" aria-labelledby="excluded-title">
                        <div class="card-header bg-danger text-white">
                            <h6 class="mb-0" id="excluded-title">❌ 불포함 사항</h6>
                        </div>
                        <div class="card-body">
                            ${excluded.length > 0 ? `
                                <ul class="list-unstyled" role="list" aria-label="불포함 사항 목록">
                                    ${excluded.map(item => `
                                        <li class="mb-2" role="listitem">
                                            <i class="fas fa-times text-danger me-2" aria-hidden="true"></i>
                                            ${escapeHtml(item)}
                                        </li>
                                    `).join('')}
                                </ul>
                            ` : '<p class="text-muted mb-0">정보 준비 중</p>'}
                        </div>
                    </div>
                </div>
            </div>
            
            ${departureDates.length > 0 ? `
            <div class="card mt-4" role="region" aria-labelledby="departure-dates-title">
                <div class="card-header">
                    <h6 class="mb-0" id="departure-dates-title">📅 출발 일정</h6>
                </div>
                <div class="card-body">
                    <div class="row" role="list" aria-label="출발 일정 목록">
                        ${departureDates.map(date => `
                            <div class="col-md-4 mb-2" role="listitem">
                                <span class="badge bg-primary">${escapeHtml(date)}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
            ` : ''}
            
            ${groupDiscount ? `
            <div class="card mt-3" role="region" aria-labelledby="group-discount-title">
                <div class="card-header">
                    <h6 class="mb-0" id="group-discount-title">👥 단체 할인</h6>
                </div>
                <div class="card-body">
                    ${Object.entries(groupDiscount).map(([group, discount]) => `
                        <p><strong>${escapeHtml(group)}:</strong> ${escapeHtml(discount)}</p>
                    `).join('')}
                </div>
            </div>
            ` : ''}
            
            <div class="card mt-3">
                <div class="card-body text-center">
                    <p class="mb-2"><strong>상품 코드:</strong> ${productCode}</p>
                    <button class="btn btn-primary btn-lg" 
                            data-action="request-quote"
                            data-product-code="${productCode}"
                            aria-label="견적 요청하기 - 상품 코드 ${productCode}">
                        견적 요청하기
                    </button>
                </div>
            </div>
        `;
    } catch (error) {
        console.error('Error displaying package info:', error);
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    <h5><i class="fas fa-exclamation-triangle me-2"></i>오류가 발생했습니다</h5>
                    <p>패키지 정보를 불러오는 중 문제가 발생했습니다.</p>
                </div>
            `;
        }
    }
}

export function displayAttractions(attractions) {
    const container = document.getElementById('attractionsList');
    if (!container) return;
    container.innerHTML = attractions.map(attraction => `
        <div class="col-md-4 mb-4">
            <div class="attraction-card">
                <img src="${attraction.image}" alt="${attraction.name}" class="attraction-image">
                <h4>${attraction.name}</h4>
                <p>${attraction.description}</p>
            </div>
        </div>
    `).join('');
}

/**
 * 경비 차트 표시
 * @param {Object} budget - 예산 데이터
 * @param {string} totalPrice - 총 가격
 * @param {string} containerId - 컨테이너 ID
 */
export function displayBudgetChart(budget, totalPrice, containerId) {
    try {
        const container = document.getElementById(containerId);
        if (!container) {
            console.warn(`Container #${containerId} not found`);
            return;
        }

        // 데이터 검증
        if (!budget || typeof budget !== 'object' || Object.keys(budget).length === 0) {
            container.innerHTML = '<div class="alert alert-info" role="status">경비 정보를 준비 중입니다.</div>';
            return;
        }

        // 안전한 숫자 파싱 및 총합 계산
        const budgetEntries = Object.entries(budget).map(([category, amount]) => {
            const safeAmount = safeParseInt(amount, 0, 0);
            return [escapeHtml(category), safeAmount];
        });

        const total = budgetEntries.reduce((sum, [, amount]) => sum + amount, 0);

        if (total === 0) {
            container.innerHTML = '<div class="alert alert-warning" role="alert">경비 데이터가 유효하지 않습니다.</div>';
            return;
        }

        // 고유 ID 생성 (축제별로 구분)
        const festivalId = containerId.includes('-') ? containerId.split('-').pop() : 'default';
        const chartId = `budgetChart-${festivalId}`;

        container.innerHTML = `
            <div class="budget-analysis" role="region" aria-labelledby="budget-analysis-title">
                <h4 class="text-center mb-4" id="budget-analysis-title">예상 여행 경비 분석</h4>
                
                <div class="row">
                    <div class="col-md-8">
                        <div role="img" aria-label="경비 분포 차트">
                            <canvas id="${chartId}" width="400" height="200"></canvas>
                        </div>
                    </div>
                    
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-header">
                                <h6 class="mb-0">경비 내역</h6>
                            </div>
                            <div class="card-body" role="list" aria-label="경비 항목 목록">
                                ${budgetEntries.map(([category, amount]) => {
                                    const percentage = total > 0 ? ((amount / total) * 100).toFixed(1) : '0.0';
                                    return `
                                        <div class="mb-2" role="listitem">
                                            <div class="d-flex justify-content-between">
                                                <span>${category}</span>
                                                <span>₩${amount.toLocaleString()}</span>
                                            </div>
                                            <div class="progress" style="height: 8px;" role="progressbar" 
                                                 aria-valuenow="${percentage}" 
                                                 aria-valuemin="0" 
                                                 aria-valuemax="100" 
                                                 aria-label="${category} 비율 ${percentage}%">
                                                <div class="progress-bar" style="width: ${percentage}%"></div>
                                            </div>
                                            <small class="text-muted">${percentage}%</small>
                                        </div>
                                    `;
                                }).join('')}
                                <hr>
                                <div class="d-flex justify-content-between">
                                    <strong>총 예상 경비</strong>
                                    <strong>₩${total.toLocaleString()}</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Chart.js 로드 확인 및 차트 생성
        waitForElement(chartId, (canvasElement) => {
            if (!isChartJsLoaded()) {
                console.error('Chart.js is not loaded');
                container.innerHTML = `
                    <div class="alert alert-danger" role="alert">
                        <h5><i class="fas fa-exclamation-triangle me-2"></i>차트를 불러올 수 없습니다</h5>
                        <p>차트 라이브러리를 불러오는 중 문제가 발생했습니다. 페이지를 새로고침해주세요.</p>
                    </div>
                `;
                return;
            }

            try {
                // 기존 차트 인스턴스 정리
                if (budgetChartInstance) {
                    budgetChartInstance.destroy();
                    budgetChartInstance = null;
                }

                const ctx = canvasElement.getContext('2d');
                budgetChartInstance = new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        labels: budgetEntries.map(([category]) => category),
                        datasets: [{
                            data: budgetEntries.map(([, amount]) => amount),
                            backgroundColor: [
                                '#FF6384', '#36A2EB', '#FFCE56', 
                                '#4BC0C0', '#9966FF', '#FF9F40'
                            ]
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: true,
                        plugins: {
                            legend: {
                                position: 'bottom'
                            },
                            tooltip: {
                                callbacks: {
                                    label: function(context) {
                                        const label = context.label || '';
                                        const value = context.parsed || 0;
                                        const percentage = total > 0 ? ((value / total) * 100).toFixed(1) : '0.0';
                                        return `${label}: ₩${value.toLocaleString()} (${percentage}%)`;
                                    }
                                }
                            }
                        }
                    }
                });
            } catch (error) {
                console.error('Error creating budget chart:', error);
                container.innerHTML = `
                    <div class="alert alert-danger" role="alert">
                        <h5><i class="fas fa-exclamation-triangle me-2"></i>차트 생성 오류</h5>
                        <p>차트를 생성하는 중 문제가 발생했습니다.</p>
                    </div>
                `;
            }
        });
    } catch (error) {
        console.error('Error displaying budget chart:', error);
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    <h5><i class="fas fa-exclamation-triangle me-2"></i>오류가 발생했습니다</h5>
                    <p>경비 정보를 불러오는 중 문제가 발생했습니다.</p>
                </div>
            `;
        }
    }
}

function getTierFeaturesForFestival(festivalId, festival) {
    const festivalName = festival?.name || '';
    if (festivalName.includes('투모로우랜드') || festivalName.includes('Tomorrowland') || festivalName.includes('EDM')) {
        return {
            basic: ['호스텔 도미토리','1일권','셔틀버스 왕복','페스티벌 팔찌'],
            standard: ['3성급 호텔','2일권','전용 셔틀','굿즈 패키지','공연 일정표'],
            premium: ['4성급 호텔','풀 패스 3일권','백스테이지 투어','VIP 바 이용권','아티스트 만남']
        };
    }
    if (festivalName.includes('홀리') || festivalName.includes('Holi') || festivalName.includes('송크란') || festivalName.includes('Songkran')) {
        return {
            basic: ['2성급 호텔','색가루 1kg','방수 가방','기본 의상'],
            standard: ['3성급 호텔','색가루 2kg','방수 백팩','전통 의상 대여','포토 서비스'],
            premium: ['4성급 호텔','무제한 색가루','프리미엄 방수 세트','전통 의상+액세서리','전문 포토그래퍼']
        };
    }
    if (festivalName.includes('축제') || festivalName.includes('festival') || festivalName.includes('페스티벌')) {
        return {
            basic: ['3성급 숙박','일반 입장권','그룹 가이드','기본 식사 쿠폰'],
            standard: ['4성급 숙박','우선 입장권','한국인 전담 가이드','식사 2회 포함','여행자 보험'],
            premium: ['5성급 숙박','VIP 입장권','전용 가이드','식사 풀코스','VIP 라운지 이용권']
        };
    }
    return {};
}

// [Removed] Duplicate initDemandSimulator (legacy version without containerId) and its chart helper
// The app uses the containerId-based initDemandSimulator defined later in this file.

// ====== 인카드 패키지 기획 토글/계산/저장 ======
function getAllFestivals() {
    return festivalsData;
}

export function togglePlanner(event, festivalId, baseDays) {
    if (event && typeof event.stopPropagation === 'function') event.stopPropagation();
    const panel = document.getElementById(`planner-${festivalId}`);
    if (!panel) return;
    
    const isHidden = panel.getAttribute('aria-hidden') === 'true' || panel.hasAttribute('hidden');
    
    // 모든 패널 닫기
    document.querySelectorAll('.planner-panel').forEach(p => {
        p.setAttribute('hidden', '');
        p.setAttribute('aria-hidden', 'true');
    });
    
    if (isHidden) {
        // 패널 열기
        panel.removeAttribute('hidden');
        panel.setAttribute('aria-hidden', 'false');
        panel.classList.add('show');
        
        try { 
            updatePlanEstimate(festivalId, baseDays); 
        } catch (e) {
            console.warn('Failed to update plan estimate:', e);
        }
        
        // 스크롤 및 포커스 관리
        panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
        // 첫 번째 입력 필드에 포커스 (접근성)
        setTimeout(() => {
            const firstInput = panel.querySelector('input[type="date"], input[type="number"]');
            if (firstInput) {
                firstInput.focus();
            }
        }, 100);
    } else {
        // 패널 닫기
        panel.setAttribute('hidden', '');
        panel.setAttribute('aria-hidden', 'true');
        panel.classList.remove('show');
    }
}

export function updatePlanEstimate(festivalId, baseDaysParam) {
    const allFestivals = getAllFestivals();
    const festival = allFestivals[festivalId];
    if (!festival) return;
    const baseDays = baseDaysParam || (parseInt((festival.duration || '').replace(/[^0-9]/g, '')) || 5);
    const days = parseInt(document.getElementById(`plan-${festivalId}-days`)?.value || baseDays, 10);
    const people = Math.max(1, parseInt(document.getElementById(`plan-${festivalId}-people`)?.value || '1', 10));
    const budgetCap = parseInt(document.getElementById(`plan-${festivalId}-budget`)?.value || '0', 10) || null;

    const includeWrap = document.getElementById(`plan-${festivalId}-includes`);
    const selectedCategories = Array.from(includeWrap?.querySelectorAll('input[type="checkbox"]:checked') || []).map(i => i.value);

    const baseBudget = festival.budget || {};
    const dailyScaleKeys = ['숙박', '식사'];
    const scaledBudget = Object.entries(baseBudget).reduce((acc, [k, v]) => {
        acc[k] = dailyScaleKeys.includes(k) ? Math.round((v || 0) * (days / baseDays)) : (v || 0);
        return acc;
    }, {});

    const perPersonSelected = selectedCategories.reduce((sum, k) => sum + (scaledBudget[k] || 0), 0);
    const total = perPersonSelected * people;

    const summaryEl = document.getElementById(`plan-${festivalId}-summary`);
    if (!summaryEl) return;
    const capInfo = budgetCap ? (perPersonSelected <= budgetCap ? `<span class="badge bg-success">예산 범위 내</span>` : `<span class="badge bg-danger">예산 초과</span>`) : '';
    summaryEl.innerHTML = `
        <div class="summary-card">
            <div class="row g-3">
                <div class="col-sm-6">
                    <div><strong>인원:</strong> ${people}명</div>
                    <div><strong>일정:</strong> ${days}일</div>
                    <div><strong>포함:</strong> ${selectedCategories.join(', ') || '선택 없음'}</div>
                </div>
                <div class="col-sm-6 text-sm-end">
                    <div><strong>1인 예상가:</strong> ₩${perPersonSelected.toLocaleString()} ${capInfo}</div>
                    <div><strong>총 예상가:</strong> <span class="text-primary fw-bold">₩${total.toLocaleString()}</span></div>
                </div>
            </div>
        </div>`;
}

export function savePlan(festivalId) {
    const days = parseInt(document.getElementById(`plan-${festivalId}-days`)?.value || '0', 10);
    const people = parseInt(document.getElementById(`plan-${festivalId}-people`)?.value || '0', 10);
    const start = document.getElementById(`plan-${festivalId}-start`)?.value || '';
    const budgetCap = parseInt(document.getElementById(`plan-${festivalId}-budget`)?.value || '0', 10) || null;
    const includes = Array.from(document.querySelectorAll(`#plan-${festivalId}-includes input[type="checkbox"]:checked`)).map(i => i.value);
    const spots = Array.from(document.querySelectorAll(`#plan-${festivalId}-spots input[type="checkbox"]:checked`)).map(i => i.value);
    const plans = JSON.parse(localStorage.getItem('package-plans') || '{}');
    plans[festivalId] = { start, days, people, budgetCap, includes, spots, savedAt: new Date().toISOString() };
    localStorage.setItem('package-plans', JSON.stringify(plans));
    const summaryEl = document.getElementById(`plan-${festivalId}-summary`);
    if (summaryEl) {
        const note = document.createElement('div');
        note.className = 'alert alert-success mt-2 py-2 px-3';
        note.textContent = '현재 계획이 저장되었습니다.';
        summaryEl.appendChild(note);
        setTimeout(() => note.remove(), 2000);
    }
}

export function copyPlan(festivalId) {
    const summaryText = document.getElementById(`plan-${festivalId}-summary`)?.innerText || '';
    if (!summaryText) return;
    navigator.clipboard?.writeText(summaryText).then(() => {
        const summaryEl = document.getElementById(`plan-${festivalId}-summary`);
        if (summaryEl) {
            const note = document.createElement('div');
            note.className = 'alert alert-info mt-2 py-2 px-3';
            note.textContent = '요약이 클립보드에 복사되었습니다.';
            summaryEl.appendChild(note);
            setTimeout(() => note.remove(), 2000);
        }
    }).catch(() => {});
}

export function prefillPlannerFromTier(festivalId, pricePerPerson, tierName) {
    const isOpen = !document.getElementById(`planner-${festivalId}`)?.hidden;
    if (!isOpen) togglePlanner(null, festivalId);
    const budgetInput = document.getElementById(`plan-${festivalId}-budget`);
    if (budgetInput) {
        budgetInput.value = pricePerPerson;
        try { updatePlanEstimate(festivalId); } catch {}
    }
    updateSimulatorFromTier(festivalId, pricePerPerson);

    const btn = window.event?.target;
    if (btn) {
        const originalText = btn.innerHTML;
        const originalClass = btn.className;
        btn.innerHTML = `<i class="fas fa-check-circle"></i> ${tierName} 선택됨!`;
        btn.classList.remove('btn-outline-primary', 'btn-primary');
        btn.classList.add('btn-success');
        btn.disabled = true;
        document.querySelectorAll('.tier-select-btn').forEach(b => { if (b !== btn) { b.classList.remove('btn-success'); b.classList.add('btn-outline-secondary'); } });
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.className = originalClass;
            btn.disabled = false;
            document.querySelectorAll('.tier-select-btn').forEach(b => { if (b !== btn) b.classList.remove('btn-outline-secondary'); });
        }, 3000);
    }
    const simulator = document.getElementById('demandSimulator');
    if (simulator) simulator.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function updateSimulatorFromTier(festivalId, pricePerPerson) {
    const priceEl = document.getElementById('sim-price');
    if (priceEl && priceEl.closest('.modal.show')) {
        const modalFestivalId = document.getElementById('festivalModal')?.dataset?.festivalId;
        if (modalFestivalId === festivalId) {
            priceEl.value = pricePerPerson;
            const runBtn = document.getElementById('sim-run');
            if (runBtn) runBtn.click();
        }
    }
}

// ====== 하이라이트/업셀링/티어 보조 ======
export function displayTierValueProps(festivalId) {
    const container = document.getElementById('tierValueProps');
    if (!container) return;
    const items = [
        { tier: 'Basic', points: ['가격 민감층 타겟: 필수 경험 중심 구성','현지 교통/합류형으로 비용 최소화','핵심 일정만 압축, 짧은 휴가에 적합'] },
        { tier: 'Standard', points: ['가성비와 편의의 균형: 4성급/한국인 가이드','핵심+근교 관광 연계로 만족도 제고','단체/커플/친구 여행 표준 선택'] },
        { tier: 'Premium', points: ['희소좌석·전용차량·라운지 등 프리미엄 경험','혼잡 구간 피크타임 회피·동선 최적화','VIP 서비스로 후기/재구매 유도'] }
    ];
    container.innerHTML = items.map(it => `
        <div class="value-prop-item">
            <div class="value-prop-badge ${it.tier.toLowerCase()}">${it.tier}</div>
            <ul>${it.points.map(p => `<li><i class="fas fa-star text-warning"></i> ${p}</li>`).join('')}</ul>
        </div>`).join('');
}

export function displayUpsellOptions(festivalId) {
    const listEl = document.getElementById('upsellList');
    const sumEl = document.getElementById('upsellSum');
    const applySimBtn = document.getElementById('applyUpsellToSim');
    const applyPlanBtn = document.getElementById('applyUpsellToPlanner');
    if (!listEl || !sumEl || !applySimBtn || !applyPlanBtn) return;

    const festival = festivalsData[festivalId];
    const upsells = getUpsellsForFestival(festivalId, festival);
    listEl.innerHTML = upsells.map((u, idx) => `
        <label class="form-check option-item ${idx === 0 ? 'popular' : ''}">
            <input class="form-check-input upsell-check" type="checkbox" data-key="${u.key}" data-price="${u.price}" id="upsell-${u.key}" />
            <span class="form-check-label">
                <i class="fas ${u.icon} option-icon"></i>
                <div class="option-details"><strong>${u.label}</strong>${idx === 0 ? '<span class="badge bg-danger ms-2">인기</span>' : ''}<small class="d-block text-muted">${u.desc}</small></div>
            </span>
            <span class="option-price"><small class="d-block text-muted" style="font-size: 0.7rem;">1인당</small>₩${u.price.toLocaleString()}</span>
        </label>`).join('');

    const recalc = () => {
        const checkedItems = Array.from(listEl.querySelectorAll('.upsell-check:checked'));
        const total = checkedItems.reduce((s, el) => s + (parseInt(el.dataset.price || '0', 10) || 0), 0);
        sumEl.textContent = `₩${total.toLocaleString()}`;
        const countBadge = document.getElementById('upsellCountBadge');
        if (countBadge) {
            countBadge.textContent = checkedItems.length;
            countBadge.style.display = checkedItems.length > 0 ? 'inline-block' : 'none';
        }
        return total;
    };

    listEl.addEventListener('change', (e) => {
        recalc();
        if (e.target.classList.contains('upsell-check')) {
            const label = e.target.closest('.option-item');
            if (e.target.checked) label.classList.add('selected'); else label.classList.remove('selected');
        }
    });
    recalc();

    applySimBtn.onclick = () => {
        const add = recalc();
        if (add === 0) return;
        const priceEl = document.getElementById('sim-price');
        if (priceEl) {
            const base = parseInt(priceEl.value || '0', 10);
            priceEl.value = Math.max(0, base + add);
            priceEl.dispatchEvent(new Event('input'));
            applySimBtn.innerHTML = '<i class="fas fa-check"></i> 적용됨!';
            applySimBtn.classList.add('btn-success');
            applySimBtn.classList.remove('btn-primary');
            setTimeout(() => {
                applySimBtn.innerHTML = '<i class="fas fa-calculator"></i> 시뮬레이터에 적용';
                applySimBtn.classList.remove('btn-success');
                applySimBtn.classList.add('btn-primary');
            }, 2000);
        }
    };

    applyPlanBtn.onclick = () => {
        const add = recalc();
        if (add === 0) return;
        const budgetInput = document.getElementById(`plan-${festivalId}-budget`);
        if (budgetInput) {
            const base = parseInt(budgetInput.value || '0', 10);
            budgetInput.value = Math.max(0, base + add);
            try { updatePlanEstimate(festivalId); } catch {}
            applyPlanBtn.innerHTML = '<i class="fas fa-check"></i> 적용됨!';
            applyPlanBtn.classList.add('btn-success');
            applyPlanBtn.classList.remove('btn-outline-primary');
            setTimeout(() => {
                applyPlanBtn.innerHTML = '<i class="fas fa-suitcase-rolling"></i> 기획에 적용';
                applyPlanBtn.classList.remove('btn-success');
                applyPlanBtn.classList.add('btn-outline-primary');
            }, 2000);
        } else {
            togglePlanner(null, festivalId);
            setTimeout(() => {
                const bi = document.getElementById(`plan-${festivalId}-budget`);
                if (bi) {
                    const base2 = parseInt(bi.value || '0', 10);
                    bi.value = Math.max(0, base2 + add);
                    try { updatePlanEstimate(festivalId); } catch {}
                }
            }, 100);
        }
    };
}

function getUpsellsForFestival(festivalId, festival) {
    const festivalName = festival?.name || '';
    const DEFAULT_UPSELLS = [
        { key: 'vip-seat', label: '프리미엄 좌석 업그레이드', price: 120000, desc: '축제 메인데이 프리미엄 구역', icon: 'fa-crown' },
        { key: 'airport-fasttrack', label: '공항 패스트트랙', price: 40000, desc: '출입국·보안 우선 통로', icon: 'fa-plane-departure' },
        { key: 'private-transfer', label: '전용 차량 픽업/샌딩', price: 80000, desc: '공항-호텔 왕복 전용차량', icon: 'fa-car' },
        { key: 'food-experience', label: '현지 미식 체험', price: 60000, desc: '추천 레스토랑 테이스팅', icon: 'fa-utensils' },
        { key: 'extended-insurance', label: '보험 업그레이드', price: 30000, desc: '보장한도 상향', icon: 'fa-shield-alt' }
    ];
    if (festivalName.includes('Tomorrowland') || festivalName.includes('투모로우랜드')) {
        return [
            { key: 'backstage', label: '백스테이지 투어', price: 200000, desc: 'DJ 부스 방문 & 포토', icon: 'fa-music' },
            { key: 'vip-camping', label: 'VIP 캠핑 업그레이드', price: 150000, desc: 'DreamVille 프리미엄 구역', icon: 'fa-campground' },
            { key: 'festival-merch', label: '공식 굿즈 패키지', price: 80000, desc: '티셔츠, 후드, 팔찌 세트', icon: 'fa-shopping-bag' },
            ...DEFAULT_UPSELLS.slice(1, 3)
        ];
    }
    if (festivalName.includes('홀리') || festivalName.includes('Holi') || festivalName.includes('송크란') || festivalName.includes('Songkran')) {
        return [
            { key: 'photographer', label: '전문 포토그래퍼', price: 100000, desc: '반나절 전문 촬영 서비스', icon: 'fa-camera' },
            { key: 'costume-premium', label: '프리미엄 전통 의상', price: 50000, desc: '고급 소재 + 액세서리', icon: 'fa-tshirt' },
            { key: 'color-unlimited', label: '무제한 색가루', price: 40000, desc: '원하는 만큼 색가루 사용', icon: 'fa-fill-drip' },
            ...DEFAULT_UPSELLS.slice(2, 4)
        ];
    }
    if (festivalName.includes('프린지') || festivalName.includes('Fringe')) {
        return [
            { key: 'show-tickets', label: '추가 공연 티켓 3매', price: 150000, desc: '인기 공연 사전 예약', icon: 'fa-ticket-alt' },
            { key: 'artist-meetup', label: '아티스트 만남', price: 80000, desc: '공연 후 Q&A 세션', icon: 'fa-users' },
            { key: 'workshop', label: '워크숍 참가', price: 70000, desc: '연기/코미디 1일 워크숍', icon: 'fa-theater-masks' },
            ...DEFAULT_UPSELLS.slice(3)
        ];
    }
    return DEFAULT_UPSELLS;
}

// ====== 가격/통화/디데이 보조 ======
function setupPriceBadge(festivalId, festival) {
    const priceBadge = document.getElementById('detailPriceBadge');
    if (!priceBadge) return;
    const localCurrency = getCurrencyForFestival(festivalId, festival);
    const currencyOptions = [
        { code: 'KRW', label: 'KRW(₩)' },
        localCurrency && localCurrency !== 'KRW' ? { code: localCurrency, label: localCurrency } : null
    ].filter(Boolean);

    priceBadge.innerHTML = `
        <small>1인 예상 비용</small>
        <div class="price-large" id="pricePrimary">${festival.price || ''}</div>
        <div class="price-currency-wrap">
            <select id="priceCurrencySelect" class="price-currency-select">
                ${currencyOptions.map(opt => `<option value="${opt.code}">${opt.label}</option>`).join('')}
            </select>
            <div class="price-local-line" id="priceLocalLine"></div>
        </div>`;

    updateLocalCurrencyLine(festival, localCurrency).catch(() => {});
    const sel = document.getElementById('priceCurrencySelect');
    sel?.addEventListener('change', async () => {
        const selectTo = sel.value;
        if (selectTo === 'KRW') {
            document.getElementById('pricePrimary').textContent = festival.price || '';
        } else {
            const rate = await getExchangeRate('KRW', selectTo);
            if (rate) {
                const converted = convertPrice(festival.price || '₩0', rate);
                document.getElementById('pricePrimary').textContent = `${formatCurrencySymbol(selectTo)}${converted}`;
            }
        }
    });
}

function getCurrencyForFestival(festivalId, festival) {
    try {
        const loc = (window.festivalLocations || {})[festivalId];
        if (loc && loc.currency) return loc.currency;
    } catch {}
    const cc = (festival.countryCode || '').toLowerCase();
    const map = { es: 'EUR', de: 'EUR', fr: 'EUR', it: 'EUR', be: 'EUR', nl: 'EUR', pt: 'EUR', br: 'BRL', gb: 'GBP', uk: 'GBP', cn: 'CNY', jp: 'JPY', tw: 'TWD', in: 'INR', th: 'THB', mx: 'MXN', us: 'USD', ca: 'CAD', au: 'AUD' };
    return map[cc] || 'KRW';
}

function formatCurrencySymbol(code) {
    const sym = { KRW: '₩', USD: '$', EUR: '€', JPY: '¥', GBP: '£', CNY: '¥', BRL: 'R$', TWD: 'NT$', INR: '₹', THB: '฿', MXN: '$', CAD: 'C$', AUD: 'A$' };
    return sym[code] || `${code} `;
}

async function updateLocalCurrencyLine(festival, localCurrency) {
    const line = document.getElementById('priceLocalLine');
    if (!line || !localCurrency || localCurrency === 'KRW') { if (line) line.textContent = ''; return; }
    const rate = await getExchangeRate('KRW', localCurrency);
    if (!rate) { line.textContent = ''; return; }
    const converted = convertPrice(festival.price || '₩0', rate);
    line.innerHTML = `<i class="fas fa-money-bill-wave"></i> ${formatCurrencySymbol(localCurrency)}${converted} (${localCurrency})`;
}

function convertPrice(priceKrwString, rate) {
    const n = parseInt(String(priceKrwString).replace(/[^0-9]/g, ''), 10) || 0;
    const converted = Math.round(n * (rate || 0));
    return (converted).toLocaleString();
}

function updateDDayBadge(nextDateStr) {
    const badge = document.getElementById('dDayBadge');
    if (!badge) return;
    const label = computeDDay(nextDateStr);
    if (!label) { badge.classList.add('d-none'); return; }
    badge.textContent = label;
    badge.classList.remove('d-none');
}

/**
 * 여행 일정표 표시
 * @param {string} festivalId - 축제 ID
 * @param {string} containerId - 컨테이너 ID
 */
export function displayItinerary(festivalId, containerId) {
    try {
        const container = document.getElementById(containerId);
        if (!container) {
            console.warn(`Container #${containerId} not found`);
            return;
        }

        // 데이터 검증 및 가져오기
        let rich = null;
        try {
            if (typeof window !== 'undefined' && window.itineraryRichData) {
                rich = window.itineraryRichData[festivalId] || null;
            }
        } catch (error) {
            console.warn('Error accessing itineraryRichData:', error);
        }

        const itinerary = rich || (itineraryData && itineraryData[festivalId]) || null;
        
        if (!itinerary || !itinerary.days || !isNonEmptyArray(itinerary.days)) {
            container.innerHTML = '<div class="alert alert-info" role="status">일정 정보를 준비 중입니다.</div>';
            return;
        }

        // 안전한 데이터 처리
        const itineraryTitle = escapeHtml(itinerary.title || '여행 일정표');
        const daysCount = itinerary.days.length;
        const fallbackImage = '/images/placeholder.jpg';

        container.innerHTML = `
            <div class="itinerary-container" role="region" aria-labelledby="itinerary-title">
                <div class="itinerary-header mb-4 text-center">
                    <h5 class="text-primary mb-2" id="itinerary-title">${itineraryTitle}</h5>
                    <p class="text-muted">${daysCount}일 일정으로 구성되어 있습니다</p>
                </div>
                
                <div class="timeline" role="list" aria-label="여행 일정 타임라인">
                    ${itinerary.days.map((day, index) => {
                        const dayTitle = escapeHtml(day.title || `Day ${day.day || index + 1}`);
                        const dayDescription = escapeHtml(day.description || '');
                        const dayImage = day.image ? getSafeImageUrl(day.image, fallbackImage) : null;
                        const dayNumber = safeParseInt(day.day, index + 1, 1);
                        const isLast = index === itinerary.days.length - 1;
                        const activities = isNonEmptyArray(day.activities) ? day.activities : [];

                        return `
                            <div class="timeline-item ${isLast ? 'timeline-item-last' : ''}" role="listitem" aria-label="Day ${dayNumber}">
                                <div class="timeline-marker">
                                    <div class="day-badge" aria-label="Day ${dayNumber}">
                                        <span class="day-number">Day</span>
                                        <span class="day-digit">${dayNumber}</span>
                                    </div>
                                </div>
                                <div class="timeline-content">
                                    <div class="card shadow-sm">
                                        <div class="card-header bg-gradient-primary text-white">
                                            <h6 class="mb-0">${dayTitle}</h6>
                                        </div>
                                        <div class="card-body">
                                            ${dayImage || dayDescription ? `
                                                <div class="row g-3 align-items-stretch mb-3">
                                                    ${dayImage ? `
                                                        <div class="col-md-5">
                                                            <div class="itinerary-image-wrapper skeleton">
                                                                <img src="${dayImage}" 
                                                                     alt="${dayTitle} 일정 이미지" 
                                                                     class="itinerary-image" 
                                                                     loading="lazy" 
                                                                     decoding="async" 
                                                                     referrerpolicy="no-referrer"
                                                                     onerror="this.onerror=null; this.src='${fallbackImage}'"/>
                                                            </div>
                                                        </div>
                                                    ` : ''}
                                                    <div class="col-md-${dayImage ? '7' : '12'}">
                                                        ${dayDescription ? `<p class="text-muted mb-0">${dayDescription}</p>` : ''}
                                                    </div>
                                                </div>
                                            ` : ''}
                                            ${activities.length > 0 ? `
                                                <div class="activities-timeline" role="list" aria-label="Day ${dayNumber} 활동 목록">
                                                    ${activities.map((activity, actIndex) => {
                                                        const actTime = escapeHtml(activity.time || '');
                                                        const actName = escapeHtml(activity.activity || '');
                                                        const actLocation = escapeHtml(activity.location || '');
                                                        const isLastActivity = actIndex === activities.length - 1;
                                                        return `
                                                            <div class="activity-item ${isLastActivity ? 'activity-item-last' : ''}" role="listitem">
                                                                <div class="activity-time">
                                                                    <span class="badge bg-info" aria-label="시간 ${actTime}">${actTime}</span>
                                                                </div>
                                                                <div class="activity-details">
                                                                    <div class="activity-title">${actName}</div>
                                                                    ${actLocation ? `
                                                                        <div class="activity-location">
                                                                            <i class="fas fa-map-marker-alt text-danger" aria-hidden="true"></i>
                                                                            <small class="text-muted">${actLocation}</small>
                                                                        </div>
                                                                    ` : ''}
                                                                </div>
                                                            </div>
                                                        `;
                                                    }).join('')}
                                                </div>
                                            ` : '<p class="text-muted small">활동 정보를 준비 중입니다.</p>'}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
                
                <div class="itinerary-footer mt-4 text-center">
                    <p class="text-muted" role="note">
                        <i class="fas fa-info-circle" aria-hidden="true"></i>
                        일정은 현지 상황에 따라 변경될 수 있습니다
                    </p>
                </div>
            </div>
        `;

        // 이미지 스켈레톤 처리 및 페이드인
        try {
            const imgs = container.querySelectorAll('.itinerary-image');
            imgs.forEach(img => {
                const done = () => {
                    const wrap = img.closest('.itinerary-image-wrapper');
                    if (wrap) wrap.classList.remove('skeleton');
                    img.classList.add('loaded');
                };
                if (img.complete) {
                    done();
                } else {
                    img.addEventListener('load', done, { once: true });
                    img.addEventListener('error', () => {
                        img.src = fallbackImage;
                        done();
                    }, { once: true });
                }
            });
        } catch (error) {
            console.warn('Error processing itinerary images:', error);
        }
    } catch (error) {
        console.error('Error displaying itinerary:', error);
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    <h5><i class="fas fa-exclamation-triangle me-2"></i>오류가 발생했습니다</h5>
                    <p>일정 정보를 불러오는 중 문제가 발생했습니다.</p>
                </div>
            `;
        }
    }
}

/**
 * 상품 구성 표시 (3단계 티어)
 * @param {string} festivalId - 축제 ID
 * @param {string} containerId - 컨테이너 ID
 */
export function displayProductTiers(festivalId, containerId) {
    try {
        const container = document.getElementById(containerId);
        if (!container) {
            console.warn(`Container #${containerId} not found`);
            return;
        }

        // 데이터 검증
        if (!festivalId || typeof festivalId !== 'string') {
            container.innerHTML = '<div class="alert alert-warning" role="alert">축제 ID가 유효하지 않습니다.</div>';
            return;
        }

        const businessData = getBusinessData(festivalId);
        if (!businessData || typeof businessData !== 'object') {
            container.innerHTML = '<div class="alert alert-info" role="status">상품 구성 정보를 준비 중입니다.</div>';
            return;
        }
        
        // 안전한 데이터 추출 및 검증
        const tiers = isNonEmptyArray(businessData.tiers) ? businessData.tiers : [];
        const totalVariableCost = safeParseInt(businessData.totalVariableCost, 0, 0);
        const marginRate = safeParseFloat(businessData.marginRate, 0, 0);
        const breakEvenPoint = safeParseInt(businessData.breakEvenPoint, 0, 0);

        if (tiers.length === 0) {
            container.innerHTML = '<div class="alert alert-warning" role="alert">상품 티어 정보가 없습니다.</div>';
            return;
        }

        // 0으로 나누기 방지
        const safeMarginRate = isNaN(marginRate) ? 0 : marginRate;
        const safeBreakEvenPoint = breakEvenPoint > 0 ? breakEvenPoint : null;
    
        // 최고 이익률 계산 (0으로 나누기 방지)
        const premiumTier = tiers.length > 2 ? tiers[2] : tiers[tiers.length - 1];
        const maxProfitRate = premiumTier && premiumTier.price > 0 
            ? (((premiumTier.price - totalVariableCost) / premiumTier.price) * 100).toFixed(1)
            : '0.0';

        container.innerHTML = `
            <div class="product-tiers" role="region" aria-labelledby="product-tiers-title">
                <h4 class="text-center mb-4" id="product-tiers-title">상품 구성 및 수익성 분석</h4>
                
                <!-- 수익성 개요 -->
                <div class="row mb-4">
                    <div class="col-12">
                        <div class="alert alert-info" role="region" aria-label="수익성 개요">
                            <div class="row text-center">
                                <div class="col-md-3">
                                    <h6><i class="fas fa-coins" aria-hidden="true"></i> 1인당 변동비용</h6>
                                    <span class="h5 text-danger">₩${totalVariableCost.toLocaleString()}</span>
                                </div>
                                <div class="col-md-3">
                                    <h6><i class="fas fa-chart-line" aria-hidden="true"></i> 평균 공헌이익률</h6>
                                    <span class="h5 text-success">${safeMarginRate.toFixed(1)}%</span>
                                </div>
                                <div class="col-md-3">
                                    <h6><i class="fas fa-balance-scale" aria-hidden="true"></i> 손익분기점</h6>
                                    <span class="h5 text-primary">${safeBreakEvenPoint || 'N/A'}명</span>
                                </div>
                                <div class="col-md-3">
                                    <h6><i class="fas fa-trophy" aria-hidden="true"></i> 최고 이익률</h6>
                                    <span class="h5 text-warning">${maxProfitRate}%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- 상품 티어 -->
                <div class="row" role="list" aria-label="상품 티어 목록">
                    ${tiers.map((tier, index) => {
                        const tierPrice = safeParseInt(tier.price, 0, 0);
                        const profit = tierPrice - totalVariableCost;
                        const profitRate = tierPrice > 0 ? ((profit / tierPrice) * 100).toFixed(1) : '0.0';
                        const colors = ['secondary', 'primary', 'warning'];
                        const colorClass = colors[index] || 'secondary';
                        const isRecommended = index === 1;
                        const tierName = escapeHtml(tier.name || '');
                        const tierDesc = escapeHtml(tier.description || '');
                        const tierFeatures = isNonEmptyArray(tier.features) ? tier.features : [];
                        
                        return `
                            <div class="col-lg-4 col-md-6 mb-4" role="listitem">
                                <div class="card h-100 ${isRecommended ? 'border-primary shadow' : ''}" 
                                     aria-label="${tierName} 상품 티어">
                                    ${isRecommended ? '<div class="badge bg-primary position-absolute top-0 start-50 translate-middle" aria-label="추천 상품">추천</div>' : ''}
                                    
                                    <div class="card-header bg-${colorClass} text-white text-center position-relative">
                                        <h5 class="mb-0">${tierName}</h5>
                                        <h4 class="mt-2 mb-1">₩${tierPrice.toLocaleString()}</h4>
                                        <small class="d-block">이익률: ${profitRate}%</small>
                                    </div>
                                    
                                    <div class="card-body d-flex flex-column">
                                        <p class="text-muted mb-3">${tierDesc}</p>
                                        
                                        <h6 class="mb-2">포함 서비스:</h6>
                                        ${tierFeatures.length > 0 ? `
                                            <ul class="list-unstyled flex-grow-1 mb-3" role="list" aria-label="${tierName} 포함 서비스">
                                                ${tierFeatures.slice(0, 5).map(feature => `
                                                    <li class="mb-2" role="listitem">
                                                        <i class="fas fa-check text-${colorClass} me-2" aria-hidden="true"></i>
                                                        <small>${escapeHtml(feature)}</small>
                                                    </li>
                                                `).join('')}
                                                ${tierFeatures.length > 5 ? 
                                                    `<li class="mb-2 text-muted">
                                                        <i class="fas fa-plus me-2" aria-hidden="true"></i>
                                                        <small>+ ${tierFeatures.length - 5}개 추가 혜택</small>
                                                    </li>` : ''
                                                }
                                            </ul>
                                        ` : '<p class="text-muted small">서비스 정보 준비 중</p>'}
                                        
                                        <!-- 수익성 정보 -->
                                        <div class="border-top pt-3 mb-3">
                                            <div class="row text-center small">
                                                <div class="col-6">
                                                    <strong>순이익</strong><br>
                                                    <span class="text-success">₩${profit.toLocaleString()}</span>
                                                </div>
                                                <div class="col-6">
                                                    <strong>변동비</strong><br>
                                                    <span class="text-danger">₩${totalVariableCost.toLocaleString()}</span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="d-grid gap-2">
                                            <button class="btn btn-${colorClass}" 
                                                    data-action="select-tier"
                                                    data-tier-name="${tierName}"
                                                    data-tier-price="${tierPrice}"
                                                    aria-label="${tierName} 선택하기">
                                                <i class="fas fa-shopping-cart me-1" aria-hidden="true"></i> 선택하기
                                            </button>
                                            <button class="btn btn-outline-${colorClass} btn-sm" 
                                                    data-action="show-tier-details"
                                                    data-festival-id="${escapeHtml(festivalId)}"
                                                    data-tier-index="${index}"
                                                    aria-label="${tierName} 상세 보기">
                                                <i class="fas fa-info-circle me-1" aria-hidden="true"></i> 상세 보기
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
                
                <!-- 수익성 비교 차트 -->
                <div class="row mt-4">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header">
                                <h6 class="mb-0"><i class="fas fa-chart-pie me-2" aria-hidden="true"></i>티어별 수익성 비교</h6>
                            </div>
                            <div class="card-body">
                                <div style="height: 300px; position: relative;" role="img" aria-label="티어별 수익성 비교 차트">
                                    <canvas id="tierProfitChart-${escapeHtml(festivalId)}"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // 차트 렌더링 (Chart.js 로드 확인 후 실행)
        waitForElement(`tierProfitChart-${festivalId}`, (canvasElement) => {
            renderTierProfitChart(festivalId, tiers, totalVariableCost);
        });
    } catch (error) {
        console.error('Error displaying product tiers:', error);
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    <h5><i class="fas fa-exclamation-triangle me-2"></i>오류가 발생했습니다</h5>
                    <p>상품 구성 정보를 불러오는 중 문제가 발생했습니다.</p>
                </div>
            `;
        }
    }
}

// 티어별 수익성 차트 렌더링
function renderTierProfitChart(festivalId, tiers, variableCost) {
    try {
        if (!isChartJsLoaded()) {
            console.error('Chart.js is not loaded');
            const canvas = document.getElementById(`tierProfitChart-${festivalId}`);
            if (canvas && canvas.parentElement) {
                canvas.parentElement.innerHTML = `
                    <div class="alert alert-warning" role="alert">
                        차트를 불러올 수 없습니다. Chart.js 라이브러리가 로드되지 않았습니다.
                    </div>
                `;
            }
            return;
        }

        const canvas = document.getElementById(`tierProfitChart-${festivalId}`);
        if (!canvas) {
            console.warn(`Canvas #tierProfitChart-${festivalId} not found`);
            return;
        }
        
        // 데이터 검증
        if (!tiers || !isNonEmptyArray(tiers)) {
            console.warn('Invalid tiers data for chart');
            return;
        }

        const safeVariableCost = safeParseInt(variableCost, 0, 0);
        const ctx = canvas.getContext('2d');
        
        // 기존 차트 인스턴스 정리
        if (canvas.chartInstance) {
            canvas.chartInstance.destroy();
        }
        
        const profits = tiers.map(tier => {
            const price = safeParseInt(tier.price, 0, 0);
            return Math.max(0, price - safeVariableCost);
        });
        
        const colors = ['#6c757d', '#007bff', '#ffc107'];
        
        canvas.chartInstance = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: tiers.map((tier, index) => {
                    const price = safeParseInt(tier.price, 0, 0);
                    const profitRate = price > 0 ? ((price - safeVariableCost) / price * 100).toFixed(1) : '0.0';
                    const tierName = escapeHtml(tier.name || `Tier ${index + 1}`);
                    return `${tierName} (${profitRate}%)`;
                }),
                    datasets: [{
                        data: profits,
                        backgroundColor: colors.slice(0, profits.length),
                        borderColor: colors.slice(0, profits.length).map(color => color + '80'),
                        borderWidth: 2,
                        hoverOffset: 4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                padding: 20,
                                usePointStyle: true
                            }
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    const tierIndex = context.dataIndex;
                                    if (tierIndex >= 0 && tierIndex < tiers.length) {
                                        const tierName = escapeHtml(tiers[tierIndex].name || `Tier ${tierIndex + 1}`);
                                        const profit = safeParseInt(context.parsed, 0, 0);
                                        return `${tierName}: ₩${profit.toLocaleString()} 순이익`;
                                    }
                                    return '';
                                }
                            }
                        }
                    }
                }
            });
        } catch (error) {
            console.error('Error rendering tier profit chart:', error);
            const canvas = document.getElementById(`tierProfitChart-${festivalId}`);
            if (canvas && canvas.parentElement) {
                canvas.parentElement.innerHTML = `
                    <div class="alert alert-danger" role="alert">
                        차트를 생성하는 중 오류가 발생했습니다.
                    </div>
                `;
            }
        }
    }

// 티어 상세 정보 모달
function showTierDetails(festivalId, tierIndex) {
    const businessData = getBusinessData(festivalId);
    if (!businessData || !businessData.tiers[tierIndex]) return;
    
    const tier = businessData.tiers[tierIndex];
    const profit = tier.price - businessData.totalVariableCost;
    const festival = festivalsData[festivalId];
    
    const modalHtml = `
        <div class="modal fade" id="tierDetailModal" tabindex="-1">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">
                            <i class="fas fa-star me-2"></i>
                            ${tier.name} 패키지 - ${festival.name}
                        </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-7">
                                <h6 class="text-primary mb-3">
                                    <i class="fas fa-list-check me-2"></i>포함 서비스
                                </h6>
                                <div class="list-group list-group-flush">
                                    ${tier.features.map(feature => `
                                        <div class="list-group-item border-0 px-0">
                                            <i class="fas fa-check-circle text-success me-2"></i>
                                            ${feature}
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                            <div class="col-md-5">
                                <h6 class="text-success mb-3">
                                    <i class="fas fa-calculator me-2"></i>수익성 분석
                                </h6>
                                <table class="table table-borderless table-sm">
                                    <tr>
                                        <td class="fw-bold">판매가격</td>
                                        <td class="text-end text-primary fw-bold">₩${tier.price.toLocaleString()}</td>
                                    </tr>
                                    <tr>
                                        <td>변동비용</td>
                                        <td class="text-end text-danger">₩${businessData.totalVariableCost.toLocaleString()}</td>
                                    </tr>
                                    <tr class="border-top">
                                        <td class="fw-bold text-success">순이익</td>
                                        <td class="text-end text-success fw-bold">₩${profit.toLocaleString()}</td>
                                    </tr>
                                    <tr>
                                        <td class="fw-bold">이익률</td>
                                        <td class="text-end fw-bold">${((profit/tier.price)*100).toFixed(1)}%</td>
                                    </tr>
                                </table>
                                
                                <div class="mt-3 p-3 bg-light rounded">
                                    <small class="text-muted">
                                        <i class="fas fa-info-circle me-1"></i>
                                        10명 그룹 기준 총 수익: <strong>₩${(profit * 10).toLocaleString()}</strong>
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
                        <button type="button" class="btn btn-primary" onclick="selectTier('${tier.name}', ${tier.price})" data-bs-dismiss="modal">
                            <i class="fas fa-shopping-cart me-1"></i>이 패키지 선택
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // 기존 모달 제거 후 새로 생성
    const existingModal = document.getElementById('tierDetailModal');
    if (existingModal) existingModal.remove();
    
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    const modal = new bootstrap.Modal(document.getElementById('tierDetailModal'));
    modal.show();
}

/**
 * 손익 분기점 분석 표시
 * @param {string} festivalId - 축제 ID
 * @param {string} containerId - 컨테이너 ID
 */
export function displayBreakEvenAnalysis(festivalId, containerId) {
    try {
        const container = document.getElementById(containerId);
        if (!container) {
            console.warn(`Container #${containerId} not found`);
            return;
        }

        // 데이터 검증
        if (!festivalId || typeof festivalId !== 'string') {
            container.innerHTML = '<div class="alert alert-warning" role="alert">축제 ID가 유효하지 않습니다.</div>';
            return;
        }

        const businessData = getBusinessData(festivalId);
        if (!businessData || typeof businessData !== 'object') {
            container.innerHTML = '<div class="alert alert-info" role="status">손익 분기점 데이터를 준비 중입니다.</div>';
            return;
        }

        // 안전한 데이터 추출 및 검증
        const profitData = marketAnalysis && marketAnalysis.profitability && marketAnalysis.profitability[festivalId]
            ? marketAnalysis.profitability[festivalId]
            : null;
        const expectedCustomers = profitData && profitData.expectedCustomers 
            ? safeParseInt(profitData.expectedCustomers, 25, 0)
            : 25;
        
        const basePrice = safeParseInt(businessData.basePrice, 0, 0);
        const totalVariableCost = safeParseInt(businessData.totalVariableCost, 0, 0);
        const fixedCosts = safeParseInt(businessData.fixedCosts, 0, 0);
        const contributionMargin = safeParseInt(businessData.contributionMargin, 0, 0);
        const breakEvenPoint = safeParseInt(businessData.breakEvenPoint, 0, 0);

        // 0으로 나누기 방지
        const contributionMarginRate = basePrice > 0 ? ((contributionMargin / basePrice) * 100).toFixed(1) : '0.0';
        const safetyMargin = Math.abs(expectedCustomers - breakEvenPoint);
        const expectedProfit = (expectedCustomers - breakEvenPoint) * contributionMargin;

    // 시나리오 분석 데이터
    const scenarios = [
        { name: '보수적', multiplier: 0.7, color: '#dc3545' },
        { name: '기본', multiplier: 1.0, color: '#007bff' },
        { name: '낙관적', multiplier: 1.3, color: '#28a745' }
    ];

    container.innerHTML = `
        <div class="breakeven-analysis">
            <h4 class="text-center mb-4">
                <i class="fas fa-balance-scale me-2"></i>손익분기점 분석
            </h4>
            
            <!-- 핵심 지표 요약 -->
            <div class="row mb-4">
                <div class="col-12">
                    <div class="alert alert-primary">
                        <div class="row text-center">
                            <div class="col-md-2">
                                <h6><i class="fas fa-won-sign"></i> 공헌이익</h6>
                                <span class="h5">₩${contributionMargin.toLocaleString()}</span>
                            </div>
                            <div class="col-md-2">
                                <h6><i class="fas fa-percentage" aria-hidden="true"></i> 공헌이익률</h6>
                                <span class="h5">${contributionMarginRate}%</span>
                            </div>
                            <div class="col-md-2">
                                <h6><i class="fas fa-users" aria-hidden="true"></i> 손익분기점</h6>
                                <span class="h5 text-danger">${breakEvenPoint}명</span>
                            </div>
                            <div class="col-md-2">
                                <h6><i class="fas fa-target" aria-hidden="true"></i> 예상 고객</h6>
                                <span class="h5 text-success">${expectedCustomers}명</span>
                            </div>
                            <div class="col-md-2">
                                <h6><i class="fas fa-chart-line" aria-hidden="true"></i> 안전 마진</h6>
                                <span class="h5 ${expectedCustomers > breakEvenPoint ? 'text-success' : 'text-warning'}">
                                    ${safetyMargin}명
                                </span>
                            </div>
                            <div class="col-md-2">
                                <h6><i class="fas fa-coins" aria-hidden="true"></i> 예상 순이익</h6>
                                <span class="h5 text-primary">₩${expectedProfit.toLocaleString()}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="row">
                <!-- 손익분기점 계산기 -->
                <div class="col-lg-4 mb-4">
                    <div class="card">
                        <div class="card-header bg-primary text-white">
                            <div class="d-flex justify-content-between align-items-center">
                                <h6 class="mb-0"><i class="fas fa-calculator me-2"></i>손익분기점 계산기</h6>
                                <button class="btn btn-outline-light btn-sm" onclick="showCalculatorGuide()" title="사용법 보기">
                                    <i class="fas fa-question"></i>
                                </button>
                            </div>
                        </div>
                        <div class="card-body">
                            <!-- 입력 폼 -->
                            <div class="calculator-inputs mb-3">
                                <div class="mb-3">
                                    <label class="form-label" for="calc-price-${escapeHtml(festivalId)}">판매 가격 (원)</label>
                                    <input type="number" 
                                           class="form-control" 
                                           id="calc-price-${escapeHtml(festivalId)}" 
                                           value="${basePrice}" 
                                           min="1" 
                                           step="10000"
                                           aria-label="판매 가격 입력"
                                           required>
                                    <div class="invalid-feedback">1원 이상의 값을 입력해주세요.</div>
                                </div>
                                
                                <div class="mb-3">
                                    <label class="form-label" for="calc-variable-${escapeHtml(festivalId)}">변동비용 (원)</label>
                                    <input type="number" 
                                           class="form-control" 
                                           id="calc-variable-${escapeHtml(festivalId)}" 
                                           value="${totalVariableCost}" 
                                           min="0" 
                                           step="1000"
                                           aria-label="변동비용 입력"
                                           required>
                                    <div class="invalid-feedback">0원 이상의 값을 입력해주세요.</div>
                                </div>
                                
                                <div class="mb-3">
                                    <label class="form-label" for="calc-fixed-${escapeHtml(festivalId)}">고정비용 (원)</label>
                                    <input type="number" 
                                           class="form-control" 
                                           id="calc-fixed-${escapeHtml(festivalId)}" 
                                           value="${fixedCosts}" 
                                           min="0" 
                                           step="10000"
                                           aria-label="고정비용 입력"
                                           required>
                                    <div class="invalid-feedback">0원 이상의 값을 입력해주세요.</div>
                                </div>
                                
                                <div class="d-grid gap-2 mb-3">
                                    <button class="btn btn-primary" 
                                            data-action="calculate-breakeven"
                                            data-festival-id="${escapeHtml(festivalId)}"
                                            aria-label="손익분기점 계산하기">
                                        <i class="fas fa-play me-1" aria-hidden="true"></i>계산하기
                                    </button>
                                    <button class="btn btn-outline-secondary btn-sm" 
                                            data-action="reset-calculator"
                                            data-festival-id="${escapeHtml(festivalId)}"
                                            aria-label="계산기 초기화">
                                        <i class="fas fa-undo me-1"></i>초기값으로
                                    </button>
                                </div>
                            </div>
                            
                            <!-- 계산 결과 -->
                            <div id="calc-results-${festivalId}" class="calculator-results">
                                <div class="result-item">
                                    <span class="result-label">공헌이익:</span>
                                    <span class="result-value text-success" id="calc-contribution-${festivalId}">
                                        ₩${contributionMargin.toLocaleString()}
                                    </span>
                                </div>
                                <div class="result-item">
                                    <span class="result-label">공헌이익률:</span>
                                    <span class="result-value text-info" id="calc-margin-rate-${escapeHtml(festivalId)}">
                                        ${contributionMarginRate}%
                                    </span>
                                </div>
                                <div class="result-item highlight">
                                    <span class="result-label">손익분기점:</span>
                                    <span class="result-value text-danger fw-bold" id="calc-breakeven-${escapeHtml(festivalId)}">
                                        ${breakEvenPoint}명
                                    </span>
                                </div>
                            </div>
                            
                            <!-- 시나리오 테스트 -->
                            <div class="scenario-test mt-3">
                                <h6 class="mb-2">시나리오 테스트</h6>
                                <div class="input-group mb-2">
                                    <span class="input-group-text">고객 수</span>
                                    <input type="number" class="form-control" id="calc-customers-${festivalId}" 
                                           value="${expectedCustomers}" min="0">
                                    <button class="btn btn-outline-primary" onclick="testScenario('${festivalId}')">
                                        테스트
                                    </button>
                                </div>
                                <div id="scenario-result-${festivalId}" class="scenario-result">
                                    <!-- 시나리오 결과가 여기에 표시됩니다 -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- 손익분기점 차트 -->
                <div class="col-lg-8 mb-4">
                    <div class="card">
                        <div class="card-header">
                            <h6 class="mb-0"><i class="fas fa-chart-line me-2"></i>손익분기점 차트</h6>
                        </div>
                        <div class="card-body">
                            <div style="height: 400px; position: relative;">
                                <canvas id="breakevenChart-${festivalId}"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- 비용 구조 및 시나리오 분석 -->
                <div class="col-lg-4 mb-4">
                    <!-- 비용 구조 -->
                    <div class="card mb-3">
                        <div class="card-header">
                            <h6 class="mb-0"><i class="fas fa-calculator me-2"></i>비용 구조</h6>
                        </div>
                        <div class="card-body">
                            <table class="table table-sm mb-3">
                                <tr>
                                    <td><strong>판매 가격</strong></td>
                                    <td class="text-end text-primary"><strong>₩${basePrice.toLocaleString()}</strong></td>
                                </tr>
                                <tr>
                                    <td>변동 비용</td>
                                    <td class="text-end text-danger">₩${totalVariableCost.toLocaleString()}</td>
                                </tr>
                                <tr class="table-light">
                                    <td><strong>공헌이익</strong></td>
                                    <td class="text-end text-success"><strong>₩${contributionMargin.toLocaleString()}</strong></td>
                                </tr>
                                <tr>
                                    <td>총 고정비용</td>
                                    <td class="text-end text-warning">₩${fixedCosts.toLocaleString()}</td>
                                </tr>
                            </table>
                            
                            <!-- 변동비 구성 -->
                            <h6 class="text-muted mb-2">변동비 구성</h6>
                            <div class="mb-2">
                                <canvas id="costBreakdownChart-${festivalId}" height="150"></canvas>
                            </div>
                        </div>
                    </div>
                    
                    <!-- 시나리오 분석 -->
                    <div class="card">
                        <div class="card-header">
                            <h6 class="mb-0"><i class="fas fa-sitemap me-2"></i>시나리오 분석</h6>
                        </div>
                        <div class="card-body">
                            ${scenarios.map(scenario => {
                                const scenarioCustomers = Math.round(expectedCustomers * scenario.multiplier);
                                const scenarioProfit = (scenarioCustomers - breakEvenPoint) * contributionMargin;
                                const isProfit = scenarioCustomers > breakEvenPoint;
                                
                                return `
                                    <div class="mb-3 p-2 border rounded">
                                        <div class="d-flex justify-content-between align-items-center mb-1">
                                            <span class="fw-bold" style="color: ${scenario.color};">${scenario.name}</span>
                                            <span class="badge" style="background-color: ${scenario.color};">${scenarioCustomers}명</span>
                                        </div>
                                        <div class="small">
                                            <div class="d-flex justify-content-between">
                                                <span>순이익:</span>
                                                <span class="${isProfit ? 'text-success' : 'text-danger'}">
                                                    ${isProfit ? '+' : ''}₩${scenarioProfit.toLocaleString()}
                                                </span>
                                            </div>
                                            <div class="d-flex justify-content-between">
                                                <span>ROI:</span>
                                                <span class="${isProfit ? 'text-success' : 'text-danger'}">
                                                    ${fixedCosts > 0 ? ((scenarioProfit / fixedCosts) * 100).toFixed(1) : '0.0'}%
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- 위험 요소 및 권장사항 -->
            <div class="row mt-3">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h6 class="mb-0"><i class="fas fa-lightbulb me-2"></i>비즈니스 인사이트</h6>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <h6 class="text-warning"><i class="fas fa-exclamation-triangle me-1"></i>위험 요소</h6>
                                    <ul class="list-unstyled">
                                        ${getRiskFactors(festivalId, breakEvenPoint, expectedCustomers).map(risk => 
                                            `<li class="mb-1"><i class="fas fa-minus text-warning me-2"></i>${risk}</li>`
                                        ).join('')}
                                    </ul>
                                </div>
                                <div class="col-md-6">
                                    <h6 class="text-success"><i class="fas fa-thumbs-up me-1"></i>성공 전략</h6>
                                    <ul class="list-unstyled">
                                        ${getSuccessStrategies(festivalId, contributionMargin, basePrice).map(strategy => 
                                            `<li class="mb-1"><i class="fas fa-plus text-success me-2"></i>${strategy}</li>`
                                        ).join('')}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

        // 차트 렌더링 (Chart.js 로드 확인 후 실행)
        waitForElement(`breakevenChart-${festivalId}`, () => {
            if (isChartJsLoaded()) {
                try {
                    renderBreakEvenChart(festivalId, businessData, expectedCustomers);
                    renderCostBreakdownChart(festivalId, businessData);
                    setupCalculatorListeners(festivalId);
                } catch (error) {
                    console.error('Error rendering break-even charts:', error);
                }
            } else {
                console.warn('Chart.js is not loaded');
            }
        });
    } catch (error) {
        console.error('Error displaying break-even analysis:', error);
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    <h5><i class="fas fa-exclamation-triangle me-2"></i>오류가 발생했습니다</h5>
                    <p>손익분기점 분석 정보를 불러오는 중 문제가 발생했습니다.</p>
                </div>
            `;
        }
    }
}

// 손익분기점 차트 렌더링
function renderBreakEvenChart(festivalId, businessData, expectedCustomers) {
    const canvas = document.getElementById(`breakevenChart-${festivalId}`);
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const { basePrice, totalVariableCost, fixedCosts, breakEvenPoint } = businessData;
    
    // 차트 데이터 생성 (0부터 예상고객의 1.5배까지)
    const maxCustomers = Math.max(expectedCustomers * 1.5, breakEvenPoint * 1.2, 30);
    const customers = Array.from({length: Math.ceil(maxCustomers)}, (_, i) => i);
    const revenue = customers.map(c => c * basePrice);
    const totalCost = customers.map(c => fixedCosts + (c * totalVariableCost));
    const profit = customers.map(c => (c * basePrice) - (fixedCosts + (c * totalVariableCost)));

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: customers,
            datasets: [
                {
                    label: '매출',
                    data: revenue,
                    borderColor: '#28a745',
                    backgroundColor: 'rgba(40, 167, 69, 0.1)',
                    fill: false,
                    tension: 0.1
                },
                {
                    label: '총비용',
                    data: totalCost,
                    borderColor: '#dc3545',
                    backgroundColor: 'rgba(220, 53, 69, 0.1)',
                    fill: false,
                    tension: 0.1
                },
                {
                    label: '순이익',
                    data: profit,
                    borderColor: '#007bff',
                    backgroundColor: 'rgba(0, 123, 255, 0.1)',
                    fill: true,
                    tension: 0.1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: '고객 수 (명)'
                    },
                    grid: {
                        display: true
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: '금액 (원)'
                    },
                    ticks: {
                        callback: function(value) {
                            return '₩' + value.toLocaleString();
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top'
                },
                tooltip: {
                    callbacks: {
                        title: function(context) {
                            return `고객 수: ${context[0].label}명`;
                        },
                        label: function(context) {
                            return `${context.dataset.label}: ₩${context.parsed.y.toLocaleString()}`;
                        }
                    }
                },
                annotation: {
                    annotations: {
                        breakEvenLine: {
                            type: 'line',
                            xMin: breakEvenPoint,
                            xMax: breakEvenPoint,
                            borderColor: '#ffc107',
                            borderWidth: 2,
                            borderDash: [6, 6],
                            label: {
                                display: true,
                                content: `손익분기점: ${breakEvenPoint}명`,
                                position: 'start'
                            }
                        }
                    }
                }
            }
        }
    });
}

// 비용 구성 차트 렌더링
function renderCostBreakdownChart(festivalId, businessData) {
    const canvas = document.getElementById(`costBreakdownChart-${festivalId}`);
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const { variableCosts } = businessData;

    const labels = ['항공료', '숙박비', '입장권', '교통비', '가이드/운영', '식비'];
    const data = [
        variableCosts.flight,
        variableCosts.hotel,
        variableCosts.ticket,
        variableCosts.transport,
        variableCosts.guide_ops,
        variableCosts.meals
    ];
    const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'];

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: colors,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        boxWidth: 12,
                        font: {
                            size: 10
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((context.parsed / total) * 100).toFixed(1);
                            return `${context.label}: ₩${context.parsed.toLocaleString()} (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
}

// 위험 요소 생성
function getRiskFactors(festivalId, breakEvenPoint, expectedCustomers) {
    const risks = [];
    
    if (expectedCustomers <= breakEvenPoint * 1.2) {
        risks.push('손익분기점 대비 안전마진 부족');
    }
    
    risks.push('환율 변동에 따른 비용 증가 위험');
    risks.push('축제 일정 변경 또는 취소 위험');
    risks.push('성수기 항공료/숙박비 급등 가능성');
    
    if (festivalId.includes('tomorrowland') || festivalId.includes('carnival')) {
        risks.push('대형 축제 특성상 높은 경쟁 강도');
    }
    
    return risks;
}

// 성공 전략 생성
function getSuccessStrategies(festivalId, contributionMargin, basePrice) {
    const strategies = [];
    
    if (contributionMargin / basePrice > 0.3) {
        strategies.push('높은 공헌이익률 활용한 마케팅 투자 확대');
    }
    
    strategies.push('얼리버드 할인으로 사전 예약 확보');
    strategies.push('그룹 할인을 통한 대량 판매 유도');
    strategies.push('부가 서비스 판매로 객단가 상승');
    strategies.push('SNS 마케팅으로 타겟 고객 접근');
    
    return strategies;
}

/**
 * 수요 시뮬레이션 초기화
 * @param {string} festivalId - 축제 ID
 * @param {string} containerId - 컨테이너 ID
 */
export function initDemandSimulator(festivalId, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const businessData = getBusinessData(festivalId);
    if (!businessData) {
        container.innerHTML = '<div class="alert alert-info">수요 시뮬레이션 데이터를 준비 중입니다.</div>';
        return;
    }

    container.innerHTML = `
        <div class="demand-simulator">
            <h4 class="text-center mb-4">
                <i class="fas fa-chart-line me-2"></i>실시간 수요 시뮬레이션
            </h4>
            
            <div class="row">
                <!-- 시뮬레이션 제어판 -->
                <div class="col-lg-4 mb-4">
                    <div class="card">
                        <div class="card-header bg-primary text-white">
                            <h6 class="mb-0"><i class="fas fa-sliders-h me-2"></i>시뮬레이션 변수</h6>
                        </div>
                        <div class="card-body">
                            <!-- 마케팅 예산 -->
                            <div class="mb-4">
                                <label class="form-label d-flex justify-content-between">
                                    <span><i class="fas fa-bullhorn me-1"></i>마케팅 예산</span>
                                    <span class="text-primary fw-bold"><span id="marketingValue">200</span>만원</span>
                                </label>
                                <input type="range" class="form-range" id="marketingBudget" min="0" max="1000" value="200" step="50">
                                <div class="form-text">예산별 고객 증가 효과: +<span id="marketingEffect">14</span>명</div>
                            </div>
                            
                            <!-- 할인율 -->
                            <div class="mb-4">
                                <label class="form-label d-flex justify-content-between">
                                    <span><i class="fas fa-percentage me-1"></i>할인율</span>
                                    <span class="text-danger fw-bold"><span id="discountValue">0</span>%</span>
                                </label>
                                <input type="range" class="form-range" id="discountRate" min="0" max="30" value="0" step="5">
                                <div class="form-text">할인 효과: +<span id="discountEffect">0</span>명</div>
                            </div>
                            
                            <!-- 계절 요인 -->
                            <div class="mb-4">
                                <label class="form-label"><i class="fas fa-calendar-alt me-1"></i>계절 요인</label>
                                <select class="form-select" id="seasonFactor">
                                    <option value="0.7">극 비수기 (70%)</option>
                                    <option value="0.85">비수기 (85%)</option>
                                    <option value="1.0" selected>일반 (100%)</option>
                                    <option value="1.15">성수기 (115%)</option>
                                    <option value="1.3">극 성수기 (130%)</option>
                                </select>
                            </div>
                            
                            <!-- 경쟁 강도 -->
                            <div class="mb-4">
                                <label class="form-label d-flex justify-content-between">
                                    <span><i class="fas fa-users me-1"></i>경쟁 강도</span>
                                    <span class="text-warning fw-bold"><span id="competitionValue">보통</span></span>
                                </label>
                                <select class="form-select" id="competitionLevel">
                                    <option value="1.1">낮음 (+10%)</option>
                                    <option value="1.0" selected>보통 (0%)</option>
                                    <option value="0.9">높음 (-10%)</option>
                                    <option value="0.8">매우 높음 (-20%)</option>
                                </select>
                            </div>
                            
                            <!-- 실시간 업데이트 토글 -->
                            <div class="form-check mb-3">
                                <input class="form-check-input" type="checkbox" id="autoUpdate" checked>
                                <label class="form-check-label" for="autoUpdate">
                                    실시간 업데이트
                                </label>
                            </div>
                            
                            <div class="d-grid gap-2">
                                <button class="btn btn-primary" onclick="runAdvancedSimulation('${festivalId}')">
                                    <i class="fas fa-play me-1"></i>시뮬레이션 실행
                                </button>
                                <button class="btn btn-outline-secondary btn-sm" onclick="resetSimulation('${festivalId}')">
                                    <i class="fas fa-undo me-1"></i>초기화
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <!-- 기본 정보 -->
                    <div class="card mt-3">
                        <div class="card-header">
                            <h6 class="mb-0"><i class="fas fa-info-circle me-2"></i>기준 데이터</h6>
                        </div>
                        <div class="card-body">
                            <div id="baseInfo">
                                <div class="d-flex justify-content-between mb-2">
                                    <span>기본 예상 고객:</span>
                                    <span class="fw-bold">${businessData.breakEvenPoint * 1.2 || 25}명</span>
                                </div>
                                <div class="d-flex justify-content-between mb-2">
                                    <span>손익분기점:</span>
                                    <span class="text-danger fw-bold">${businessData.breakEvenPoint}명</span>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <span>1인당 공헌이익:</span>
                                    <span class="text-success fw-bold">₩${businessData.contributionMargin.toLocaleString()}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- 시뮬레이션 결과 -->
                <div class="col-lg-8 mb-4">
                    <div id="simulationResults">
                        <!-- 결과 요약 -->
                        <div class="row mb-4">
                            <div class="col-12">
                                <div class="card bg-light">
                                    <div class="card-body text-center">
                                        <h5><i class="fas fa-calculator me-2"></i>예측 결과</h5>
                                        <div class="row">
                                            <div class="col-md-3">
                                                <div class="text-primary">
                                                    <h3 id="predictedCustomers">-</h3>
                                                    <small>예상 고객</small>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="text-success">
                                                    <h3 id="predictedRevenue">-</h3>
                                                    <small>예상 매출</small>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="text-info">
                                                    <h3 id="predictedProfit">-</h3>
                                                    <small>예상 순이익</small>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="text-warning">
                                                    <h3 id="roiPercentage">-</h3>
                                                    <small>ROI</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- 차트 영역 -->
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <div class="card">
                                    <div class="card-header">
                                        <h6 class="mb-0">수요 변화 시뮬레이션</h6>
                                    </div>
                                    <div class="card-body">
                                        <canvas id="demandChart-${festivalId}" height="250"></canvas>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <div class="card">
                                    <div class="card-header">
                                        <h6 class="mb-0">수익성 분석</h6>
                                    </div>
                                    <div class="card-body">
                                        <canvas id="profitChart-${festivalId}" height="250"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- 상세 분석 -->
                        <div class="row">
                            <div class="col-12">
                                <div class="card">
                                    <div class="card-header">
                                        <h6 class="mb-0"><i class="fas fa-chart-bar me-2"></i>상세 시나리오 분석</h6>
                                    </div>
                                    <div class="card-body">
                                        <div id="scenarioAnalysis">
                                            <div class="text-center text-muted">
                                                <p>시뮬레이션을 실행하여 상세 분석을 확인하세요.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // 실시간 업데이트 이벤트 리스너 설정
    setTimeout(() => setupSimulatorListeners(festivalId), 100);
}

// 시뮬레이터 이벤트 리스너 설정
function setupSimulatorListeners(festivalId) {
    const elements = {
        marketingBudget: document.getElementById('marketingBudget'),
        discountRate: document.getElementById('discountRate'),
        seasonFactor: document.getElementById('seasonFactor'),
        competitionLevel: document.getElementById('competitionLevel'),
        autoUpdate: document.getElementById('autoUpdate')
    };

    // 마케팅 예산 변경
    elements.marketingBudget?.addEventListener('input', function(e) {
        const value = e.target.value;
        document.getElementById('marketingValue').textContent = value;
        const effect = Math.round(Math.sqrt(value / 10) * 2);
        document.getElementById('marketingEffect').textContent = effect;
        
        if (elements.autoUpdate?.checked) {
            runAdvancedSimulation(festivalId);
        }
    });

    // 할인율 변경
    elements.discountRate?.addEventListener('input', function(e) {
        const value = e.target.value;
        document.getElementById('discountValue').textContent = value;
        const effect = Math.round(value * 2);
        document.getElementById('discountEffect').textContent = effect;
        
        if (elements.autoUpdate?.checked) {
            runAdvancedSimulation(festivalId);
        }
    });

    // 계절/경쟁 요인 변경
    ['seasonFactor', 'competitionLevel'].forEach(id => {
        elements[id]?.addEventListener('change', function() {
            if (id === 'competitionLevel') {
                const value = parseFloat(this.value);
                const labels = { 1.1: '낮음', 1.0: '보통', 0.9: '높음', 0.8: '매우 높음' };
                document.getElementById('competitionValue').textContent = labels[value] || '보통';
            }
            
            if (elements.autoUpdate?.checked) {
                runAdvancedSimulation(festivalId);
            }
        });
    });

    // 초기 실행
    runAdvancedSimulation(festivalId);
}

// ===== 전역 함수 (HTML onclick 핸들러용) =====

/**
 * 상품 티어 선택 처리
 * @param {string} tierName - 티어 이름
 * @param {number} price - 가격
 */
window.selectTier = function(tierName, price) {
    if (window.Toast) {
        window.Toast.show(`${tierName} 상품이 선택되었습니다. (₩${price.toLocaleString()})`, 'success');
    } else {
        alert(`${tierName} 상품이 선택되었습니다. (₩${price.toLocaleString()})`);
    }
    console.log('상품 티어 선택:', { tierName, price });
};

/**
 * 시뮬레이션 실행
 * @param {string} festivalId - 축제 ID
 */
// 고급 수요 시뮬레이션 실행
window.runAdvancedSimulation = function(festivalId) {
    const businessData = getBusinessData(festivalId);
    if (!businessData) return;

    // 입력값 수집
    const marketingBudget = parseInt(document.getElementById('marketingBudget')?.value || 200);
    const discountRate = parseFloat(document.getElementById('discountRate')?.value || 0);
    const seasonFactor = parseFloat(document.getElementById('seasonFactor')?.value || 1.0);
    const competitionFactor = parseFloat(document.getElementById('competitionLevel')?.value || 1.0);
    
    // 기본 수요 (손익분기점의 1.2배)
    const baseDemand = Math.round(businessData.breakEvenPoint * 1.2);
    
    // 수요 예측 알고리즘 (더 정교한 공식)
    const marketingEffect = Math.round(Math.sqrt(marketingBudget / 10) * 2.5);
    const discountEffect = Math.round(discountRate * 2);
    const seasonalAdjustment = Math.round((seasonFactor - 1) * baseDemand);
    const competitionAdjustment = Math.round((competitionFactor - 1) * baseDemand);
    
    const predictedCustomers = Math.max(0, baseDemand + marketingEffect + discountEffect + seasonalAdjustment + competitionAdjustment);
    
    // 재무 계산
    const adjustedPrice = businessData.basePrice * (1 - discountRate / 100);
    const adjustedContribution = adjustedPrice - businessData.totalVariableCost;
    const totalRevenue = predictedCustomers * adjustedPrice;
    const totalMarketingCost = marketingBudget * 10000; // 만원 -> 원
    const adjustedFixedCosts = businessData.fixedCosts + totalMarketingCost;
    const netProfit = (predictedCustomers * adjustedContribution) - adjustedFixedCosts;
    const roi = adjustedFixedCosts > 0 ? (netProfit / adjustedFixedCosts) * 100 : 0;
    
    // UI 업데이트
    updateSimulationResults({
        customers: predictedCustomers,
        revenue: totalRevenue,
        profit: netProfit,
        roi: roi,
        breakEven: businessData.breakEvenPoint
    });
    
    // 차트 업데이트
    updateSimulationCharts(festivalId, {
        baseDemand,
        marketingEffect,
        discountEffect,
        seasonalAdjustment,
        competitionAdjustment,
        predictedCustomers,
        businessData,
        adjustedContribution,
        adjustedFixedCosts,
        netProfit
    });
    
    // 시나리오 분석 업데이트
    updateScenarioAnalysis(festivalId, businessData, adjustedContribution, adjustedFixedCosts);
};

// 시뮬레이션 결과 UI 업데이트
function updateSimulationResults(results) {
    document.getElementById('predictedCustomers').textContent = results.customers + '명';
    document.getElementById('predictedRevenue').textContent = '₩' + Math.round(results.revenue / 10000) + '만';
    document.getElementById('predictedProfit').textContent = '₩' + Math.round(results.profit / 10000) + '만';
    document.getElementById('roiPercentage').textContent = results.roi.toFixed(1) + '%';
}

// 시뮬레이션 차트 업데이트
function updateSimulationCharts(festivalId, data) {
    // 수요 변화 차트
    const demandCanvas = document.getElementById(`demandChart-${festivalId}`);
    if (demandCanvas) {
        const ctx = demandCanvas.getContext('2d');
        
        // 기존 차트 제거
        if (window.demandChartInstance) {
            window.demandChartInstance.destroy();
        }
        
        window.demandChartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['기본 수요', '마케팅', '할인', '계절', '경쟁', '최종 예측'],
                datasets: [{
                    label: '고객 수 변화',
                    data: [
                        data.baseDemand,
                        data.marketingEffect,
                        data.discountEffect,
                        data.seasonalAdjustment,
                        data.competitionAdjustment,
                        data.predictedCustomers
                    ],
                    backgroundColor: [
                        '#6c757d',
                        '#17a2b8',
                        '#ffc107',
                        '#28a745',
                        '#dc3545',
                        '#007bff'
                    ]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return value + '명';
                            }
                        }
                    }
                }
            }
        });
    }
    
    // 수익성 차트
    const profitCanvas = document.getElementById(`profitChart-${festivalId}`);
    if (profitCanvas) {
        const ctx = profitCanvas.getContext('2d');
        
        if (window.profitChartInstance) {
            window.profitChartInstance.destroy();
        }
        
        const profitByCustomer = [];
        const customers = [];
        const maxCustomers = Math.max(data.predictedCustomers * 1.5, 50);
        
        for (let i = 0; i <= maxCustomers; i += 5) {
            customers.push(i);
            const profit = (i * data.adjustedContribution) - data.adjustedFixedCosts;
            profitByCustomer.push(profit);
        }
        
        window.profitChartInstance = new Chart(ctx, {
            type: 'line',
            data: {
                labels: customers,
                datasets: [{
                    label: '순이익',
                    data: profitByCustomer,
                    borderColor: '#007bff',
                    backgroundColor: 'rgba(0, 123, 255, 0.1)',
                    fill: true,
                    tension: 0.1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    intersect: false,
                    mode: 'index'
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: '고객 수'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: '순이익 (원)'
                        },
                        ticks: {
                            callback: function(value) {
                                return '₩' + (value / 10000).toFixed(0) + '만';
                            }
                        }
                    }
                },
                plugins: {
                    legend: { display: false },
                    annotation: {
                        annotations: {
                            breakEvenLine: {
                                type: 'line',
                                xMin: data.businessData.breakEvenPoint,
                                xMax: data.businessData.breakEvenPoint,
                                borderColor: '#dc3545',
                                borderWidth: 2,
                                borderDash: [6, 6],
                                label: {
                                    display: true,
                                    content: '손익분기점',
                                    position: 'start'
                                }
                            },
                            predictedLine: {
                                type: 'line',
                                xMin: data.predictedCustomers,
                                xMax: data.predictedCustomers,
                                borderColor: '#28a745',
                                borderWidth: 2,
                                label: {
                                    display: true,
                                    content: '예측 고객',
                                    position: 'end'
                                }
                            }
                        }
                    }
                }
            }
        });
    }
}

// 시나리오 분석 업데이트
function updateScenarioAnalysis(festivalId, businessData, adjustedContribution, adjustedFixedCosts) {
    const scenarios = [
        { name: '극도로 보수적', factor: 0.6, color: '#dc3545' },
        { name: '보수적', factor: 0.8, color: '#fd7e14' },
        { name: '현재 예측', factor: 1.0, color: '#007bff' },
        { name: '낙관적', factor: 1.2, color: '#28a745' },
        { name: '극도로 낙관적', factor: 1.4, color: '#20c997' }
    ];
    
    const currentCustomers = parseInt(document.getElementById('predictedCustomers').textContent);
    
    const analysisHtml = `
        <div class="table-responsive">
            <table class="table table-sm">
                <thead>
                    <tr>
                        <th>시나리오</th>
                        <th class="text-center">예상 고객</th>
                        <th class="text-center">순이익</th>
                        <th class="text-center">ROI</th>
                        <th class="text-center">위험도</th>
                    </tr>
                </thead>
                <tbody>
                    ${scenarios.map(scenario => {
                        const customers = Math.round(currentCustomers * scenario.factor);
                        const profit = (customers * adjustedContribution) - adjustedFixedCosts;
                        const roi = adjustedFixedCosts > 0 ? (profit / adjustedFixedCosts) * 100 : 0;
                        const risk = scenario.factor < 0.8 ? '높음' : scenario.factor < 1.0 ? '보통' : scenario.factor < 1.3 ? '낮음' : '매우 낮음';
                        const isProfit = profit > 0;
                        
                        return `
                            <tr class="${scenario.factor === 1.0 ? 'table-primary' : ''}">
                                <td><span class="badge" style="background-color: ${scenario.color};">${scenario.name}</span></td>
                                <td class="text-center">${customers}명</td>
                                <td class="text-center ${isProfit ? 'text-success' : 'text-danger'}">
                                    ${isProfit ? '+' : ''}₩${Math.round(profit / 10000).toLocaleString()}만
                                </td>
                                <td class="text-center ${roi > 0 ? 'text-success' : 'text-danger'}">
                                    ${roi.toFixed(1)}%
                                </td>
                                <td class="text-center">
                                    <span class="badge badge-outline-${risk === '높음' ? 'danger' : risk === '보통' ? 'warning' : 'success'}">
                                        ${risk}
                                    </span>
                                </td>
                            </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>
        </div>
        
        <div class="alert alert-info mt-3">
            <h6><i class="fas fa-lightbulb me-2"></i>권장사항</h6>
            <ul class="mb-0">
                ${getSimulationRecommendations(currentCustomers, businessData.breakEvenPoint, adjustedContribution, adjustedFixedCosts).map(rec => 
                    `<li>${rec}</li>`
                ).join('')}
            </ul>
        </div>
    `;
    
    document.getElementById('scenarioAnalysis').innerHTML = analysisHtml;
}

// 시뮬레이션 권장사항 생성
function getSimulationRecommendations(predictedCustomers, breakEven, contribution, fixedCosts) {
    const recommendations = [];
    
    if (predictedCustomers <= breakEven) {
        recommendations.push('현재 예측으로는 손실 위험이 높습니다. 마케팅 예산 증액을 검토하세요.');
        recommendations.push('할인율을 높여 가격 경쟁력을 확보하거나, 패키지 구성을 개선하세요.');
    } else if (predictedCustomers <= breakEven * 1.2) {
        recommendations.push('안전마진이 부족합니다. 추가 마케팅 투자를 고려하세요.');
        recommendations.push('위험 요소에 대한 대비책을 마련하세요.');
    } else {
        recommendations.push('양호한 수익성이 예상됩니다. 현재 전략을 유지하세요.');
        recommendations.push('여유 자원으로 서비스 품질 향상에 투자하세요.');
    }
    
    if (contribution / 2000000 > 0.4) {
        recommendations.push('높은 공헌이익률을 활용하여 프리미엄 서비스를 확대하세요.');
    }
    
    return recommendations;
}

// 시뮬레이션 초기화
window.resetSimulation = function(festivalId) {
    // 입력값 초기화
    document.getElementById('marketingBudget').value = 200;
    document.getElementById('marketingValue').textContent = '200';
    document.getElementById('marketingEffect').textContent = '14';
    
    document.getElementById('discountRate').value = 0;
    document.getElementById('discountValue').textContent = '0';
    document.getElementById('discountEffect').textContent = '0';
    
    document.getElementById('seasonFactor').value = 1.0;
    document.getElementById('competitionLevel').value = 1.0;
    document.getElementById('competitionValue').textContent = '보통';
    
    // 차트 제거
    if (window.demandChartInstance) {
        window.demandChartInstance.destroy();
        window.demandChartInstance = null;
    }
    if (window.profitChartInstance) {
        window.profitChartInstance.destroy();
        window.profitChartInstance = null;
    }
    
    // 시뮬레이션 재실행
    runAdvancedSimulation(festivalId);
};

// 기존 호환성을 위한 래퍼 함수
window.runSimulation = function(festivalId) {
    return window.runAdvancedSimulation(festivalId);
};

/**
 * 손익분기점 계산하기
 * @param {string} festivalId - 축제 ID
 */
window.calculateBreakEven = function(festivalId) {
    // 입력값 가져오기
    const price = parseInt(document.getElementById(`calc-price-${festivalId}`).value) || 0;
    const variableCost = parseInt(document.getElementById(`calc-variable-${festivalId}`).value) || 0;
    const fixedCost = parseInt(document.getElementById(`calc-fixed-${festivalId}`).value) || 0;
    
    // 유효성 검사
    if (price <= 0 || variableCost < 0 || fixedCost < 0) {
        alert('올바른 값을 입력해주세요. 판매가격은 0보다 커야 하고, 비용은 0 이상이어야 합니다.');
        return;
    }
    
    if (price <= variableCost) {
        alert('판매가격이 변동비용보다 높아야 합니다.');
        return;
    }
    
    // 계산
    const contributionMargin = price - variableCost;
    const marginRate = (contributionMargin / price) * 100;
    const breakEvenPoint = Math.ceil(fixedCost / contributionMargin);
    
    // 결과 업데이트
    document.getElementById(`calc-contribution-${festivalId}`).textContent = 
        `₩${contributionMargin.toLocaleString()}`;
    document.getElementById(`calc-margin-rate-${festivalId}`).textContent = 
        `${marginRate.toFixed(1)}%`;
    document.getElementById(`calc-breakeven-${festivalId}`).textContent = 
        `${breakEvenPoint}명`;
    
    // 차트 업데이트
    updateBreakEvenChart(festivalId, { price, variableCost, fixedCost, contributionMargin, breakEvenPoint });
    
    // 시나리오 자동 테스트 (현재 고객 수로)
    const currentCustomers = parseInt(document.getElementById(`calc-customers-${festivalId}`).value) || 0;
    if (currentCustomers > 0) {
        testScenario(festivalId);
    }
    
    // 성공 피드백
    showCalculationSuccess();
};

/**
 * 시나리오 테스트
 * @param {string} festivalId - 축제 ID
 */
window.testScenario = function(festivalId) {
    // 현재 계산 결과 가져오기
    const price = parseInt(document.getElementById(`calc-price-${festivalId}`).value) || 0;
    const variableCost = parseInt(document.getElementById(`calc-variable-${festivalId}`).value) || 0;
    const fixedCost = parseInt(document.getElementById(`calc-fixed-${festivalId}`).value) || 0;
    const customers = parseInt(document.getElementById(`calc-customers-${festivalId}`).value) || 0;
    
    if (price <= 0 || customers <= 0) {
        document.getElementById(`scenario-result-${festivalId}`).innerHTML = 
            '<div class="text-muted">계산을 먼저 실행하고 고객 수를 입력해주세요.</div>';
        return;
    }
    
    const contributionMargin = price - variableCost;
    const breakEvenPoint = Math.ceil(fixedCost / contributionMargin);
    
    // 수익 계산
    const totalRevenue = customers * price;
    const totalVariableCosts = customers * variableCost;
    const netProfit = totalRevenue - totalVariableCosts - fixedCost;
    
    // 결과 분석
    let resultClass, resultIcon, resultMessage;
    
    if (customers === breakEvenPoint) {
        resultClass = 'breakeven';
        resultIcon = 'fa-balance-scale';
        resultMessage = '정확히 손익분기점입니다!';
    } else if (customers > breakEvenPoint) {
        resultClass = 'profit';
        resultIcon = 'fa-arrow-trend-up';
        const surplus = customers - breakEvenPoint;
        resultMessage = `손익분기점을 ${surplus}명 초과했습니다!`;
    } else {
        resultClass = 'loss';
        resultIcon = 'fa-arrow-trend-down';
        const deficit = breakEvenPoint - customers;
        resultMessage = `손익분기점까지 ${deficit}명 부족합니다.`;
    }
    
    // ROI 계산
    const roi = fixedCost > 0 ? (netProfit / fixedCost * 100) : 0;
    
    // 결과 표시
    document.getElementById(`scenario-result-${festivalId}`).innerHTML = `
        <div class="scenario-result ${resultClass}">
            <div class="d-flex align-items-center mb-2">
                <i class="fas ${resultIcon} me-2"></i>
                <strong>${resultMessage}</strong>
            </div>
            <div class="scenario-details">
                <div class="row">
                    <div class="col-6">
                        <small>총 매출:</small><br>
                        <strong>₩${totalRevenue.toLocaleString()}</strong>
                    </div>
                    <div class="col-6">
                        <small>순이익:</small><br>
                        <strong class="${netProfit >= 0 ? 'text-success' : 'text-danger'}">
                            ${netProfit >= 0 ? '+' : ''}₩${netProfit.toLocaleString()}
                        </strong>
                    </div>
                </div>
                <div class="row mt-2">
                    <div class="col-6">
                        <small>ROI:</small><br>
                        <strong class="${roi >= 0 ? 'text-success' : 'text-danger'}">
                            ${roi.toFixed(1)}%
                        </strong>
                    </div>
                    <div class="col-6">
                        <small>이익률:</small><br>
                        <strong>${((netProfit / totalRevenue) * 100).toFixed(1)}%</strong>
                    </div>
                </div>
            </div>
        </div>
    `;
};

/**
 * 계산기용 손익분기점 차트 업데이트
 * @param {string} festivalId - 축제 ID
 * @param {Object} data - 계산 데이터
 */
function updateBreakEvenChart(festivalId, data) {
    const canvas = document.getElementById(`breakevenChart-${festivalId}`);
    if (!canvas) return;
    
    // 기존 차트 제거
    if (window.breakEvenChartInstance) {
        window.breakEvenChartInstance.destroy();
    }
    
    const ctx = canvas.getContext('2d');
    const { price, variableCost, fixedCost, contributionMargin, breakEvenPoint } = data;
    
    // 차트 데이터 생성
    const maxCustomers = Math.max(breakEvenPoint * 2, 50);
    const customers = Array.from({length: maxCustomers + 1}, (_, i) => i);
    const revenue = customers.map(c => c * price);
    const totalCost = customers.map(c => fixedCost + (c * variableCost));
    const profit = customers.map(c => (c * price) - (fixedCost + (c * variableCost)));
    
    window.breakEvenChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: customers,
            datasets: [
                {
                    label: '매출',
                    data: revenue,
                    borderColor: '#10b981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    fill: false,
                    tension: 0.1,
                    borderWidth: 3
                },
                {
                    label: '총비용',
                    data: totalCost,
                    borderColor: '#ef4444',
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    fill: false,
                    tension: 0.1,
                    borderWidth: 3
                },
                {
                    label: '순이익',
                    data: profit,
                    borderColor: '#667eea',
                    backgroundColor: 'rgba(102, 126, 234, 0.1)',
                    fill: true,
                    tension: 0.1,
                    borderWidth: 2
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: '고객 수 (명)',
                        font: { weight: 'bold' }
                    },
                    grid: { display: true, color: 'rgba(0,0,0,0.1)' }
                },
                y: {
                    title: {
                        display: true,
                        text: '금액 (원)',
                        font: { weight: 'bold' }
                    },
                    ticks: {
                        callback: function(value) {
                            return '₩' + (value / 10000).toFixed(0) + '만';
                        }
                    },
                    grid: { display: true, color: 'rgba(0,0,0,0.1)' }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                    labels: { usePointStyle: true }
                },
                tooltip: {
                    callbacks: {
                        title: function(context) {
                            return `고객 수: ${context[0].label}명`;
                        },
                        label: function(context) {
                            return `${context.dataset.label}: ₩${context.parsed.y.toLocaleString()}`;
                        },
                        afterBody: function(context) {
                            const customerCount = parseInt(context[0].label);
                            if (customerCount === breakEvenPoint) {
                                return ['', '🎯 손익분기점!'];
                            } else if (customerCount > breakEvenPoint) {
                                return ['', `✅ 손익분기점 +${customerCount - breakEvenPoint}명`];
                            } else if (customerCount > 0) {
                                return ['', `⚠️ 손익분기점 -${breakEvenPoint - customerCount}명`];
                            }
                            return [];
                        }
                    }
                },
                annotation: {
                    annotations: {
                        breakEvenLine: {
                            type: 'line',
                            xMin: breakEvenPoint,
                            xMax: breakEvenPoint,
                            borderColor: '#f59e0b',
                            borderWidth: 3,
                            borderDash: [10, 5],
                            label: {
                                display: true,
                                content: `손익분기점: ${breakEvenPoint}명`,
                                position: 'start',
                                backgroundColor: '#f59e0b',
                                color: 'white',
                                font: { weight: 'bold' }
                            }
                        }
                    }
                }
            }
        }
    });
}

/**
 * 계산기 사용법 가이드 표시
 */
window.showCalculatorGuide = function() {
    const guideHtml = `
        <div class="modal fade" id="calculatorGuideModal" tabindex="-1">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header bg-primary text-white">
                        <h5 class="modal-title">
                            <i class="fas fa-graduation-cap me-2"></i>손익분기점 계산기 사용법
                        </h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-6">
                                <h6 class="text-primary mb-3">📊 기본 개념</h6>
                                <div class="guide-item mb-3">
                                    <strong>손익분기점 (Break-Even Point)</strong>
                                    <p class="text-muted small">총 매출이 총 비용과 같아지는 지점으로, 이익도 손실도 없는 상태입니다.</p>
                                </div>
                                <div class="guide-item mb-3">
                                    <strong>공헌이익 (Contribution Margin)</strong>
                                    <p class="text-muted small">판매가격에서 변동비용을 뺀 금액으로, 고정비용을 충당하는 데 기여하는 이익입니다.</p>
                                </div>
                                <div class="guide-item mb-3">
                                    <strong>계산 공식</strong>
                                    <p class="text-muted small">손익분기점 = 고정비용 ÷ 공헌이익</p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <h6 class="text-success mb-3">💡 사용 방법</h6>
                                <ol class="guide-steps">
                                    <li class="mb-2">
                                        <strong>판매가격</strong>을 입력하세요
                                        <small class="d-block text-muted">1인당 여행 패키지 판매가격</small>
                                    </li>
                                    <li class="mb-2">
                                        <strong>변동비용</strong>을 입력하세요
                                        <small class="d-block text-muted">1인당 발생하는 비용 (항공료, 숙박비 등)</small>
                                    </li>
                                    <li class="mb-2">
                                        <strong>고정비용</strong>을 입력하세요
                                        <small class="d-block text-muted">고객 수와 관계없이 발생하는 비용 (마케팅, 인건비 등)</small>
                                    </li>
                                    <li class="mb-2">
                                        <strong>계산하기</strong> 버튼을 클릭하세요
                                        <small class="d-block text-muted">자동으로 손익분기점이 계산됩니다</small>
                                    </li>
                                    <li>
                                        <strong>시나리오 테스트</strong>로 수익성을 확인하세요
                                        <small class="d-block text-muted">예상 고객 수를 입력하여 수익을 시뮬레이션</small>
                                    </li>
                                </ol>
                            </div>
                        </div>
                        
                        <div class="alert alert-info mt-4">
                            <h6><i class="fas fa-lightbulb me-2"></i>활용 팁</h6>
                            <ul class="mb-0">
                                <li>실시간으로 값을 변경하면서 손익분기점 변화를 확인해보세요</li>
                                <li>다양한 가격 전략을 테스트해볼 수 있습니다</li>
                                <li>차트를 통해 시각적으로 손익분기점을 파악할 수 있습니다</li>
                                <li>시나리오 테스트로 다양한 고객 수에 따른 수익을 예측해보세요</li>
                            </ul>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
                            <i class="fas fa-check me-1"></i>이해했습니다
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // 기존 모달 제거
    const existingModal = document.getElementById('calculatorGuideModal');
    if (existingModal) existingModal.remove();
    
    // 새 모달 생성 및 표시
    document.body.insertAdjacentHTML('beforeend', guideHtml);
    const modal = new bootstrap.Modal(document.getElementById('calculatorGuideModal'));
    modal.show();
};

/**
 * 계산기 초기화
 * @param {string} festivalId - 축제 ID
 */
window.resetCalculator = function(festivalId) {
    const businessData = getBusinessData(festivalId);
    if (!businessData) return;
    
    // 입력값 초기화
    document.getElementById(`calc-price-${festivalId}`).value = businessData.basePrice;
    document.getElementById(`calc-variable-${festivalId}`).value = businessData.totalVariableCost;
    document.getElementById(`calc-fixed-${festivalId}`).value = businessData.fixedCosts;
    
    const profitData = marketAnalysis.profitability && marketAnalysis.profitability[festivalId];
    const expectedCustomers = profitData ? profitData.expectedCustomers : 25;
    document.getElementById(`calc-customers-${festivalId}`).value = expectedCustomers;
    
    // 계산 실행
    calculateBreakEven(festivalId);
    
    // 피드백
    const resetMsg = document.createElement('div');
    resetMsg.className = 'alert alert-info position-fixed';
    resetMsg.style.cssText = `
        top: 20px; right: 20px; z-index: 9999; 
        min-width: 250px; animation: slideInRight 0.3s ease-out;
    `;
    resetMsg.innerHTML = `
        <i class="fas fa-refresh me-2"></i>
        초기값으로 복원되었습니다.
    `;
    
    document.body.appendChild(resetMsg);
    setTimeout(() => {
        resetMsg.style.animation = 'slideOutRight 0.3s ease-in';
        setTimeout(() => resetMsg.remove(), 300);
    }, 2000);
};

/**
 * 계산기 실시간 업데이트 리스너 설정
 * @param {string} festivalId - 축제 ID
 */
function setupCalculatorListeners(festivalId) {
    const priceInput = document.getElementById(`calc-price-${festivalId}`);
    const variableInput = document.getElementById(`calc-variable-${festivalId}`);
    const fixedInput = document.getElementById(`calc-fixed-${festivalId}`);
    const customersInput = document.getElementById(`calc-customers-${festivalId}`);
    
    // 실시간 계산 함수
    const updateCalculation = () => {
        const price = parseInt(priceInput?.value) || 0;
        const variableCost = parseInt(variableInput?.value) || 0;
        const fixedCost = parseInt(fixedInput?.value) || 0;
        
        if (price > variableCost && price > 0) {
            const contributionMargin = price - variableCost;
            const marginRate = (contributionMargin / price) * 100;
            const breakEvenPoint = Math.ceil(fixedCost / contributionMargin);
            
            // 실시간 업데이트 (계산 버튼 없이)
            document.getElementById(`calc-contribution-${festivalId}`).textContent = 
                `₩${contributionMargin.toLocaleString()}`;
            document.getElementById(`calc-margin-rate-${festivalId}`).textContent = 
                `${marginRate.toFixed(1)}%`;
            document.getElementById(`calc-breakeven-${festivalId}`).textContent = 
                `${breakEvenPoint}명`;
            
            // 시나리오도 자동 업데이트
            const customers = parseInt(customersInput?.value) || 0;
            if (customers > 0) {
                testScenario(festivalId);
            }
        }
    };
    
    // 입력 이벤트 리스너 추가
    [priceInput, variableInput, fixedInput].forEach(input => {
        if (input) {
            input.addEventListener('input', debounce(updateCalculation, 300));
        }
    });
    
    // 고객 수 입력 시 시나리오 테스트
    if (customersInput) {
        customersInput.addEventListener('input', debounce(() => {
            if (parseInt(customersInput.value) > 0) {
                testScenario(festivalId);
            }
        }, 300));
    }
}

/**
 * 디바운스 함수 (너무 빈번한 계산 방지)
 * @param {Function} func - 실행할 함수
 * @param {number} wait - 대기 시간(ms)
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * 계산 성공 피드백 표시
 */
function showCalculationSuccess() {
    // 임시 성공 메시지 표시
    const successMsg = document.createElement('div');
    successMsg.className = 'alert alert-success position-fixed';
    successMsg.style.cssText = `
        top: 20px; right: 20px; z-index: 9999; 
        min-width: 250px; animation: slideInRight 0.3s ease-out;
    `;
    successMsg.innerHTML = `
        <i class="fas fa-check-circle me-2"></i>
        손익분기점이 계산되었습니다!
    `;
    
    document.body.appendChild(successMsg);
    
    // 3초 후 제거
    setTimeout(() => {
        successMsg.style.animation = 'slideOutRight 0.3s ease-in';
        setTimeout(() => successMsg.remove(), 300);
    }, 3000);
}

/**
 * 견적 요청 처리
 * @param {string} productCode - 상품 코드
 */
window.requestQuote = function(productCode) {
    if (window.Toast) {
        window.Toast.show('견적 요청이 접수되었습니다. 24시간 내 연락드리겠습니다.', 'success');
    } else {
        alert('견적 요청이 접수되었습니다. 24시간 내 연락드리겠습니다.');
    }
    
    console.log('견적 요청 - 상품 코드:', productCode);
};
