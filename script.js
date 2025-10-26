// ===== Unsplash API 설정 =====
const UNSPLASH_ACCESS_KEY = 'Id8OlS5V38OdwbDrUvNzBmnTao4U6dyPbOPyZwcNtAI';

// ===== 축제 데이터 정의 =====
const festivalsData = {
    tomatina: {
        id: 'tomatina',
        name: '라 토마티나',
        location: '스페인 발렌시아 부뇰',
        period: '매년 8월 마지막 수요일',
        duration: '5일',
        price: '₩2,200,000',
        target: '20-30대 젊은 여행객',
        description: '세계에서 가장 큰 토마토 축제! 수만 명이 거리에서 토마토를 던지며 즐기는 독특한 스페인 전통 축제입니다.',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3078.7285894982576!2d-0.7889!3d39.4167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604f4cf0efb06f%3A0x40640856e73be20!2sBu%C3%B1ol%2C%20Valencia%2C%20Spain!5e0!3m2!1sen!2skr!4v1234567890',
        imageQuery: 'la tomatina festival spain',
        fallbackImage: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800',
        attractions: [
            {
                name: '라 토마티나 축제',
                description: '수만 명이 참가하는 토마토 던지기 축제',
                image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600'
            },
            {
                name: '발렌시아 구시가지',
                description: '중세 시대 건축물과 성당',
                image: 'https://images.unsplash.com/photo-1562883676-8c7feb83f09b?w=600'
            },
            {
                name: '알부페라 국립공원',
                description: '아름다운 석호와 쌀 재배 지역',
                image: 'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=600'
            }
        ],
        budget: {
            '항공권': 800000,
            '숙박': 500000,
            '식사': 400000,
            '입장료': 200000,
            '교통': 200000,
            '기타': 100000
        },
        tips: {
            준비물: ['오래된 옷', '고글', '방수 신발', '수건'],
            주의사항: ['귀중품은 호텔에 보관', '토마토가 눈에 들어가지 않도록 주의', '축제 후 샤워 시설 이용'],
            추천: ['축제 전날 부뇰 도착', '파에야 맛보기', '발렌시아 해변 방문']
        },
        packageDetails: {
            included: [
                '왕복 항공권 (인천-마드리드-발렌시아, 이코노미석)',
                '4성급 호텔 4박 (조식 포함)',
                '라 토마티나 입장권 및 참가복',
                '발렌시아 시내 가이드 투어',
                '알부페라 국립공원 투어',
                '여행자 보험',
                '한국인 가이드',
                '공항-호텔 왕복 셔틀'
            ],
            excluded: [
                '개인 경비 및 쇼핑 비용',
                '선택 관광 프로그램',
                '점심/저녁 식사',
                '호텔 미니바',
                '여권 발급 비용'
            ],
            productCode: 'FEST-ES-001',
            departureDates: [
                '2025년 8월 23일 (토)',
                '2025년 8월 24일 (일)',
                '2025년 8월 25일 (월)'
            ],
            groupDiscount: {
                '4-6명': '1인당 30,000원 할인',
                '7-9명': '1인당 50,000원 할인',
                '10명 이상': '1인당 80,000원 할인'
            }
        }
    },
    oktoberfest: {
        id: 'oktoberfest',
        name: '옥토버페스트',
        location: '독일 뮌헨',
        period: '9월 말 - 10월 초 (약 16-18일)',
        duration: '6일',
        price: '₩2,800,000',
        target: '30대 이상 성인',
        description: '세계 최대 맥주 축제! 전통 의상을 입고 거대한 텐트에서 맥주와 음식을 즐기는 독일의 대표 축제입니다.',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.7285894982576!2d11.5497!3d48.1316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e75f9a38c5fd9%3A0x10cb84a7db1987d!2sTheresienwiese%2C%20Munich%2C%20Germany!5e0!3m2!1sen!2skr!4v1234567890',
        imageQuery: 'oktoberfest munich germany',
        fallbackImage: 'https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?w=800',
        attractions: [
            {
                name: '옥토버페스트 메인 텐트',
                description: '전통 맥주와 바이에른 음식',
                image: 'https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?w=600'
            },
            {
                name: '노이슈반슈타인 성',
                description: '동화 속 성의 모델',
                image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600'
            },
            {
                name: '마리엔 광장',
                description: '뮌헨 구시가지 중심',
                image: 'https://images.unsplash.com/photo-1595867818082-083862f3d630?w=600'
            }
        ],
        budget: {
            '항공권': 1000000,
            '숙박': 700000,
            '식사': 500000,
            '입장료': 300000,
            '교통': 200000,
            '기타': 100000
        },
        tips: {
            준비물: ['전통 의상 (디른들/레더호젠)', '편한 신발', '큰 가방'],
            주의사항: ['텐트 예약 필수', '현금 준비', '과음 주의'],
            추천: ['아침 일찍 방문', '전통 의상 대여', '주변 도시 방문']
        },
        packageDetails: {
            included: [
                '왕복 항공권 (인천-뮌헨, 이코노미석)',
                '5성급 호텔 5박 (조식 포함)',
                '옥토버페스트 입장권 2회',
                '맥주 텐트 예약석 & 맥주 2리터 쿠폰',
                '뮌헨 시내 가이드 투어',
                '노이슈반슈타인 성 당일 투어',
                '여행자 보험',
                '한국인 가이드'
            ],
            excluded: [
                '개인 경비 및 쇼핑 비용',
                '선택 관광 프로그램',
                '추가 맥주 및 식사',
                '호텔 미니바 및 룸서비스',
                '여권 발급 비용'
            ],
            productCode: 'FEST-DE-002',
            departureDates: [
                '2025년 9월 18일 (목)',
                '2025년 9월 25일 (목)',
                '2025년 10월 2일 (목)'
            ],
            groupDiscount: {
                '4-6명': '1인당 50,000원 할인',
                '7-9명': '1인당 80,000원 할인',
                '10명 이상': '1인당 100,000원 할인'
            }
        }
    },
    carnival: {
        id: 'carnival',
        name: '리우 카니발',
        location: '브라질 리우데자네이루',
        period: '매년 2월 (사순절 시작 전)',
        duration: '7일',
        price: '₩3,500,000',
        target: '전 연령',
        description: '세계 최대 규모의 카니발! 화려한 삼바 퍼레이드와 거리 축제가 펼쳐지는 브라질의 대표 축제입니다.',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.2285894982576!2d-43.2093!3d-22.9068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997e58a085b7af%3A0x4d11e9a933d38ce3!2sRio%20de%20Janeiro%2C%20Brazil!5e0!3m2!1sen!2skr!4v1234567890',
        imageQuery: 'rio carnival brazil',
        fallbackImage: 'https://images.unsplash.com/photo-1516450137517-162bfbeb8dba?w=800',
        attractions: [
            {
                name: '삼바드롬 퍼레이드',
                description: '화려한 삼바 학교들의 경연',
                image: 'https://images.unsplash.com/photo-1516450137517-162bfbeb8dba?w=600'
            },
            {
                name: '코르코바도 예수상',
                description: '리우의 상징적인 랜드마크',
                image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=600'
            },
            {
                name: '코파카바나 해변',
                description: '세계적으로 유명한 해변',
                image: 'https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=600'
            }
        ],
        budget: {
            '항공권': 1500000,
            '숙박': 800000,
            '식사': 500000,
            '입장료': 400000,
            '교통': 200000,
            '기타': 100000
        },
        tips: {
            준비물: ['가벼운 여름옷', '선크림', '모자', '카메라'],
            주의사항: ['소매치기 주의', '귀중품 최소 소지', '수분 보충'],
            추천: ['거리 파티 참가', '삼바 의상 체험', '해변 산책']
        },
        packageDetails: {
            included: [
                '왕복 항공권 (인천-상파울루-리우, 이코노미석)',
                '4성급 호텔 6박 (조식 포함)',
                '카니발 퍼레이드 지정석 입장권',
                '삼바드롬 VIP 구역 2일권',
                '코르코바도 예수상 투어',
                '슈가로프 마운틴 케이블카',
                '이파네마 비치 선셋 크루즈',
                '여행자 보험',
                '한국인 가이드'
            ],
            excluded: [
                '개인 경비 및 쇼핑 비용',
                '선택 관광 프로그램',
                '추가 식사 및 음료',
                '카니발 의상 대여',
                '호텔 미니바',
                '여권 및 비자 발급 비용'
            ],
            productCode: 'FEST-BR-003',
            departureDates: [
                '2026년 2월 12일 (목)',
                '2026년 2월 14일 (토)',
                '2026년 2월 16일 (월)'
            ],
            groupDiscount: {
                '4-6명': '1인당 70,000원 할인',
                '7-9명': '1인당 100,000원 할인',
                '10명 이상': '1인당 150,000원 할인'
            }
        }
    }
};

