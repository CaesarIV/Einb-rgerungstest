// Main Application Logic
class EinburgerungstestApp {
    constructor() {
        this.selectedState = null;
        this.currentMode = null;
        this.currentQuestionIndex = 0;
        this.examQuestions = [];
        this.userAnswers = [];
        this.examStartTime = null;
        this.examTimer = null;
        this.examTimeRemaining = 3600; // 60 minutes in seconds

        // Initialize progress tracking
        this.progress = this.loadProgress();

        this.init();
    }

    init() {
        this.attachEventListeners();
        this.showScreen('state-selection');
        this.updateProgressDisplay();
    }

    // ===== EVENT LISTENERS =====
    attachEventListeners() {
        // State selection
        document.querySelectorAll('.state-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.selectState(e.target.dataset.state);
            });
        });

        // Mode selection
        document.getElementById('training-mode-btn').addEventListener('click', () => {
            this.startTrainingMode();
        });

        document.getElementById('exam-mode-btn').addEventListener('click', () => {
            this.confirmExamStart();
        });

        document.getElementById('change-state-btn').addEventListener('click', () => {
            this.showScreen('state-selection');
        });

        // Training mode navigation
        document.getElementById('back-to-menu').addEventListener('click', () => {
            this.showScreen('mode-selection');
        });

        document.getElementById('prev-btn').addEventListener('click', () => {
            this.navigateQuestion(-1);
        });

        document.getElementById('next-btn').addEventListener('click', () => {
            this.navigateQuestion(1);
        });

        // Exam mode navigation
        document.getElementById('exit-exam-btn').addEventListener('click', () => {
            this.exitExam();
        });

        document.getElementById('exam-prev-btn').addEventListener('click', () => {
            this.navigateExamQuestion(-1);
        });

        document.getElementById('exam-next-btn').addEventListener('click', () => {
            this.navigateExamQuestion(1);
        });

        document.getElementById('submit-exam-btn').addEventListener('click', () => {
            this.submitExam();
        });

        // Results screen
        document.getElementById('review-answers-btn').addEventListener('click', () => {
            this.reviewAnswers();
        });

        document.getElementById('retake-exam-btn').addEventListener('click', () => {
            this.confirmExamStart();
        });

        document.getElementById('back-to-menu-from-results').addEventListener('click', () => {
            this.showScreen('mode-selection');
        });
    }

    // ===== STATE MANAGEMENT =====
    selectState(stateCode) {
        this.selectedState = stateCode;
        this.showScreen('mode-selection');
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }

    // ===== PROGRESS TRACKING =====
    loadProgress() {
        const saved = localStorage.getItem('einburgerungstest_progress');
        if (saved) {
            return JSON.parse(saved);
        }
        return {
            studied: new Set(),
            correct: {},
            incorrect: {}
        };
    }

    saveProgress() {
        const toSave = {
            studied: Array.from(this.progress.studied),
            correct: this.progress.correct,
            incorrect: this.progress.incorrect
        };
        localStorage.setItem('einburgerungstest_progress', JSON.stringify(toSave));
        this.updateProgressDisplay();
    }

    updateProgressDisplay() {
        const studied = this.progress.studied ? this.progress.studied.size || 0 : 0;
        const correct = Object.keys(this.progress.correct || {}).length;
        const rate = studied > 0 ? Math.round((correct / studied) * 100) : 0;

        document.getElementById('studied-count').textContent = studied;
        document.getElementById('correct-count').textContent = correct;
        document.getElementById('success-rate').textContent = rate + '%';
    }

    recordAnswer(questionId, isCorrect) {
        if (!this.progress.studied) this.progress.studied = new Set();
        if (!this.progress.correct) this.progress.correct = {};
        if (!this.progress.incorrect) this.progress.incorrect = {};

        this.progress.studied.add(questionId);

        if (isCorrect) {
            this.progress.correct[questionId] = (this.progress.correct[questionId] || 0) + 1;
        } else {
            this.progress.incorrect[questionId] = (this.progress.incorrect[questionId] || 0) + 1;
        }

        this.saveProgress();
    }

    // ===== TRAINING MODE =====
    startTrainingMode() {
        this.currentMode = 'training';
        this.currentQuestionIndex = 0;
        this.showScreen('training-screen');
        this.displayTrainingQuestion();
    }

    displayTrainingQuestion() {
        const allQuestions = this.getAllQuestions();
        if (this.currentQuestionIndex >= allQuestions.length) {
            this.currentQuestionIndex = 0;
        }

        const question = allQuestions[this.currentQuestionIndex];

        // Update question display
        document.getElementById('question-number').textContent = `Question ${this.currentQuestionIndex + 1}`;
        document.getElementById('question-category').textContent = question.category;
        document.getElementById('question-text').innerHTML = question.question;
        document.getElementById('question-translation').textContent = question.translation;

        // Update progress bar
        const progress = ((this.currentQuestionIndex + 1) / allQuestions.length) * 100;
        document.getElementById('progress-fill').style.width = progress + '%';
        document.getElementById('progress-text').textContent =
            `Question ${this.currentQuestionIndex + 1} / ${allQuestions.length}`;

        // Display answers
        const answersContainer = document.getElementById('answers-container');
        answersContainer.innerHTML = '';

        question.answers.forEach((answer, index) => {
            const answerBtn = document.createElement('button');
            answerBtn.className = 'answer-btn';
            answerBtn.innerHTML = answer.text;
            answerBtn.dataset.correct = answer.correct;
            answerBtn.dataset.index = index;

            answerBtn.addEventListener('click', (e) => {
                this.handleTrainingAnswer(e.target, question);
            });

            answersContainer.appendChild(answerBtn);
        });

        // Clear feedback
        document.getElementById('feedback').innerHTML = '';
        document.getElementById('feedback').className = 'feedback';

        // Update navigation buttons
        document.getElementById('prev-btn').disabled = this.currentQuestionIndex === 0;
        document.getElementById('next-btn').textContent =
            this.currentQuestionIndex === allQuestions.length - 1 ? 'Start Over' : 'Next →';
    }

    handleTrainingAnswer(button, question) {
        // Disable all answer buttons
        document.querySelectorAll('.answer-btn').forEach(btn => {
            btn.disabled = true;

            // Highlight correct and incorrect answers
            if (btn.dataset.correct === 'true') {
                btn.classList.add('correct');
            }
            if (btn === button && btn.dataset.correct === 'false') {
                btn.classList.add('incorrect');
            }
        });

        const isCorrect = button.dataset.correct === 'true';
        this.recordAnswer(question.id, isCorrect);

        // Show feedback with memory techniques
        const feedback = document.getElementById('feedback');
        feedback.className = 'feedback ' + (isCorrect ? 'correct' : 'incorrect');

        let feedbackHTML = '';
        if (isCorrect) {
            feedbackHTML = '<strong>✓ Richtig! (Correct!)</strong><br>';
            feedbackHTML += this.getMemoryTip(question);
        } else {
            feedbackHTML = '<strong>✗ Falsch (Incorrect)</strong><br>';
            feedbackHTML += `<p>The correct answer is: ${question.answers.find(a => a.correct).text}</p>`;
            feedbackHTML += this.getMemoryTip(question);
        }

        feedback.innerHTML = feedbackHTML;
    }

    getMemoryTip(question) {
        // Generate memory tips based on keywords
        let tip = '<div class="memory-tip"><strong>💡 Memory Tip:</strong><br>';

        const keywords = Object.entries(question.keywords).slice(0, 3);
        if (keywords.length > 0) {
            tip += '<ul class="keyword-list">';
            keywords.forEach(([german, english]) => {
                tip += `<li><strong>${german}</strong> = ${english}</li>`;
            });
            tip += '</ul>';
        }

        tip += '</div>';
        return tip;
    }

    navigateQuestion(direction) {
        const allQuestions = this.getAllQuestions();
        this.currentQuestionIndex += direction;

        if (this.currentQuestionIndex < 0) {
            this.currentQuestionIndex = 0;
        } else if (this.currentQuestionIndex >= allQuestions.length) {
            this.currentQuestionIndex = 0;
        }

        this.displayTrainingQuestion();
    }

    getAllQuestions() {
        const general = questionsDatabase.general;
        const stateQuestions = this.selectedState ?
            (questionsDatabase.states[this.selectedState]?.questions || []) : [];
        return [...general, ...stateQuestions];
    }

    // ===== EXAM MODE =====
    confirmExamStart() {
        if (confirm('Start exam mode? You will have 60 minutes to answer 33 questions. The timer will start immediately.')) {
            this.startExamMode();
        }
    }

    startExamMode() {
        this.currentMode = 'exam';
        this.examQuestions = this.generateExamQuestions();
        this.userAnswers = new Array(33).fill(null);
        this.currentQuestionIndex = 0;
        this.examStartTime = Date.now();
        this.examTimeRemaining = 3600; // 60 minutes

        this.showScreen('exam-screen');
        this.startExamTimer();
        this.displayExamQuestion();
        this.createQuestionGrid();
    }

    generateExamQuestions() {
        // Get 30 random general questions
        const generalPool = [...questionsDatabase.general];
        const selectedGeneral = [];
        for (let i = 0; i < 30; i++) {
            const randomIndex = Math.floor(Math.random() * generalPool.length);
            selectedGeneral.push(generalPool.splice(randomIndex, 1)[0]);
        }

        // Get 3 random state-specific questions
        const statePool = this.selectedState ?
            [...(questionsDatabase.states[this.selectedState]?.questions || [])] : [];
        const selectedState = [];
        for (let i = 0; i < Math.min(3, statePool.length); i++) {
            const randomIndex = Math.floor(Math.random() * statePool.length);
            selectedState.push(statePool.splice(randomIndex, 1)[0]);
        }

        return [...selectedGeneral, ...selectedState];
    }

    startExamTimer() {
        this.examTimer = setInterval(() => {
            this.examTimeRemaining--;
            this.updateTimerDisplay();

            if (this.examTimeRemaining <= 0) {
                clearInterval(this.examTimer);
                alert('Time is up! Your exam will be automatically submitted.');
                this.submitExam();
            }
        }, 1000);
    }

    updateTimerDisplay() {
        const minutes = Math.floor(this.examTimeRemaining / 60);
        const seconds = this.examTimeRemaining % 60;
        const display = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        document.getElementById('timer-display').textContent = display;

        // Change color when time is running out
        const timerElement = document.getElementById('timer-display');
        if (this.examTimeRemaining < 300) { // Less than 5 minutes
            timerElement.style.color = '#e74c3c';
        } else if (this.examTimeRemaining < 600) { // Less than 10 minutes
            timerElement.style.color = '#f39c12';
        }
    }

    displayExamQuestion() {
        const question = this.examQuestions[this.currentQuestionIndex];

        // Update question display
        document.getElementById('exam-question-number').textContent =
            `Question ${this.currentQuestionIndex + 1} / 33`;

        // In exam mode, remove keyword highlighting for authentic experience
        const questionText = question.question.replace(/<span class='keyword'[^>]*>([^<]*)<\/span>/g, '$1');
        document.getElementById('exam-question-text').textContent =
            this.stripHTML(questionText);

        // Display answers
        const answersContainer = document.getElementById('exam-answers-container');
        answersContainer.innerHTML = '';

        question.answers.forEach((answer, index) => {
            const answerBtn = document.createElement('button');
            answerBtn.className = 'answer-btn';
            const answerText = answer.text.replace(/<span class='keyword'[^>]*>([^<]*)<\/span>/g, '$1');
            answerBtn.textContent = this.stripHTML(answerText);
            answerBtn.dataset.index = index;

            // Highlight if already answered
            if (this.userAnswers[this.currentQuestionIndex] === index) {
                answerBtn.classList.add('selected');
            }

            answerBtn.addEventListener('click', (e) => {
                this.handleExamAnswer(index);
            });

            answersContainer.appendChild(answerBtn);
        });

        // Update answered count
        const answeredCount = this.userAnswers.filter(a => a !== null).length;
        document.getElementById('answered-count').textContent = `Answered: ${answeredCount} / 33`;

        // Update navigation buttons
        document.getElementById('exam-prev-btn').disabled = this.currentQuestionIndex === 0;
        document.getElementById('exam-next-btn').textContent =
            this.currentQuestionIndex === 32 ? 'Review Answers' : 'Next →';

        // Show submit button if all questions answered
        document.getElementById('submit-exam-btn').style.display =
            answeredCount === 33 ? 'block' : 'none';
    }

    stripHTML(html) {
        const tmp = document.createElement('div');
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || '';
    }

    handleExamAnswer(answerIndex) {
        this.userAnswers[this.currentQuestionIndex] = answerIndex;

        // Update button styling
        document.querySelectorAll('#exam-answers-container .answer-btn').forEach((btn, idx) => {
            btn.classList.remove('selected');
            if (idx === answerIndex) {
                btn.classList.add('selected');
            }
        });

        // Update answered count
        const answeredCount = this.userAnswers.filter(a => a !== null).length;
        document.getElementById('answered-count').textContent = `Answered: ${answeredCount} / 33`;

        // Update question grid
        this.updateQuestionGrid();

        // Show submit button if all questions answered
        document.getElementById('submit-exam-btn').style.display =
            answeredCount === 33 ? 'block' : 'none';
    }

    navigateExamQuestion(direction) {
        this.currentQuestionIndex += direction;

        if (this.currentQuestionIndex < 0) {
            this.currentQuestionIndex = 0;
        } else if (this.currentQuestionIndex > 32) {
            this.currentQuestionIndex = 32;
        }

        this.displayExamQuestion();
    }

    createQuestionGrid() {
        const grid = document.getElementById('question-grid');
        grid.innerHTML = '<h4>Question Overview</h4>';

        for (let i = 0; i < 33; i++) {
            const gridItem = document.createElement('button');
            gridItem.className = 'grid-item';
            gridItem.textContent = i + 1;
            gridItem.dataset.index = i;

            if (this.userAnswers[i] !== null) {
                gridItem.classList.add('answered');
            }
            if (i === this.currentQuestionIndex) {
                gridItem.classList.add('current');
            }

            gridItem.addEventListener('click', () => {
                this.currentQuestionIndex = i;
                this.displayExamQuestion();
                this.updateQuestionGrid();
            });

            grid.appendChild(gridItem);
        }
    }

    updateQuestionGrid() {
        document.querySelectorAll('.grid-item').forEach((item, index) => {
            item.classList.remove('current', 'answered');

            if (this.userAnswers[index] !== null) {
                item.classList.add('answered');
            }
            if (index === this.currentQuestionIndex) {
                item.classList.add('current');
            }
        });
    }

    exitExam() {
        if (confirm('Are you sure you want to exit the exam? Your progress will be lost.')) {
            clearInterval(this.examTimer);
            this.showScreen('mode-selection');
        }
    }

    submitExam() {
        clearInterval(this.examTimer);

        // Check if all questions are answered
        const unanswered = this.userAnswers.filter(a => a === null).length;
        if (unanswered > 0) {
            if (!confirm(`You have ${unanswered} unanswered question(s). Submit anyway?`)) {
                return;
            }
        }

        // Calculate score
        let correctCount = 0;
        this.examQuestions.forEach((question, index) => {
            const userAnswer = this.userAnswers[index];
            if (userAnswer !== null && question.answers[userAnswer].correct) {
                correctCount++;
            }
        });

        const timeTaken = 3600 - this.examTimeRemaining;
        const passed = correctCount >= 17;

        this.showResults(correctCount, passed, timeTaken);
    }

    showResults(correctCount, passed, timeTaken) {
        this.showScreen('results-screen');

        // Update result display
        const resultIcon = document.getElementById('result-icon');
        const resultTitle = document.getElementById('result-title');
        const resultMessage = document.getElementById('result-message');

        if (passed) {
            resultIcon.textContent = '🎉';
            resultTitle.textContent = 'Herzlichen Glückwunsch! (Congratulations!)';
            resultMessage.textContent = 'You passed the exam! You are well prepared for the official Einbürgerungstest.';
            resultIcon.className = 'result-icon success';
        } else {
            resultIcon.textContent = '📚';
            resultTitle.textContent = 'Nicht bestanden (Not Passed)';
            resultMessage.textContent = `You need at least 17 correct answers to pass. Keep studying and try again!`;
            resultIcon.className = 'result-icon fail';
        }

        // Update stats
        document.getElementById('score-display').textContent = `${correctCount} / 33`;
        document.getElementById('percentage-display').textContent =
            `${Math.round((correctCount / 33) * 100)}%`;

        const minutes = Math.floor(timeTaken / 60);
        const seconds = timeTaken % 60;
        document.getElementById('time-taken-display').textContent =
            `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }

    reviewAnswers() {
        // Switch to training mode to review answers
        alert('Review mode: You can now see which questions you got right or wrong.');
        this.currentMode = 'review';
        this.currentQuestionIndex = 0;
        this.showScreen('training-screen');
        this.displayReviewQuestion();
    }

    displayReviewQuestion() {
        const question = this.examQuestions[this.currentQuestionIndex];
        const userAnswerIndex = this.userAnswers[this.currentQuestionIndex];

        // Update question display
        document.getElementById('question-number').textContent = `Question ${this.currentQuestionIndex + 1} / 33`;
        document.getElementById('question-category').textContent = question.category;
        document.getElementById('question-text').innerHTML = question.question;
        document.getElementById('question-translation').textContent = question.translation;

        // Update progress bar
        const progress = ((this.currentQuestionIndex + 1) / 33) * 100;
        document.getElementById('progress-fill').style.width = progress + '%';
        document.getElementById('progress-text').textContent =
            `Question ${this.currentQuestionIndex + 1} / 33`;

        // Display answers with review highlights
        const answersContainer = document.getElementById('answers-container');
        answersContainer.innerHTML = '';

        question.answers.forEach((answer, index) => {
            const answerBtn = document.createElement('button');
            answerBtn.className = 'answer-btn';
            answerBtn.innerHTML = answer.text;
            answerBtn.disabled = true;

            // Highlight correct answer
            if (answer.correct) {
                answerBtn.classList.add('correct');
            }

            // Highlight user's answer if incorrect
            if (userAnswerIndex === index && !answer.correct) {
                answerBtn.classList.add('incorrect');
            }

            answersContainer.appendChild(answerBtn);
        });

        // Show feedback
        const feedback = document.getElementById('feedback');
        const wasCorrect = userAnswerIndex !== null && question.answers[userAnswerIndex].correct;

        feedback.className = 'feedback ' + (wasCorrect ? 'correct' : 'incorrect');

        let feedbackHTML = '';
        if (userAnswerIndex === null) {
            feedbackHTML = '<strong>⊘ Not Answered</strong><br>';
        } else if (wasCorrect) {
            feedbackHTML = '<strong>✓ You answered correctly!</strong><br>';
        } else {
            feedbackHTML = '<strong>✗ You answered incorrectly</strong><br>';
        }
        feedbackHTML += this.getMemoryTip(question);

        feedback.innerHTML = feedbackHTML;

        // Update navigation buttons
        document.getElementById('prev-btn').disabled = this.currentQuestionIndex === 0;
        document.getElementById('next-btn').disabled = this.currentQuestionIndex === 32;
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new EinburgerungstestApp();
});
