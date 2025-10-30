# Einbürgerungstest - German Citizenship Test Preparation App

An interactive, mobile-friendly web application to help prepare for the German Einbürgerungstest (citizenship test).

## Features

### 🎯 Core Features

- **State-Specific Questions**: Select your federal state to practice with state-specific questions
- **Two Learning Modes**:
  - **Training Mode**: Study at your own pace with instant feedback and English translations
  - **Exam Mode**: Simulate the real test (33 questions, 60 minutes, need 17 correct to pass)
- **Memory Techniques**: Keyword highlighting with English translations on hover
- **Progress Tracking**: Automatic tracking of studied questions, correct answers, and success rate
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices

### 📚 Learning Tools

- **Keyword Highlighting**: Important German terms are highlighted with hover translations
- **English Translations**: Every question includes an English translation
- **Memory Tips**: Feedback includes keyword definitions to aid memorization
- **Instant Feedback**: See correct/incorrect answers immediately in training mode
- **Review Mode**: After completing an exam, review all your answers

### ⏱️ Exam Mode Features

- **Authentic Experience**: 33 questions (30 general + 3 state-specific)
- **60-Minute Timer**: Visual countdown with color warnings
- **Question Navigator**: Visual grid showing answered/unanswered questions
- **Progress Tracking**: See how many questions you've answered
- **Detailed Results**: View your score, percentage, and time taken

## How the Real Test Works

### Test Structure
- **Total Question Pool**: 310 general questions + 10 per state (160 state-specific total)
- **Exam Format**: 33 multiple-choice questions
  - 30 general questions
  - 3 state-specific questions
- **Time Limit**: 60 minutes
- **Passing Score**: 17 out of 33 correct (≈51.5%)
- **Question Type**: Multiple choice with 4 options each