// ===== 시장 분석 데이터 =====
const marketAnalysis = {
    developmentReason: {
        trends: [
            {
                icon: 'fa-chart-line',
                title: '체험형 관광 수요 증가',
                description: 'MZ세대를 중심으로 SNS 인증샷, 특별한 경험을 중시하는 체험형 관광 수요가 연평균 25% 증가'
            },
            {
                icon: 'fa-users',
                title: '타겟층 명확한 니치 시장',
                description: '축제 중심 패키지는 20-40대 젊은층의 구매력과 여행 선호도가 높아 효과적인 마케팅 가능'
            },
            {
                icon: 'fa-globe',
                title: '차별화된 상품 경쟁력',
                description: '일반 유럽/남미 패키지와 달리 축제 시즌에 맞춘 테마 상품으로 높은 프리미엄 가격 책정 가능'
            },
            {
                icon: 'fa-calendar-check',
                title: '시즌성 활용 수익 극대화',
                description: '축제 특정 기간에 집중 판매로 성수기 매출 확보 및 연간 매출 안정화'
            }
        ],
        targetCustomers: [
            {
                segment: '주 타겟: 대학생 및 직장 초년생 (20-30대)',
                size: '50만명',
                spending: '250만원',
                reason: 'SNS 활동 활발, 새로운 경험 추구, 친구들과의 추억 만들기 중시'
            },
            {
                segment: '부 타겟: 직장인 및 신혼부부 (30-40대)',
                size: '30만명',
                spending: '350만원',
                reason: '여유로운 소득, 품질 중시, 문화체험 선호'
            }
        ]
    },
    profitability: {
        tomatina: {
            sellingPrice: 2200000,
            fixedCost: 500000,
            variableCost: 1390000,
            totalCost: 1890000,
            margin: 0.141,
            breakEven: 15,
            expectedCustomers: 120,
            annualRevenue: 37200000
        },
        oktoberfest: {
            sellingPrice: 2800000,
            fixedCost: 600000,
            variableCost: 1720000,
            totalCost: 2320000,
            margin: 0.171,
            breakEven: 12,
            expectedCustomers: 180,
            annualRevenue: 86400000
        },
        carnival: {
            sellingPrice: 3500000,
            fixedCost: 800000,
            variableCost: 2420000,
            totalCost: 3220000,
            margin: 0.223,
            breakEven: 10,
            expectedCustomers: 105,
            annualRevenue: 81900000
        }
    }
};

