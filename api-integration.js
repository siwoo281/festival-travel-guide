// ===== API 통합 기능 =====
if (window.ENV?.MODE === 'development') {
    console.log('🚀 API 통합 스크립트 로드됨');
}

// 국가 코드 -> 통화 정보 매핑 (확장)
const currencyByCountry = {
    es: { currency: 'EUR', currencySymbol: '€' },
    de: { currency: 'EUR', currencySymbol: '€' },
    be: { currency: 'EUR', currencySymbol: '€' },
    br: { currency: 'BRL', currencySymbol: 'R$' },
    cn: { currency: 'CNY', currencySymbol: '¥' },
    jp: { currency: 'JPY', currencySymbol: '¥' },
    gb: { currency: 'GBP', currencySymbol: '£' },
    th: { currency: 'THB', currencySymbol: '฿' },
    mx: { currency: 'MXN', currencySymbol: '$' },
    in: { currency: 'INR', currencySymbol: '₹' },
    us: { currency: 'USD', currencySymbol: '$' },
    tw: { currency: 'TWD', currencySymbol: 'NT$' }
};

// 모의 날씨 데이터 (OpenWeather 키가 없을 때만 사용)
const mockWeatherData = {
    tomatina: { temp: 28, icon: '01d' },
    oktoberfest: { temp: 18, icon: '02d' },
    carnival: { temp: 32, icon: '01d' }
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
        if (window.ENV?.MODE === 'development') {
            console.log('💰 환율 정보 로드 성공');
        }
        return exchangeRates;
    } catch (error) {
        if (window.ENV?.MODE === 'development') {
            console.log('⚠️ 환율 정보 로드 실패:', error.message);
        }
        return null;
    }
}

// 가격 변환
function convertToLocalCurrency(krwPrice, rate) {
    const numericPrice = parseInt(String(krwPrice).replace(/[^\d]/g, '')) || 0;
    const converted = numericPrice * rate;
    return converted.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// 카드에 API 정보 추가 (국기/날씨/현지 통화)
async function enhanceFestivalCards() {
    const isDev = window.ENV?.MODE === 'development';
    if (isDev) console.log('🎨 API 정보로 카드 강화 시작...');

    const cards = document.querySelectorAll('.festival-card');
    if (!cards.length) {
        if (isDev) console.warn('❌ 카드를 찾을 수 없습니다.');
        return;
    }

    const rates = await getExchangeRates();
    if (isDev) console.log('💰 환율 정보:', rates ? '✅ 로드됨' : '❌ 실패');

    for (const card of cards) {
        const festivalId = card?.dataset?.festivalId;
        if (!festivalId) continue;

        const title = card.querySelector('h3')?.textContent?.trim() || festivalId;
        const priceText = card.querySelector('.festival-price')?.textContent?.trim() || '₩0';
        const locationText = card.querySelector('.festival-location')?.textContent?.trim() || '';

        // 국기: 기존 이미지가 있으면 재사용, 없으면 countryCode 추출 불가 시 생략
        const imageDiv = card.querySelector('.festival-image');
        const existingFlag = card.querySelector('.festival-flag');
        let countryCode = null;
        if (existingFlag?.src) {
            const match = existingFlag.src.match(/\/([a-z]{2})\.png$/i);
            if (match) countryCode = match[1].toLowerCase();
        }

        if (imageDiv && !existingFlag && countryCode) {
            const flagImg = document.createElement('img');
            flagImg.src = `https://flagcdn.com/w80/${countryCode}.png`;
            flagImg.alt = locationText || title;
            flagImg.className = 'festival-flag';
            imageDiv.style.position = 'relative';
            imageDiv.appendChild(flagImg);
            if (isDev) console.log(`  🚩 국기 추가: ${countryCode}`);
        }

        // 날씨: 지원되는 축제에 한해 시도, 실패 시 모의 데이터 사용
        try {
            let weatherInfo = await getWeatherInfo(festivalId);
            if (!weatherInfo || weatherInfo.temp === '--') {
                weatherInfo = mockWeatherData[festivalId];
            }
            if (imageDiv && weatherInfo) {
                const weatherDiv = document.createElement('div');
                weatherDiv.className = 'festival-weather';
                const iconUrl = `https://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png`;
                weatherDiv.innerHTML = `<img src="${iconUrl}" alt="날씨 아이콘" onerror="this.style.display='none'"> <span>${weatherInfo.temp}°C</span>`;
                imageDiv.appendChild(weatherDiv);
                if (isDev) console.log(`  🌤️ 날씨 추가: ${weatherInfo.temp}°C`);
            }
        } catch (_) {
            // 무시: 모의 데이터도 없는 경우 스킵
        }

        // 현지 통화 가격 표시
        if (rates) {
            // 통화 정보: 국기에서 추출된 countryCode 기반
            const currencyInfo = countryCode ? currencyByCountry[countryCode] : null;
            if (currencyInfo && rates[currencyInfo.currency]) {
                const priceEl = card.querySelector('.festival-price');
                if (priceEl) {
                    const localPrice = convertToLocalCurrency(priceText, rates[currencyInfo.currency]);
                    const localPriceDiv = document.createElement('div');
                    localPriceDiv.className = 'festival-local-price';
                    localPriceDiv.innerHTML = `<i class="fas fa-exchange-alt"></i> 약 ${localPrice} ${currencyInfo.currencySymbol}`;
                    priceEl.parentNode.insertBefore(localPriceDiv, priceEl.nextSibling);
                    if (isDev) console.log(`  💰 환율 추가: ${localPrice} ${currencyInfo.currencySymbol}`);
                }
            }
        }
    }

    if (isDev) console.log('✅ API 정보 추가 완료!');
}

// ===== Unsplash 이미지 가져오기 (최적화) =====
async function fetchUnsplashImage(query, fallback) {
    const isDev = window.ENV?.MODE === 'development';
    if (!window.UNSPLASH_ACCESS_KEY || window.UNSPLASH_ACCESS_KEY === 'YOUR_UNSPLASH_ACCESS_KEY') {
        if (isDev) console.log('⚠️ Unsplash API 키가 없어 기본 이미지를 사용합니다.');
        return fallback;
    }

    const url = `${UNSPLASH_API_URL}?query=${encodeURIComponent(query)}&client_id=${window.UNSPLASH_ACCESS_KEY}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Unsplash API 요청 실패');
        const data = await response.json();
        const imageUrl = data.results[0]?.urls?.regular;
        if (isDev) console.log(`🎨 Unsplash 이미지 로드 성공: ${query}`);
        return imageUrl || fallback;
    } catch (error) {
        if (isDev) console.log(`⚠️ Unsplash 이미지 로드 실패: ${error.message}`);
        return fallback;
    }
}
window.fetchUnsplashImage = fetchUnsplashImage;

// 페이지 로드 완료 후 API 정보 추가 (지연 실행)
console.log('⏰ 타이머 설정: 3초 후 API 정보 추가');
setTimeout(async () => {
    console.log('⏰ 타이머 실행됨!');
    await enhanceFestivalCards();
}, 3000);

