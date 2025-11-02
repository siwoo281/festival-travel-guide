// Deprecated: main.js에서 해시 라우팅/처리를 담당합니다.
// 이 파일은 더 이상 사용되지 않으며, 남아있는 참조를 위해 안전한 no-op을 제공합니다.
(function() {
    if (typeof window === 'undefined') return;
    if (!window.handleUrlHash) {
        window.handleUrlHash = function noopHandleUrlHash() { /* no-op (deprecated) */ };
    }
})();
