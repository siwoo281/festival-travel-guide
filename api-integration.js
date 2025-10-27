// ===== API 통합 기능 =====
console.log('🚀 API 통합 스크립트 로드됨');

const festivalLocationInfo = {
    tomatina: { countryCode: 'es', currency: 'EUR', currencySymbol: '€' },
    oktoberfest: { countryCode: 'de', currency: 'EUR', currencySymbol: '€' },
    carnival: { countryCode: 'br', currency: 'BRL', currencySymbol: 'R$' }
};

const mockWeatherData = {
    tomatina: { temp: 28, icon: '☀️' },
    oktoberfest: { temp: 18, icon: '⛅' },
    carnival: { temp: 32, icon: '🌤️' }
};

// 환율 데이터 캐시
let exchangeRates = null;

// 환율 가져오기
async function getExchangeRates() {
    if (exchangeRates) return exchangeRates;
    
    try {
        const response = await fetch(EXCHANGERATE_API_URL);
        if (!response.ok) throw new Error('환율 정보 가져오기 실패');
        const data = await response.json();
        exchangeRates = data.rates;
        console.log('💰 환율 정보 로드 성공');
        return exchangeRates;
    } catch (error) {
        console.log('⚠️ 환율 정보 로드 실패:', error.message);
        return null;
    }
}

// 가격 변환
function convertToLocalCurrency(krwPrice, rate) {
    const numericPrice = parseInt(krwPrice.replace(/[^\d]/g, ''));
    const converted = numericPrice * rate;
    return converted.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// 카드에 API 정보 추가
async function enhanceFestivalCards() {
    console.log('🎨 API 정보로 카드 강화 시작...');
    
    const festivalCardsDiv = document.querySelectorAll('.festival-card');
    console.log('📦 발견된 카드 수:', festivalCardsDiv.length);
    
    if (festivalCardsDiv.length === 0) {
        console.error('❌ 카드를 찾을 수 없습니다!');
        return;
    }
    
    const rates = await getExchangeRates();
    console.log('💰 환율 정보:', rates ? '✅ 로드됨' : '❌ 실패');
    
    festivalCardsDiv.forEach((card) => {
        const festivalId = card?.dataset?.festivalId;
        
        if (!festivalId) {
            console.log(`⚠️ 카드: festivalId 없음(data-festival-id 속성)`);
            return;
        }
        
        const locationInfo = festivalLocationInfo[festivalId];
        const weatherInfo = mockWeatherData[festivalId];
        const festival = festivalsData[festivalId];
        
        if (!locationInfo || !festival) {
            console.log(`⚠️ 카드 ${index}: 정보 없음`);
            return;
        }
        
    console.log(`✨ 카드 (${festival.name}) 강화 중...`);
        
        // 국기 추가
        const flagImg = document.createElement('img');
        flagImg.src = `https://flagcdn.com/w80/${locationInfo.countryCode}.png`;
        flagImg.alt = festival.location;
        flagImg.className = 'festival-flag';
        
        const imageDiv = card.querySelector('.festival-image');
        if (imageDiv) {
            imageDiv.style.position = 'relative';
            imageDiv.appendChild(flagImg);
            console.log(`  🚩 국기 추가: ${locationInfo.countryCode}`);
            
            // 날씨 정보 추가
            if (weatherInfo) {
                const weatherDiv = document.createElement('div');
                weatherDiv.className = 'festival-weather';
                weatherDiv.innerHTML = `${weatherInfo.icon} ${weatherInfo.temp}°C`;
                imageDiv.appendChild(weatherDiv);
                console.log(`  🌤️ 날씨 추가: ${weatherInfo.temp}°C`);
            }
        } else {
            console.log(`  ❌ 이미지 div 없음`);
        }
        
        // 현지 통화 가격 추가
        if (rates && locationInfo && rates[locationInfo.currency]) {
            const priceElement = card.querySelector('.festival-price');
            if (priceElement) {
                const localPrice = convertToLocalCurrency(festival.price, rates[locationInfo.currency]);
                const localPriceDiv = document.createElement('div');
                localPriceDiv.className = 'festival-local-price';
                localPriceDiv.innerHTML = `<i class="fas fa-exchange-alt"></i> 약 ${localPrice} ${locationInfo.currencySymbol}`;
                priceElement.parentNode.insertBefore(localPriceDiv, priceElement.nextSibling);
                console.log(`  💰 환율 추가: ${localPrice} ${locationInfo.currencySymbol}`);
            } else {
                console.log(`  ❌ 가격 요소 없음`);
            }
        }
    });
    
    console.log('✅ API 정보 추가 완료!');
}

// 페이지 로드 완료 후 API 정보 추가
console.log('⏰ 타이머 설정: 3초 후 API 정보 추가');

setTimeout(async () => {
    console.log('⏰ 타이머 실행됨!');
    await enhanceFestivalCards();
}, 3000);
