(function(){
  const overlay = document.getElementById('welcome-modal');
  const confirmBtn = document.getElementById('confirm-welcome-btn');
  if (!overlay || !confirmBtn) return;

  let prevFocused = null;
  let keydownHandler = null;

  // 안전한 포커스 폴백 요소를 보장
  function ensureFocusSentinel() {
    let sentinel = document.getElementById('focus-sentinel');
    if (!sentinel) {
      sentinel = document.createElement('div');
      sentinel.id = 'focus-sentinel';
      sentinel.tabIndex = -1;
      sentinel.style.position = 'fixed';
      sentinel.style.top = '-9999px';
      document.body.appendChild(sentinel);
    }
    return sentinel;
  }

  // 모달 밖의 안전한 포커스 타겟 찾기
  function findSafeFocusTarget() {
    // 1) 내비게이션 브랜드 링크
    const brand = document.querySelector('.navbar .navbar-brand');
    if (brand) return brand;
    // 2) 메인 컨텐츠 앵커
    const festivals = document.getElementById('festivals');
    if (festivals) {
      festivals.tabIndex = festivals.tabIndex || -1;
      return festivals;
    }
    // 3) 카드 컨테이너
    const cards = document.getElementById('festivalCards');
    if (cards) {
      cards.tabIndex = cards.tabIndex || -1;
      return cards;
    }
    // 4) 최후의 보루: 센티넬
    return ensureFocusSentinel();
  }

  function getFocusableElements() {
    return overlay.querySelectorAll(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
  }

  function openModal() {
    // 현재 포커스를 저장하되, 모달 내부가 아니어야 유효
    const currentActive = document.activeElement;
    prevFocused = currentActive && !overlay.contains(currentActive) ? currentActive : null;
    document.body.classList.add('modal-open');
  overlay.classList.remove('is-hidden');
  // inert 해제 (포커스 가능)
  overlay.removeAttribute('inert');
  // aria-hidden은 사용하지 않음 (inert로 대체)
  overlay.removeAttribute('aria-hidden');

    // Focus primary action after paint
    requestAnimationFrame(() => {
      try { confirmBtn.focus({ preventScroll: true }); } catch(_) {}
    });

    // Focus trap + ESC close
    keydownHandler = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeModal();
        return;
      }
      if (e.key === 'Tab') {
        const focusables = Array.from(getFocusableElements());
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first || !overlay.contains(document.activeElement)) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };
    document.addEventListener('keydown', keydownHandler);
  }

  function closeModal() {
    // 1) 우선 모달을 inert로 만들어 포커스가 더 이상 머물지 않도록 함
    try { overlay.setAttribute('inert', ''); } catch(_) {}

    // 2) 포커스가 모달 안에 남아있다면 안전한 위치로 이동
    const active = document.activeElement;
    const needsFocusMove = overlay.contains(active);
    try {
      if (prevFocused && typeof prevFocused.focus === 'function' && !overlay.contains(prevFocused)) {
        prevFocused.focus({ preventScroll: true });
      } else if (needsFocusMove) {
        const target = findSafeFocusTarget();
        target && typeof target.focus === 'function' ? target.focus({ preventScroll: true }) : active && typeof active.blur === 'function' && active.blur();
      }
    } catch(_) {}
    
    // 2. 키보드 이벤트 리스너 제거
    if (keydownHandler) {
      document.removeEventListener('keydown', keydownHandler);
      keydownHandler = null;
    }
    
    // 포커스가 여전히 모달 내부인 경우 강제 blur
    try {
      if (overlay.contains(document.activeElement)) {
        document.activeElement.blur();
      }
    } catch(_) {}

    // 3) 모달 숨기기 (ARIA는 inert로 대체하므로 aria-hidden 설정은 생략)
    overlay.classList.add('is-hidden');
    overlay.removeAttribute('aria-hidden');
    // 스크롤 잠금 해제 (클래스/인라인 스타일 모두 해제)
    document.body.classList.remove('modal-open');
    try {
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.documentElement && (document.documentElement.style.overflow = '');
      document.documentElement && (document.documentElement.style.height = '');
    } catch(_) {}
  }

  // Click outside content closes modal
  overlay.addEventListener('click', (e) => {
    const content = overlay.querySelector('.welcome-modal-content');
    if (!content) return;
    if (!content.contains(e.target)) {
      closeModal();
    }
  });

  confirmBtn.addEventListener('click', (e) => {
    e.preventDefault();
    closeModal();
  });

  // Auto-open on first load
  if (!overlay.classList.contains('is-hidden')) {
    // Already visible by default; ensure body lock and focus trap
    openModal();
  } else {
    // If hidden by default for some reason, you can force open once
    // openModal();
  }
})();
