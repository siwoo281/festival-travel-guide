# Festival Travel Guide : 세계 축제 여행 가이드

![Hero Section](./images/screenshot.png)

**Festival Travel Guide**는 전 세계의 다채로운 축제 정보를 제공하고, 사용자의 여행 스타일에 맞는 축제를 추천해주는 웹 애플리케이션입니다. 관광 동기 이론(Push & Pull Factors)에 기반한 퀴즈를 통해 개인화된 축제 추천을 제공하며, 각 축제에 대한 상세 정보와 여행 계획을 시뮬레이션해볼 수 있는 기능을 포함하고 있습니다.

## ✨ 주요 기능

- **🎨 동적이고 매력적인 UI/UX**
  - 페이드인/아웃 효과가 적용된 동적 히어로 섹션 배경
  - 사용자 상호작용을 유도하는 웰컴 모달
  - 반응형 디자인으로 모바일 및 데스크톱 환경 모두 지원

- **🧠 관광 동기 이론 기반 축제 추천 퀴즈**
  - 5가지 간단한 질문으로 사용자의 여행 동기(Push)와 목적지 매력(Pull) 요인을 분석
  - 분석 결과를 바탕으로 상위 5개 추천 축제를 제시하고, 각 축제와의 적합도를 백분율로 표시

- **📋 상세한 축제 정보 제공**
  - 축제 개요, 역사, 하이라이트, 기본 정보(기간, 비용 등)
  - 포함/불포함 내역, 패키지 티어, 업셀링 옵션 등 상세한 상품 정보
  - 주변 관광지, 현지 음식, 여행 팁, 긴급 연락처 등 실용적인 여행 정보
  - Google Maps API를 활용한 위치 정보 및 길찾기 기능

- **📊 인터랙티브한 여행 계획 및 시뮬레이션**
  - **수요·수익 시뮬레이터**: 판매가, 모객 수, 비용 등을 입력하여 예상 수익 및 손익분기점 분석
  - **경비 분석**: 항목별 예상 경비를 시각적인 차트로 제공
  - **패키지 기획**: 여행 스타일(알뜰, 인생샷, 미식가)에 따라 동적으로 여행 견적 산출

- **⚡️ 웹 성능 최적화**
  - 이미지 Lazy Loading 및 Hero 이미지 Preloading 적용
  - Service Worker를 통한 정적 자원 캐싱으로 오프라인 지원 및 반복 방문 시 로딩 속도 향상
  - Vite를 사용한 빠르고 효율적인 빌드 시스템

## 🛠️ 기술 스택

- **Frontend**: HTML5, CSS3, JavaScript (ES6+ Modules)
- **Frameworks & Libraries**:
  - [Bootstrap 5](https://getbootstrap.com/): 반응형 UI 디자인
  - [Chart.js](https://www.chartjs.org/): 데이터 시각화 (경비 분석, 수요 예측 차트)
  - [Font Awesome](https://fontawesome.com/): 아이콘
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Deployment**: [GitHub Pages](https://pages.github.com/)

## 🚀 시작하기

### 1. 프로젝트 클론

```bash
git clone https://github.com/siwoo281/festival-travel-guide.git
cd festival-travel-guide
```

### 2. 의존성 설치

이 프로젝트는 `npm`을 사용하여 의존성을 관리합니다.

```bash
npm install
```

### 3. 개발 서버 실행

다음 명령어를 실행하면 Vite 개발 서버가 시작됩니다.

```bash
npm run dev
```

서버가 시작되면 http://localhost:3000 에서 프로젝트를 확인할 수 있습니다.

### 4. 프로덕션 빌드

프로젝트를 빌드하려면 다음 명령어를 사용하세요.

```bash
npm run build
```

빌드 결과물은 `dist/` 디렉토리에 생성됩니다.

## � 프로젝트 구조

```
/
├── public/                  # Service Worker 등 정적 자원
├── src/                     # 소스 코드 (Vite 프로젝트의 경우)
├── index.html               # 메인 페이지
├── business-analysis.html   # 사업 분석 페이지
├── main.js                  # 애플리케이션 메인 진입점
├── script.js                # 축제 데이터 및 핵심 로직
├── style.css                # 주요 스타일시트
├── vite.config.js           # Vite 설정 파일
└── package.json             # 프로젝트 의존성 및 스크립트
```

## 🌐 배포

이 프로젝트는 GitHub Pages를 통해 배포되도록 설정되어 있습니다. `vite.config.js`의 `base` 옵션이 `'./'`로 설정되어 있어, 빌드된 파일들이 상대 경로를 사용하게 됩니다. `main` 브랜치에 푸시하면 GitHub Actions를 통해 자동으로 빌드 및 배포가 진행될 수 있습니다. (별도 설정 필요)

---

이 프로젝트는 개인 포트폴리오 및 학습 목적으로 제작되었습니다.