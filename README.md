# 🎉 Festival Travel Guide

세계 3대 축제(라 토마티나, 옥토버페스트, 리우 카니발)를 위한 완벽한 여행 가이드 웹 애플리케이션

![Festival Travel Guide](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## 📋 프로젝트 소개

관광경영학과 팀 과제를 위해 제작된 "축제별 추천 관광지 맵" 웹 애플리케이션입니다.
해외 주요 축제에 대한 상세 정보, 추천 관광지, 예상 경비, 여행 팁을 제공합니다.

### 주요 기능

- 🎪 **3대 축제 정보**: 스페인 토마토 축제, 뮌헨 옥토버페스트, 리우 카니발
- 🗺️ **구글 맵 연동**: 각 축제 장소 및 관광지 위치 표시
- 💰 **상세 경비 정보**: 항공권, 숙박, 식비 등 카테고리별 예산 분석
- 📊 **시각화 차트**: Chart.js를 활용한 경비 분포 그래프
- 🖼️ **자동 이미지 로딩**: Unsplash API를 통한 고품질 이미지 자동 삽입
- 📱 **반응형 디자인**: 모바일, 태블릿, 데스크탑 모두 지원
- 🧩 **인카드 패키지 기획**: 카드 안에서 날짜/인원/포함 항목 선택 후 즉시 견적 확인 및 저장/공유
- 🧩 **인카드 패키지 기획**: 카드 안에서 날짜/인원/포함 항목 선택 후 즉시 견적 확인 및 저장/공유
- 🧱 **상품 구성 탭**: Basic/Standard/Premium 티어와 포함 항목 차이, 즉시 적용 버튼 제공
- 📈 **수요·수익 시뮬레이터**: 판매가/모객/비용 변수로 매출·이익·마진·손익분기점 계산

## 🚀 시작하기

### 온라인에서 바로 보기

GitHub Pages를 통해 배포된 사이트를 방문하세요:
👉 **[https://YOUR-USERNAME.github.io/festival-travel-guide/](https://YOUR-USERNAME.github.io/festival-travel-guide/)**

### 로컬에서 실행하기

1. **저장소 클론**
```bash
git clone https://github.com/YOUR-USERNAME/festival-travel-guide.git
cd festival-travel-guide
```

2. **웹 브라우저로 열기**
```bash
# 방법 1: 직접 열기
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux

# 방법 2: 로컬 서버 실행 (Python)
python -m http.server 8000
# 브라우저에서 http://localhost:8000 접속

# 방법 3: 로컬 서버 실행 (Node.js)
npx serve
```

## � 축제 데이터 자동 로드(로컬 CSV/Google Sheets)

기본 3개 축제 외에도 외부 소스에서 추가 축제를 자동으로 불러와 카드로 렌더링합니다.

- 기본값: `data/festivals.sample.csv`를 읽어 즉시 10여 개 축제가 추가됩니다.
- 선택: Google Sheets를 "웹에 게시"하여 CSV URL을 연결하면 실시간으로 시트 데이터를 반영할 수 있습니다.

설정은 `api-config.js`의 `FESTIVAL_SOURCE_CONFIG`에서 변경합니다.

예시

- 로컬 CSV 사용(기본값)
```
enableLocalCsv: true,
localCsvUrl: 'data/festivals.sample.csv'
```

- Google Sheets CSV 사용
```
enableSheet: true,
sheetCsvUrl: 'https://docs.google.com/spreadsheets/d/e/.../pub?gid=0&single=true&output=csv',
sheetFieldMap: {
   id: 'id', name: 'name', location: 'location', period: 'period', duration: 'duration',
   priceKRW: 'priceKRW', description: 'description', countryCode: 'countryCode',
   imageQuery: 'imageQuery', fallbackImage: 'fallbackImage', mapUrl: 'mapUrl'
}
```

CSV 필드 설명(권장)
- id: 축제 고유 ID(미지정 시 이름 기반 슬러그 생성)
- name: 축제명
- location: 위치(도시/국가)
- period: 개최 시기(문자열)
- duration: 일정(숫자 또는 "5일" 형식)
- priceKRW: 1인 기준 가격(숫자 또는 ₩포함 문자열)
- description: 설명
- countryCode: ISO 3166-1 alpha-2(예: kr, jp, us)
- imageQuery: Unsplash 검색어
- fallbackImage: 이미지 URL(Unsplash 실패 시 사용)
- mapUrl: Google Maps embed URL(선택)

동작 방식
- 초기 로드 시 로컬 CSV → Google Sheets 순으로 데이터를 불러와 표준 스키마로 정규화 후 기존 `festivalsData`와 병합합니다.
- 데이터가 부족한 경우 합리적인 기본값으로 보완하여 카드가 깨지지 않도록 처리합니다.

주의
- 외부 API/시트는 CORS 정책에 따라 접근이 제한될 수 있습니다. Google Sheets의 경우 "웹에 게시"된 CSV는 일반적으로 접근 가능합니다.

## �🔑 Unsplash API 설정 (선택사항)

이미지 품질을 향상시키려면 Unsplash API 키를 설정하세요:

1. [Unsplash Developers](https://unsplash.com/developers) 방문
2. 무료 계정 생성 및 앱 등록
3. Access Key 복사
4. `script.js` 파일에서 다음 부분 수정:

```javascript
const UNSPLASH_ACCESS_KEY = 'YOUR_UNSPLASH_ACCESS_KEY_HERE';
// ↓ 발급받은 키로 변경
const UNSPLASH_ACCESS_KEY = 'your-actual-api-key';
```

> **참고**: API 키가 없어도 플레이스홀더 이미지가 자동으로 표시됩니다.

## 📦 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: 커스텀 애니메이션, 그라디언트, 반응형 디자인
- **JavaScript (ES6+)**: 비동기 처리, 이벤트 핸들링
- **Bootstrap 5.3**: 레이아웃 및 컴포넌트
- **Chart.js 4.4**: 경비 분포 차트
- **Font Awesome 6.4**: 아이콘
- **Google Fonts**: Noto Sans KR, Playfair Display
- **Unsplash API**: 고품질 이미지 자동 로딩
- **Google Maps**: 위치 정보 임베드

## 📁 프로젝트 구조

```
festival-travel-guide/
├── index.html          # 메인 HTML 파일
├── style.css           # 스타일시트
├── script.js           # JavaScript 로직
└── README.md           # 프로젝트 문서
```

## 🎨 주요 기능 설명

### 1. 축제 카드 시스템
- 호버 효과와 클릭 인터랙션
- 자동 이미지 로딩
- 예상 경비 표시

### 2. 상세 정보 모달
- 탭 기반 정보 구조
  - **개요**: 축제 기본 정보 및 지도
  - **관광지**: 추천 관광지 리스트 (이미지 포함)
  - **경비**: 상세 예산 분석 및 차트
  - **여행 팁**: 실용적인 여행 조언 및 준비물

### 2-1. 인카드 패키지 기획 사용법
- 메인 목록에서 축제 카드의 "패키지 기획" 버튼을 클릭합니다.
- 출발일, 여행 일수, 인원, 포함 항목(항공권/숙박/식사/입장료/교통/기타)을 선택합니다.
- "견적 계산"을 누르면 1인/총 예상가가 카드 내에서 바로 계산되어 표시됩니다.
- "계획 저장"으로 현재 구성을 로컬에 저장하고, "요약 복사"로 메신저/문서에 붙여넣을 수 있습니다.
- "자세히 보기" 버튼은 기존처럼 상세 모달(개요/패키지 정보/관광지/경비/팁 등)을 엽니다.

### 2-2. 상품 구성 탭과 시뮬레이터
- 상세 모달의 "상품 구성" 탭에서 Basic/Standard/Premium 가격과 포함 항목을 비교할 수 있습니다.
- "이 가격으로 기획" 버튼을 누르면 카드 내 기획 패널의 1인 예산이 해당 가격으로 채워집니다.
- 오른쪽의 시뮬레이터에서 판매가, 모객 수, 고정비, 변동비를 입력하고 "계산"을 누르면 매출·이익·마진·손익분기점이 즉시 계산됩니다.

### 3. 반응형 디자인
- 모바일: 1단 레이아웃
- 태블릿: 2단 레이아웃
- 데스크탑: 3단 레이아웃

### 4. 이미지 자동 크롤링
```javascript
// Unsplash API를 통한 이미지 검색
async function fetchImageFromUnsplash(keyword) {
    // 캐싱 메커니즘으로 API 호출 최소화
    // 에러 발생 시 플레이스홀더 이미지 사용
}
```

## 📊 포함된 축제 정보

### 🍅 La Tomatina (라 토마티나)
- **위치**: 부뇰, 스페인
- **기간**: 매년 8월 마지막 수요일
- **예상 경비**: ₩2,200,000
- **추천 대상**: 대학생, 친구 그룹

### 🍺 Oktoberfest (옥토버페스트)
- **위치**: 뮌헨, 독일
- **기간**: 9월 중순 ~ 10월 초 (16일간)
- **예상 경비**: ₩2,800,000
- **추천 대상**: 직장인, 문화 애호가

### 🎭 Rio Carnival (리우 카니발)
- **위치**: 리우데자네이루, 브라질
- **기간**: 2월 말 ~ 3월 초 (5일간)
- **예상 경비**: ₩3,500,000
- **추천 대상**: 음악/춤 애호가, 축제 마니아

## 🌐 GitHub Pages 배포 방법

1. **GitHub 저장소 생성**
```bash
git init
git add .
git commit -m "Initial commit: Festival Travel Guide"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/festival-travel-guide.git
git push -u origin main
```

2. **GitHub Pages 활성화**
   - GitHub 저장소 페이지 → Settings
   - 왼쪽 메뉴에서 "Pages" 선택
   - Source: "Deploy from a branch"
   - Branch: "main" 선택, 폴더: "/ (root)" 선택
   - Save 클릭

3. **배포 확인**
   - 몇 분 후 `https://YOUR-USERNAME.github.io/festival-travel-guide/` 접속

## 🎯 향후 개선 계획

- [ ] 더 많은 축제 추가 (홀리 축제, 요이 마츠리 등)
- [ ] 다국어 지원 (영어, 스페인어, 독일어 등)
- [ ] 사용자 리뷰 및 평점 시스템
- [ ] 항공권/숙박 예약 링크 연동
- [ ] 날씨 정보 API 통합
- [ ] 여행 일정 PDF 다운로드 기능
- [ ] 소셜 미디어 공유 기능

## 📝 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 👥 기여자

- **개발자**: GitHub Copilot & Your Team
- **과제 목적**: 관광경영학과 팀 프로젝트

## 📧 문의

프로젝트에 대한 질문이나 제안사항이 있으시면 이슈를 등록해주세요.

---

**Made with ❤️ for Tourism Management Course**

⭐ 이 프로젝트가 도움이 되었다면 Star를 눌러주세요!
