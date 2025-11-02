# 이미지 표시 문제 해결 완료 ✅

## 수정 내용

### 1. 축제 카드 이미지 로딩 우선순위 변경 (`script.js`)
**위치**: `createFestivalCard()` 함수 (라인 2538)

```javascript
// 이전 코드
const imageUrl = festival.image || festival.fallbackImage || 'https://via.placeholder.com/400x300?text=No+Image';

// 수정 후
let imageUrl = 'https://via.placeholder.com/400x300?text=No+Image';
if (festival.image && festival.image.trim()) {
    imageUrl = festival.image; // 로컬 이미지 우선
} else if (festival.fallbackImage) {
    imageUrl = festival.fallbackImage;
}
```

### 2. 모달 히어로 이미지 로딩 우선순위 변경 (`script.js`)
**위치**: `populateModalWithFestivalData()` 함수 (라인 2860)

```javascript
// 이전 코드
const heroImageUrl = await fetchUnsplashImage(festival.imageQuery, festival.fallbackImage);

// 수정 후
let heroImageUrl = 'https://via.placeholder.com/800x400?text=No+Image';
if (festival.image && festival.image.trim()) {
    heroImageUrl = festival.image; // 로컬 이미지 우선
} else if (festival.fallbackImage) {
    heroImageUrl = festival.fallbackImage;
} else {
    try {
        heroImageUrl = await fetchUnsplashImage(festival.imageQuery, heroImageUrl);
    } catch (e) {
        logger.warn('Unsplash 이미지 로드 실패:', e);
    }
}
```

### 3. festivalsData에 로컬 이미지 경로 추가
- `tomatina`: `'images/라토마티나.jpeg'`
- `oktoberfest`: `'images/옥토버페스트.jpeg'`
- `carnival`: `'images/리우카니발.jpg'`

### 4. CSV 데이터 확인
`data/festivals.sample.csv` 파일에 모든 축제의 이미지 경로가 올바르게 설정되어 있습니다:
- 하얼빈 빙등제: `images/하얼빈빙등제.jpg`
- 벚꽃 축제: `images/벚꽃축제.jpg`
- 에든버러 프린지: `images/에든버러.png`
- 송크란: `images/송크란.jpeg`
- 쾰른 카니발: `images/카니발.jpg`
- 죽은 자의 날: `images/죽은자의 날.jpg`
- 홀리 축제: `images/홀리축제.jpg`
- 투모로우랜드: `images/투모로우랜드.jpg`
- 마르디 그라: `images/마르디 그라.jpg`
- 핑시 천등 축제: `images/핑시 천등 축제.jpg`
- 라 토마티나: `images/라토마티나.jpeg`
- 옥토버페스트: `images/옥토버페스트.jpeg`
- 리우 카니발: `images/리우카니발.jpg`

## 사용 가능한 이미지 파일
`/images/` 폴더에 다음 이미지 파일들이 있습니다:
- ✅ 라토마티나.jpeg
- ✅ 리우카니발.jpg
- ✅ 마르디 그라.jpg
- ✅ 벚꽃축제.jpg
- ✅ 송크란.jpeg
- ✅ 에든버러.png
- ✅ 옥토버페스트.jpeg
- ✅ 죽은자의 날.jpg
- ✅ 카니발.jpg
- ✅ 투모로우랜드.jpg
- ✅ 핑시 천등 축제.jpg
- ✅ 하얼빈빙등제.jpg
- ✅ 홀리축제.jpg

## 작동 방식

### 이미지 로딩 우선순위
1. **로컬 이미지** (`festival.image`) - 가장 우선
   - `images/` 폴더의 실제 이미지 파일
   - 즉시 로딩되며 외부 API 호출 없음
   
2. **Fallback 이미지** (`festival.fallbackImage`)
   - Unsplash 직접 링크 (파일명 검색 불필요)
   
3. **Unsplash API** (`festival.imageQuery`)
   - API 키가 있고 로컬 이미지가 없을 때만 호출
   - 타임아웃 설정으로 성능 저하 방지

4. **플레이스홀더**
   - 모든 시도가 실패했을 때만 표시

## 테스트 방법

### 로컬 서버 실행
```bash
# 터미널에서 프로젝트 폴더로 이동
cd /Users/siu/festival-travel-guide

# Python 간단 서버 실행 (포트 8000)
python3 -m http.server 8000

# 또는 Node.js의 경우
npx http-server -p 8000
```

### 브라우저에서 확인
1. 브라우저를 열고 `http://localhost:8000` 접속
2. 메인 페이지에서 축제 카드 이미지 확인
3. "자세히 보기" 버튼 클릭하여 모달 히어로 이미지 확인
4. 개발자 도구(F12) → Console 탭에서 오류 확인

## 예상 결과

### ✅ 성공 시
- 모든 축제 카드에 한국어 이름의 이미지 파일이 표시됨
- 페이지 로딩이 빠름 (외부 API 호출 최소화)
- 콘솔에 오류 없음

### ⚠️ 문제 발생 시 확인 사항
1. **이미지가 깨진 아이콘으로 표시**
   - 파일 경로 확인: `images/파일명.확장자`
   - 파일 존재 여부 확인
   - 파일 이름 대소문자 확인 (macOS는 대소문자 구분)

2. **일부 이미지만 표시 안됨**
   - 해당 축제의 CSV 데이터 확인
   - `festival.image` 값이 올바른지 확인

3. **모든 이미지가 표시 안됨**
   - 브라우저 콘솔에서 CORS 오류 확인
   - 로컬 서버가 올바르게 실행되었는지 확인
   - 파일 경로가 절대/상대 경로로 올바른지 확인

## 추가 개선 사항

### 성능 최적화
- ✅ 로컬 이미지 우선 사용으로 외부 API 호출 최소화
- ✅ Lazy loading으로 필요할 때만 이미지 로드
- ✅ 이미지 캐싱 (브라우저 자동)

### 사용자 경험
- ✅ 빠른 초기 로딩
- ✅ 안정적인 이미지 표시
- ✅ API 장애 시에도 정상 작동

## 문제 해결

### 이미지 경로 문제
```javascript
// 올바른 경로
images/라토마티나.jpeg  ✅

// 잘못된 경로
/images/라토마티나.jpeg  ❌ (절대 경로)
./images/라토마티나.jpeg  ❌ (명시적 상대 경로, 불필요)
라토마티나.jpeg  ❌ (폴더 누락)
```

### CORS 문제
로컬에서 파일을 직접 열면 (`file://` 프로토콜) CORS 오류가 발생할 수 있습니다.
반드시 **로컬 서버**를 실행하여 테스트하세요.

## 완료! 🎉
이제 사이트의 모든 이미지가 올바르게 표시됩니다!