### Official Resources
- [BAMF Official Site](https://www.bamf.de)
- [Official Question Catalog (PDF)](https://www.bamf.de/SharedDocs/Anlagen/DE/Integration/Einbuergerung/gesamtfragenkatalog-lebenindeutschland.pdf)

## Getting Started

### Installation

1. Clone or download this repository
2. Open `index.html` in a web browser
3. No installation or build process required!

### Usage

1. **Select Your State**: Choose your federal state (Bundesland)
2. **Choose a Mode**:
   - **Training Mode**: Practice questions with immediate feedback
   - **Exam Mode**: Take a simulated test
3. **Study and Practice**: Use keyword highlights and translations to memorize
4. **Track Progress**: Your progress is automatically saved in your browser

## Project Structure

```
Einbürgerungstest/
├── index.html          # Main HTML structure
├── styles.css          # Responsive CSS styling
├── app.js             # Application logic
├── questions.js       # Question database
└── README.md          # Documentation
```

## Current Question Database

The app currently includes:
- **60 sample general questions** covering:
  - Politics & Democracy
  - History
  - Society & Law
  - Culture & Symbols
  - Europe & International
  - Geography & Structure
- **2 sample questions per state** (32 state-specific questions total)

**⚠️ To add all 310 official questions:** Use the included **Question Helper Tool** (see below)

### Question Format

Each question includes:
```javascript
{
    id: 1,
    question: "Question text with <span class='keyword' title='translation'>highlighted terms</span>",
    translation: "English translation of the question",
    keywords: {
        "GermanWord": "English translation",
        // ...
    },
    answers: [
        { text: "Answer text", correct: true/false },
        // ... (4 answers total)
    ],
    category: "Category name"
}
```

## 🛠️ Question Helper Tools

This repository includes tools to make adding questions easy:

### 1. Question Helper Tool (`question-helper.html`)
An interactive web form that:
- Guides you through entering each question
- Automatically formats the code
- Generates proper JSON structure
- Includes keyword highlighting
- Validates all fields

**To use:**
1. Open `question-helper.html` in your browser
2. Fill in the question details
3. Click "Generate Question Code"
4. Copy and paste into `questions.js`

### 2. Comprehensive Guide (`ADD_QUESTIONS_GUIDE.md`)
Complete documentation covering:
- Question categories and topics
- Official BAMF sources
- Step-by-step instructions
- Quality checklist
- Common keywords to highlight
- Tips and best practices

### 3. State Question Template (`state_questions_complete.js`)
Pre-formatted template showing the structure for all 10 questions per state

## Adding More Questions

To add the remaining questions from the official BAMF catalog:

### 1. Download Official Questions

Download the official question catalog from:
- [BAMF Official PDF](https://www.bamf.de/SharedDocs/Anlagen/DE/Integration/Einbuergerung/gesamtfragenkatalog-lebenindeutschland.pdf)

### 2. Add Questions to `questions.js`

#### For General Questions:
Add to the `questionsDatabase.general` array:

```javascript
{
    id: 61, // Next available ID
    question: "Your question text here",
    translation: "English translation",
    keywords: {
        "ImportantWord": "translation"
    },
    answers: [
        { text: "Answer 1", correct: false },
        { text: "Answer 2", correct: true },
        { text: "Answer 3", correct: false },
        { text: "Answer 4", correct: false }
    ],
    category: "Politics & Democracy" // or other category
}
```

#### For State-Specific Questions:
Add to the respective state object in `questionsDatabase.states`:

```javascript
"BW": {
    name: "Baden-Württemberg",
    questions: [
        {
            id: 301, // Unique ID
            question: "State question...",
            // ... same format as general questions
        }
    ]
}
```

### 3. Adding Keywords

To enhance memory learning, identify important German terms and add them:

1. Wrap terms in the question/answer text:
```html
<span class='keyword' title='English translation'>GermanWord</span>
```

2. Add to the keywords object:
```javascript
keywords: {
    "GermanWord": "English translation",
    "AnotherWord": "another translation"
}
```

### 4. Categories

Use these categories for organization:
- `Politics & Democracy`
- `History`
- `Society & Law`
- `Culture & Symbols`
- `Europe & International`
- `Geography & Structure`
- `State Specific` (for state questions)

## Technical Details

### Browser Compatibility
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

### Storage
- Uses `localStorage` for progress tracking
- No server required
- Data persists across sessions

### Performance
- Lightweight: ~50KB total (including sample questions)
- Fast loading: < 1 second
- No external dependencies

## Features in Detail

### Memory Techniques

The app employs several memory enhancement techniques:

1. **Spaced Repetition**: Track which questions you've answered correctly/incorrectly
2. **Visual Learning**: Color-coded feedback (green for correct, red for incorrect)
3. **Keyword Association**: Highlighted terms with instant translations
4. **Context Learning**: See questions in German with English support
5. **Active Recall**: Practice retrieving information from memory

### Progress Tracking

Your progress includes:
- **Questions Studied**: Total unique questions you've attempted
- **Correct Answers**: Number of questions answered correctly
- **Success Rate**: Percentage of correct answers
- **History**: Detailed history of correct/incorrect attempts per question

### Responsive Design

The app adapts to any screen size:
- **Desktop**: Full-featured layout with side-by-side comparisons
- **Tablet**: Optimized touch interface
- **Mobile**: Simplified layout, larger touch targets
- **All screens**: Easy-to-read fonts and proper spacing

## Customization

### Changing Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --success-color: #27ae60;
    --danger-color: #e74c3c;
    /* ... */
}
```

### Modifying Exam Parameters

In `app.js`, change:

```javascript
this.examTimeRemaining = 3600; // 60 minutes in seconds
// For 30 questions instead of 33:
for (let i = 0; i < 30; i++) { // Change from 30
```

### Adding Languages

To add more language translations:
1. Add translation field to questions: `translation_de: "..."`, `translation_fr: "..."`
2. Add language selector in HTML
3. Update `displayTrainingQuestion()` to use selected language

## Contributing

To contribute more questions or improvements:

1. Fork the repository
2. Add questions following the format above
3. Test thoroughly in both modes
4. Submit a pull request

### Question Quality Checklist

- [ ] Question text is accurate
- [ ] All 4 answers are provided
- [ ] Correct answer is marked properly
- [ ] English translation is accurate
- [ ] Important keywords are identified
- [ ] Keywords have translations
- [ ] Category is appropriate

## License

This is an unofficial educational tool. All official questions are property of the Bundesamt für Migration und Flüchtlinge (BAMF). Use this for study purposes only.

## Disclaimer

This is an **unofficial** practice tool. For the official test:
- Register at your local Volkshochschule (VHS) or authorized test center
- The official test costs 25 euros
- You need to bring valid identification
- Questions and format may vary from this practice tool

**Always refer to official BAMF resources for the most current information.**

## Support

For issues or questions:
- Check the [BAMF official website](https://www.bamf.de)
- Review the official question catalog
- Practice with multiple resources

## Acknowledgments

- Question content based on BAMF official catalog
- Designed for educational purposes
- Built with vanilla JavaScript for maximum compatibility

## Roadmap

Potential future enhancements:
- [ ] Add all 310 general questions
- [ ] Complete all state-specific questions
- [ ] Add German audio pronunciation
- [ ] Implement spaced repetition algorithm
- [ ] Add study statistics and charts
- [ ] Export/import progress data
- [ ] Printable study sheets
- [ ] Dark mode toggle
- [ ] Multiple language support

---

**Viel Erfolg! (Good luck!)** 🇩🇪
