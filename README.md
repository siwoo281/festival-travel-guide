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

## 🔑 Unsplash API 설정 (선택사항)

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
