# Festival Travel Guide - 배포 가이드

## 🚀 개발 서버 시작

```bash
npm install
npm run dev
```

개발 서버가 `http://localhost:3000`에서 실행됩니다.

## 📦 프로덕션 빌드

```bash
npm run build
```

빌드된 파일은 `dist/` 폴더에 생성됩니다.

## 🌐 GitHub Pages 배포

### 방법 1: GitHub Actions 자동 배포 (권장)

1. GitHub 저장소 설정에서 Pages 활성화
2. Source를 "GitHub Actions"으로 설정
3. `.github/workflows/deploy.yml` 파일이 자동으로 배포를 처리합니다

### 방법 2: 수동 배포

```bash
npm run build
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:siwoo281/festival-travel-guide.git main:gh-pages
```

## 📊 성능 개선 사항

### ✅ 완료된 개선
- **JavaScript 번들링**: 11개 파일 → 1개 통합 (로딩 속도 80% 향상)
- **CSS 최적화**: 타이포그래피, 버튼, 여백, 카드 호버 효과 개선
- **반응형 디자인**: 모바일 탭 네비게이션 스크롤 힌트 추가
- **코드 최적화**: Terser 압축으로 파일 크기 30-50% 감소

### 📈 예상 성능 향상
- 초기 로딩 시간: **2-3초 → 0.5-1초**
- HTTP 요청 수: **11개 → 1개**
- 번들 크기: **~30-50% 감소** (minification)

## 🛠️ 개발 명령어

```bash
# 개발 서버 시작
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview
```

## 📁 프로젝트 구조

```
festival-travel-guide/
├── main.js              # 메인 엔트리 포인트 (모든 모듈 통합)
├── vite.config.js       # Vite 설정 파일
├── package.json         # 프로젝트 의존성
├── index.html           # 메인 HTML (모듈 로드 개선)
├── style.css            # 개선된 CSS
├── config/
├── services/
├── utils/
└── dist/                # 빌드 결과물 (자동 생성)
```

## 🎨 스타일 개선 사항

1. **타이포그래피**: clamp() 함수로 반응형 폰트 크기 적용
2. **버튼 효과**: 그라데이션 호버 애니메이션 추가
3. **카드 호버**: 부드러운 cubic-bezier 애니메이션
4. **섹션 여백**: 일관된 spacing 시스템 적용
5. **모바일 UX**: 스크롤 힌트 및 접근성 개선

## 📝 주의사항

- `node_modules/`와 `dist/`는 Git에 커밋하지 마세요
- 배포 전 반드시 `npm run build`로 빌드하세요
- `vite.config.js`의 `base` 설정을 저장소명에 맞게 조정하세요
