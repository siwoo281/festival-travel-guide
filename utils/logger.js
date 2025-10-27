// ===== 로거 시스템 =====
// 개발/프로덕션 환경에 따라 로그 레벨 자동 조정

const LOG_LEVELS = {
    ERROR: 0,
    WARN: 1,
    INFO: 2,
    DEBUG: 3
};

class Logger {
    constructor() {
        // 환경 감지: 프로덕션에서는 ERROR/WARN만 출력
        this.isDevelopment = window.ENV?.MODE === 'development' || 
                           window.location.hostname === 'localhost' || 
                           window.location.hostname === '127.0.0.1';
        
        this.level = this.isDevelopment ? LOG_LEVELS.DEBUG : LOG_LEVELS.WARN;
        
        // 프로덕션 알림
        if (!this.isDevelopment) {
            console.log('%c🚀 Festival Travel Guide - Production Mode', 
                       'color: #4ECDC4; font-weight: bold; font-size: 14px;');
        }
    }

    error(message, ...args) {
        if (this.level >= LOG_LEVELS.ERROR) {
            console.error(`❌ ${message}`, ...args);
        }
    }

    warn(message, ...args) {
        if (this.level >= LOG_LEVELS.WARN) {
            console.warn(`⚠️ ${message}`, ...args);
        }
    }

    info(message, ...args) {
        if (this.level >= LOG_LEVELS.INFO) {
            console.log(`ℹ️ ${message}`, ...args);
        }
    }

    debug(message, ...args) {
        if (this.level >= LOG_LEVELS.DEBUG) {
            console.log(`🔍 ${message}`, ...args);
        }
    }

    // 성공 메시지 (항상 표시)
    success(message, ...args) {
        console.log(`✅ ${message}`, ...args);
    }

    // 그룹 로깅 (개발 모드만)
    group(title) {
        if (this.isDevelopment) {
            console.group(title);
        }
    }

    groupEnd() {
        if (this.isDevelopment) {
            console.groupEnd();
        }
    }

    // 시간 측정
    time(label) {
        if (this.isDevelopment) {
            console.time(label);
        }
    }

    timeEnd(label) {
        if (this.isDevelopment) {
            console.timeEnd(label);
        }
    }
}

// 전역 logger 인스턴스
window.logger = new Logger();