// ===== 기대 효과 데이터 =====
const expectedEffects = {
    financial: {
        year1: {
            revenue: 1140000000,
            profit: 210000000,
            margin: 0.181
        },
        year2Growth: 0.30,
        year3Growth: 0.50
    },
    marketing: {
        brandBuilding: '축제 전문 여행사 브랜드 구축',
        returnRate: 0.40,
        viral: 'SNS 바이럴 마케팅 효과',
        partnership: '여행 매체 및 블로거 협업'
    },
    strategic: {
        expansion: '계절별 상품 라인업 확대',
        b2b: '대학교/기업 단체 여행 수주',
        asiaExpansion: '아시아 축제 확장 계획',
        partnership: '현지 장기 파트너십 구축'
    }
};

// ===== 페이지 로드 시 초기화 =====
document.addEventListener('DOMContentLoaded', function() {
    loadFestivalCards();
    setupModalHandlers();
});

// ===== 축제 카드 로딩 =====
async function loadFestivalCards() {
    const container = document.getElementById('festivalCards');
    if (!container) return;

    container.innerHTML = '<div class="col-12 text-center"><div class="spinner-border text-primary" role="status"></div></div>';

    try {
        for (const [key, festival] of Object.entries(festivalsData)) {
            const imageUrl = await fetchUnsplashImage(festival.imageQuery, festival.fallbackImage);
            const card = createFestivalCard(festival, imageUrl);
            container.insertAdjacentHTML('beforeend', card);
        }
    } catch (error) {
        console.error('Error loading festivals:', error);
        container.innerHTML = '<div class="col-12 text-center text-danger">축제 정보를 불러올 수 없습니다.</div>';
    }
}

// ===== Unsplash 이미지 가져오기 =====
async function fetchUnsplashImage(query, fallback) {
    try {
        const response = await fetch(
            `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=1&client_id=${UNSPLASH_ACCESS_KEY}`
        );
        
        if (!response.ok) throw new Error('API request failed');
        
        const data = await response.json();
        return data.results[0]?.urls?.regular || fallback;
    } catch (error) {
        console.error('Unsplash API error:', error);
        return fallback;
    }
}

