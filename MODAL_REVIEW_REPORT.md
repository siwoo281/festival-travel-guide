# 축제 "자세히 보기" 모달 기능 검토 보고서

## 📅 검토 일자
2025년 11월 23일

## 🎯 검토 범위
각 축제별 "자세히 보기" 모달의 8개 탭 기능 전체 검토

---

## 📋 탭별 기능 현황

### 1. 개요 탭 (Overview)
**함수**: `displayFestivalOverview(festival, containerId)` (553-760행)

#### 구현된 기능
- ✅ 히어로 이미지 표시
- ✅ 상세 설명 (detailedDescription)
- ✅ 주요 관광지 카드 (attractions)
- ✅ 현지 음식 카드 (localFood) - Must Try 배지
- ✅ 추천 레스토랑 (restaurants) - 평점, 타입, 가격대
- ✅ 주변 명소 (nearbyAttractions) - 거리, 이동 시간
- ✅ 비자 정보 (visaInfo)
- ✅ 긴급 연락처 (emergency)
- ✅ 빠른 팁 (tips) - 주의사항/준비물/추천 3개씩
- ✅ 지도 (mapUrl) - iframe 임베드

#### 발견된 오류
1. **이미지 로딩 실패 처리 부족**
   - `attraction.image`가 없거나 로드 실패 시 빈 이미지 영역 표시
   - `food.image`도 동일한 문제

2. **XSS 취약성 가능성**
   - `detailedDescription`이 HTML로 직접 삽입됨 (`innerHTML`)
   - 사용자 입력 데이터가 있다면 위험

3. **지도 iframe 접근성**
   - `allowfullscreen` 속성만 있고 `title` 속성 없음
   - 스크린 리더 사용자에게 불명확

#### 개선점
1. **이미지 폴백 처리**
   ```javascript
   // 현재: 이미지 없으면 빈 영역
   <img src="${attraction.image}" ...>
   
   // 개선: 폴백 이미지 또는 placeholder
   <img src="${attraction.image || '/images/placeholder.jpg'}" 
        onerror="this.src='/images/placeholder.jpg'">
   ```

2. **HTML 이스케이프**
   - `detailedDescription`이 HTML이 아닌 경우 텍스트로 처리
   - 또는 DOMPurify 같은 라이브러리 사용

3. **지도 접근성**
   ```html
   <iframe src="..." title="축제 위치 지도" ...>
   ```

#### 추가할 내용
1. **이미지 갤러리**
   - 축제 관련 이미지 여러 장 슬라이더로 표시
   - Lightbox 기능

2. **비디오 임베드**
   - YouTube/Vimeo 축제 영상 링크
   - 축제 하이라이트 영상

3. **소셜 미디어 링크**
   - 공식 SNS 계정 링크
   - 해시태그 정보

4. **실시간 날씨 위젯**
   - 축제 기간 날씨 예보 API 연동

---

### 2. 패키지 정보 탭 (Package Info)
**함수**: `displayPackageInfo(packageDetails, containerId)` (869-954행)

#### 구현된 기능
- ✅ 포함 사항 (included)
- ✅ 불포함 사항 (excluded)
- ✅ 특징 (features)
- ✅ 추가 옵션 (addOns)
- ✅ 특별 혜택 (specialBenefits)
- ✅ 출발 일정 (departureDates)
- ✅ 단체 할인 (groupDiscount)
- ✅ 상품 코드 표시
- ✅ 견적 요청 버튼

#### 발견된 오류
1. **견적 요청 함수 미구현**
   ```javascript
   onclick="requestQuote('${packageDetails.productCode}')"
   ```
   - `requestQuote` 함수가 정의되지 않음
   - 클릭 시 에러 발생 가능

2. **데이터 검증 부족**
   - `packageDetails`가 `null`이면 처리하지만, 부분 데이터 누락 시 오류 가능

#### 개선점
1. **견적 요청 기능 구현**
   ```javascript
   window.requestQuote = function(productCode) {
       // 모달 또는 폼 표시
       // 이메일/전화번호 입력 받기
       // API 호출 또는 이메일 전송
   };
   ```

2. **데이터 검증 강화**
   ```javascript
   const included = packageDetails.included || [];
   const excluded = packageDetails.excluded || [];
   // 빈 배열 처리
   ```

