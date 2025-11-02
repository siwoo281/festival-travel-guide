/**
 * 웰컴 모달 - 단순하고 접근성이 좋은 구현
 */
(function() {
    const modal = document.getElementById('welcome-modal');
    const confirmBtn = document.getElementById('confirm-welcome-btn');
    
    if (!modal || !confirmBtn) return;

    let previousFocused = null;
    let isOpen = false;

    // 포커스 가능한 요소들 찾기
    function getFocusableElements() {
        return modal.querySelectorAll(
            'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );
    }

    // 포커스 트랩
    function trapFocus(e) {
        if (e.key !== 'Tab') return;

        const focusableElements = Array.from(getFocusableElements());
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
            // Shift + Tab
            if (document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
            }
        } else {
            // Tab
            if (document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
            }
        }
    }

    // ESC 키로 모달 닫기
    function handleEscape(e) {
        if (e.key === 'Escape' && isOpen) {
            closeModal();
        }
    }

    function openModal() {
        if (isOpen) return;

        // 현재 포커스된 요소 저장
        previousFocused = document.activeElement;
        
        // 모달 표시
        modal.classList.remove('is-hidden');
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');
        
        isOpen = true;

        // 이벤트 리스너 추가
        document.addEventListener('keydown', trapFocus);
        document.addEventListener('keydown', handleEscape);

        // 확인 버튼에 포커스
        requestAnimationFrame(() => {
            confirmBtn.focus();
        });
    }

    function closeModal() {
        if (!isOpen) return;

        // 모달 숨기기
        modal.classList.add('is-hidden');
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
        
        isOpen = false;

        // 이벤트 리스너 제거
        document.removeEventListener('keydown', trapFocus);
        document.removeEventListener('keydown', handleEscape);

        // 이전 포커스 복원
        if (previousFocused && previousFocused.focus) {
            previousFocused.focus();
        }

        previousFocused = null;
    }

    // 확인 버튼 클릭
    confirmBtn.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal();
    });

    // 모달 외부 클릭시 닫기
    modal.addEventListener('click', (e) => {
        const content = modal.querySelector('.welcome-modal-content');
        if (content && !content.contains(e.target)) {
            closeModal();
        }
    });

    // 페이지 로드시 모달 자동 열기
    if (!modal.classList.contains('is-hidden')) {
        openModal();
    }
})();
