# 🚀 프로젝트 개선 계획

## 📊 우선순위별 개선 사항

---

## 🔥 즉시 적용 가능 (난이도: ⭐)

### 1. 실시간 날씨 API 연동
**현재**: Mock 데이터 (고정 온도)  
**개선**: OpenWeatherMap API로 실제 날씨 표시

```javascript
// 무료: 60 calls/분, 1,000,000 calls/월
const WEATHER_API_KEY = 'your_key'; // https://openweathermap.org/api

async function getRealWeather(city, lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric&lang=kr`;
    const response = await fetch(url);
    const data = await response.json();
    return {
        temp: Math.round(data.main.temp),
        icon: data.weather[0].icon,
        description: data.weather[0].description,
        humidity: data.main.humidity
    };
}
```

**효과**: 실시간 정보로 신뢰도 ↑

---

### 2. 로딩 애니메이션 개선
**현재**: 단순 스피너  
**개선**: 스켈레톤 UI + 프로그레스 바

```html
<!-- Skeleton Loader -->
<div class="skeleton-card">
    <div class="skeleton-image"></div>
    <div class="skeleton-text"></div>
    <div class="skeleton-text short"></div>
</div>
```

```css
@keyframes shimmer {
    0% { background-position: -1000px 0; }
    100% { background-position: 1000px 0; }
}

.skeleton-image {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 1000px 100%;
    animation: shimmer 2s infinite;
}
```

**효과**: 사용자 경험 개선

---

### 3. 검색 및 필터 기능
**추가**: 축제 이름, 기간, 가격으로 필터링

```javascript
function filterFestivals(searchTerm, priceRange) {
    const festivals = document.querySelectorAll('.festival-card');
    festivals.forEach(card => {
        const name = card.querySelector('h3').textContent;
        const price = parseInt(card.querySelector('.festival-price').textContent.replace(/[^\d]/g, ''));
        
        const matchesSearch = name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesPrice = price >= priceRange[0] && price <= priceRange[1];
        
        card.style.display = (matchesSearch && matchesPrice) ? 'block' : 'none';
    });
}
```

**효과**: 사용자 맞춤 정보 제공

---

## 💡 추천 기능 (난이도: ⭐⭐)

### 4. 카카오톡 공유하기
**추가**: 축제 정보를 카카오톡으로 공유

```javascript
// Kakao SDK 추가
Kakao.init('YOUR_APP_KEY');

function shareFestival(festivalId) {
    const festival = festivalsData[festivalId];
    Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
            title: festival.name,
            description: festival.description,
            imageUrl: festival.fallbackImage,
            link: {
                webUrl: `https://siwoo281.github.io/festival-travel-guide?festival=${festivalId}`,
                mobileWebUrl: `https://siwoo281.github.io/festival-travel-guide?festival=${festivalId}`
            }
        },
        buttons: [
            {
                title: '자세히 보기',
                link: {
                    webUrl: `https://siwoo281.github.io/festival-travel-guide?festival=${festivalId}`
                }
            }
        ]
    });
}
```

**효과**: 바이럴 마케팅 효과

---

### 5. 찜하기 (북마크) 기능
**추가**: LocalStorage로 저장

```javascript
// 찜하기
function toggleBookmark(festivalId) {
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    
    if (bookmarks.includes(festivalId)) {
        bookmarks = bookmarks.filter(id => id !== festivalId);
        showToast('찜 목록에서 제거되었습니다');
    } else {
        bookmarks.push(festivalId);
        showToast('찜 목록에 추가되었습니다');
    }
    
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    updateBookmarkUI(festivalId);
}

// 찜 목록 페이지
function displayBookmarks() {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    const bookmarkedFestivals = bookmarks.map(id => festivalsData[id]);
    // 카드 표시
}
```

**효과**: 사용자 참여도 ↑

---

### 6. 항공권 가격 API 연동
**추가**: Skyscanner 또는 Kiwi API

```javascript
// Kiwi.com API (무료)
async function getFlightPrice(departure, arrival, date) {
    const url = `https://api.tequila.kiwi.com/v2/search?fly_from=${departure}&fly_to=${arrival}&date_from=${date}`;
    const response = await fetch(url, {
        headers: {
            'apikey': 'YOUR_API_KEY'
        }
    });
    const data = await response.json();
    return data.data[0]?.price || null;
}
```

**효과**: 실제 예약으로 전환 가능

---

## 🎯 고급 기능 (난이도: ⭐⭐⭐)

### 7. AI 챗봇 (ChatGPT API)
**추가**: 축제 추천 챗봇

```javascript
async function getFestivalRecommendation(userPreferences) {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'system',
                    content: '당신은 축제 여행 전문가입니다. 사용자의 선호도에 맞는 축제를 추천해주세요.'
                },
                {
                    role: 'user',
                    content: `예산: ${userPreferences.budget}, 선호 활동: ${userPreferences.activities}`
                }
            ]
        })
    });
    const data = await response.json();
    return data.choices[0].message.content;
}
```

**효과**: 개인화된 추천

---

### 8. 예약 시스템 (Stripe 결제)
**추가**: 실제 예약 및 결제

```javascript
// Stripe Checkout
async function createCheckoutSession(festivalId) {
    const stripe = Stripe('YOUR_PUBLISHABLE_KEY');
    
    const response = await fetch('/create-checkout-session', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            festivalId: festivalId,
            quantity: 1
        })
    });
    
    const session = await response.json();
    await stripe.redirectToCheckout({ sessionId: session.id });
}
```

**효과**: 실제 수익 창출

---

### 9. 사용자 리뷰 시스템 (Firebase)
**추가**: 실시간 리뷰 및 평점

```javascript
// Firebase Firestore
import { collection, addDoc, getDocs } from 'firebase/firestore';

