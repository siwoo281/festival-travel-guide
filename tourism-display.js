// ===== 관광 정보 표시 함수 =====

// 주변 관광지 표시
function displayNearbyAttractions(festivalId) {
    const attractions = nearbyAttractions[festivalId];
    const container = document.getElementById('nearbyAttractionsList');
    
    if (!attractions) {
        container.innerHTML = '<p>정보를 준비 중입니다.</p>';
        return;
    }
    
    container.innerHTML = attractions.map(attr => `
        <div class="attraction-card">
            <h5>${attr.name}</h5>
            <div class="attraction-info">
                <span><i class="fas fa-map-marker-alt"></i> ${attr.distance}</span>
                <span><i class="fas fa-clock"></i> ${attr.duration}</span>
                <span><i class="fas fa-${attr.transport === '기차' ? 'train' : attr.transport === '버스' ? 'bus' : 'subway'}"></i> ${attr.transport}</span>
                <span><i class="fas fa-coins"></i> ${attr.cost}</span>
            </div>
            <p>${attr.description}</p>
            <div class="attraction-meta">
                <span class="rating"><i class="fas fa-star"></i> ${attr.rating}</span>
                <span><i class="fas fa-clock"></i> ${attr.hours}</span>
            </div>
            <a href="${attr.mapLink}" target="_blank" class="btn btn-sm btn-outline-primary mt-2">
                <i class="fas fa-map"></i> 지도 보기
            </a>
        </div>
    `).join('');
}

// 현지 음식 표시
function displayLocalFood(festivalId) {
    const foodData = localFoodGuide[festivalId];
    
    if (!foodData) return;
    
    // 필수 음식
    const mustTryContainer = document.getElementById('mustTryFoodList');
    mustTryContainer.innerHTML = foodData.mustTry.map(food => `
        <div class="food-card">
            <div class="food-emoji">${food.image}</div>
            <h5>${food.name}</h5>
            <p>${food.description}</p>
            <div class="food-price">${food.price}</div>
            <div class="food-allergens">
                ${food.allergens.map(a => `<span class="allergen-badge">${a}</span>`).join('')}
            </div>
        </div>
    `).join('');
    
    // 레스토랑
    const restaurantsContainer = document.getElementById('restaurantsList');
    restaurantsContainer.innerHTML = foodData.restaurants.map(rest => `
        <div class="restaurant-card">
            <div class="restaurant-header">
                <h5>${rest.name}</h5>
                <span class="rating"><i class="fas fa-star"></i> ${rest.rating}</span>
            </div>
            <div class="restaurant-type">${rest.type}</div>
            <p><i class="fas fa-map-marker-alt"></i> ${rest.location}</p>
            <p><strong>특선:</strong> ${rest.specialty}</p>
            <div class="restaurant-meta">
                <span class="price-range">${rest.priceRange}</span>
                <span><i class="fas fa-clock"></i> ${rest.hours}</span>
            </div>
        </div>
    `).join('');
}

// 긴급 정보 표시
function displayEmergencyInfo(festivalId) {
    const emergency = emergencyInfo[festivalId];
    const phrases = basicPhrases[festivalId];
    
    if (!emergency) return;
    
    // 대사관 정보
    const embassyContainer = document.getElementById('embassyInfo');
    embassyContainer.innerHTML = `
        <p><strong>${emergency.embassy.name}</strong></p>
        <p><i class="fas fa-map-marker-alt"></i> ${emergency.embassy.address}</p>
        <p><i class="fas fa-phone"></i> ${emergency.embassy.phone}</p>
        <p><i class="fas fa-exclamation-triangle"></i> <strong>긴급:</strong> ${emergency.embassy.emergency}</p>
        <p><i class="fas fa-envelope"></i> ${emergency.embassy.email}</p>
        <p><i class="fas fa-clock"></i> ${emergency.embassy.hours}</p>
    `;
    
    // 긴급 연락처
    const contactsContainer = document.getElementById('emergencyContacts');
    contactsContainer.innerHTML = `
        <div class="emergency-contact">
            <i class="fas fa-police"></i> <strong>경찰:</strong> ${emergency.police}
        </div>
        <div class="emergency-contact">
            <i class="fas fa-ambulance"></i> <strong>구급차:</strong> ${emergency.ambulance}
        </div>
        <div class="emergency-contact">
            <i class="fas fa-fire"></i> <strong>소방서:</strong> ${emergency.fire}
        </div>
        <div class="emergency-contact">
            <i class="fas fa-hospital"></i> <strong>병원:</strong> ${emergency.hospital}
        </div>
        <div class="emergency-contact">
            <i class="fas fa-pills"></i> <strong>약국:</strong> ${emergency.pharmacy}
        </div>
        <div class="emergency-contact">
            <i class="fas fa-info-circle"></i> <strong>관광안내:</strong> ${emergency.tourism}
        </div>
    `;
    
    // 기본 회화
    if (phrases) {
        const phrasesContainer = document.getElementById('basicPhrasesList');
        phrasesContainer.innerHTML = `
            <p class="mb-3"><strong>${phrases.language} 기본 회화</strong></p>
            <div class="phrases-list">
                ${phrases.phrases.map(p => {
                    const foreign = p.spanish || p.german || p.portuguese;
                    return `
                        <div class="phrase-item">
                            <div class="phrase-foreign">${foreign}</div>
                            <div class="phrase-korean">${p.korean}</div>
                            <div class="phrase-pronunciation">[${p.pronunciation}]</div>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    }
}

// 모달 열릴 때 관광 정보 로드
const originalShowFestivalDetail = window.showFestivalDetail;
window.showFestivalDetail = function(festivalId) {
    // 기존 함수 실행
    if (originalShowFestivalDetail) {
        originalShowFestivalDetail(festivalId);
    }
    
    // 관광 정보 표시
    setTimeout(() => {
        displayNearbyAttractions(festivalId);
        displayLocalFood(festivalId);
        displayEmergencyInfo(festivalId);
    }, 100);
};

console.log('🎯 관광 정보 표시 함수 로드 완료!');
