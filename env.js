// 환경변수 로더
// 주의: 정적 사이트(GitHub Pages)에서는 어떤 키도 비공개가 될 수 없습니다.
// 배포 시에는 실제 API 키를 주입하지 말고, 키 의존 기능은 비활성화/대체(fallback) 하세요.
// 로컬 개발 시에만 env.sample.js를 복사하여 사용하시기 바랍니다.
// 예) cp env.sample.js env.js (실키 커밋 금지)

window.ENV = {
    // 공개 저장소/정적 배포에서는 빈 값 유지 권장
    UNSPLASH_KEY: '',
    OPENWEATHER_KEY: '',
    // 배포 기본 모드
    MODE: 'production' // 'production' | 'development'
};