async function addReview(festivalId, review) {
    await addDoc(collection(db, 'reviews'), {
        festivalId: festivalId,
        rating: review.rating,
        comment: review.comment,
        author: review.author,
        timestamp: new Date()
    });
}

async function getReviews(festivalId) {
    const querySnapshot = await getDocs(collection(db, 'reviews'));
    return querySnapshot.docs
        .filter(doc => doc.data().festivalId === festivalId)
        .map(doc => doc.data());
}
```

**효과**: 신뢰도 및 참여도 ↑

---

## 🤖 자동화 (난이도: ⭐⭐)

### 10. GitHub Actions CI/CD
**추가**: 자동 배포 및 테스트

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Run Tests
        run: npm test
      
      - name: Build
        run: npm run build
      
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

**효과**: 자동화된 배포

---

### 11. 일일 데이터 업데이트 (Cron Job)
**추가**: 매일 환율/날씨 자동 업데이트

```yaml
# .github/workflows/daily-update.yml
name: Daily Data Update

on:
  schedule:
    - cron: '0 0 * * *'  # 매일 자정

jobs:
  update:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Update Exchange Rates
        run: node scripts/update-rates.js
      
      - name: Update Weather
        run: node scripts/update-weather.js
      
      - name: Commit Changes
        run: |
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"
          git add .
          git commit -m "Auto: 데이터 업데이트"
          git push
```

**효과**: 항상 최신 정보 유지

---

### 12. 성능 모니터링 (Google Analytics)
**추가**: 사용자 행동 분석

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

```javascript
// 이벤트 트래킹
function trackEvent(action, category, label) {
    gtag('event', action, {
        'event_category': category,
        'event_label': label
    });
}

// 사용 예시
trackEvent('click', 'Festival Card', 'Tomatina');
trackEvent('view', 'Modal', 'Oktoberfest');
```

**효과**: 데이터 기반 개선

---

## 📱 모바일 최적화 (난이도: ⭐⭐)

### 13. PWA (Progressive Web App)
**추가**: 앱처럼 사용 가능

```javascript
// service-worker.js
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('festival-v1').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/style.css',
                '/script.js',
                '/api-integration.js'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
```

```json
// manifest.json
{
    "name": "Festival Travel Guide",
    "short_name": "Festival Guide",
    "start_url": "/",
    "display": "standalone",
    "background_color": "#ffffff",
    "theme_color": "#667eea",
    "icons": [
        {
            "src": "/icon-192.png",
            "sizes": "192x192",
            "type": "image/png"
        }
    ]
}
```

**효과**: 오프라인 사용, 홈 화면 추가

---

### 14. 푸시 알림
**추가**: 축제 시작 알림

```javascript
// 푸시 알림 권한 요청
async function requestNotificationPermission() {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
        showNotification('알림이 활성화되었습니다!');
    }
}

// 알림 보내기
function showNotification(title, body) {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then((registration) => {
            registration.showNotification(title, {
                body: body,
                icon: '/icon-192.png',
                badge: '/badge-72.png',
                vibrate: [200, 100, 200]
            });
        });
    }
}

// 축제 D-7 알림
function scheduleFestivalReminder(festivalId, date) {
    const reminderDate = new Date(date);
    reminderDate.setDate(reminderDate.getDate() - 7);
    
    // 실제로는 서버에서 처리
    setTimeout(() => {
        showNotification(
            '축제가 일주일 남았습니다!',
            `${festivalsData[festivalId].name} 준비하세요!`
        );
    }, reminderDate - Date.now());
}
```

**효과**: 사용자 리텐션 ↑

---

## 🎨 UI/UX 개선 (난이도: ⭐⭐)

### 15. 다크 모드
**추가**: 테마 전환 기능

```javascript
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
}

// 페이지 로드 시 테마 적용
window.addEventListener('DOMContentLoaded', () => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
    }
});
```

```css
.dark-mode {
    --bg-color: #1a1a1a;
    --text-color: #ffffff;
    --card-bg: #2d2d2d;
}

