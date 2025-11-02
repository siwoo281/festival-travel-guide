import { festivalsData } from '../data/festivals.js';

/**
 * Toast 알림 시스템
 * @example
 * const Toast = new ToastSystem();
 * Toast.show('성공!', 'success');
 */
export class ToastSystem {
    constructor(containerId = 'toast-container') {
        this.container = document.getElementById(containerId);
        if (!this.container) {
            this.container = document.createElement('div');
            this.container.id = containerId;
            document.body.appendChild(this.container);
        }
    }

    show(message, type = 'info', duration = 3000) {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.textContent = message;

        this.container.appendChild(toast);

        // Animate in
        setTimeout(() => {
            toast.classList.add('show');
        }, 100);

        // Animate out and remove
        setTimeout(() => {
            toast.classList.remove('show');
            toast.addEventListener('transitionend', () => {
                if (toast.parentNode === this.container) {
                    this.container.removeChild(toast);
                }
            });
        }, duration);
    }
}

/**
 * 이미지 지연 로딩 클래스
 * @example
 * const lazyLoader = new LazyImageLoader();
 * lazyLoader.observe(); // 페이지의 모든 data-src 이미지를 관찰 시작
 */
export class LazyImageLoader {
    constructor(options = {}) {
        this.options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
            ...options
        };
        this.observer = new IntersectionObserver(this.handleIntersect.bind(this), this.options);
    }

    handleIntersect(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.dataset.src;
                if (src) {
                    img.src = src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    }

    observe() {
        const images = document.querySelectorAll('img[data-src]');
        images.forEach(img => this.observer.observe(img));
    }
}

/**
 * 성능 최적화 유틸리티 (디바운스, 스로틀)
 * @example
 * window.addEventListener('resize', PerformanceOptimizer.debounce(() => {
 *   console.log('Resized!');
 * }, 250));
 */
export class PerformanceOptimizer {
    static debounce(func, delay) {
        let timeoutId;
        return function(...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(this, args);
            }, delay);
        };
    }

    static throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
}

/**
 * 사용자 친화적인 오류 메시지 반환
 * @param {Error} error - 오류 객체
 * @returns {string} 사용자에게 표시할 메시지
 */
export function getFriendlyErrorMessage(error) {
    console.error("An error occurred:", error);
    if (error.name === 'NetworkError') {
        return '네트워크 연결을 확인해주세요.';
    }
    if (error instanceof TypeError) {
        return '데이터 처리 중 문제가 발생했습니다.';
    }
    return '알 수 없는 오류가 발생했습니다. 잠시 후 다시 시도해주세요.';
}

/**
 * 문자열을 URL-friendly 슬러그로 변환
 * @param {string} text
 * @returns {string}
 */
export function slugify(text) {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
}

/**
 * 간단한 CSV 텍스트를 객체 배열로 파싱
 * @param {string} csvText
 * @returns {Array<Object>}
 */
export function parseCsv(csvText) {
    const lines = csvText.trim().split('\n');
    const headers = lines[0].split(',').map(h => h.trim());
    return lines.slice(1).map(line => {
        const values = line.split(',').map(v => v.trim());
        return headers.reduce((obj, header, index) => {
            obj[header] = values[index];
            return obj;
        }, {});
    });
}

/**
 * 값을 정수로 변환 (실패 시 0 반환)
 * @param {*} value
 * @returns {number}
 */
export function toInt(value) {
    const parsed = parseInt(value, 10);
    return isNaN(parsed) ? 0 : parsed;
}

/**
 * 다양한 형식의 가격 문자열을 숫자로 정규화
 * @param {string} priceString - 예: "₩2,200,000", "€15-25", "R$40-60"
 * @returns {number} - 평균 가격 또는 단일 가격
 */
export function normalizePrice(priceString) {
    if (!priceString || typeof priceString !== 'string') return 0;

    // 숫자, 쉼표, 점, 대시만 남기고 모두 제거
    const cleaned = priceString.replace(/[^\d,.-]/g, '');

    // 범위 처리 (예: "15-25")
    if (cleaned.includes('-')) {
        const [min, max] = cleaned.split('-').map(p => parseFloat(p.replace(/,/g, '')) || 0);
        return (min + max) / 2;
    }

    // 단일 값 처리
    return parseFloat(cleaned.replace(/,/g, '')) || 0;
}

/**
 * D-day 계산
 * @param {string} dateString - 'YYYY-MM-DD' 형식의 날짜 문자열
 * @returns {string} - 'D-day' 또는 'D+day' 형식의 문자열
 */
export function computeDDay(dateString) {
    if (!dateString) return '';
    const targetDate = new Date(dateString);
    const today = new Date();
    // 시간, 분, 초를 0으로 설정하여 날짜만 비교
    targetDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    const diffTime = targetDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
        return 'D-day';
    } else if (diffDays > 0) {
        return `D-${diffDays}`;
    } else {
        return `D+${Math.abs(diffDays)}`;
    }
}

/**
 * 축제 ID에 따라 통화 기호 반환
 * @param {string} festivalId
 * @returns {string} '₩', '€', 'R$' 등
 */
export function getCurrencyForFestival(festivalId) {
    const festival = festivalsData[festivalId];
    if (!festival) return '₩'; // 기본값

    switch (festival.countryCode) {
        case 'es':
        case 'de':
            return '€';
        case 'br':
            return 'R$';
        default:
            return '₩';
    }
}

/**
 * 가격과 축제 ID를 기반으로 통화 기호와 함께 포맷팅
 * @param {number|string} price
 * @param {string} festivalId
 * @returns {string} 예: "€15", "R$ 40,000"
 */
export function formatCurrencySymbol(price, festivalId) {
    const currencySymbol = getCurrencyForFestival(festivalId);
    const numericPrice = typeof price === 'string' ? normalizePrice(price) : price;
    const formattedPrice = new Intl.NumberFormat('ko-KR').format(numericPrice);
    return `${currencySymbol}${formattedPrice}`;
}
