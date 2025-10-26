# 🚀 빠른 시작 가이드

## GitHub에 업로드하고 배포하기

### 1단계: GitHub 저장소 생성

1. [GitHub](https://github.com)에 로그인
2. 우측 상단 "+" 버튼 클릭 → "New repository"
3. Repository name: `festival-travel-guide` 입력
4. Public 선택
5. "Create repository" 클릭

### 2단계: 로컬에서 GitHub로 업로드

터미널에서 다음 명령어를 순서대로 실행하세요:

```bash
# 1. 프로젝트 폴더로 이동
cd /tmp/festival-travel-guide

# 2. Git 초기화
git init

# 3. 모든 파일 추가
git add .

# 4. 첫 커밋
git commit -m "Initial commit: Festival Travel Guide 웹앱"

# 5. 기본 브랜치를 main으로 설정
git branch -M main

# 6. GitHub 저장소 연결 (YOUR-USERNAME을 본인 GitHub 아이디로 변경!)
git remote add origin https://github.com/YOUR-USERNAME/festival-travel-guide.git

# 7. GitHub에 업로드
git push -u origin main
```

### 3단계: GitHub Pages로 배포

1. GitHub 저장소 페이지로 이동
2. 상단 메뉴에서 **"Settings"** 클릭
3. 왼쪽 사이드바에서 **"Pages"** 클릭
4. "Source" 섹션에서:
   - Branch: **"main"** 선택
   - Folder: **"/ (root)"** 선택
5. **"Save"** 버튼 클릭
6. 몇 분 기다리면 배포 완료!

### 4단계: 웹사이트 접속

배포가 완료되면 다음 주소로 접속할 수 있습니다:

```
https://YOUR-USERNAME.github.io/festival-travel-guide/
```

(YOUR-USERNAME을 본인의 GitHub 아이디로 변경)

---

## 🔧 선택사항: Unsplash API 설정

더 좋은 품질의 이미지를 사용하려면:

1. [Unsplash Developers](https://unsplash.com/developers) 접속
2. 회원가입 후 "New Application" 클릭
3. 약관 동의 후 앱 이름 입력
4. Access Key 복사
5. `script.js` 파일 열기
6. 7번째 줄 수정:
   ```javascript
   const UNSPLASH_ACCESS_KEY = 'YOUR_UNSPLASH_ACCESS_KEY_HERE';
   ```
   를
   ```javascript
   const UNSPLASH_ACCESS_KEY = '복사한-키-붙여넣기';
   ```
   로 변경
7. 저장 후 다시 GitHub에 푸시:
   ```bash
   git add script.js
   git commit -m "Add Unsplash API key"
   git push
   ```

---

## 📱 로컬에서 테스트하기

### 방법 1: 직접 열기
- `index.html` 파일을 더블클릭하여 브라우저에서 열기

### 방법 2: Python 서버
```bash
cd /tmp/festival-travel-guide
python3 -m http.server 8000
# 브라우저에서 http://localhost:8000 접속
```

### 방법 3: VS Code Live Server
1. VS Code에서 프로젝트 폴더 열기
2. Live Server 확장 설치
3. `index.html` 우클릭 → "Open with Live Server"

---

## 🎓 과제 제출 시 참고사항

### 제출 내용:
1. ✅ GitHub 저장소 URL
2. ✅ GitHub Pages 배포 URL
3. ✅ 프로젝트 설명 (README.md에 포함됨)
4. ✅ 스크린샷 (선택사항)

### 프로젝트 특징:
- 3개 축제 상세 정보 (라 토마티나, 옥토버페스트, 리우 카니발)
- 반응형 웹 디자인 (모바일/태블릿/데스크탑 지원)
- 구글 맵 연동
- 예산 시각화 차트
- 자동 이미지 로딩 (Unsplash API)
- 여행 팁 및 준비물 정보
- FAQ 섹션

---

## ❓ 문제 해결

### Q: 이미지가 안 보여요
A: Unsplash API 키를 설정하지 않았다면 플레이스홀더 이미지가 표시됩니다. 정상 작동입니다!

### Q: GitHub Pages가 작동하지 않아요
A: 
1. 저장소가 Public인지 확인
2. Settings → Pages에서 설정이 올바른지 확인
3. 5-10분 정도 기다려보기
4. 브라우저 캐시 삭제 후 재접속

### Q: Git 명령어가 안 돼요
A: Git이 설치되어 있는지 확인하세요:
```bash
git --version
```
설치되어 있지 않다면 [git-scm.com](https://git-scm.com)에서 다운로드

---

## 📞 추가 도움이 필요하신가요?

- GitHub Issues 탭에 질문 남기기
- README.md 파일의 자세한 설명 참고
- 팀원들과 함께 문제 해결하기

**화이팅! 🎉**
