# Einbürgerungstest - German Citizenship Test Preparation App

An interactive, mobile-first, installable web app for the German **Einbürgerungstest** / **Leben in Deutschland Test**, covering all 460 official BAMF questions (300 general + 10 questions for each of the 16 federal states) with English translations, contextual memory tips, image-based questions, and a full exam simulation mode.

![Question Pool](https://img.shields.io/badge/Questions-460-blue) ![Source](https://img.shields.io/badge/Source-BAMF%2007.05.2025-orange) ![PWA](https://img.shields.io/badge/PWA-Installable-green)

## ✨ Features

### 📚 Complete BAMF Catalog
- **All 300 general questions** in the official order
- **160 state-specific questions** (10 per Bundesland)
- All **42 image-based questions** with embedded coats of arms, maps and historical photos
- English translations of every question and every answer option
- Contextual **background notes** for every question — the "why" behind the answer
- Keyword highlighting with hover translations for hundreds of important German terms

### 🎯 Two Learning Modes
- **Training Mode** — study at your own pace with instant feedback, filters by category / unstudied / previously incorrect / bookmarks, and a random-jump shuffle button
- **Exam Mode** — authentic 33-question simulation (30 general + 3 state-specific), 60-minute countdown timer with color warnings, a navigable question grid, and a passing-threshold result screen (17/33 to pass)
- **Review Mode** — after each exam, walk through every question and see what you got right or wrong

### ⭐ Quality of Life
- **Bookmarks** — star tricky questions and revisit them as a focused study set
- **Category filter** — drill into Politics & Democracy, History, Society & Law, Culture & Symbols, Europe & International, Geography & Structure, or state-specific
- **Progress tracking** — questions studied, unique correct answers, success rate, bookmark count — all persisted in `localStorage`
- **Dark mode toggle** with system-respecting transitions
- **Keyboard shortcuts** — `←` `→` to navigate, `1`–`4` to pick an answer, `R` for random, `B` to bookmark
- **English-translation toggle** for when you want a pure-German drill
- **Print-friendly** styles for offline study sheets

### 📱 PWA — Installable as an App
- Service worker caches everything for **fully offline** use
- Add to Home Screen on Android & iOS for an app-like experience (no app store needed)
- Standalone display mode, theme color, splash screen
- Tap an icon on your phone home screen → opens directly into the test

### 🔒 Privacy
- 100 % client-side: no servers, no analytics, no accounts. Progress lives in your browser only.

## 🚀 Getting Started

### Run locally
```bash
# Just open index.html in any modern browser, or:
python3 -m http.server 8000
# then visit http://localhost:8000
```

### Install on Android / iOS
1. Open the site in Chrome (Android) or Safari (iOS)
2. Tap the browser menu → "Add to Home screen" / "Install app"
3. Launch from your home screen like any native app

## 🧠 How the Real Test Works

| Item | Value |
|------|-------|
| Total question pool | 300 general + 10 × 16 states = 460 |
| Exam length | 33 multiple-choice questions |
| Time limit | 60 minutes |
| Passing score | 17 correct (≈ 51.5 %) |
| Cost | €25, taken at any authorized test center / VHS |

The official catalog is published by the **Bundesamt für Migration und Flüchtlinge (BAMF)**: [bamf.de](https://www.bamf.de). The PDF source bundled with this repo (`gesamtfragenkatalog-lebenindeutschland.pdf`, stand 07.05.2025) is the basis for the question database.

## 📁 Project Structure

```
Einbürgerungstest/
├── index.html         # App shell
├── styles.css         # Themed CSS (light + dark)
├── app.js             # Application logic
├── questions.js       # Complete BAMF catalog (460 questions)
├── manifest.json      # PWA manifest
├── sw.js              # Service worker (offline cache)
├── icons/             # App icons (SVG + 192 / 512 PNG)
├── images/            # 42 question images (coats of arms, maps, …)
├── gesamtfragenkatalog-lebenindeutschland.pdf   # Official BAMF source
└── README.md
```

## 🛠 Question Format

```javascript
{
    id: 1,
    question: "In Deutschland dürfen Menschen offen etwas gegen die <span class='keyword' title='government'>Regierung</span> sagen, weil ...",
    translation: "In Germany, people are allowed to openly say something against the government because...",
    context: "Germany is a democratic constitutional state in which freedom of opinion (Article 5 GG) is protected …",
    keywords: { "Regierung": "government", "Meinungsfreiheit": "freedom of opinion", … },
    answers: [
        { text: "hier Religionsfreiheit gilt.",  translation: "freedom of religion applies here.",  correct: false },
        { text: "die Menschen Steuern zahlen.",  translation: "people pay taxes.",                  correct: false },
        { text: "die Menschen das Wahlrecht haben.", translation: "people have the right to vote.", correct: false },
        { text: "hier Meinungsfreiheit gilt.",  translation: "freedom of expression applies here.", correct: true  }
    ],
    category: "Politics & Democracy",
    image: "images/q21.png"   // optional, used for image-based questions
}
```

## 🌍 Categories

- Politics & Democracy
- History
- Society & Law
- Culture & Symbols
- Europe & International
- Geography & Structure
- State Specific

## 🧪 Tech

- 100 % vanilla JavaScript (no framework, no build step)
- ~800 KB total payload including all questions, translations and contexts
- Works in Chrome / Edge 90+, Firefox 88+, Safari 14+, all mobile browsers
- All progress stored in `localStorage`

## 📜 License & Sources

This is an **unofficial** educational tool. The question content is © **Bundesamt für Migration und Flüchtlinge (BAMF)** and is reproduced here strictly for study purposes. For the official test you must register at a Volkshochschule (VHS) or another authorized test center.

Translations and contextual notes are based on the publicly available "Leben in Deutschland" community datasets.

Sources:
- [BAMF Gesamtfragenkatalog (PDF)](https://www.bamf.de/SharedDocs/Anlagen/DE/Integration/Einbuergerung/gesamtfragenkatalog-lebenindeutschland.pdf)
- [BAMF Online Testcenter](https://oet.bamf.de/ords/oetut/f?p=514:1)

## 🎓 Disclaimer

This app is for practice and learning only. The actual exam wording, image order and answer order may differ. Always refer to official BAMF resources before sitting the test.

---

**Viel Erfolg! (Good luck!)** 🇩🇪
