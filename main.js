// Festival Travel Guide - Main Entry Point (Refactored)

// 1. 정적 import로 모든 모듈을 가져옵니다.
import './env.js';
import './config/constants.js';
import './utils/logger.js';
import './utils/helpers.js';
import './services/apiService.js';
import './api-config.js';
import './tourapi-adapter.js';
// import './script.js'; // 더 이상 사용하지 않음
import './api-integration.js';
import './tourism-data.js';
import './tourism-display.js';
// import './utils/handleUrlHash.js'; // 메인에서 자체 해시 처리 사용
import './utils/setupMobileTabSelector.js';

import { festivalsData } from './data/festivals.js';
import { loadCsvAndMerge } from './data/csv-loader.js';
import { loadFestivalCards, setupModalHandlers, showFestivalDetail, createFestivalCard, togglePlanner, updatePlanEstimate, savePlan, copyPlan, prefillPlannerFromTier } from './modules/ui.js';
import { startQuiz } from './modules/quiz.js';


// 2. 애플리케이션 초기화 함수
async function initApp() {
    try {
        console.log("🚀 Festival Travel Guide App Initializing from main.js...");

        // 페이지 로드 시 맨 위로 스크롤 (브라우저 스크롤 복원 방지)
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;

        // CSV 병합(자동 추가) 후 카드 렌더
        const mergeSummary = await loadCsvAndMerge('/data/festivals.sample.csv');
        console.log('📦 CSV merge summary:', mergeSummary);

        // UI 및 모달 핸들러 설정
        loadFestivalCards();
        setupModalHandlers();

        // 퀴즈 이벤트 핸들러 설정
        const startBtn = document.getElementById('startQuizBtn');
        if (startBtn) startBtn.addEventListener('click', startQuiz);

        // 이벤트 위임으로 전역 함수 노출 최소화
        setupEventDelegation();

        // 필수 전역 함수만 노출 (createFestivalCard는 quiz.js에서 사용)
        window.createFestivalCard = createFestivalCard;
        window.showFestivalDetail = showFestivalDetail;

        // URL 해시 처리
        handleUrlHash();
        window.addEventListener('hashchange', handleUrlHash, false);

        console.log('✅ Festival Travel Guide - Application initialized successfully.');

        // Hero 배경 교차 로테이션 설정
        setupHeroBackgroundRotation();

        // Hero가 화면을 꽉 채우도록 동적 높이 적용 (헤더 높이 보정)
        setupHeroSizeFit();

        // Service Worker (개발 환경에서는 비활성화하여 HMR 간섭 방지)
        if (import.meta.env.DEV && 'serviceWorker' in navigator) {
            try {
                const regs = await navigator.serviceWorker.getRegistrations();
                regs.forEach(reg => reg.unregister());
                console.log('🧹 Dev mode: existing Service Workers unregistered to avoid HMR issues');
            } catch (e) { /* noop */ }
        }
        if (import.meta.env.PROD && 'serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                // 페이지 완전 로드 후 다시 한번 맨 위로 스크롤 보장
                window.scrollTo(0, 0);
                
                navigator.serviceWorker.register('./sw.js')
                    .then(reg => console.log('🛟 Service Worker registered:', reg.scope))
                    .catch(err => console.warn('Service Worker registration failed:', err));
            });
        } else {
            // 개발 환경에서도 완전 로드 후 스크롤 위치 보장
            window.addEventListener('load', () => {
                window.scrollTo(0, 0);
            });
        }
    } catch (error) {
        console.error('❌ Failed to initialize the application:', error);
    }
}

// DOM 상태에 따라 즉시 실행 또는 이벤트로 초기화
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

/**
 * 이벤트 위임을 통한 전역 함수 노출 최소화
 */
