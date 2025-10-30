# How to Add Remaining Questions

## Quick Start

1. **Download Official Questions**
   - Visit: https://www.bamf.de/SharedDocs/Anlagen/DE/Integration/Einbuergerung/gesamtfragenkatalog-lebenindeutschland.pdf
   - Download the official PDF (version 9, dated May 7, 2025)

2. **Use the Question Helper Tool**
   - Open `question-helper.html` in your browser
   - Fill in the form for each question
   - Copy the generated code
   - Paste into `questions.js`

## Official Question Structure

The official test has:
- **300 general questions** (numbered 1-300)
- **10 state-specific questions per state** (numbered 301-310 per state)

## Question Categories

Questions cover these topics:

### General Questions (1-300):
1. **Politics & Democracy** (~100 questions)
   - Grundgesetz (Basic Law)
   - Political system
   - Elections and voting
   - Separation of powers
   - Political parties
   - Democracy principles

2. **History** (~50 questions)
   - Nazi period and Holocaust
   - Division and reunification
   - Important dates (1933, 1945, 1949, 1961, 1989, 1990)
   - Jewish life in Germany
   - Post-war development

3. **Society & Law** (~80 questions)
   - Basic rights
   - Equality and non-discrimination
   - Social insurance
   - Education system
   - Marriage and family
   - Religious freedom

4. **Culture & Symbols** (~30 questions)
   - National symbols
   - Public holidays
   - Traditions
   - National anthem

5. **Europe & International** (~25 questions)
   - European Union
   - Schengen Area
   - International relations

6. **Geography & Structure** (~15 questions)
   - Federal states
   - Capital cities
   - Political geography

### State Questions (301-310 per state):
Each state has 10 questions about:
- State capital
- State coat of arms
- State parliament
- Important historical facts
- Notable landmarks
- State government structure

## Adding Questions

### Option 1: Use the Helper Tool
1. Open `question-helper.html`
2. Fill in all fields
3. Copy generated code
4. Paste into `questions.js`

### Option 2: Manual Entry
Add to the `general` array in `questions.js`:

```javascript
{
    id: 61, // Next available ID
    question: "Your question here with <span class='keyword' title='translation'>highlighted terms</span>",
    translation: "English translation",
    keywords: {
        "GermanWord": "English meaning"
    },
    answers: [
        { text: "Answer 1", correct: false },
        { text: "Answer 2", correct: true },
        { text: "Answer 3", correct: false },
        { text: "Answer 4", correct: false }
    ],
    category: "Politics & Democracy"
}
```

## Tips for Quality Questions

1. **Accurate Translations**: Use reliable sources for English translations
2. **Highlight Keywords**: Mark important German terms for learning
3. **Correct Answers**: Double-check which answer is correct
4. **Categories**: Use consistent category names
5. **ID Numbers**: Keep IDs unique and sequential

## Verification

After adding questions, test:
1. Open `index.html` in browser
2. Select a state
3. Try both Training and Exam modes
4. Verify questions display correctly
5. Check that keywords show translations on hover

## Common Keywords to Highlight

- Grundgesetz (Basic Law)
- Verfassung (constitution)
- Regierung (government)
- Bundestag (Federal Parliament)
- Bundesrat (Federal Council)
- Bundeskanzler (Federal Chancellor)
- Bundespräsident (Federal President)
- Meinungsfreiheit (freedom of opinion)
- Versammlungsfreiheit (freedom of assembly)
- Religionsfreiheit (freedom of religion)
- Gleichberechtigung (equality)
- Rechtsstaat (constitutional state)
- Demokratie (democracy)
- Gewaltenteilung (separation of powers)

## Question Sources

### Official:
- BAMF PDF: https://www.bamf.de/SharedDocs/Anlagen/DE/Integration/Einbuergerung/gesamtfragenkatalog-lebenindeutschland.pdf
- BAMF Interactive Test: https://oet.bamf.de/ords/oetut/f?p=514:1:0

### Practice Sites (unofficial):
- https://www.einbuergerungstest-online.eu/
- https://germanpedia.com/citizenship-questions/
- https://www.simplegermany.com/german-citizenship-test-in-english/

**Note**: Always verify against the official BAMF catalog!

## Need Help?

1. Check existing questions for formatting examples
2. Use the helper tool for proper code generation
3. Test new questions in the app immediately
4. Keep a backup before making large changes

## Progress Tracking

Current status:
- General questions: ~60 of 300 (20%)
- State questions: ~32 of 160 (20%)
- **Total: ~92 of 460 questions (20%)**

Your goal: Add remaining 368 questions for complete coverage!
