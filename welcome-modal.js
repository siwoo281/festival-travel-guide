/**
 * 웰컴 모달 - 단순하고 접근성이 좋은 구현
 */
(function() {
    console.log('웰컴 모달 스크립트 로드됨');
    
    const modal = document.getElementById('welcome-modal');
    const confirmBtn = document.getElementById('confirm-welcome-btn');
    
    console.log('Modal element:', modal);
    console.log('Confirm button:', confirmBtn);
    
    if (!modal || !confirmBtn) {
        console.error('웰컴 모달 요소를 찾을 수 없습니다');
        return;
    }

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
        console.log('웰컴 모달 닫기 시도, isOpen:', isOpen);
        if (!isOpen) return;

        console.log('웰컴 모달 닫는 중...');
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

    // 전역 함수로 노출 (HTML onclick 이벤트용)
    window.closeWelcomeModal = function() {
        console.log('전역 closeWelcomeModal 함수 호출됨');
        closeModal();
    };

    // 확인 버튼 클릭
    confirmBtn.addEventListener('click', (e) => {
        console.log('웰컴 모달 확인 버튼 클릭됨');
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
    // DOM이 완전히 로드된 후 실행
    function initModal() {
        console.log('웰컴 모달 초기화 중...');
        
        // 모달이 숨겨져 있지 않다면 열기
        if (!modal.classList.contains('is-hidden')) {
            console.log('모달 자동 열기');
            openModal();
        } else {
            console.log('모달이 숨겨져 있음');
        }
    }

    // DOM 상태에 따라 즉시 실행 또는 대기
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initModal);
    } else {
        // DOM이 이미 로드된 경우 즉시 실행
        initModal();
    }
})();
