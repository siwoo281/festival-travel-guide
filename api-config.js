// ===== API 설정 =====
const UNSPLASH_ACCESS_KEY = 'Id8OlS5V38OdwbDrUvNzBmnTao4U6dyPbOPyZwcNtAI';
const OPENWEATHER_API_KEY = ''; // https://openweathermap.org/api 에서 무료 키 발급 가능
const EXCHANGERATE_API_URL = 'https://api.exchangerate-api.com/v4/latest/KRW';

// 축제 위치 및 국가 정보
const festivalLocations = {
    tomatina: { 
        city: 'Valencia', 
        countryCode: 'es', 
        countryName: '스페인',
        currency: 'EUR',
        lat: 39.4167,
        lon: -0.7889
    },
    oktoberfest: { 
        city: 'Munich', 
        countryCode: 'de', 
        countryName: '독일',
        currency: 'EUR',
        lat: 48.1351,
        lon: 11.5820
    },
    carnival: { 
        city: 'Rio de Janeiro', 
        countryCode: 'br', 
        countryName: '브라질',
        currency: 'BRL',
        lat: -22.9068,
        lon: -43.1729
    }
};

// ===== 국기 이미지 URL 생성 =====
function getFlagUrl(countryCode, size = 'w320') {
    return `https://flagcdn.com/${size}/${countryCode}.png`;
}

// ===== 날씨 정보 가져오기 =====
async function getWeatherInfo(festivalId) {
    if (!OPENWEATHER_API_KEY) {
        return {
            temp: '--',
            description: '날씨 API 키 필요',
            icon: '01d'
        };
    }
    
    const location = festivalLocations[festivalId];
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${OPENWEATHER_API_KEY}&units=metric&lang=kr`
        );
        
        if (!response.ok) throw new Error('날씨 정보 가져오기 실패');
        
        const data = await response.json();
        return {
            temp: Math.round(data.main.temp),
            description: data.weather[0].description,
            icon: data.weather[0].icon,
            humidity: data.main.humidity,
            windSpeed: data.wind.speed
        };
    } catch (error) {
        console.log('⚠️ 날씨 정보 로드 실패:', error.message);
        return {
            temp: '--',
            description: '정보 없음',
            icon: '01d'
        };
    }
}

// ===== 환율 정보 가져오기 =====
async function getExchangeRate(targetCurrency) {
    try {
        const response = await fetch(EXCHANGERATE_API_URL);
        if (!response.ok) throw new Error('환율 정보 가져오기 실패');
        
        const data = await response.json();
        return data.rates[targetCurrency] || null;
    } catch (error) {
        console.log('⚠️ 환율 정보 로드 실패:', error.message);
        return null;
    }
}

// ===== 가격을 현지 통화로 변환 =====
function convertPrice(krwPrice, exchangeRate) {
    // "₩2,200,000" 형식에서 숫자만 추출
    const numericPrice = parseInt(krwPrice.replace(/[^\d]/g, ''));
    const converted = numericPrice * exchangeRate;
    return converted.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// ===== 현지 시간 가져오기 =====
async function getLocalTime(festivalId) {
    const location = festivalLocations[festivalId];
    try {
        const response = await fetch(
            `https://worldtimeapi.org/api/timezone/Etc/UTC`
        );
        if (!response.ok) throw new Error('시간 정보 가져오기 실패');
        
        const data = await response.json();
        const date = new Date(data.datetime);
        return date.toLocaleString('ko-KR', { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: false 
        });
    } catch (error) {
        console.log('⚠️ 시간 정보 로드 실패:', error.message);
        return '--:--';
    }
}
