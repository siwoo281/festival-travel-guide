// ===== 유틸리티 헬퍼 함수 =====

/**
 * 가격 문자열을 숫자로 정규화
 * @param {string|number} v - 가격 값
 * @returns {number}
 */
function normalizePrice(v) {
    if (!v) return 0;
    if (typeof v === 'number') return v;
    const str = String(v).replace(/[^\d]/g, '');
    return parseInt(str) || 0;
}

/**
 * 문자열을 정수로 변환
 * @param {string|number} v
 * @returns {number}
 */
function toInt(v) {
    return parseInt(String(v).replace(/[^\d]/g, '')) || 0;
}

/**
 * 문자열을 URL 친화적인 slug로 변환
 * @param {string} s
 * @returns {string}
 */
function slugify(s) {
    return String(s).toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');
}

/**
 * CSV 텍스트를 배열로 파싱
 * @param {string} text - CSV 텍스트
 * @returns {Array<Object>}
 */
function parseCsv(text) {
    const lines = text.trim().split('\n');
    if (lines.length === 0) return [];
    
    const headers = lines[0].split(',').map(h => h.trim());
    const records = [];
    
    for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(',').map(v => v.trim());
        const record = {};
        headers.forEach((h, idx) => {
            record[h] = values[idx] || '';
        });
        records.push(record);
    }
    
    return records;
}

/**
 * Unsplash 이미지 URL 최적화
 * @param {string} url
 * @returns {string}
 */
function optimizeFallbackImage(url) {
    if (!url) return '';
    
    // Unsplash 이미지인 경우 최적화 파라미터 추가
    if (url.includes('images.unsplash.com')) {
        const baseUrl = url.split('?')[0];
        return `${baseUrl}?w=400&auto=format&q=78&fit=crop`;
    }
    
    return url;
}

/**
 * 객체를 ID로 인덱싱
 * @param {Array<Object>} list
 * @returns {Object}
 */
function indexById(list) {
    const map = {};
    for (const item of list) {
        if (item.id) {
            map[item.id] = item;
        }
    }
    return map;
}

/**
 * D-Day 계산
 * @param {string} dateStr - 날짜 문자열 (YYYY-MM-DD)
 * @returns {number|null}
 */
function computeDDay(dateStr) {
    if (!dateStr) return null;
    try {
        const target = new Date(dateStr);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        target.setHours(0, 0, 0, 0);
        const diff = Math.ceil((target - today) / (1000 * 60 * 60 * 24));
        return diff;
    } catch {
        return null;
    }
}

/**
 * 통화 심볼 포맷
 * @param {string} code - 통화 코드 (예: EUR, USD)
 * @returns {string}
 */
function formatCurrencySymbol(code) {
    const symbols = {
        'EUR': '€', 'USD': '$', 'GBP': '£', 'JPY': '¥',
        'CNY': '¥', 'KRW': '₩', 'THB': '฿', 'INR': '₹',
        'BRL': 'R$', 'MXN': '$', 'TWD': 'NT$'
    };
    return symbols[code] || code;
}
