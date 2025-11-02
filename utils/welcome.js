// /utils/welcome.js
function initWelcomeModal() {
    const welcomeModal = document.getElementById('welcome-modal');
    const confirmBtn = document.getElementById('confirm-welcome-btn');
    
    if (!welcomeModal || !confirmBtn) return;

    const previouslyFocusedElement = document.activeElement;

    // 포커스 가능한 모든 요소 찾기
    const focusableElements = Array.from(
        welcomeModal.querySelectorAll(
            'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
        )
    ).filter(el => !el.hasAttribute('disabled'));
    
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    const closeModal = () => {
        welcomeModal.classList.add('is-hidden');
        document.body.style.overflow = '';
        previouslyFocusedElement?.focus();
        document.removeEventListener('keydown', handleKeydown);
    };

    const handleKeydown = (e) => {
        if (e.key === 'Escape') {
            closeModal();
            return;
        }

        if (e.key === 'Tab') {
            // 포커스 트랩 로직
            if (e.shiftKey) { // Shift + Tab
                if (document.activeElement === firstFocusable) {
                    lastFocusable.focus();
                    e.preventDefault();
                }
            } else { // Tab
                if (document.activeElement === lastFocusable) {
                    firstFocusable.focus();
                    e.preventDefault();
                }
            }
        }
    };

    // 모달 열기
    document.body.style.overflow = 'hidden';
    welcomeModal.classList.remove('is-hidden');
    firstFocusable?.focus();

    // 이벤트 리스너 등록
    confirmBtn.addEventListener('click', closeModal);
    document.addEventListener('keydown', handleKeydown);
}

// DOM이 로드된 후 모달 초기화 함수를 실행합니다.
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWelcomeModal);
} else {
    initWelcomeModal();
}
