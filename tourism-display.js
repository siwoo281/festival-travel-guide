// ===== 관광 정보 표시 함수 =====

/**
 * 주변 관광지 정보를 표시하는 함수
 * @param {object} festival - 축제 데이터 객체
 */
function displayNearbyAttractions(festival) {
    const container = document.getElementById('nearbyAttractionsList');
    if (!container) return;

    const attractions = festival.nearbyAttractions || [];

    if (attractions.length === 0) {
        container.innerHTML = '<p>주변 관광지 정보가 아직 준비되지 않았습니다.</p>';
        return;
    }

    container.innerHTML = attractions.map(attraction => `
        <div class="attraction-card">
            <img src="${attraction.image}" alt="${attraction.name}" class="attraction-image" loading="lazy">
            <div class="attraction-content">
                <h5>${attraction.name}</h5>
                <p>${attraction.description}</p>
            </div>
        </div>
    `).join('');
}

/**
 * 현지 음식 및 추천 레스토랑 정보를 표시하는 함수
 * @param {object} festival - 축제 데이터 객체
 */
function displayLocalFood(festival) {
    const foodContainer = document.getElementById('mustTryFoodList');
    const restaurantContainer = document.getElementById('restaurantsList');

    if (!foodContainer || !restaurantContainer) return;

    const localFood = festival.localFood || [];
    const restaurants = festival.restaurants || [];

    // 음식 정보 표시
    if (localFood.length === 0) {
        foodContainer.innerHTML = '<p>현지 음식 정보가 아직 준비되지 않았습니다.</p>';
    } else {
        foodContainer.innerHTML = localFood.map(food => `
            <div class="food-card">
                <img src="${food.image}" alt="${food.name}" class="food-image" loading="lazy">
                <div class="food-content">
                    <h5>${food.name}</h5>
                    <p>${food.description}</p>
                </div>
            </div>
        `).join('');
    }

    // 레스토랑 정보 표시
    if (restaurants.length === 0) {
        restaurantContainer.innerHTML = '<p>추천 레스토랑 정보가 아직 준비되지 않았습니다.</p>';
    } else {
        restaurantContainer.innerHTML = restaurants.map(r => `
            <div class="restaurant-card">
                <div class="restaurant-header">
                    <h6>${r.name}</h6>
                    <span class="badge bg-primary">${r.type}</span>
                </div>
                <p class="restaurant-address">${r.address}</p>
                <div class="restaurant-rating">
                    <span class="rating-stars">${'★'.repeat(Math.floor(r.rating))}${'☆'.repeat(5 - Math.floor(r.rating))}</span>
                    <span class="rating-score">${r.rating.toFixed(1)}</span>
                </div>
            </div>
        `).join('');
    }
}

/**
 * 긴급 정보(대사관, 연락처, 기본 회화)를 표시하는 함수
 * @param {object} festival - 축제 데이터 객체
 */
function displayEmergencyInfo(festival) {
    const embassyContainer = document.getElementById('embassyInfo');
    const contactsContainer = document.getElementById('emergencyContacts');
    const phrasesContainer = document.getElementById('basicPhrasesList');

    if (!embassyContainer || !contactsContainer || !phrasesContainer) return;

    const emergency = festival.emergency || {};
    const embassy = emergency.embassy || {};
    const contacts = emergency.contacts || {};
    const phrases = emergency.phrases || [];

    // 대사관 정보
    embassyContainer.innerHTML = `
        <p><strong>주소:</strong> ${embassy.address || '정보 없음'}</p>
        <p><strong>연락처:</strong> ${embassy.phone || '정보 없음'}</p>
        <p><strong>긴급연락처:</strong> ${embassy.emergencyPhone || '정보 없음'}</p>
    `;

    // 긴급 연락처
    contactsContainer.innerHTML = `
        <ul>
            <li><strong>경찰:</strong> ${contacts.police || '정보 없음'}</li>
            <li><strong>구급차:</strong> ${contacts.ambulance || '정보 없음'}</li>
            <li><strong>화재:</strong> ${contacts.fire || '정보 없음'}</li>
        </ul>
    `;

    // 기본 회화
    if (phrases.length === 0) {
        phrasesContainer.innerHTML = '<p>기본 회화 정보가 아직 준비되지 않았습니다.</p>';
    } else {
        phrasesContainer.innerHTML = phrases.map(p => `
            <div class="phrase-item">
                <span class="phrase-ko">${p.ko}</span>
                <span class="phrase-local">${p.local}</span>
            </div>
        `).join('');
    }
}

/**
 * 빠른 정보(날씨, 비자, 문화 팁)를 표시하는 함수
 * @param {object} festival - 축제 데이터 객체
 */
function displayQuickInfo(festival) {
    const container = document.getElementById('quickInfo');
    if (!container) return;

    const weather = festival.weather || {};
    const visa = festival.visaInfo || {};
    const culturalTips = festival.culturalTips || [];

    container.innerHTML = `
        <div class="quick-info-item">
            <i class="fas fa-cloud-sun"></i>
            <div>
                <strong>날씨</strong>
                <p>${weather.averageTemp || '정보 없음'} (${weather.description || 'N/A'})</p>
            </div>
        </div>
        <div class="quick-info-item">
            <i class="fas fa-passport"></i>
            <div>
                <strong>비자</strong>
                <p>${visa.required ? '필수' : '불필요'} (${visa.duration || '정보 없음'})</p>
            </div>
        </div>
        <div class="quick-info-item">
            <i class="fas fa-lightbulb"></i>
            <div>
                <strong>문화 팁</strong>
                ${culturalTips.length > 0 ? `<ul>${culturalTips.map(tip => `<li>${tip}</li>`).join('')}</ul>` : '<p>정보 없음</p>'}
            </div>
        </div>
    `;
}

console.log('🎯 관광 정보 표시 함수 로드 완료!');

// 전역 접근을 위한 안전한 래퍼 노출 (모듈/전역 혼용 환경 호환)
(function exposeTourismDisplayGlobals() {
    if (typeof window === 'undefined') return;

    // 입력이 축제 객체 또는 배열/부분 객체여도 동작하도록 노멀라이즈
    window.displayNearbyAttractions = function(arg) {
        const festival = Array.isArray(arg) ? { nearbyAttractions: arg } : (arg || {});
        try {
            displayNearbyAttractions(festival);
        } catch (e) {
            console.warn('displayNearbyAttractions 호출 실패:', e);
        }
    };

    window.displayLocalFood = function(arg) {
        // arg가 음식 배열인 경우 restaurants는 빈 배열로 처리
        const festival = Array.isArray(arg) ? { localFood: arg, restaurants: [] } : (arg || {});
        try {
            displayLocalFood(festival);
        } catch (e) {
            console.warn('displayLocalFood 호출 실패:', e);
        }
    };

    window.displayEmergencyInfo = function(arg) {
        // arg가 emergency 서브객체인 경우에도 동작하도록 래핑
        const festival = (arg && !arg.emergency) ? { emergency: arg } : (arg || {});
        try {
            displayEmergencyInfo(festival);
        } catch (e) {
            console.warn('displayEmergencyInfo 호출 실패:', e);
        }
    };
})();
