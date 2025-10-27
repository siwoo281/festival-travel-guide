// ===== API 설정 =====
const UNSPLASH_ACCESS_KEY = 'Id8OlS5V38OdwbDrUvNzBmnTao4U6dyPbOPyZwcNtAI';
const OPENWEATHER_API_KEY = ''; // https://openweathermap.org/api 에서 무료 키 발급 가능
const EXCHANGERATE_API_URL = 'https://api.exchangerate-api.com/v4/latest/KRW';

// ===== 축제 데이터 소스 구성 =====
// 기본값: 로컬 CSV(data/festivals.sample.csv) 사용 → 바로 더 많은 축제가 로딩됩니다.
// Google Sheets를 사용하려면 스프레드시트를 "웹에 게시" 후 CSV URL을 sheetCsvUrl에 입력하고 enableSheet를 true로 변경하세요.
window.FESTIVAL_SOURCE_CONFIG = {
    // 1) 로컬 CSV 예시 (권장: 즉시 동작)
    enableLocalCsv: true,
    localCsvUrl: 'data/festivals.sample.csv',

    // 2) Google Sheets CSV (선택)
    enableSheet: false,
    sheetCsvUrl: '', // 예) https://docs.google.com/spreadsheets/d/e/.../pub?gid=0&single=true&output=csv
    // 시트의 헤더명을 내부 필드에 매핑합니다.
    sheetFieldMap: {
        id: 'id',
        name: 'name',
        location: 'location',
        period: 'period',
        duration: 'duration', // 예: 5일, 또는 숫자만(5)도 허용
        priceKRW: 'priceKRW', // 숫자 또는 ₩포함 문자열
        description: 'description',
        countryCode: 'countryCode', // ISO 3166-1 alpha-2 (예: kr, jp, us)
        imageQuery: 'imageQuery',
        fallbackImage: 'fallbackImage',
        mapUrl: 'mapUrl'
    },

    // 3) (옵션) 한국관광공사 TourAPI
    enableKTO: false,
    ktoApiKey: '', // https://www.data.go.kr/ 또는 TourAPI 포털에서 발급
    // 브라우저 CORS 이슈가 있는 경우 프록시를 사용하세요(예: Cloudflare Workers/Netlify Functions 등)
    ktoProxyUrl: '', // 예) https://your-proxy.example.com/proxy?url=
    ktoMaxRows: 50,
    ktoDefaultStart: '20250101',
    ktoDefaultEnd: '20261231'
};

// ===== 이미지 로딩 전략(속도 최적화) =====
window.IMAGE_CONFIG = {
    // 카드 이미지에서는 Unsplash 검색 API를 생략하고, 미리 정의된 fallback 이미지를 우선 사용
    // (CSV/기본 데이터에 이미 최적화 가능한 images.unsplash.com 링크 제공)
    preferFallbackForCards: true,
    // Unsplash 검색을 사용할 때의 요청 타임아웃(밀리초)
    timeoutMs: 1200,
    // 쿼리→결과 이미지 매핑 캐시 TTL(밀리초): 기본 12시간
    cacheTtlMs: 12 * 60 * 60 * 1000
};

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
