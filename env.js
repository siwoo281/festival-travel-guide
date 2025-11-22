/**
 * 환경변수 설정
 * @file 정적 사이트에서 사용할 환경 변수 정의
 * 
 * ⚠️ 중요 보안 주의사항:
 * - 정적 사이트(GitHub Pages)에서는 모든 JavaScript가 클라이언트에 노출됩니다
 * - 절대 실제 API 키를 여기에 직접 입력하지 마세요
 * - 로컬 개발: env.sample.js를 복사하여 env.js 생성 (git에 커밋하지 말 것)
 * - 배포: 빈 문자열 유지 또는 공개 가능한 키만 사용
 * 
 * @example
 * // 로컬 개발 시
 * cp env.sample.js env.js
 * // env.js에 개발용 키 입력 (이 파일은 .gitignore에 포함)
 */

/**
 * @typedef {Object} EnvironmentConfig
 * @property {string} UNSPLASH_KEY - Unsplash API 액세스 키 (선택사항)
 * @property {string} OPENWEATHER_KEY - OpenWeather API 키 (선택사항)
 * @property {'production'|'development'} MODE - 실행 모드
 */

/** @type {EnvironmentConfig} */
window.ENV = {
    // 공개 저장소/정적 배포에서는 빈 값 유지 (fallback 이미지 사용)
    UNSPLASH_KEY: '',
    OPENWEATHER_KEY: '',
    // 배포 기본 모드
    MODE: 'production' // 'production' | 'development'
};