function setupEventDelegation() {
    // 플래너 관련 이벤트 위임
    document.body.addEventListener('click', (e) => {
        const target = e.target;
        
        // togglePlanner 버튼
        if (target.closest('[onclick*="togglePlanner"]')) {
            const festivalId = target.closest('.festival-card')?.dataset.festivalId;
            const baseDays = target.closest('.festival-card')?.dataset.baseDays || 5;
            if (festivalId) {
                e.stopPropagation();
                togglePlanner(e, festivalId, parseInt(baseDays));
            }
        }
        
        // updatePlanEstimate
        if (target.matches('[onchange*="updatePlanEstimate"]') || target.matches('[oninput*="updatePlanEstimate"]')) {
            const festivalId = target.closest('.planner-panel')?.id.replace('planner-', '');
            if (festivalId) {
                updatePlanEstimate(festivalId);
            }
        }
        
        // savePlan 버튼
        if (target.matches('[onclick*="savePlan"]')) {
            const festivalId = target.closest('.planner-panel')?.id.replace('planner-', '');
            if (festivalId) {
                e.stopPropagation();
                savePlan(festivalId);
            }
        }
        
        // copyPlan 버튼
        if (target.matches('[onclick*="copyPlan"]')) {
            const festivalId = target.closest('.planner-panel')?.id.replace('planner-', '');
            if (festivalId) {
                e.stopPropagation();
                copyPlan(festivalId);
            }
        }
        
        // prefillPlannerFromTier
        if (target.matches('[onclick*="prefillPlannerFromTier"]')) {
            const match = target.getAttribute('onclick')?.match(/prefillPlannerFromTier\('([^']+)',\s*'([^']+)'\)/);
            if (match) {
                e.stopPropagation();
                prefillPlannerFromTier(match[1], match[2]);
            }
        }
    });
    
    // 전역 함수를 이벤트 핸들러로 노출
    window.togglePlanner = togglePlanner;
    window.updatePlanEstimate = updatePlanEstimate;
    window.savePlan = savePlan;
    window.copyPlan = copyPlan;
    window.prefillPlannerFromTier = prefillPlannerFromTier;
}

function handleUrlHash() {
    const hash = window.location.hash.substring(1);
    if (!hash) return;

    const [festivalId, tabId] = hash.split('/');
    
    if (festivalsData[festivalId]) {
        showFestivalDetail(festivalId, tabId);
    }
}

/**
 * 메인 히어로 섹션 배경을 로컬 이미지 2장으로 교차 페이드
 */
function setupHeroBackgroundRotation() {
    const hero = document.querySelector('.hero-section');
    if (!hero) return;

    // 공백이 포함된 파일명은 브라우저에서 안전하게 로드되도록 URL 인코딩 처리
    const images = [
        encodeURI('images/Generated image 4.png'),
        encodeURI('images/Generated image 2.png')
    ];

    // 사전 로드
    images.forEach(src => { const img = new Image(); img.src = src; });

    // 배경 레이어 생성
    const bg1 = document.createElement('div');
    const bg2 = document.createElement('div');
    bg1.className = 'hero-bg is-active';
    bg2.className = 'hero-bg';
    bg1.style.backgroundImage = `url('${images[0]}')`;
    bg2.style.backgroundImage = `url('${images[1]}')`;

    // 기존 오버레이/콘텐츠 아래에 배치되도록 맨 앞에 삽입
    hero.prepend(bg2);
    hero.prepend(bg1);

    let currentIndex = 0; // 현재 보여지는 이미지 index
    setInterval(() => {
        const nextIndex = (currentIndex + 1) % images.length;
        const showing = currentIndex % 2 === 0 ? bg1 : bg2;
        const hidden = currentIndex % 2 === 0 ? bg2 : bg1;

        // 다음 이미지 세팅 후 페이드
        hidden.style.backgroundImage = `url('${images[nextIndex]}')`;
        hidden.classList.add('is-active');
        showing.classList.remove('is-active');
        currentIndex = nextIndex;
    }, 8000); // 8초 간격
}

/**
 * 헤더 높이를 제외한 가시 영역을 히어로 높이로 설정하여 페이지를 꽉 채운 느낌 제공
 */
function setupHeroSizeFit() {
    const hero = document.querySelector('.hero-section');
    if (!hero) return;
    const header = document.querySelector('.header-section');

    const apply = () => {
        const vp = (window.visualViewport && window.visualViewport.height) || window.innerHeight || document.documentElement.clientHeight || 0;
        const headerH = header ? header.offsetHeight : 0;
        const target = Math.max(0, Math.round(vp - headerH));
        hero.style.minHeight = `${target}px`;
        hero.style.height = `${target}px`;
    };

    apply();
    window.addEventListener('resize', apply);
    window.addEventListener('orientationchange', apply);
}
