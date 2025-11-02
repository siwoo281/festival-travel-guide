/**
 * Festival Travel Guide - Mobile Tab Selector Utility
 *
 * 모바일 뷰에서 상세 정보 모달의 탭 네비게이션을 드롭다운으로 변환하고,
 * 탭과 드롭다운의 상태를 동기화하는 로직을 설정합니다.
 */
function setupMobileTabSelector() {
    const modal = document.getElementById('festivalModal');
    if (!modal) return;

    const tabContainer = modal.querySelector('.detail-tabs');
    const mobileSelector = modal.querySelector('#mobileTabSelector');
    const tabLinks = modal.querySelectorAll('.detail-tabs .nav-link');

    if (!tabContainer || !mobileSelector || !tabLinks.length) {
        return;
    }

    // --- 1. 탭 링크를 기반으로 드롭다운 옵션 생성 ---
    // 함수가 여러 번 호출될 수 있으므로, 기존 옵션을 초기화합니다.
    mobileSelector.innerHTML = ''; 
    tabLinks.forEach(link => {
        const option = document.createElement('option');
        option.value = link.getAttribute('href');
        option.textContent = link.textContent.trim();
        
        // 현재 활성화된 탭을 드롭다운의 기본 선택 값으로 설정합니다.
        if (link.classList.contains('active')) {
            option.selected = true;
        }
        mobileSelector.appendChild(option);
    });

    // --- 2. 드롭다운 변경 시 해당 탭으로 전환 ---
    // 이전에 추가된 이벤트 리스너가 있다면 제거하여 중복을 방지합니다.
    if (mobileSelector._changeHandler) {
        mobileSelector.removeEventListener('change', mobileSelector._changeHandler);
    }
    const changeHandler = (event) => {
        const targetTabId = event.target.value;
        const targetTab = modal.querySelector(`.nav-link[href="${targetTabId}"]`);
        if (targetTab) {
            // Bootstrap의 Tab API를 사용하여 탭을 프로그래매틱하게 활성화합니다.
            const tab = new bootstrap.Tab(targetTab);
            tab.show();
        }
    };
    mobileSelector.addEventListener('change', changeHandler);
    mobileSelector._changeHandler = changeHandler; // 리스너 참조 저장

    // --- 3. 탭 클릭(데스크톱) 시 드롭다운 선택 값 업데이트 ---
    // 이벤트 위임을 사용하여 컨테이너에 한 번만 리스너를 추가합니다.
    if (!tabContainer.dataset.listenerAttached) {
        tabContainer.addEventListener('shown.bs.tab', (event) => {
            // event.target은 새로 활성화된 탭 링크입니다.
            const activeTabHref = event.target.getAttribute('href');
            if (mobileSelector.value !== activeTabHref) {
                mobileSelector.value = activeTabHref;
            }
        });
        tabContainer.dataset.listenerAttached = 'true';
    }
}

// script.js에서 window 객체를 통해 호출할 수 있도록 전역에 함수를 노출합니다.
window.setupMobileTabSelector = setupMobileTabSelector;