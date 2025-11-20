/**
 * 웰컴 모달 - 강화된 호환성 버전
 */
(function() {
    console.log('🚀 웰컴 모달 스크립트 시작');
    
    let modal = null;
    let confirmBtn = null;
    let previousFocused = null;
    let isOpen = false;
    
    // 요소 찾기 함수
    function findElements() {
        modal = document.getElementById('welcome-modal');
        confirmBtn = document.getElementById('confirm-welcome-btn');
        
        console.log('📍 Modal element:', modal);
        console.log('📍 Confirm button:', confirmBtn);
        
        return modal && confirmBtn;
    }

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
        console.log('🔒 웰컴 모달 닫기 시도, isOpen:', isOpen);
        if (!isOpen || !modal) return;

        console.log('🔒 웰컴 모달 닫는 중...');
        
        // 모달 숨기기
        modal.classList.add('is-hidden');
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
        
        isOpen = false;

        // 이벤트 리스너 제거
        document.removeEventListener('keydown', trapFocus);
        document.removeEventListener('keydown', handleEscape);

        // 이전 포커스 복원
        if (previousFocused && typeof previousFocused.focus === 'function') {
            try {
                previousFocused.focus();
            } catch (e) {
                console.warn('포커스 복원 실패:', e);
            }
        }

        previousFocused = null;
        console.log('✅ 웰컴 모달 닫기 완료');
    }

    // 여러 방식으로 버튼 이벤트 등록
    function setupButtonEvents() {
        if (!confirmBtn) return;
        
        console.log('🔘 버튼 이벤트 설정 중...');
        
        // 방법 1: addEventListener
        confirmBtn.addEventListener('click', function(e) {
            console.log('🔘 addEventListener 클릭 감지');
            e.preventDefault();
            e.stopPropagation();
            closeModal();
        });
        
        // 방법 2: onclick 직접 할당
        confirmBtn.onclick = function(e) {
            console.log('🔘 onclick 직접 할당 클릭 감지');
            e.preventDefault();
            e.stopPropagation();
            closeModal();
            return false;
        };
        
        // 방법 3: 터치 이벤트 (모바일 대응)
        confirmBtn.addEventListener('touchend', function(e) {
            console.log('🔘 터치 이벤트 감지');
            e.preventDefault();
            closeModal();
        });
        
        console.log('✅ 버튼 이벤트 설정 완료');
    }

    // 강제 닫기 함수 (디버깅용)
    window.forceCloseModal = function() {
        console.log('🚨 강제 모달 닫기');
        if (modal) {
            modal.style.display = 'none';
            document.body.classList.remove('modal-open');
        }
    };

    // 모달 외부 클릭시 닫기
    function setupOutsideClick() {
        if (!modal) return;
        
        modal.addEventListener('click', function(e) {
            const content = modal.querySelector('.welcome-modal-content');
            if (content && !content.contains(e.target)) {
                console.log('🖱️ 모달 외부 클릭');
                closeModal();
            }
        });
    }

    // 초기화 함수
    function initModal() {
        console.log('🎬 웰컴 모달 초기화 시작...');
        
        if (!findElements()) {
            console.error('❌ 웰컴 모달 요소를 찾을 수 없습니다');
            // 재시도
            setTimeout(initModal, 100);
            return;
        }
        
        setupButtonEvents();
        setupOutsideClick();
        
        // 모달이 숨겨져 있지 않다면 열기
        if (!modal.classList.contains('is-hidden')) {
            console.log('🎭 모달 자동 열기');
            openModal();
        } else {
            console.log('🙈 모달이 숨겨져 있음');
        }
        
        console.log('✅ 웰컴 모달 초기화 완료');
    }

    // 다양한 시점에서 초기화 시도
    if (document.readyState === 'loading') {
        console.log('📚 DOM 로딩 중 - DOMContentLoaded 대기');
        document.addEventListener('DOMContentLoaded', initModal);
    } else if (document.readyState === 'interactive') {
        console.log('🔄 DOM 인터랙티브 - 즉시 초기화');
        initModal();
    } else {
        console.log('✅ DOM 완료 - 즉시 초기화');
        initModal();
    }
    
    // 추가 안전장치 - 500ms 후 재시도
    setTimeout(function() {
        if (!modal || !confirmBtn) {
            console.log('🔄 500ms 후 재시도');
            initModal();
        }
    }, 500);
})();
