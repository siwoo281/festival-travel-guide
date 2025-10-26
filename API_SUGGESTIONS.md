# 추가 활용 가능한 무료 API 제안

## 🌐 관광/여행 관련 API

### 1. **OpenWeatherMap API** ⭐️ 추천
- **용도**: 축제 기간 날씨 정보 표시
- **URL**: https://openweathermap.org/api
- **무료 플랜**: 60 calls/minute, 1,000,000 calls/month
- **활용 예시**:
  ```javascript
  // 뮌헨 날씨 가져오기
  fetch('https://api.openweathermap.org/data/2.5/weather?q=Munich&appid=YOUR_KEY')
    .then(res => res.json())
    .then(data => {
      console.log(`온도: ${data.main.temp}°C`);
      console.log(`날씨: ${data.weather[0].description}`);
    });
  ```
- **구현 아이디어**:
  - 각 축제 카드에 현지 날씨 표시
  - 축제 기간 5일 예보
  - 여행 준비물 추천 (날씨 기반)

### 2. **ExchangeRate-API** ⭐️ 추천
- **용도**: 실시간 환율 정보
- **URL**: https://www.exchangerate-api.com
- **무료 플랜**: 1,500 requests/month
- **활용 예시**:
  ```javascript
  // 원화를 유로로 환전
  fetch('https://api.exchangerate-api.com/v4/latest/KRW')
    .then(res => res.json())
    .then(data => {
      const krwToEur = data.rates.EUR;
      console.log(`2,200,000원 = ${(2200000 * krwToEur).toFixed(2)} EUR`);
    });
  ```
- **구현 아이디어**:
  - 패키지 가격을 현지 통화로 표시
  - 환율 계산기 추가
  - 예산 플래너 (현지 물가 반영)

### 3. **REST Countries API**
- **용도**: 국가 정보 (언어, 통화, 국기 등)
- **URL**: https://restcountries.com
- **무료**: 완전 무료, 제한 없음
- **활용 예시**:
  ```javascript
  fetch('https://restcountries.com/v3.1/name/spain')
    .then(res => res.json())
    .then(data => {
      console.log(`수도: ${data[0].capital}`);
      console.log(`언어: ${Object.values(data[0].languages)}`);
      console.log(`통화: ${Object.keys(data[0].currencies)}`);
    });
  ```
- **구현 아이디어**:
  - 국가별 기본 정보 표시
  - 국기 아이콘 추가
  - 사용 언어 및 통화 안내

## 🗺️ 지도/위치 API

### 4. **Mapbox API** ⭐️ 추천
- **용도**: 인터랙티브 지도
- **URL**: https://www.mapbox.com
- **무료 플랜**: 50,000 map loads/month
- **활용 예시**:
  ```html
  <script src='https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.js'></script>
  <script>
    mapboxgl.accessToken = 'YOUR_TOKEN';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [11.5497, 48.1316], // Munich
      zoom: 13
    });
  </script>
  ```
- **구현 아이디어**:
  - Google Maps 대신 Mapbox 사용
  - 축제 장소 마커
  - 주변 관광지 표시

### 5. **OpenStreetMap Nominatim**
- **용도**: 주소 검색 및 역 지오코딩
- **URL**: https://nominatim.openstreetmap.org
- **무료**: 완전 무료 (사용량 제한 있음)
- **활용 예시**:
  ```javascript
  fetch('https://nominatim.openstreetmap.org/search?q=Bunol&format=json')
    .then(res => res.json())
    .then(data => console.log(data[0].display_name));
  ```

## 💰 금융/경제 API

### 6. **Frankfurter API**
- **용도**: 유럽중앙은행 환율 데이터
- **URL**: https://www.frankfurter.app
- **무료**: 완전 무료, 제한 없음
- **활용 예시**:
  ```javascript
  // 과거 환율 조회
  fetch('https://api.frankfurter.app/2024-01-01..2024-12-31?from=EUR&to=KRW')
    .then(res => res.json())
    .then(data => console.log('환율 추이:', data.rates));
  ```
- **구현 아이디어**:
  - 환율 차트 표시
  - 최적 환전 시기 추천

## 📸 이미지/미디어 API

### 7. **Pexels API**
- **용도**: 고품질 무료 이미지 (Unsplash 대안)
- **URL**: https://www.pexels.com/api
- **무료 플랜**: 200 requests/hour
- **활용 예시**:
  ```javascript
  fetch('https://api.pexels.com/v1/search?query=oktoberfest', {
    headers: { Authorization: 'YOUR_API_KEY' }
  })
    .then(res => res.json())
    .then(data => console.log(data.photos[0].src.large));
  ```

### 8. **Pixabay API**
- **용도**: 무료 이미지 및 비디오
- **URL**: https://pixabay.com/api/docs
- **무료 플랜**: 5,000 requests/day
- **활용 예시**:
  ```javascript
  fetch('https://pixabay.com/api/?key=YOUR_KEY&q=carnival&image_type=photo')
    .then(res => res.json())
    .then(data => console.log(data.hits));
  ```

## 🌍 번역/언어 API

### 9. **LibreTranslate** ⭐️ 추천
- **용도**: 무료 번역 API (자체 호스팅 가능)
- **URL**: https://libretranslate.com
- **무료**: 공개 인스턴스 사용 가능
- **활용 예시**:
  ```javascript
  fetch('https://libretranslate.com/translate', {
    method: 'POST',
    body: JSON.stringify({
      q: '축제',
      source: 'ko',
      target: 'en'
    }),
    headers: { 'Content-Type': 'application/json' }
  })
    .then(res => res.json())
    .then(data => console.log(data.translatedText)); // "Festival"
  ```
