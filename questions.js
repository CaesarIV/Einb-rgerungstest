// Einbürgerungstest Questions Database
// This file contains sample questions. Add remaining questions from official BAMF catalog.

const questionsDatabase = {
    // General questions (300 total in official test)
    general: [
        {
            id: 1,
            question: "In Deutschland dürfen Menschen offen etwas gegen die <span class='keyword' title='government'>Regierung</span> sagen, weil ...",
            translation: "In Germany, people are allowed to openly say something against the government because...",
            keywords: {
                "Regierung": "government",
                "Meinungsfreiheit": "freedom of opinion"
            },
            answers: [
                { text: "hier <span class='keyword' title='freedom of opinion'>Meinungsfreiheit</span> gilt.", correct: true },
                { text: "die Menschen Steuern zahlen.", correct: false },
                { text: "die Menschen das <span class='keyword' title='right'>Recht</span> auf Arbeit haben.", correct: false },
                { text: "hier jeder seinen Beruf wählen kann.", correct: false }
            ],
            category: "Politics & Democracy"
        },
        {
            id: 2,
            question: "In Deutschland können Eltern bis zum 14. Lebensjahr ihres Kindes entscheiden, ob es in der Schule am ...",
            translation: "In Germany, parents can decide until their child's 14th birthday whether they participate in...",
            keywords: {
                "Religionsunterricht": "religious education",
                "Lebensjahr": "year of life"
            },
            answers: [
                { text: "Geschichtsunterricht teilnimmt.", correct: false },
                { text: "Politikunterricht teilnimmt.", correct: false },
                { text: "<span class='keyword' title='religious education'>Religionsunterricht</span> teilnimmt.", correct: true },
                { text: "Sprachunterricht teilnimmt.", correct: false }
            ],
            category: "Society & Law"
        },
        {
            id: 3,
            question: "Deutschland ist ein <span class='keyword' title='constitutional state'>Rechtsstaat</span>. Was ist damit gemeint?",
            translation: "Germany is a constitutional state (Rechtsstaat). What does this mean?",
            keywords: {
                "Rechtsstaat": "constitutional state",
                "Gesetze": "laws",
                "Bürger": "citizens"
            },
            answers: [
                { text: "Alle Einwohner / Einwohnerinnen und der Staat müssen sich an die <span class='keyword' title='laws'>Gesetze</span> halten.", correct: true },
                { text: "Der Staat hat das Recht, seine Bürger / Bürgerinnen zu überwachen.", correct: false },
                { text: "Es gibt nur rechte Parteien.", correct: false },
                { text: "Bürger / Bürgerinnen dürfen keine Rechte haben.", correct: false }
            ],
            category: "Politics & Democracy"
        },
        {
            id: 4,
            question: "Welches Recht gehört zu den <span class='keyword' title='basic rights'>Grundrechten</span> in Deutschland?",
            translation: "Which right belongs to the basic rights in Germany?",
            keywords: {
                "Grundrechten": "basic rights",
                "Meinungsfreiheit": "freedom of opinion",
                "Versammlungsfreiheit": "freedom of assembly"
            },
            answers: [
                { text: "Waffenbesitz", correct: false },
                { text: "<span class='keyword' title='freedom of opinion'>Meinungsfreiheit</span>", correct: true },
                { text: "Faustrecht", correct: false },
                { text: "Selbstjustiz", correct: false }
            ],
            category: "Politics & Democracy"
        },
        {
            id: 5,
            question: "Wahlen in Deutschland sind frei. Was bedeutet das?",
            translation: "Elections in Germany are free. What does this mean?",
            keywords: {
                "Wahlen": "elections",
                "frei": "free",
                "Zwang": "coercion"
            },
            answers: [
                { text: "Alle verurteilten Straftäter / Straftäterinnen dürfen nicht wählen.", correct: false },
                { text: "Wenn ich wählen gehen möchte, muss mein Arbeitgeber / meine Arbeitgeberin mir frei geben.", correct: false },
                { text: "Jede Person kann ohne <span class='keyword' title='coercion'>Zwang</span> entscheiden, ob sie wählen möchte und wen sie wählen möchte.", correct: true },
                { text: "Ich kann frei entscheiden, wo ich wählen gehen möchte.", correct: false }
            ],
            category: "Politics & Democracy"
        },
        {
            id: 6,
            question: "Das <span class='keyword' title='Basic Law'>Grundgesetz</span> ist die <span class='keyword' title='constitution'>Verfassung</span> der Bundesrepublik Deutschland. In welchem Jahr wurde es verabschiedet?",
            translation: "The Basic Law (Grundgesetz) is the constitution of the Federal Republic of Germany. In which year was it adopted?",
            keywords: {
                "Grundgesetz": "Basic Law",
                "Verfassung": "constitution"
            },
            answers: [
                { text: "1949", correct: true },
                { text: "1919", correct: false },
                { text: "1933", correct: false },
                { text: "1990", correct: false }
            ],
            category: "History"
        },
        {
            id: 7,
            question: "Wann war der Zweite Weltkrieg zu Ende?",
            translation: "When did World War II end?",
            keywords: {
                "Zweite Weltkrieg": "Second World War"
            },
            answers: [
                { text: "1933", correct: false },
                { text: "1945", correct: true },
                { text: "1949", correct: false },
                { text: "1961", correct: false }
            ],
            category: "History"
        },
        {
            id: 8,
            question: "Was bedeutet die <span class='keyword' title='separation of powers'>Gewaltenteilung</span> in Deutschland?",
            translation: "What does the separation of powers mean in Germany?",
            keywords: {
                "Gewaltenteilung": "separation of powers",
                "Legislative": "legislative",
                "Exekutive": "executive",
                "Judikative": "judiciary"
            },
            answers: [
                { text: "Die Polizei wird in drei Bereiche aufgeteilt.", correct: false },
                { text: "Die Gewalt ist auf <span class='keyword' title='legislative'>Legislative</span>, <span class='keyword' title='executive'>Exekutive</span> und <span class='keyword' title='judiciary'>Judikative</span> aufgeteilt.", correct: true },
                { text: "Die Bundeswehr wird in drei Bereiche aufgeteilt.", correct: false },
                { text: "Die Regierung wird in drei Bereiche aufgeteilt.", correct: false }
            ],
            category: "Politics & Democracy"
        },
        {
            id: 9,
            question: "Welches Organ gehört nicht zur Legislative in Deutschland?",
            translation: "Which body does not belong to the legislative branch in Germany?",
            keywords: {
                "Legislative": "legislative",
                "Bundestag": "Federal Parliament",
                "Bundesrat": "Federal Council",
                "Bundesregierung": "Federal Government"
            },
            answers: [
                { text: "<span class='keyword' title='Federal Parliament'>Bundestag</span>", correct: false },
                { text: "<span class='keyword' title='Federal Council'>Bundesrat</span>", correct: false },
                { text: "<span class='keyword' title='Federal Government'>Bundesregierung</span>", correct: true },
                { text: "Landesparlament", correct: false }
            ],
            category: "Politics & Democracy"
        },
        {
            id: 10,
            question: "Wer wählt in Deutschland den <span class='keyword' title='Federal Chancellor'>Bundeskanzler</span> / die Bundeskanzlerin?",
            translation: "Who elects the Federal Chancellor in Germany?",
            keywords: {
                "Bundeskanzler": "Federal Chancellor",
                "Bundestag": "Federal Parliament"
            },
            answers: [
                { text: "der Bundesrat", correct: false },
                { text: "die Bundesversammlung", correct: false },
                { text: "das Volk", correct: false },
                { text: "der <span class='keyword' title='Federal Parliament'>Bundestag</span>", correct: true }
            ],
            category: "Politics & Democracy"
        },
        {
            id: 11,
            question: "Wie viele <span class='keyword' title='federal states'>Bundesländer</span> hat die Bundesrepublik Deutschland?",
            translation: "How many federal states does the Federal Republic of Germany have?",
            keywords: {
                "Bundesländer": "federal states"
            },
            answers: [
                { text: "14", correct: false },
                { text: "15", correct: false },
                { text: "16", correct: true },
                { text: "17", correct: false }
            ],
            category: "Geography & Structure"
        },
        {
            id: 12,
            question: "Was ist die <span class='keyword' title='capital'>Hauptstadt</span> von Deutschland?",
            translation: "What is the capital of Germany?",
            keywords: {
                "Hauptstadt": "capital"
            },
            answers: [
                { text: "Bonn", correct: false },
                { text: "Berlin", correct: true },
                { text: "Hamburg", correct: false },
                { text: "München", correct: false }
            ],
            category: "Geography & Structure"
        },
        {
            id: 13,
            question: "Wer wird meistens zur <span class='keyword' title='Federal President'>Bundespräsidentin</span> / zum Bundespräsidenten in Deutschland gewählt?",
            translation: "Who is usually elected as Federal President in Germany?",
            keywords: {
                "Bundespräsidentin": "Federal President",
                "Politiker": "politician"
            },
            answers: [
                { text: "ein ehemaliger <span class='keyword' title='politician'>Politiker</span> / eine ehemalige Politikerin", correct: true },
                { text: "ein Richter / eine Richterin", correct: false },
                { text: "ein Schauspieler / eine Schauspielerin", correct: false },
                { text: "ein Sportler / eine Sportlerin", correct: false }
            ],
            category: "Politics & Democracy"
        },
        {
            id: 14,
            question: "Die Bundesrepublik Deutschland ist ein demokratischer und sozialer ...",
            translation: "The Federal Republic of Germany is a democratic and social...",
            keywords: {
                "Bundesstaat": "federal state",
                "demokratischer": "democratic",
                "sozialer": "social"
            },
            answers: [
                { text: "Staatenverbund", correct: false },
                { text: "<span class='keyword' title='federal state'>Bundesstaat</span>", correct: true },
                { text: "Staatenbund", correct: false },
                { text: "Zentralstaat", correct: false }
            ],
            category: "Politics & Democracy"
        },
        {
            id: 15,
            question: "Was ist keine staatliche <span class='keyword' title='power/authority'>Gewalt</span> in Deutschland?",
            translation: "What is not a state power/authority in Germany?",
            keywords: {
                "Gewalt": "power/authority",
                "Legislative": "legislative",
                "Judikative": "judiciary",
                "Exekutive": "executive"
            },
            answers: [
                { text: "<span class='keyword' title='legislative'>Legislative</span>", correct: false },
                { text: "<span class='keyword' title='judiciary'>Judikative</span>", correct: false },
                { text: "<span class='keyword' title='executive'>Exekutive</span>", correct: false },
                { text: "Presse", correct: true }
            ],
            category: "Politics & Democracy"
        },
        {
            id: 16,
            question: "Womit finanziert der deutsche Staat die <span class='keyword' title='social insurance'>Sozialversicherung</span>?",
            translation: "How does the German state finance social insurance?",
            keywords: {
                "Sozialversicherung": "social insurance",
                "Steuern": "taxes",
                "Sozialabgaben": "social contributions"
            },
            answers: [
                { text: "Kirchensteuern", correct: false },
                { text: "<span class='keyword' title='social contributions'>Sozialabgaben</span>", correct: true },
                { text: "Spendengeldern", correct: false },
                { text: "Vereinsbeiträgen", correct: false }
            ],
            category: "Society & Law"
        },
        {
            id: 17,
            question: "Wie nennt man in Deutschland die <span class='keyword' title='union'>Vereinigung</span> von <span class='keyword' title='parties'>Abgeordneten</span> einer Partei im Parlament?",
            translation: "What is the term in Germany for the union of party representatives in parliament?",
            keywords: {
                "Vereinigung": "union",
                "Abgeordneten": "representatives/delegates",
                "Fraktion": "parliamentary group"
            },
            answers: [
                { text: "Verband", correct: false },
                { text: "Ältestenrat", correct: false },
                { text: "<span class='keyword' title='parliamentary group'>Fraktion</span>", correct: true },
                { text: "Opposition", correct: false }
            ],
            category: "Politics & Democracy"
        },
        {
            id: 18,
            question: "Was gilt für die <span class='keyword' title='equality'>Gleichberechtigung</span> in Deutschland?",
            translation: "What applies to equality in Germany?",
            keywords: {
                "Gleichberechtigung": "equality",
                "Männer": "men",
                "Frauen": "women"
            },
            answers: [
                { text: "Frauen und Männer sind vor dem Gesetz <span class='keyword' title='equal'>gleich</span>.", correct: true },
                { text: "Frauen und Männer sind erst mit 21 Jahren gleichberechtigt.", correct: false },
                { text: "Frauen und Männer haben unterschiedliche Rechte.", correct: false },
                { text: "Frauen und Männer sind erst nach der Eheschließung gleichberechtigt.", correct: false }
            ],
            category: "Society & Law"
        },
        {
            id: 19,
            question: "Wann sind Ehen zu schließen?",
            translation: "When can marriages be concluded?",
            keywords: {
                "Ehen": "marriages",
                "Standesamt": "registry office"
            },
            answers: [
                { text: "Nur in einem <span class='keyword' title='registry office'>Standesamt</span>", correct: true },
                { text: "Nur in einer Kirche", correct: false },
                { text: "Nur in einer Moschee", correct: false },
                { text: "Nur in einer Synagoge", correct: false }
            ],
            category: "Society & Law"
        },
        {
            id: 20,
            question: "Ab welchem Alter darf man in Deutschland bei der <span class='keyword' title='Federal Parliament election'>Bundestagswahl</span> wählen?",
            translation: "From what age can you vote in Federal Parliament elections in Germany?",
            keywords: {
                "Bundestagswahl": "Federal Parliament election",
                "Jahren": "years"
            },
            answers: [
                { text: "16", correct: false },
                { text: "18", correct: true },
                { text: "21", correct: false },
                { text: "23", correct: false }
            ],
            category: "Politics & Democracy"
        },
        {
            id: 21,
            question: "Wer bezahlt in Deutschland die <span class='keyword' title='social insurance'>Sozialversicherungen</span>?",
            translation: "Who pays for social insurance in Germany?",
            keywords: {
                "Sozialversicherungen": "social insurance",
                "Arbeitgeber": "employer",
                "Arbeitnehmer": "employee"
            },
            answers: [
                { text: "<span class='keyword' title='employer'>Arbeitgeber</span> und <span class='keyword' title='employee'>Arbeitnehmer</span>", correct: true },
                { text: "nur Arbeitnehmer", correct: false },
                { text: "alle Staatsangehörigen", correct: false },
                { text: "nur Arbeitgeber", correct: false }
            ],
            category: "Society & Law"
        },
        {
            id: 22,
            question: "Welche Aussage zur deutschen <span class='keyword' title='national anthem'>Nationalhymne</span> ist richtig?",
            translation: "Which statement about the German national anthem is correct?",
            keywords: {
                "Nationalhymne": "national anthem",
                "Strophe": "stanza/verse"
            },
            answers: [
                { text: "Die deutsche Nationalhymne ist das Lied \"Einigkeit und Recht und Freiheit\".", correct: false },
                { text: "Die erste <span class='keyword' title='stanza/verse'>Strophe</span> des \"Deutschlandliedes\" ist die deutsche Nationalhymne.", correct: false },
                { text: "Die dritte Strophe des \"Deutschlandliedes\" ist die deutsche Nationalhymne.", correct: true },
                { text: "Das \"Lied der Deutschen\" ist die deutsche Nationalhymne.", correct: false }
            ],
            category: "Culture & Symbols"
        },
        {
            id: 23,
            question: "Wer ist in Deutschland heute das Staatsoberhaupt?",
            translation: "Who is the head of state in Germany today?",
            keywords: {
                "Staatsoberhaupt": "head of state",
                "Bundespräsident": "Federal President"
            },
            answers: [
                { text: "die Bundeskanzlerin / der Bundeskanzler", correct: false },
                { text: "die <span class='keyword' title='Federal President'>Bundespräsidentin</span> / der Bundespräsident", correct: true },
                { text: "die Präsidentin / der Präsident des Bundesverfassungsgerichts", correct: false },
                { text: "die Präsidentin / der Präsident des Bundestages", correct: false }
            ],
            category: "Politics & Democracy"
        },
        {
            id: 24,
            question: "Die deutschen Gesetze verbieten ...",
            translation: "German laws prohibit...",
            keywords: {
                "Gesetze": "laws",
                "Meinungsfreiheit": "freedom of opinion",
                "Volksverhetzung": "incitement to hatred"
            },
            answers: [
                { text: "<span class='keyword' title='freedom of opinion'>Meinungsfreiheit</span> der Einwohner und Einwohnerinnen.", correct: false },
                { text: "Petitionen der Bürger und Bürgerinnen.", correct: false },
                { text: "<span class='keyword' title='incitement to hatred'>Volksverhetzung</span> der Einwohner und Einwohnerinnen.", correct: true },
                { text: "Versammlungsfreiheit der Einwohner und Einwohnerinnen.", correct: false }
            ],
            category: "Society & Law"
        },
        {
            id: 25,
            question: "Welches Recht gehört zu den Grundrechten, die nach der deutschen <span class='keyword' title='constitution'>Verfassung</span> garantiert werden?",
            translation: "Which right belongs to the basic rights guaranteed by the German constitution?",
            keywords: {
                "Verfassung": "constitution",
                "Grundrechten": "basic rights",
                "Versammlungsfreiheit": "freedom of assembly"
            },
            answers: [
                { text: "Recht auf Arbeit", correct: false },
                { text: "<span class='keyword' title='freedom of assembly'>Versammlungsfreiheit</span>", correct: true },
                { text: "Recht auf angemessenen Wohnraum", correct: false },
                { text: "Recht auf Zahlungen aus der Arbeitslosenversicherung", correct: false }
            ],
            category: "Politics & Democracy"
        },
        {
            id: 26,
            question: "Was steht nicht im Grundgesetz von Deutschland?",
            translation: "What is not in the Basic Law of Germany?",
            keywords: {
                "Grundgesetz": "Basic Law",
                "Menschenwürde": "human dignity"
            },
            answers: [
                { text: "Die <span class='keyword' title='human dignity'>Menschenwürde</span> ist unantastbar.", correct: false },
                { text: "Alle sollen gleich viel Geld haben.", correct: true },
                { text: "Jeder Mensch darf seine Meinung sagen.", correct: false },
                { text: "Alle sind vor dem Gesetz gleich.", correct: false }
            ],
            category: "Politics & Democracy"
        },
        {
            id: 27,
            question: "Welches ist das Wappen der Bundesrepublik Deutschland?",
            translation: "Which is the coat of arms of the Federal Republic of Germany?",
            keywords: {
                "Wappen": "coat of arms",
                "Bundesadler": "Federal Eagle"
            },
            answers: [
                { text: "Der <span class='keyword' title='Federal Eagle'>Bundesadler</span>", correct: true },
                { text: "Das Brandenburger Tor", correct: false },
                { text: "Der Bundestag", correct: false },
                { text: "Die Nationalfarben", correct: false }
            ],
            category: "Culture & Symbols"
        },
        {
            id: 28,
            question: "Was für eine Staatsform hat Deutschland?",
            translation: "What form of state does Germany have?",
            keywords: {
                "Staatsform": "form of state",
                "Republik": "republic",
                "Demokratie": "democracy"
            },
            answers: [
                { text: "Monarchie", correct: false },
                { text: "Diktatur", correct: false },
                { text: "<span class='keyword' title='republic'>Republik</span>", correct: true },
                { text: "Fürstentum", correct: false }
            ],
            category: "Politics & Democracy"
        },
        {
            id: 29,
            question: "Was ist Deutschland nicht?",
            translation: "What is Germany not?",
            keywords: {
                "Rechtsstaat": "constitutional state",
                "Sozialstaat": "social welfare state",
                "Demokratie": "democracy"
            },
            answers: [
                { text: "eine Demokratie", correct: false },
                { text: "ein Rechtsstaat", correct: false },
                { text: "ein Sozialstaat", correct: false },
                { text: "eine Monarchie", correct: true }
            ],
            category: "Politics & Democracy"
        },
        {
            id: 30,
            question: "Wer beschließt in Deutschland ein neues <span class='keyword' title='law'>Gesetz</span>?",
            translation: "Who passes a new law in Germany?",
            keywords: {
                "Gesetz": "law",
                "Parlament": "parliament"
            },
            answers: [
                { text: "die Regierung", correct: false },
                { text: "das <span class='keyword' title='parliament'>Parlament</span>", correct: true },
                { text: "die Gerichte", correct: false },
                { text: "die Polizei", correct: false }
            ],
            category: "Politics & Democracy"
        },
        {
            id: 31,
            question: "Wann wurde die Mauer in Berlin gebaut?",
            translation: "When was the Berlin Wall built?",
            keywords: {
                "Mauer": "wall",
                "Berlin": "Berlin"
            },
            answers: [
                { text: "1953", correct: false },
                { text: "1956", correct: false },
                { text: "1959", correct: false },
                { text: "1961", correct: true }
            ],
            category: "History"
        },
        {
            id: 32,
            question: "Wann fiel die Mauer in Berlin?",
            translation: "When did the Berlin Wall fall?",
            keywords: {
                "Mauer": "wall",
                "fiel": "fell"
            },
            answers: [
                { text: "1987", correct: false },
                { text: "1989", correct: true },
                { text: "1990", correct: false },
                { text: "1992", correct: false }
            ],
            category: "History"
        },
        {
            id: 33,
            question: "Wann wurde die <span class='keyword' title='Federal Republic'>Bundesrepublik</span> Deutschland gegründet?",
            translation: "When was the Federal Republic of Germany founded?",
            keywords: {
                "Bundesrepublik": "Federal Republic",
                "gegründet": "founded"
            },
            answers: [
                { text: "1939", correct: false },
                { text: "1945", correct: false },
                { text: "1949", correct: true },
                { text: "1951", correct: false }
            ],
            category: "History"
        },
        {
            id: 34,
            question: "Was bedeutet <span class='keyword' title='Rule of Law'>Rechtsstaat</span> in Deutschland?",
            translation: "What does 'Rule of Law' (Rechtsstaat) mean in Germany?",
            keywords: {
                "Rechtsstaat": "Rule of Law/constitutional state",
                "Gesetze": "laws"
            },
            answers: [
                { text: "Der Staat hat immer recht.", correct: false },
                { text: "Es gibt nur rechte Parteien.", correct: false },
                { text: "Die Bürger entscheiden über <span class='keyword' title='laws'>Gesetze</span>.", correct: false },
                { text: "Der Staat muss die Gesetze einhalten.", correct: true }
            ],
            category: "Politics & Democracy"
        },
        {
            id: 35,
            question: "Was ist die <span class='keyword' title='national day'>Nationalflagge</span> der Bundesrepublik Deutschland?",
            translation: "What is the national flag of the Federal Republic of Germany?",
            keywords: {
                "Nationalflagge": "national flag",
                "Schwarz": "black",
                "Rot": "red",
                "Gold": "gold"
            },
            answers: [
                { text: "Schwarz-Rot-Gold", correct: true },
                { text: "Rot-Weiß-Schwarz", correct: false },
                { text: "Schwarz-Rot-Grün", correct: false },
                { text: "Schwarz-Gelb-Rot", correct: false }
            ],
            category: "Culture & Symbols"
        },
        {
            id: 36,
            question: "Welches Tier ist das Wappentier der Bundesrepublik Deutschland?",
            translation: "Which animal is the heraldic animal of the Federal Republic of Germany?",
            keywords: {
                "Wappentier": "heraldic animal",
                "Adler": "eagle"
            },
            answers: [
                { text: "der Löwe", correct: false },
                { text: "der <span class='keyword' title='eagle'>Adler</span>", correct: true },
                { text: "der Bär", correct: false },
                { text: "der Hahn", correct: false }
            ],
            category: "Culture & Symbols"
        },
        {
            id: 37,
            question: "Deutschland ist Mitglied des <span class='keyword' title='border-free area'>Schengen-Raums</span>. Was bedeutet das?",
            translation: "Germany is a member of the Schengen Area. What does this mean?",
            keywords: {
                "Schengen-Raums": "Schengen Area",
                "Grenzen": "borders",
                "Grenzkontrollen": "border controls"
            },
            answers: [
                { text: "Deutsche können in viele Länder Europas ohne <span class='keyword' title='passport control'>Passkontrolle</span> reisen.", correct: true },
                { text: "Alle Menschen können ohne Personalausweis in Deutschland einreisen.", correct: false },
                { text: "Deutsche können ohne Passkontrolle in jedes Land reisen.", correct: false },
                { text: "Deutsche können in jedem Land mit dem Euro bezahlen.", correct: false }
            ],
            category: "Europe & International"
        },
        {
            id: 38,
            question: "Wie heißt die deutsche Verfassung?",
            translation: "What is the German constitution called?",
            keywords: {
                "Verfassung": "constitution",
                "Grundgesetz": "Basic Law"
            },
            answers: [
                { text: "Bundesverfassung", correct: false },
                { text: "Volksgesetz", correct: false },
                { text: "<span class='keyword' title='Basic Law'>Grundgesetz</span>", correct: true },
                { text: "Bundesgesetz", correct: false }
            ],
            category: "Politics & Democracy"
        },
        {
            id: 39,
            question: "Eine Partei im Deutschen Bundestag will die <span class='keyword' title='minimum voting age'>Pressefreiheit</span> abschaffen. Ist das möglich?",
            translation: "A party in the German Bundestag wants to abolish freedom of the press. Is this possible?",
            keywords: {
                "Pressefreiheit": "freedom of the press",
                "Grundgesetz": "Basic Law",
                "abschaffen": "abolish"
            },
            answers: [
                { text: "Ja, wenn mehr als die Hälfte der Abgeordneten dafür sind.", correct: false },
                { text: "Ja, aber dazu müssen zwei Drittel der Abgeordneten dafür sein.", correct: false },
                { text: "Nein, denn die Pressefreiheit ist ein <span class='keyword' title='basic right'>Grundrecht</span>. Sie kann nicht abgeschafft werden.", correct: true },
                { text: "Nein, denn nur der Bundesrat kann die Pressefreiheit abschaffen.", correct: false }
            ],
            category: "Politics & Democracy"
        },
        {
            id: 40,
            question: "Wenn eine Partei in Deutschland <span class='keyword' title='unconstitutional'>verfassungswidrig</span> ist, kann sie <span class='keyword' title='banned'>verboten</span> werden. Wer kann das verbieten?",
            translation: "If a party in Germany is unconstitutional, it can be banned. Who can ban it?",
            keywords: {
                "verfassungswidrig": "unconstitutional",
                "verboten": "banned",
                "Bundesverfassungsgericht": "Federal Constitutional Court"
            },
            answers: [
                { text: "die Bundesregierung", correct: false },
                { text: "das <span class='keyword' title='Federal Constitutional Court'>Bundesverfassungsgericht</span>", correct: true },
                { text: "der Bundestag", correct: false },
                { text: "die Bundesversammlung", correct: false }
            ],
            category: "Politics & Democracy"
        },
        {
            id: 41,
            question: "Wen kann man als <span class='keyword' title='citizen'>Bürger</span> / Bürgerin in Deutschland nicht direkt wählen?",
            translation: "Who can you as a citizen not directly elect in Germany?",
            keywords: {
                "Bürger": "citizen",
                "direkt wählen": "directly elect",
                "Bundeskanzler": "Federal Chancellor"
            },
            answers: [
                { text: "Abgeordnete des EU-Parlaments", correct: false },
                { text: "den <span class='keyword' title='Federal Chancellor'>Bundeskanzler</span> / die Bundeskanzlerin", correct: true },
                { text: "Landtagsabgeordnete", correct: false },
                { text: "Bundestagsabgeordnete", correct: false }
            ],
            category: "Politics & Democracy"
        },
        {
            id: 42,
            question: "In Deutschland gehören der <span class='keyword' title='Federal Parliament'>Bundestag</span> und der <span class='keyword' title='Federal Council'>Bundesrat</span> zur ...",
            translation: "In Germany, the Federal Parliament (Bundestag) and the Federal Council (Bundesrat) belong to the...",
            keywords: {
                "Bundestag": "Federal Parliament",
                "Bundesrat": "Federal Council",
                "Legislative": "legislative branch"
            },
            answers: [
                { text: "Exekutive.", correct: false },
                { text: "<span class='keyword' title='legislative branch'>Legislative</span>.", correct: true },
                { text: "Direktive.", correct: false },
                { text: "Judikative.", correct: false }
            ],
            category: "Politics & Democracy"
        },
        {
            id: 43,
            question: "In Deutschland dürfen Menschen offen etwas gegen die Regierung sagen, weil ...",
            translation: "In Germany, people are allowed to openly say something against the government because...",
            keywords: {
                "Meinungsfreiheit": "freedom of opinion",
                "Demokratie": "democracy"
            },
            answers: [
                { text: "hier Religionsfreiheit gilt.", correct: false },
                { text: "die Menschen Steuern zahlen.", correct: false },
                { text: "die Menschen das Wahlrecht haben.", correct: false },
                { text: "hier <span class='keyword' title='freedom of opinion'>Meinungsfreiheit</span> gilt.", correct: true }
            ],
            category: "Politics & Democracy"
        },
        {
            id: 44,
            question: "Womit finanziert der deutsche Staat die Sozialversicherung?",
            translation: "How does the German state finance social insurance?",
            keywords: {
                "Sozialversicherung": "social insurance",
                "Sozialabgaben": "social security contributions"
            },
            answers: [
                { text: "Kirchensteuern", correct: false },
                { text: "<span class='keyword' title='social security contributions'>Sozialabgaben</span>", correct: true },
                { text: "Spendengeldern", correct: false },
                { text: "Vereinsbeiträgen", correct: false }
            ],
            category: "Society & Law"
        },
        {
            id: 45,
            question: "Wie wird die Verfassung der Bundesrepublik Deutschland genannt?",
            translation: "What is the constitution of the Federal Republic of Germany called?",
            keywords: {
                "Verfassung": "constitution",
                "Grundgesetz": "Basic Law"
            },
            answers: [
                { text: "Volksgesetz", correct: false },
                { text: "Bundesgesetz", correct: false },
                { text: "Deutsches Gesetz", correct: false },
                { text: "<span class='keyword' title='Basic Law'>Grundgesetz</span>", correct: true }
            ],
            category: "Politics & Democracy"
        },
        {
            id: 46,
            question: "Welches Recht gehört zu den Grundrechten in Deutschland?",
            translation: "Which right belongs to the basic rights in Germany?",
            keywords: {
                "Grundrechten": "basic rights",
                "Versammlungsfreiheit": "freedom of assembly"
            },
            answers: [
                { text: "Waffenbesitz", correct: false },
                { text: "<span class='keyword' title='freedom of assembly'>Versammlungsfreiheit</span>", correct: true },
                { text: "Selbstjustiz", correct: false },
                { text: "Faustrecht", correct: false }
            ],
            category: "Politics & Democracy"
        },
        {
            id: 47,
            question: "Wie oft gibt es normalerweise Wahlen zum Deutschen Bundestag?",
            translation: "How often are there usually elections to the German Bundestag?",
            keywords: {
                "Wahlen": "elections",
                "Bundestag": "Federal Parliament",
                "Jahre": "years"
            },
            answers: [
                { text: "alle drei Jahre", correct: false },
                { text: "alle vier <span class='keyword' title='years'>Jahre</span>", correct: true },
                { text: "alle fünf Jahre", correct: false },
                { text: "alle sechs Jahre", correct: false }
            ],
            category: "Politics & Democracy"
        },
        {
            id: 48,
            question: "Was ist die Bundeswehr?",
            translation: "What is the Bundeswehr?",
            keywords: {
                "Bundeswehr": "Federal Armed Forces",
                "Armee": "army"
            },
            answers: [
                { text: "die deutsche Polizei", correct: false },
                { text: "ein deutscher Hafen", correct: false },
                { text: "eine deutsche Bürgerinitiative", correct: false },
                { text: "die deutsche <span class='keyword' title='army'>Armee</span>", correct: true }
            ],
            category: "Politics & Democracy"
        },
        {
            id: 49,
            question: "Welche Maßnahme schafft in Deutschland soziale Sicherheit?",
            translation: "Which measure creates social security in Germany?",
            keywords: {
                "soziale Sicherheit": "social security",
                "Krankenversicherung": "health insurance"
            },
            answers: [
                { text: "die Krankenversicherung", correct: true },
                { text: "die Autoversicherung", correct: false },
                { text: "die Gebäudeversicherung", correct: false },
                { text: "die Haftpflichtversicherung", correct: false }
            ],
            category: "Society & Law"
        },
        {
            id: 50,
            question: "Ein Richter / eine Richterin in Deutschland gehört zur ...",
            translation: "A judge in Germany belongs to the...",
            keywords: {
                "Richter": "judge",
                "Judikative": "judiciary"
            },
            answers: [
                { text: "Exekutive.", correct: false },
                { text: "Legislative.", correct: false },
                { text: "<span class='keyword' title='judiciary'>Judikative</span>.", correct: true },
                { text: "Direktive.", correct: false }
            ],
            category: "Politics & Democracy"
        },
        {
            id: 51,
            question: "Deutschland ist ein <span class='keyword' title='member state'>Mitgliedstaat</span> ...",
            translation: "Germany is a member state of...",
            keywords: {
                "Mitgliedstaat": "member state",
                "Europäischen Union": "European Union",
                "EU": "EU"
            },
            answers: [
                { text: "der <span class='keyword' title='European Union'>Europäischen Union</span>.", correct: true },
                { text: "der Vereinten Nationen.", correct: false },
                { text: "der OPEC.", correct: false },
                { text: "der Europäischen Verteidigungsgemeinschaft.", correct: false }
            ],
            category: "Europe & International"
        },
        {
            id: 52,
            question: "Was bezahlt man in Deutschland automatisch, wenn man fest angestellt ist?",
            translation: "What do you automatically pay in Germany when you are permanently employed?",
            keywords: {
                "Sozialversicherung": "social insurance",
                "angestellt": "employed"
            },
            answers: [
                { text: "Sozialversicherung", correct: true },
                { text: "Sozialhilfe", correct: false },
                { text: "Kindergeld", correct: false },
                { text: "Wohngeld", correct: false }
            ],
            category: "Society & Law"
        },
        {
            id: 53,
            question: "Wer bestimmt in Deutschland die Schulpolitik?",
            translation: "Who determines education policy in Germany?",
            keywords: {
                "Schulpolitik": "education policy",
                "Bundesländer": "federal states"
            },
            answers: [
                { text: "die Lehrer und Lehrerinnen", correct: false },
                { text: "die <span class='keyword' title='federal states'>Bundesländer</span>", correct: true },
                { text: "das Familienministerium", correct: false },
                { text: "die Universitäten", correct: false }
            ],
            category: "Politics & Democracy"
        },
        {
            id: 54,
            question: "Was ist in Deutschland ein Brauch zu Weihnachten?",
            translation: "What is a custom in Germany at Christmas?",
            keywords: {
                "Brauch": "custom",
                "Weihnachten": "Christmas",
                "Weihnachtsbaum": "Christmas tree"
            },
            answers: [
                { text: "bunte Eier verstecken", correct: false },
                { text: "einen <span class='keyword' title='Christmas tree'>Weihnachtsbaum</span> schmücken", correct: true },
                { text: "Kürbisse vor die Tür stellen", correct: false },
                { text: "Raketen in die Luft schießen", correct: false }
            ],
            category: "Culture & Symbols"
        },
        {
            id: 55,
            question: "Was ist der 1. Mai in Deutschland?",
            translation: "What is May 1st in Germany?",
            keywords: {
                "1. Mai": "May 1st",
                "Feiertag": "public holiday",
                "Tag der Arbeit": "Labor Day"
            },
            answers: [
                { text: "der Tag der deutschen Einheit", correct: false },
                { text: "der <span class='keyword' title='Labor Day'>Tag der Arbeit</span>", correct: true },
                { text: "der Tag des Grundgesetzes", correct: false },
                { text: "der Tag der Bundeswehr", correct: false }
            ],
            category: "Culture & Symbols"
        },
        {
            id: 56,
            question: "Wer ernennt in Deutschland die Minister / die Ministerinnen der Bundesregierung?",
            translation: "Who appoints the ministers of the federal government in Germany?",
            keywords: {
                "Minister": "ministers",
                "Bundespräsident": "Federal President",
                "Bundeskanzler": "Federal Chancellor"
            },
            answers: [
                { text: "der Präsident / die Präsidentin des Bundesverfassungsgerichtes", correct: false },
                { text: "der <span class='keyword' title='Federal President'>Bundespräsident</span> / die Bundespräsidentin", correct: false },
                { text: "der Bundesratspräsident / die Bundesratspräsidentin", correct: false },
                { text: "der <span class='keyword' title='Federal Chancellor'>Bundeskanzler</span> / die Bundeskanzlerin", correct: true }
            ],
            category: "Politics & Democracy"
        },
        {
            id: 57,
            question: "Die Wahlen in Deutschland sind ...",
            translation: "Elections in Germany are...",
            keywords: {
                "Wahlen": "elections",
                "frei": "free",
                "gleich": "equal",
                "geheim": "secret",
                "allgemein": "general"
            },
            answers: [
                { text: "frei, <span class='keyword' title='equal'>gleich</span>, geheim.", correct: true },
                { text: "offen, sicher, frei.", correct: false },
                { text: "geschlossen, gleich, sicher.", correct: false },
                { text: "sicher, offen, freiwillig.", correct: false }
            ],
            category: "Politics & Democracy"
        },
        {
            id: 58,
            question: "Was ist Deutschland nicht?",
            translation: "What is Germany not?",
            keywords: {
                "Rechtsstaat": "constitutional state",
                "Bundesstaat": "federal state"
            },
            answers: [
                { text: "eine Demokratie", correct: false },
                { text: "ein Rechtsstaat", correct: false },
                { text: "eine Monarchie", correct: true },
                { text: "ein Sozialstaat", correct: false }
            ],
            category: "Politics & Democracy"
        },
        {
            id: 59,
            question: "Für wie viele Jahre wird der Bundestag in Deutschland gewählt?",
            translation: "For how many years is the Bundestag elected in Germany?",
            keywords: {
                "Bundestag": "Federal Parliament",
                "Jahre": "years",
                "gewählt": "elected"
            },
            answers: [
                { text: "2 Jahre", correct: false },
                { text: "3 Jahre", correct: false },
                { text: "4 Jahre", correct: true },
                { text: "5 Jahre", correct: false }
            ],
            category: "Politics & Democracy"
        },
        {
            id: 60,
            question: "Welche Parteien wurden in Deutschland 2007 zur Partei \"Die Linke\"?",
            translation: "Which parties became 'Die Linke' party in Germany in 2007?",
            keywords: {
                "Die Linke": "The Left",
                "PDS": "PDS",
                "WASG": "WASG"
            },
            answers: [
                { text: "PDS und WASG", correct: true },
                { text: "CSU und SSW", correct: false },
                { text: "PDS und DKP", correct: false },
                { text: "WASG und DKP", correct: false }
            ],
            category: "Politics & Democracy"
        }
    ],

    // State-specific questions (10 per state)
    states: {
        "BW": { // Baden-Württemberg
            name: "Baden-Württemberg",
            questions: [
                {
                    id: 301,
                    question: "Welches Wappen gehört zu Baden-Württemberg?",
                    translation: "Which coat of arms belongs to Baden-Württemberg?",
                    keywords: { "Wappen": "coat of arms" },
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
                }
            ]
        },
        "BY": { // Bayern
            name: "Bayern (Bavaria)",
            questions: [
                {
                    id: 303,
                    question: "Welches Wappen gehört zu Bayern?",
                    translation: "Which coat of arms belongs to Bavaria?",
                    keywords: { "Wappen": "coat of arms" },
                    answers: [
                        { text: "weiß-blau kariert", correct: true },
                        { text: "ein Adler", correct: false },
                        { text: "drei Löwen", correct: false },
                        { text: "ein Pferd", correct: false }
                    ],
                    category: "State Specific"
                },
                {
                    id: 304,
                    question: "Welche ist die Landeshauptstadt von Bayern?",
                    translation: "What is the state capital of Bavaria?",
                    keywords: { "Landeshauptstadt": "state capital" },
                    answers: [
                        { text: "Augsburg", correct: false },
                        { text: "München", correct: true },
                        { text: "Nürnberg", correct: false },
                        { text: "Regensburg", correct: false }
                    ],
                    category: "State Specific"
                }
            ]
        },
        "BE": { // Berlin
            name: "Berlin",
            questions: [
                {
                    id: 305,
                    question: "Welches Wappen gehört zu Berlin?",
                    translation: "Which coat of arms belongs to Berlin?",
                    keywords: { "Wappen": "coat of arms" },
                    answers: [
                        { text: "ein Bär", correct: true },
                        { text: "ein Adler", correct: false },
                        { text: "drei Löwen", correct: false },
                        { text: "ein Pferd", correct: false }
                    ],
                    category: "State Specific"
                },
                {
                    id: 306,
                    question: "Was ist ein berühmtes Wahrzeichen von Berlin?",
                    translation: "What is a famous landmark of Berlin?",
                    keywords: { "Wahrzeichen": "landmark", "Brandenburger Tor": "Brandenburg Gate" },
                    answers: [
                        { text: "das Brandenburger Tor", correct: true },
                        { text: "der Kölner Dom", correct: false },
                        { text: "das Schloss Neuschwanstein", correct: false },
                        { text: "der Hamburger Hafen", correct: false }
                    ],
                    category: "State Specific"
                }
            ]
        },
        "BB": { // Brandenburg
            name: "Brandenburg",
            questions: [
                {
                    id: 307,
                    question: "Welches Wappen gehört zu Brandenburg?",
                    translation: "Which coat of arms belongs to Brandenburg?",
                    keywords: { "Wappen": "coat of arms" },
                    answers: [
                        { text: "ein roter Adler", correct: true },
                        { text: "ein Bär", correct: false },
                        { text: "drei Löwen", correct: false },
                        { text: "ein Pferd", correct: false }
                    ],
                    category: "State Specific"
                },
                {
                    id: 308,
                    question: "Welche ist die Landeshauptstadt von Brandenburg?",
                    translation: "What is the state capital of Brandenburg?",
                    keywords: { "Landeshauptstadt": "state capital" },
                    answers: [
                        { text: "Cottbus", correct: false },
                        { text: "Potsdam", correct: true },
                        { text: "Frankfurt (Oder)", correct: false },
                        { text: "Brandenburg an der Havel", correct: false }
                    ],
                    category: "State Specific"
                }
            ]
        },
        "HB": { // Bremen
            name: "Bremen",
            questions: [
                {
                    id: 309,
                    question: "Welches Wappen gehört zu Bremen?",
                    translation: "Which coat of arms belongs to Bremen?",
                    keywords: { "Wappen": "coat of arms" },
                    answers: [
                        { text: "ein Schlüssel", correct: true },
                        { text: "ein Bär", correct: false },
                        { text: "drei Löwen", correct: false },
                        { text: "ein Pferd", correct: false }
                    ],
                    category: "State Specific"
                },
                {
                    id: 310,
                    question: "Was ist Bremen?",
                    translation: "What is Bremen?",
                    keywords: { "Stadtstaat": "city-state" },
                    answers: [
                        { text: "ein Stadtstaat", correct: true },
                        { text: "nur eine Hafenstadt", correct: false },
                        { text: "ein Flächenstaat", correct: false },
                        { text: "eine Gemeinde", correct: false }
                    ],
                    category: "State Specific"
                }
            ]
        },
        "HH": { // Hamburg
            name: "Hamburg",
            questions: [
                {
                    id: 311,
                    question: "Welches Wappen gehört zu Hamburg?",
                    translation: "Which coat of arms belongs to Hamburg?",
                    keywords: { "Wappen": "coat of arms" },
                    answers: [
                        { text: "eine Burg", correct: true },
                        { text: "ein Bär", correct: false },
                        { text: "drei Löwen", correct: false },
                        { text: "ein Pferd", correct: false }
                    ],
                    category: "State Specific"
                },
                {
                    id: 312,
                    question: "Was ist Hamburg?",
                    translation: "What is Hamburg?",
                    keywords: { "Stadtstaat": "city-state", "Hafen": "harbor" },
                    answers: [
                        { text: "ein Stadtstaat mit großem Hafen", correct: true },
                        { text: "nur eine Hafenstadt", correct: false },
                        { text: "ein Flächenstaat", correct: false },
                        { text: "eine Gemeinde", correct: false }
                    ],
                    category: "State Specific"
                }
            ]
        },
        "HE": { // Hessen
            name: "Hessen",
            questions: [
                {
                    id: 313,
                    question: "Welches Wappen gehört zu Hessen?",
                    translation: "Which coat of arms belongs to Hesse?",
                    keywords: { "Wappen": "coat of arms" },
                    answers: [
                        { text: "ein Löwe", correct: true },
                        { text: "ein Bär", correct: false },
                        { text: "drei Löwen", correct: false },
                        { text: "ein Pferd", correct: false }
                    ],
                    category: "State Specific"
                },
                {
                    id: 314,
                    question: "Welche ist die Landeshauptstadt von Hessen?",
                    translation: "What is the state capital of Hesse?",
                    keywords: { "Landeshauptstadt": "state capital" },
                    answers: [
                        { text: "Frankfurt", correct: false },
                        { text: "Wiesbaden", correct: true },
                        { text: "Kassel", correct: false },
                        { text: "Darmstadt", correct: false }
                    ],
                    category: "State Specific"
                }
            ]
        },
        "MV": { // Mecklenburg-Vorpommern
            name: "Mecklenburg-Vorpommern",
            questions: [
                {
                    id: 315,
                    question: "Welches Wappen gehört zu Mecklenburg-Vorpommern?",
                    translation: "Which coat of arms belongs to Mecklenburg-Western Pomerania?",
                    keywords: { "Wappen": "coat of arms" },
                    answers: [
                        { text: "ein Greif", correct: true },
                        { text: "ein Bär", correct: false },
                        { text: "drei Löwen", correct: false },
                        { text: "ein Pferd", correct: false }
                    ],
                    category: "State Specific"
                },
                {
                    id: 316,
                    question: "Welche ist die Landeshauptstadt von Mecklenburg-Vorpommern?",
                    translation: "What is the state capital of Mecklenburg-Western Pomerania?",
                    keywords: { "Landeshauptstadt": "state capital" },
                    answers: [
                        { text: "Rostock", correct: false },
                        { text: "Schwerin", correct: true },
                        { text: "Stralsund", correct: false },
                        { text: "Greifswald", correct: false }
                    ],
                    category: "State Specific"
                }
            ]
        },
        "NI": { // Niedersachsen
            name: "Niedersachsen (Lower Saxony)",
            questions: [
                {
                    id: 317,
                    question: "Welches Wappen gehört zu Niedersachsen?",
                    translation: "Which coat of arms belongs to Lower Saxony?",
                    keywords: { "Wappen": "coat of arms" },
                    answers: [
                        { text: "ein Pferd", correct: true },
                        { text: "ein Bär", correct: false },
                        { text: "drei Löwen", correct: false },
                        { text: "ein Adler", correct: false }
                    ],
                    category: "State Specific"
                },
                {
                    id: 318,
                    question: "Welche ist die Landeshauptstadt von Niedersachsen?",
                    translation: "What is the state capital of Lower Saxony?",
                    keywords: { "Landeshauptstadt": "state capital" },
                    answers: [
                        { text: "Braunschweig", correct: false },
                        { text: "Hannover", correct: true },
                        { text: "Osnabrück", correct: false },
                        { text: "Oldenburg", correct: false }
                    ],
                    category: "State Specific"
                }
            ]
        },
        "NW": { // Nordrhein-Westfalen
            name: "Nordrhein-Westfalen",
            questions: [
                {
                    id: 319,
                    question: "Welches Wappen gehört zu Nordrhein-Westfalen?",
                    translation: "Which coat of arms belongs to North Rhine-Westphalia?",
                    keywords: { "Wappen": "coat of arms" },
                    answers: [
                        { text: "ein Pferd und eine Rose", correct: true },
                        { text: "ein Bär", correct: false },
                        { text: "drei Löwen", correct: false },
                        { text: "ein Adler", correct: false }
                    ],
                    category: "State Specific"
                },
                {
                    id: 320,
                    question: "Welche ist die Landeshauptstadt von Nordrhein-Westfalen?",
                    translation: "What is the state capital of North Rhine-Westphalia?",
                    keywords: { "Landeshauptstadt": "state capital" },
                    answers: [
                        { text: "Köln", correct: false },
                        { text: "Düsseldorf", correct: true },
                        { text: "Dortmund", correct: false },
                        { text: "Essen", correct: false }
                    ],
                    category: "State Specific"
                }
            ]
        },
        "RP": { // Rheinland-Pfalz
            name: "Rheinland-Pfalz",
            questions: [
                {
                    id: 321,
                    question: "Welches Wappen gehört zu Rheinland-Pfalz?",
                    translation: "Which coat of arms belongs to Rhineland-Palatinate?",
                    keywords: { "Wappen": "coat of arms" },
                    answers: [
                        { text: "ein Rad", correct: true },
                        { text: "ein Bär", correct: false },
                        { text: "drei Löwen", correct: false },
                        { text: "ein Pferd", correct: false }
                    ],
                    category: "State Specific"
                },
                {
                    id: 322,
                    question: "Welche ist die Landeshauptstadt von Rheinland-Pfalz?",
                    translation: "What is the state capital of Rhineland-Palatinate?",
                    keywords: { "Landeshauptstadt": "state capital" },
                    answers: [
                        { text: "Trier", correct: false },
                        { text: "Mainz", correct: true },
                        { text: "Koblenz", correct: false },
                        { text: "Ludwigshafen", correct: false }
                    ],
                    category: "State Specific"
                }
            ]
        },
        "SL": { // Saarland
            name: "Saarland",
            questions: [
                {
                    id: 323,
                    question: "Welches Wappen gehört zum Saarland?",
                    translation: "Which coat of arms belongs to Saarland?",
                    keywords: { "Wappen": "coat of arms" },
                    answers: [
                        { text: "vier Felder", correct: true },
                        { text: "ein Bär", correct: false },
                        { text: "drei Löwen", correct: false },
                        { text: "ein Pferd", correct: false }
                    ],
                    category: "State Specific"
                },
                {
                    id: 324,
                    question: "Welche ist die Landeshauptstadt vom Saarland?",
                    translation: "What is the state capital of Saarland?",
                    keywords: { "Landeshauptstadt": "state capital" },
                    answers: [
                        { text: "Neunkirchen", correct: false },
                        { text: "Saarbrücken", correct: true },
                        { text: "Homburg", correct: false },
                        { text: "Völklingen", correct: false }
                    ],
                    category: "State Specific"
                }
            ]
        },
        "SN": { // Sachsen
            name: "Sachsen (Saxony)",
            questions: [
                {
                    id: 325,
                    question: "Welches Wappen gehört zu Sachsen?",
                    translation: "Which coat of arms belongs to Saxony?",
                    keywords: { "Wappen": "coat of arms" },
                    answers: [
                        { text: "gekreuzte Schwerter", correct: true },
                        { text: "ein Bär", correct: false },
                        { text: "drei Löwen", correct: false },
                        { text: "ein Pferd", correct: false }
                    ],
                    category: "State Specific"
                },
                {
                    id: 326,
                    question: "Welche ist die Landeshauptstadt von Sachsen?",
                    translation: "What is the state capital of Saxony?",
                    keywords: { "Landeshauptstadt": "state capital" },
                    answers: [
                        { text: "Leipzig", correct: false },
                        { text: "Dresden", correct: true },
                        { text: "Chemnitz", correct: false },
                        { text: "Zwickau", correct: false }
                    ],
                    category: "State Specific"
                }
            ]
        },
        "ST": { // Sachsen-Anhalt
            name: "Sachsen-Anhalt",
            questions: [
                {
                    id: 327,
                    question: "Welches Wappen gehört zu Sachsen-Anhalt?",
                    translation: "Which coat of arms belongs to Saxony-Anhalt?",
                    keywords: { "Wappen": "coat of arms" },
                    answers: [
                        { text: "Adler und Bär", correct: true },
                        { text: "nur ein Bär", correct: false },
                        { text: "drei Löwen", correct: false },
                        { text: "ein Pferd", correct: false }
                    ],
                    category: "State Specific"
                },
                {
                    id: 328,
                    question: "Welche ist die Landeshauptstadt von Sachsen-Anhalt?",
                    translation: "What is the state capital of Saxony-Anhalt?",
                    keywords: { "Landeshauptstadt": "state capital" },
                    answers: [
                        { text: "Halle", correct: false },
                        { text: "Magdeburg", correct: true },
                        { text: "Dessau", correct: false },
                        { text: "Wittenberg", correct: false }
                    ],
                    category: "State Specific"
                }
            ]
        },
        "SH": { // Schleswig-Holstein
            name: "Schleswig-Holstein",
            questions: [
                {
                    id: 329,
                    question: "Welches Wappen gehört zu Schleswig-Holstein?",
                    translation: "Which coat of arms belongs to Schleswig-Holstein?",
                    keywords: { "Wappen": "coat of arms" },
                    answers: [
                        { text: "zwei Löwen", correct: true },
                        { text: "ein Bär", correct: false },
                        { text: "drei Löwen", correct: false },
                        { text: "ein Pferd", correct: false }
                    ],
                    category: "State Specific"
                },
                {
                    id: 330,
                    question: "Welche ist die Landeshauptstadt von Schleswig-Holstein?",
                    translation: "What is the state capital of Schleswig-Holstein?",
                    keywords: { "Landeshauptstadt": "state capital" },
                    answers: [
                        { text: "Lübeck", correct: false },
                        { text: "Kiel", correct: true },
                        { text: "Flensburg", correct: false },
                        { text: "Neumünster", correct: false }
                    ],
                    category: "State Specific"
                }
            ]
        },
        "TH": { // Thüringen
            name: "Thüringen",
            questions: [
                {
                    id: 331,
                    question: "Welches Wappen gehört zu Thüringen?",
                    translation: "Which coat of arms belongs to Thuringia?",
                    keywords: { "Wappen": "coat of arms" },
                    answers: [
                        { text: "ein Löwe mit Sternen", correct: true },
                        { text: "ein Bär", correct: false },
                        { text: "drei Löwen", correct: false },
                        { text: "ein Pferd", correct: false }
                    ],
                    category: "State Specific"
                },
                {
                    id: 332,
                    question: "Welche ist die Landeshauptstadt von Thüringen?",
                    translation: "What is the state capital of Thuringia?",
                    keywords: { "Landeshauptstadt": "state capital" },
                    answers: [
                        { text: "Jena", correct: false },
                        { text: "Erfurt", correct: true },
                        { text: "Weimar", correct: false },
                        { text: "Gera", correct: false }
                    ],
                    category: "State Specific"
                }
            ]
        }
    }
};