3. **비교 기능 추가**
   - 여러 패키지 티어를 한 화면에서 비교
   - 체크박스로 선택하여 비교

#### 추가할 내용
1. **실시간 가격 확인**
   - API 연동으로 최신 가격 표시
   - 할인 정보 표시

2. **예약 가능 여부**
   - 재고/좌석 현황 표시
   - 마감 임박 알림

3. **리뷰/평점**
   - 기존 고객 리뷰 표시
   - 평점 통계

---

### 3. 여행 일정표 탭 (Itinerary)
**함수**: `displayItinerary(festivalId, containerId)` (1475-1578행)

#### 구현된 기능
- ✅ 일자별 타임라인 표시
- ✅ 일자별 제목, 설명, 이미지
- ✅ 시간별 활동 (activities)
- ✅ 활동 위치 정보
- ✅ 이미지 스켈레톤 로딩
- ✅ 리치 데이터 우선 사용

#### 발견된 오류
1. **이미지 XSS 취약성**
   ```javascript
   alt="${(day.title || '일정 이미지').replace(/\"/g, '&quot;')}"
   ```
   - `replace`만으로는 부족, `replace(/</g, '&lt;')` 등 추가 필요

2. **데이터 소스 혼재**
   - `window.itineraryRichData`와 `itineraryData` 혼용
   - 우선순위가 명확하지 않음

3. **에러 처리 부족**
   - `itineraryData[festivalId]`가 없을 때만 처리
   - 부분 데이터 누락 시 오류 가능

#### 개선점
1. **안전한 HTML 이스케이프**
   ```javascript
   function escapeHtml(text) {
       const div = document.createElement('div');
       div.textContent = text;
       return div.innerHTML;
   }
   ```

2. **데이터 소스 통합**
   - 단일 데이터 소스로 통합
   - 또는 명확한 우선순위 문서화

3. **로딩 상태 표시**
   - 데이터 로딩 중 스켈레톤 UI
   - 에러 상태 명확히 표시

#### 추가할 내용
1. **일정 커스터마이징**
   - 사용자가 일정 수정/추가 가능
   - PDF 다운로드

2. **지도 통합**
   - 일정별 위치를 지도에 표시
   - 경로 시각화

3. **알림 기능**
   - 일정별 알림 설정
   - 캘린더 연동 (Google Calendar, iCal)

---

### 4. 경비 탭 (Budget)
**함수**: `displayBudgetChart(budget, totalPrice, containerId)` (976-1057행)

#### 구현된 기능
- ✅ Chart.js 도넛 차트
- ✅ 항목별 경비 내역
- ✅ 프로그레스 바 (비율 표시)
- ✅ 총 예상 경비 표시
- ✅ 차트 인스턴스 메모리 관리

#### 발견된 오류
1. **setTimeout 의존성**
   ```javascript
   setTimeout(() => {
       const ctx = document.getElementById('budgetChart');
       // ...
   }, 100);
   ```
   - 100ms가 부족할 수 있음 (느린 기기)
   - DOM 준비 여부 확인 없음

2. **차트 컨테이너 ID 충돌**
   - 모든 축제가 동일한 `budgetChart` ID 사용
   - 여러 모달 열릴 때 충돌 가능

3. **데이터 검증 부족**
   - `budget` 객체의 값이 숫자가 아닐 수 있음
   - `parseInt(amount)` 실패 시 NaN 표시

#### 개선점
1. **DOM 준비 확인**
   ```javascript
   function waitForElement(id, callback, maxAttempts = 10) {
       const element = document.getElementById(id);
       if (element) {
           callback();
       } else if (maxAttempts > 0) {
           setTimeout(() => waitForElement(id, callback, maxAttempts - 1), 50);
       }
   }
   ```

2. **고유 ID 사용**
   ```javascript
   <canvas id="budgetChart-${festivalId}">
   ```

3. **데이터 검증 강화**
   ```javascript
   const amount = parseInt(cost) || 0;
   if (isNaN(amount)) {
       console.warn('Invalid budget amount:', cost);
       return 0;
   }
   ```

#### 추가할 내용
1. **비교 기능**
   - 여러 축제 경비 비교
   - 예산 범위 필터링

