import { quizData } from '../data/quiz.js';
import { festivalProfiles } from '../data/profiles.js';
import { festivalsData } from '../data/festivals.js';
import { createFestivalCard } from './ui.js';

// ===== 퀴즈 상태 변수 =====
let currentQuestionIndex = 0;
let quizAnswers = {};

// ===== 내부 헬퍼 함수 =====

/**
 * 질문 카드 UI를 렌더링합니다.
 * @param {object} question - 현재 질문 객체
 * @param {object} answers - 현재까지의 답변 객체
 */
function renderQuestion(question, answers) {
    const progress = Math.round(((currentQuestionIndex + 1) / quizData.questions.length) * 100);
    const progressBar = document.getElementById('quizProgress');
    if (progressBar) progressBar.style.width = `${progress}%`;

    const card = document.getElementById('questionCard');
    if (!card) return;

    const selectedAnswer = answers[question.id];
    card.innerHTML = `
        <h4 class="quiz-question-title">${question.question}</h4>
        <p class="quiz-question-desc">${question.description}</p>
        <div class="list-group quiz-options" role="radiogroup" aria-label="퀴즈 보기">
            ${question.options.map((option) => {
                const isSelected = selectedAnswer === option.text;
                return `
                <button type="button" class="list-group-item list-group-item-action quiz-option ${isSelected ? 'active' : ''}"
                        role="radio" aria-checked="${isSelected}"
                        data-qid="${question.id}" data-answer="${encodeURIComponent(option.text)}">
                    ${option.text}
                </button>`;
            }).join('')}
        </div>
    `;

    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    if (prevBtn) prevBtn.style.display = currentQuestionIndex > 0 ? 'inline-block' : 'none';
    if (nextBtn) {
        nextBtn.textContent = currentQuestionIndex === quizData.questions.length - 1 ? '결과 보기' : '다음';
        const answered = !!answers[question.id];
        nextBtn.disabled = !answered;
        nextBtn.classList.toggle('disabled', !answered);
        nextBtn.setAttribute('aria-disabled', String(!answered));
    }
}

/**
 * 현재 질문에 대한 이벤트 핸들러를 설정합니다.
 */
function setupQuestionEventHandlers() {
    const card = document.getElementById('questionCard');
    if (card) {
        const options = card.querySelectorAll('.quiz-option');
        options.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const qid = parseInt(e.currentTarget.getAttribute('data-qid'), 10);
                const answer = decodeURIComponent(e.currentTarget.getAttribute('data-answer'));
                handleAnswerSelection(qid, answer);
            });
        });
    }

    const prevBtn = document.getElementById('prevBtn');
    if (prevBtn) {
        const newPrevBtn = prevBtn.cloneNode(true);
        prevBtn.parentNode.replaceChild(newPrevBtn, prevBtn);
        newPrevBtn.addEventListener('click', prevQuestion);
    }

    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn) {
        const newNextBtn = nextBtn.cloneNode(true);
        nextBtn.parentNode.replaceChild(newNextBtn, nextBtn);
        newNextBtn.addEventListener('click', nextQuestion);
    }
}


/**
 * 특정 인덱스의 질문을 화면에 표시 (렌더링 + 이벤트 설정)
 * @param {number} index - 질문 인덱스
 */
function showQuestion(index) {
    if (index >= quizData.questions.length) {
        showResult();
        return;
    }
    const question = quizData.questions[index];
    renderQuestion(question, quizAnswers);
    setupQuestionEventHandlers();
}


/**
 * 답변 선택 처리 및 다음 단계로 전환
 * @param {number} questionId - 질문 ID
 * @param {string} answerText - 선택한 답변 텍스트
 */
function handleAnswerSelection(questionId, answerText) {
    quizAnswers[questionId] = answerText;
    
    renderQuestion(quizData.questions[currentQuestionIndex], quizAnswers);
    
    const card = document.getElementById('questionCard');
    
    setTimeout(() => {
        if (currentQuestionIndex >= quizData.questions.length - 1) {
            showResult();
        } else {
            currentQuestionIndex++;
            if (card) {
                card.classList.add('question-card-transition');
                setTimeout(() => {
                    showQuestion(currentQuestionIndex);
                    card.classList.remove('question-card-transition');
                }, 150);
            } else {
                 showQuestion(currentQuestionIndex);
            }
        }
    }, 300);
}

