// ===== API 설정 추가 =====
const EXCHANGERATE_API_URL = 'https://api.exchangerate-api.com/v4/latest/KRW';

// 축제 위치 및 통화 정보
const festivalLocationInfo = {
    tomatina: { countryCode: 'es', currency: 'EUR', currencySymbol: '€' },
    oktoberfest: { countryCode: 'de', currency: 'EUR', currencySymbol: '€' },
    carnival: { countryCode: 'br', currency: 'BRL', currencySymbol: 'R$' }
};

// 날씨 정보 (Mock - 실제 OpenWeatherMap API로 교체 가능)
const mockWeatherData = {
    tomatina: { temp: 28, icon: '☀️', description: '맑음' },
    oktoberfest: { temp: 18, icon: '⛅', description: '구름 조금' },
    carnival: { temp: 32, icon: '🌤️', description: '화창함' }
};

// ===== 환율 가져오기 =====
async function getExchangeRates() {
    try {
        const response = await fetch(EXCHANGERATE_API_URL);
        if (!response.ok) throw new Error('환율 정보 가져오기 실패');
        const data = await response.json();
        return data.rates;
    } catch (error) {
        console.log('⚠️ 환율 정보 로드 실패:', error.message);
        return null;
    }
}

// ===== 가격을 현지 통화로 변환 =====
function convertToLocalCurrency(krwPrice, rate) {
    const numericPrice = parseInt(krwPrice.replace(/[^\d]/g, ''));
    const converted = numericPrice * rate;
    return converted.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// ===== 국기 URL 생성 =====
function getFlagUrl(countryCode) {
    return `https://flagcdn.com/w80/${countryCode}.png`;
}

// ===== 날씨 정보 가져오기 =====
function getWeatherInfo(festivalId) {
    return mockWeatherData[festivalId] || { temp: '--', icon: '🌡️', description: '정보 없음' };
}
