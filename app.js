// Einbürgerungstest App - Main Application Logic

const STORAGE_KEY = 'einburgerungstest_progress';
const STATE_KEY = 'einburgerungstest_state';
const SETTINGS_KEY = 'einburgerungstest_settings';

class EinburgerungstestApp {
    constructor() {
        this.selectedState = null;
        this.currentMode = null;
        this.currentQuestionIndex = 0;
        this.examQuestions = [];
        this.userAnswers = [];
        this.examStartTime = null;
        this.examTimer = null;
        this.examTimeRemaining = 3600;
        this.trainingPool = null;
        this.trainingFilter = 'all';

        this.progress = this.loadProgress();
        this.settings = this.loadSettings();

        this.init();
    }

    init() {
        this.restoreState();
        this.attachEventListeners();
        this.applyTheme();
        this.updateProgressDisplay();
        this.updateGlobalCounts();

        if (this.selectedState) {
            this.showScreen('mode-selection');
        } else {
            this.showScreen('state-selection');
        }
    }

    // ===== EVENT LISTENERS =====
    attachEventListeners() {
        document.querySelectorAll('.state-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.selectState(e.currentTarget.dataset.state);
            });
        });

        document.getElementById('training-mode-btn').addEventListener('click', () => this.startTrainingMode());
        document.getElementById('exam-mode-btn').addEventListener('click', () => this.confirmExamStart());
        document.getElementById('bookmarks-btn').addEventListener('click', () => this.startBookmarksMode());

        document.getElementById('change-state-btn').addEventListener('click', () => this.showScreen('state-selection'));
        document.getElementById('reset-progress-btn').addEventListener('click', () => this.resetProgress());
        document.getElementById('theme-toggle-btn').addEventListener('click', () => this.toggleTheme());

        document.getElementById('back-to-menu').addEventListener('click', () => this.showScreen('mode-selection'));
        document.getElementById('prev-btn').addEventListener('click', () => this.navigateQuestion(-1));
        document.getElementById('next-btn').addEventListener('click', () => this.navigateQuestion(1));
        document.getElementById('random-btn').addEventListener('click', () => this.jumpToRandom());
        document.getElementById('bookmark-btn').addEventListener('click', () => this.toggleBookmark());
        document.getElementById('toggle-translation-btn').addEventListener('click', () => this.toggleTranslation());

        document.getElementById('category-filter').addEventListener('change', (e) => {
            this.trainingFilter = e.target.value;
            this.trainingPool = null;
            this.currentQuestionIndex = 0;
            this.displayTrainingQuestion();
        });

        document.getElementById('exit-exam-btn').addEventListener('click', () => this.exitExam());
        document.getElementById('exam-prev-btn').addEventListener('click', () => this.navigateExamQuestion(-1));
        document.getElementById('exam-next-btn').addEventListener('click', () => this.navigateExamQuestion(1));
        document.getElementById('submit-exam-btn').addEventListener('click', () => this.submitExam());

        document.getElementById('review-answers-btn').addEventListener('click', () => this.reviewAnswers());
        document.getElementById('retake-exam-btn').addEventListener('click', () => this.confirmExamStart());
        document.getElementById('back-to-menu-from-results').addEventListener('click', () => this.showScreen('mode-selection'));

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => this.handleKeyboard(e));

        // Persist state on visibility change
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) this.saveState();
        });
    }

    handleKeyboard(e) {
        if (e.target.matches('input, select, textarea')) return;

        if (this.currentMode === 'training' || this.currentMode === 'review') {
            if (e.key === 'ArrowLeft') this.navigateQuestion(-1);
            if (e.key === 'ArrowRight') this.navigateQuestion(1);
            if (e.key === 'r' || e.key === 'R') this.jumpToRandom();
            if (e.key === 'b' || e.key === 'B') this.toggleBookmark();
            if (['1','2','3','4'].includes(e.key)) {
                const idx = parseInt(e.key) - 1;
                const buttons = document.querySelectorAll('#answers-container .answer-btn');
                if (buttons[idx] && !buttons[idx].disabled) buttons[idx].click();
            }
        } else if (this.currentMode === 'exam') {
            if (e.key === 'ArrowLeft') this.navigateExamQuestion(-1);
            if (e.key === 'ArrowRight') this.navigateExamQuestion(1);
            if (['1','2','3','4'].includes(e.key)) {
                const idx = parseInt(e.key) - 1;
                this.handleExamAnswer(idx);
            }
        }
    }

    // ===== STATE PERSISTENCE =====
    saveState() {
        const state = {
            selectedState: this.selectedState,
            trainingFilter: this.trainingFilter,
        };
        localStorage.setItem(STATE_KEY, JSON.stringify(state));
    }

    restoreState() {
        try {
            const saved = localStorage.getItem(STATE_KEY);
            if (saved) {
                const state = JSON.parse(saved);
                this.selectedState = state.selectedState || null;
                this.trainingFilter = state.trainingFilter || 'all';
            }
        } catch (e) { /* ignore */ }
    }

    selectState(stateCode) {
        this.selectedState = stateCode;
        this.saveState();
        this.showScreen('mode-selection');
        this.updateStateBadge();
    }

    updateStateBadge() {
        const badge = document.getElementById('selected-state-badge');
        if (this.selectedState && questionsDatabase.states[this.selectedState]) {
            badge.textContent = questionsDatabase.states[this.selectedState].name;
            badge.style.display = 'inline-block';
        } else {
            badge.style.display = 'none';
        }
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        const target = document.getElementById(screenId);
        if (target) target.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });

        if (screenId === 'mode-selection') {
            this.updateProgressDisplay();
            this.updateStateBadge();
        }
    }

    // ===== SETTINGS =====
    loadSettings() {
        try {
            const saved = localStorage.getItem(SETTINGS_KEY);
            if (saved) return JSON.parse(saved);
        } catch (e) {}
        return { theme: 'light', showTranslation: true };
    }

    saveSettings() {
        localStorage.setItem(SETTINGS_KEY, JSON.stringify(this.settings));
    }

    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.settings.theme);
        const btn = document.getElementById('theme-toggle-btn');
        if (btn) btn.textContent = this.settings.theme === 'dark' ? '☀️' : '🌙';
    }

    toggleTheme() {
        this.settings.theme = this.settings.theme === 'dark' ? 'light' : 'dark';
        this.saveSettings();
        this.applyTheme();
    }

    toggleTranslation() {
        this.settings.showTranslation = !this.settings.showTranslation;
        this.saveSettings();
        document.body.classList.toggle('hide-translation', !this.settings.showTranslation);
        const btn = document.getElementById('toggle-translation-btn');
        if (btn) btn.textContent = this.settings.showTranslation ? '🇬🇧 Hide English' : '🇬🇧 Show English';
    }

    // ===== PROGRESS TRACKING =====
    loadProgress() {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) {
                const p = JSON.parse(saved);
                return {
                    studied: new Set(p.studied || []),
                    correct: p.correct || {},
                    incorrect: p.incorrect || {},
                    bookmarks: new Set(p.bookmarks || []),
                    lastAnswered: p.lastAnswered || {},
                };
            }
        } catch (e) {}
        return { studied: new Set(), correct: {}, incorrect: {}, bookmarks: new Set(), lastAnswered: {} };
    }

    saveProgress() {
        const toSave = {
            studied: Array.from(this.progress.studied),
            correct: this.progress.correct,
            incorrect: this.progress.incorrect,
            bookmarks: Array.from(this.progress.bookmarks),
            lastAnswered: this.progress.lastAnswered,
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
        this.updateProgressDisplay();
    }

    resetProgress() {
        if (confirm('Reset all progress? This cannot be undone.')) {
            this.progress = { studied: new Set(), correct: {}, incorrect: {}, bookmarks: new Set(), lastAnswered: {} };
            this.saveProgress();
        }
    }

    updateProgressDisplay() {
        const studied = this.progress.studied.size;
        const correctIds = Object.keys(this.progress.correct).filter(id => (this.progress.correct[id] || 0) > 0);
        const correctCount = correctIds.length;
        const totalAttempts = Object.values(this.progress.correct).reduce((a,b) => a + b, 0) +
                              Object.values(this.progress.incorrect).reduce((a,b) => a + b, 0);
        const totalCorrect = Object.values(this.progress.correct).reduce((a,b) => a + b, 0);
        const rate = totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0;

        document.getElementById('studied-count').textContent = `${studied} / ${this.getAvailableQuestions().length}`;
        document.getElementById('correct-count').textContent = correctCount;
        document.getElementById('success-rate').textContent = rate + '%';
        document.getElementById('bookmark-count').textContent = this.progress.bookmarks.size;
    }

    updateGlobalCounts() {
        const totalGen = questionsDatabase.general.length;
        const totalStates = Object.keys(questionsDatabase.states).length;
        const totalAll = totalGen + Object.values(questionsDatabase.states).reduce((a, s) => a + s.questions.length, 0);
        const el = document.getElementById('global-stats');
        if (el) {
            el.textContent = `${totalGen} general + ${totalStates} states × 10 = ${totalAll} questions total`;
        }
    }

    recordAnswer(questionId, isCorrect) {
        this.progress.studied.add(questionId);
        if (isCorrect) {
            this.progress.correct[questionId] = (this.progress.correct[questionId] || 0) + 1;
        } else {
            this.progress.incorrect[questionId] = (this.progress.incorrect[questionId] || 0) + 1;
        }
        this.progress.lastAnswered[questionId] = Date.now();
        this.saveProgress();
    }

    toggleBookmark() {
        const q = this.getCurrentQuestion();
        if (!q) return;
        const id = q.id;
        if (this.progress.bookmarks.has(id)) {
            this.progress.bookmarks.delete(id);
        } else {
            this.progress.bookmarks.add(id);
        }
        this.saveProgress();
        this.updateBookmarkButton();
    }

    updateBookmarkButton() {
        const btn = document.getElementById('bookmark-btn');
        if (!btn) return;
        const q = this.getCurrentQuestion();
        if (!q) return;
        const bookmarked = this.progress.bookmarks.has(q.id);
        btn.textContent = bookmarked ? '★ Bookmarked' : '☆ Bookmark';
        btn.classList.toggle('active', bookmarked);
    }

    // ===== QUESTION POOLS =====
    getAvailableQuestions() {
        const general = questionsDatabase.general;
        const state = this.selectedState ? (questionsDatabase.states[this.selectedState]?.questions || []) : [];
        return [...general, ...state];
    }

    populateCategoryFilter() {
        const select = document.getElementById('category-filter');
        if (!select) return;
        const categories = new Set();
        this.getAvailableQuestions().forEach(q => categories.add(q.category));
        const sorted = Array.from(categories).sort();
        const cur = select.value;
        select.innerHTML = `
            <option value="all">All Categories</option>
            <option value="unstudied">Unstudied Only</option>
            <option value="incorrect">Previously Incorrect</option>
            <option value="bookmarks">Bookmarks Only</option>
            <option disabled>──────────</option>
        `;
        sorted.forEach(c => {
            const opt = document.createElement('option');
            opt.value = c;
            opt.textContent = c;
            select.appendChild(opt);
        });
        select.value = (cur && [...select.options].some(o => o.value === cur)) ? cur : 'all';
    }

    getTrainingPool() {
        if (!this.trainingPool) {
            const all = this.getAvailableQuestions();
            if (this.trainingFilter === 'all') {
                this.trainingPool = all;
            } else if (this.trainingFilter === 'unstudied') {
                this.trainingPool = all.filter(q => !this.progress.studied.has(q.id));
            } else if (this.trainingFilter === 'incorrect') {
                this.trainingPool = all.filter(q => (this.progress.incorrect[q.id] || 0) > 0);
            } else if (this.trainingFilter === 'bookmarks') {
                this.trainingPool = all.filter(q => this.progress.bookmarks.has(q.id));
            } else {
                this.trainingPool = all.filter(q => q.category === this.trainingFilter);
            }
            if (this.trainingPool.length === 0) this.trainingPool = all;
        }
        return this.trainingPool;
    }

    getCurrentQuestion() {
        if (this.currentMode === 'training') return this.getTrainingPool()[this.currentQuestionIndex];
        if (this.currentMode === 'review' || this.currentMode === 'exam') return this.examQuestions[this.currentQuestionIndex];
        return null;
    }

    // ===== TRAINING MODE =====
    startTrainingMode() {
        this.currentMode = 'training';
        this.currentQuestionIndex = 0;
        this.trainingPool = null;
        this.populateCategoryFilter();
        document.getElementById('category-filter').value = this.trainingFilter;
        document.body.classList.toggle('hide-translation', !this.settings.showTranslation);
        const tBtn = document.getElementById('toggle-translation-btn');
        if (tBtn) tBtn.textContent = this.settings.showTranslation ? '🇬🇧 Hide English' : '🇬🇧 Show English';
        this.showScreen('training-screen');
        this.displayTrainingQuestion();
    }

    startBookmarksMode() {
        if (this.progress.bookmarks.size === 0) {
            alert('No bookmarks yet! Bookmark questions during training by pressing the ☆ button or "B" key.');
            return;
        }
        this.trainingFilter = 'bookmarks';
        document.getElementById('category-filter').value = 'bookmarks';
        this.startTrainingMode();
    }

    displayTrainingQuestion() {
        const pool = this.getTrainingPool();
        if (pool.length === 0) {
            document.getElementById('question-text').textContent = 'No questions match this filter.';
            return;
        }
        if (this.currentQuestionIndex >= pool.length) this.currentQuestionIndex = 0;
        if (this.currentQuestionIndex < 0) this.currentQuestionIndex = pool.length - 1;

        const q = pool[this.currentQuestionIndex];

        document.getElementById('question-number').textContent = `#${q.id}`;
        document.getElementById('question-category').textContent = q.category;
        document.getElementById('question-text').innerHTML = q.question;

        const transEl = document.getElementById('question-translation');
        transEl.textContent = q.translation || '';
        transEl.style.display = q.translation && q.translation !== q.question ? 'block' : 'none';

        // Image
        const imgEl = document.getElementById('question-image');
        if (q.image) {
            imgEl.src = q.image;
            imgEl.style.display = 'block';
            imgEl.alt = q.translation || q.question;
        } else {
            imgEl.style.display = 'none';
            imgEl.src = '';
        }

        // Progress
        const progress = ((this.currentQuestionIndex + 1) / pool.length) * 100;
        document.getElementById('progress-fill').style.width = progress + '%';
        document.getElementById('progress-text').textContent =
            `Question ${this.currentQuestionIndex + 1} / ${pool.length}`;

        // Answers
        const container = document.getElementById('answers-container');
        container.innerHTML = '';
        q.answers.forEach((answer, index) => {
            const btn = document.createElement('button');
            btn.className = 'answer-btn';
            btn.dataset.correct = answer.correct;
            btn.dataset.index = index;

            const main = document.createElement('div');
            main.className = 'answer-main';
            main.innerHTML = answer.text;

            const trans = document.createElement('div');
            trans.className = 'answer-translation';
            trans.textContent = answer.translation || '';

            btn.appendChild(main);
            if (answer.translation && answer.translation !== answer.text) btn.appendChild(trans);

            btn.addEventListener('click', () => this.handleTrainingAnswer(btn, q));
            container.appendChild(btn);
        });

        // Clear feedback
        const fb = document.getElementById('feedback');
        fb.innerHTML = '';
        fb.className = 'feedback';

        // Buttons
        document.getElementById('prev-btn').disabled = false;
        document.getElementById('next-btn').textContent = 'Next →';
        this.updateBookmarkButton();
    }

    handleTrainingAnswer(button, question) {
        if (button.disabled) return;
        const isCorrect = button.dataset.correct === 'true';

        document.querySelectorAll('#answers-container .answer-btn').forEach(b => {
            b.disabled = true;
            if (b.dataset.correct === 'true') b.classList.add('correct');
            else if (b === button) b.classList.add('incorrect');
        });

        if (this.currentMode !== 'review') {
            this.recordAnswer(question.id, isCorrect);
        }

        const fb = document.getElementById('feedback');
        fb.className = 'feedback ' + (isCorrect ? 'correct' : 'incorrect');

        let html = '';
        if (isCorrect) {
            html += '<div class="feedback-title">✓ Richtig! (Correct!)</div>';
        } else {
            html += '<div class="feedback-title">✗ Falsch (Incorrect)</div>';
            const correctAnswer = question.answers.find(a => a.correct);
            html += `<div class="feedback-correct"><strong>Correct answer:</strong> ${correctAnswer.text}`;
            if (correctAnswer.translation && correctAnswer.translation !== correctAnswer.text) {
                html += ` <span class="answer-translation-inline">(${correctAnswer.translation})</span>`;
            }
            html += '</div>';
        }

        html += this.getMemoryTip(question);
        fb.innerHTML = html;
    }

    getMemoryTip(question) {
        let tip = '<div class="memory-tip">';
        if (question.context) {
            tip += `<div class="context-block"><strong>💡 Background:</strong> ${question.context}</div>`;
        }
        const keywords = Object.entries(question.keywords || {}).slice(0, 5);
        if (keywords.length > 0) {
            tip += '<div class="keyword-block"><strong>📖 Key Terms:</strong><ul class="keyword-list">';
            keywords.forEach(([de, en]) => {
                tip += `<li><strong>${de}</strong> — ${en}</li>`;
            });
            tip += '</ul></div>';
        }
        tip += '</div>';
        return tip;
    }

    navigateQuestion(direction) {
        const pool = this.getTrainingPool();
        this.currentQuestionIndex += direction;
        if (this.currentQuestionIndex < 0) this.currentQuestionIndex = pool.length - 1;
        else if (this.currentQuestionIndex >= pool.length) this.currentQuestionIndex = 0;
        if (this.currentMode === 'review') this.displayReviewQuestion();
        else this.displayTrainingQuestion();
    }

    jumpToRandom() {
        const pool = this.getTrainingPool();
        if (pool.length <= 1) return;
        let newIdx;
        do {
            newIdx = Math.floor(Math.random() * pool.length);
        } while (newIdx === this.currentQuestionIndex);
        this.currentQuestionIndex = newIdx;
        this.displayTrainingQuestion();
    }

    // ===== EXAM MODE =====
    confirmExamStart() {
        if (confirm('Start exam mode? You will have 60 minutes to answer 33 questions. The timer will start immediately.\n\nPassing score: 17 of 33 correct.')) {
            this.startExamMode();
        }
    }

    startExamMode() {
        this.currentMode = 'exam';
        this.examQuestions = this.generateExamQuestions();
        this.userAnswers = new Array(this.examQuestions.length).fill(null);
        this.currentQuestionIndex = 0;
        this.examStartTime = Date.now();
        this.examTimeRemaining = 3600;

        this.showScreen('exam-screen');
        this.startExamTimer();
        this.displayExamQuestion();
        this.createQuestionGrid();
    }

    generateExamQuestions() {
        // Shuffle copy of general pool, pick 30
        const generalPool = [...questionsDatabase.general];
        this.shuffleInPlace(generalPool);
        const selectedGeneral = generalPool.slice(0, 30);

        // Shuffle state pool, pick 3
        const statePool = this.selectedState ?
            [...(questionsDatabase.states[this.selectedState]?.questions || [])] : [];
        this.shuffleInPlace(statePool);
        const selectedState = statePool.slice(0, 3);

        const exam = [...selectedGeneral, ...selectedState];
        // Each question keeps its answer order (real exam doesn't shuffle answers within questions)
        return exam;
    }

    shuffleInPlace(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    startExamTimer() {
        if (this.examTimer) clearInterval(this.examTimer);
        this.examTimer = setInterval(() => {
            this.examTimeRemaining--;
            this.updateTimerDisplay();
            if (this.examTimeRemaining <= 0) {
                clearInterval(this.examTimer);
                alert('⏰ Time is up! Your exam will be submitted automatically.');
                this.submitExam();
            }
        }, 1000);
    }

    updateTimerDisplay() {
        const m = Math.floor(this.examTimeRemaining / 60);
        const s = this.examTimeRemaining % 60;
        const display = document.getElementById('timer-display');
        display.textContent = `${m}:${s.toString().padStart(2, '0')}`;
        display.classList.remove('warn', 'danger');
        if (this.examTimeRemaining < 300) display.classList.add('danger');
        else if (this.examTimeRemaining < 600) display.classList.add('warn');
    }

    displayExamQuestion() {
        const q = this.examQuestions[this.currentQuestionIndex];

        document.getElementById('exam-question-number').textContent =
            `Question ${this.currentQuestionIndex + 1} / ${this.examQuestions.length}`;

        // Strip keyword spans for authentic exam (BAMF actual test has no highlights)
        const cleanText = this.stripSpans(q.question);
        document.getElementById('exam-question-text').textContent = cleanText;

        // Image
        const imgEl = document.getElementById('exam-question-image');
        if (q.image) {
            imgEl.src = q.image;
            imgEl.style.display = 'block';
        } else {
            imgEl.style.display = 'none';
            imgEl.src = '';
        }

        const container = document.getElementById('exam-answers-container');
        container.innerHTML = '';
        q.answers.forEach((answer, index) => {
            const btn = document.createElement('button');
            btn.className = 'answer-btn';
            btn.textContent = this.stripSpans(answer.text);
            btn.dataset.index = index;
            if (this.userAnswers[this.currentQuestionIndex] === index) btn.classList.add('selected');
            btn.addEventListener('click', () => this.handleExamAnswer(index));
            container.appendChild(btn);
        });

        this.updateExamUI();
    }

    stripSpans(html) {
        return html.replace(/<span[^>]*>([^<]*)<\/span>/g, '$1').replace(/<[^>]+>/g, '');
    }

    updateExamUI() {
        const answered = this.userAnswers.filter(a => a !== null).length;
        document.getElementById('answered-count').textContent =
            `Answered: ${answered} / ${this.examQuestions.length}`;
        document.getElementById('exam-prev-btn').disabled = this.currentQuestionIndex === 0;
        document.getElementById('exam-next-btn').textContent =
            this.currentQuestionIndex === this.examQuestions.length - 1 ? 'Last →' : 'Next →';
        document.getElementById('exam-next-btn').disabled = this.currentQuestionIndex === this.examQuestions.length - 1;
        document.getElementById('submit-exam-btn').style.display = answered > 0 ? 'block' : 'none';
        this.updateQuestionGrid();
    }

    handleExamAnswer(answerIndex) {
        this.userAnswers[this.currentQuestionIndex] = answerIndex;
        document.querySelectorAll('#exam-answers-container .answer-btn').forEach((btn, idx) => {
            btn.classList.toggle('selected', idx === answerIndex);
        });
        this.updateExamUI();
    }

    navigateExamQuestion(direction) {
        const newIdx = this.currentQuestionIndex + direction;
        if (newIdx < 0 || newIdx >= this.examQuestions.length) return;
        this.currentQuestionIndex = newIdx;
        this.displayExamQuestion();
    }

    createQuestionGrid() {
        const grid = document.getElementById('question-grid');
        grid.innerHTML = '<h4>Question Overview</h4><div class="grid-items"></div>';
        const itemsContainer = grid.querySelector('.grid-items');
        for (let i = 0; i < this.examQuestions.length; i++) {
            const item = document.createElement('button');
            item.className = 'grid-item';
            item.textContent = i + 1;
            item.dataset.index = i;
            if (this.userAnswers[i] !== null) item.classList.add('answered');
            if (i === this.currentQuestionIndex) item.classList.add('current');
            item.addEventListener('click', () => {
                this.currentQuestionIndex = i;
                this.displayExamQuestion();
            });
            itemsContainer.appendChild(item);
        }
    }

    updateQuestionGrid() {
        document.querySelectorAll('.grid-item').forEach((item, idx) => {
            item.classList.toggle('answered', this.userAnswers[idx] !== null);
            item.classList.toggle('current', idx === this.currentQuestionIndex);
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
        const unanswered = this.userAnswers.filter(a => a === null).length;
        if (unanswered > 0 && this.examTimeRemaining > 0) {
            if (!confirm(`You have ${unanswered} unanswered question(s). Submit anyway?`)) {
                this.startExamTimer();
                return;
            }
        }

        let correct = 0;
        this.examQuestions.forEach((q, i) => {
            const ans = this.userAnswers[i];
            if (ans !== null && q.answers[ans].correct) {
                correct++;
                this.recordAnswer(q.id, true);
            } else if (ans !== null) {
                this.recordAnswer(q.id, false);
            }
        });

        const timeTaken = 3600 - this.examTimeRemaining;
        const passed = correct >= 17;
        this.showResults(correct, passed, timeTaken);
    }

    showResults(correct, passed, timeTaken) {
        this.showScreen('results-screen');
        const total = this.examQuestions.length;
        const icon = document.getElementById('result-icon');
        const title = document.getElementById('result-title');
        const msg = document.getElementById('result-message');

        if (passed) {
            icon.textContent = '🎉';
            icon.className = 'result-icon success';
            title.textContent = 'Herzlichen Glückwunsch! (Congratulations!)';
            msg.textContent = 'You passed! Well prepared for the official Einbürgerungstest.';
        } else {
            icon.textContent = '📚';
            icon.className = 'result-icon fail';
            title.textContent = 'Nicht bestanden (Not Passed)';
            msg.textContent = `Need at least 17 correct to pass. Keep studying!`;
        }

        document.getElementById('score-display').textContent = `${correct} / ${total}`;
        document.getElementById('percentage-display').textContent = `${Math.round((correct / total) * 100)}%`;
        const m = Math.floor(timeTaken / 60);
        const s = timeTaken % 60;
        document.getElementById('time-taken-display').textContent = `${m}:${s.toString().padStart(2, '0')}`;
    }

    reviewAnswers() {
        this.currentMode = 'review';
        this.currentQuestionIndex = 0;
        this.showScreen('training-screen');
        this.displayReviewQuestion();
    }

    displayReviewQuestion() {
        const q = this.examQuestions[this.currentQuestionIndex];
        const userIdx = this.userAnswers[this.currentQuestionIndex];

        document.getElementById('question-number').textContent = `#${q.id} (Review)`;
        document.getElementById('question-category').textContent = q.category;
        document.getElementById('question-text').innerHTML = q.question;
        document.getElementById('question-translation').textContent = q.translation || '';
        document.getElementById('question-translation').style.display = q.translation ? 'block' : 'none';

        const imgEl = document.getElementById('question-image');
        if (q.image) {
            imgEl.src = q.image;
            imgEl.style.display = 'block';
        } else {
            imgEl.style.display = 'none';
        }

        const progress = ((this.currentQuestionIndex + 1) / this.examQuestions.length) * 100;
        document.getElementById('progress-fill').style.width = progress + '%';
        document.getElementById('progress-text').textContent =
            `Review ${this.currentQuestionIndex + 1} / ${this.examQuestions.length}`;

        const container = document.getElementById('answers-container');
        container.innerHTML = '';
        q.answers.forEach((a, idx) => {
            const btn = document.createElement('button');
            btn.className = 'answer-btn';
            btn.disabled = true;

            const main = document.createElement('div');
            main.className = 'answer-main';
            main.innerHTML = a.text;
            const trans = document.createElement('div');
            trans.className = 'answer-translation';
            trans.textContent = a.translation || '';

            btn.appendChild(main);
            if (a.translation && a.translation !== a.text) btn.appendChild(trans);
            if (a.correct) btn.classList.add('correct');
            if (userIdx === idx && !a.correct) btn.classList.add('incorrect');
            container.appendChild(btn);
        });

        const fb = document.getElementById('feedback');
        const wasCorrect = userIdx !== null && q.answers[userIdx].correct;
        fb.className = 'feedback ' + (wasCorrect ? 'correct' : 'incorrect');
        let html = '';
        if (userIdx === null) html = '<div class="feedback-title">⊘ Not Answered</div>';
        else if (wasCorrect) html = '<div class="feedback-title">✓ You answered correctly!</div>';
        else html = '<div class="feedback-title">✗ You answered incorrectly</div>';
        html += this.getMemoryTip(q);
        fb.innerHTML = html;

        document.getElementById('prev-btn').disabled = this.currentQuestionIndex === 0;
        document.getElementById('next-btn').disabled = this.currentQuestionIndex === this.examQuestions.length - 1;
        this.updateBookmarkButton();
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    window.app = new EinburgerungstestApp();
});

// Register service worker for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').catch(err => console.log('SW registration failed:', err));
    });
}