/**
 * 다음 질문으로 이동
 */
function nextQuestion() {
    if (currentQuestionIndex < quizData.questions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    } else {
        showResult();
    }
}

/**
 * 이전 질문으로 이동
 */
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
    }
}

// ===== 퀴즈 결과 로직 (변경 없음) =====

/**
 * 사용자의 5문항 응답을 속성 선호도로 변환
 * @returns {object} - { budget: 'mid', seasons: ['warm'], vibes: ['party'], ... }
 */
function buildUserProfile() {
    const profile = {
        budget: null,
        seasons: [],
        vibes: [],
        activities: [],
        motives: []
    };

    // Q5: 예산
    const budgetAnswer = quizAnswers[5] || '';
    if (budgetAnswer.includes('가성비가 중요해요') || budgetAnswer.includes('알뜰하게')) profile.budget = 'low';
    else if (budgetAnswer.includes('조금은 투자해서') || budgetAnswer.includes('만족스러운')) profile.budget = 'mid';
    else if (budgetAnswer.includes('일생일대') || budgetAnswer.includes('아낌없이')) profile.budget = 'high';

    // Q4: 시즌
    const seasonAnswer = quizAnswers[4] || '';
    if (seasonAnswer.includes('봄/여름')) profile.seasons.push('warm');
    else if (seasonAnswer.includes('가을/겨울')) profile.seasons.push('cool');
    else profile.seasons.push('warm', 'cool'); // 상관없음

    // Q1, Q2, Q3: 동기, 분위기, 활동
    const motiveAnswer = quizAnswers[1] || '';
    if (motiveAnswer.includes('해방감')) profile.motives.push('freedom');
    if (motiveAnswer.includes('문화')) profile.motives.push('culture');
    if (motiveAnswer.includes('교류')) profile.motives.push('social');

    const vibeAnswer = quizAnswers[2] || '';
    if (vibeAnswer.includes('퍼레이드')) profile.vibes.push('parade', 'spectacle');
    if (vibeAnswer.includes('음악과 댄스')) profile.vibes.push('party', 'music', 'edm');
    if (vibeAnswer.includes('조용하고 감성')) profile.vibes.push('chill', 'romantic', 'art');

    const activityAnswer = quizAnswers[3] || '';
    if (activityAnswer.includes('참여하는')) profile.activities.push('participatory');
    if (activityAnswer.includes('관람')) profile.activities.push('spectate');
    if (activityAnswer.includes('음식')) profile.activities.push('food');

    return profile;
}

/**
 * 예산 근접도 점수 계산 (0, 1, 2)
 * @param {string} userBudget - 'low', 'mid', 'high'
 * @param {string} festivalBudget - 'low', 'mid', 'high'
 * @returns {number}
 */
function budgetProximity(userBudget, festivalBudget) {
    const budgetMap = { low: 1, mid: 2, high: 3 };
    if (!budgetMap[userBudget] || !budgetMap[festivalBudget]) return 0;
    const diff = Math.abs(budgetMap[userBudget] - budgetMap[festivalBudget]);
    if (diff === 0) return 2; // Perfect match
    if (diff === 1) return 1; // Close match
    return 0; // Mismatch
}

/**
 * 시즌 매칭 점수 계산 (0 or 1)
 * @param {Array<string>} userSeasons - ['warm'] or ['cool'] or ['warm', 'cool']
 * @param {Array<string>} festivalSeasons - ['warm'] or ['cool']
 * @returns {number}
 */
function seasonMatch(userSeasons, festivalSeasons) {
    return userSeasons.some(season => festivalSeasons.includes(season)) ? 1 : 0;
}

/**
 * 사용자 프로필과 축제 프로필 간의 속성 매칭 점수 계산
 * @param {object} userProfile
 * @param {object} festivalProfile
 * @returns {number}
 */
function computeAttributeMatchScore(userProfile, festivalProfile) {
    let score = 0;

    // 예산 점수 (가중치 2)
    score += budgetProximity(userProfile.budget, festivalProfile.budget) * 2;

    // 시즌 점수 (가중치 1.5)
    score += seasonMatch(userProfile.seasons, festivalProfile.seasons) * 1.5;

    // 분위기, 활동, 동기 점수 (가중치 1)
    const attributes = ['vibes', 'activities', 'motives'];
    attributes.forEach(attr => {
        const userAttrs = userProfile[attr];
        const festivalAttrs = festivalProfile[attr];
        if (userAttrs && festivalAttrs) {
            const intersection = userAttrs.filter(value => festivalAttrs.includes(value));
            score += intersection.length;
        }
    });

    return score;
}