2. **통화 변환**
   - 현지 통화로 변환 표시
   - 환율 정보

3. **예산 계산기**
   - 사용자 예산 입력
   - 맞춤 패키지 추천

---

### 5. 여행 팁 탭 (Travel Tips)
**함수**: `displayTravelTips(tips, containerId)` (786-868행)

#### 구현된 기능
- ✅ 준비물 (준비물)
- ✅ 주의사항 (주의사항)
- ✅ 추천 사항 (추천)
- ✅ 아이콘 시각화
- ✅ 카드 형식 레이아웃

#### 발견된 오류
1. **데이터 구조 가정**
   - `tips.준비물`, `tips.주의사항` 등 한글 키 사용
   - 다른 구조의 데이터와 호환성 문제

2. **빈 배열 처리**
   - 배열이 비어있을 때 "정보 준비 중" 표시
   - 하지만 빈 카드가 표시될 수 있음

#### 개선점
1. **유연한 데이터 구조**
   ```javascript
   const tips = {
       준비물: tips.preparedItems || tips.준비물 || [],
         주의사항: tips.warnings || tips.주의사항 || [],
         // ...
   };
   ```

2. **빈 섹션 숨김**
   ```javascript
   ${tips.준비물 && tips.준비물.length > 0 ? `
       <!-- 준비물 섹션 -->
   ` : ''}
   ```

#### 추가할 내용
1. **팁 카테고리 확장**
   - 쇼핑 팁
   - 교통 팁
   - 통신 팁 (로밍, 와이파이)
   - 팁 공유 기능

2. **인터랙티브 체크리스트**
   - 준비물 체크리스트
   - PDF 다운로드

3. **현지인 팁**
   - 현지인 추천 장소
   - 숨은 명소

---

### 6. 상품 구성 탭 (Product Tiers)
**함수**: `displayProductTiers(festivalId, containerId)` (1585-1851행)

#### 구현된 기능
- ✅ 3단계 티어 (Basic, Standard, Premium)
- ✅ 티어별 가격, 특징, 수익성
- ✅ 공헌이익률 계산
- ✅ 손익분기점 표시
- ✅ 티어 상세 모달
- ✅ 차트 시각화

#### 발견된 오류
1. **티어 선택 함수 미구현**
   ```javascript
   onclick="selectTier('${tier.name}', ${tier.price})"
   ```
   - `selectTier`는 정의되어 있지만 실제 기능 없음 (토스트만 표시)

2. **차트 인스턴스 관리**
   - `renderTierProfitChart`에서 차트 인스턴스 저장 안 함
   - 메모리 누수 가능

3. **데이터 없을 때 처리**
   - `getBusinessData`가 `null`이면 "준비 중"만 표시
   - 부분 데이터 누락 시 오류 가능

#### 개선점
1. **티어 선택 기능 구현**
   ```javascript
   window.selectTier = function(tierName, price) {
       // 선택한 티어를 패키지 기획 패널에 자동 입력
       // 또는 장바구니에 추가
       prefillPlannerFromTier(festivalId, tierName);
   };
   ```

2. **차트 인스턴스 관리**
   ```javascript
   const chartInstances = {};
   function renderTierProfitChart(festivalId, ...) {
       if (chartInstances[festivalId]) {
           chartInstances[festivalId].destroy();
       }
       chartInstances[festivalId] = new Chart(...);
   }
   ```

#### 추가할 내용
1. **티어 비교 테이블**
   - 3개 티어를 한 화면에서 비교
   - 차이점 강조

2. **추천 티어 표시**
   - 사용자 프로필 기반 추천
   - "이 티어가 당신에게 맞습니다" 배지

3. **할인 정보**
   - 얼리버드 할인
   - 그룹 할인 계산기

---

### 7. 손익 분기점 탭 (Break-Even Analysis)
**함수**: `displayBreakEvenAnalysis(festivalId, containerId)` (1858-2243행)

#### 구현된 기능
- ✅ 손익분기점 계산기
- ✅ 핵심 지표 요약 (공헌이익, 안전마진 등)
- ✅ 시나리오 분석 (보수적/기본/낙관적)
- ✅ 차트 시각화
- ✅ 위험 요소 분석
- ✅ 성공 전략 제시

