// ===== 새로 추가된 콘텐츠 표시 함수들 =====

/**
 * 주변 관광지 표시
 */
function displayNearbyAttractions(attractions) {
    const container = document.getElementById('nearbyAttractionsList');
    if (!container || !attractions || attractions.length === 0) return;
    
    container.innerHTML = attractions.map(attr => `
        <div class="col-md-6 mb-4">
            <div class="info-card h-100">
                <div class="d-flex justify-content-between align-items-start mb-2">
                    <h4 class="mb-0">${attr.name}</h4>
                    <span class="badge bg-primary">${attr.distance}</span>
                </div>
                <p class="text-muted mb-2"><i class="fas fa-clock"></i> ${attr.time}</p>
                <p>${attr.description}</p>
            </div>
        </div>
    `).join('');
}

/**
 * 현지 음식 표시
 */
function displayLocalFood(foods) {
    const container = document.getElementById('mustTryFoodList');
    if (!container || !foods || foods.length === 0) return;
    
    container.innerHTML = foods.map(food => `
        <div class="col-md-6 col-lg-4 mb-4">
            <div class="info-card h-100">
                ${food.image ? `<img src="${food.image}" alt="${food.name}" style="width:100%; height:200px; object-fit:cover; border-radius:8px; margin-bottom:12px;">` : ''}
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <h4 class="mb-0">${food.name}</h4>
                    ${food.mustTry ? '<span class="badge bg-danger">MUST TRY</span>' : ''}
                </div>
                <p class="text-muted mb-2"><strong>가격:</strong> ${food.price}</p>
                <p>${food.description}</p>
            </div>
        </div>
    `).join('');
}

/**
 * 추천 레스토랑 표시
 */
function displayRestaurants(restaurants) {
    const container = document.getElementById('restaurantsList');
    if (!container || !restaurants || restaurants.length === 0) return;
    
    container.innerHTML = restaurants.map(rest => `
        <div class="col-md-6 mb-4">
            <div class="info-card h-100">
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <h4 class="mb-0">${rest.name}</h4>
                    <div>
                        <span class="badge bg-warning text-dark">⭐ ${rest.rating}</span>
                        <span class="badge bg-secondary">${rest.priceRange}</span>
                    </div>
                </div>
                <p class="text-muted mb-1"><small><i class="fas fa-utensils"></i> ${rest.type}</small></p>
                <p class="mb-2"><strong>대표 메뉴:</strong> ${rest.specialty}</p>
                <p class="mb-2">${rest.description}</p>
                <p class="text-muted small mb-0"><i class="fas fa-map-marker-alt"></i> ${rest.address}</p>
            </div>
        </div>
    `).join('');
}

/**
 * 긴급 정보 표시
 */
function displayEmergencyInfo(emergency) {
    const embassyContainer = document.getElementById('embassyInfo');
    const emergencyContainer = document.getElementById('emergencyContacts');
    
    if (embassyContainer && emergency.embassy) {
        embassyContainer.innerHTML = `
            <p><strong>${emergency.embassy.name}</strong></p>
            <p><i class="fas fa-map-marker-alt"></i> ${emergency.embassy.address}</p>
            <p><i class="fas fa-phone"></i> ${emergency.embassy.phone}</p>
            <p><i class="fas fa-exclamation-circle text-danger"></i> <strong>긴급연락처:</strong> ${emergency.embassy.emergency}</p>
            ${emergency.embassy.email ? `<p><i class="fas fa-envelope"></i> ${emergency.embassy.email}</p>` : ''}
            ${emergency.embassy.consulate ? `<p><small>${emergency.embassy.consulate}</small></p>` : ''}
            ${emergency.embassy.hours ? `<p><small><i class="fas fa-clock"></i> ${emergency.embassy.hours}</small></p>` : ''}
        `;
    }
    
    if (emergencyContainer) {
        emergencyContainer.innerHTML = `
            <div class="list-group">
                <div class="list-group-item">
                    <strong>🚓 경찰</strong><br>${emergency.police}
                </div>
                <div class="list-group-item">
                    <strong>🚑 응급/구급차</strong><br>${emergency.ambulance || emergency.police}
                </div>
                <div class="list-group-item">
                    <strong>🏥 병원</strong><br>${emergency.hospital}
                </div>
                <div class="list-group-item">
                    <strong>💊 약국</strong><br>${emergency.pharmacy}
                </div>
                ${emergency.tourist_police ? `
                <div class="list-group-item">
                    <strong>👮 관광경찰</strong><br>${emergency.tourist_police}
                </div>
                ` : ''}
            </div>
        `;
    }
}

/**
 * 날씨 정보를 빠른 정보 카드에 추가
 */
function displayWeatherInfo(weather) {
    // displayQuickInfo 함수에서 사용됩니다
}

/**
 * 문화 팁을 빠른 정보 카드에 추가
 */
function displayCulturalTips(tips) {
    // displayQuickInfo 함수에서 사용됩니다
}

/**
 * 비자 정보를 빠른 정보 카드에 추가
 */
function displayVisaInfo(visaInfo) {
    // displayQuickInfo 함수에서 사용됩니다
}

// 빠른 정보 표시 함수 업데이트 (기존 함수 대체)
function displayQuickInfo(festival) {
    const container = document.getElementById('quickInfo');
    if (!container) return;
    
    let html = '';
    
    // 날씨 정보
    if (festival.weather) {
        html += `
            <div class="quick-info-item">
                <div class="quick-info-icon">☀️</div>
                <div class="quick-info-content">
                    <strong>날씨</strong>
                    <p>${festival.weather.temperature}<br>
                    <small>${festival.weather.season}</small><br>
                    <small>💡 ${festival.weather.recommendation}</small></p>
                </div>
            </div>
        `;
    }
    
    // 비자 정보
    if (festival.visaInfo) {
        html += `
            <div class="quick-info-item">
                <div class="quick-info-icon">${festival.visaInfo.required ? '📋' : '✈️'}</div>
                <div class="quick-info-content">
                    <strong>비자</strong>
                    <p>${festival.visaInfo.details}<br>
                    <small>${festival.visaInfo.additionalInfo || ''}</small></p>
                </div>
            </div>
        `;
    }
    
    // 문화 팁
    if (festival.culturalTips && festival.culturalTips.length > 0) {
        html += `
            <div class="quick-info-item">
                <div class="quick-info-icon">🌍</div>
                <div class="quick-info-content">
                    <strong>문화 팁</strong>
                    <ul class="mb-0 ps-3">
                        ${festival.culturalTips.slice(0, 3).map(tip => `<li><small>${tip}</small></li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
    }
    
    // 기본 정보들
    if (festival.flightPrice) {
        html += `
            <div class="quick-info-item">
                <div class="quick-info-icon">✈️</div>
                <div class="quick-info-content">
                    <strong>항공료</strong>
                    <p>₩${festival.flightPrice.toLocaleString()}<br>
                    <small>${festival.flightAirline || ''}</small></p>
                </div>
            </div>
        `;
    }
    
    container.innerHTML = html;
}

// 전역으로 노출
window.displayNearbyAttractions = displayNearbyAttractions;
window.displayLocalFood = displayLocalFood;
window.displayRestaurants = displayRestaurants;
window.displayEmergencyInfo = displayEmergencyInfo;
window.displayWeatherInfo = displayWeatherInfo;
window.displayCulturalTips = displayCulturalTips;
window.displayVisaInfo = displayVisaInfo;
window.displayQuickInfo = displayQuickInfo;