/**
 * 퀴즈 결과 표시
 */
function showResult() {
    const userProfile = buildUserProfile();
    const finalScores = {};
    for (const festivalId in festivalProfiles) {
        finalScores[festivalId] = computeAttributeMatchScore(userProfile, festivalProfiles[festivalId]);
    }
    const sortedFestivals = Object.entries(finalScores).sort((a, b) => b[1] - a[1]);
    const topFestivalId = sortedFestivals[0]?.[0];
    const resultInfo = topFestivalId ? quizData.results[topFestivalId] : null;
    // 카드 렌더용으로 실제 데이터가 있는 축제를 우선 선택 (추천 순위대로)
    let topCardFestivalId = null;
    for (const [fid] of sortedFestivals) {
        if (festivalsData[fid]) { topCardFestivalId = fid; break; }
    }
    const topFestivalData = topCardFestivalId ? festivalsData[topCardFestivalId] : null;
    const isAlternateCard = topFestivalData && topFestivalId && topCardFestivalId !== topFestivalId;

    const resultContainer = document.getElementById('quizResult');
    if (!resultContainer) return;
    const summaryHtml = resultInfo ? `
        <div class="result-summary text-center">
            <h3>${resultInfo.icon} 당신에게 추천하는 축제는...</h3>
            <h2 class="display-4 my-3">${resultInfo.name}!</h2>
            <p class="lead">"${resultInfo.reason}"</p>
            <p>${resultInfo.description}</p>
            <ul class="list-inline">
                ${resultInfo.features.map(f => `<li class="list-inline-item"><span class="badge bg-primary">${f}</span></li>`).join('')}
            </ul>
        </div>` : '<div class="alert alert-warning text-center">추천 결과를 생성하지 못했습니다.</div>';

    const cardSection = topFestivalData ? `
        <hr class="my-4">
        <h4 class="text-center mb-1">추천 여행 상품</h4>
        ${isAlternateCard ? '<p class="text-center text-muted small mb-3">가장 높은 점수의 축제 카드 데이터가 없어, 유사도가 높은 대체 카드를 표시합니다.</p>' : ''}
        <div class="result-card-container">
             ${createFestivalCard(topFestivalData)}
        </div>` : `
        <hr class="my-4">
        <div class="alert alert-info text-center">해당 추천 축제의 상세 카드 데이터가 아직 준비되지 않았어요. 상단 요약을 참고해주세요.</div>`;

    resultContainer.innerHTML = `${summaryHtml}${cardSection}
        <div class="text-center mt-4">
            <button id="quizRestartBtn" class="btn btn-outline-secondary btn-sm"><i class="fas fa-redo"></i> 다시 하기</button>
        </div>`;

    // 다시 하기 버튼 핸들러
    const restartBtn = document.getElementById('quizRestartBtn');
    if (restartBtn) restartBtn.addEventListener('click', restartQuiz);

    const questions = document.getElementById('quizQuestions');
    if (questions) questions.style.display = 'none';
    resultContainer.style.display = 'block';
}


// ===== 외부에 노출할 퀴즈 제어 함수 =====

/**
 * 퀴즈 시작
 */
export function startQuiz() {
    currentQuestionIndex = 0;
    quizAnswers = {};
    const intro = document.getElementById('quizIntro');
    const questions = document.getElementById('quizQuestions');
    const result = document.getElementById('quizResult');
    if (intro) intro.style.display = 'none';
    if (result) result.style.display = 'none';
    if (questions) questions.style.display = 'block';
    showQuestion(currentQuestionIndex);
}

/**
 * 퀴즈 다시 시작
 */
export function restartQuiz() {
    const intro = document.getElementById('quizIntro');
    const questions = document.getElementById('quizQuestions');
    const result = document.getElementById('quizResult');
    if (result) result.style.display = 'none';
    if (intro) intro.style.display = 'block';
    if (questions) questions.style.display = 'none';
}
