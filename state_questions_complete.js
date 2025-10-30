// Complete State-Specific Questions for all 16 German Federal States
// Add these to the questionsDatabase.states object in questions.js

const completeStateQuestions = {
    "BW": { // Baden-Württemberg
        name: "Baden-Württemberg",
        questions: [
            {
                id: 301,
                question: "Welches Wappen gehört zu Baden-Württemberg?",
                translation: "Which coat of arms belongs to Baden-Württemberg?",
                keywords: { "Wappen": "coat of arms", "Löwen": "lions" },
                answers: [
                    { text: "drei Löwen", correct: true },
                    { text: "ein Adler", correct: false },
                    { text: "ein Bär", correct: false },
                    { text: "ein Pferd", correct: false }
                ],
                category: "State Specific"
            },
            {
                id: 302,
                question: "Welche ist die Landeshauptstadt von Baden-Württemberg?",
                translation: "What is the state capital of Baden-Württemberg?",
                keywords: { "Landeshauptstadt": "state capital" },
                answers: [
                    { text: "Freiburg", correct: false },
                    { text: "Heidelberg", correct: false },
                    { text: "Stuttgart", correct: true },
                    { text: "Karlsruhe", correct: false }
                ],
                category: "State Specific"
            },
            {
                id: 303,
                question: "Wie nennt man die Regierungschefin / den Regierungschef in Baden-Württemberg?",
                translation: "What is the title of the head of government in Baden-Württemberg?",
                keywords: { "Regierungschef": "head of government", "Ministerpräsident": "Minister President" },
                answers: [
                    { text: "Erste Ministerin / Erster Minister", correct: false },
                    { text: "Premierministerin / Premierminister", correct: false },
                    { text: "Bürgermeisterin / Bürgermeister", correct: false },
                    { text: "Ministerpräsidentin / Ministerpräsident", correct: true }
                ],
                category: "State Specific"
            },
            {
                id: 304,
                question: "Welche Ministerin / welcher Minister steht an der Spitze der Landesregierung in Baden-Württemberg?",
                translation: "Which minister leads the state government in Baden-Württemberg?",
                keywords: { "Landesregierung": "state government" },
                answers: [
                    { text: "die Justizministerin / der Justizminister", correct: false },
                    { text: "die Außenministerin / der Außenminister", correct: false },
                    { text: "die Finanzministerin / der Finanzminister", correct: false },
                    { text: "die Ministerpräsidentin / der Ministerpräsident", correct: true }
                ],
                category: "State Specific"
            },
            {
                id: 305,
                question: "Wie viele Einwohner hat Baden-Württemberg ungefähr?",
                translation: "Approximately how many inhabitants does Baden-Württemberg have?",
                keywords: { "Einwohner": "inhabitants", "Millionen": "millions" },
                answers: [
                    { text: "7 Millionen", correct: false },
                    { text: "9 Millionen", correct: false },
                    { text: "11 Millionen", correct: true },
                    { text: "13 Millionen", correct: false }
                ],
                category: "State Specific"
            },
            {
                id: 306,
                question: "Wie heißt das Landesparlament von Baden-Württemberg?",
                translation: "What is the name of the state parliament of Baden-Württemberg?",
                keywords: { "Landesparlament": "state parliament" },
                answers: [
                    { text: "Landtag", correct: true },
                    { text: "Bürgerschaft", correct: false },
                    { text: "Stadtrat", correct: false },
                    { text: "Bundesrat", correct: false }
                ],
                category: "State Specific"
            },
            {
                id: 307,
                question: "Wie viele Bundesländer grenzen an Baden-Württemberg?",
                translation: "How many federal states border Baden-Württemberg?",
                keywords: { "Bundesländer": "federal states", "grenzen": "border" },
                answers: [
                    { text: "2", correct: false },
                    { text: "3", correct: true },
                    { text: "4", correct: false },
                    { text: "5", correct: false }
                ],
                category: "State Specific"
            },
            {
                id: 308,
                question: "Welches Bundesland ist Baden-Württemberg nach der Einwohnerzahl?",
                translation: "What rank is Baden-Württemberg by population?",
                keywords: { "Einwohnerzahl": "population" },
                answers: [
                    { text: "das erste", correct: false },
                    { text: "das zweite", correct: false },
                    { text: "das dritte", correct: true },
                    { text: "das vierte", correct: false }
                ],
                category: "State Specific"
            },
            {
                id: 309,
                question: "Ab welchem Alter darf man in Baden-Württemberg bei Kommunalwahlen wählen?",
                translation: "From what age can you vote in local elections in Baden-Württemberg?",
                keywords: { "Kommunalwahlen": "local elections", "Alter": "age" },
                answers: [
                    { text: "14", correct: false },
                    { text: "16", correct: true },
                    { text: "18", correct: false },
                    { text: "20", correct: false }
                ],
                category: "State Specific"
            },
            {
                id: 310,
                question: "Welche Farben hat die Landesflagge von Baden-Württemberg?",
                translation: "What colors does the state flag of Baden-Württemberg have?",
                keywords: { "Landesflagge": "state flag", "Farben": "colors" },
                answers: [
                    { text: "blau-weiß-rot", correct: false },
                    { text: "schwarz-gold", correct: true },
                    { text: "grün-weiß-rot", correct: false },
                    { text: "schwarz-rot-gold", correct: false }
                ],
                category: "State Specific"
            }
        ]
    }
};

// Copy this structure for each state with 10 appropriate questions
