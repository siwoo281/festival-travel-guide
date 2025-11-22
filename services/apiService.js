// ===== API 서비스 =====
import { optimizeFallbackImage } from '../utils/helpers.js';

// 로거 준비 (없을 경우 console 대체)
const logger = (typeof window !== 'undefined' && window.logger) ? window.logger : console;

// Unsplash API 키 로드 (없으면 빈 문자열)
const UNSPLASH_ACCESS_KEY = (typeof window !== 'undefined' && window.ENV && window.ENV.UNSPLASH_KEY) ? window.ENV.UNSPLASH_KEY : '';

/**
 * Unsplash API를 통해 이미지 검색 (메모리 및 localStorage 캐싱 지원)
 * @param {string} query - 검색 키워드 (예: "paris eiffel tower")
 * @param {string} fallback - API 실패 시 사용할 fallback 이미지 URL
 * @returns {Promise<string>} 최적화된 이미지 URL (캐시된 값 또는 새로운 API 결과)
 * @example
 * const imageUrl = await fetchUnsplashImage("tokyo festival", "https://example.com/fallback.jpg");
 */
export async function fetchUnsplashImage(query, fallback) {
    try {
        // 키가 없으면 즉시 fallback 사용
        if (!UNSPLASH_ACCESS_KEY) {
            return optimizeFallbackImage(fallback);
        }
        const cfg = window.IMAGE_CONFIG || {};
        const timeoutMs = Number.isFinite(cfg.timeoutMs) ? cfg.timeoutMs : 3000;
        const cacheTtl = Number.isFinite(cfg.cacheTtlMs) ? cfg.cacheTtlMs : (6 * 60 * 60 * 1000);

        // 메모리/로컬스토리지 캐시 확인
        const now = Date.now();
        window.__unsplashCache = window.__unsplashCache || {};
        const mem = window.__unsplashCache;
        const LS_KEY = 'unsplash-cache-v1';
        
        if (mem[query] && (now - (mem[query].ts || 0) < cacheTtl)) {
            const base = mem[query].base;
            return `${base}?w=400&auto=format&q=80&fit=crop`;
        }
        
        try {
            const store = JSON.parse(localStorage.getItem(LS_KEY) || '{}');
            const rec = store[query];
            if (rec && rec.base && (now - (rec.ts || 0) < cacheTtl)) {
                mem[query] = rec;
                return `${rec.base}?w=400&auto=format&q=80&fit=crop`;
            }
        } catch {}

        // 짧은 타임아웃으로 API 요청
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
        
        try {
            const response = await fetch(
                `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=1&client_id=${UNSPLASH_ACCESS_KEY}`,
                { signal: controller.signal }
            );
            
            clearTimeout(timeoutId);
            
            if (!response.ok) {
                throw new Error(`API request failed: ${response.status}`);
            }
            
            const data = await response.json();
            const imageUrl = data.results[0]?.urls?.regular || '';
            
            if (imageUrl) {
                const base = imageUrl.split('?')[0];
                const rec = { base, ts: now };
                window.__unsplashCache[query] = rec;
                
                try {
                    const store = JSON.parse(localStorage.getItem(LS_KEY) || '{}');
                    store[query] = rec;
                    localStorage.setItem(LS_KEY, JSON.stringify(store));
                } catch (storageError) {
                    logger.warn('localStorage 저장 실패 (사생활 보호 모드?):', storageError.message);
                }
                
                return `${base}?w=400&auto=format&q=80&fit=crop`;
            }
            
            return optimizeFallbackImage(fallback);
        } catch (fetchError) {
            clearTimeout(timeoutId);
            
            if (fetchError.name === 'AbortError') {
                logger.debug(`Unsplash API 타임아웃 (${timeoutMs}ms 초과), fallback 사용`);
            } else {
                logger.debug('Unsplash API 실패, fallback 이미지 사용:', fetchError.message);
            }
            
            return optimizeFallbackImage(fallback);
        }
    } catch (error) {
        logger.error('예상치 못한 오류:', error);
        return optimizeFallbackImage(fallback);
    }
}

/**
 * 환율 정보 가져오기 (Exchange Rate API 사용)
 * @param {string} [fromCurrency='KRW'] - 기준 통화 (ISO 4217 코드)
 * @param {string} [toCurrency='USD'] - 대상 통화 (ISO 4217 코드)
 * @returns {Promise<number|null>} 환율 (예: 1 KRW = ? USD), 실패 시 null
 * @example
 * const rate = await getExchangeRate('KRW', 'EUR');
 * // 1 KRW = 0.00075 EUR (예시)
 */
export async function getExchangeRate(fromCurrency = 'KRW', toCurrency = 'USD') {
    try {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
        if (!response.ok) throw new Error('환율 API 실패');
        
        const data = await response.json();
        return data.rates[toCurrency] || null;
    } catch (error) {
        logger.warn('환율 정보 로드 실패:', error.message);
        return null;
    }
}
