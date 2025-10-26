// ===== API 통합 기능 =====
// 이 파일을 index.html에서 script.js 다음에 로드하세요

const EXCHANGERATE_API_URL = 'https://api.exchangerate-api.com/v4/latest/KRW';

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
    console.log('🎨 API 정보로 카드 강화 중...');
    
    const rates = await getExchangeRates();
    
    const cards = document.querySelectorAll('.festival-card');
    cards.forEach((card, index) => {
        const festivalIds = ['tomatina', 'oktoberfest', 'carnival'];
        const festivalId = festivalIds[index];
        
        if (!festivalId) return;
        
        const locationInfo = festivalLocationInfo[festivalId];
        const weatherInfo = mockWeatherData[festivalId];
        const festival = festivalsData[festivalId];
        
        if (!locationInfo || !festival) return;
        
        // 국기 추가
        const flagImg = document.createElement('img');
        flagImg.src = `https://flagcdn.com/w80/${locationInfo.countryCode}.png`;
        flagImg.alt = festival.location;
        flagImg.className = 'festival-flag';
        
        const imageDiv = card.querySelector('.festival-image');
        if (imageDiv) {
            imageDiv.appendChild(flagImg);
            
            // 날씨 정보 추가
            if (weatherInfo) {
                const weatherDiv = document.createElement('div');
                weatherDiv.className = 'festival-weather';
                weatherDiv.innerHTML = `${weatherInfo.icon} ${weatherInfo.temp}°C`;
                imageDiv.appendChild(weatherDiv);
            }
        }
        
        // 현지 통화 가격 추가
        if (rates && rates[locationInfo.currency]) {
            const priceElement = card.querySelector('.festival-price');
            if (priceElement) {
                const localPrice = convertToLocalCurrency(festival.price, rates[locationInfo.currency]);
                const localPriceDiv = document.createElement('div');
                localPriceDiv.className = 'festival-local-price';
                localPriceDiv.innerHTML = `<i class="fas fa-exchange-alt"></i>약 ${localPrice} ${locationInfo.currencySymbol}`;
                priceElement.parentNode.appendChild(localPriceDiv);
            }
        }
    });
    
    console.log('✅ API 정보 추가 완료!');
}

// 기존 loadFestivalCards 완료 후 실행
const originalDOMContentLoaded = window.addEventListener;
window.addEventListener('DOMContentLoaded', async function() {
    // 카드 로딩 대기
    setTimeout(async () => {
        await enhanceFestivalCards();
    }, 2000); // 2초 후 실행 (Unsplash 이미지 로딩 대기)
});
