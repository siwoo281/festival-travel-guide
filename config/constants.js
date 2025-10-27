// ===== 전역 설정 상수 =====

window.APP_CONFIG = {
    // 캐시 설정
    CACHE: {
        TTL_12H: 12 * 60 * 60 * 1000,
        TTL_6H: 6 * 60 * 60 * 1000,
        TTL_1H: 60 * 60 * 1000,
        LOCAL_STORAGE_KEY: 'unsplash-cache-v1'
    },
    
    // API 타임아웃
    API: {
        TIMEOUT_SHORT: 1200,    // 1.2초
        TIMEOUT_MEDIUM: 3000,   // 3초
        TIMEOUT_LONG: 5000,     // 5초
        RETRY_COUNT: 3
    },
    
    // 이미지 최적화
    IMAGE: {
        CARD_WIDTH: 400,
        HERO_WIDTH: 1200,
        QUALITY: 80,
        QUALITY_LOW: 60,
        FORMAT: 'auto',
        FIT: 'crop',
        // Unsplash 파라미터 생성
        getParams(width = 400, quality = 80) {
            return `?w=${width}&auto=${this.FORMAT}&q=${quality}&fit=${this.FIT}`;
        },
        // 기본 카드 이미지 파라미터
        get CARD_PARAMS() {
            return this.getParams(this.CARD_WIDTH, this.QUALITY);
        },
        // 히어로 이미지 파라미터
        get HERO_PARAMS() {
            return this.getParams(this.HERO_WIDTH, this.QUALITY);
        }
    },
    
    // UI 설정
    UI: {
        SKELETON_CARD_COUNT: 6,
        ANIMATION_DURATION: 300,
        DEBOUNCE_DELAY: 500,
        MAX_QUIZ_RESULTS: 5
    },
    
    // 통화 심볼
    CURRENCY_SYMBOLS: {
        'EUR': '€',
        'USD': '$',
        'GBP': '£',
        'JPY': '¥',
        'CNY': '¥',
        'KRW': '₩',
        'THB': '฿',
        'INR': '₹',
        'BRL': 'R$',
        'MXN': '$',
        'TWD': 'NT$'
    },
    
    // 축제 정보 매핑
    FESTIVAL_LOCATIONS: {
        tomatina: {
            city: 'Valencia',
            countryCode: 'es',
            countryName: '스페인',
            currency: 'EUR',
            lat: 39.4167,
            lon: -0.7889
        },
        oktoberfest: {
            city: 'Munich',
            countryCode: 'de',
            countryName: '독일',
            currency: 'EUR',
            lat: 48.1351,
            lon: 11.5820
        },
        carnival: {
            city: 'Rio de Janeiro',
            countryCode: 'br',
            countryName: '브라질',
            currency: 'BRL',
            lat: -22.9068,
            lon: -43.1729
        }
    },
    
    // 로그 레벨
    LOG_LEVELS: {
        ERROR: 0,
        WARN: 1,
        INFO: 2,
        DEBUG: 3
    }
};

// 하위 호환성을 위한 별칭
window.CONFIG = window.APP_CONFIG;