#### 발견된 오류
1. **계산기 함수 미구현**
   ```javascript
   onclick="calculateBreakEven('${festivalId}')"
   onclick="showCalculatorGuide()"
   ```
   - 두 함수 모두 정의되지 않음

2. **차트 인스턴스 관리**
   - `renderBreakEvenChart`에서 인스턴스 저장 안 함
   - 재렌더링 시 메모리 누수

3. **입력값 검증 부족**
   - 음수 입력 가능
   - 0으로 나누기 가능성

#### 개선점
1. **계산기 함수 구현**
   ```javascript
   window.calculateBreakEven = function(festivalId) {
       const price = parseInt(document.getElementById(`calc-price-${festivalId}`).value);
       const variable = parseInt(document.getElementById(`calc-variable-${festivalId}`).value);
       const fixed = parseInt(document.getElementById(`calc-fixed-${festivalId}`).value);
       
       if (price <= variable) {
           alert('판매가격은 변동비용보다 커야 합니다.');
           return;
       }
       
       const contribution = price - variable;
       const breakEven = Math.ceil(fixed / contribution);
       // 결과 표시
   };
   ```

2. **입력값 검증**
   ```javascript
   <input type="number" min="0" step="1000" 
          oninput="this.value = Math.max(0, parseInt(this.value) || 0)">
   ```

3. **가이드 모달**
   ```javascript
   window.showCalculatorGuide = function() {
       // 손익분기점 계산 공식 설명 모달
   };
   ```

#### 추가할 내용
1. **인터랙티브 차트**
   - 슬라이더로 값 변경 시 실시간 업데이트
   - 드래그 앤 드롭으로 시나리오 조정

2. **비교 기능**
   - 여러 축제 손익분기점 비교
   - 시계열 분석 (월별/연도별)

3. **리포트 생성**
   - PDF 다운로드
   - Excel 내보내기

---

### 8. 수요 시뮬레이션 탭 (Demand Simulation)
**함수**: `initDemandSimulator(festivalId, containerId)` (2341-2596행)

#### 구현된 기능
- ✅ 마케팅 예산 슬라이더
- ✅ 할인율 슬라이더
- ✅ 계절 요인 선택
- ✅ 경쟁 강도 선택
- ✅ 실시간 업데이트
- ✅ 수요 변화 차트
- ✅ 수익성 분석 차트
- ✅ 시나리오 분석 테이블

#### 발견된 오류
1. **차트 인스턴스 전역 변수**
   ```javascript
   if (window.demandChartInstance) {
       window.demandChartInstance.destroy();
   }
   ```
   - 전역 변수 사용으로 여러 축제 동시 시뮬레이션 불가
   - 축제별로 분리 필요

2. **초기화 함수 중복 호출**
   - `setupSimulatorListeners`가 `setTimeout`으로 호출
   - 여러 번 호출될 수 있음

3. **에러 처리 부족**
   - Chart.js 로드 실패 시 처리 없음
   - 데이터 없을 때 차트 오류

#### 개선점
1. **차트 인스턴스 축제별 관리**
   ```javascript
   const chartInstances = {};
   function updateSimulationCharts(festivalId, data) {
       const demandCanvas = document.getElementById(`demandChart-${festivalId}`);
       if (chartInstances[`demand-${festivalId}`]) {
           chartInstances[`demand-${festivalId}`].destroy();
       }
       chartInstances[`demand-${festivalId}`] = new Chart(...);
   }
   ```

2. **초기화 중복 방지**
   ```javascript
   let listenersSetup = false;
   function setupSimulatorListeners(festivalId) {
       if (listenersSetup) return;
       listenersSetup = true;
       // ...
   }
   ```

3. **에러 처리**
   ```javascript
   if (!window.Chart) {
       console.error('Chart.js not loaded');
       container.innerHTML = '<div class="alert alert-danger">차트 라이브러리를 불러올 수 없습니다.</div>';
       return;
   }
   ```

#### 추가할 내용
1. **고급 시뮬레이션 옵션**
   - 가격 탄력성 계수 조정
   - 경쟁사 가격 반영
   - 계절별 수요 패턴

2. **히스토리 기능**
   - 시뮬레이션 결과 저장
   - 이전 결과와 비교

3. **AI 기반 예측**
   - 머신러닝 모델 연동
   - 과거 데이터 기반 예측

