# 🚀 배포 완료!

## 배포 정보

### GitHub Repository
- **저장소**: https://github.com/siwoo281/festival-travel-guide
- **브랜치**: main

### 웹사이트 URL
- **GitHub Pages**: https://siwoo281.github.io/festival-travel-guide/

## 배포 방법

### 자동 배포 (GitHub Actions)
- `main` 브랜치에 푸시하면 자동으로 배포됩니다
- GitHub Actions가 자동으로 빌드하고 배포합니다
- 배포 상태는 저장소의 "Actions" 탭에서 확인 가능합니다

### 수동 배포
필요시 로컬에서 빌드하여 배포할 수 있습니다:

```bash
# 1. 의존성 설치
npm install

# 2. 프로젝트 빌드
npm run build

# 3. 빌드된 파일은 dist/ 폴더에 생성됩니다
```

## GitHub Pages 설정 확인

저장소 설정에서 GitHub Pages가 활성화되어 있는지 확인하세요:

1. GitHub 저장소로 이동
2. **Settings** → **Pages**
3. **Source**가 "GitHub Actions"로 설정되어 있는지 확인
4. 배포 후 사이트 URL이 표시됩니다

## 배포 상태 확인

### Actions 탭에서 확인
1. https://github.com/siwoo281/festival-travel-guide/actions
2. 최신 워크플로우 실행 상태 확인
3. ✅ 초록색: 배포 성공
4. 🔴 빨간색: 오류 발생 (로그 확인 필요)

### 배포 시간
- 일반적으로 푸시 후 2-5분 정도 소요됩니다
- 빌드와 배포가 모두 완료되면 웹사이트에 접속 가능합니다

## 트러블슈팅

### 사이트가 표시되지 않는 경우
1. GitHub Actions 로그 확인
2. GitHub Pages 설정이 올바른지 확인
3. 브라우저 캐시 삭제 후 재시도
4. 5-10분 정도 기다린 후 재접속

### 배포 실패 시
```bash
# 로컬에서 빌드 테스트
npm run build

# 오류가 있다면 해결 후 재푸시
git add .
git commit -m "Fix build errors"
git push origin main
```

## 주요 기능

✅ Vite 기반 빌드 시스템
✅ 자동 배포 (GitHub Actions)
✅ SPA 라우팅 지원 (404.html)
✅ Service Worker 지원
✅ 반응형 디자인
✅ 이미지 최적화

## 업데이트 방법

코드를 수정한 후:

```bash
git add .
git commit -m "설명적인 커밋 메시지"
git push origin main
```

푸시 후 자동으로 배포가 시작됩니다!

---

**배포 완료 시각**: 2025년 11월 2일
**빌드 도구**: Vite v5.4.21
**Node.js 버전**: 20.x