- **구현 아이디어**:
  - 다국어 지원 버튼
  - 영어/중국어/일본어 번역

## 📅 날짜/시간 API

### 10. **WorldTimeAPI**
- **용도**: 세계 시간대 정보
- **URL**: https://worldtimeapi.org
- **무료**: 완전 무료
- **활용 예시**:
  ```javascript
  fetch('https://worldtimeapi.org/api/timezone/Europe/Madrid')
    .then(res => res.json())
    .then(data => {
      console.log(`마드리드 현재 시간: ${data.datetime}`);
      console.log(`시차: UTC${data.utc_offset}`);
    });
  ```
- **구현 아이디어**:
  - 각 축제 지역 현재 시간 표시
  - 시차 계산기

## 🎫 이벤트/엔터테인먼트 API

### 11. **Ticketmaster Discovery API**
- **용도**: 이벤트 및 티켓 정보
- **URL**: https://developer.ticketmaster.com
- **무료 플랜**: 5,000 API calls/day
- **활용 예시**:
  ```javascript
  fetch('https://app.ticketmaster.com/discovery/v2/events.json?keyword=oktoberfest&apikey=YOUR_KEY')
    .then(res => res.json())
    .then(data => console.log(data._embedded.events));
  ```

## 🍴 음식/레스토랑 API

### 12. **Spoonacular Food API**
- **용도**: 음식 레시피 및 영양 정보
- **URL**: https://spoonacular.com/food-api
- **무료 플랜**: 150 requests/day
- **활용 예시**:
  ```javascript
  // 스페인 요리 검색
  fetch('https://api.spoonacular.com/recipes/complexSearch?cuisine=spanish&apiKey=YOUR_KEY')
    .then(res => res.json())
    .then(data => console.log(data.results));
  ```
- **구현 아이디어**:
  - 현지 음식 소개
  - 레시피 제공

## 📊 데이터 시각화 API

### 13. **Chart.js** (이미 사용 중)
- 추가 차트 타입 활용:
  - 라인 차트: 환율 추이
  - 바 차트: 국가별 관광객 수
  - 레이더 차트: 축제 비교 (가격, 규모, 만족도)

## 🎨 디자인/아이콘 API

### 14. **Flagpedia API**
- **용도**: 국기 이미지
- **URL**: https://flagpedia.net/download/api
- **무료**: 완전 무료
- **활용 예시**:
  ```html
  <img src="https://flagcdn.com/w320/es.png" alt="Spain">
  <img src="https://flagcdn.com/w320/de.png" alt="Germany">
  <img src="https://flagcdn.com/w320/br.png" alt="Brazil">
  ```

## 💡 구현 우선순위 추천

### 즉시 추가 가능 (난이도 ⭐)
1. **Flagpedia** - 국기 아이콘 (HTML만으로 가능)
2. **REST Countries** - 국가 정보
3. **WorldTimeAPI** - 현지 시간

### 추천 추가 (난이도 ⭐⭐)
4. **OpenWeatherMap** - 날씨 정보 ⭐️
5. **ExchangeRate-API** - 환율 계산기 ⭐️
6. **Pexels/Pixabay** - 추가 이미지

### 고급 기능 (난이도 ⭐⭐⭐)
7. **Mapbox** - 인터랙티브 지도
8. **LibreTranslate** - 다국어 지원
9. **Spoonacular** - 현지 음식 정보

## 📝 구현 예시 코드

### 날씨 + 환율 통합 예시
```javascript
async function addWeatherAndCurrency(festivalId) {
    const locations = {
        tomatina: { city: 'Valencia', country: 'ES', currency: 'EUR' },
        oktoberfest: { city: 'Munich', country: 'DE', currency: 'EUR' },
        carnival: { city: 'Rio de Janeiro', country: 'BR', currency: 'BRL' }
    };
    
    const location = locations[festivalId];
    
    // 날씨 정보
    const weatherRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location.city}&appid=YOUR_KEY&units=metric&lang=kr`
    );
    const weatherData = await weatherRes.json();
    
    // 환율 정보
    const rateRes = await fetch('https://api.exchangerate-api.com/v4/latest/KRW');
    const rateData = await rateRes.json();
    const rate = rateData.rates[location.currency];
    
    // 표시
    document.getElementById(`${festivalId}-weather`).innerHTML = `
        <i class="fas fa-thermometer-half"></i> ${Math.round(weatherData.main.temp)}°C
        <i class="fas fa-cloud"></i> ${weatherData.weather[0].description}
    `;
    
    document.getElementById(`${festivalId}-currency`).innerHTML = `
        현지 가격: ${(festivalsData[festivalId].price * rate).toFixed(2)} ${location.currency}
    `;
}
```

## 🎯 과제 점수 향상 포인트

### API 활용으로 얻을 수 있는 이점:
1. **실시간 데이터** - 날씨, 환율로 실용성 증가
2. **글로벌 정보** - 국가별 정보로 전문성 향상
3. **사용자 경험** - 다국어, 현지 시간으로 UX 개선
4. **기술 역량** - 다양한 API 통합 능력 증명

---

**총 14개 무료 API 제안**
- 즉시 적용 가능: 3개
- 추천 추가: 3개
- 고급 기능: 3개
- 기타 선택: 5개