// ===== 축제 카드 HTML 생성 =====
function createFestivalCard(festival, imageUrl) {
    return `
        <div class="col-md-6 col-lg-4 mb-4">
            <div class="festival-card" onclick="showFestivalDetail('${festival.id}')">
                <div class="festival-image" style="background-image: url('${imageUrl}')"></div>
                <div class="festival-content">
                    <h3>${festival.name}</h3>
                    <p class="festival-location">
                        <i class="fas fa-map-marker-alt"></i> ${festival.location}
                    </p>
                    <p class="festival-date">
                        <i class="fas fa-calendar"></i> ${festival.period}
                    </p>
                    <p class="festival-description">${festival.description}</p>
                    <div class="festival-footer">
                        <span class="festival-price">${festival.price}</span>
                        <button class="btn btn-primary btn-sm">자세히 보기</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// ===== 모달 핸들러 설정 =====
function setupModalHandlers() {
    const modal = document.getElementById('festivalModal');
    if (modal) {
        modal.addEventListener('hidden.bs.modal', function() {
            // 모달이 닫힐 때 차트 정리
            if (window.budgetChart) {
                window.budgetChart.destroy();
                window.budgetChart = null;
            }
        });
    }
}

// ===== 축제 상세 정보 표시 =====
async function showFestivalDetail(festivalId) {
    const festival = festivalsData[festivalId];
    if (!festival) return;

    // 모달 제목 및 기본 정보 설정
    document.getElementById('festivalModalLabel').textContent = festival.name;
    document.getElementById('detailPeriod').textContent = festival.period;
    document.getElementById('detailTarget').textContent = festival.target;
    document.getElementById('detailDescription').textContent = festival.description;

    // 지도 설정
    const mapContainer = document.getElementById('detailMap');
    mapContainer.innerHTML = `<iframe src="${festival.mapUrl}" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;

    // 관광지 목록 표시
    displayAttractions(festival.attractions);

    // 경비 차트 표시
    displayBudgetChart(festival.budget, festival.price);

    // 여행 팁 표시
    displayTravelTips(festival.tips);

    // 패키지 정보 표시
    if (festival.packageDetails) {
        displayPackageInfo(festival.packageDetails);
    }

    // 손익분기점 계산 및 표시
    displayBreakEvenAnalysis(festivalId);

    // 모달 표시
    const modal = new bootstrap.Modal(document.getElementById('festivalModal'));
    modal.show();
}

// ===== 관광지 목록 표시 =====
function displayAttractions(attractions) {
    const container = document.getElementById('attractionsList');
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

// ===== 경비 차트 표시 =====
function displayBudgetChart(budget, totalPrice) {
    const ctx = document.getElementById('budgetChart');
    if (!ctx) return;

    // 기존 차트 제거
    if (window.budgetChart) {
        window.budgetChart.destroy();
    }

    const labels = Object.keys(budget);
    const data = Object.values(budget);
    const colors = [
        '#667eea', '#764ba2', '#f093fb', '#4facfe',
        '#43e97b', '#fa709a', '#fee140', '#30cfd0'
    ];

    window.budgetChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: colors,
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        boxWidth: 15,
                        padding: 15,
                        font: { size: 12 }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed;
                            return `${label}: ₩${value.toLocaleString()}`;
                        }
                    }
                }
            }
        }
    });

    // 총 경비 표시
    document.getElementById('totalBudget').textContent = totalPrice;
}

// ===== 여행 팁 표시 =====
function displayTravelTips(tips) {
    document.getElementById('tipItems').innerHTML = tips.준비물.map(item => 
        `<li><i class="fas fa-check"></i> ${item}</li>`
    ).join('');
    
    document.getElementById('tipWarnings').innerHTML = tips.주의사항.map(item => 
        `<li><i class="fas fa-exclamation-triangle"></i> ${item}</li>`
    ).join('');
    
    document.getElementById('tipRecommendations').innerHTML = tips.추천.map(item => 
        `<li><i class="fas fa-star"></i> ${item}</li>`
    ).join('');
}