---

## 🔴 심각한 오류 (즉시 수정 필요)

### 1. 미구현 함수들
- `requestQuote()` - 패키지 정보 탭
- `calculateBreakEven()` - 손익 분기점 탭
- `showCalculatorGuide()` - 손익 분기점 탭

**영향**: 버튼 클릭 시 JavaScript 에러 발생

### 2. 차트 인스턴스 메모리 누수
- 경비 탭, 상품 구성 탭, 손익 분기점 탭, 수요 시뮬레이션 탭
- 차트 인스턴스가 제대로 정리되지 않음

**영향**: 장시간 사용 시 메모리 누수, 성능 저하

### 3. ID 충돌
- 경비 차트: 모든 축제가 `budgetChart` 사용
- 여러 모달 동시 열릴 때 충돌

**영향**: 차트가 제대로 렌더링되지 않음

---

## 🟡 개선 권장 사항

### 1. 데이터 검증 강화
- 모든 입력값 검증
- 빈 데이터 처리
- 타입 체크

### 2. 에러 처리 개선
- try-catch 블록 추가
- 사용자 친화적 에러 메시지
- 폴백 UI 제공

### 3. 접근성 향상
- ARIA 속성 추가
- 키보드 네비게이션
- 스크린 리더 지원

### 4. 성능 최적화
- 이미지 지연 로딩
- 차트 렌더링 최적화
- 메모리 관리

---

## 🟢 추가 기능 제안

### 1. 공통 기능
- **공유 기능**: SNS 공유, 링크 복사
- **인쇄 기능**: PDF 생성, 인쇄 최적화 레이아웃
- **다국어 지원**: 영어, 일본어 등
- **다크 모드**: 야간 모드 지원

### 2. 개요 탭
- 이미지 갤러리 슬라이더
- 비디오 임베드
- 실시간 날씨 위젯
- 소셜 미디어 링크

### 3. 패키지 정보 탭
- 실시간 가격 확인
- 예약 가능 여부
- 리뷰/평점 시스템
- 비교 기능

### 4. 여행 일정표 탭
- 일정 커스터마이징
- 지도 통합
- 캘린더 연동
- 알림 설정

### 5. 경비 탭
- 여러 축제 비교
- 통화 변환
- 예산 계산기

### 6. 여행 팁 탭
- 인터랙티브 체크리스트
- 팁 카테고리 확장
- 현지인 팁

### 7. 상품 구성 탭
- 티어 비교 테이블
- 추천 티어 표시
- 할인 정보

### 8. 손익 분기점 탭
- 인터랙티브 차트
- 비교 기능
- 리포트 생성

### 9. 수요 시뮬레이션 탭
- 고급 시뮬레이션 옵션
- 히스토리 기능
- AI 기반 예측

---

## 📊 종합 평가

### 강점 💪
1. **풍부한 기능**: 8개 탭으로 상세한 정보 제공
2. **시각화**: Chart.js를 활용한 직관적인 데이터 표현
3. **실무적 가치**: 손익분기점, 수요 시뮬레이션 등 비즈니스 분석 기능
4. **사용자 경험**: 인터랙티브한 슬라이더, 실시간 업데이트

### 약점 ⚠️
1. **미구현 함수**: 일부 버튼이 작동하지 않음
2. **메모리 관리**: 차트 인스턴스 정리 부족
3. **에러 처리**: 예외 상황 처리 미흡
4. **데이터 검증**: 입력값 검증 부족

### 우선순위 🔥
1. **HIGH**: 미구현 함수 구현 (즉시 수정)
2. **HIGH**: 차트 인스턴스 관리 개선
3. **MEDIUM**: 데이터 검증 강화
4. **MEDIUM**: 에러 처리 개선
5. **LOW**: 추가 기능 구현

---

## ✅ 결론

모달 기능은 **전반적으로 잘 구현**되어 있으며, 특히 **비즈니스 분석 기능**(손익분기점, 수요 시뮬레이션)이 매우 실용적입니다.

다만 **즉시 수정이 필요한 오류들**(미구현 함수, 메모리 누수)이 있어 우선적으로 해결해야 합니다.

추가 기능들은 사용자 경험을 크게 향상시킬 수 있으므로 단계적으로 구현을 권장합니다.