body {
    background-color: var(--bg-color);
    color: var(--text-color);
}
```

**효과**: 사용자 선택권 제공

---

### 16. 비교 기능
**추가**: 축제 간 비교표

```javascript
function compareFestivals(festivalIds) {
    const comparisonTable = document.getElementById('comparison-table');
    comparisonTable.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>항목</th>
                    ${festivalIds.map(id => `<th>${festivalsData[id].name}</th>`).join('')}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>가격</td>
                    ${festivalIds.map(id => `<td>${festivalsData[id].price}</td>`).join('')}
                </tr>
                <tr>
                    <td>기간</td>
                    ${festivalIds.map(id => `<td>${festivalsData[id].period}</td>`).join('')}
                </tr>
                <!-- 더 많은 비교 항목 -->
            </tbody>
        </table>
    `;
}
```

**효과**: 의사결정 도움

---

## 📊 데이터 시각화 (난이도: ⭐⭐)

### 17. 인터랙티브 지도
**추가**: Mapbox로 축제 위치 표시

```javascript
mapboxgl.accessToken = 'YOUR_MAPBOX_TOKEN';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [0, 30],
    zoom: 2
});

// 축제 마커 추가
Object.values(festivalsData).forEach(festival => {
    new mapboxgl.Marker()
        .setLngLat([festival.lon, festival.lat])
        .setPopup(new mapboxgl.Popup().setHTML(`
            <h3>${festival.name}</h3>
            <p>${festival.price}</p>
        `))
        .addTo(map);
});
```

**효과**: 지리적 정보 직관적 표현

---

### 18. 환율 추세 차트
**추가**: 최근 30일 환율 변화

```javascript
async function getExchangeRateHistory(currency, days = 30) {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);
    
    const url = `https://api.frankfurter.app/${startDate.toISOString().split('T')[0]}..${endDate.toISOString().split('T')[0]}?from=KRW&to=${currency}`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    // Chart.js로 그래프 그리기
    const ctx = document.getElementById('rateChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: Object.keys(data.rates),
            datasets: [{
                label: `KRW to ${currency}`,
                data: Object.values(data.rates).map(r => r[currency]),
                borderColor: '#667eea',
                tension: 0.4
            }]
        }
    });
}
```

**효과**: 환전 타이밍 제안

---

## 🔐 보안 및 최적화 (난이도: ⭐⭐)

### 19. API 키 보안
**개선**: 환경 변수로 관리

```javascript
// .env
VITE_OPENWEATHER_API_KEY=your_key
VITE_UNSPLASH_API_KEY=your_key

// config.js
export const config = {
    weatherApiKey: import.meta.env.VITE_OPENWEATHER_API_KEY,
    unsplashApiKey: import.meta.env.VITE_UNSPLASH_API_KEY
};
```

**효과**: 보안 강화

---

### 20. 이미지 최적화
**추가**: Lazy Loading + WebP

```html
<img 
    src="placeholder.jpg" 
    data-src="festival.jpg"
    data-srcset="festival-400.webp 400w, festival-800.webp 800w"
    loading="lazy"
    alt="Festival"
>
```

```javascript
// Intersection Observer로 Lazy Load
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.srcset = img.dataset.srcset;
            imageObserver.unobserve(img);
        }
    });
});

document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});
```

**효과**: 로딩 속도 개선

---

## 📈 우선순위 요약

### 🔥 즉시 추천 (가장 효과적)
1. **실시간 날씨 API** - 신뢰도 ↑
2. **검색/필터 기능** - 사용성 ↑
3. **찜하기 기능** - 참여도 ↑
4. **카카오톡 공유** - 바이럴 효과

### 💡 중기 추천
5. **PWA** - 앱처럼 사용
6. **다크 모드** - UX 개선
7. **GitHub Actions** - 자동화
8. **Google Analytics** - 데이터 분석

### 🎯 장기 추천
9. **AI 챗봇** - 개인화
10. **예약 시스템** - 수익화

---

## 💰 비용 분석

| 기능 | API/서비스 | 무료 한도 | 유료 시 비용 |
|-----|-----------|----------|------------|
| 날씨 | OpenWeatherMap | 1M calls/월 | $0 |
| 환율 | ExchangeRate-API | 1,500 calls/월 | $10/월 |
| 지도 | Mapbox | 50K loads/월 | $5/월 |
| 챗봇 | OpenAI GPT | $5 credit | $0.002/1K tokens |
| 호스팅 | GitHub Pages | 무제한 | $0 |
| 데이터베이스 | Firebase | 1GB 저장 | $0.18/GB |

**총 예상 비용**: 무료 ~ $20/월

---

## 🎓 과제 추가 점수 포인트

### 구현 시 강조할 점:
1. ✅ **3개 API 통합** → **5개 이상 API 통합**
2. ✅ **정적 웹사이트** → **동적 웹 앱 (PWA)**
3. ✅ **수동 배포** → **자동화 배포 (CI/CD)**
4. ✅ **기본 기능** → **AI 추천 시스템**
5. ✅ **단순 정보 제공** → **실제 예약 가능**

---

**작성일**: 2025년 10월 27일  
**다음 단계**: 위 기능 중 원하는 것을 선택하면 바로 구현해드립니다!
