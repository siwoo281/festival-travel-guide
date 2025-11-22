// ===== 유틸리티 헬퍼 함수 =====

import DOMPurify from 'dompurify';

/**
 * HTML 문자열을 안전하게 정제 (XSS 방어)
 * @param {string} dirty - 정제할 HTML 문자열
 * @param {Object} [config] - DOMPurify 설정
 * @returns {string} 정제된 HTML
 */
export function sanitizeHTML(dirty, config = {}) {
    if (!dirty) return '';
    
    const defaultConfig = {
        ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u', 'a', 'ul', 'ol', 'li', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'code', 'pre', 'span', 'div', 'img'],
        ALLOWED_ATTR: ['href', 'target', 'rel', 'src', 'alt', 'title', 'class', 'id'],
        ALLOW_DATA_ATTR: false,
        ...config
    };
    
    return DOMPurify.sanitize(dirty, defaultConfig);
}

/**
 * 가격 문자열을 숫자로 정규화
 * @param {string|number} v - 가격 값 (예: "₩2,000,000" 또는 2000000)
 * @returns {number} 정규화된 숫자
 * @example
 * normalizePrice("₩2,000,000") // returns 2000000
 */
export function normalizePrice(v) {
    if (!v) return 0;
    if (typeof v === 'number') return v;
    const str = String(v).replace(/[^\d]/g, '');
    return parseInt(str) || 0;
}

/**
 * 문자열을 정수로 변환 (숫자만 추출)
 * @param {string|number} v - 변환할 값
 * @returns {number} 정수
 * @example
 * toInt("abc123def456") // returns 123456
 */
export function toInt(v) {
    return parseInt(String(v).replace(/[^\d]/g, '')) || 0;
}

/**
 * 문자열을 URL 친화적인 slug로 변환
 * @param {string} s - 원본 문자열
 * @returns {string} slug 문자열
 * @example
 * slugify("Hello World!") // returns "hello-world"
 */
export function slugify(s) {
    return String(s).toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');
}

/**
 * CSV 텍스트를 객체 배열로 파싱
 * @param {string} text - CSV 텍스트 (첫 줄은 헤더)
 * @returns {Array<Object<string, string>>} 파싱된 레코드 배열
 * @example
 * parseCsv("name,age\nAlice,30\nBob,25")
 * // returns [{name: "Alice", age: "30"}, {name: "Bob", age: "25"}]
 */
export function parseCsv(text) {
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
export function optimizeFallbackImage(url) {
    if (!url) return '';
    
    // Unsplash 이미지인 경우 최적화 파라미터 추가
    if (url.includes('images.unsplash.com')) {
        const baseUrl = url.split('?')[0];
        return `${baseUrl}?w=400&auto=format&q=78&fit=crop`;
    }
    
    return url;
}

/**
 * 객체 배열을 ID로 인덱싱하여 맵으로 변환
 * @param {Array<{id: string}>} list - ID 속성을 가진 객체 배열
 * @returns {Object<string, Object>} ID를 키로 하는 객체 맵
 * @example
 * indexById([{id: "a", val: 1}, {id: "b", val: 2}])
 * // returns {a: {id: "a", val: 1}, b: {id: "b", val: 2}}
 */
export function indexById(list) {
    const map = {};
    for (const item of list) {
        if (item.id) {
            map[item.id] = item;
        }
    }
    return map;
}

/**
 * D-Day 계산 (목표 날짜까지 남은 일수)
 * @param {string} dateStr - 날짜 문자열 (YYYY-MM-DD 형식)
 * @returns {number|null} 남은 일수 (양수: 미래, 음수: 과거), 오류 시 null
 * @example
 * computeDDay("2025-12-31") // returns 남은 일수
 */
export function computeDDay(dateStr) {
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
 * 통화 코드를 해당 심볼로 변환
 * @param {string} code - 통화 코드 (ISO 4217, 예: EUR, USD, KRW)
 * @returns {string} 통화 심볼 (€, $, ₩ 등) 또는 원본 코드
 * @example
 * formatCurrencySymbol("KRW") // returns "₩"
 * formatCurrencySymbol("USD") // returns "$"
 */
export function formatCurrencySymbol(code) {
    const symbols = {
        'EUR': '€', 'USD': '$', 'GBP': '£', 'JPY': '¥',
        'CNY': '¥', 'KRW': '₩', 'THB': '฿', 'INR': '₹',
        'BRL': 'R$', 'MXN': '$', 'TWD': 'NT$'
    };
    return symbols[code] || code;
}
