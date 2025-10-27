# 🎉 Festival Travel Guide - 코드 개선 가이드

## 📁 새로운 프로젝트 구조

```
festival-travel-guide/
├── config/
│   └── constants.js       # 전역 설정 상수
├── utils/
│   ├── logger.js          # 로깅 시스템
│   └── helpers.js         # 유틸리티 함수
├── services/
│   └── apiService.js      # API 호출 로직
├── env.js                 # 환경변수 (개발용)
├── .env.example           # 환경변수 예시
└── script.js              # 메인 로직
```

## 🔧 주요 개선사항

### 1. **API 키 보안 강화** ✅
- API 키를 환경변수로 분리
- `.env.example` 제공
- 프로덕션 환경에서는 GitHub Secrets 사용 권장

```javascript
// 사용법
window.ENV = {
    UNSPLASH_KEY: 'your_key_here',
    MODE: 'production'
};
```

### 2. **불필요한 파일 정리** ✅
- 백업 파일 제거 (*.backup, *.bak 등)
- 테스트 파일 제거
- `.gitignore` 업데이트

### 3. **로깅 시스템 구축** ✅
- 개발/프로덕션 환경 자동 감지
- 로그 레벨 관리 (ERROR, WARN, INFO, DEBUG)
- 프로덕션에서는 ERROR/WARN만 출력

```javascript
// 사용법
logger.debug('디버그 메시지');  // 개발 모드만
logger.info('정보 메시지');     // INFO 이상
logger.warn('경고 메시지');     // WARN 이상
logger.error('에러 메시지');    // 항상 출력
logger.success('성공 메시지');  // 항상 출력
```

### 4. **코드 모듈화** ✅
- script.js의 핵심 기능 분리
- utils, services, config 디렉토리 구성
- 재사용 가능한 함수 분리

### 5. **상수 통합** ✅
- 매직 넘버 제거
- `APP_CONFIG` 객체로 통합
- 이미지 파라미터, 캐시 TTL 등 중앙 관리

```javascript
// 사용법
const ttl = APP_CONFIG.CACHE.TTL_12H;
const params = APP_CONFIG.IMAGE.CARD_PARAMS;
```

### 6. **에러 처리 개선** ✅
- 사용자 친화적 에러 메시지
- 자동 닫힘 기능 (10초)
- 애니메이션 효과
- 개발 모드에서만 상세 스택 로그

## 🚀 배포 가이드

### 개발 환경
```bash
# 1. env.js 파일 설정
# 2. 로컬 서버 실행
python3 -m http.server 8000
```

### 프로덕션 배포
```bash
# 1. env.js를 제거하거나 빈 객체로 설정
# 2. GitHub Secrets에 API 키 등록
# 3. 배포
git push origin main
```

## 📝 체크리스트

- [x] API 키 보안 강화
- [x] 불필요한 파일 정리
- [x] 로깅 시스템 구축
- [x] 코드 모듈화
- [x] 상수 통합
- [x] 에러 처리 개선

## 🔜 향후 개선 계획

- [ ] TypeScript 마이그레이션
- [ ] 단위 테스트 추가
- [ ] 번들링 및 minify
- [ ] PWA 지원
- [ ] SEO 최적화
- [ ] 접근성 개선

## 📚 참고

- [Logger 사용법](utils/logger.js)
- [Constants 사용법](config/constants.js)
- [API Service](services/apiService.js)
- [Helpers](utils/helpers.js)