// ===== 패키지 정보 표시 =====
function displayPackageInfo(packageDetails) {
    // 포함 사항
    const includedList = document.getElementById('packageIncluded');
    if (includedList) {
        includedList.innerHTML = packageDetails.included.map(item => 
            `<li><i class="fas fa-check text-success"></i> ${item}</li>`
        ).join('');
    }
    
    // 불포함 사항
    const excludedList = document.getElementById('packageExcluded');
    if (excludedList) {
        excludedList.innerHTML = packageDetails.excluded.map(item => 
            `<li><i class="fas fa-times text-danger"></i> ${item}</li>`
        ).join('');
    }
    
    // 출발 일정
    const datesList = document.getElementById('packageDates');
    if (datesList) {
        datesList.innerHTML = packageDetails.departureDates.map(date => 
            `<li><i class="fas fa-plane-departure text-info"></i> ${date}</li>`
        ).join('');
    }
    
    // 단체 할인
    const discountDiv = document.getElementById('packageDiscount');
    if (discountDiv) {
        discountDiv.innerHTML = Object.entries(packageDetails.groupDiscount).map(([people, discount]) => 
            `<div class="discount-item">
                <span class="badge bg-warning text-dark">${people}</span> 
                <span class="text-success fw-bold">${discount}</span>
            </div>`
        ).join('');
    }
    
    // 상품 코드
    const codeElement = document.getElementById('packageCode');
    if (codeElement) {
        codeElement.textContent = packageDetails.productCode;
    }
}

// ===== 손익분기점 분석 표시 =====
function displayBreakEvenAnalysis(festivalId) {
    const profitData = marketAnalysis.profitability[festivalId];
    if (!profitData) return;

    const container = document.getElementById('breakEvenAnalysis');
    if (!container) return;

    const { fixedCost, variableCost, sellingPrice, breakEven, margin, expectedCustomers } = profitData;

    container.innerHTML = `
        <div class="info-card mt-3">
            <h3><i class="fas fa-calculator text-warning"></i> 손익분기점 분석</h3>
            <div class="break-even-content">
                <div class="row mb-3">
                    <div class="col-md-6">
                        <div class="analysis-item">
                            <strong>고정비:</strong>
                            <span class="text-primary">₩${fixedCost.toLocaleString()}</span>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="analysis-item">
                            <strong>1인당 변동비:</strong>
                            <span class="text-primary">₩${variableCost.toLocaleString()}</span>
                        </div>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-md-6">
                        <div class="analysis-item">
                            <strong>판매가:</strong>
                            <span class="text-success">₩${sellingPrice.toLocaleString()}</span>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="analysis-item">
                            <strong>1인당 공헌이익:</strong>
                            <span class="text-success">₩${(sellingPrice - variableCost).toLocaleString()}</span>
                        </div>
                    </div>
                </div>
                <div class="alert alert-info mb-3">
                    <h5 class="mb-2"><i class="fas fa-info-circle"></i> 손익분기점 공식</h5>
                    <p class="mb-0">손익분기점 = 고정비 ÷ (판매가 - 1인당 변동비)</p>
                    <p class="mb-0">= ${fixedCost.toLocaleString()} ÷ (${sellingPrice.toLocaleString()} - ${variableCost.toLocaleString()})</p>
                    <p class="mb-0">= ${fixedCost.toLocaleString()} ÷ ${(sellingPrice - variableCost).toLocaleString()}</p>
                </div>
                <div class="alert alert-success">
                    <h4 class="mb-2">
                        <i class="fas fa-chart-line"></i> 
                        최소 모객 인원: <strong>${breakEven}명</strong>
                    </h4>
                    <p class="mb-2">예상 모객: <strong>${expectedCustomers}명</strong></p>
                    <p class="mb-0">마진율: <strong>${(margin * 100).toFixed(1)}%</strong></p>
                </div>
                <div class="progress" style="height: 30px;">
                    <div class="progress-bar bg-success" role="progressbar" 
                         style="width: ${(breakEven / expectedCustomers * 100)}%"
                         aria-valuenow="${breakEven}" aria-valuemin="0" aria-valuemax="${expectedCustomers}">
                        손익분기 ${breakEven}명
                    </div>
                    <div class="progress-bar bg-info" role="progressbar" 
                         style="width: ${((expectedCustomers - breakEven) / expectedCustomers * 100)}%"
                         aria-valuenow="${expectedCustomers - breakEven}" aria-valuemin="0" aria-valuemax="${expectedCustomers}">
                        수익구간 ${expectedCustomers - breakEven}명
                    </div>
                </div>
                <small class="text-muted mt-2 d-block">
                    * ${breakEven}명 이상 모객 시 수익 발생, ${expectedCustomers}명 모객 목표
                </small>
            </div>
        </div>
    `;
}
