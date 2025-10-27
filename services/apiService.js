// ===== API 서비스 =====

/**
 * Unsplash 이미지 가져오기 (캐싱 포함)
 * @param {string} query - 검색 쿼리
 * @param {string} fallback - fallback 이미지 URL
 * @returns {Promise<string>}
 */
async function fetchUnsplashImage(query, fallback) {
    try {
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
        
        const response = await fetch(
            `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=1&client_id=${UNSPLASH_ACCESS_KEY}`,
            { signal: controller.signal }
        );
        
        clearTimeout(timeoutId);
        
        if (!response.ok) throw new Error('API request failed');
        
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
            } catch {}
            
            return `${base}?w=400&auto=format&q=80&fit=crop`;
        }
        
        return optimizeFallbackImage(fallback);
    } catch (error) {
        logger.debug('Unsplash API 실패, fallback 이미지 사용:', error.message);
        return optimizeFallbackImage(fallback);
    }
}

/**
 * 환율 정보 가져오기
 * @param {string} fromCurrency - 기준 통화 (예: KRW)
 * @param {string} toCurrency - 대상 통화 (예: EUR)
 * @returns {Promise<number|null>}
 */
async function getExchangeRate(fromCurrency = 'KRW', toCurrency = 'USD') {
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
