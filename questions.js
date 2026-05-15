// Einbürgerungstest Questions Database
// Complete catalog of all 300 general questions and 160 state-specific questions
// Based on the BAMF official "Gesamtfragenkatalog zum Test Leben in Deutschland und zum Einbürgerungstest"
// Stand: 07.05.2025

const questionsDatabase = {
    // 300 general questions (Allgemeine Fragen)
    general: [
        {
            id: 1,
            question: 'In Deutschland dürfen Menschen offen etwas gegen die <span class="keyword" title="government">Regierung</span> sagen, weil ...',
            translation: 'In Germany, people are allowed to openly say something against the government because?',
            context: 'In Germany, people live in a democratic state governed by the rule of law. Social coexistence is regulated by the Basic Law, which protects important rights and freedoms. Citizens are allowed to express their opinions, criticize and participate in political discussions without being punished for it. These rights are important for democracy to function and for different views to be respected. Against this background, the task asks why criticism of the government is openly possible.',
            answers: [
                {
                    text: 'hier <span class="keyword" title="freedom of religion">Religionsfreiheit</span> gilt.',
                    translation: 'freedom of religion applies here.',
                    correct: false
                },
                {
                    text: 'die Menschen <span class="keyword" title="taxes">Steuern</span> zahlen.',
                    translation: 'people pay taxes.',
                    correct: false
                },
                {
                    text: 'die Menschen das <span class="keyword" title="right to vote">Wahlrecht</span> haben.',
                    translation: 'people have the right to vote.',
                    correct: false
                },
                {
                    text: 'hier <span class="keyword" title="freedom of opinion">Meinungsfreiheit</span> gilt.',
                    translation: 'freedom of expression applies here.',
                    correct: true
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Regierung: 'government',
                Religionsfreiheit: 'freedom of religion',
                Steuern: 'taxes',
                Wahlrecht: 'right to vote',
                Meinungsfreiheit: 'freedom of opinion'
            }
        },
        {
            id: 2,
            question: 'In Deutschland können Eltern bis zum 14. Lebensjahr ihres Kindes entscheiden, ob es in der <span class="keyword" title="school">Schule</span> am ...',
            translation: 'In Germany, parents can decide up to the age of 14 whether their child will attend school on?',
            context: 'In Germany, laws regulate the school system, including the question of which compulsory or elective subjects children must attend. Especially when it comes to religion, special regulations apply, which also affect religious freedom and the parents\' right to bring up children. Age limits play an important role in this, as children\'s decision-making rights change with age.',
            answers: [
                {
                    text: 'Geschichtsunterricht teilnimmt.',
                    translation: 'History class',
                    correct: false
                },
                {
                    text: '<span class="keyword" title="religious education">Religionsunterricht</span> teilnimmt.',
                    translation: 'religious education',
                    correct: true
                },
                {
                    text: 'Politikunterricht teilnimmt.',
                    translation: 'takes part in politics lessons',
                    correct: false
                },
                {
                    text: 'Sprachunterricht teilnimmt.',
                    translation: 'Language Classes',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {
                Schule: 'school',
                Religionsunterricht: 'religious education'
            }
        },
        {
            id: 3,
            question: 'Deutschland ist ein <span class="keyword" title="constitutional state">Rechtsstaat</span>. Was ist damit gemeint?',
            translation: 'Germany is a state governed by the rule of law. What does that mean?',
            context: 'The term "rule of law" is a central principle of German democracy. It describes how the state, politics and citizens deal with each other and what role laws play. To understand the meaning, you have to know who is bound by laws in Germany and how state power is controlled.',
            answers: [
                {
                    text: 'Alle Einwohner / Einwohnerinnen und der <span class="keyword" title="state">Staat</span> müssen sich an die <span class="keyword" title="laws">Gesetze</span> halten.',
                    translation: 'All residents and the state must abide by the law.',
                    correct: true
                },
                {
                    text: 'Der <span class="keyword" title="state">Staat</span> muss sich nicht an die <span class="keyword" title="laws">Gesetze</span> halten.',
                    translation: 'The state does not have to abide by the law.',
                    correct: false
                },
                {
                    text: 'Nur Deutsche müssen die <span class="keyword" title="laws">Gesetze</span> befolgen.',
                    translation: 'Only Germans have to follow the laws.',
                    correct: false
                },
                {
                    text: 'Die Gerichte machen die <span class="keyword" title="laws">Gesetze</span>.',
                    translation: 'The courts make the laws.',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {
                Rechtsstaat: 'constitutional state',
                Gesetze: 'laws',
                Staat: 'state'
            }
        },
        {
            id: 4,
            question: 'Welches Recht gehört zu den <span class="keyword" title="basic rights">Grundrechten</span> in Deutschland?',
            translation: 'Which law is one of the fundamental rights in Germany?',
            context: 'The question relates to the Basic Law of the Federal Republic of Germany, which sets out the fundamental rights of citizens. Fundamental rights protect human freedom and dignity and form the basis of the democratic order. In order to find the right answer, you have to know which rights are expressly anchored in the Basic Law and which actions or ideas are not allowed or even prohibited.',
            answers: [
                {
                    text: 'Waffenbesitz',
                    translation: 'Possession of weapons',
                    correct: false
                },
                {
                    text: 'Faustrecht',
                    translation: 'Law of the Fist',
                    correct: false
                },
                {
                    text: '<span class="keyword" title="freedom of opinion">Meinungsfreiheit</span>',
                    translation: 'Freedom of expression',
                    correct: true
                },
                {
                    text: 'Selbstjustiz',
                    translation: 'Vigilante justice',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Grundrechten: 'basic rights',
                Meinungsfreiheit: 'freedom of opinion'
            }
        },
        {
            id: 5,
            question: '<span class="keyword" title="elections">Wahlen</span> in Deutschland sind frei. Was bedeutet das?',
            translation: 'Elections in Germany are free. What does that mean?',
            context: 'In Germany, certain principles apply to democratic elections. These include freedom, equality, secrecy and immediacy of election. The question relates specifically to the principle of free choice. To find the right answer, you need to know what "free" means in the context of elections and what conditions or actions are allowed or prohibited in the process.',
            answers: [
                {
                    text: 'Man darf Geld annehmen, wenn man dafür einen bestimmten Kandidaten / eine bestimmte Kandidatin wählt.',
                    translation: 'You can accept money if you choose a certain candidate.',
                    correct: false
                },
                {
                    text: 'Der Wähler darf bei der <span class="keyword" title="election">Wahl</span> weder beeinflusst noch zu einer bestimmten <span class="keyword" title="casting a vote">Stimmabgabe</span> gezwungen werden und keine Nachteile durch die Wahl haben.',
                    translation: 'The voter must not be influenced or forced to cast a certain vote in the election and must not be disadvantaged by the election.',
                    correct: true
                },
                {
                    text: 'Nur Personen, die noch nie im Gefängnis waren, dürfen <span class="keyword" title="to vote/elect">wählen</span>.',
                    translation: 'Only people who have never been in prison are allowed to vote.',
                    correct: false
                },
                {
                    text: 'Alle wahlberechtigten Personen müssen <span class="keyword" title="to vote/elect">wählen</span>.',
                    translation: 'All persons entitled to vote must vote.',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Wahlen: 'elections',
                Stimmabgabe: 'casting a vote',
                Wahl: 'election',
                'wählen': 'to vote/elect'
            }
        },
        {
            id: 6,
            question: 'Wie heißt die deutsche <span class="keyword" title="constitution">Verfassung</span>?',
            translation: 'What is the name of the German constitution?',
            context: 'The following question comes from the field of politics and history in Germany. It refers to the state foundation of the Federal Republic, which defines the basic rules, rights and duties as well as the structure of the state. Knowledge of this is important for understanding German democracy and its legal system.',
            answers: [
                {
                    text: 'Volksgesetz',
                    translation: 'People\'s Law',
                    correct: false
                },
                {
                    text: 'Bundesgesetz',
                    translation: 'Federal law',
                    correct: false
                },
                {
                    text: 'Deutsches <span class="keyword" title="law">Gesetz</span>',
                    translation: 'German law',
                    correct: false
                },
                {
                    text: '<span class="keyword" title="Basic Law">Grundgesetz</span>',
                    translation: 'Basic Law',
                    correct: true
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Verfassung: 'constitution',
                Gesetz: 'law',
                Grundgesetz: 'Basic Law'
            }
        },
        {
            id: 7,
            question: 'Welches Recht gehört zu den <span class="keyword" title="basic rights">Grundrechten</span>, die nach der deutschen <span class="keyword" title="constitution">Verfassung</span> garantiert werden? Das Recht auf ...',
            translation: 'Which right is one of the fundamental rights guaranteed by the German constitution? The right to',
            context: 'The question relates to the fundamental rights enshrined in the German Basic Law. These fundamental rights are central rights that are intended to protect people in Germany from state interference and to safeguard the liberal order. Not every desirable social good is guaranteed as a fundamental right. The task requires a distinction to be made between expressly constitutionally protected rights and other social goals.',
            answers: [
                {
                    text: 'Glaubens- und <span class="keyword" title="freedom of conscience">Gewissensfreiheit</span>',
                    translation: 'Freedom of religion and conscience',
                    correct: true
                },
                {
                    text: 'Unterhaltung',
                    translation: 'Entertainment',
                    correct: false
                },
                {
                    text: 'Arbeit',
                    translation: 'Work',
                    correct: false
                },
                {
                    text: 'Wohnung',
                    translation: 'Apartment',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Grundrechten: 'basic rights',
                Verfassung: 'constitution',
                Gewissensfreiheit: 'freedom of conscience'
            }
        },
        {
            id: 8,
            question: 'Was steht nicht im <span class="keyword" title="Basic Law">Grundgesetz</span> von Deutschland?',
            translation: 'What is not in the Basic Law of Germany?',
            context: 'The Basic Law is the constitution of the Federal Republic of Germany. It contains basic rules for the state as well as central fundamental rights of citizens, such as human dignity, freedom of expression and equality before the law. The following question is intended to examine which statement belongs to these fundamental rights and which statement is not laid down in the Basic Law. A basic understanding of the contents and goals of the Basic Law is helpful for this.',
            answers: [
                {
                    text: 'Die Würde des Menschen ist unantastbar.',
                    translation: 'Human dignity is inviolable.',
                    correct: false
                },
                {
                    text: 'Alle sollen gleich viel Geld haben.',
                    translation: 'Everyone should have the same amount of money',
                    correct: true
                },
                {
                    text: 'Jeder Mensch darf seine Meinung sagen.',
                    translation: 'Everyone is allowed to express their opinion.',
                    correct: false
                },
                {
                    text: 'Alle sind vor dem <span class="keyword" title="law">Gesetz</span> gleich.',
                    translation: 'Everyone is equal before the law.',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Grundgesetz: 'Basic Law',
                Gesetz: 'law'
            }
        },
        {
            id: 9,
            question: 'Welches <span class="keyword" title="basic right">Grundrecht</span> gilt in Deutschland nur für Ausländer / Ausländerinnen? Das Grundrecht auf ...',
            translation: 'Which fundamental right applies only to foreigners in Germany? The fundamental right to ...',
            context: 'The question relates to the fundamental rights enshrined in the Basic Law of the Federal Republic of Germany. Some fundamental rights apply to all people regardless of their nationality, while others are expressly intended only for German citizens or special groups. In the context of civics or political science lessons, it is important to know which fundamental rights apply universally and which have a special connection to residence status or nationality.',
            answers: [
                {
                    text: 'Schutz der Familie',
                    translation: 'Protection of the family',
                    correct: false
                },
                {
                    text: '<span class="keyword" title="human dignity">Menschenwürde</span>',
                    translation: 'Human dignity',
                    correct: false
                },
                {
                    text: '<span class="keyword" title="asylum">Asyl</span>',
                    translation: 'Asylum',
                    correct: true
                },
                {
                    text: '<span class="keyword" title="freedom of opinion">Meinungsfreiheit</span>',
                    translation: 'Freedom of expression',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Grundrecht: 'basic right',
                'Menschenwürde': 'human dignity',
                Asyl: 'asylum',
                Meinungsfreiheit: 'freedom of opinion'
            }
        },
        {
            id: 10,
            question: 'Was ist mit dem deutschen <span class="keyword" title="Basic Law">Grundgesetz</span> vereinbar?',
            translation: 'What is compatible with the German Basic Law?',
            context: 'This question refers to the German Basic Law, the Constitution of the Federal Republic of Germany. It establishes fundamental rights and values, in particular the protection of human dignity and the type of punishment that can be permissed. To answer the question, it is necessary to know which forms of punishment and sanctions are permitted or expressly prohibited under the Basic Law. Knowledge of the articles on human rights and criminal law is helpful for this.',
            answers: [
                {
                    text: 'die Prügelstrafe',
                    translation: 'the corporal punishment',
                    correct: false
                },
                {
                    text: 'die Folter',
                    translation: 'the torture',
                    correct: false
                },
                {
                    text: 'die Todesstrafe',
                    translation: 'the death penalty',
                    correct: false
                },
                {
                    text: 'die Geldstrafe',
                    translation: 'the fine',
                    correct: true
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Grundgesetz: 'Basic Law'
            }
        },
        {
            id: 11,
            question: 'Wie wird die <span class="keyword" title="constitution">Verfassung</span> der Bundesrepublik Deutschland genannt?',
            translation: 'What is the constitution of the Federal Republic of Germany called?',
            context: 'The question relates to Germany\'s political system and legal foundations. It examines basic knowledge about the state and its organization. Knowledge of the most important legal basis, in which the state order, fundamental rights and the interaction of state organs are defined, is particularly relevant. Such questions often come up in politics lessons, civics or naturalization tests.',
            answers: [
                {
                    text: '<span class="keyword" title="Basic Law">Grundgesetz</span>',
                    translation: 'Basic Law',
                    correct: true
                },
                {
                    text: 'Bundesverfassung',
                    translation: 'Bundesverfassung',
                    correct: false
                },
                {
                    text: 'Gesetzbuch',
                    translation: 'Code of Law',
                    correct: false
                },
                {
                    text: 'Verfassungsvertrag',
                    translation: 'Constitutional Treaty',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Verfassung: 'constitution',
                Grundgesetz: 'Basic Law'
            }
        },
        {
            id: 12,
            question: 'Eine <span class="keyword" title="party">Partei</span> im Deutschen <span class="keyword" title="Federal Parliament">Bundestag</span> will die <span class="keyword" title="freedom of the press">Pressefreiheit</span> abschaffen. Ist das möglich?',
            translation: 'A party in the German Bundestag wants to abolish freedom of the press. Is that possible?',
            context: 'In Germany, freedom of the press is a central component of democracy and is enshrined in the Basic Law. It protects free reporting and diversity of opinion and is intended to prevent the state from controlling or restricting the media. The question deals with whether and under what political or legal conditions a party in the German Bundestag could abolish this freedom of the press, and examines knowledge about the legal protection of fundamental rights and the limits of parliamentary power.',
            answers: [
                {
                    text: 'Ja, wenn mehr als die Hälfte der <span class="keyword" title="members of parliament">Abgeordneten</span> im <span class="keyword" title="Federal Parliament">Bundestag</span> dafür sind.',
                    translation: 'Ja, wenn mehr als die Hälfte der Abgeordneten im Bundestag dafür sind.',
                    correct: false
                },
                {
                    text: 'Ja, aber dazu müssen zwei Drittel der <span class="keyword" title="members of parliament">Abgeordneten</span> im <span class="keyword" title="Federal Parliament">Bundestag</span> dafür sein.',
                    translation: 'Yes, but for that to happen, two-thirds of the members of the Bundestag must be in favor',
                    correct: false
                },
                {
                    text: 'Nein, denn die <span class="keyword" title="freedom of the press">Pressefreiheit</span> ist ein <span class="keyword" title="basic right">Grundrecht</span>. Sie kann nicht abgeschafft werden.',
                    translation: 'No, because freedom of the press is a fundamental right. It cannot be abolished',
                    correct: true
                },
                {
                    text: 'Nein, denn nur der <span class="keyword" title="Federal Council">Bundesrat</span> kann die <span class="keyword" title="freedom of the press">Pressefreiheit</span> abschaffen.',
                    translation: 'No, because only the Federal Council can abolish freedom of the press.',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Pressefreiheit: 'freedom of the press',
                Bundestag: 'Federal Parliament',
                Partei: 'party',
                Abgeordneten: 'members of parliament',
                Grundrecht: 'basic right',
                Bundesrat: 'Federal Council'
            }
        },
        {
            id: 13,
            question: 'Im <span class="keyword" title="parliament">Parlament</span> steht der Begriff „<span class="keyword" title="opposition">Opposition</span>“ für ...',
            translation: 'In parliament, the term "opposition" stands for ...',
            context: 'In parliamentary democracies like Germany, there is a clear distinction between government and opposition. After an election, one or more parties form the government. Other elected members of parliament are not part of the government. These groups have special tasks, such as overseeing the government, putting forward their own proposals, and representing alternative political opinions. To answer the question correctly, it is important to know how the term "opposition" is used in the parliamentary system.',
            answers: [
                {
                    text: 'die regierenden <span class="keyword" title="parties">Parteien</span>.',
                    translation: 'the governing parties.',
                    correct: false
                },
                {
                    text: 'alle <span class="keyword" title="members of parliament">Abgeordneten</span>, die nicht zu der Regierungspartei/den Regierungsparteien gehören.',
                    translation: 'all members of parliament who do not belong to the governing party(s).',
                    correct: true
                },
                {
                    text: 'die <span class="keyword" title="parliamentary group">Fraktion</span> mit den meisten <span class="keyword" title="members of parliament">Abgeordneten</span>.',
                    translation: 'the parliamentary group with the most deputies.',
                    correct: false
                },
                {
                    text: 'alle <span class="keyword" title="parties">Parteien</span>, die bei der letzten <span class="keyword" title="election">Wahl</span> die <span class="keyword" title="5% threshold">5%-Hürde</span> erreichen konnten.',
                    translation: 'alle Parteien, die bei der letzten Wahl die 5%-Hürde erreichen konnten.',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Opposition: 'opposition',
                Parlament: 'parliament',
                Parteien: 'parties',
                Abgeordneten: 'members of parliament',
                Fraktion: 'parliamentary group',
                '5%-Hürde': '5% threshold',
                Wahl: 'election'
            }
        },
        {
            id: 14,
            question: '<span class="keyword" title="freedom of opinion">Meinungsfreiheit</span> in Deutschland heißt, dass ich ...',
            translation: 'Freedom of expression in Germany means that I ...',
            context: 'The question relates to the fundamental right of freedom of expression in Germany. This right is enshrined in the Basic Law and allows people to express their opinions freely, for example in public or in the media. At the same time, there are legal limits, for example to protect other people or public order. The answer options are intended to show which statements on freedom of expression are allowed and which violate applicable law.',
            answers: [
                {
                    text: 'auf Flugblättern falsche Tatsachen behaupten darf.',
                    translation: 'auf Flugblättern falsche Tatsachen behaupten darf.',
                    correct: false
                },
                {
                    text: 'meine Meinung in Leserbriefen äußern kann.',
                    translation: 'can express my opinion in letters to the editor.',
                    correct: true
                },
                {
                    text: 'Nazi-Symbole tragen darf.',
                    translation: 'Nazi-Symbole tragen darf.',
                    correct: false
                },
                {
                    text: 'Meine Meinung sagen darf, solange ich der <span class="keyword" title="government">Regierung</span> nicht widerspreche.',
                    translation: 'Meine Meinung sagen darf, solange ich der Regierung nicht widerspreche.',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {
                Meinungsfreiheit: 'freedom of opinion',
                Regierung: 'government'
            }
        },
        {
            id: 15,
            question: 'Was verbietet das deutsche <span class="keyword" title="Basic Law">Grundgesetz</span>?',
            translation: 'What does the German Basic Law prohibit?',
            context: 'The Basic Law is the constitution of the Federal Republic of Germany and sets out the basic rights and duties of citizens. It protects the freedom of the individual and sets clear limits for state action. In this context, the question deals with which actions or conditions are expressly prohibited. The possible answers relate to different aspects such as work, freedom of occupation and duties towards the state.',
            answers: [
                {
                    text: 'Militärdienst',
                    translation: 'Military service',
                    correct: false
                },
                {
                    text: 'Zwangsarbeit',
                    translation: 'Forced labor',
                    correct: true
                },
                {
                    text: 'freie Berufswahl',
                    translation: 'Free choice of profession',
                    correct: false
                },
                {
                    text: 'Arbeit im Ausland',
                    translation: 'Work abroad',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Grundgesetz: 'Basic Law'
            }
        },
        {
            id: 16,
            question: 'Wann ist die <span class="keyword" title="freedom of opinion">Meinungsfreiheit</span> in Deutschland eingeschränkt?',
            translation: 'When is freedom of expression restricted in Germany?',
            context: 'The question relates to freedom of expression under Article 5 of the Basic Law. In principle, people are allowed to express their opinions freely, but there are legal limits. These result, for example, from the protection of personal honour, human dignity or from general laws. To choose the right answer, you need to know in which cases expression of opinion may be legally restricted or prohibited.',
            answers: [
                {
                    text: 'bei der öffentlichen Verbreitung falscher Behauptungen über einzelne Personen',
                    translation: 'in the public dissemination of false claims about individuals',
                    correct: true
                },
                {
                    text: 'bei Meinungsäußerungen über die <span class="keyword" title="Federal Government">Bundesregierung</span>',
                    translation: 'bei Meinungsäußerungen über die Bundesregierung',
                    correct: false
                },
                {
                    text: 'bei Diskussionen über Religionen',
                    translation: 'in discussions about religions',
                    correct: false
                },
                {
                    text: 'bei Kritik am <span class="keyword" title="state">Staat</span>',
                    translation: 'in case of criticism of the state',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Meinungsfreiheit: 'freedom of opinion',
                Bundesregierung: 'Federal Government',
                Staat: 'state'
            }
        },
        {
            id: 17,
            question: 'Die deutschen <span class="keyword" title="laws">Gesetze</span> verbieten ...',
            translation: 'German laws prohibit ...',
            context: 'The question relates to the fundamental rights enshrined in the Basic Law of the Federal Republic of Germany. These laws regulate what rights citizens have vis-à-vis the state and what the state may or may not do. In order to find the right answer, one must know which freedoms are protected and which actions or conditions are expressly prohibited by German laws in order to ensure the equality and freedom of all people.',
            answers: [
                {
                    text: '<span class="keyword" title="freedom of opinion">Meinungsfreiheit</span> der Einwohner und Einwohnerinnen.',
                    translation: 'Freedom of expression of the residents.',
                    correct: false
                },
                {
                    text: 'Petitionen der <span class="keyword" title="citizen">Bürger</span> und Bürgerinnen.',
                    translation: 'Petitions of citizens.',
                    correct: false
                },
                {
                    text: '<span class="keyword" title="freedom of assembly">Versammlungsfreiheit</span> der Einwohner und Einwohnerinnen.',
                    translation: 'Freedom of assembly of residents.',
                    correct: false
                },
                {
                    text: 'Ungleichbehandlung der <span class="keyword" title="citizen">Bürger</span> und Bürgerinnen durch den <span class="keyword" title="state">Staat</span>.',
                    translation: 'Unequal treatment of citizens by the state.',
                    correct: true
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Gesetze: 'laws',
                Meinungsfreiheit: 'freedom of opinion',
                'Bürger': 'citizen',
                Versammlungsfreiheit: 'freedom of assembly',
                Staat: 'state'
            }
        },
        {
            id: 18,
            question: 'Welches <span class="keyword" title="basic right">Grundrecht</span> ist in Artikel 1 des Grundgesetzes der Bundesrepublik Deutschland garantiert?',
            translation: 'What fundamental right is guaranteed in Article 1 of the Basic Law of the Federal Republic of Germany?',
            context: 'The question refers to the Basic Law of the Federal Republic of Germany, i.e. the German Constitution. It sets out the most important fundamental rights that bind the state and are intended to protect people\'s freedom and dignity. The first articles in particular are of fundamental importance, as they describe the central values of the state. In order to find the right answer, it is helpful to know what meaning Article 1 of the Basic Law has and which central principle comes first there.',
            answers: [
                {
                    text: 'die Unantastbarkeit der <span class="keyword" title="human dignity">Menschenwürde</span>',
                    translation: 'the inviolability of human dignity',
                    correct: true
                },
                {
                    text: 'das Recht auf Leben',
                    translation: 'the right to life',
                    correct: false
                },
                {
                    text: '<span class="keyword" title="freedom of religion">Religionsfreiheit</span>',
                    translation: 'Religious Freedom',
                    correct: false
                },
                {
                    text: '<span class="keyword" title="freedom of opinion">Meinungsfreiheit</span>',
                    translation: 'Freedom of expression',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Grundrecht: 'basic right',
                'Menschenwürde': 'human dignity',
                Religionsfreiheit: 'freedom of religion',
                Meinungsfreiheit: 'freedom of opinion'
            }
        },
        {
            id: 19,
            question: 'Was versteht man unter dem Recht der „<span class="keyword" title="freedom of movement">Freizügigkeit</span>“ in Deutschland?',
            translation: 'What is meant by the right of "freedom of movement" in Germany?',
            context: 'In Germany, certain fundamental rights are laid down in the Basic Law. One of them concerns the freedom to move within the country and determine the centre of one\'s life. This right is important for everyday life, work and personal life planning. In the context of politics, law or integration courses, it is often examined what exactly is meant by this fundamental right and what opportunities are available to people in Germany.',
            answers: [
                {
                    text: 'Man darf sich seinen Wohnort selbst aussuchen.',
                    translation: 'You can choose your own place of residence.',
                    correct: true
                },
                {
                    text: 'Man kann seinen Beruf wechseln.',
                    translation: 'You can change your profession.',
                    correct: false
                },
                {
                    text: 'Man darf sich für eine andere <span class="keyword" title="religion">Religion</span> entscheiden.',
                    translation: 'You can choose another religion.',
                    correct: false
                },
                {
                    text: 'Man darf sich in der Öffentlichkeit nur leicht bekleidet bewegen.',
                    translation: 'Man darf sich in der Öffentlichkeit nur leicht bekleidet bewegen.',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                'Freizügigkeit': 'freedom of movement',
                Religion: 'religion'
            }
        },
        {
            id: 20,
            question: 'Eine <span class="keyword" title="party">Partei</span> in Deutschland verfolgt das Ziel, eine <span class="keyword" title="dictatorship">Diktatur</span> zu errichten. Sie ist dann  ...',
            translation: 'A party in Germany is pursuing the goal of establishing a dictatorship. It is then ...',
            context: 'The question relates to the political system of Germany and the Basic Law. In a democracy, certain values such as freedom, the rule of law and the protection of the constitution apply. Political parties are allowed to participate in elections as long as they respect these basic principles. The Basic Law determines how parties whose goals are directed against the democratic order are to be dealt with. Against this background, it is to be assessed how a party that strives for the abolition of democracy and the establishment of a dictatorship is to be classified.',
            answers: [
                {
                    text: 'tolerant.',
                    translation: 'tolerant.',
                    correct: false
                },
                {
                    text: 'rechtsstaatlich orientiert.',
                    translation: 'based on the rule of law.',
                    correct: false
                },
                {
                    text: 'gesetzestreu.',
                    translation: 'Law-abiding.',
                    correct: false
                },
                {
                    text: 'verfassungswidrig.',
                    translation: 'unconstitutional.',
                    correct: true
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Diktatur: 'dictatorship',
                Partei: 'party'
            }
        },
        {
            id: 21,
            question: 'Welches ist das <span class="keyword" title="coat of arms">Wappen</span> der Bundesrepublik Deutschland?',
            translation: 'What is the coat of arms of the Federal Republic of Germany?',
            context: 'The question relates to the state symbols of Germany. The coat of arms of the Federal Republic of Germany is an official symbol that can often be seen on historical representations, buildings, documents or coins. The correct coat of arms should be selected from the illustrations indicated.',
            answers: [
                {
                    text: '1',
                    translation: '1',
                    correct: true
                },
                {
                    text: '2',
                    translation: '2',
                    correct: false
                },
                {
                    text: '3',
                    translation: '3',
                    correct: false
                },
                {
                    text: '4',
                    translation: '4',
                    correct: false
                }
            ],
            category: 'History',
            image: 'images/q56-q99.42b88c95.png',
            keywords: {
                Wappen: 'coat of arms'
            }
        },
        {
            id: 22,
            question: 'Was für eine Staatsform hat Deutschland?',
            translation: 'What kind of government does Germany have?',
            context: 'The question refers to basic political knowledge about states and their forms of government. To answer them, one should know how a state is organized, who is at the top and how political power is exercised. Throughout history, there have been different forms of government such as monarchies, republics or dictatorships. Germany has gone through various systems throughout its history, which is why it is important to know the current state structure.',
            answers: [
                {
                    text: '<span class="keyword" title="monarchy">Monarchie</span>',
                    translation: 'Monarchy',
                    correct: false
                },
                {
                    text: '<span class="keyword" title="dictatorship">Diktatur</span>',
                    translation: 'Dictatorship',
                    correct: false
                },
                {
                    text: '<span class="keyword" title="republic">Republik</span>',
                    translation: 'Republic',
                    correct: true
                },
                {
                    text: 'Fürstentum',
                    translation: 'Principality',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Monarchie: 'monarchy',
                Diktatur: 'dictatorship',
                Republik: 'republic'
            }
        },
        {
            id: 23,
            question: 'In Deutschland sind die meisten Erwerbstätigen ...',
            translation: 'In Germany, most of the employed are ...',
            context: 'The question relates to the German labour market and aims to check which form of employment occurs most frequently there. It is typical for a knowledge or orientation test on the economy, work or society in Germany. In order to be able to choose the correct answer, you should have basic knowledge of employment, employment, self-employment and voluntary work in Germany.',
            answers: [
                {
                    text: 'bei einer Firma oder Behörde beschäftigt.',
                    translation: 'employed by a company or authority.',
                    correct: true
                },
                {
                    text: 'in kleinen Familienunternehmen beschäftigt.',
                    translation: 'in small family businesses.',
                    correct: false
                },
                {
                    text: 'ehrenamtlich für ein <span class="keyword" title="federal state">Bundesland</span> tätig.',
                    translation: 'volunteer for a federal state.',
                    correct: false
                },
                {
                    text: 'selbständig mit einer eigenen Firma tätig.',
                    translation: 'self-employed with his own company.',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {
                Bundesland: 'federal state'
            }
        },
        {
            id: 24,
            question: 'Wie viele <span class="keyword" title="federal states">Bundesländer</span> hat die Bundesrepublik Deutschland?',
            translation: 'How many federal states does the Federal Republic of Germany have?',
            context: 'The Federal Republic of Germany is a federal state in Europe. Its political and administrative organization is based on several regional constituent states, the so-called federal states. These states have their own governments and responsibilities, but they work together within the federal system. Knowledge of the number of federal states is fundamental for understanding the German state structure, geography and politics.',
            answers: [
                {
                    text: '14',
                    translation: '14',
                    correct: false
                },
                {
                    text: '15',
                    translation: '15',
                    correct: false
                },
                {
                    text: '16',
                    translation: '16',
                    correct: true
                },
                {
                    text: '17',
                    translation: '17',
                    correct: false
                }
            ],
            category: 'Geography & Structure',
            keywords: {
                'Bundesländer': 'federal states'
            }
        },
        {
            id: 25,
            question: 'Was ist kein <span class="keyword" title="federal state">Bundesland</span> der Bundesrepublik Deutschland?',
            translation: 'What is not a federal state of the Federal Republic of Germany?',
            context: 'The question relates to the federal states of the Federal Republic of Germany. Germany is a federal state and consists of 16 federal states with their own governments and administrative structures. The following selection lists several well-known German states, but one option denotes an area that historically or geographically belongs to another state. On this basis, it is to be decided which answer is not a German federal state.',
            answers: [
                {
                    text: 'Nordrhein-Westfalen',
                    translation: 'North Rhine-Westphalia',
                    correct: false
                },
                {
                    text: 'Elsass-Lothringen',
                    translation: 'Alsace-Lorraine',
                    correct: true
                },
                {
                    text: 'Mecklenburg-Vorpommern',
                    translation: 'Mecklenburg-Vorpommern',
                    correct: false
                },
                {
                    text: 'Sachsen-Anhalt',
                    translation: 'Saxony-Anhalt',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {
                Bundesland: 'federal state'
            }
        },
        {
            id: 26,
            question: 'Deutschland ist ...',
            translation: 'Germany is ...',
            context: 'The following question comes from the field of civic education and tests basic knowledge of the German political system. It refers to the form of government and the basic principles laid down in the Basic Law of the Federal Republic of Germany. In order to find the right answer, one should know how Germany is politically organized and which values and structures characterize the state, for example democracy, federalism and social responsibility.',
            answers: [
                {
                    text: 'eine kommunistische <span class="keyword" title="republic">Republik</span>.',
                    translation: 'a communist republic.',
                    correct: false
                },
                {
                    text: 'ein demokratischer und sozialer <span class="keyword" title="federal state">Bundesstaat</span>.',
                    translation: 'a democratic and social federal state.',
                    correct: true
                },
                {
                    text: 'eine kapitalistische und soziale <span class="keyword" title="monarchy">Monarchie</span>.',
                    translation: 'a capitalist and social monarchy.',
                    correct: false
                },
                {
                    text: 'ein sozialer und sozialistischer <span class="keyword" title="federal state">Bundesstaat</span>.',
                    translation: 'a social and socialist federal state.',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Republik: 'republic',
                Bundesstaat: 'federal state',
                Monarchie: 'monarchy'
            }
        },
        {
            id: 27,
            question: 'Deutschland ist',
            translation: 'Germany is ...',
            context: 'This question is about basic knowledge about the German political system. It examines what form of government the Federal Republic of Germany has and how the state is structured. Such questions often come up in politics lessons or naturalization tests to test the understanding of democracy, state organization and historical developments in Germany.',
            answers: [
                {
                    text: 'ein sozialistischer <span class="keyword" title="state">Staat</span>.',
                    translation: 'a socialist state.',
                    correct: false
                },
                {
                    text: 'ein <span class="keyword" title="federal state">Bundesstaat</span>.',
                    translation: 'a federal state.',
                    correct: true
                },
                {
                    text: 'eine <span class="keyword" title="dictatorship">Diktatur</span>.',
                    translation: 'a dictatorship.',
                    correct: false
                },
                {
                    text: 'eine <span class="keyword" title="monarchy">Monarchie</span>.',
                    translation: 'a monarchy.',
                    correct: false
                }
            ],
            category: 'Geography & Structure',
            keywords: {
                Staat: 'state',
                Bundesstaat: 'federal state',
                Diktatur: 'dictatorship',
                Monarchie: 'monarchy'
            }
        },
        {
            id: 28,
            question: 'Wer wählt in Deutschland die <span class="keyword" title="members of parliament">Abgeordneten</span> zum <span class="keyword" title="Federal Parliament">Bundestag</span>?',
            translation: 'Who elects the members of the Bundestag in Germany?',
            context: 'The question relates to the political system of the Federal Republic of Germany and the democratic elections. The Bundestag is the most important legislative body at the federal level. In order to understand how democracy works, it is important to know who is entitled to vote in Bundestag elections and which groups have no direct influence on the election of deputies.',
            answers: [
                {
                    text: 'das Militär',
                    translation: 'the military',
                    correct: false
                },
                {
                    text: 'die Wirtschaft',
                    translation: 'the economy',
                    correct: false
                },
                {
                    text: 'das wahlberechtigte <span class="keyword" title="people">Volk</span>',
                    translation: 'the people entitled to vote',
                    correct: true
                },
                {
                    text: 'die Verwaltung',
                    translation: 'the administration',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Abgeordneten: 'members of parliament',
                Bundestag: 'Federal Parliament',
                Volk: 'people'
            }
        },
        {
            id: 29,
            question: 'Welches Tier ist das Wappentier der Bundesrepublik Deutschland?',
            translation: 'Which animal is the heraldic animal of the Federal Republic of Germany?',
            context: 'The question refers to state symbols and the heraldry of Germany. Many countries have a heraldic animal that symbolizes their history, values, or power. To choose the right option, basic knowledge of the German national coat of arms and its historical significance is helpful.',
            answers: [
                {
                    text: 'Löwe',
                    translation: 'Leo',
                    correct: false
                },
                {
                    text: '<span class="keyword" title="eagle">Adler</span>',
                    translation: 'Eagle',
                    correct: true
                },
                {
                    text: 'Bär',
                    translation: 'Bear',
                    correct: false
                },
                {
                    text: 'Pferd',
                    translation: 'Horse',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {
                Adler: 'eagle'
            }
        },
        {
            id: 30,
            question: 'Was ist kein Merkmal unserer <span class="keyword" title="democracy">Demokratie</span>?',
            translation: 'What is not a feature of our democracy?',
            context: 'The following question refers to basic characteristics of a democratic form of government. It is intended to help check whether it is known which principles and rights are typical of a democracy and which are more likely to contradict it. Various characteristics are mentioned for this, only one of which is not a hallmark of a democracy.',
            answers: [
                {
                    text: 'regelmäßige <span class="keyword" title="elections">Wahlen</span>',
                    translation: 'Regular elections',
                    correct: false
                },
                {
                    text: 'Pressezensur',
                    translation: 'Press censorship',
                    correct: true
                },
                {
                    text: '<span class="keyword" title="freedom of opinion">Meinungsfreiheit</span>',
                    translation: 'Freedom of expression',
                    correct: false
                },
                {
                    text: 'verschiedene <span class="keyword" title="parties">Parteien</span>',
                    translation: 'different parties',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Demokratie: 'democracy',
                Wahlen: 'elections',
                Meinungsfreiheit: 'freedom of opinion',
                Parteien: 'parties'
            }
        },
        {
            id: 31,
            question: 'Die Zusammenarbeit von <span class="keyword" title="parties">Parteien</span> zur Bildung einer <span class="keyword" title="government">Regierung</span> nennt man in Deutschland ...',
            translation: 'The cooperation of parties to form a government is called in Germany ...',
            context: 'In Germany, the political system consists of several parties that are represented in parliament. After an election, often no single party has an absolute majority. In order to become capable of governing, parties work together and reach joint agreements on political goals and the distribution of offices. There is a fixed political term for this form of cooperation, which is sought in the question.',
            answers: [
                {
                    text: 'Einheit.',
                    translation: 'Unit',
                    correct: false
                },
                {
                    text: '<span class="keyword" title="coalition">Koalition</span>.',
                    translation: 'Coalition',
                    correct: true
                },
                {
                    text: 'Ministerium.',
                    translation: 'Ministry',
                    correct: false
                },
                {
                    text: '<span class="keyword" title="parliamentary group">Fraktion</span>.',
                    translation: 'Parliamentary group',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Regierung: 'government',
                Parteien: 'parties',
                Koalition: 'coalition',
                Fraktion: 'parliamentary group'
            }
        },
        {
            id: 32,
            question: 'Was ist keine staatliche Gewalt in Deutschland?',
            translation: 'What is not state authority in Germany?',
            context: 'In Germany, the political system is based on the principle of the separation of powers. State tasks are distributed to different areas in order to control power. Traditionally, a distinction is made between legislation, executive power and jurisdiction. In addition to these state powers, there is often talk of other social actors who have influence on politics and the public without being part of state power.',
            answers: [
                {
                    text: 'Gesetzgebung',
                    translation: 'Legislation',
                    correct: false
                },
                {
                    text: '<span class="keyword" title="government">Regierung</span>',
                    translation: 'Government',
                    correct: false
                },
                {
                    text: 'Presse',
                    translation: 'Press',
                    correct: true
                },
                {
                    text: 'Rechtsprechung',
                    translation: 'Case law',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Regierung: 'government'
            }
        },
        {
            id: 33,
            question: 'Welche Aussage ist richtig? In Deutschland ...',
            translation: 'Which statement is correct? In Germany ...',
            context: 'In Germany, the Basic Law regulates the relationship between state and religion. Historically, there have been close ties between church and state, but today a different principle applies. Freedom of religion, state neutrality and the rights of religious communities play an important role in this. In order to find the right statement, one must know how the state and religious communities relate to each other legally and what principles are laid down in German constitutional law.',
            answers: [
                {
                    text: 'sind <span class="keyword" title="state">Staat</span> und Religionsgemeinschaften voneinander getrennt.',
                    translation: 'state and religious communities are separated from each other',
                    correct: true
                },
                {
                    text: 'bilden die Religionsgemeinschaften den <span class="keyword" title="state">Staat</span>.',
                    translation: 'the religious communities form the state.',
                    correct: false
                },
                {
                    text: 'ist der <span class="keyword" title="state">Staat</span> abhängig von den Religionsgemeinschaften.',
                    translation: 'the state is dependent on the religious communities.',
                    correct: false
                },
                {
                    text: 'bilden <span class="keyword" title="state">Staat</span> und Religionsgemeinschaften eine Einheit.',
                    translation: 'state and religious communities form a unit.',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {
                Staat: 'state'
            }
        },
        {
            id: 34,
            question: 'Was ist Deutschland nicht?',
            translation: 'What is Germany not?',
            context: 'The question relates to the political system and the form of government in Germany. Germany is governed by the Basic Law and has certain basic characteristics such as democracy, the rule of law and social responsibility. In order to find the right answer, it should be considered which of the above-mentioned forms of government or characteristics does not apply to the Federal Republic of Germany.',
            answers: [
                {
                    text: 'eine <span class="keyword" title="democracy">Demokratie</span>',
                    translation: 'a democracy',
                    correct: false
                },
                {
                    text: 'ein <span class="keyword" title="constitutional state">Rechtsstaat</span>',
                    translation: 'a state governed by the rule of law',
                    correct: false
                },
                {
                    text: 'eine <span class="keyword" title="monarchy">Monarchie</span>',
                    translation: 'a monarchy',
                    correct: true
                },
                {
                    text: 'ein <span class="keyword" title="welfare state">Sozialstaat</span>',
                    translation: 'a welfare state',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Demokratie: 'democracy',
                Rechtsstaat: 'constitutional state',
                Monarchie: 'monarchy',
                Sozialstaat: 'welfare state'
            }
        },
        {
            id: 35,
            question: 'Womit finanziert der deutsche <span class="keyword" title="state">Staat</span> die <span class="keyword" title="social insurance">Sozialversicherung</span>?',
            translation: 'How does the German state finance social security?',
            context: 'The question relates to the German social security system, which includes central benefits such as health, pension, unemployment and long-term care insurance. In order to maintain these social security systems, the state needs regular revenues. In political and economic lessons, the sources of this funding and the role played by citizens and employers are often discussed.',
            answers: [
                {
                    text: 'Kirchensteuern',
                    translation: 'Church taxes',
                    correct: false
                },
                {
                    text: 'Sozialabgaben',
                    translation: 'Social security contributions',
                    correct: true
                },
                {
                    text: 'Spendengeldern',
                    translation: 'Donations',
                    correct: false
                },
                {
                    text: 'Vereinsbeiträgen',
                    translation: 'Association fees',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {
                Sozialversicherung: 'social insurance',
                Staat: 'state'
            }
        },
        {
            id: 36,
            question: 'Welche Maßnahme schafft in Deutschland soziale Sicherheit?',
            translation: 'What measure creates social security in Germany?',
            context: 'In Germany, social security refers to state measures that protect people from basic life risks, such as illness, unemployment or old age. There are different types of insurance for this. Some are part of the statutory social system, others serve the private protection of property or against claims for damages. The aim of the question is to identify which of the above-mentioned insurances contributes to the social security of the population.',
            answers: [
                {
                    text: 'die <span class="keyword" title="health insurance">Krankenversicherung</span>',
                    translation: 'health insurance',
                    correct: true
                },
                {
                    text: 'die Autoversicherung',
                    translation: 'Car insurance',
                    correct: false
                },
                {
                    text: 'die Gebäudeversicherung',
                    translation: 'Buildings insurance',
                    correct: false
                },
                {
                    text: 'die Haftpflichtversicherung',
                    translation: 'Liability insurance',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {
                Krankenversicherung: 'health insurance'
            }
        },
        {
            id: 37,
            question: 'Wie werden die Regierungschefs / Regierungschefinnen der meisten <span class="keyword" title="federal states">Bundesländer</span> in Deutschland genannt?',
            translation: 'What are the heads of government of most federal states called in Germany?',
            context: 'In Germany, the state is federally organized and consists of 16 federal states. Each state has its own state government with an elected leader. Depending on the historical and political tradition, this person may have different official titles. The aim of the question is to identify the most common term for the heads of government of most federal states.',
            answers: [
                {
                    text: 'Erster <span class="keyword" title="minister">Minister</span> / Erste <span class="keyword" title="minister (female)">Ministerin</span>',
                    translation: 'First Minister',
                    correct: false
                },
                {
                    text: 'Premierminister / Premierministerin',
                    translation: 'Prime Minister',
                    correct: false
                },
                {
                    text: 'Senator / Senatorin',
                    translation: 'Senator/Senatorin',
                    correct: false
                },
                {
                    text: '<span class="keyword" title="state premier">Ministerpräsident</span> / <span class="keyword" title="state premier (female)">Ministerpräsidentin</span>',
                    translation: 'Prime Minister',
                    correct: true
                }
            ],
            category: 'Geography & Structure',
            keywords: {
                'Bundesländer': 'federal states',
                Ministerin: 'minister (female)',
                Minister: 'minister',
                'Ministerpräsidentin': 'state premier (female)',
                'Ministerpräsident': 'state premier'
            }
        },
        {
            id: 38,
            question: 'Die Bundesrepublik Deutschland ist ein demokratischer und sozialer ...',
            translation: 'The Federal Republic of Germany is a democratic and social ...',
            context: 'The question relates to Germany\'s political system and its constitutional classification. It ties in with the principles laid down in the Basic Law, which describe how the state is structured and how power is distributed between the federal and state governments. In order to find the right answer, basic knowledge of forms of government, federalism and the constitution of the Federal Republic of Germany is required.',
            answers: [
                {
                    text: 'Staatenverbund.',
                    translation: 'Union of States.',
                    correct: false
                },
                {
                    text: '<span class="keyword" title="federal state">Bundesstaat</span>.',
                    translation: 'Federal State.',
                    correct: true
                },
                {
                    text: 'Staatenbund.',
                    translation: 'Confederation of States.',
                    correct: false
                },
                {
                    text: 'Zentralstaat.',
                    translation: 'Central government.',
                    correct: false
                }
            ],
            category: 'Geography & Structure',
            keywords: {
                Bundesstaat: 'federal state'
            }
        },
        {
            id: 39,
            question: 'Was hat jedes deutsche <span class="keyword" title="federal state">Bundesland</span>?',
            translation: 'What does each German state have?',
            context: 'Germany is a federal state consisting of 16 federal states. These federal states have different responsibilities and rights within the political system. In order to understand which tasks and institutions are regulated at the state level and which are at the federal level, it is important to know the basic structure of the German state structure. The question tests this knowledge.',
            answers: [
                {
                    text: 'einen eigenen Außenminister / eine eigene Außenministerin',
                    translation: 'its own Foreign Minister',
                    correct: false
                },
                {
                    text: 'eine eigene Währung',
                    translation: 'a currency of its own',
                    correct: false
                },
                {
                    text: 'eine eigene Armee',
                    translation: 'an army of its own',
                    correct: false
                },
                {
                    text: 'eine eigene <span class="keyword" title="government">Regierung</span>',
                    translation: 'a government of its own',
                    correct: true
                }
            ],
            category: 'Geography & Structure',
            keywords: {
                Bundesland: 'federal state',
                Regierung: 'government'
            }
        },
        {
            id: 40,
            question: 'Mit welchen Worten beginnt die deutsche <span class="keyword" title="national anthem">Nationalhymne</span>?',
            translation: 'With which words does the German national anthem begin?',
            context: 'The question refers to the German national anthem and its historical background. She checks which sequence of words opens the anthem. It is important to know that the national anthem comes from the "Deutschlandlied" and only a certain verse is officially sung.',
            answers: [
                {
                    text: 'Völker, hört die Signale ...',
                    translation: 'Peoples, listen to the signals...',
                    correct: false
                },
                {
                    text: 'Einigkeit und Recht und Freiheit ...',
                    translation: 'Unity and justice and freedom...',
                    correct: true
                },
                {
                    text: 'Freude schöner Götterfunken ...',
                    translation: 'Joy, beautiful spark of the gods...',
                    correct: false
                },
                {
                    text: 'Deutschland einig <span class="keyword" title="fatherland">Vaterland</span> ...',
                    translation: 'Germany united fatherland...',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {
                Nationalhymne: 'national anthem',
                Vaterland: 'fatherland'
            }
        },
        {
            id: 41,
            question: 'Warum gibt es in einer <span class="keyword" title="democracy">Demokratie</span> mehr als eine <span class="keyword" title="party">Partei</span>?',
            translation: 'Why is there more than one party in a democracy?',
            context: 'The question relates to fundamental principles of a democracy. In many democratic states, there are several political parties that have different goals, values and social ideas. Citizens can decide which parties they support through elections. Understanding the role of parties helps to better classify democratic processes, political diversity and the participation of the population.',
            answers: [
                {
                    text: 'weil dadurch die unterschiedlichen Menungen der <span class="keyword" title="citizen">Bürger</span> und Bürgerinnen vertreten werden',
                    translation: 'weil dadurch die unterschiedlichen Menungen der Bürger und Bürgerinnen vertreten werden',
                    correct: true
                },
                {
                    text: 'damit Bestechung in der Politik begrenzt wird',
                    translation: 'to limit bribery in politics',
                    correct: false
                },
                {
                    text: 'um politische Demonstrationen zu verhindern',
                    translation: 'to prevent political demonstrations',
                    correct: false
                },
                {
                    text: 'um wirtschaftlichen Wettbewerb anzuregen',
                    translation: 'to stimulate economic competition',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Demokratie: 'democracy',
                Partei: 'party',
                'Bürger': 'citizen'
            }
        },
        {
            id: 42,
            question: 'Wer beschließt in Deutschland ein neues <span class="keyword" title="law">Gesetz</span>?',
            translation: 'Who passes a new law in Germany?',
            context: 'In Germany, important political decisions are made by various state bodies. These include institutions that ensure order and law, as well as bodies that set political guidelines or apply laws. In order to understand how new laws are created, it is important to know what the tasks of these bodies are and what role they play in the political system. The following question relates to which body is responsible for adopting new laws.',
            answers: [
                {
                    text: 'die <span class="keyword" title="government">Regierung</span>',
                    translation: 'the government',
                    correct: false
                },
                {
                    text: 'das <span class="keyword" title="parliament">Parlament</span>',
                    translation: 'Parliament',
                    correct: true
                },
                {
                    text: 'die Gerichte',
                    translation: 'the dishes',
                    correct: false
                },
                {
                    text: 'die Polizei',
                    translation: 'the police',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {
                Gesetz: 'law',
                Regierung: 'government',
                Parlament: 'parliament'
            }
        },
        {
            id: 43,
            question: 'Wann kann in Deutschland eine <span class="keyword" title="party">Partei</span> verboten werden?',
            translation: 'When can a party be banned in Germany?',
            context: 'In Germany, there are clear legal rules that determine the circumstances under which a political party can be banned. These rules serve to protect the free democratic basic order and are intended to ensure that parties do not endanger democratic principles themselves. The following question refers to these legal bases and examines the understanding of which requirements must be met for a party ban.',
            answers: [
                {
                    text: 'wenn ihr Wahlkampf zu teuer ist',
                    translation: 'if their election campaign is too expensive',
                    correct: false
                },
                {
                    text: 'wenn sie gegen die <span class="keyword" title="constitution">Verfassung</span> kämpft',
                    translation: 'when it fights against the constitution',
                    correct: true
                },
                {
                    text: 'wenn sie Kritik am <span class="keyword" title="head of state">Staatsoberhaupt</span> äußert',
                    translation: 'when she expresses criticism of the head of state',
                    correct: false
                },
                {
                    text: 'wenn ihr Programm eine neue Richtung vorschlägt',
                    translation: 'when their program suggests a new direction',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Partei: 'party',
                Verfassung: 'constitution',
                Staatsoberhaupt: 'head of state'
            }
        },
        {
            id: 44,
            question: 'Wen kann man als <span class="keyword" title="citizen">Bürger</span> / <span class="keyword" title="citizen (female)">Bürgerin</span> in Deutschland nicht direkt <span class="keyword" title="to vote/elect">wählen</span>?',
            translation: 'Who cannot be elected directly as a citizen in Germany?',
            context: 'The question relates to the electoral system in Germany and the different levels of political representation. Citizens have different opportunities to influence different elections. Some political offices are elected directly by the population, others indirectly by elected bodies. In order to find the right answer, one must know how federal, state and European institutions are composed and which of them are directly determined by a vote of the population.',
            answers: [
                {
                    text: '<span class="keyword" title="member of parliament">Abgeordnete</span> des <span class="keyword" title="EU (European Union)">EU</span>-Parlaments',
                    translation: 'Members of the European Parliament',
                    correct: false
                },
                {
                    text: 'den Bundespräsidenten / die <span class="keyword" title="Federal President (female)">Bundespräsidentin</span>',
                    translation: 'the Federal President',
                    correct: true
                },
                {
                    text: '<span class="keyword" title="state parliament member">Landtagsabgeordnete</span>',
                    translation: 'Member of the State Parliament',
                    correct: false
                },
                {
                    text: 'Bundestagsabgeordnete',
                    translation: 'Members of the Bundestag',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                'Bürgerin': 'citizen (female)',
                'wählen': 'to vote/elect',
                'Bürger': 'citizen',
                Abgeordnete: 'member of parliament',
                EU: 'EU (European Union)',
                'Bundespräsidentin': 'Federal President (female)',
                Landtagsabgeordnete: 'state parliament member'
            }
        },
        {
            id: 45,
            question: 'Zu welcher Versicherung gehört die <span class="keyword" title="long-term care insurance">Pflegeversicherung</span>?',
            translation: 'To which insurance does long-term care insurance belong?',
            context: 'The question relates to the German insurance system. There are different types of insurance in Germany, for example private and public insurance. Some insurance policies are designed to cover personal risks, while others are part of state social security. In order to find the right answer, it is important to know which insurances are regulated by law and what tasks they have, especially in connection with illness, care and social security.',
            answers: [
                {
                    text: '<span class="keyword" title="social insurance">Sozialversicherung</span>',
                    translation: 'Social Security',
                    correct: true
                },
                {
                    text: 'Unfallversicherung',
                    translation: 'Accident insurance',
                    correct: false
                },
                {
                    text: 'Hausratversicherung',
                    translation: 'Household contents insurance',
                    correct: false
                },
                {
                    text: 'Haftpflicht- und Feuerversicherung',
                    translation: 'Liability and fire insurance',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {
                Pflegeversicherung: 'long-term care insurance',
                Sozialversicherung: 'social insurance'
            }
        },
        {
            id: 46,
            question: 'Der deutsche <span class="keyword" title="state">Staat</span> hat viele Aufgaben. Welche Aufgabe gehört dazu?',
            translation: 'The German state has many tasks. What task does this involve?',
            context: 'The question relates to the tasks of the German state and tests knowledge about state responsibility. In Germany, the state takes on certain tasks to organize coexistence and ensure people\'s quality of life. This includes, above all, public services and infrastructure. Other activities, on the other hand, are carried out by private companies and are not part of the core tasks of the state.',
            answers: [
                {
                    text: 'Er baut Straßen und Schulen.',
                    translation: 'He builds roads and schools.',
                    correct: true
                },
                {
                    text: 'Er verkauft Lebensmittel und Kleidung.',
                    translation: 'He sells food and clothing.',
                    correct: false
                },
                {
                    text: 'Er versorgt alle Einwohner und Einwohnerinnen kostenlos mit Zeitungen.',
                    translation: 'It provides all residents with newspapers free of charge.',
                    correct: false
                },
                {
                    text: 'Er produziert Autos und Busse.',
                    translation: 'He produces cars and buses.',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {
                Staat: 'state'
            }
        },
        {
            id: 47,
            question: 'Der deutsche <span class="keyword" title="state">Staat</span> hat viele Aufgaben. Welche Aufgabe gehört nicht dazu?',
            translation: 'The German state has many tasks. What task is not part of it?',
            context: 'Political education is about understanding what tasks the state takes on. These include social services, cultural promotion and support for certain areas of society. However, some offers are not part of the state\'s obligations, but are in the private sector. The following question tests your knowledge of which services the German state typically provides and which are not part of its tasks.',
            answers: [
                {
                    text: 'Er bezahlt für alle Staatsangehörigen Urlaubsreisen.',
                    translation: 'It pays for vacation trips for all nationals.',
                    correct: true
                },
                {
                    text: 'Er zahlt Kindergeld.',
                    translation: 'He pays child benefit.',
                    correct: false
                },
                {
                    text: 'Er unterstützt Museen.',
                    translation: 'He supports museums.',
                    correct: false
                },
                {
                    text: 'Er fördert Sportler und Sportlerinnen.',
                    translation: 'It promotes athletes.',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {
                Staat: 'state'
            }
        },
        {
            id: 48,
            question: 'Welches Organ gehört nicht zu den Verfassungsorganen Deutschlands?',
            translation: 'Which body is not one of the constitutional organs of Germany?',
            context: 'The question relates to the political system of the Federal Republic of Germany and tests knowledge about the so-called constitutional organs. Constitutional organs are state institutions that are laid down in the Basic Law and have central tasks in the formation and implementation of the state\'s will. In the multiple-choice question, various institutions are to be examined to determine whether they officially belong to these constitutional bodies or not.',
            answers: [
                {
                    text: 'der <span class="keyword" title="Federal Council">Bundesrat</span>',
                    translation: 'the Federal Council',
                    correct: false
                },
                {
                    text: 'der <span class="keyword" title="Federal President">Bundespräsident</span> / die <span class="keyword" title="Federal President (female)">Bundespräsidentin</span>',
                    translation: 'der Bundespräsident / die Bundespräsidentin',
                    correct: false
                },
                {
                    text: 'die Bürgerversammlung',
                    translation: 'the citizens\' assembly',
                    correct: true
                },
                {
                    text: 'die <span class="keyword" title="government">Regierung</span>',
                    translation: 'the government',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Bundesrat: 'Federal Council',
                'Bundespräsidentin': 'Federal President (female)',
                'Bundespräsident': 'Federal President',
                Regierung: 'government'
            }
        },
        {
            id: 49,
            question: 'Wer bestimmt in Deutschland die Schulpolitik?',
            translation: 'Who determines school policy in Germany?',
            context: 'In Germany, education is an important part of the political system. Due to the federal structure, responsibilities are divided between the federal government, the states and other actors. Especially in the school sector, there are clear legal regulations that determine who makes decisions about curricula, school types and organization. In order to find the right answer, you have to know how the German state is structured and which level takes on which tasks.',
            answers: [
                {
                    text: 'die Lehrer und Lehrerinnen',
                    translation: 'the teachers',
                    correct: false
                },
                {
                    text: 'die <span class="keyword" title="federal states">Bundesländer</span>',
                    translation: 'the federal states',
                    correct: true
                },
                {
                    text: 'das Familienministerium',
                    translation: 'the Ministry of Family Affairs',
                    correct: false
                },
                {
                    text: 'die Universitäten',
                    translation: 'Universities',
                    correct: false
                }
            ],
            category: 'Geography & Structure',
            keywords: {
                'Bundesländer': 'federal states'
            }
        },
        {
            id: 50,
            question: 'Die Wirtschaftsform in Deutschland nennt man ...',
            translation: 'The economic system in Germany is called ...',
            context: 'The question refers to basic economic forms that describe how production, distribution and state intervention are organised. After the Second World War, Germany developed its own economic model that combines elements of the market and the state. To find the right answer, it is important to know the terms of the different economic systems as well as their typical characteristics.',
            answers: [
                {
                    text: 'freie Zentralwirtschaft.',
                    translation: 'free central economy.',
                    correct: false
                },
                {
                    text: 'soziale Marktwirtschaft.',
                    translation: 'social market economy.',
                    correct: true
                },
                {
                    text: 'gelenkte Zentralwirtschaft.',
                    translation: 'controlled central economy.',
                    correct: false
                },
                {
                    text: 'Planwirtschaft.',
                    translation: 'Planned economy.',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {}
        },
        {
            id: 51,
            question: 'Zu einem demokratischen <span class="keyword" title="constitutional state">Rechtsstaat</span> gehört es nicht, dass ...',
            translation: 'It is not part of a democratic state under the rule of law that ...',
            context: 'The question relates to the basic characteristics of a democratic state based on the rule of law. In such a state, the rights and freedoms of citizens are protected by law, state action is bound by law and order, and there are clear rules for dealing with crimes and power. The answer options describe various situations, from permissible behavior of citizens to unlawful actions by state or private actors.',
            answers: [
                {
                    text: 'Menschen sich kritisch über die <span class="keyword" title="government">Regierung</span> äußern können.',
                    translation: 'People can express themselves critically about the government.',
                    correct: false
                },
                {
                    text: '<span class="keyword" title="citizen">Bürger</span> friedlich demonstrieren gehen dürfen.',
                    translation: 'citizens are allowed to demonstrate peacefully.',
                    correct: false
                },
                {
                    text: 'Menschen von einer Privatpolizei ohne Grund verhaftet werden.',
                    translation: 'people are arrested by a private police force for no reason.',
                    correct: true
                },
                {
                    text: 'jemand ein Verbrechen begeht und deshalb verhaftet wird.',
                    translation: 'someone commits a crime and is arrested for it.',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {
                Rechtsstaat: 'constitutional state',
                Regierung: 'government',
                'Bürger': 'citizen'
            }
        },
        {
            id: 52,
            question: 'Was bedeutet <span class="keyword" title="popular sovereignty">Volkssouveränität</span>? Alle Staatsgewalt geht vom ...',
            translation: 'What does "popular sovereignty" mean? All state power proceeds from ...',
            context: 'The question relates to fundamental principles of the German state order. Political education explains where state power in a democracy comes from. Concepts such as the Basic Law, democratic elections and the role of citizens are central to this. The term "popular sovereignty" plays an important role in understanding how political decisions are legitimized and which institutions or individuals are the bearers of state power.',
            answers: [
                {
                    text: 'Volke aus.',
                    translation: 'Volke.',
                    correct: true
                },
                {
                    text: '<span class="keyword" title="Federal Parliament">Bundestag</span> aus.',
                    translation: 'Bundestag.',
                    correct: false
                },
                {
                    text: 'preußischen König aus.',
                    translation: 'Prussian king.',
                    correct: false
                },
                {
                    text: '<span class="keyword" title="Federal Constitutional Court">Bundesverfassungsgericht</span> aus.',
                    translation: 'Federal Constitutional Court.',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                'Volkssouveränität': 'popular sovereignty',
                Bundestag: 'Federal Parliament',
                Bundesverfassungsgericht: 'Federal Constitutional Court'
            }
        },
        {
            id: 53,
            question: 'Was bedeutet <span class="keyword" title="constitutional state">Rechtsstaat</span> in Deutschland?',
            translation: 'What does "rule of law" mean in Germany?',
            context: 'The question comes from the field of political education. It refers to a central principle of the German Basic Law. The term "rule of law" describes how the state and government must act and the relationship between the state, laws and citizens. In order to find the right answer, one should consider what role laws play in state action in Germany.',
            answers: [
                {
                    text: 'Der <span class="keyword" title="state">Staat</span> hat Recht.',
                    translation: 'The state is right.',
                    correct: false
                },
                {
                    text: 'Es gibt nur rechte <span class="keyword" title="parties">Parteien</span>.',
                    translation: 'There are only right-wing parties.',
                    correct: false
                },
                {
                    text: 'Die <span class="keyword" title="citizen">Bürger</span> und Bürgerinnen entscheiden über <span class="keyword" title="laws">Gesetze</span>.',
                    translation: 'The citizens decide on laws.',
                    correct: false
                },
                {
                    text: 'Der <span class="keyword" title="state">Staat</span> muss die <span class="keyword" title="laws">Gesetze</span> einhalten.',
                    translation: 'The state must comply with the law.',
                    correct: true
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Rechtsstaat: 'constitutional state',
                Staat: 'state',
                Parteien: 'parties',
                Gesetze: 'laws',
                'Bürger': 'citizen'
            }
        },
        {
            id: 54,
            question: 'Was ist keine staatliche Gewalt in Deutschland?',
            translation: 'What is not state authority in Germany?',
            context: 'The question relates to the German political system and the principle of the separation of powers. In a democracy, state tasks are distributed among different powers in order to prevent abuse of power. Usually, a distinction is made between certain state powers with clear functions in the legislative, executive and judicial areas. The possible answers contain terms, not all of which belong to these recognised state authorities.',
            answers: [
                {
                    text: '<span class="keyword" title="legislative">Legislative</span>',
                    translation: 'Legislative',
                    correct: false
                },
                {
                    text: '<span class="keyword" title="judiciary">Judikative</span>',
                    translation: 'Judiciary',
                    correct: false
                },
                {
                    text: '<span class="keyword" title="executive">Exekutive</span>',
                    translation: 'Executive',
                    correct: false
                },
                {
                    text: 'Direktive',
                    translation: 'Directive',
                    correct: true
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Legislative: 'legislative',
                Judikative: 'judiciary',
                Exekutive: 'executive'
            }
        },
        {
            id: 55,
            question: 'Was zeigt dieses Bild?',
            translation: 'What does this picture show?',
            context: 'The question refers to a picture of an important state building in Germany. On the basis of architectural features, the surroundings and well-known landmarks, it should be possible to identify which central constitutional body or political institution is represented. The answer options refer to important seats of government and institutions in various German cities. The aim is to correctly assign the depicted building.',
            answers: [
                {
                    text: 'den Bundestagssitz in Berlin',
                    translation: 'the seat of the Bundestag in Berlin',
                    correct: true
                },
                {
                    text: 'das <span class="keyword" title="Federal Constitutional Court">Bundesverfassungsgericht</span> in Karlsruhe',
                    translation: 'the Federal Constitutional Court in Karlsruhe',
                    correct: false
                },
                {
                    text: 'das Bundesratsgebäude in Berlin',
                    translation: 'the Bundesrat building in Berlin',
                    correct: false
                },
                {
                    text: 'das Bundeskanzleramt in Berlin',
                    translation: 'the Federal Chancellery in Berlin',
                    correct: false
                }
            ],
            category: 'Society & Law',
            image: 'images/q148.197dc41c.png',
            keywords: {
                Bundesverfassungsgericht: 'Federal Constitutional Court'
            }
        },
        {
            id: 56,
            question: 'Welches Amt gehört in Deutschland zur Gemeindeverwaltung?',
            translation: 'Which office belongs to the municipal administration in Germany?',
            context: 'In Germany, there are different levels of government such as the federal, state and local governments. Each level has its own authorities and offices with specific tasks. The question relates to which of these offices belong to the administration of a municipality. To do this, it is important to know which authorities are organised locally and are directly responsible for the citizens of a city or municipality, in contrast to church or nationwide institutions.',
            answers: [
                {
                    text: 'Pfarramt',
                    translation: 'Parish office',
                    correct: false
                },
                {
                    text: '<span class="keyword" title="public order office">Ordnungsamt</span>',
                    translation: 'Public Order Office',
                    correct: true
                },
                {
                    text: 'Finanzamt',
                    translation: 'Tax office',
                    correct: false
                },
                {
                    text: 'Auswärtiges Amt',
                    translation: 'Federal Foreign Office',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {
                Ordnungsamt: 'public order office'
            }
        },
        {
            id: 57,
            question: 'Wer wird meistens zum Präsidenten / zur Präsidentin des Deutschen Bundestages gewählt',
            translation: 'Who is usually elected President of the German Bundestag?',
            context: 'The German Bundestag is the parliament of the Federal Republic of Germany. At the beginning of each new legislative period, the Bundestag elects a President from among its members. This office has an important role: the President of the Bundestag chairs the sessions, ensures compliance with the rules of procedure and represents the Bundestag externally. Traditionally, there are certain political customs that help to understand who is proposed and elected for this office.',
            answers: [
                {
                    text: 'der / die älteste <span class="keyword" title="member of parliament">Abgeordnete</span> im <span class="keyword" title="parliament">Parlament</span>',
                    translation: 'the oldest member of parliament',
                    correct: false
                },
                {
                    text: 'der <span class="keyword" title="state premier">Ministerpräsident</span> / die <span class="keyword" title="state premier (female)">Ministerpräsidentin</span> des größten Bundeslandes',
                    translation: 'the Minister-President of the largest federal state',
                    correct: false
                },
                {
                    text: 'ein ehemaliger <span class="keyword" title="Federal Chancellor">Bundeskanzler</span> / eine ehemalige <span class="keyword" title="Federal Chancellor (female)">Bundeskanzlerin</span>',
                    translation: 'a former Federal Chancellor',
                    correct: false
                },
                {
                    text: 'ein Abgeordneter / eine <span class="keyword" title="member of parliament">Abgeordnete</span> der stärksten <span class="keyword" title="parliamentary group">Fraktion</span>',
                    translation: 'ein Abgeordneter / eine Abgeordnete der stärksten Fraktion',
                    correct: true
                }
            ],
            category: 'Society & Law',
            keywords: {
                Abgeordnete: 'member of parliament',
                Parlament: 'parliament',
                'Ministerpräsidentin': 'state premier (female)',
                'Ministerpräsident': 'state premier',
                Bundeskanzlerin: 'Federal Chancellor (female)',
                Bundeskanzler: 'Federal Chancellor',
                Fraktion: 'parliamentary group'
            }
        },
        {
            id: 58,
            question: 'Wer ernennt in Deutschland die <span class="keyword" title="minister">Minister</span> / die Ministerinnen der <span class="keyword" title="Federal Government">Bundesregierung</span>?',
            translation: 'Who appoints the ministers of the Federal Government in Germany?',
            context: 'The question relates to the political system of the Federal Republic of Germany and the formation of the Federal Government. It examines knowledge of the competences of the most important constitutional organs. In order to answer them, it is necessary to know what role individual state organs play in the appointment of members of the Federal Government and how the formal procedures are regulated under the Basic Law.',
            answers: [
                {
                    text: 'der Präsident / die Präsidentin des Bundesverfassungsgerichtes',
                    translation: 'the President of the Federal Constitutional Court',
                    correct: false
                },
                {
                    text: 'der <span class="keyword" title="Federal President">Bundespräsident</span> / die <span class="keyword" title="Federal President (female)">Bundespräsidentin</span>',
                    translation: 'the President of the Swiss Confederation',
                    correct: true
                },
                {
                    text: 'der Bundesratspräsident / die Bundesratspräsidentin',
                    translation: 'the President of the Bundesrat',
                    correct: false
                },
                {
                    text: 'der Bundestagspräsident / die Bundestagspräsidentin',
                    translation: 'der Bundestagspräsident / die Bundestagspräsidentin',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Bundesregierung: 'Federal Government',
                Minister: 'minister',
                'Bundespräsidentin': 'Federal President (female)',
                'Bundespräsident': 'Federal President'
            }
        },
        {
            id: 59,
            question: 'Welche <span class="keyword" title="parties">Parteien</span> wurden in Deutschland 2007 zur <span class="keyword" title="party">Partei</span> Die Linke?',
            translation: 'Which parties merged to form the party "Die Linke" in Germany in 2007?',
            context: 'Die Linke (The Left) was founded in 2007 by the merger of PDS (successor to the SED of the GDR) and WASG.',
            answers: [
                {
                    text: 'CDU und SSW',
                    translation: 'CDU und SSW',
                    correct: false
                },
                {
                    text: 'PDS und WASG',
                    translation: 'PDS and WASG',
                    correct: true
                },
                {
                    text: 'CSU und FDP',
                    translation: 'CSU und FDP',
                    correct: false
                },
                {
                    text: 'Bündnis 90/Die Grünen und SPD',
                    translation: 'Bündnis 90/Die Grünen und SPD',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Parteien: 'parties',
                Partei: 'party'
            }
        },
        {
            id: 60,
            question: 'In Deutschland gehören der <span class="keyword" title="Federal Parliament">Bundestag</span> und der <span class="keyword" title="Federal Council">Bundesrat</span> zur ...',
            translation: 'In Germany, the Bundestag and the Bundesrat are part of the ...',
            context: 'The question comes from the field of politics and civics. It refers to the German political system and the separation of powers. In Germany, state power is divided into different areas to ensure control and balance. These areas are called legislative, executive and judiciary. The Bundestag and Bundesrat are important constitutional bodies whose task and classification in this system is questioned here.',
            answers: [
                {
                    text: '<span class="keyword" title="executive">Exekutive</span>.',
                    translation: 'Executive',
                    correct: false
                },
                {
                    text: '<span class="keyword" title="legislative">Legislative</span>.',
                    translation: 'Legislative',
                    correct: true
                },
                {
                    text: 'Direktive.',
                    translation: 'Directive',
                    correct: false
                },
                {
                    text: '<span class="keyword" title="judiciary">Judikative</span>.',
                    translation: 'Judiciary',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Bundestag: 'Federal Parliament',
                Bundesrat: 'Federal Council',
                Exekutive: 'executive',
                Legislative: 'legislative',
                Judikative: 'judiciary'
            }
        },
        {
            id: 61,
            question: 'Was bedeutet „<span class="keyword" title="popular sovereignty">Volkssouveränität</span>“?',
            translation: 'What does "popular sovereignty" mean?',
            context: 'The question relates to a central principle of German democracy, which is anchored in the Basic Law. "Popular sovereignty" describes who emanates state power and who ultimately has political legitimacy. In order to find the right answer, it is important to know how democratic decisions are made and what role the people play in the German political system.',
            answers: [
                {
                    text: 'Der König / die Königin herrscht über das <span class="keyword" title="people">Volk</span>.',
                    translation: 'The king/queen rules over the people.',
                    correct: false
                },
                {
                    text: 'Das <span class="keyword" title="Federal Constitutional Court">Bundesverfassungsgericht</span> steht über der <span class="keyword" title="constitution">Verfassung</span>.',
                    translation: 'The Federal Constitutional Court stands above the constitution.',
                    correct: false
                },
                {
                    text: 'Die Interessenverbände üben die Souveränität zusammen mit der <span class="keyword" title="government">Regierung</span> aus.',
                    translation: 'The interest groups exercise sovereignty together with the government.',
                    correct: false
                },
                {
                    text: 'Die Staatsgewalt geht vom Volke aus.',
                    translation: 'State power emanates from the people.',
                    correct: true
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                'Volkssouveränität': 'popular sovereignty',
                Volk: 'people',
                Bundesverfassungsgericht: 'Federal Constitutional Court',
                Verfassung: 'constitution',
                Regierung: 'government'
            }
        },
        {
            id: 62,
            question: 'Wenn das <span class="keyword" title="parliament">Parlament</span> eines deutschen Bundeslandes gewählt wird, nennt man das ...',
            translation: 'When the parliament of a German state is elected, it is called ...',
            context: 'Germany is a federal state with several political levels. There is the federal government, the federal states (states), the municipalities and the European Union. Separate parliaments are elected at each level, and there are different names for them. The Bundestag is the parliament of the federal government, the state parliaments are the parliaments of the federal states, local representatives are elected locally, and the European Parliament at EU level. The question tests this basic knowledge of the political system.',
            answers: [
                {
                    text: 'Kommunalwahl.',
                    translation: 'Municipal elections.',
                    correct: false
                },
                {
                    text: 'Landtagswahl.',
                    translation: 'State election.',
                    correct: true
                },
                {
                    text: 'Europawahl.',
                    translation: 'European elections.',
                    correct: false
                },
                {
                    text: 'Bundestagswahl.',
                    translation: 'Bundestag election.',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Parlament: 'parliament'
            }
        },
        {
            id: 63,
            question: 'Was gehört in Deutschland nicht zur <span class="keyword" title="executive">Exekutive</span>?',
            translation: 'What does not belong to the executive branch in Germany?',
            context: 'In Germany, state authority is divided into different areas according to the Basic Law. This separation of powers is intended to prevent abuse of power and ensures that different institutions have different tasks. There are organs that make laws, others that execute laws, and still others that decide on right and wrong. The question relates to which of the institutions mentioned does not belong to the executive power.',
            answers: [
                {
                    text: 'die Polizei',
                    translation: 'the police',
                    correct: false
                },
                {
                    text: 'die Gerichte',
                    translation: 'the dishes',
                    correct: true
                },
                {
                    text: 'das Finanzamt',
                    translation: 'the tax office',
                    correct: false
                },
                {
                    text: 'die Ministerien',
                    translation: 'the ministries',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Exekutive: 'executive'
            }
        },
        {
            id: 64,
            question: 'Die Bundesrepublik Deutschland ist heute gegliedert in ...',
            translation: 'Today, the Federal Republic of Germany is divided into ...',
            context: 'The question relates to the state structure of the Federal Republic of Germany in the present. It requires basic knowledge of the political system, the federal organization and historical developments in Germany. There is a choice of possible answers that describe different forms of government or historical conditions, for example from the post-war period or from other countries. The aim is to examine how Germany is politically and administratively structured today.',
            answers: [
                {
                    text: 'vier Besatzungszonen.',
                    translation: 'four occupation zones.',
                    correct: false
                },
                {
                    text: 'einen Oststaat und einen Weststaat.',
                    translation: 'an eastern state and a western state.',
                    correct: false
                },
                {
                    text: '16 Kantone.',
                    translation: '16 cantons.',
                    correct: false
                },
                {
                    text: 'Bund, Länder und Kommunen.',
                    translation: 'federal, state and local governments.',
                    correct: true
                }
            ],
            category: 'Geography & Structure',
            keywords: {}
        },
        {
            id: 65,
            question: 'Es gehört nicht zu den Aufgaben des Deutschen Bundestages, ...',
            translation: 'It is not one of the tasks of the German Bundestag to ...',
            context: 'The question relates to the tasks and responsibilities of the German Bundestag in the political system of the Federal Republic of Germany. The Bundestag is the parliament elected by the people and plays a central role in legislation as well as in the control of the federal government. In order to understand the question, it is important to know which functions are assigned to the Bundestag according to the Basic Law and what tasks are assigned to other state bodies.',
            answers: [
                {
                    text: '<span class="keyword" title="laws">Gesetze</span> zu entwerfen.',
                    translation: 'Draft laws.',
                    correct: false
                },
                {
                    text: 'die <span class="keyword" title="Federal Government">Bundesregierung</span> zu kontrollieren.',
                    translation: 'to control the federal government.',
                    correct: false
                },
                {
                    text: 'den <span class="keyword" title="Federal Chancellor">Bundeskanzler</span> / die <span class="keyword" title="Federal Chancellor (female)">Bundeskanzlerin</span> zu <span class="keyword" title="to vote/elect">wählen</span>.',
                    translation: 'to elect the Federal Chancellor.',
                    correct: false
                },
                {
                    text: 'das Bundeskabinett zu bilden.',
                    translation: 'to form the Federal Cabinet.',
                    correct: true
                }
            ],
            category: 'Society & Law',
            keywords: {
                Gesetze: 'laws',
                Bundesregierung: 'Federal Government',
                Bundeskanzlerin: 'Federal Chancellor (female)',
                Bundeskanzler: 'Federal Chancellor',
                'wählen': 'to vote/elect'
            }
        },
        {
            id: 66,
            question: 'Wer schrieb den Text zur deutschen <span class="keyword" title="national anthem">Nationalhymne</span>?',
            translation: 'Who wrote the lyrics of the German national anthem?',
            context: 'Hoffmann von Fallersleben wrote the "Lied der Deutschen" in 1841. The third verse became the official German national anthem.',
            answers: [
                {
                    text: 'Friedrich von Schiller',
                    translation: 'Friedrich von Schiller',
                    correct: false
                },
                {
                    text: 'Clemens Brentano',
                    translation: 'Clemens Brentano',
                    correct: false
                },
                {
                    text: 'Johann Wolfgang von Goethe',
                    translation: 'Johann Wolfgang von Goethe',
                    correct: false
                },
                {
                    text: 'Heinrich Hoffmann von Fallersleben',
                    translation: 'Heinrich Hoffmann von Fallersleben',
                    correct: true
                }
            ],
            category: 'Culture & Symbols',
            keywords: {
                Nationalhymne: 'national anthem'
            }
        },
        {
            id: 67,
            question: 'Was ist in Deutschland vor allem eine Aufgabe der <span class="keyword" title="federal states">Bundesländer</span>?',
            translation: 'What is primarily a task of the federal states in Germany?',
            context: 'Germany is a federal state in which political responsibilities are divided between the federal government and the federal states. This division of tasks is regulated in the Basic Law and affects various policy areas such as education, security, the economy and international relations. The aim of the question is to examine which of these policy areas mainly falls under the responsibility of the federal states and is therefore shaped independently by them.',
            answers: [
                {
                    text: 'Verteidigungspolitik',
                    translation: 'Defence policy',
                    correct: false
                },
                {
                    text: 'Außenpolitik',
                    translation: 'Foreign policy',
                    correct: false
                },
                {
                    text: 'Wirtschaftspolitik',
                    translation: 'Economic policy',
                    correct: false
                },
                {
                    text: 'Schulpolitik',
                    translation: 'School policy',
                    correct: true
                }
            ],
            category: 'Geography & Structure',
            keywords: {
                'Bundesländer': 'federal states'
            }
        },
        {
            id: 68,
            question: 'Warum kontrolliert der <span class="keyword" title="state">Staat</span> in Deutschland das Schulwesen?',
            translation: 'Why does the state control the school system in Germany?',
            context: 'In Germany, the school system is part of the public service. Education is of great importance for democracy, equal opportunities and social participation. The organisation of schools is closely linked to state tasks and is regulated by law. The Basic Law, the federal structure with the federal states and state responsibility for educational standards and school supervision play an important role in this. This background knowledge helps to understand the question of the control of the school system.',
            answers: [
                {
                    text: 'weil es in Deutschland nur staatliche Schulen gibt',
                    translation: 'because there are only state schools in Germany',
                    correct: false
                },
                {
                    text: 'weil alle Schüler und Schülerinnen einen Schulabschluss haben müssen',
                    translation: 'because all pupils must have a school-leaving certificate',
                    correct: false
                },
                {
                    text: 'weil es in den Bundesländern verschiedene Schulen gibt',
                    translation: 'because there are different schools in the federal states',
                    correct: false
                },
                {
                    text: 'weil es nach dem <span class="keyword" title="Basic Law">Grundgesetz</span> seine Aufgabe ist',
                    translation: 'because it is his task according to the Basic Law',
                    correct: true
                }
            ],
            category: 'Society & Law',
            keywords: {
                Staat: 'state',
                Grundgesetz: 'Basic Law'
            }
        },
        {
            id: 69,
            question: 'Die Bundesrepublik Deutschland hat einen dreistufigen Verwaltungsaufbau. Wie heißt die unterste politische Stufe?',
            translation: 'The Federal Republic of Germany has a three-tier administrative structure. What is the name of the lowest political level?',
            context: 'The question relates to the state structure of the Federal Republic of Germany. Germany is a federal state whose administration and political organization are regulated at several levels. These levels have different roles and responsibilities, from national decision-making to local affairs. Within this system, there are three levels of political administration, and the question aims to determine which of them is the lowest level.',
            answers: [
                {
                    text: 'Stadträte',
                    translation: 'City councillors',
                    correct: false
                },
                {
                    text: 'Landräte',
                    translation: 'District administrators',
                    correct: false
                },
                {
                    text: 'Gemeinden und Kommunen',
                    translation: 'Municipalities',
                    correct: true
                },
                {
                    text: 'Bezirksämter',
                    translation: 'District offices',
                    correct: false
                }
            ],
            category: 'Geography & Structure',
            keywords: {}
        },
        {
            id: 70,
            question: 'Der deutsche <span class="keyword" title="Federal President">Bundespräsident</span> Gustav Heinemann gibt Helmut Schmidt 1974 die Ernennungsurkunde zum deutschen <span class="keyword" title="Federal Chancellor">Bundeskanzler</span>. Was gehört zu den Aufgaben des deutschen Bundespräsidenten / der deutschen <span class="keyword" title="Federal President (female)">Bundespräsidentin</span>?',
            translation: 'In 1974, the German Federal President Gustav Heinemann gives Helmut Schmidt the certificate of appointment as German Chancellor. What are the tasks of the German Federal President?',
            context: 'After the resignation of Chancellor Willy Brandt in 1974, there was a change of government in the Federal Republic of Germany. In this context, the Federal President played an important role in formal state processes, such as the appointment of new members of the government. The scene with Gustav Heinemann and Helmut Schmidt refers to the constitutional tasks and powers of the Federal President in the German political system.',
            answers: [
                {
                    text: 'Er / Sie führt die Regierungsgeschäfte.',
                    translation: 'He/she conducts the business of government.',
                    correct: false
                },
                {
                    text: 'Er / Sie kontrolliert die Regierungspartei.',
                    translation: 'He/she controls the ruling party.',
                    correct: false
                },
                {
                    text: 'Er / Sie wählt die <span class="keyword" title="minister">Minister</span> / Ministerinnen aus.',
                    translation: 'He/she selects the ministers.',
                    correct: false
                },
                {
                    text: 'Er / Sie schlägt den Kanzler / die Kanzlerin zur <span class="keyword" title="election">Wahl</span> vor.',
                    translation: 'He/she proposes the Chancellor for election.',
                    correct: true
                }
            ],
            category: 'Politics & Democracy',
            image: 'images/q160.5e16bedb.png',
            keywords: {
                'Bundespräsidentin': 'Federal President (female)',
                'Bundespräsident': 'Federal President',
                Bundeskanzler: 'Federal Chancellor',
                Minister: 'minister',
                Wahl: 'election'
            }
        },
        {
            id: 71,
            question: 'Wo hält sich der deutsche <span class="keyword" title="Federal Chancellor">Bundeskanzler</span>/die deutsche <span class="keyword" title="Federal Chancellor (female)">Bundeskanzlerin</span> am häufigsten auf? Am häufigsten ist er/sie ...',
            translation: 'Where does the German Chancellor spend most of his or her time? Most often, he/she is...',
            context: 'The question relates to the places of work and residence of the German Chancellor. In Germany, there are various political centers and official buildings with different functions, for example for government business or the reception of state guests. In order to find the right answer, it is important to know where the official seat of the Federal Chancellery is located and what role cities such as Berlin or Bonn as well as places such as Meseberg Palace or Bellevue Palace play.',
            answers: [
                {
                    text: 'in Bonn, weil sich dort das Bundeskanzleramt und der <span class="keyword" title="Federal Parliament">Bundestag</span> befinden.',
                    translation: 'in Bonn, because that\'s where the Federal Chancellery and the Bundestag are located.',
                    correct: false
                },
                {
                    text: 'auf Schloss Meseberg, dem Gästehaus der Bundesregieung, um Staatsgäste zu empfangen.',
                    translation: 'auf Schloss Meseberg, dem Gästehaus der Bundesregieung, um Staatsgäste zu empfangen.',
                    correct: false
                },
                {
                    text: 'auf Schloss Bellevue, dem Amtssitz des Bundespräsidenten / der <span class="keyword" title="Federal President (female)">Bundespräsidentin</span>, um Staatsgäste zu empfangen.',
                    translation: 'auf Schloss Bellevue, dem Amtssitz des Bundespräsidenten / der Bundespräsidentin, um Staatsgäste zu empfangen.',
                    correct: false
                },
                {
                    text: 'in Berlin, weil sich dort das Bundeskanzleramt und der <span class="keyword" title="Federal Parliament">Bundestag</span> befinden.',
                    translation: 'in Berlin, because the Federal Chancellery and the Bundestag are located there.',
                    correct: true
                }
            ],
            category: 'Society & Law',
            keywords: {
                Bundeskanzlerin: 'Federal Chancellor (female)',
                Bundeskanzler: 'Federal Chancellor',
                Bundestag: 'Federal Parliament',
                'Bundespräsidentin': 'Federal President (female)'
            }
        },
        {
            id: 72,
            question: 'Wie heißt der jetzige <span class="keyword" title="Federal Chancellor">Bundeskanzler</span> / die jetzige <span class="keyword" title="Federal Chancellor (female)">Bundeskanzlerin</span> von Deutschland?',
            translation: 'What was the name of the first Chancellor of the Federal Republic of Germany?',
            context: 'After the end of the Second World War, the Federal Republic of Germany was created in 1949 as a new West German state. With the establishment of a democratic political system, the office of the Federal Chancellor was also introduced, which took over the leadership of the government. In the first decades of the Federal Republic, various politicians played an important role in reconstruction, integration with the West and in shaping German post-war policy. The question relates to the first incumbent of this central government office.',
            answers: [
                {
                    text: 'Gerhard Schröder',
                    translation: 'Gerhard Schröder',
                    correct: false
                },
                {
                    text: 'Jürgen Rüttgers',
                    translation: 'Jürgen Rüttgers',
                    correct: false
                },
                {
                    text: 'Klaus Wowereit',
                    translation: 'Klaus Wowereit',
                    correct: false
                },
                {
                    text: 'Angela Merkel',
                    translation: 'Angela Merkel',
                    correct: true
                }
            ],
            category: 'History',
            keywords: {
                Bundeskanzlerin: 'Federal Chancellor (female)',
                Bundeskanzler: 'Federal Chancellor'
            }
        },
        {
            id: 73,
            question: 'Die beiden größten Fraktionen im Deutschen <span class="keyword" title="Federal Parliament">Bundestag</span> heißen zurzeit ...',
            translation: 'The two largest parliamentary groups in the German Bundestag are currently ...',
            context: 'The question relates to the composition of the German Bundestag after a Bundestag election. In parliament, the deputies of their respective parties join together to form so-called parliamentary groups. The size of a parliamentary group depends on how many seats a party has won in the election. In order to find the right answer, it is important to know which parties currently have the most deputies in the Bundestag.',
            answers: [
                {
                    text: 'CDU/CSU und SPD.',
                    translation: 'CDU/CSU und SPD.',
                    correct: true
                },
                {
                    text: 'Die Linke und Bündnis 90/Die Grünen.',
                    translation: 'Die Linke and Bündnis 90/Die Grünen.',
                    correct: false
                },
                {
                    text: 'FDP und SPD.',
                    translation: 'FDP und SPD.',
                    correct: false
                },
                {
                    text: 'Die Linke und FDP.',
                    translation: 'Die Linke und FDP.',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Bundestag: 'Federal Parliament'
            }
        },
        {
            id: 74,
            question: 'Wie heißt das <span class="keyword" title="parliament">Parlament</span> für ganz Deutschland?',
            translation: 'What is the name of the parliament for the whole of Germany?',
            context: 'The question comes from the field of politics and social studies and refers to the political system of the Federal Republic of Germany. It is supposed to check whether the most important state organs are known. Germany is a federal, democratic state with various institutions at the federal level that have different tasks. One of these institutions is the parliament, which represents citizens at the federal level.',
            answers: [
                {
                    text: '<span class="keyword" title="Federal Convention">Bundesversammlung</span>',
                    translation: 'Federal Convention',
                    correct: false
                },
                {
                    text: 'Volkskammer',
                    translation: 'People\'s Chamber',
                    correct: false
                },
                {
                    text: '<span class="keyword" title="Federal Parliament">Bundestag</span>',
                    translation: 'Bundestag',
                    correct: true
                },
                {
                    text: 'Bundesgerichtshof',
                    translation: 'Federal Court of Justice',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Parlament: 'parliament',
                Bundesversammlung: 'Federal Convention',
                Bundestag: 'Federal Parliament'
            }
        },
        {
            id: 75,
            question: 'Wie heißt Deutschlands heutiges <span class="keyword" title="head of state">Staatsoberhaupt</span>?',
            translation: 'What is the name of Germany\'s current head of state?',
            context: 'The question relates to Germany\'s political system. In the Federal Republic of Germany, there are different state offices with clear tasks. The head of state is not the head of government, but primarily assumes representative and formal functions. The answer options contain well-known German politicians from different offices and periods, so that up-to-date political knowledge is required.',
            answers: [
                {
                    text: 'Frank-Walter Steinmeier',
                    translation: 'Frank-Walter Steinmeier',
                    correct: true
                },
                {
                    text: 'Norbert Lammert',
                    translation: 'Norbert Lammert',
                    correct: false
                },
                {
                    text: 'Wolfgang Thierse',
                    translation: 'Wolfgang Thierse',
                    correct: false
                },
                {
                    text: 'Edmund Stoiber',
                    translation: 'Edmund Stoiber',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Staatsoberhaupt: 'head of state'
            }
        },
        {
            id: 76,
            question: 'Was bedeutet die Abkürzung CDU in Deutschland?',
            translation: 'What does the abbreviation CDU mean in Germany?',
            context: 'The question refers to German politics and parties. There are several important political parties in Germany, which are often referred to by abbreviations. In order to understand political news, elections or historical developments, it is important to know what these abbreviations stand for. The following question tests this basic knowledge.',
            answers: [
                {
                    text: 'Christliche Deutsche Union',
                    translation: 'Christian German Union',
                    correct: false
                },
                {
                    text: 'Club Deutscher Unternehmer',
                    translation: 'Club of German Entrepreneurs',
                    correct: false
                },
                {
                    text: 'Christlicher Deutscher Umweltschutz',
                    translation: 'Christian German Environmental Protection',
                    correct: false
                },
                {
                    text: 'Christlich Demokratische Union',
                    translation: 'Christian Democratic Union',
                    correct: true
                }
            ],
            category: 'Politics & Democracy',
            keywords: {}
        },
        {
            id: 77,
            question: 'Was ist die Bundeswehr?',
            translation: 'What is the Bundeswehr?',
            context: 'In Germany, there are various state institutions with different tasks, for example for security, administration or the military. Some terms sound similar and can easily be confused. In order to find the right answer, it is important to know which organization has which task and what role it plays in the state. The following question tests the basic knowledge about a well-known German institution and its function.',
            answers: [
                {
                    text: 'die deutsche Polizei',
                    translation: 'the German police',
                    correct: false
                },
                {
                    text: 'ein deutscher Hafen',
                    translation: 'a German port',
                    correct: false
                },
                {
                    text: 'eine deutsche Bürgerinitiative',
                    translation: 'a German citizens\' initiative',
                    correct: false
                },
                {
                    text: 'die deutsche Armee',
                    translation: 'the German army',
                    correct: true
                }
            ],
            category: 'Society & Law',
            keywords: {}
        },
        {
            id: 78,
            question: 'Was bedeutet die Abkürzung SPD?',
            translation: 'What does the abbreviation SPD mean?',
            context: 'The question refers to basic knowledge of the German political system. There are various parties in German politics, which are often referred to by abbreviations. In order to understand political news, elections or historical developments, it is important to know what these abbreviations stand for. The following question tests this basic knowledge.',
            answers: [
                {
                    text: 'Sozialistische <span class="keyword" title="party">Partei</span> Deutschlands',
                    translation: 'Socialist Party of Germany',
                    correct: false
                },
                {
                    text: 'Sozialpolitische <span class="keyword" title="party">Partei</span> Deutschlands',
                    translation: 'Socio-political party of Germany',
                    correct: false
                },
                {
                    text: 'Sozialdemokratische <span class="keyword" title="party">Partei</span> Deutschlands',
                    translation: 'Social Democratic Party of Germany',
                    correct: true
                },
                {
                    text: 'Sozialgerechte <span class="keyword" title="party">Partei</span> Deutschlands',
                    translation: 'Socially Just Party of Germany',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Partei: 'party'
            }
        },
        {
            id: 79,
            question: 'Was bedeutet die Abkürzung FDP in Deutschland?',
            translation: 'What does the abbreviation FDP mean in Germany?',
            context: 'The question refers to the German party system and common political abbreviations. In Germany, there are several parties that are often referred to only by their initials, for example in news, election programs or in lessons. In order to better understand political texts and discussions, it is important to know what these abbreviations stand for.',
            answers: [
                {
                    text: 'Friedliche Demonstrative <span class="keyword" title="party">Partei</span>',
                    translation: 'Peaceful Demonstrative Party',
                    correct: false
                },
                {
                    text: 'Freie Deutschland <span class="keyword" title="party">Partei</span>',
                    translation: 'Free Germany Party',
                    correct: false
                },
                {
                    text: 'Führende Demokratische <span class="keyword" title="party">Partei</span>',
                    translation: 'Leading Democratic Party',
                    correct: false
                },
                {
                    text: 'Freie Demokratische <span class="keyword" title="party">Partei</span>',
                    translation: 'Free Democratic Party',
                    correct: true
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Partei: 'party'
            }
        },
        {
            id: 80,
            question: 'Welches <span class="keyword" title="court">Gericht</span> in Deutschland ist zuständig für die Auslegung des Grundgesetzes?',
            translation: 'Which court in Germany is responsible for interpreting the Basic Law?',
            context: 'The question relates to the German legal system and the jurisdiction of the various courts. In Germany, there are different jurisdictions with clearly defined tasks. A central issue is the interpretation and control of the Basic Law, i.e. the German constitution. In order to find the right answer, you need to know which court is specifically responsible for constitutional questions and disputes.',
            answers: [
                {
                    text: 'Oberlandesgericht',
                    translation: 'Higher Regional Court',
                    correct: false
                },
                {
                    text: 'Amtsgericht',
                    translation: 'District Court',
                    correct: false
                },
                {
                    text: '<span class="keyword" title="Federal Constitutional Court">Bundesverfassungsgericht</span>',
                    translation: 'Federal Constitutional Court',
                    correct: true
                },
                {
                    text: 'Verwaltungsgericht',
                    translation: 'Administrative Court',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Gericht: 'court',
                Bundesverfassungsgericht: 'Federal Constitutional Court'
            }
        },
        {
            id: 81,
            question: 'Wer wählt den <span class="keyword" title="Federal Chancellor">Bundeskanzler</span> / die <span class="keyword" title="Federal Chancellor (female)">Bundeskanzlerin</span> in Deutschland?',
            translation: 'Who elects the Federal Chancellor in Germany?',
            context: 'The question relates to the political system of the Federal Republic of Germany. In Germany, there are several constitutional bodies such as the Bundestag, Bundesrat and Federal Assembly, which have different tasks. The election of top political offices follows fixed rules laid down in the Basic Law. In order to find the right answer, you have to know which body is responsible for electing the federal government and how this body is composed.',
            answers: [
                {
                    text: 'der <span class="keyword" title="Federal Council">Bundesrat</span>',
                    translation: 'the Federal Council',
                    correct: false
                },
                {
                    text: 'die <span class="keyword" title="Federal Convention">Bundesversammlung</span>',
                    translation: 'the Federal Convention',
                    correct: false
                },
                {
                    text: 'das <span class="keyword" title="people">Volk</span>',
                    translation: 'the people',
                    correct: false
                },
                {
                    text: 'der <span class="keyword" title="Federal Parliament">Bundestag</span>',
                    translation: 'the Bundestag',
                    correct: true
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Bundeskanzlerin: 'Federal Chancellor (female)',
                Bundeskanzler: 'Federal Chancellor',
                Bundesrat: 'Federal Council',
                Bundesversammlung: 'Federal Convention',
                Volk: 'people',
                Bundestag: 'Federal Parliament'
            }
        },
        {
            id: 82,
            question: 'Wer leitet das deutsche Bundeskabinett?',
            translation: 'Who heads the German Federal Cabinet?',
            context: 'In Germany, there are several important constitutional bodies with different tasks. The Federal Government consists of the Federal Cabinet, in which ministers prepare and implement key political decisions. In addition, there are other offices such as the Federal President, the Bundesrat and the Bundestag, each of which has its own roles in the political system. To answer the question, it is important to know what function the leadership of the Federal Cabinet includes.',
            answers: [
                {
                    text: 'der Bundestagspräsident / die Bundestagspräsidentin',
                    translation: 'the President of the Bundestag',
                    correct: false
                },
                {
                    text: 'der <span class="keyword" title="Federal President">Bundespräsident</span> / die <span class="keyword" title="Federal President (female)">Bundespräsidentin</span>',
                    translation: 'the President of the Swiss Confederation',
                    correct: false
                },
                {
                    text: 'der Bundesratspräsident / die Bundesratspräsidentin',
                    translation: 'the President of the Bundesrat',
                    correct: false
                },
                {
                    text: 'der <span class="keyword" title="Federal Chancellor">Bundeskanzler</span> / die <span class="keyword" title="Federal Chancellor (female)">Bundeskanzlerin</span>',
                    translation: 'the Federal Chancellor',
                    correct: true
                }
            ],
            category: 'Society & Law',
            keywords: {
                'Bundespräsidentin': 'Federal President (female)',
                'Bundespräsident': 'Federal President',
                Bundeskanzlerin: 'Federal Chancellor (female)',
                Bundeskanzler: 'Federal Chancellor'
            }
        },
        {
            id: 83,
            question: 'Wer wählt den deutschen <span class="keyword" title="Federal Chancellor">Bundeskanzler</span> / die deutsche <span class="keyword" title="Federal Chancellor (female)">Bundeskanzlerin</span>?',
            translation: 'Who elects the German Chancellor?',
            context: 'In Germany, the election of the Federal Chancellor is part of the parliamentary system. Citizens first elect the parliament at the federal level. There is then a defined constitutional procedure in which a certain state body is responsible for electing the head of government. The question aims to determine this body correctly.',
            answers: [
                {
                    text: 'das <span class="keyword" title="people">Volk</span>',
                    translation: 'the people',
                    correct: false
                },
                {
                    text: 'die <span class="keyword" title="Federal Convention">Bundesversammlung</span>',
                    translation: 'the Federal Convention',
                    correct: false
                },
                {
                    text: 'der <span class="keyword" title="Federal Parliament">Bundestag</span>',
                    translation: 'the Bundestag',
                    correct: true
                },
                {
                    text: 'die <span class="keyword" title="Federal Government">Bundesregierung</span>',
                    translation: 'the Federal Government',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Bundeskanzlerin: 'Federal Chancellor (female)',
                Bundeskanzler: 'Federal Chancellor',
                Volk: 'people',
                Bundesversammlung: 'Federal Convention',
                Bundestag: 'Federal Parliament',
                Bundesregierung: 'Federal Government'
            }
        },
        {
            id: 84,
            question: 'Welche Hauptaufgabe hat der deutsche <span class="keyword" title="Federal President">Bundespräsident</span> / die deutsche <span class="keyword" title="Federal President (female)">Bundespräsidentin</span>? Er / Sie ...',
            translation: 'What is the main task of the German Federal President? She/he ...',
            context: 'In Germany, there are various constitutional bodies with clearly separated tasks. In addition to the Federal Government, the Bundestag and the Bundesrat, the Federal President also plays an important role. This position is laid down in the Basic Law and differs significantly from the work of the government or parliament. In order to find the right answer, you have to know which tasks are mainly assigned to this office and which are not.',
            answers: [
                {
                    text: 'regiert das Land.',
                    translation: 'rules the country.',
                    correct: false
                },
                {
                    text: 'entwirft die <span class="keyword" title="laws">Gesetze</span>.',
                    translation: 'drafts the laws',
                    correct: false
                },
                {
                    text: 'repräsentiert das Land.',
                    translation: 'represents the country.',
                    correct: true
                },
                {
                    text: 'überwacht die Einhaltung der <span class="keyword" title="laws">Gesetze</span>.',
                    translation: 'monitors compliance with the law.',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                'Bundespräsidentin': 'Federal President (female)',
                'Bundespräsident': 'Federal President',
                Gesetze: 'laws'
            }
        },
        {
            id: 85,
            question: 'Wer bildet den deutschen <span class="keyword" title="Federal Council">Bundesrat</span>?',
            translation: 'Who forms the German Bundesrat?',
            context: 'In Germany, there are various constitutional organs at the federal level, each of which has different tasks. In addition to the Bundestag, the Bundesrat plays an important role in the legislative process, as it represents the interests of the federal states. In order to properly understand the political system, it is important to know which persons or groups make up the Federal Council and how it differs from other state bodies.',
            answers: [
                {
                    text: 'die <span class="keyword" title="members of parliament">Abgeordneten</span> des Bundestages',
                    translation: 'the members of the Bundestag',
                    correct: false
                },
                {
                    text: 'die <span class="keyword" title="minister">Minister</span> und Ministerinnen der <span class="keyword" title="Federal Government">Bundesregierung</span>',
                    translation: 'the Ministers of the Federal Government',
                    correct: false
                },
                {
                    text: 'die Regierungsvertreter der <span class="keyword" title="federal states">Bundesländer</span>',
                    translation: 'the government representatives of the federal states',
                    correct: true
                },
                {
                    text: 'die Parteimitglieder',
                    translation: 'the party members',
                    correct: false
                }
            ],
            category: 'Geography & Structure',
            keywords: {
                Bundesrat: 'Federal Council',
                Abgeordneten: 'members of parliament',
                Bundesregierung: 'Federal Government',
                Minister: 'minister',
                'Bundesländer': 'federal states'
            }
        },
        {
            id: 86,
            question: 'Wer wählt in Deutschland den Bundespräsidenten / die <span class="keyword" title="Federal President (female)">Bundespräsidentin</span>?',
            translation: 'Who elects the Federal President in Germany?',
            context: 'In Germany, there are various constitutional bodies with different tasks. The election of the Federal President is not comparable to a Bundestag election by the population. Instead, a special body is planned that meets only for this purpose. To find the right answer, it is important to know which institutions are involved in the organization of the state and what role they play in elections and legislation.',
            answers: [
                {
                    text: 'die <span class="keyword" title="Federal Convention">Bundesversammlung</span>',
                    translation: 'the Federal Convention',
                    correct: true
                },
                {
                    text: 'der <span class="keyword" title="Federal Council">Bundesrat</span>',
                    translation: 'the Federal Council',
                    correct: false
                },
                {
                    text: 'das Bundesparlament',
                    translation: 'the Federal Parliament',
                    correct: false
                },
                {
                    text: 'das <span class="keyword" title="Federal Constitutional Court">Bundesverfassungsgericht</span>',
                    translation: 'the Federal Constitutional Court',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                'Bundespräsidentin': 'Federal President (female)',
                Bundesversammlung: 'Federal Convention',
                Bundesrat: 'Federal Council',
                Bundesverfassungsgericht: 'Federal Constitutional Court'
            }
        },
        {
            id: 87,
            question: 'Wer ist das <span class="keyword" title="head of state">Staatsoberhaupt</span> der Bundesrepublik Deutschland?',
            translation: 'Who is the head of state of the Federal Republic of Germany?',
            context: 'The question relates to Germany\'s political system. In the Federal Republic of Germany, there are various important state organs with different tasks, for example government, parliament and Bundesrat. To find the right answer, you need to know which office the head of state officially represents and, above all, takes on representative tasks.',
            answers: [
                {
                    text: 'der <span class="keyword" title="Federal Chancellor">Bundeskanzler</span> / die <span class="keyword" title="Federal Chancellor (female)">Bundeskanzlerin</span>',
                    translation: 'the Federal Chancellor',
                    correct: false
                },
                {
                    text: 'der <span class="keyword" title="Federal President">Bundespräsident</span> / die <span class="keyword" title="Federal President (female)">Bundespräsidentin</span>',
                    translation: 'the President of the Swiss Confederation',
                    correct: true
                },
                {
                    text: 'der Bundesratspräsident / die Bundesratspräsidentin',
                    translation: 'the President of the Bundesrat',
                    correct: false
                },
                {
                    text: 'der Bundestagspräsident / die Bundestagspräsidentin',
                    translation: 'the President of the Bundestag',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Staatsoberhaupt: 'head of state',
                Bundeskanzlerin: 'Federal Chancellor (female)',
                Bundeskanzler: 'Federal Chancellor',
                'Bundespräsidentin': 'Federal President (female)',
                'Bundespräsident': 'Federal President'
            }
        },
        {
            id: 88,
            question: 'Die parlamentarische <span class="keyword" title="opposition">Opposition</span> im Deutschen <span class="keyword" title="Federal Parliament">Bundestag</span> ...',
            translation: 'The parliamentary opposition in the German Bundestag ...',
            context: 'The question relates to the tasks and role of the parliamentary opposition in the German Bundestag. In a parliamentary democracy like Germany, there are governing parties and opposition parties. While the government leads the country, the opposition has important functions within parliament. In order to find the right answer, you have to know what powers the opposition has and what tasks other constitutional bodies such as the Federal Government, Bundesrat or Federal President are entitled to instead.',
            answers: [
                {
                    text: 'kontrolliert die <span class="keyword" title="government">Regierung</span>.',
                    translation: 'controls the government.',
                    correct: true
                },
                {
                    text: 'entscheidet, wer Bundesminister / Bundesministerin wird.',
                    translation: 'decides who will become Federal Minister.',
                    correct: false
                },
                {
                    text: 'bestimmt, wer im <span class="keyword" title="Federal Council">Bundesrat</span> sitzt.',
                    translation: 'determines who sits in the Federal Council.',
                    correct: false
                },
                {
                    text: 'schlägt die Regierungschefs / Regierungschefinnen der Länder vor.',
                    translation: 'proposes the heads of government of the federal states.',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Opposition: 'opposition',
                Bundestag: 'Federal Parliament',
                Regierung: 'government',
                Bundesrat: 'Federal Council'
            }
        },
        {
            id: 89,
            question: 'Wie nennt man in Deutschland die Vereinigung von <span class="keyword" title="members of parliament">Abgeordneten</span> einer <span class="keyword" title="party">Partei</span> im <span class="keyword" title="parliament">Parlament</span>?',
            translation: 'What is the name given in Germany to the association of deputies of a party in parliament?',
            context: 'In parliamentary systems, political parties play an important role in organising the work of parliament. Members of parliament often join forces to pursue common political goals, to better coordinate their positions and to exert greater influence on voting and legislative procedures. In Germany, there is a special term for this, which refers to these associations within parliament.',
            answers: [
                {
                    text: 'Verband',
                    translation: 'Association',
                    correct: false
                },
                {
                    text: 'Ältestenrat',
                    translation: 'Council of Elders',
                    correct: false
                },
                {
                    text: '<span class="keyword" title="parliamentary group">Fraktion</span>',
                    translation: 'Parliamentary group',
                    correct: true
                },
                {
                    text: '<span class="keyword" title="opposition">Opposition</span>',
                    translation: 'Opposition',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Abgeordneten: 'members of parliament',
                Parlament: 'parliament',
                Partei: 'party',
                Fraktion: 'parliamentary group',
                Opposition: 'opposition'
            }
        },
        {
            id: 90,
            question: 'Die deutschen <span class="keyword" title="federal states">Bundesländer</span> wirken an der Gesetzgebung des Bundes mit durch ...',
            translation: 'The German federal states participate in federal legislation through ...',
            context: 'The question relates to the federal structure of the Federal Republic of Germany. Germany consists of several federal states that not only have their own tasks, but are also involved in political decisions at the federal level. The participation of the Länder plays an important role, especially in the development of federal laws. The answer options are given by various constitutional bodies through which this participation could take place.',
            answers: [
                {
                    text: 'den <span class="keyword" title="Federal Council">Bundesrat</span>.',
                    translation: 'the Federal Council.',
                    correct: true
                },
                {
                    text: 'die <span class="keyword" title="Federal Convention">Bundesversammlung</span>.',
                    translation: 'the Federal Convention.',
                    correct: false
                },
                {
                    text: 'den <span class="keyword" title="Federal Parliament">Bundestag</span>.',
                    translation: 'the Bundestag.',
                    correct: false
                },
                {
                    text: 'die <span class="keyword" title="Federal Government">Bundesregierung</span>.',
                    translation: 'the Federal Government.',
                    correct: false
                }
            ],
            category: 'Geography & Structure',
            keywords: {
                'Bundesländer': 'federal states',
                Bundesrat: 'Federal Council',
                Bundesversammlung: 'Federal Convention',
                Bundestag: 'Federal Parliament',
                Bundesregierung: 'Federal Government'
            }
        },
        {
            id: 91,
            question: 'In Deutschland kann ein Regierungswechsel in einem <span class="keyword" title="federal state">Bundesland</span> Auswirkungen auf die Bundespolitik haben. Das Regieren wird ...',
            translation: 'In Germany, a change of government in a federal state can have an impact on federal politics. Governing will ...',
            context: 'Germany is a federal state in which the federal and state governments have different political tasks. The state governments send representatives to the Bundesrat, which participates in federal legislation. If there is a change of government in a federal state, this can change the composition and majority situation in the Bundesrat. This can affect how easy or difficult it is for the federal government to enforce laws or implement policies.',
            answers: [
                {
                    text: 'schwieriger, wenn sich dadurch die <span class="keyword" title="majority">Mehrheit</span> im <span class="keyword" title="Federal Parliament">Bundestag</span> ändert.',
                    translation: 'more difficult if this changes the majority in the Bundestag.',
                    correct: false
                },
                {
                    text: 'leichter, wenn dadurch neue <span class="keyword" title="parties">Parteien</span> in den <span class="keyword" title="Federal Council">Bundesrat</span> kommen.',
                    translation: 'would be easier if it brought new parties into the Federal Council.',
                    correct: false
                },
                {
                    text: 'schwieriger, wenn dadurch die <span class="keyword" title="majority">Mehrheit</span> im <span class="keyword" title="Federal Council">Bundesrat</span> verändert wird.',
                    translation: 'more difficult if it changes the majority in the Bundesrat.',
                    correct: true
                },
                {
                    text: 'leichter, wenn es sich um ein reiches <span class="keyword" title="federal state">Bundesland</span> handelt.',
                    translation: 'easier if it is a rich federal state.',
                    correct: false
                }
            ],
            category: 'Geography & Structure',
            keywords: {
                Bundesland: 'federal state',
                Bundestag: 'Federal Parliament',
                Mehrheit: 'majority',
                Bundesrat: 'Federal Council',
                Parteien: 'parties'
            }
        },
        {
            id: 92,
            question: 'Was bedeutet die Abkürzung CSU in Deutschland?',
            translation: 'What does the abbreviation CSU mean in Germany?',
            context: 'In Germany, political parties are often referred to by abbreviations, such as CDU, SPD or CSU. In order to understand political news, ballot papers or historical texts, it is important to know what these abbreviations stand for. The question refers to the meaning of the abbreviation "CSU" and tests knowledge of the German party system and its designations, especially in connection with Christian parties.',
            answers: [
                {
                    text: 'Christlich Sichere Union',
                    translation: 'Christian Safe Union',
                    correct: false
                },
                {
                    text: 'Christlich Süddeutsche Union',
                    translation: 'Christian South German Union',
                    correct: false
                },
                {
                    text: 'Christlich Sozialer Unternehmerverband',
                    translation: 'Christian Social Entrepreneurs\' Association',
                    correct: false
                },
                {
                    text: 'Christlich Soziale Union',
                    translation: 'Christian Social Union',
                    correct: true
                }
            ],
            category: 'Politics & Democracy',
            keywords: {}
        },
        {
            id: 93,
            question: 'Je mehr "Zweitstimmen" eine <span class="keyword" title="party">Partei</span> bei einer Bundestagswahl bekommt, desto ...',
            translation: 'The more "second votes" a party gets in a Bundestag election, the more ...',
            context: 'In Bundestag elections in Germany, voters have two votes. The first vote elects a direct candidate in the constituency, the second vote elects a party. The second vote is decisive for the distribution of seats in the Bundestag, as it determines how many seats a party receives in total. The following question relates to the importance of second votes for a party\'s electoral success.',
            answers: [
                {
                    text: 'weniger Erststimmen kann sie haben.',
                    translation: 'it can have fewer first votes.',
                    correct: false
                },
                {
                    text: 'mehr Direktkandidaten der <span class="keyword" title="party">Partei</span> ziehen ins <span class="keyword" title="parliament">Parlament</span> ein.',
                    translation: 'more direct candidates of the party enter parliament.',
                    correct: false
                },
                {
                    text: 'größer ist das Risiko, eine <span class="keyword" title="coalition">Koalition</span> bilden zu müssen.',
                    translation: 'greater is the risk of having to form a coalition.',
                    correct: false
                },
                {
                    text: 'mehr Sitze erhält die <span class="keyword" title="party">Partei</span> im <span class="keyword" title="parliament">Parlament</span>.',
                    translation: 'the party will receive more seats in parliament.',
                    correct: true
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Partei: 'party',
                Parlament: 'parliament',
                Koalition: 'coalition'
            }
        },
        {
            id: 94,
            question: 'Ab welchem Alter darf man in Deutschland an der <span class="keyword" title="election">Wahl</span> zum Deutschen <span class="keyword" title="Federal Parliament">Bundestag</span> teilnehmen?',
            translation: 'At what age can you vote in the election to the German Bundestag in Germany?',
            context: 'The question relates to the legal regulations of electoral law in Germany. The election to the German Bundestag determines who is entitled to vote and under what conditions citizens may cast their votes. Age plays a central role in this and is regulated in the Basic Law and the Federal Elections Act.',
            answers: [
                {
                    text: '16',
                    translation: '16',
                    correct: false
                },
                {
                    text: '18',
                    translation: '18',
                    correct: true
                },
                {
                    text: '21',
                    translation: '21',
                    correct: false
                },
                {
                    text: '23',
                    translation: '23',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Bundestag: 'Federal Parliament',
                Wahl: 'election'
            }
        },
        {
            id: 95,
            question: 'Was gilt für die meisten Kinder in Deutschland?',
            translation: 'What applies to most children in Germany?',
            context: 'In Germany, there are certain legal regulations that apply to children and adolescents. These regulations concern, among other things, education, rights and duties in everyday life as well as the responsibility of the state and parents. Some obligations are prescribed by law, others only apply to certain groups or situations. Against this background, the following question is intended to examine which obligation applies to most children in Germany.',
            answers: [
                {
                    text: 'Wahlpflicht',
                    translation: 'Compulsory voting',
                    correct: false
                },
                {
                    text: 'Schulpflicht',
                    translation: 'Schulpflicht',
                    correct: true
                },
                {
                    text: 'Schweigepflicht',
                    translation: 'Confidentiality',
                    correct: false
                },
                {
                    text: 'Religionspflicht',
                    translation: 'Religious duty',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {}
        },
        {
            id: 96,
            question: 'Was muss jeder deutsche <span class="keyword" title="citizen">Staatsbürger</span> / jede deutsche <span class="keyword" title="citizen (female)">Staatsbürgerin</span> ab dem 16. Lebensjahr besitzen?',
            translation: 'What must every German citizen own from the age of 16?',
            context: 'In Germany, citizens are required to have a valid identity card (Personalausweis) from the age of 16.',
            answers: [
                {
                    text: 'einen <span class="keyword" title="passport">Reisepass</span>',
                    translation: 'a passport',
                    correct: false
                },
                {
                    text: 'einen <span class="keyword" title="identity card">Personalausweis</span>',
                    translation: 'an identity card',
                    correct: true
                },
                {
                    text: 'einen Sozialversicherungsausweis',
                    translation: 'a social security card',
                    correct: false
                },
                {
                    text: 'einen <span class="keyword" title="driving license">Führerschein</span>',
                    translation: 'a driving license',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                'Staatsbürgerin': 'citizen (female)',
                'Staatsbürger': 'citizen',
                Reisepass: 'passport',
                Personalausweis: 'identity card',
                'Führerschein': 'driving license'
            }
        },
        {
            id: 97,
            question: 'Was bezahlt man in Deutschland automatisch, wenn man fest angestellt ist?',
            translation: 'What do you automatically pay in Germany if you are permanently employed?',
            context: 'The question relates to taxes and state benefits in the German social system. It is intended to check which element is automatically associated with a permanent position. In Germany, there are various forms of support and compulsory contributions, which are either paid or received depending on your personal situation. The task calls for a distinction to be made between voluntary benefits and mandatory payments.',
            answers: [
                {
                    text: '<span class="keyword" title="social insurance">Sozialversicherung</span>',
                    translation: 'Social Security',
                    correct: true
                },
                {
                    text: 'Sozialhilfe',
                    translation: 'Social assistance',
                    correct: false
                },
                {
                    text: 'Kindergeld',
                    translation: 'Child benefit',
                    correct: false
                },
                {
                    text: 'Wohngeld',
                    translation: 'Housing allowance',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {
                Sozialversicherung: 'social insurance'
            }
        },
        {
            id: 98,
            question: 'Wenn <span class="keyword" title="member of parliament">Abgeordnete</span> im Deutschen <span class="keyword" title="Federal Parliament">Bundestag</span> ihre <span class="keyword" title="parliamentary group">Fraktion</span> wechseln, ...',
            translation: 'When members of the German Bundestag change their parliamentary group, ...',
            context: 'In the German Bundestag, members of parliament are usually members of a parliamentary group that pursues common political goals. The composition of the parliamentary groups is important for majorities, the formation of the government and parliamentary work. Sometimes individual members of parliament decide to leave their parliamentary group or switch to another. This raises questions about the legal consequences, the stability of the government and the rights and duties of MPs.',
            answers: [
                {
                    text: 'dürfen sie nicht mehr an den Sitzungen des Parlaments teilnehmen.',
                    translation: 'they are no longer allowed to participate in parliamentary sittings,',
                    correct: false
                },
                {
                    text: 'kann die <span class="keyword" title="government">Regierung</span> ihre <span class="keyword" title="majority">Mehrheit</span> verlieren.',
                    translation: 'the government may lose its majority.',
                    correct: true
                },
                {
                    text: 'muss der <span class="keyword" title="Federal President">Bundespräsident</span> / die <span class="keyword" title="Federal President (female)">Bundespräsidentin</span> zuvor sein / ihr Einverständnis geben.',
                    translation: 'the Federal President must give his/her consent in advance.',
                    correct: false
                },
                {
                    text: 'dürfen die Wähler / Wählerinnen dieser <span class="keyword" title="members of parliament">Abgeordneten</span> noch einmal <span class="keyword" title="to vote/elect">wählen</span>.',
                    translation: 'the voters of these deputies may vote again.',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {
                Abgeordnete: 'member of parliament',
                Bundestag: 'Federal Parliament',
                Fraktion: 'parliamentary group',
                Regierung: 'government',
                Mehrheit: 'majority',
                'Bundespräsidentin': 'Federal President (female)',
                'Bundespräsident': 'Federal President',
                Abgeordneten: 'members of parliament',
                'wählen': 'to vote/elect'
            }
        },
        {
            id: 99,
            question: 'Wer bezahlt in Deutschland die Sozialversicherungen?',
            translation: 'Who pays for social security in Germany?',
            context: 'In Germany, social security and solidarity are important components of the social system. These include various social insurance schemes such as health, pension, unemployment and long-term care insurance. These protect people against risks such as illness, unemployment or old age. The financing of social insurance is regulated by law and is based on certain contributions that must be paid regularly. The following question relates to who bears these contributions in Germany.',
            answers: [
                {
                    text: 'Arbeitgeber / Arbeitgeberinnen und Arbeitnehmer / Arbeitnehmerinnen',
                    translation: 'Arbeitgeber / Arbeitgeberinnen und Arbeitnehmer / Arbeitnehmerinnen',
                    correct: true
                },
                {
                    text: 'nur Arbeitnehmer / Arbeitnehmerinnen',
                    translation: 'nur Arbeitnehmer / Arbeitnehmerinnen',
                    correct: false
                },
                {
                    text: 'alle Staatsangehörigen',
                    translation: 'all nationals',
                    correct: false
                },
                {
                    text: 'nur Arbeitgeber / Arbeitgeberinnen',
                    translation: 'nur Arbeitgeber / Arbeitgeberinnen',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {}
        },
        {
            id: 100,
            question: 'Was gehört nicht zur gesetzlichen <span class="keyword" title="social insurance">Sozialversicherung</span>?',
            translation: 'What is not part of statutory social insurance?',
            context: 'The question relates to the German social security system. In Germany, there are various compulsory insurance policies that are intended to protect citizens against important life risks. These include, among other things, protection in the event of illness, need for care, unemployment or old age. In addition to these state-regulated insurances, there are also private forms of insurance. To find the right answer, you need to know which insurances are part of the statutory social insurance and which are not.',
            answers: [
                {
                    text: 'die Lebensversicherung',
                    translation: 'Life insurance',
                    correct: true
                },
                {
                    text: 'die gesetzliche <span class="keyword" title="pension insurance">Rentenversicherung</span>',
                    translation: 'the statutory pension insurance',
                    correct: false
                },
                {
                    text: 'die <span class="keyword" title="unemployment insurance">Arbeitslosenversicherung</span>',
                    translation: 'unemployment insurance',
                    correct: false
                },
                {
                    text: 'die <span class="keyword" title="long-term care insurance">Pflegeversicherung</span>',
                    translation: 'long-term care insurance',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {
                Sozialversicherung: 'social insurance',
                Rentenversicherung: 'pension insurance',
                Arbeitslosenversicherung: 'unemployment insurance',
                Pflegeversicherung: 'long-term care insurance'
            }
        },
        {
            id: 101,
            question: 'Gewerkschaften sind Interessenverbände der ...',
            translation: 'Trade unions are interest groups of the ...',
            context: 'The question relates to the political and social system in Germany. It examines the understanding of which groups have their interests represented by organizations. Trade unions play an important role in working life, for example in collective bargaining, working conditions and co-determination. To find the right answer, you have to know whose interests trade unions traditionally represent.',
            answers: [
                {
                    text: 'Jugendlichen.',
                    translation: 'young people.',
                    correct: false
                },
                {
                    text: 'Arbeitnehmer und Arbeitnehmerinnen.',
                    translation: 'Arbeitnehmer und Arbeitnehmerinnen.',
                    correct: true
                },
                {
                    text: 'Rentner und Renterinnen.',
                    translation: 'Rentner und Renterinnen.',
                    correct: false
                },
                {
                    text: 'Arbeitgeber und Arbeitgeberinnen.',
                    translation: 'Arbeitgeber und Arbeitgeberinnen.',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {}
        },
        {
            id: 102,
            question: 'Womit kann man in der Bundesrepublik Deutschland geehrt werden, wenn man auf politischem, wirtschaftlichem, kulturellem, geistigem oder sozialem Gebiet eine besondere Leistung erbracht hat? Mit dem ...',
            translation: 'What can you be honored with in the Federal Republic of Germany if you have made a special achievement in the political, economic, cultural, intellectual or social field? With the ...',
            context: 'The question refers to state awards in Germany. It examines the knowledge of how people in the Federal Republic can be honoured for special achievements in areas such as politics, business, culture, science or social affairs. Various terms and awards are mentioned, only one of which is actually an official honour of the Federal Republic of Germany. The aim is to recognize the correct state decoration.',
            answers: [
                {
                    text: 'Bundesverdienstkreuz',
                    translation: 'Order of Merit of the Federal Republic of Germany',
                    correct: true
                },
                {
                    text: '<span class="keyword" title="federal eagle">Bundesadler</span>',
                    translation: 'Federal Eagle',
                    correct: false
                },
                {
                    text: 'Vaterländischen Verdienstorden',
                    translation: 'Patriotic Order of Merit',
                    correct: false
                },
                {
                    text: 'Ehrentitel "Held der Deutschen Demokratischen <span class="keyword" title="republic">Republik</span>"',
                    translation: 'Honorary title "Hero of the German Democratic Republic"',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {
                Bundesadler: 'federal eagle',
                Republik: 'republic'
            }
        },
        {
            id: 103,
            question: 'Was wird in Deutschland als "Ampelkoalition" bezeichnet? Die Zusammenarbeit ...',
            translation: 'What is called a "traffic light coalition" in Germany? The cooperation ...',
            context: 'In German politics, government coalitions are often named after colors assigned to the parties involved. These color names help to quickly identify which parties are working together. A well-known colour combination is the so-called "traffic light", which is reminiscent of the colours of a traffic light. To understand the question, one should know which party has which color and at what political level such coalitions are formed.',
            answers: [
                {
                    text: 'der Bundestagsfraktionen von CDU und CSU',
                    translation: 'of the CDU and CSU parliamentary groups in the Bundestag',
                    correct: false
                },
                {
                    text: 'von SPD, FDP und Bündnis 90/Die Grünen in einer <span class="keyword" title="government">Regierung</span>',
                    translation: 'of SPD, FDP and Bündnis 90/Die Grünen in one government',
                    correct: true
                },
                {
                    text: 'von CSU, Die LINKE und Bündnis 90/Die Grünen in einer <span class="keyword" title="government">Regierung</span>',
                    translation: 'of CSU, Die LINKE and Bündnis 90/Die Grünen in one government',
                    correct: false
                },
                {
                    text: 'der Bundestagsfraktionen von CDU und SPD',
                    translation: 'of the parliamentary groups of the CDU and SPD',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Regierung: 'government'
            }
        },
        {
            id: 104,
            question: 'Eine Frau in Deutschland verliert ihre Arbeit. Was darf nicht der Grund für diese Entlassung sein?',
            translation: 'A woman in Germany loses her job. What should not be the reason for this dismissal?',
            context: 'It is about the legal reasons for dismissal in Germany. German labor law protects female employees from unfair dismissal and prohibits dismissals for certain personal or protected reasons. The question is intended to examine which conduct or circumstance is not legally a permissible reason for dismissal. Knowledge of protection against dismissal, equal rights, maternity protection and duties in the workplace is important for this.',
            answers: [
                {
                    text: 'Die Frau ist lange krank und arbeitsunfähig.',
                    translation: 'The woman has been ill for a long time and unable to work.',
                    correct: false
                },
                {
                    text: 'Die Frau kam oft zu spät zur Arbeit.',
                    translation: 'The woman was often late for work.',
                    correct: false
                },
                {
                    text: 'Die Frau erledigt private Sachen während der Arbeitszeit.',
                    translation: 'The woman does private things during working hours.',
                    correct: false
                },
                {
                    text: 'Die Frau bekommt ein Kind und ihr Chef weiß das.',
                    translation: 'The woman has a child and her boss knows it.',
                    correct: true
                }
            ],
            category: 'Politics & Democracy',
            keywords: {}
        },
        {
            id: 105,
            question: 'Was ist eine Aufgabe von Wahlhelfern / Wahlhelferinnen in Deutschland?',
            translation: 'What is the task of poll workers in Germany?',
            context: 'During elections in Germany, poll workers take on important voluntary tasks at the polling station. They ensure that the election is conducted properly, fairly and in accordance with the law. This includes activities on election day before, during and after voting. The following question examines which of the tasks mentioned actually falls within their responsibilities.',
            answers: [
                {
                    text: 'Sie helfen alten Menschen bei der <span class="keyword" title="casting a vote">Stimmabgabe</span> in der Wahlkabine.',
                    translation: 'They help old people cast their votes in the polling booth.',
                    correct: false
                },
                {
                    text: 'Sie schreiben die Wahlbenachrichtigungen vor der <span class="keyword" title="election">Wahl</span>.',
                    translation: 'They write the election notifications before the election.',
                    correct: false
                },
                {
                    text: 'Sie geben Zwischenergebnisse an die Medien weiter.',
                    translation: 'They pass on interim results to the media.',
                    correct: false
                },
                {
                    text: 'Sie zählen die Stimmen nach dem Ende der <span class="keyword" title="election">Wahl</span>.',
                    translation: 'They count the votes after the end of the election.',
                    correct: true
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Stimmabgabe: 'casting a vote',
                Wahl: 'election'
            }
        },
        {
            id: 106,
            question: 'In Deutschland helfen ehrenamtliche Wahlhelfer und Wahlhelferinnen bei den <span class="keyword" title="elections">Wahlen</span>. Was ist eine Aufgabe von Wahlhelfern / Wahlhelferinnen?',
            translation: 'In Germany, volunteer poll workers help with the elections. What is the task of poll workers?',
            context: 'In Germany, elections are held regularly in which citizens cast their votes. To ensure that the election process works correctly and fairly, many volunteers are deployed. These people take on important tasks at the polling station and after the election. The following question relates to which activities are actually part of the tasks of poll workers.',
            answers: [
                {
                    text: 'Sie helfen Kindern und alten Menschen beim Wählen.',
                    translation: 'They help children and old people to vote.',
                    correct: false
                },
                {
                    text: 'Sie schreiben Karten und Briefe mit der Angabe des Wahllokals.',
                    translation: 'They write cards and letters indicating the polling station.',
                    correct: false
                },
                {
                    text: 'Sie geben Zwischenergebnisse an Journalisten weiter.',
                    translation: 'They pass on interim results to journalists.',
                    correct: false
                },
                {
                    text: 'Sie zählen die Stimmen nach dem Ende der <span class="keyword" title="election">Wahl</span>.',
                    translation: 'They count the votes after the end of the election.',
                    correct: true
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Wahlen: 'elections',
                Wahl: 'election'
            }
        },
        {
            id: 107,
            question: 'Für wie viele Jahre wird der <span class="keyword" title="Federal Parliament">Bundestag</span> in Deutschland gewählt?',
            translation: 'For how many years is the Bundestag elected in Germany?',
            context: 'In Germany, the Bundestag is the central parliament at the federal level. It is determined by regular elections by the people and has central tasks such as legislation, control of the federal government and budget decisions. The question refers to the duration of an electoral period, i.e. how long the members of parliament remain in office after an election.',
            answers: [
                {
                    text: '2 Jahre',
                    translation: '2 years',
                    correct: false
                },
                {
                    text: '4 Jahre',
                    translation: '4 years',
                    correct: true
                },
                {
                    text: '6 Jahre',
                    translation: '6 years',
                    correct: false
                },
                {
                    text: '8 Jahre',
                    translation: '8 years',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Bundestag: 'Federal Parliament'
            }
        },
        {
            id: 108,
            question: 'Bei einer Bundestagswahl in Deutschland darf jeder <span class="keyword" title="to vote/elect">wählen</span>, der ...',
            translation: 'In a Bundestag election in Germany, anyone who ...',
            context: 'The question relates to the requirements for the right to vote in a Bundestag election in Germany. It examines the basic knowledge of citizens\' democratic rights and duties. In order to answer them correctly, you should know what legal criteria such as nationality, age and place of residence apply in order to be allowed to participate in a Bundestag election.',
            answers: [
                {
                    text: 'in der Bundesrepublik Deutschland wohnt und <span class="keyword" title="to vote/elect">wählen</span> möchte.',
                    translation: 'lives in the Federal Republic of Germany and wishes to vote.',
                    correct: false
                },
                {
                    text: '<span class="keyword" title="citizen">Bürger</span> / <span class="keyword" title="citizen (female)">Bürgerin</span> der Bundesrepublik Deutschland ist und mindestens 18 Jahre alt ist.',
                    translation: 'is a citizen of the Federal Republic of Germany and is at least 18 years old.',
                    correct: true
                },
                {
                    text: 'seit mindestens 3 Jahren in der Bundesrepublik Deutschland lebt.',
                    translation: 'has been living in the Federal Republic of Germany for at least 3 years.',
                    correct: false
                },
                {
                    text: '<span class="keyword" title="citizen">Bürger</span> / <span class="keyword" title="citizen (female)">Bürgerin</span> der Bundesrepublik Deutschland ist und mindestens 21 Jahre alt ist.',
                    translation: 'is a citizen of the Federal Republic of Germany and is at least 21 years old.',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                'wählen': 'to vote/elect',
                'Bürgerin': 'citizen (female)',
                'Bürger': 'citizen'
            }
        },
        {
            id: 109,
            question: 'Wie oft gibt es normalerweise Bundestagswahlen in Deutschland?',
            translation: 'How often are there usually federal elections in Germany?',
            context: 'The question relates to the German political system and the democratic elections at the federal level. The German Bundestag is the central parliament and is regularly elected by the citizens entitled to vote. In order to understand how parliamentary democracy works, it is important to know at what intervals these elections take place. This also helps to better classify political processes, election periods and changes of government.',
            answers: [
                {
                    text: 'alle drei Jahre',
                    translation: 'every three years',
                    correct: false
                },
                {
                    text: 'alle vier Jahre',
                    translation: 'every four years',
                    correct: true
                },
                {
                    text: 'alle fünf Jahre',
                    translation: 'every five years',
                    correct: false
                },
                {
                    text: 'alle sechs Jahre',
                    translation: 'every six years',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {}
        },
        {
            id: 110,
            question: 'Für wie viele Jahre wird der <span class="keyword" title="Federal Parliament">Bundestag</span> in Deutschland gewählt?',
            translation: 'For how many years is the Bundestag elected in Germany?',
            context: 'The question relates to Germany\'s political system and the functioning of parliamentary democracy. The Bundestag is the most important legislative body at the federal level. Citizens regularly elect its representatives in general elections. Knowledge of the duration of this electoral period is fundamental for understanding democratic processes.',
            answers: [
                {
                    text: '2 Jahre',
                    translation: '2 years',
                    correct: false
                },
                {
                    text: '3 Jahre',
                    translation: '3 years',
                    correct: false
                },
                {
                    text: '4 Jahre',
                    translation: '4 years',
                    correct: true
                },
                {
                    text: '5 Jahre',
                    translation: '5 years',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Bundestag: 'Federal Parliament'
            }
        },
        {
            id: 111,
            question: 'In Deutschland darf man <span class="keyword" title="to vote/elect">wählen</span>. Was bedeutet das?',
            translation: 'Elections in Germany are free. What does that mean?',
            context: 'In Germany, certain principles apply to democratic elections. These include freedom, equality, secrecy and immediacy of election. The question relates specifically to the principle of free choice. To find the right answer, you need to know what "free" means in the context of elections and what conditions or actions are allowed or prohibited in the process.',
            answers: [
                {
                    text: 'Alle deutschen Staatsangehörigen dürfen <span class="keyword" title="to vote/elect">wählen</span>, wenn sie das Mindestalter erreicht haben.',
                    translation: 'Alle deutschen Staatsangehörigen dürfen wählen, wenn sie das Mindestalter erreicht haben.',
                    correct: true
                },
                {
                    text: 'Nur verheiratete Personen dürfen <span class="keyword" title="to vote/elect">wählen</span>.',
                    translation: 'Nur verheiratete Personen dürfen wählen.',
                    correct: false
                },
                {
                    text: 'Nur Personen mit einem festen Arbeitsplatz dürfen <span class="keyword" title="to vote/elect">wählen</span>.',
                    translation: 'Nur Personen mit einem festen Arbeitsplatz dürfen wählen.',
                    correct: false
                },
                {
                    text: 'Alle Einwohner und Einwohnerinnen in Deutschland müssen <span class="keyword" title="to vote/elect">wählen</span>.',
                    translation: 'Alle Einwohner und Einwohnerinnen in Deutschland müssen wählen.',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                'wählen': 'to vote/elect'
            }
        },
        {
            id: 112,
            question: 'Die <span class="keyword" title="elections">Wahlen</span> in Deutschland sind ...',
            translation: 'The elections in Germany are ...',
            context: 'In Germany, political elections take place according to fixed democratic principles. These rules are intended to ensure that all citizens eligible to vote can cast their votes on an equal footing and without pressure. The question tests knowledge about these electoral principles and whether it is understood which characteristics elections may have and which may not. The answer options describe different characteristics, only one of which applies.',
            answers: [
                {
                    text: 'speziell.',
                    translation: 'special.',
                    correct: false
                },
                {
                    text: 'geheim.',
                    translation: 'secret.',
                    correct: true
                },
                {
                    text: 'berufsbezogen.',
                    translation: 'job-related.',
                    correct: false
                },
                {
                    text: 'geschlechtsabhängig.',
                    translation: 'gender-dependent.',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Wahlen: 'elections'
            }
        },
        {
            id: 113,
            question: '<span class="keyword" title="elections">Wahlen</span> in Deutschland gewinnt die <span class="keyword" title="party">Partei</span>, die ...',
            translation: 'Elections in Germany are won by the party that ...',
            context: 'The following multiple-choice question refers to the electoral system in Germany. It is intended to test how well one understands the rules according to which it is decided which party is considered the winner in Bundestag elections. This is about types of votes and which criterion is ultimately decisive for officially winning an election.',
            answers: [
                {
                    text: 'die meisten Stimmen bekommt.',
                    translation: 'gets the most votes.',
                    correct: true
                },
                {
                    text: 'die meisten Männer mehrheitlich gewählt haben.',
                    translation: 'voted for most men by a majority.',
                    correct: false
                },
                {
                    text: 'die meisten Stimmen bei den Arbeitern / Arbeiterinnen bekommen hat.',
                    translation: 'received the most votes among the workers.',
                    correct: false
                },
                {
                    text: 'die meisten Erststimmen für ihren Kanzlerkandidaten / ihre Kanzlerkandidatin erhalten hat.',
                    translation: 'has received the most first votes for their chancellor candidate.',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Wahlen: 'elections',
                Partei: 'party'
            }
        },
        {
            id: 114,
            question: 'An demokratischen <span class="keyword" title="elections">Wahlen</span> in Deutschland teilzunehmen ist ...',
            translation: 'Participating in democratic elections in Germany is ...',
            context: 'The question relates to the political system in Germany and the importance of elections. It examines the understanding of the role citizens have in a democracy. This is about participation in democratic elections and whether this is understood as an obligation, burden, coercion or as a fundamental democratic principle. Such questions often come up in connection with political education or naturalization tests.',
            answers: [
                {
                    text: 'eine Pflicht.',
                    translation: 'a duty',
                    correct: false
                },
                {
                    text: 'ein Recht.',
                    translation: 'a right',
                    correct: true
                },
                {
                    text: 'ein Zwang.',
                    translation: 'a compulsion',
                    correct: false
                },
                {
                    text: 'eine Last.',
                    translation: 'a load',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Wahlen: 'elections'
            }
        },
        {
            id: 115,
            question: 'Was bedeutet „aktives <span class="keyword" title="right to vote">Wahlrecht</span>“ in Dutschland?',
            translation: 'What does "active suffrage" mean in Germany?',
            context: 'In Germany, there are various rights in connection with elections. These concern both the possibility of participating in an election and being allowed to stand as candidates. Many people hear terms such as "active" and "passive suffrage", but do not know exactly what is meant by them. To understand the difference, it is important to know what rights citizens have in Bundestag, state or local elections.',
            answers: [
                {
                    text: 'Man kann gewählt werden.',
                    translation: 'You can be elected.',
                    correct: false
                },
                {
                    text: 'Man muss <span class="keyword" title="to vote/elect">wählen</span> gehen.',
                    translation: 'You have to vote.',
                    correct: false
                },
                {
                    text: 'Man kann <span class="keyword" title="to vote/elect">wählen</span>.',
                    translation: 'You can choose.',
                    correct: true
                },
                {
                    text: 'Man muss zur Auszählung der Stimmen gehen.',
                    translation: 'You have to go to the counting of the votes.',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Wahlrecht: 'right to vote',
                'wählen': 'to vote/elect'
            }
        },
        {
            id: 116,
            question: 'Wenn Sie bei einer Bundestagswahl in Deutschland <span class="keyword" title="to vote/elect">wählen</span> dürfen, heißt das ...',
            translation: 'If you are allowed to vote in a Bundestag election in Germany, that means ...',
            context: 'The question refers to basic concepts of German electoral law. It is intended to check whether one understands what the right to participate in a Bundestag election and to cast one\'s vote is called. This requires knowledge of basic democratic rights and the distinction between different political terms.',
            answers: [
                {
                    text: 'aktive Wahlkampagne.',
                    translation: 'active election campaign',
                    correct: false
                },
                {
                    text: 'aktives Wahlverfahren.',
                    translation: 'Active election procedure',
                    correct: false
                },
                {
                    text: 'aktiver Wahlkampf.',
                    translation: 'active election campaign',
                    correct: false
                },
                {
                    text: 'aktives <span class="keyword" title="right to vote">Wahlrecht</span>.',
                    translation: 'active right to vote',
                    correct: true
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                'wählen': 'to vote/elect',
                Wahlrecht: 'right to vote'
            }
        },
        {
            id: 117,
            question: 'Wie viel Prozent der Zweitstimmen müssen <span class="keyword" title="parties">Parteien</span> mindestens bekommen, um in den Deutschen <span class="keyword" title="Federal Parliament">Bundestag</span> gewählt zu werden?',
            translation: 'What percentage of second votes do parties have to get at least to be elected to the German Bundestag?',
            context: 'In Bundestag elections in Germany, voters have two votes. The second vote is decisive for the distribution of seats of the parties in parliament. In order to prevent a fragmentation of the Bundestag, a so-called barrier clause applies. It determines how high the minimum share of second votes must be for a party to enter the Bundestag.',
            answers: [
                {
                    text: '3 %',
                    translation: '3 %',
                    correct: false
                },
                {
                    text: '4 %',
                    translation: '4 %',
                    correct: false
                },
                {
                    text: '5 %',
                    translation: '5 %',
                    correct: true
                },
                {
                    text: '6 %',
                    translation: '6 %',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Bundestag: 'Federal Parliament',
                Parteien: 'parties'
            }
        },
        {
            id: 118,
            question: 'Was regelt das <span class="keyword" title="right to vote">Wahlrecht</span> in Deutschland?',
            translation: 'What does "active suffrage" mean in Germany?',
            context: 'In Germany, there are various rights in connection with elections. These concern both the possibility of participating in an election and being allowed to stand as candidates. Many people hear terms such as "active" and "passive suffrage", but do not know exactly what is meant by them. To understand the difference, it is important to know what rights citizens have in Bundestag, state or local elections.',
            answers: [
                {
                    text: 'Wer <span class="keyword" title="to vote/elect">wählen</span> darf, muss wählen.',
                    translation: 'Wer wählen darf, muss wählen.',
                    correct: false
                },
                {
                    text: 'Alle die wollen, können <span class="keyword" title="to vote/elect">wählen</span>.',
                    translation: 'Alle die wollen, können wählen.',
                    correct: false
                },
                {
                    text: 'Wer nicht wählt, verliert das Recht zu <span class="keyword" title="to vote/elect">wählen</span>.',
                    translation: 'Wer nicht wählt, verliert das Recht zu wählen.',
                    correct: false
                },
                {
                    text: 'Wer <span class="keyword" title="to vote/elect">wählen</span> darf, kann wählen.',
                    translation: 'Wer wählen darf, kann wählen.',
                    correct: true
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Wahlrecht: 'right to vote',
                'wählen': 'to vote/elect'
            }
        },
        {
            id: 119,
            question: '<span class="keyword" title="elections">Wahlen</span> in Deutschland sind frei. Was bedeutet das?',
            translation: 'Elections in Germany are free. What does that mean?',
            context: 'There are democratic elections in Germany. The right to vote is regulated in the Basic Law and safeguards important principles such as freedom, equality and secrecy of elections. These principles are intended to ensure that all eligible voters can express their political opinions without pressure. The following question tests your understanding of what exactly is meant by "free elections" and what statements about them are right or false.',
            answers: [
                {
                    text: 'Alle verurteilten Straftäter / Straftäterinnen dürfen nicht <span class="keyword" title="to vote/elect">wählen</span>.',
                    translation: 'All convicted criminals are not allowed to vote.',
                    correct: false
                },
                {
                    text: 'Wenn ich <span class="keyword" title="to vote/elect">wählen</span> gehen möchte, muss mein Arbeitgeber / meine Arbeitgeberin mir frei geben.',
                    translation: 'If I want to vote, my employer must give me time off',
                    correct: false
                },
                {
                    text: 'Jede Person kann ohne Zwang entscheiden, ob sie <span class="keyword" title="to vote/elect">wählen</span> möchte und wen sie wählen möchte.',
                    translation: 'Each person can decide without coercion whether they want to vote and whom they want to vote for.',
                    correct: true
                },
                {
                    text: 'Ich kann frei entscheiden, wo ich <span class="keyword" title="to vote/elect">wählen</span> gehen möchte.',
                    translation: 'I am free to decide where I want to vote.',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Wahlen: 'elections',
                'wählen': 'to vote/elect'
            }
        },
        {
            id: 120,
            question: 'Das Wahlsystem in Deutschland ist ein ...',
            translation: 'The electoral system in Germany is a ...',
            context: 'The question relates to the electoral system of the Federal Republic of Germany and its historical and legal foundations. In Germany, citizens elect members of the Bundestag according to certain fixed rules. Electoral principles such as equality, freedom and secrecy of the election play an important role in this. In order to be able to classify the system correctly, it is helpful to know different election models and their characteristics.',
            answers: [
                {
                    text: 'Zensuswahlrecht.',
                    translation: 'Census suffrage.',
                    correct: false
                },
                {
                    text: 'Dreiklassenwahlrecht.',
                    translation: 'Three-class suffrage.',
                    correct: false
                },
                {
                    text: 'Mehrheits- und Verhältniswahlrecht.',
                    translation: 'Majority and proportional representation.',
                    correct: true
                },
                {
                    text: 'allgemeines Männerwahlrecht.',
                    translation: 'universal male suffrage.',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {}
        },
        {
            id: 121,
            question: 'Eine <span class="keyword" title="party">Partei</span> möchte in den Deutschen <span class="keyword" title="Federal Parliament">Bundestag</span>. Sie muss aber einen Mindestanteil an Wählerstimmen haben. Das heißt ...',
            translation: 'A party wants to enter the German Bundestag. However, it must have a minimum share of votes. That is...',
            context: 'In Germany, the members of the German Bundestag are determined by universal suffrage. Certain legal rules apply that determine which parties may be represented in parliament. In order to prevent a fragmentation of the Bundestag, there are specifications on the necessary share of votes. This rule directly influences whether a party receives seats in the Bundestag or not.',
            answers: [
                {
                    text: '5 %-Hürde.',
                    translation: '5% hurdle.',
                    correct: true
                },
                {
                    text: 'Zulassungsgrenze.',
                    translation: 'Admission limit.',
                    correct: false
                },
                {
                    text: 'Basiswert.',
                    translation: 'Underlying asset.',
                    correct: false
                },
                {
                    text: 'Richtlinie.',
                    translation: 'Directive.',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Bundestag: 'Federal Parliament',
                Partei: 'party'
            }
        },
        {
            id: 122,
            question: 'Welchem Grundsatz unterliegen <span class="keyword" title="elections">Wahlen</span> in Deutschland? Wahlen in Deutschland sind ...',
            translation: 'What is the principle of elections in Germany? Elections in Germany are ...',
            context: 'The question refers to the basic principles according to which political elections are conducted in Germany. This refers to the constitutionally laid down electoral principles that are intended to ensure that democratic elections are fair and legitimate. In order to find the right answer, you have to know which characteristics are binding for Bundestag and other elections according to the Basic Law.',
            answers: [
                {
                    text: 'frei, gleich, geheim.',
                    translation: 'free, equal, secret.',
                    correct: true
                },
                {
                    text: 'offen, sicher, frei.',
                    translation: 'open, safe, free.',
                    correct: false
                },
                {
                    text: 'geschlossen, gleich, sicher.',
                    translation: 'closed, equal, safe.',
                    correct: false
                },
                {
                    text: 'sicher, offen, freiwillig.',
                    translation: 'Secure, open, voluntary.',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Wahlen: 'elections'
            }
        },
        {
            id: 123,
            question: 'Was ist in Deutschland die 5 %-Hürde?',
            translation: 'What is the "5% hurdle" in Germany?',
            context: 'In Germany, the Bundestag is elected according to a personalized proportional representation system. Parties, vote shares and legal regulations play an important role in determining which parties actually receive seats in parliament. In order to prevent too much fragmentation of parliament, there are certain hurdles and electoral principles that determine who is represented. Against this background, the question refers to a well-known provision of German electoral law.',
            answers: [
                {
                    text: 'Abstimmungsregelung im <span class="keyword" title="Federal Parliament">Bundestag</span> für kleine <span class="keyword" title="parties">Parteien</span>',
                    translation: 'Voting regulation in the Bundestag for small parties',
                    correct: false
                },
                {
                    text: 'Anwesenheitskontrolle im <span class="keyword" title="Federal Parliament">Bundestag</span> für Abstimmungen',
                    translation: 'Attendance control in the Bundestag for votes',
                    correct: false
                },
                {
                    text: 'Mindestanteil an Wählerstimmen, um ins <span class="keyword" title="parliament">Parlament</span> zu kommen',
                    translation: 'Minimum share of votes to get into parliament',
                    correct: true
                },
                {
                    text: 'Anwesenheitskontrolle im <span class="keyword" title="Federal Council">Bundesrat</span> für Abstimmungen',
                    translation: 'Attendance check in the Bundesrat for votes',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Bundestag: 'Federal Parliament',
                Parteien: 'parties',
                Parlament: 'parliament',
                Bundesrat: 'Federal Council'
            }
        },
        {
            id: 124,
            question: 'Die Bundestagswahl in Deutschland ist die <span class="keyword" title="election">Wahl</span> ...',
            translation: 'The Bundestag election in Germany is the election ...',
            context: 'In Germany, elections are held regularly in which citizens decide on important political offices. One of these elections is the Bundestag election. In order to answer the question correctly, one should know which state organ is elected by the Bundestag election and what tasks this body has in the German political system. Knowledge of the Bundestag, the federal government and federal structures is helpful in this regard.',
            answers: [
                {
                    text: 'des Bundeskanzlers / der <span class="keyword" title="Federal Chancellor (female)">Bundeskanzlerin</span>.',
                    translation: 'of the Federal Chancellor.',
                    correct: false
                },
                {
                    text: 'der Parlamente der Länder.',
                    translation: 'of the parliaments of the federal states.',
                    correct: false
                },
                {
                    text: 'des Parlaments für Deutschland.',
                    translation: 'of the Parliament for Germany.',
                    correct: true
                },
                {
                    text: 'des Bundespräsidenten / der <span class="keyword" title="Federal President (female)">Bundespräsidentin</span>.',
                    translation: 'of the Federal President.',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Wahl: 'election',
                Bundeskanzlerin: 'Federal Chancellor (female)',
                'Bundespräsidentin': 'Federal President (female)'
            }
        },
        {
            id: 125,
            question: 'In einer <span class="keyword" title="democracy">Demokratie</span> ist eine Funktion von regelmäßigen <span class="keyword" title="elections">Wahlen</span>, ...',
            translation: 'In a democracy, one function of regular elections, ...',
            context: 'In democracies, elections play a central role in the political order. They are an important means by which citizens can influence political decisions and the composition of the government. The question relates to the central task of regular elections and the democratic principle that is realised by them. The focus is on the relationship between the electorate, political power and the change of government.',
            answers: [
                {
                    text: 'die <span class="keyword" title="citizen">Bürger</span> und Bürgerinnen zu zwingen, ihre Stimme abzugeben.',
                    translation: 'to force citizens to cast their votes.',
                    correct: false
                },
                {
                    text: 'nach dem Willen der Wählermehrheit den Wechsel der <span class="keyword" title="government">Regierung</span> zu ermöglichen.',
                    translation: 'to enable the change of government according to the will of the majority of voters.',
                    correct: true
                },
                {
                    text: 'im Land bestehende <span class="keyword" title="laws">Gesetze</span> beizubehalten.',
                    translation: 'to maintain existing laws in the country.',
                    correct: false
                },
                {
                    text: 'den Armen mehr Macht zu geben.',
                    translation: 'to give more power to the poor.',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Demokratie: 'democracy',
                Wahlen: 'elections',
                'Bürger': 'citizen',
                Regierung: 'government',
                Gesetze: 'laws'
            }
        },
        {
            id: 126,
            question: 'Was bekommen wahlberechtigte <span class="keyword" title="citizen">Bürger</span> und Bürgerinnen in Deutschland vor einer <span class="keyword" title="election">Wahl</span>?',
            translation: 'What do eligible voters in Germany get before an election?',
            context: 'In Germany, elections are regularly held at various levels, for example at municipal, state or federal level. In order for citizens to be able to exercise their right to vote, they must be informed in good time about the date and the most important information about the election. This also includes where this information comes from and what documents you receive in advance in order to be able to participate in the election.',
            answers: [
                {
                    text: 'eine <span class="keyword" title="voting notification">Wahlbenachrichtigung</span> von der Gemeinde',
                    translation: 'a voter\'s notification from the municipality',
                    correct: true
                },
                {
                    text: 'eine Wahlerlaubnis vom Bundespräsidenten / von der <span class="keyword" title="Federal President (female)">Bundespräsidentin</span>',
                    translation: 'a voting permit from the Federal President',
                    correct: false
                },
                {
                    text: 'eine Benachrichtigung von der <span class="keyword" title="Federal Convention">Bundesversammlung</span>',
                    translation: 'a notification from the Federal Assembly',
                    correct: false
                },
                {
                    text: 'eine Benachrichtigung vom Pfarramt',
                    translation: 'a notification from the parish office',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                'Bürger': 'citizen',
                Wahl: 'election',
                Wahlbenachrichtigung: 'voting notification',
                'Bundespräsidentin': 'Federal President (female)',
                Bundesversammlung: 'Federal Convention'
            }
        },
        {
            id: 127,
            question: 'Warum gibt es die 5 %-Hürde im Wahlgesetz der Bundesrepublik Deutschland? Es gibt sie, weil ...',
            translation: 'Why is there the 5% hurdle in the electoral law of the Federal Republic of Germany? It exists because...',
            context: 'In the Federal Republic of Germany, the electoral law regulates how parties can enter the Bundestag. An important rule is the 5% hurdle. It stipulates that a party must receive at least five percent of the votes in order to get seats in parliament. This rule arose from historical experience and is intended to have an impact on the composition of parliament and the formation of stable governments. The question helps to understand why this rule was introduced.',
            answers: [
                {
                    text: 'die Programme von vielen kleinen <span class="keyword" title="parties">Parteien</span> viele Gemeinsamkeiten haben.',
                    translation: 'the programs of many small parties have many things in common.',
                    correct: false
                },
                {
                    text: 'die <span class="keyword" title="citizen">Bürger</span> und Bürgerinnen bei vielen kleinen <span class="keyword" title="parties">Parteien</span> die Orientierung verlieren können.',
                    translation: 'die Bürger und Bürgerinnen bei vielen kleinen Parteien die Orientierung verlieren können.',
                    correct: false
                },
                {
                    text: 'viele kleine <span class="keyword" title="parties">Parteien</span> die Regierungsbildung erschweren.',
                    translation: 'many small parties make it difficult to form a government.',
                    correct: true
                },
                {
                    text: 'die kleinen <span class="keyword" title="parties">Parteien</span> nicht so viel Geld haben, um die Politiker und Politikerinnen zu bezahlen.',
                    translation: 'the small parties do not have so much money to pay the politicians.',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Parteien: 'parties',
                'Bürger': 'citizen'
            }
        },
        {
            id: 128,
            question: 'Parlamentsmitglieder, die von den Bürgern und Bürgerinnen gewählt werden, nennt man ...',
            translation: 'Members of parliament who are elected by the citizens are called ...',
            context: 'In a democracy, citizens elect their representatives who represent their interests in parliament. These people work on laws, discuss political issues and make decisions for the country. The question relates to how to correctly designate these elected members of parliament and distinguishes them from other political offices such as heads of government or diplomats.',
            answers: [
                {
                    text: '<span class="keyword" title="member of parliament">Abgeordnete</span>.',
                    translation: 'Members of parliament.',
                    correct: true
                },
                {
                    text: 'Kanzler / Kanzlerinnen.',
                    translation: 'Chancellors.',
                    correct: false
                },
                {
                    text: 'Botschafter / Botschafterinnen.',
                    translation: 'Ambassadors.',
                    correct: false
                },
                {
                    text: 'Ministerpräsidenten / Ministerpräsidentinnen.',
                    translation: 'Minister-Presidents.',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Abgeordnete: 'member of parliament'
            }
        },
        {
            id: 129,
            question: 'Vom <span class="keyword" title="people">Volk</span> gewählt wird in Deutschland ...',
            translation: 'In Germany, elections are held by the people ...',
            context: 'In Germany, there are various political offices at the federal and state level. These offices are filled in different ways: some by direct elections of citizens, others by parliaments or special electoral assemblies. In order to be able to answer the question, it is important to know which body or person is directly elected by the people and how the election procedures for the Bundestag, Federal President, Federal Chancellor and Minister-President are regulated.',
            answers: [
                {
                    text: 'der <span class="keyword" title="Federal Chancellor">Bundeskanzler</span> / die <span class="keyword" title="Federal Chancellor (female)">Bundeskanzlerin</span>.',
                    translation: 'the Federal Chancellor.',
                    correct: false
                },
                {
                    text: 'der <span class="keyword" title="state premier">Ministerpräsident</span> / die <span class="keyword" title="state premier (female)">Ministerpräsidentin</span> eines Bundeslandes.',
                    translation: 'the Minister-President of a federal state.',
                    correct: false
                },
                {
                    text: 'der <span class="keyword" title="Federal Parliament">Bundestag</span>.',
                    translation: 'the Bundestag.',
                    correct: true
                },
                {
                    text: 'der <span class="keyword" title="Federal President">Bundespräsident</span> / die <span class="keyword" title="Federal President (female)">Bundespräsidentin</span>.',
                    translation: 'the Federal President.',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Volk: 'people',
                Bundeskanzlerin: 'Federal Chancellor (female)',
                Bundeskanzler: 'Federal Chancellor',
                'Ministerpräsidentin': 'state premier (female)',
                'Ministerpräsident': 'state premier',
                Bundestag: 'Federal Parliament',
                'Bundespräsidentin': 'Federal President (female)',
                'Bundespräsident': 'Federal President'
            }
        },
        {
            id: 130,
            question: 'Welcher <span class="keyword" title="ballot">Stimmzettel</span> wäre bei einer Bundestagswahl gültig?',
            translation: 'Which ballot paper would be valid in a Bundestag election?',
            context: 'In Bundestag elections in Germany, voters receive a ballot paper with a first and second vote. In order for the ballot paper to be valid, certain rules must be observed, such as clear marking, only permitted markings and no additions or comments. In the following question, several exemplary ballot papers are shown. The aim is to assess which of them is considered valid according to the legal requirements.',
            answers: [
                {
                    text: '1',
                    translation: '1',
                    correct: true
                },
                {
                    text: '2',
                    translation: '2',
                    correct: false
                },
                {
                    text: '3',
                    translation: '3',
                    correct: false
                },
                {
                    text: '4',
                    translation: '4',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            image: 'images/q212.75bffc4d.png',
            keywords: {
                Stimmzettel: 'ballot'
            }
        },
        {
            id: 131,
            question: 'In Deutschland ist ein Bürgermeister / eine Bürgermeisterin',
            translation: 'In Germany, a mayor is ...',
            context: 'The question relates to the political and administrative system in Germany. At the municipal level, there are municipalities and cities that have their own self-government. There, elected representatives take on certain tasks and represent the municipality to the outside world. To find the right answer, you should know what functions exist in a municipality and which tasks belong to school, banking or parties.',
            answers: [
                {
                    text: 'der Leiter / die Leiterin einer <span class="keyword" title="school">Schule</span>.',
                    translation: 'the head of a school',
                    correct: false
                },
                {
                    text: 'der Chef / die Chefin einer Bank.',
                    translation: 'the head of a bank',
                    correct: false
                },
                {
                    text: 'das Oberhaupt einer Gemeinde.',
                    translation: 'the head of a municipality',
                    correct: true
                },
                {
                    text: 'der / die Vorsitzende einer <span class="keyword" title="party">Partei</span>.',
                    translation: 'the chairman of a party',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {
                Schule: 'school',
                Partei: 'party'
            }
        },
        {
            id: 132,
            question: 'Viele Menschen in Deutschland arbeiten in ihrer Freizeit ehrenamtlich. Was bedeutet das?',
            translation: 'Many people in Germany work voluntarily in their free time. What does that mean?',
            context: 'In Germany, many people are involved in society alongside their job or studies. For example, they support other people, organize events or help in social, cultural or sporting areas. This commitment plays an important role in living together and is often exercised out of personal motivation. The following question relates to this form of voluntary activity.',
            answers: [
                {
                    text: 'Sie arbeiten als Soldaten / Soldatinnen.',
                    translation: 'Sie arbeiten als Soldaten / Soldatinnen.',
                    correct: false
                },
                {
                    text: 'Sie arbeiten freiwillig und unbezahlt in Vereinen und Verbänden.',
                    translation: 'They work voluntarily and unpaid in clubs and associations.',
                    correct: true
                },
                {
                    text: 'Sie arbeiten in der <span class="keyword" title="Federal Government">Bundesregierung</span>.',
                    translation: 'You work in the federal government.',
                    correct: false
                },
                {
                    text: 'Sie arbeiten in einem Krankenhaus und verdienen dabei Geld.',
                    translation: 'They work in a hospital and earn money in the process.',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Bundesregierung: 'Federal Government'
            }
        },
        {
            id: 133,
            question: 'Was ist bei Bundestags- und Landtagswahlen in Deutschland erlaubt?',
            translation: 'What is allowed in federal and state elections in Germany?',
            context: 'In Germany, there are clear legal regulations for the conduct of federal and state elections. These determine who is entitled to vote, which forms of voting are permitted and how the secrecy of the ballot is protected. In order to be able to answer the following question, it is important to know what choices are available, from what age one can vote and which actions are expressly prohibited in order to ensure a free and secret election.',
            answers: [
                {
                    text: 'Der Ehemann wählt für seine Frau mit.',
                    translation: 'The husband votes for his wife.',
                    correct: false
                },
                {
                    text: 'Man kann durch Briefwahl seine Stimme abgeben.',
                    translation: 'You can cast your vote by postal vote.',
                    correct: true
                },
                {
                    text: 'Man kann am Wahltag telefonisch seine Stimme abgeben.',
                    translation: 'You can cast your vote by telephone on election day.',
                    correct: false
                },
                {
                    text: 'Kinder ab dem Alter von 14 Jahren dürfen <span class="keyword" title="to vote/elect">wählen</span>.',
                    translation: 'Children from the age of 14 are allowed to vote.',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                'wählen': 'to vote/elect'
            }
        },
        {
            id: 134,
            question: 'Man will die Buslinie abschaffen, mit der Sie immer zur Arbeit fahren. Was können Sie machen, um die Buslinie zu erhalten?',
            translation: 'They want to abolish the bus line that you always use to get to work. What can you do to maintain the bus line?',
            context: 'Imagine that you use a certain bus line every day to get to work. One day you learn that this bus line is to be abolished for cost reasons. Many people from the surrounding area would be affected by this and would have to change their habits. They are now considering what options there are for citizens to get involved in order to maintain the bus line or to influence the decision of the municipality.',
            answers: [
                {
                    text: 'Ich beteilige mich an einer Bürgerinitiative für die Erhaltung der Buslinie oder gründe selber eine Initiative.',
                    translation: 'I participate in a citizens\' initiative for the preservation of the bus line or found an initiative myself.',
                    correct: true
                },
                {
                    text: 'Ich werde Mitglied in einem Sportverein und trainiere Rad fahren.',
                    translation: 'I become a member of a sports club and train cycling.',
                    correct: false
                },
                {
                    text: 'Ich wende mich an das Finanzamt, weil ich als Steuerzahler / Steuerzahlerin ein Recht auf die Buslinie habe.',
                    translation: 'I am contacting the tax office because, as a taxpayer, I have a right to the bus line.',
                    correct: false
                },
                {
                    text: 'Ich schreibe einen Brief an das Forstamt der Gemeinde.',
                    translation: 'I write a letter to the forestry office of the municipality.',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {}
        },
        {
            id: 135,
            question: 'Wen vertreten die Gewerkschaften in Deutschland?',
            translation: 'Who do the trade unions in Germany represent?',
            context: 'In Germany, trade unions play an important role in working life. They advocate for certain groups, negotiate with employers about wages, working hours and working conditions, and represent interests in politics and society. In order to be able to answer the question correctly, one should know which group of people is organized and supported by trade unions.',
            answers: [
                {
                    text: 'großeUnternehmen',
                    translation: 'großeUnternehmen',
                    correct: false
                },
                {
                    text: 'kleine Unternehmen',
                    translation: 'small businesses',
                    correct: false
                },
                {
                    text: 'Selbstständige',
                    translation: 'Self-employed',
                    correct: false
                },
                {
                    text: 'Arbeitnehmer und Arbeitnehmerinnen',
                    translation: 'Arbeitnehmer und Arbeitnehmerinnen',
                    correct: true
                }
            ],
            category: 'Society & Law',
            keywords: {}
        },
        {
            id: 136,
            question: 'Sie gehen in Deutschland zum Arbeitsgericht bei ...',
            translation: 'They go to the labour court in Germany at ...',
            context: 'Imagine you have a legal problem in Germany and are thinking about which court is competent. Depending on the nature of the conflict – for example, in working life, in road traffic, at home or in the private sphere – different courts are responsible. The following question tests your knowledge of the case in which to turn to the labour court.',
            answers: [
                {
                    text: 'falscher Nebenkostenabrechnung.',
                    translation: 'incorrect utility bill.',
                    correct: false
                },
                {
                    text: 'ungerechtfertigter Kündigung durch Ihren Chef / Ihre Chefin.',
                    translation: 'unfair dismissal by your boss.',
                    correct: true
                },
                {
                    text: 'Problemen mit den Nachbarn / Nachbarinnen.',
                    translation: 'Problems with the neighbors.',
                    correct: false
                },
                {
                    text: 'Schwierigkeiten nach einem Verkehrsunfall.',
                    translation: 'Difficulties after a traffic accident.',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {}
        },
        {
            id: 137,
            question: 'Welches <span class="keyword" title="court">Gericht</span> ist in Deutschland bei Konflikten in der Arbeitswelt zuständig?',
            translation: 'Which court is responsible in Germany for conflicts in the world of work?',
            context: 'In Germany, legal disputes are assigned to different courts depending on the subject matter. In the event of problems between employees and employers, such as dismissals, wage claims or employment contracts, labour law applies. The question relates to which court is specifically responsible for such conflicts in the world of work and decides these cases legally.',
            answers: [
                {
                    text: 'das Familiengericht',
                    translation: 'the family court',
                    correct: false
                },
                {
                    text: 'das Strafgericht',
                    translation: 'the criminal court',
                    correct: false
                },
                {
                    text: 'das Arbeitsgericht',
                    translation: 'the Labour Court',
                    correct: true
                },
                {
                    text: 'das Amtsgericht',
                    translation: 'the Local Court',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {
                Gericht: 'court'
            }
        },
        {
            id: 138,
            question: 'Was kann ich in Deutschland machen, wenn mir mein Arbeitgeber / meine Arbeitgeberin zu Unrecht gekündigt hat?',
            translation: 'What can I do in Germany if my employer has wrongly dismissed me?',
            context: 'In Germany, there are clear labour law rules to protect employees. When someone receives a notice of termination and has the impression that it is unjustified or illegal, the question often arises as to what legal steps are possible and sensible. Deadlines, competent bodies and suitable procedures are particularly important in order to protect one\'s own rights and to achieve possible continued employment or compensation.',
            answers: [
                {
                    text: 'weiter arbeiten und freundlich zum Chef / zur Chefin sein',
                    translation: 'weiter arbeiten und freundlich zum Chef / zur Chefin sein',
                    correct: false
                },
                {
                    text: 'ein Mahnverfahren gegen den Arbeitgeber / die Arbeitgeberin führen',
                    translation: 'conduct dunning proceedings against the employer',
                    correct: false
                },
                {
                    text: 'Kündigungsschutzklage erheben',
                    translation: 'File an action for protection against dismissal',
                    correct: true
                },
                {
                    text: 'den Arbeitgeber / die Arbeitgeberin bei der Polizei anzeigen',
                    translation: 'den Arbeitgeber / die Arbeitgeberin bei der Polizei anzeigen',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {}
        },
        {
            id: 139,
            question: 'Wann kommt es in Deutschland zu einem Prozess vor <span class="keyword" title="court">Gericht</span>? Wenn jemand ...',
            translation: 'When will there be a trial in court in Germany? If someone ...',
            context: 'This question comes from the field of civics and law in Germany. It examines the understanding of when state courts are involved and what actions have legal consequences. This is about the difference between personal freedom, administrative offenses and real crimes. The context helps to identify in which cases a court case is necessary and when not, based on the basic principles of the German rule of law.',
            answers: [
                {
                    text: 'zu einer anderen <span class="keyword" title="religion">Religion</span> übertritt.',
                    translation: 'converts to another religion',
                    correct: false
                },
                {
                    text: 'eine Straftat begangen hat und angeklagt wird.',
                    translation: 'has committed a criminal offence and is being charged',
                    correct: true
                },
                {
                    text: 'eine andere Meinung als die der <span class="keyword" title="government">Regierung</span> vertritt.',
                    translation: 'has a different opinion from that of the government',
                    correct: false
                },
                {
                    text: 'sein Auto falsch geparkt hat und es abgeschleppt wird.',
                    translation: 'has parked his car incorrectly and it is towed away',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {
                Gericht: 'court',
                Religion: 'religion',
                Regierung: 'government'
            }
        },
        {
            id: 140,
            question: 'Was macht ein Schöffe / eine Schöffin in Deutschland? Er / Sie ...',
            translation: 'What does a juror do in Germany? He/she ...',
            context: 'In Germany, in addition to professional judges, volunteer lay judges also participate in the court. These are called lay judges. They are selected from the population and take part in court hearings, especially in criminal proceedings. In doing so, they have certain rights and obligations and bear responsibility for court decisions. Against this background, the question arises as to her exact task in court.',
            answers: [
                {
                    text: 'entscheidet mit Richtern / Richterinnen über Schuld und Strafe.',
                    translation: 'decides with judges on guilt and punishment',
                    correct: true
                },
                {
                    text: 'gibt Bürgern / Bürgerinnen rechtlichen Rat.',
                    translation: 'gives legal advice to citizens',
                    correct: false
                },
                {
                    text: 'stellt Urkunden aus.',
                    translation: 'issues certificates',
                    correct: false
                },
                {
                    text: 'verteidigt den Angeklagten / die Angeklagte.',
                    translation: 'defends the defendant',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {}
        },
        {
            id: 141,
            question: 'Wer berät in Deutschland Personen bei Rechtsfragen und vertritt sie vor <span class="keyword" title="court">Gericht</span>?',
            translation: 'Who advises people in Germany on legal issues and represents them in court?',
            context: 'The question relates to the German legal system and the various roles in it. In Germany, there are different people with legal tasks, for example in the courtroom or during investigations. Not all of them are allowed to advise citizens or represent them in court. In order to find the right answer, it is necessary to know which professional group is legally responsible for helping clients with legal issues and representing their interests in court proceedings.',
            answers: [
                {
                    text: 'ein Rechtsanwalt / eine Rechtsanwältin',
                    translation: 'ein Rechtsanwalt / eine Rechtsanwältin',
                    correct: true
                },
                {
                    text: 'ein <span class="keyword" title="judge">Richter</span> / eine <span class="keyword" title="judge (female)">Richterin</span>',
                    translation: 'ein Richter / eine Richterin',
                    correct: false
                },
                {
                    text: 'ein Schöffe / eine Schöffin',
                    translation: 'ein Schöffe / eine Schöffin',
                    correct: false
                },
                {
                    text: 'ein Staatsanwalt / eine Staatsanwältin',
                    translation: 'ein Staatsanwalt / eine Staatsanwältin',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {
                Gericht: 'court',
                Richterin: 'judge (female)',
                Richter: 'judge'
            }
        },
        {
            id: 142,
            question: 'Was ist die Hauptaufgabe eines Richters / einer <span class="keyword" title="judge (female)">Richterin</span> in Deutschland? Ein <span class="keyword" title="judge">Richter</span> / eine Richterin ...',
            translation: 'What is the main task of a judge in Germany? A judge ...',
            context: 'The question relates to the German legal system and the role of judges in it. It is intended to examine whether one understands the tasks of judges in the structure of the state and how they differ from other professions in the judiciary. This is about their function in the court and their responsibility in the judiciary.',
            answers: [
                {
                    text: 'vertritt <span class="keyword" title="citizen">Bürger</span> und Bürgerinnen vor einem <span class="keyword" title="court">Gericht</span>.',
                    translation: 'represents citizens before a court of law',
                    correct: false
                },
                {
                    text: 'arbeitet an einem <span class="keyword" title="court">Gericht</span> und spricht Urteile.',
                    translation: 'works in a court and pronounces judgments',
                    correct: true
                },
                {
                    text: 'ändert <span class="keyword" title="laws">Gesetze</span>.',
                    translation: 'amends laws',
                    correct: false
                },
                {
                    text: 'betreut Jugendliche vor <span class="keyword" title="court">Gericht</span>.',
                    translation: 'supervises juveniles in court',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {
                Richterin: 'judge (female)',
                Richter: 'judge',
                Gericht: 'court',
                'Bürger': 'citizen',
                Gesetze: 'laws'
            }
        },
        {
            id: 143,
            question: 'Ein <span class="keyword" title="judge">Richter</span> / eine <span class="keyword" title="judge (female)">Richterin</span> in Deutschland gehört zur',
            translation: 'A judge in Germany belongs to the ...',
            context: 'The question relates to the separation of powers in Germany. The state is divided into three powers: legislative (legislature), executive (execution of laws) and judiciary (judiciary). In order to find the right answer, it is necessary to know what role judges have in the German state system and to which of these powers they are assigned.',
            answers: [
                {
                    text: '<span class="keyword" title="judiciary">Judikative</span>.',
                    translation: 'Judiciary',
                    correct: true
                },
                {
                    text: '<span class="keyword" title="executive">Exekutive</span>.',
                    translation: 'executive.',
                    correct: false
                },
                {
                    text: 'Operative.',
                    translation: 'Operative',
                    correct: false
                },
                {
                    text: '<span class="keyword" title="legislative">Legislative</span>.',
                    translation: 'Legislative',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Richterin: 'judge (female)',
                Richter: 'judge',
                Judikative: 'judiciary',
                Exekutive: 'executive',
                Legislative: 'legislative'
            }
        },
        {
            id: 144,
            question: 'Ein <span class="keyword" title="judge">Richter</span> / eine <span class="keyword" title="judge (female)">Richterin</span> gehört in Deutschland zur',
            translation: 'In Germany, a judge belongs to the ...',
            context: 'The question relates to the organization of the state in Germany and the principle of the separation of powers. This principle divides state power into different areas to prevent abuse of power. Each area has its own tasks and responsibilities. In order to be able to answer this question, it is necessary to know what role judges play in the state system and to which state authority their work is assigned.',
            answers: [
                {
                    text: 'vollziehenden Gewalt.',
                    translation: 'executive power.',
                    correct: false
                },
                {
                    text: 'rechtsprechenden Gewalt.',
                    translation: 'judiciary.',
                    correct: true
                },
                {
                    text: 'planenden Gewalt.',
                    translation: 'planning violence.',
                    correct: false
                },
                {
                    text: 'gesetzgebenden Gewalt.',
                    translation: 'legislative power.',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Richterin: 'judge (female)',
                Richter: 'judge'
            }
        },
        {
            id: 145,
            question: 'In Deutschland wird die Staatsgewalt geteilt. Für welche Staatsgewalt arbeitet ein <span class="keyword" title="judge">Richter</span> / eine <span class="keyword" title="judge (female)">Richterin</span>? Für die ...',
            translation: 'In Germany, state power is divided. For which state authority does a judge work? For the ...',
            context: 'In Germany, the principle of the separation of powers applies. This means that state power is distributed among different areas to prevent abuse of power. These areas have different tasks: laws are made, executed and controlled. In order to answer the question correctly, it is necessary to know what tasks a judge performs in the state and to which area of state authority this activity belongs.',
            answers: [
                {
                    text: '<span class="keyword" title="judiciary">Judikative</span>.',
                    translation: 'Judiciary',
                    correct: true
                },
                {
                    text: '<span class="keyword" title="executive">Exekutive</span>.',
                    translation: 'Executive',
                    correct: false
                },
                {
                    text: 'Presse.',
                    translation: 'Press',
                    correct: false
                },
                {
                    text: '<span class="keyword" title="legislative">Legislative</span>.',
                    translation: 'Legislative',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Richterin: 'judge (female)',
                Richter: 'judge',
                Judikative: 'judiciary',
                Exekutive: 'executive',
                Legislative: 'legislative'
            }
        },
        {
            id: 146,
            question: 'Wie nennt man in Deutschland ein Verfahren vor einem <span class="keyword" title="court">Gericht</span>?',
            translation: 'What is a court case called in Germany?',
            context: 'In Germany, there are various terms in the legal system for processes in court. Some words are used in everyday language, others are legal terms. In order to find the right answer, it is helpful to know what a court case is officially called and which of the terms tend to come from other areas such as administration, technology or documentation.',
            answers: [
                {
                    text: 'Programm',
                    translation: 'Program',
                    correct: false
                },
                {
                    text: 'Prozedur',
                    translation: 'Procedure',
                    correct: false
                },
                {
                    text: 'Protokoll',
                    translation: 'Protocol',
                    correct: false
                },
                {
                    text: 'Prozess',
                    translation: 'Process',
                    correct: true
                }
            ],
            category: 'Society & Law',
            keywords: {
                Gericht: 'court'
            }
        },
        {
            id: 147,
            question: 'Was ist die Arbeit eines Richters / einer <span class="keyword" title="judge (female)">Richterin</span> in Deutschland?',
            translation: 'What is the work of a judge in Germany?',
            context: 'In this context, it is about the political and legal system in Germany. The question is intended to examine the tasks of different state roles. The profession of judge is particularly considered and distinguished from other activities such as legislation, planning or governance. Understanding the separation of powers and the respective responsibilities in the state helps to choose the right answer.',
            answers: [
                {
                    text: 'Deutschland regieren',
                    translation: 'Governing Germany',
                    correct: false
                },
                {
                    text: 'Recht sprechen',
                    translation: 'Administering justice',
                    correct: true
                },
                {
                    text: 'Pläne erstellen',
                    translation: 'Create plans',
                    correct: false
                },
                {
                    text: '<span class="keyword" title="laws">Gesetze</span> erlassen',
                    translation: 'Enact laws',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {
                Richterin: 'judge (female)',
                Gesetze: 'laws'
            }
        },
        {
            id: 148,
            question: 'Was ist eine Aufgabe der Polizei in Deutschland?',
            translation: 'What is the task of the police in Germany?',
            context: 'The question relates to the political and legal system in Germany. This involves the tasks of various state institutions, such as the police, the Bundeswehr and parliament. In order to find the right answer, one should know what responsibilities these bodies have and how they contribute to security, order and legislation in the state. Knowledge from political or social studies lessons helps with understanding.',
            answers: [
                {
                    text: 'das Land zu verteidigen',
                    translation: 'to defend the country',
                    correct: false
                },
                {
                    text: 'die Bürgerinnen und <span class="keyword" title="citizen">Bürger</span> abzuhören',
                    translation: 'to listen to the citizens',
                    correct: false
                },
                {
                    text: 'die <span class="keyword" title="laws">Gesetze</span> zu beschließen',
                    translation: 'to pass the laws',
                    correct: false
                },
                {
                    text: 'die Einhaltung von Geseten zu überwachen',
                    translation: 'die Einhaltung von Geseten zu überwachen',
                    correct: true
                }
            ],
            category: 'Society & Law',
            keywords: {
                'Bürger': 'citizen',
                Gesetze: 'laws'
            }
        },
        {
            id: 149,
            question: 'Wer kann Gerichtsschöffe / Gerichtsschöffin in Deutschland werden?',
            translation: 'A court lay judge in Germany is ...',
            context: 'The question relates to the German legal system and the participation of citizens in court proceedings. In certain courts, in addition to professional judges, lay judges are also involved in decision-making decisions. The term "court lay judge" describes such a role. In order to find the right answer, it is important to know what tasks and prerequisites these people have and whether they hold an office, a profession or an honorary function.',
            answers: [
                {
                    text: 'alle in Deutschland geborenen Einwohner / Einwohnerinnen über 18 Jahre',
                    translation: 'alle in Deutschland geborenen Einwohner / Einwohnerinnen über 18 Jahre',
                    correct: false
                },
                {
                    text: 'alle deutschen Staatsangehörigen älter als 24 und jünger als 70 Jahre',
                    translation: 'alle deutschen Staatsangehörigen älter als 24 und jünger als 70 Jahre',
                    correct: true
                },
                {
                    text: 'alle Personen, die seit mindestens 5 Jahren in Deutschland leben',
                    translation: 'alle Personen, die seit mindestens 5 Jahren in Deutschland leben',
                    correct: false
                },
                {
                    text: 'nur Personen mit einem abgeschlossenen Jurastudium',
                    translation: 'nur Personen mit einem abgeschlossenen Jurastudium',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {}
        },
        {
            id: 150,
            question: 'Ein Gerichtsschöffe / eine Gerichtsschöffin in Deutschland ist ...',
            translation: 'A court lay judge in Germany is ...',
            context: 'The question relates to the German legal system and the participation of citizens in court proceedings. In certain courts, in addition to professional judges, lay judges are also involved in decision-making decisions. The term "court lay judge" describes such a role. In order to find the right answer, it is important to know what tasks and prerequisites these people have and whether they hold an office, a profession or an honorary function.',
            answers: [
                {
                    text: 'der Stellvertreter / die Stellvertreterin des Stadtoberhaupts.',
                    translation: 'the deputy of the head of the city',
                    correct: false
                },
                {
                    text: 'ein ehrenamtlicher <span class="keyword" title="judge">Richter</span> / eine ehrenamtliche <span class="keyword" title="judge (female)">Richterin</span>.',
                    translation: 'an honorary judge',
                    correct: true
                },
                {
                    text: 'ein Mitglied eines Gemeinderats.',
                    translation: 'a member of a municipal council.',
                    correct: false
                },
                {
                    text: 'eine Person, die Jura studiert hat.',
                    translation: 'a person who has studied law',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {
                Richterin: 'judge (female)',
                Richter: 'judge'
            }
        },
        {
            id: 151,
            question: 'Wer baute die <span class="keyword" title="wall">Mauer</span> in Berlin?',
            translation: 'Who built the Wall in Berlin?',
            context: 'After the Second World War, Germany was divided into East and West and Berlin was a divided city in the middle of the Cold War. Political tensions, different economic systems and the emigration of many people from the East led to drastic measures. In this context, the Berlin Wall was built in 1961 to secure the border between East and West Berlin.',
            answers: [
                {
                    text: 'Großbritannien',
                    translation: 'United Kingdom',
                    correct: false
                },
                {
                    text: 'die <span class="keyword" title="GDR (East Germany)">DDR</span>',
                    translation: 'the GDR',
                    correct: true
                },
                {
                    text: 'die Bundesrepublik Deutschland',
                    translation: 'the Federal Republic of Germany',
                    correct: false
                },
                {
                    text: 'die USA',
                    translation: 'the USA',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {
                Mauer: 'wall',
                DDR: 'GDR (East Germany)'
            }
        },
        {
            id: 152,
            question: 'Wann waren die Nationalsozialisten mit Adolf Hitler in Deutschland an der Macht?',
            translation: 'When were the National Socialists in power in Germany with Adolf Hitler?',
            context: 'The question refers to the time of National Socialism in Germany. At that time, Adolf Hitler took over the political leadership and established a dictatorship. This era was marked by profound political changes, persecution, the Second World War and massive human rights violations. In order to find the right answer, it is important to place the historical events surrounding Hitler\'s seizure of power and the end of his reign in time.',
            answers: [
                {
                    text: '1918 bis 1923',
                    translation: '1918 to 1923',
                    correct: false
                },
                {
                    text: '1932 bis 1950',
                    translation: '1932 to 1950',
                    correct: false
                },
                {
                    text: '1933 bis 1945',
                    translation: '1933 to 1945',
                    correct: true
                },
                {
                    text: '1945 bis 1989',
                    translation: '1945 to 1989',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {}
        },
        {
            id: 153,
            question: 'Was war am 8. Mai 1945?',
            translation: 'What happened on May 8, 1945?',
            context: 'The question refers to an important date in German and European history in the 20th century. Several historical events are put to choose from, which are far apart in time. In order to find the right answer, it is helpful to have a basic knowledge of the course of the Second World War, the post-war period in Germany, as well as significant political developments such as changes of government or the Cold War.',
            answers: [
                {
                    text: 'Tod Adolf Hitlers',
                    translation: 'Tod Adolf Hitlers',
                    correct: false
                },
                {
                    text: 'Beginn des Berliner Mauerbaus',
                    translation: 'Beginning of the construction of the Berlin Wall',
                    correct: false
                },
                {
                    text: '<span class="keyword" title="election">Wahl</span> von Konrad Adenauer zum <span class="keyword" title="Federal Chancellor">Bundeskanzler</span>',
                    translation: 'Election of Konrad Adenauer as Federal Chancellor',
                    correct: false
                },
                {
                    text: 'Ende des Zweiten Weltkriegs in Europa',
                    translation: 'End of World War II in Europe',
                    correct: true
                }
            ],
            category: 'History',
            keywords: {
                Bundeskanzler: 'Federal Chancellor',
                Wahl: 'election'
            }
        },
        {
            id: 154,
            question: 'Wann war der Zweite Weltkrieg zu Ende?',
            translation: 'When did the Second World War end?',
            context: 'World War II was a global conflict involving many countries and bringing about major political and social changes. It began in Europe with the German attack on Poland and ended with the capitulation of the Axis powers. The question aims to identify the right historical year for the end of the war.',
            answers: [
                {
                    text: '1933',
                    translation: '1933',
                    correct: false
                },
                {
                    text: '1945',
                    translation: '1945',
                    correct: true
                },
                {
                    text: '1949',
                    translation: '1949',
                    correct: false
                },
                {
                    text: '1961',
                    translation: '1961',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {}
        },
        {
            id: 155,
            question: 'Wann waren die Nationalsozialisten in Deutschland an der Macht?',
            translation: 'When were the National Socialists in power in Germany?',
            context: 'The question refers to German history of the 20th century. This refers to the time when the NSDAP under Adolf Hitler held political power. During this period, democracy was abolished, a dictatorship was established and far-reaching political, social and military changes were carried out. The end of this era is closely linked to the outcome of the Second World War.',
            answers: [
                {
                    text: '1888 bis 1918',
                    translation: '1888 to 1918',
                    correct: false
                },
                {
                    text: '1921 bis 1934',
                    translation: '1921 to 1934',
                    correct: false
                },
                {
                    text: '1933 bis 1945',
                    translation: '1933 to 1945',
                    correct: true
                },
                {
                    text: '1949 bis 1963',
                    translation: '1949 to 1963',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {}
        },
        {
            id: 156,
            question: 'In welchem Jahr wurde Hitler Reichskanzler?',
            translation: 'What year did Hitler become Chancellor of the Reich?',
            context: 'The following question refers to an important event in German history during the Weimar Republic. Adolf Hitler was the leader of the National Socialist German Workers\' Party (NSDAP). After years of political instability and economic problems, he took over a central government position that decisively shaped the further course of Germany. The question aims to determine the year in which Hitler was officially appointed Reich Chancellor.',
            answers: [
                {
                    text: '1923',
                    translation: '1923',
                    correct: false
                },
                {
                    text: '1927',
                    translation: '1927',
                    correct: false
                },
                {
                    text: '1933',
                    translation: '1933',
                    correct: true
                },
                {
                    text: '1936',
                    translation: '1936',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {}
        },
        {
            id: 157,
            question: 'Die Nationalsozialisten mit Adolf Hitler errichteten 1933 in Deutschland ...',
            translation: 'In 1933, the National Socialists with Adolf Hitler set up a ...',
            context: 'The question relates to the political development of Germany after the National Socialists came to power in 1933. During this time, the political system changed fundamentally. Democratic structures of the Weimar Republic were abolished, political opponents were persecuted and power was strongly centralised. Understanding the historical events and forms of rule at that time helps to recognize the correct statement about the state that emerged.',
            answers: [
                {
                    text: 'eine <span class="keyword" title="dictatorship">Diktatur</span>.',
                    translation: 'a dictatorship.',
                    correct: true
                },
                {
                    text: 'einen demokratischen <span class="keyword" title="state">Staat</span>.',
                    translation: 'a democratic state.',
                    correct: false
                },
                {
                    text: 'eine <span class="keyword" title="monarchy">Monarchie</span>.',
                    translation: 'a monarchy.',
                    correct: false
                },
                {
                    text: 'ein Fürstentum.',
                    translation: 'a principality.',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {
                Diktatur: 'dictatorship',
                Staat: 'state',
                Monarchie: 'monarchy'
            }
        },
        {
            id: 158,
            question: 'Das „Dritte Reich“ war eine ...',
            translation: 'The "Third Reich" was a ...',
            context: 'The question refers to the form of government in Germany during the National Socialist era from 1933 to 1945. During this era, Adolf Hitler took power and fundamentally changed the political system. Democratic structures of the Weimar Republic were abolished, parties were banned and political opponents were persecuted. In order to find the right answer, it is important to know the characteristics of different forms of government such as monarchy, democracy, soviet republic and dictatorship and to compare them with the historical conditions of that time.',
            answers: [
                {
                    text: '<span class="keyword" title="dictatorship">Diktatur</span>.',
                    translation: 'dictatorship.',
                    correct: true
                },
                {
                    text: '<span class="keyword" title="democracy">Demokratie</span>.',
                    translation: 'Democracy.',
                    correct: false
                },
                {
                    text: '<span class="keyword" title="monarchy">Monarchie</span>.',
                    translation: 'Monarchy.',
                    correct: false
                },
                {
                    text: 'Räterepublik.',
                    translation: 'Soviet Republic.',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {
                Diktatur: 'dictatorship',
                Demokratie: 'democracy',
                Monarchie: 'monarchy'
            }
        },
        {
            id: 159,
            question: 'Was gab es in Deutschland nicht während der Zeit des <span class="keyword" title="National Socialism">Nationalsozialismus</span>?',
            translation: 'What did not exist in Germany during the National Socialist era?',
            context: 'The question refers to the period of National Socialism in Germany from 1933 to 1945. During this era, a dictatorial government under Adolf Hitler ruled, which strongly controlled political, social and cultural life. Many basic rights were restricted or abolished, and the state intervened massively in the lives of the population. Against this historical background, it should be assessed which of the above-mentioned conditions did not exist at that time.',
            answers: [
                {
                    text: 'freie <span class="keyword" title="elections">Wahlen</span>',
                    translation: 'free elections',
                    correct: true
                },
                {
                    text: 'Pressezensur',
                    translation: 'Press censorship',
                    correct: false
                },
                {
                    text: 'willkürliche Verhaftungen',
                    translation: 'arbitrary arrests',
                    correct: false
                },
                {
                    text: 'Verfolgung der Juden',
                    translation: 'Persecution of the Jews',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {
                Nationalsozialismus: 'National Socialism',
                Wahlen: 'elections'
            }
        },
        {
            id: 160,
            question: 'Welcher Krieg dauerte von 1939 bis 1945?',
            translation: 'What war lasted from 1939 to 1945?',
            context: 'The period from 1939 to 1945 is particularly significant historically, as it was during these years that a global military conflict took place, involving many countries on different continents. In historical scholarship, wars are often differentiated according to their chronological classification, their extent and the states involved. To find the right answer, it is helpful to know the most important wars of the 20th century and their respective periods.',
            answers: [
                {
                    text: 'der Erste Weltkrieg',
                    translation: 'The First World War',
                    correct: false
                },
                {
                    text: 'der Zweite Weltkrieg',
                    translation: 'World War II',
                    correct: true
                },
                {
                    text: 'der Vietnamkrieg',
                    translation: 'the Vietnam War',
                    correct: false
                },
                {
                    text: 'der Golfkrieg',
                    translation: 'the Gulf War',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {}
        },
        {
            id: 161,
            question: 'Was kennzeichnete den NS-<span class="keyword" title="state">Staat</span>? Eine Politik ...',
            translation: 'What characterized the Nazi state? A policy ...',
            context: 'The question refers to the Nazi state in Germany between 1933 and 1945. During this time, the National Socialist regime established a dictatorship under Adolf Hitler. Political opponents were persecuted, fundamental rights were severely restricted, and the ideology of the National Socialists determined the state and society. The background knowledge about central features of this rule helps to understand the correct answer to the question.',
            answers: [
                {
                    text: 'des staatlichen Rassismus',
                    translation: 'of state racism',
                    correct: true
                },
                {
                    text: 'der <span class="keyword" title="freedom of opinion">Meinungsfreiheit</span>',
                    translation: 'freedom of expression',
                    correct: false
                },
                {
                    text: 'der allgemeinen <span class="keyword" title="freedom of religion">Religionsfreiheit</span>',
                    translation: 'of general freedom of religion',
                    correct: false
                },
                {
                    text: 'der Entwicklung der <span class="keyword" title="democracy">Demokratie</span>',
                    translation: 'the development of democracy',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {
                Staat: 'state',
                Meinungsfreiheit: 'freedom of opinion',
                Religionsfreiheit: 'freedom of religion',
                Demokratie: 'democracy'
            }
        },
        {
            id: 162,
            question: 'Claus Schenk Graf von Stauffenberg wurde bekannt durch ...',
            translation: 'Claus Schenk Graf von Stauffenberg became known for ...',
            context: 'The question refers to an important person in German history during the Nazi era. Claus Schenk Graf von Stauffenberg was an officer in the Wehrmacht during World War II. He became known above all for his actions in the political and military opposition to Adolf Hitler. In order to find the right answer, it is helpful to know the historical background of the resistance against the Nazi regime.',
            answers: [
                {
                    text: 'eine Goldmedaille bei den Olympischen Spielen 1936.',
                    translation: 'He won a gold medal at the 1936 Summer Olympics.',
                    correct: false
                },
                {
                    text: 'den Bau des Reichstagsgebäudes.',
                    translation: 'the construction of the Reichstag building.',
                    correct: false
                },
                {
                    text: 'den Aufbau der Wehrmacht.',
                    translation: 'the development of the Wehrmacht.',
                    correct: false
                },
                {
                    text: 'das Attentat auf Hitler am 20. Juli 1944.',
                    translation: 'the assassination attempt on Hitler on July 20, 1944.',
                    correct: true
                }
            ],
            category: 'History',
            keywords: {}
        },
        {
            id: 163,
            question: 'In welchem Jahr zerstörten die Nationalsozialisten Synagogen und jüdische Geschäfte in Deutschland?',
            translation: 'In what year did the Nazis destroy synagogues and Jewish shops in Germany?',
            context: 'The question relates to the persecution of the Jewish population in Nazi Germany. In a phase of increasing anti-Semitic politics, acts of violence were organized nationwide, in which synagogues were set on fire, Jewish shops were destroyed and many people were arrested. These events are considered a turning point from discrimination to open, systematic violence and are a central theme of contemporary German history.',
            answers: [
                {
                    text: '1925',
                    translation: '1925',
                    correct: false
                },
                {
                    text: '1930',
                    translation: '1930',
                    correct: false
                },
                {
                    text: '1938',
                    translation: '1938',
                    correct: true
                },
                {
                    text: '1945',
                    translation: '1945',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {}
        },
        {
            id: 164,
            question: 'Was passierte am 9. November 1938 in Deutschland?',
            translation: 'What happened in Germany on November 9, 1938?',
            context: 'The question refers to an important historical event in the time of National Socialism in Germany. On November 9, 1938, state-organized acts of violence against Jewish people, their businesses and religious institutions took place. This event is a central part of German history and is related to the persecution of the Jewish population. The answer options mention various historical events, only one of which applies to this date.',
            answers: [
                {
                    text: 'Mit dem Angriff auf Polen beginnt der Zweite Weltkrieg.',
                    translation: 'The attack on Poland marks the beginning of the Second World War',
                    correct: false
                },
                {
                    text: 'Die Nationalsozialisten verlieren eine <span class="keyword" title="election">Wahl</span> und lösen den Reichstag auf.',
                    translation: 'The National Socialists lose an election and dissolve the Reichstag',
                    correct: false
                },
                {
                    text: 'Jüdische Geschäfte und Synagogen werden durch Nationalsozialisten und ihre Anhänger zerstört.',
                    translation: 'Jewish shops and synagogues are destroyed by the National Socialists and their supporters',
                    correct: true
                },
                {
                    text: 'Hitler wird Reichspräsident und lässt alle <span class="keyword" title="parties">Parteien</span> verbieten.',
                    translation: 'Hitler becomes Reich President and has all parties banned',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {
                Wahl: 'election',
                Parteien: 'parties'
            }
        },
        {
            id: 165,
            question: 'Wie hieß der erste <span class="keyword" title="Federal Chancellor">Bundeskanzler</span> der Bundesrepublik Deutschland?',
            translation: 'What was the name of the first Chancellor of the Federal Republic of Germany?',
            context: 'After the end of the Second World War, the Federal Republic of Germany was created in 1949 as a new West German state. With the establishment of a democratic political system, the office of the Federal Chancellor was also introduced, which took over the leadership of the government. In the first decades of the Federal Republic, various politicians played an important role in reconstruction, integration with the West and in shaping German post-war policy. The question relates to the first incumbent of this central government office.',
            answers: [
                {
                    text: 'Konrad Adenauer',
                    translation: 'Konrad Adenauer',
                    correct: true
                },
                {
                    text: 'Kurt Georg Kiesinger',
                    translation: 'Kurt Georg Kiesinger',
                    correct: false
                },
                {
                    text: 'Helmut Schmidt',
                    translation: 'Helmut Schmidt',
                    correct: false
                },
                {
                    text: 'Willy Brandt',
                    translation: 'Willy Brandt',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {
                Bundeskanzler: 'Federal Chancellor'
            }
        },
        {
            id: 166,
            question: 'Bei welchen Demonstrationen in Deutschland riefen die Menschen "Wir sind das <span class="keyword" title="people">Volk</span>"?',
            translation: 'At which demonstrations in Germany did people shout "We are the people"?',
            context: 'The question refers to a well-known political reputation in German history. "We are the people" has been associated with protests, civil rights and political change in different times. In order to find the right answer, it is important to know the historical background of the demonstrations mentioned, in particular the situation in the GDR and the Federal Republic of Germany, as well as the significance of mass protests for political change.',
            answers: [
                {
                    text: 'beim Arbeiteraufstand 1953 in der <span class="keyword" title="GDR (East Germany)">DDR</span>',
                    translation: 'at the 1953 workers\' uprising in the GDR',
                    correct: false
                },
                {
                    text: 'bei den Demonstrationen 1968 in der Bundesrepublik Deutschland',
                    translation: 'at the demonstrations in the Federal Republic of Germany in 1968',
                    correct: false
                },
                {
                    text: 'bei den Anti-Atomkraft-Demonstrationen 1985 in der Bundesrepublik Deutschland',
                    translation: 'at the anti-nuclear demonstrations in the Federal Republic of Germany in 1985',
                    correct: false
                },
                {
                    text: 'bei den Montagsdemonstrationen 1989 in der <span class="keyword" title="GDR (East Germany)">DDR</span>',
                    translation: 'at the Monday demonstrations in 1989 in the GDR',
                    correct: true
                }
            ],
            category: 'History',
            keywords: {
                Volk: 'people',
                DDR: 'GDR (East Germany)'
            }
        },
        {
            id: 167,
            question: 'Welche Länder wurden nach dem Zweiten Weltkrieg in Deutschland als „Alliierte Besatzungsmächte“ bezeichnet?',
            translation: 'Which countries were referred to as "Allied Occupying Powers" in Germany after World War II?',
            context: 'After the end of the Second World War in 1945, Germany was occupied by the victorious powers. The country lost its state sovereignty and was divided into several occupation zones. Each zone was controlled by a specific state, which made political, military, and economic decisions. These states are referred to as "Allied occupying powers". Knowledge of this historical situation is important to understand the division of Germany and the early post-war order in Europe.',
            answers: [
                {
                    text: 'Sowjetunion, Großbritannien, Polen, Schweden',
                    translation: 'Soviet Union, Great Britain, Poland, Sweden',
                    correct: false
                },
                {
                    text: 'Frankreich, Sowjetunion, Italien, Japan',
                    translation: 'France, Soviet Union, Italy, Japan',
                    correct: false
                },
                {
                    text: 'USA, Sowjetunion, Spanien, Portugal',
                    translation: 'USA, Soviet Union, Spain, Portugal',
                    correct: false
                },
                {
                    text: 'USA, Sowjetunion, Großbritannien, Frankreich',
                    translation: 'USA, Soviet Union, Great Britain, France',
                    correct: true
                }
            ],
            category: 'History',
            keywords: {}
        },
        {
            id: 168,
            question: 'Welches Land war keine „Alliierte Besatzungsmacht“ in Deutschland?',
            translation: 'Which country was not an "Allied occupying power" in Germany?',
            context: 'After the end of the Second World War in 1945, Germany was militarily occupied by the victorious powers and divided into occupation zones. These so-called "Allied Occupying Powers" took over the administration, political reorganization and reconstruction of the country. Not all countries involved in the war played a role as occupying forces in Germany. In order to find the right answer, knowledge of the states involved in the post-war order is necessary.',
            answers: [
                {
                    text: 'USA',
                    translation: 'USA',
                    correct: false
                },
                {
                    text: 'Sowjetunion',
                    translation: 'Soviet Union',
                    correct: false
                },
                {
                    text: 'Frankreich',
                    translation: 'France',
                    correct: false
                },
                {
                    text: 'Japan',
                    translation: 'Japan',
                    correct: true
                }
            ],
            category: 'History',
            keywords: {}
        },
        {
            id: 169,
            question: 'Wann wurde die Bundesrepublik Deutschland gegründet?',
            translation: 'When was the Federal Republic of Germany founded?',
            context: 'After the end of the Second World War, Germany was occupied by the victorious powers and divided into different zones. In the western occupation zones, political structures developed to build a new democratic state. In this historical context, a new state with its own constitution and government emerged. The question relates to the year in which this West German state was officially founded.',
            answers: [
                {
                    text: '1939',
                    translation: '1939',
                    correct: false
                },
                {
                    text: '1945',
                    translation: '1945',
                    correct: false
                },
                {
                    text: '1949',
                    translation: '1949',
                    correct: true
                },
                {
                    text: '1951',
                    translation: '1951',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {}
        },
        {
            id: 170,
            question: 'Was gab es während der Zeit des <span class="keyword" title="National Socialism">Nationalsozialismus</span> in Deutschland?',
            translation: 'What happened in Germany during the Nazi era?',
            context: 'The question refers to the period of National Socialism (1933–1945) in Germany. During this era, the Nazi regime established a dictatorship in which basic democratic rights were gradually abolished. Political opposition was persecuted, the media were brought into line and political life was heavily controlled. Laws and state measures served to secure the power of the NSDAP and not to protect individual freedoms or human dignity.',
            answers: [
                {
                    text: 'das Verbot von <span class="keyword" title="parties">Parteien</span>',
                    translation: 'the prohibition of political parties',
                    correct: true
                },
                {
                    text: 'das Recht zur freien Entfaltung der Persönlichkeit',
                    translation: 'the right to the free development of one\'s personality',
                    correct: false
                },
                {
                    text: '<span class="keyword" title="freedom of the press">Pressefreiheit</span>',
                    translation: 'Freedom of the press',
                    correct: false
                },
                {
                    text: 'den Schutz der <span class="keyword" title="human dignity">Menschenwürde</span>',
                    translation: 'the protection of human dignity',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {
                Nationalsozialismus: 'National Socialism',
                Parteien: 'parties',
                Pressefreiheit: 'freedom of the press',
                'Menschenwürde': 'human dignity'
            }
        },
        {
            id: 171,
            question: 'Soziale Marktwirtschaft bedeutet, die Wirtschaft ...',
            translation: 'Social market economy means that the economy ...',
            context: 'The question refers to a central concept of the German economic system. In politics and society, there is often a discussion about how state influence and the free market economy should be combined. This involves the interplay of supply, demand, competition and the role of the state. Especially after the Second World War, this economic model was shaped to combine economic freedom with social security and to compensate for social inequalities.',
            answers: [
                {
                    text: 'steuert sich allein nach Angebot und Nachfrage.',
                    translation: 'controls itself solely according to supply and demand.',
                    correct: false
                },
                {
                    text: 'wird vom <span class="keyword" title="state">Staat</span> geplant und gesteuert, Angebot und Nachfrage werden nicht berücksichtigt.',
                    translation: 'is planned and controlled by the state, supply and demand are not taken into account.',
                    correct: false
                },
                {
                    text: 'richtet sich nach der Nachfrage im Ausland.',
                    translation: 'is based on demand abroad.',
                    correct: false
                },
                {
                    text: 'richtet sich nach Angebot und Nachfrage, aber der <span class="keyword" title="state">Staat</span> sorgt für einen sozialen Ausgleich.',
                    translation: 'is based on supply and demand, but the state provides social balance.',
                    correct: true
                }
            ],
            category: 'Society & Law',
            keywords: {
                Staat: 'state'
            }
        },
        {
            id: 172,
            question: 'In welcher Besatzungszone wurde die <span class="keyword" title="GDR (East Germany)">DDR</span> gegründet? In der',
            translation: 'In which occupation zone was the GDR founded? In the ...',
            context: 'After the Second World War, Germany was divided into four occupation zones by the victorious powers. These zones were administered by the USA, Great Britain, France and the Soviet Union. The political and economic developments in the various zones later gave rise to two German states: the Federal Republic of Germany in the west and the German Democratic Republic in the east. The question relates to which of these occupation zones the GDR was founded in.',
            answers: [
                {
                    text: 'amerikanischen Besatzungszone.',
                    translation: 'American occupation zone',
                    correct: false
                },
                {
                    text: 'französischen Besatzungszone.',
                    translation: 'French occupation zone',
                    correct: false
                },
                {
                    text: 'britischen Besatzungszone.',
                    translation: 'British occupation zone',
                    correct: false
                },
                {
                    text: 'sowjetischen Besatzungszone.',
                    translation: 'Soviet occupation zone',
                    correct: true
                }
            ],
            category: 'History',
            keywords: {
                DDR: 'GDR (East Germany)'
            }
        },
        {
            id: 173,
            question: 'Die Bundesrepublik Deutschland ist ein Gründungsmitglied ...',
            translation: 'The Federal Republic of Germany is a founding member ...',
            context: 'The question relates to the foreign policy integration of the Federal Republic of Germany after the Second World War. It examines knowledge of international organizations and military alliances that emerged in the second half of the 20th century. It is important to know when the Federal Republic of Germany was founded and which international associations already existed at that time or emerged later. This makes it possible to assess which organisations Germany has been involved in from the outset.',
            answers: [
                {
                    text: 'des Nordatlantikpakts (<span class="keyword" title="NATO">NATO</span>).',
                    translation: 'of the North Atlantic Treaty Organization (NATO)',
                    correct: false
                },
                {
                    text: 'der <span class="keyword" title="United Nations">Vereinten Nationen</span> (VN).',
                    translation: 'of the United Nations (UN)',
                    correct: false
                },
                {
                    text: 'der <span class="keyword" title="European Union">Europäischen Union</span> (<span class="keyword" title="EU (European Union)">EU</span>).',
                    translation: 'of the European Union (EU)',
                    correct: true
                },
                {
                    text: 'des Warschauer Pakts.',
                    translation: 'of the Warsaw Pact',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {
                NATO: 'NATO',
                'Vereinten Nationen': 'United Nations',
                'Europäischen Union': 'European Union',
                EU: 'EU (European Union)'
            }
        },
        {
            id: 174,
            question: 'Wann wurde die <span class="keyword" title="GDR (East Germany)">DDR</span> gegründet?',
            translation: 'When was the GDR founded?',
            context: 'After the Second World War, Germany was divided into Allied occupation zones. The political developments in the zones gave rise to two German states with different political systems. The question relates to the formal founding of the German Democratic Republic in the Soviet occupation zone and tests knowledge about Germany\'s early post-war history and the beginning of German division.',
            answers: [
                {
                    text: '1947',
                    translation: '1947',
                    correct: false
                },
                {
                    text: '1949',
                    translation: '1949',
                    correct: true
                },
                {
                    text: '1953',
                    translation: '1953',
                    correct: false
                },
                {
                    text: '1956',
                    translation: '1956',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {
                DDR: 'GDR (East Germany)'
            }
        },
        {
            id: 175,
            question: 'Wie viele Besatzungszonen gab es in Deutschland nach dem Zweiten Weltkrieg?',
            translation: 'How many occupation zones were there in Germany after the Second World War?',
            context: 'After the end of the Second World War in 1945, Germany was occupied by the victorious powers. In order to organize administration and reconstruction, these powers divided the country into several occupation zones. Each zone was controlled by a different state and had its own political and military structures. This system shaped the post-war period in Germany and laid the foundation for the later division of the country.',
            answers: [
                {
                    text: '3',
                    translation: '3',
                    correct: false
                },
                {
                    text: '4',
                    translation: '4',
                    correct: true
                },
                {
                    text: '5',
                    translation: '5',
                    correct: false
                },
                {
                    text: '6',
                    translation: '6',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {}
        },
        {
            id: 176,
            question: 'Wie waren die Besatzungszonen Deutschlands nach 1945 verteilt?',
            translation: 'How were Germany\'s occupation zones distributed after 1945?',
            context: 'After the end of World War II in 1945, Germany was occupied by the Allies and divided into four occupation zones. Each zone was administered by a different victorious power: the USA, the Soviet Union, Great Britain and France. In many representations, these occupation zones are marked on maps with numbers or colors. The question refers to such a representation and wants to know which occupying power belongs to which numbered zone.',
            answers: [
                {
                    text: '1=Großbritannien, 2=Sowjetunion, 3=Frankreich, 4=USA',
                    translation: '1=Großbritannien, 2=Sowjetunion, 3=Frankreich, 4=USA',
                    correct: false
                },
                {
                    text: '1=Sowjetunion, 2=Großbritannien, 3=USA, 4=Frankreich',
                    translation: '1=Sowjetunion, 2=Großbritannien, 3=USA, 4=Frankreich',
                    correct: false
                },
                {
                    text: '1=Großbritannien, 2=Sowjetunion, 3=USA, 4=Frankreich',
                    translation: '1=Großbritannien, 2=Sowjetunion, 3=USA, 4=Frankreich',
                    correct: true
                },
                {
                    text: '1=Großbritannien, 2=USA, 3=Sowjetunion, 4=Frankreich',
                    translation: '1=Großbritannien, 2=USA, 3=Sowjetunion, 4=Frankreich',
                    correct: false
                }
            ],
            category: 'History',
            image: 'images/q26.48d9065a.png',
            keywords: {}
        },
        {
            id: 177,
            question: 'Welche deutsche Stadt wurde nach dem Zweiten Weltkrieg in vier Sektoren aufgeteilt?',
            translation: 'Which German city was divided into four sectors after the Second World War?',
            context: 'After the end of the Second World War, Germany was occupied by the victorious powers and divided into various occupation zones. Some cities in particular played an important role in this, as they were of great political, economic or symbolic importance. In one particular case, a city was not only part of the general zoning, but internally itself was divided into several sectors, each controlled by different Allies. This historical peculiarity is the subject of the following question.',
            answers: [
                {
                    text: 'München',
                    translation: 'Munich',
                    correct: false
                },
                {
                    text: 'Berlin',
                    translation: 'Berlin',
                    correct: true
                },
                {
                    text: 'Dresden',
                    translation: 'Dresden',
                    correct: false
                },
                {
                    text: 'Frankfurt/Oder',
                    translation: 'Frankfurt/Oder',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {}
        },
        {
            id: 178,
            question: 'Vom Juni 1948 bis zum Mai 1949 wurden die <span class="keyword" title="citizen">Bürger</span> und Bürgerinnen von West-Berlin durch eine Luftbrücke versorgt. Welcher Umstand war dafür verantwortlich?',
            translation: 'From June 1948 to May 1949, the citizens of West Berlin were supplied by an airlift. What circumstance was responsible for this?',
            context: 'After the Second World War, Germany was divided into occupation zones, as was the city of Berlin. Political tensions between the Western powers and the Soviet Union intensified in 1948, with West Berlin as a western sector deep in Soviet-controlled territory. In this situation, there were massive restrictions on supplies, which required an extraordinary organizational and logistical measure to supply the population with essential goods.',
            answers: [
                {
                    text: 'Für Frankreich war eine Versorgung der West-Berliner Bevölkerung mit dem Flugzeug kostengünstiger.',
                    translation: 'For France, supplying the West Berlin population by plane was more cost-effective.',
                    correct: false
                },
                {
                    text: 'Die amerikanischen Soldaten / Soldatinnen hatten beim Landtransport Angst vor Überfällen.',
                    translation: 'The American soldiers were afraid of robberies during land transport.',
                    correct: false
                },
                {
                    text: 'Für Großbritannien war die Versorgung über die Luftbrücke schneller.',
                    translation: 'For Great Britain, supply via the airlift was faster.',
                    correct: false
                },
                {
                    text: 'Die Sowjetunion unterbrach den gesamten Verkehr auf dem Landwege.',
                    translation: 'The Soviet Union interrupted all traffic by land.',
                    correct: true
                }
            ],
            category: 'History',
            keywords: {
                'Bürger': 'citizen'
            }
        },
        {
            id: 179,
            question: 'Wie endete der Zweite Weltkrieg in Europa offiziell?',
            translation: 'How did the Second World War officially end in Europe?',
            context: 'The question refers to the end of the Second World War in Europe in 1945. In the last months of the war, the National Socialist regime collapsed, Allied troops moved into Germany, and important political and military events overlapped. To answer the question, one must distinguish between military developments, political decisions and symbolic events, which are often confused with each other.',
            answers: [
                {
                    text: 'mit dem Tod Adolf Hitlers',
                    translation: 'with the death of Adolf Hitler',
                    correct: false
                },
                {
                    text: 'durch die bedingungslose Kapitulation Deutschlands',
                    translation: 'by the unconditional surrender of Germany',
                    correct: true
                },
                {
                    text: 'mit dem Rückzug der Deutschen aus den besetzten Gebieten',
                    translation: 'with the withdrawal of the Germans from the occupied territories',
                    correct: false
                },
                {
                    text: 'durch eine Revolution in Deutschland',
                    translation: 'through a revolution in Germany',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {}
        },
        {
            id: 180,
            question: 'Der erste <span class="keyword" title="Federal Chancellor">Bundeskanzler</span> der Bundesrepublik Deutschland war ...',
            translation: 'The first Chancellor of the Federal Republic of Germany was ...',
            context: 'The question refers to the early history of the Federal Republic of Germany after the Second World War. After the founding of the Federal Republic of Germany in 1949, a political system with a Federal Chancellor as head of government was introduced. During this time, the reconstruction of the country, the integration with the West and the development of a democratic order played a central role. Against this historical background, it is to be determined which of the above-mentioned personalities served as the first Federal Chancellor of this new state.',
            answers: [
                {
                    text: 'Ludwig Erhard.',
                    translation: 'Ludwig Erhard',
                    correct: false
                },
                {
                    text: 'Willy Brandt.',
                    translation: 'Willy Brandt',
                    correct: false
                },
                {
                    text: 'Konrad Adenauer.',
                    translation: 'Konrad Adenauer',
                    correct: true
                },
                {
                    text: 'Gerhard Schröder.',
                    translation: 'Gerhard Schröder',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {
                Bundeskanzler: 'Federal Chancellor'
            }
        },
        {
            id: 181,
            question: 'Was wollte Willy Brandt mit seinem Kniefall 1970 im ehemaligen jüdischen Ghetto in Warschau ausdrücken?',
            translation: 'What did Willy Brandt want to express when he genuflected in 1970 in the former Jewish ghetto in Warsaw?',
            context: 'In 1970, the then Federal Chancellor Willy Brandt visited Warsaw to sign the German-Polish Treaty. During this visit, he laid a wreath at the Memorial to the Uprising in the Jewish Ghetto. The National Socialist crimes in Poland, especially against European Jews, strained relations between the two countries for a long time. Brandt\'s unexpected genuflection was perceived worldwide and interpreted in different ways.',
            answers: [
                {
                    text: 'Er hat sich den ehemaligen Alliierten unterworfen.',
                    translation: 'He has submitted to the former Allies',
                    correct: false
                },
                {
                    text: 'Er bat Polen und die polnischen Juden um Vergebung.',
                    translation: 'He asked Poland and Polish Jews for forgiveness',
                    correct: true
                },
                {
                    text: 'Er zeigte seine Demut vor dem Warschauer Pakt.',
                    translation: 'He showed his humility before the Warsaw Pact',
                    correct: false
                },
                {
                    text: 'Er sprach ein Gebet am Grab des Unbekannten Soldaten.',
                    translation: 'He said a prayer at the Tomb of the Unknown Soldier',
                    correct: false
                }
            ],
            category: 'History',
            image: 'images/q29.31824d77.png',
            keywords: {}
        },
        {
            id: 182,
            question: 'Welche <span class="keyword" title="parties">Parteien</span> wurden 1946 zwangsweise zur SED vereint, der Einheitspartei der späteren <span class="keyword" title="GDR (East Germany)">DDR</span>?',
            translation: 'Which parties were forcibly merged in 1946 to form the SED, the unity party of the later GDR?',
            context: 'The SED (Socialist Unity Party of Germany) was formed in 1946 by the forced merger of the KPD and SPD in the Soviet occupation zone.',
            answers: [
                {
                    text: 'KPD und SPD',
                    translation: 'KPD and SPD',
                    correct: true
                },
                {
                    text: 'SPD und CDU',
                    translation: 'SPD and CDU',
                    correct: false
                },
                {
                    text: 'CDU und FDP',
                    translation: 'CDU and FDP',
                    correct: false
                },
                {
                    text: 'KPD und CSU',
                    translation: 'KPD and CSU',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {
                Parteien: 'parties',
                DDR: 'GDR (East Germany)'
            }
        },
        {
            id: 183,
            question: 'Wann war in der Bundesrepublik Deutschland das „Wirtschaftswunder“?',
            translation: 'When was the "economic miracle" in the Federal Republic of Germany?',
            context: 'After the Second World War, the economy in Germany was on the ground. In the following years, however, the Federal Republic of Germany developed very strongly economically. Due to currency reform, the Marshall Plan, rising industrial production and increasing prosperity, the country experienced a phase of rapid economic upswing. This epoch is referred to as the "economic miracle" and is closely linked to the early history of the Federal Republic of Germany.',
            answers: [
                {
                    text: '40er Jahre',
                    translation: '40s',
                    correct: false
                },
                {
                    text: '50er Jahre',
                    translation: '50s',
                    correct: true
                },
                {
                    text: '70er Jahre',
                    translation: '70s',
                    correct: false
                },
                {
                    text: '80er Jahre',
                    translation: '80s',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {}
        },
        {
            id: 184,
            question: 'Was nannten die Menschen in Deutschland sehr lange „Die Stunde Null“?',
            translation: 'What did people in Germany long call "Die Stunde Null" (the Zero Hour)?',
            context: 'The "Zero Hour" refers to the unconditional surrender of Germany on May 8, 1945, marking the end of WWII and the beginning of reconstruction.',
            answers: [
                {
                    text: 'Damit wird die Zeit nach der <span class="keyword" title="turning point (German reunification)">Wende</span> im Jahr 1989 bezeichnet.',
                    translation: 'This refers to the time after reunification in 1989.',
                    correct: false
                },
                {
                    text: 'Damit wurde der Beginn des Zweiten Weltkrieges bezeichnet.',
                    translation: 'This referred to the beginning of World War II.',
                    correct: false
                },
                {
                    text: 'Darunter verstand man das Ende des Zweiten Weltkrieges und den Beginn des Wiederaufbaus.',
                    translation: 'This meant the end of World War II and the beginning of reconstruction.',
                    correct: true
                },
                {
                    text: 'Damit ist die Stunde gemeint, in der die Uhr von der Sommerzeit auf die Winterzeit umgestellt wird.',
                    translation: 'This refers to the hour when the clock is changed from summer time to winter time.',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Wende: 'turning point (German reunification)'
            }
        },
        {
            id: 185,
            question: 'Wofür stand der Ausdruck „Eiserner Vorhang“? Für die Abschottung ...',
            translation: 'What did the phrase "Iron Curtain" stand for? For the isolation..',
            context: 'The question refers to the term "Iron Curtain", which was used during the Cold War. It describes the political, military and ideological division of Europe after the Second World War. It pitted two power blocs that had different economic systems, political ideologies and alliances. The term helped to illustrate the isolation and lack of contact between these camps and is an important term in European post-war history.',
            answers: [
                {
                    text: 'des Warschauer Pakts gegen den Westen.',
                    translation: 'of the Warsaw Pact against the West',
                    correct: true
                },
                {
                    text: 'Norddeutschlands gegen Süddeutschland.',
                    translation: 'Northern Germany against Southern Germany',
                    correct: false
                },
                {
                    text: 'Nazi-Deutschlands gegen die Alliierten.',
                    translation: 'Nazi Germany against the Allies',
                    correct: false
                },
                {
                    text: 'Europas gegen die USA.',
                    translation: 'Europe against the USA',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {}
        },
        {
            id: 186,
            question: 'Im Jahr 1953 gab es in der <span class="keyword" title="GDR (East Germany)">DDR</span> einen Aufstand, an den lange Zeit in der Bundesrepublik Deutschland ein <span class="keyword" title="public holiday">Feiertag</span> erinnerte. Wann war das?',
            translation: 'In 1953 there was an uprising in the GDR, which was commemorated for a long time by a holiday in the Federal Republic of Germany. When was that?',
            context: 'The question refers to a historical event in the early history of the GDR. In 1953, there was a popular uprising against political and economic measures taken by the state leadership. This uprising had great symbolic significance for Germany and was officially celebrated in the Federal Republic of Germany for many years as a memorial and holiday. The specific date on which this uprising took place is sought.',
            answers: [
                {
                    text: '1. Mai',
                    translation: '1. May',
                    correct: false
                },
                {
                    text: '17. Juni',
                    translation: 'June 17',
                    correct: true
                },
                {
                    text: '20. Juli',
                    translation: 'July 20',
                    correct: false
                },
                {
                    text: '9. November',
                    translation: '9. November',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {
                Feiertag: 'public holiday',
                DDR: 'GDR (East Germany)'
            }
        },
        {
            id: 187,
            question: 'Welcher deutsche <span class="keyword" title="state">Staat</span> hatte eine schwarz-rot-goldene <span class="keyword" title="flag">Flagge</span> mit Hammer, Zirkel und Ährenkranz?',
            translation: 'Which German state had a black-red-gold flag with hammer, compass and wreath of wheat?',
            context: 'After the Second World War, Germany was divided into different states with different political systems. Each of these states used its own national symbols, such as flags and coats of arms, to represent its ideology and identity. Flags in particular differ in colors and emblems, for example by additional signs in addition to the colors black, red and gold. In order to find the right answer, it is helpful to know the historical background of the German states in the 20th century.',
            answers: [
                {
                    text: 'Preußen',
                    translation: 'Prussia',
                    correct: false
                },
                {
                    text: 'Bundesepublik Deutschland',
                    translation: 'Bundesepublik Deutschland',
                    correct: false
                },
                {
                    text: '<span class="keyword" title="Third Reich">Drittes Reich</span>',
                    translation: 'Third Reich',
                    correct: false
                },
                {
                    text: '<span class="keyword" title="GDR (East Germany)">DDR</span>',
                    translation: 'DDR',
                    correct: true
                }
            ],
            category: 'History',
            image: 'images/q35.e7713f5f.png',
            keywords: {
                Flagge: 'flag',
                Staat: 'state',
                'Drittes Reich': 'Third Reich',
                DDR: 'GDR (East Germany)'
            }
        },
        {
            id: 188,
            question: 'In welchem Jahr wurde die <span class="keyword" title="wall">Mauer</span> in Berlin gebaut?',
            translation: 'What year was the Berlin Wall built?',
            context: 'After the Second World War, Germany was divided into East and West Germany, as was the city of Berlin. There were strong tensions between the two political systems, especially because of the migration of many people from the East to the West. In order to stop this escape, the government of the GDR decided to build a permanent border fortification in Berlin. The following question refers to the year in which this wall was built.',
            answers: [
                {
                    text: '1953',
                    translation: '1953',
                    correct: false
                },
                {
                    text: '1956',
                    translation: '1956',
                    correct: false
                },
                {
                    text: '1959',
                    translation: '1959',
                    correct: false
                },
                {
                    text: '1961',
                    translation: '1961',
                    correct: true
                }
            ],
            category: 'History',
            keywords: {
                Mauer: 'wall'
            }
        },
        {
            id: 189,
            question: 'Wann baute die <span class="keyword" title="GDR (East Germany)">DDR</span> die <span class="keyword" title="wall">Mauer</span> in Berlin?',
            translation: 'When did the GDR build the Wall in Berlin?',
            context: 'After the Second World War, Germany was divided into two states: the Federal Republic of Germany in the west and the German Democratic Republic in the east. Berlin was in the east, but was also divided. Many people left the GDR via West Berlin, which led to political tensions during the Cold War. In order to stop this exodus, the leadership of the GDR decided to secure the border within Berlin. The question relates to the timing of this historic event.',
            answers: [
                {
                    text: '1919',
                    translation: '1919',
                    correct: false
                },
                {
                    text: '1933',
                    translation: '1933',
                    correct: false
                },
                {
                    text: '1961',
                    translation: '1961',
                    correct: true
                },
                {
                    text: '1990',
                    translation: '1990',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {
                Mauer: 'wall',
                DDR: 'GDR (East Germany)'
            }
        },
        {
            id: 190,
            question: 'Was bedeutet die Abkürzung <span class="keyword" title="GDR (East Germany)">DDR</span>?',
            translation: 'What does the abbreviation DDR mean?',
            context: 'The following question refers to German history and political terms from the 20th century. This is an abbreviation that was often used in connection with the division of Germany after the Second World War. In order to find the right answer, it is helpful to have basic knowledge about the former state division of Germany and its official names.',
            answers: [
                {
                    text: 'Dritter Deutscher Rundfunk',
                    translation: 'Third German Broadcasting Corporation',
                    correct: false
                },
                {
                    text: 'Die Deutsche <span class="keyword" title="republic">Republik</span>',
                    translation: 'The German Republic',
                    correct: false
                },
                {
                    text: 'Dritte Deutsche <span class="keyword" title="republic">Republik</span>',
                    translation: 'Third German Republic',
                    correct: false
                },
                {
                    text: 'Deutsche Demokratische <span class="keyword" title="republic">Republik</span>',
                    translation: 'German Democratic Republic',
                    correct: true
                }
            ],
            category: 'History',
            keywords: {
                DDR: 'GDR (East Germany)',
                Republik: 'republic'
            }
        },
        {
            id: 191,
            question: 'Wann wurde die <span class="keyword" title="wall">Mauer</span> in Berlin für alle geöffnet?',
            translation: 'When was the Wall in Berlin opened to everyone?',
            context: 'The question relates to an important historical event in German history. The Berlin Wall separated East and West Berlin for decades during the Cold War. Its opening had major political and social consequences for Germany and Europe. In order to find the right answer, one should deal with the end of the division of Germany and the events surrounding the fall of the Wall.',
            answers: [
                {
                    text: '1987',
                    translation: '1987',
                    correct: false
                },
                {
                    text: '1989',
                    translation: '1989',
                    correct: true
                },
                {
                    text: '1992',
                    translation: '1992',
                    correct: false
                },
                {
                    text: '1995',
                    translation: '1995',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {
                Mauer: 'wall'
            }
        },
        {
            id: 192,
            question: 'Welches heutige deutsche <span class="keyword" title="federal state">Bundesland</span> gehörte früher zum Gebiet der <span class="keyword" title="GDR (East Germany)">DDR</span>?',
            translation: 'Which present-day German state used to belong to the territory of the GDR?',
            context: 'After the Second World War, Germany was divided into two states until 1990: the Federal Republic of Germany (FRG) in the west and the German Democratic Republic (GDR) in the east. Today\'s federal states were partly created from these earlier structures. The question examines which of today\'s federal states was formerly part of the GDR.',
            answers: [
                {
                    text: 'Brandenburg',
                    translation: 'Brandenburg',
                    correct: true
                },
                {
                    text: 'Bayern',
                    translation: 'Bavaria',
                    correct: false
                },
                {
                    text: 'Saarland',
                    translation: 'Saarland',
                    correct: false
                },
                {
                    text: 'Hessen',
                    translation: 'Hesse',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {
                Bundesland: 'federal state',
                DDR: 'GDR (East Germany)'
            }
        },
        {
            id: 193,
            question: 'Von 1961 bis 1989 war Berlin ...',
            translation: 'From 1961 to 1989, Berlin was ...',
            context: 'The question refers to the Cold War period after the Second World War. Germany was divided into two states, and Berlin also had a special political status. Between 1961 and 1989, political tensions, border fortifications and different political systems shaped the everyday life of the city and its inhabitants. Against this historical background, the question of how Berlin was organized and shaped during this time should be clarified.',
            answers: [
                {
                    text: 'ohne Bürgermeister.',
                    translation: 'without a mayor.',
                    correct: false
                },
                {
                    text: 'ein eigener <span class="keyword" title="state">Staat</span>.',
                    translation: 'a separate state.',
                    correct: false
                },
                {
                    text: 'durch eine <span class="keyword" title="wall">Mauer</span> geteilt.',
                    translation: 'divided by a wall.',
                    correct: true
                },
                {
                    text: 'nur mit dem Flugzeug erreichbar.',
                    translation: 'only accessible by plane.',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {
                Staat: 'state',
                Mauer: 'wall'
            }
        },
        {
            id: 194,
            question: 'Am 3. Oktober feiert man in Deutschland den Tag der Deutschen ...',
            translation: 'On October 3, Germany celebrates the Day of the Germans ...',
            context: 'The question refers to an important national holiday in Germany. On 3 October, a historic event will be commemorated that has had a strong impact on the political and social development of the country. After the division of Germany into East and West, there was a decisive change in 1990. The holiday is symbolic of this event, and the answer options pick up on various terms that could be related to it.',
            answers: [
                {
                    text: 'Einheit.',
                    translation: 'Unit',
                    correct: true
                },
                {
                    text: '<span class="keyword" title="nation">Nation</span>.',
                    translation: 'Nation',
                    correct: false
                },
                {
                    text: '<span class="keyword" title="federal states">Bundesländer</span>.',
                    translation: 'Federal states',
                    correct: false
                },
                {
                    text: 'Städte.',
                    translation: 'Cities',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {
                Nation: 'nation',
                'Bundesländer': 'federal states'
            }
        },
        {
            id: 195,
            question: 'Welches heutige deutsche <span class="keyword" title="federal state">Bundesland</span> gehörte früher zum Gebiet der <span class="keyword" title="GDR (East Germany)">DDR</span>?',
            translation: 'Which present-day German state used to belong to the territory of the GDR?',
            context: 'After the Second World War, Germany was divided into two states: the Federal Republic of Germany (FRG) in the west and the German Democratic Republic (GDR) in the east. The GDR existed until reunification in 1990. After that, their territories became part of today\'s Federal Republic and form several of today\'s federal states. The question refers to which of the aforementioned today\'s federal states used to belong to the GDR.',
            answers: [
                {
                    text: 'Hessen',
                    translation: 'Hesse',
                    correct: false
                },
                {
                    text: 'Sachsen-Anhalt',
                    translation: 'Saxony-Anhalt',
                    correct: true
                },
                {
                    text: 'Nordrhein-Westfalen',
                    translation: 'North Rhine-Westphalia',
                    correct: false
                },
                {
                    text: 'Saarland',
                    translation: 'Saarland',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {
                Bundesland: 'federal state',
                DDR: 'GDR (East Germany)'
            }
        },
        {
            id: 196,
            question: 'Warum nennt man die Zeit im Herbst 1989 in der <span class="keyword" title="GDR (East Germany)">DDR</span> „Die <span class="keyword" title="turning point (German reunification)">Wende</span>“? In dieser Zeit veränderte sich die DDR politisch ...',
            translation: 'Why is the time in the fall of 1989 called "The Wende" in the GDR? During this time, the GDR changed politically ...',
            context: 'In the autumn of 1989, far-reaching political and social changes took place in the GDR. Many people took to the streets to demonstrate for freedom, freedom to travel and democratic rights. The state leadership increasingly lost control, which eventually led to the fall of the Berlin Wall. These events initiated a fundamental change in the political system and led to German reunification. The term "The Wende" describes this historical upheaval and the departure from the previous system.',
            answers: [
                {
                    text: 'von einer <span class="keyword" title="dictatorship">Diktatur</span> zur <span class="keyword" title="democracy">Demokratie</span>.',
                    translation: 'from dictatorship to democracy',
                    correct: true
                },
                {
                    text: 'von einer liberalen Marktwirtschaft zum Sozialismus.',
                    translation: 'from a liberal market economy to socialism.',
                    correct: false
                },
                {
                    text: 'von einer <span class="keyword" title="monarchy">Monarchie</span> zur Sozialdemokratie.',
                    translation: 'from a monarchy to social democracy',
                    correct: false
                },
                {
                    text: 'von einem religiösen <span class="keyword" title="state">Staat</span> zu einem kommunistischen Staat.',
                    translation: 'from a religious state to a communist state.',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {
                Wende: 'turning point (German reunification)',
                DDR: 'GDR (East Germany)',
                Demokratie: 'democracy',
                Diktatur: 'dictatorship',
                Monarchie: 'monarchy',
                Staat: 'state'
            }
        },
        {
            id: 197,
            question: 'Welches heutige deutsche <span class="keyword" title="federal state">Bundesland</span> gehörte früher zum Gebiet der <span class="keyword" title="GDR (East Germany)">DDR</span>?',
            translation: 'Which present-day German state used to belong to the territory of the GDR?',
            context: 'After the Second World War, Germany was divided into two states until 1990: the Federal Republic of Germany (FRG) in the west and the German Democratic Republic (GDR) in the east. The GDR consisted of several regions, which are now again federal states of unified Germany. The question aims to identify which of the aforementioned today\'s federal states used to belong to the GDR.',
            answers: [
                {
                    text: 'Thüringen',
                    translation: 'Thuringia',
                    correct: true
                },
                {
                    text: 'Hessen',
                    translation: 'Hesse',
                    correct: false
                },
                {
                    text: 'Bayern',
                    translation: 'Bavaria',
                    correct: false
                },
                {
                    text: 'Bremen',
                    translation: 'Bremen',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {
                Bundesland: 'federal state',
                DDR: 'GDR (East Germany)'
            }
        },
        {
            id: 198,
            question: 'Welches heutige deutsche <span class="keyword" title="federal state">Bundesland</span> gehörte früher zum Gebiet der <span class="keyword" title="GDR (East Germany)">DDR</span>?',
            translation: 'Which present-day German state used to belong to the territory of the GDR?',
            context: 'The question relates to German history after the Second World War. From 1949 to 1990, Germany was divided into two states: the Federal Republic of Germany (FRG) in the west and the German Democratic Republic (GDR) in the east. After reunification in 1990, several of today\'s federal states emerged from the territory of the GDR. The question examines which of the countries mentioned belonged to it.',
            answers: [
                {
                    text: 'Bayern',
                    translation: 'Bavaria',
                    correct: false
                },
                {
                    text: 'Niedersachsen',
                    translation: 'Lower Saxony',
                    correct: false
                },
                {
                    text: 'Sachsen',
                    translation: 'Saxony',
                    correct: true
                },
                {
                    text: 'Baden-Württemberg',
                    translation: 'Baden-Württemberg',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {
                Bundesland: 'federal state',
                DDR: 'GDR (East Germany)'
            }
        },
        {
            id: 199,
            question: 'Mit der Abkürzung „<span class="keyword" title="Stasi (GDR secret service)">Stasi</span>“ meinte man in der <span class="keyword" title="GDR (East Germany)">DDR</span>',
            translation: 'In the GDR, the abbreviation "Stasi" meant ...',
            context: 'The question refers to the German Democratic Republic (GDR), which existed from 1949 to 1990. In this state, political institutions and authorities played a central role in controlling society and politics. Many facilities had abbreviations that were often used in everyday life. In order to find the right answer, it is important to know what tasks these institutions had and what significance they had for the lives of the people in the GDR.',
            answers: [
                {
                    text: 'das <span class="keyword" title="parliament">Parlament</span>.',
                    translation: 'Parliament.',
                    correct: false
                },
                {
                    text: 'das Ministerium für Staatssicherheit.',
                    translation: 'the Ministry of State Security.',
                    correct: true
                },
                {
                    text: 'eine regierende <span class="keyword" title="party">Partei</span>.',
                    translation: 'a ruling party.',
                    correct: false
                },
                {
                    text: 'das Ministerium für Volksbildung.',
                    translation: 'the Ministry of National Education.',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {
                Stasi: 'Stasi (GDR secret service)',
                DDR: 'GDR (East Germany)',
                Parlament: 'parliament',
                Partei: 'party'
            }
        },
        {
            id: 200,
            question: 'Welches heutige deutsche <span class="keyword" title="federal state">Bundesland</span> gehörte früher zum Gebiet der <span class="keyword" title="GDR (East Germany)">DDR</span>?',
            translation: 'Which present-day German state used to belong to the territory of the GDR?',
            context: 'The question refers to German history before reunification in 1990. At that time, Germany was divided into the Federal Republic of Germany (FRG) in the west and the German Democratic Republic (GDR) in the east. After reunification, several new federal states were founded or redefined. The task is to identify which of today\'s federal states used to be on the territory of the GDR, as opposed to the West German states.',
            answers: [
                {
                    text: 'Hessen',
                    translation: 'Hesse',
                    correct: false
                },
                {
                    text: 'Schleswig-Holstein',
                    translation: 'Schleswig-Holstein',
                    correct: false
                },
                {
                    text: 'Mecklenburg-Vorpommern',
                    translation: 'Mecklenburg-Vorpommern',
                    correct: true
                },
                {
                    text: 'Saarland',
                    translation: 'Saarland',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {
                Bundesland: 'federal state',
                DDR: 'GDR (East Germany)'
            }
        },
        {
            id: 201,
            question: 'Welche der folgenden Auflistungen enthält nur <span class="keyword" title="federal states">Bundesländer</span>, die zum Gebiet der früheren <span class="keyword" title="GDR (East Germany)">DDR</span> gehörten?',
            translation: 'Which of the following lists contains only federal states that belonged to the territory of the former GDR?',
            context: 'The question refers to the political and geographical division of Germany during the period of German division from 1949 to 1990. At that time, the German Democratic Republic (GDR) consisted of certain federal states in eastern Germany. In order to find the right answer, you have to know which of today\'s federal states emerged completely from the territory of the former GDR and which belonged to the Federal Republic of Germany (FRG).',
            answers: [
                {
                    text: 'Niedersachsen, Nordrhein-Westfalen, Hessen, Schleswig-Holstein, Brandenburg',
                    translation: 'Lower Saxony, North Rhine-Westphalia, Hesse, Schleswig-Holstein, Brandenburg',
                    correct: false
                },
                {
                    text: 'Mecklenburg-Vorpommern, Brandenburg, Sachsen, Sachsen-Anhalt, Thüringen',
                    translation: 'Mecklenburg-Western Pomerania, Brandenburg, Saxony, Saxony-Anhalt, Thuringia',
                    correct: true
                },
                {
                    text: 'Bayern, Baden-Württemberg, Rheinland-Pfalz, Thüringen, Sachsen',
                    translation: 'Bavaria, Baden-Württemberg, Rhineland-Palatinate, Thuringia, Saxony',
                    correct: false
                },
                {
                    text: 'Sachsen, Thüringen, Hessen, Niedersachsen, Brandenburg',
                    translation: 'Saxony, Thuringia, Hesse, Lower Saxony, Brandenburg',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {
                'Bundesländer': 'federal states',
                DDR: 'GDR (East Germany)'
            }
        },
        {
            id: 202,
            question: 'Zu wem gehörte die <span class="keyword" title="GDR (East Germany)">DDR</span> im „Kalten Krieg“?',
            translation: 'To whom did the GDR belong during the "Cold War"?',
            context: 'After World War II, Germany was divided into two states: the Federal Republic of Germany (FRG) in the west and the German Democratic Republic (GDR) in the east. During the Cold War, two major military and power blocs faced each other, with different countries forming alliances. The question relates to which of these alliances the GDR belonged.',
            answers: [
                {
                    text: 'zu den Westmächten',
                    translation: 'to the Western Powers',
                    correct: false
                },
                {
                    text: 'zum Warschauer Pakt',
                    translation: 'on the Warsaw Pact',
                    correct: true
                },
                {
                    text: 'zur <span class="keyword" title="NATO">NATO</span>',
                    translation: 'to NATO',
                    correct: false
                },
                {
                    text: 'zu den blockfreien Staaten',
                    translation: 'to the non-aligned states',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {
                DDR: 'GDR (East Germany)',
                NATO: 'NATO'
            }
        },
        {
            id: 203,
            question: 'Wie hieß das Wirtschaftssystem der <span class="keyword" title="GDR (East Germany)">DDR</span>?',
            translation: 'What was the name of the GDR\'s economic system?',
            context: 'The question relates to the German Democratic Republic (GDR), a socialist state that existed from 1949 to 1990. In order to find the right answer, one should have a basic knowledge of political and economic systems of the 20th century. In particular, it deals with the differences between state-controlled economy, free market economy and capitalist systems, as well as how production, prices and distribution of goods were organised.',
            answers: [
                {
                    text: 'Marktwirtschaft',
                    translation: 'Market economy',
                    correct: false
                },
                {
                    text: 'Planwirtschaft',
                    translation: 'Planned economy',
                    correct: true
                },
                {
                    text: 'Angebot und Nachfrage',
                    translation: 'Supply and demand',
                    correct: false
                },
                {
                    text: 'Kapitalismus',
                    translation: 'Capitalism',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {
                DDR: 'GDR (East Germany)'
            }
        },
        {
            id: 204,
            question: 'Wie wurden die Bundesrepublik Deutschland und die <span class="keyword" title="GDR (East Germany)">DDR</span> zu einem <span class="keyword" title="state">Staat</span>?',
            translation: 'How did the Federal Republic of Germany and the GDR become one state?',
            context: 'After the fall of the Berlin Wall in 1989, political negotiations on German unity took place. The GDR and the Federal Republic of Germany decided on a legal path to become a joint state again. The Basic Law of the Federal Republic of Germany played a central role in this. The question relates to how this accession was implemented in concrete terms and which territories became part of the Federal Republic.',
            answers: [
                {
                    text: 'Die Bundesrepublik Deutschland hat die <span class="keyword" title="GDR (East Germany)">DDR</span> besetzt.',
                    translation: 'The Federal Republic of Germany occupied the GDR.',
                    correct: false
                },
                {
                    text: 'Die heutigen fünf östlichen <span class="keyword" title="federal states">Bundesländer</span> sind der Bundesrepublik Deutschland beigetreten.',
                    translation: 'Today\'s five eastern federal states have joined the Federal Republic of Germany.',
                    correct: true
                },
                {
                    text: 'Die westlichen <span class="keyword" title="federal states">Bundesländer</span> sind der <span class="keyword" title="GDR (East Germany)">DDR</span> beigetreten.',
                    translation: 'The western federal states have joined the GDR.',
                    correct: false
                },
                {
                    text: 'Die <span class="keyword" title="GDR (East Germany)">DDR</span> hat die Bundesrepublik Deutschland besetzt.',
                    translation: 'The GDR occupied the Federal Republic of Germany.',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {
                Staat: 'state',
                DDR: 'GDR (East Germany)',
                'Bundesländer': 'federal states'
            }
        },
        {
            id: 205,
            question: 'Mit dem Beitritt der <span class="keyword" title="GDR (East Germany)">DDR</span> zur Bundesrepublik Deutschland gehören die neuen <span class="keyword" title="federal states">Bundesländer</span> nun auch ...',
            translation: 'With the accession of the GDR to the Federal Republic of Germany, the new federal states now also belong to ...',
            context: 'The question relates to German reunification in 1990. With the accession of the GDR to the Federal Republic of Germany, the territory of the new federal states automatically took over the existing international obligations and memberships of the Federal Republic. Before reunification, the GDR was integrated into other political and military alliances than the Federal Republic. To understand the correct answer, knowledge of Europe\'s international organizations and alliances during the Cold War and beyond is necessary.',
            answers: [
                {
                    text: 'zur <span class="keyword" title="European Union">Europäischen Union</span>.',
                    translation: 'to the European Union.',
                    correct: true
                },
                {
                    text: 'zum Warschauer Pakt.',
                    translation: 'to the Warsaw Pact.',
                    correct: false
                },
                {
                    text: 'zur OPEC.',
                    translation: 'to OPEC.',
                    correct: false
                },
                {
                    text: 'zur Europäischen Verteidigungsgemeinschaft.',
                    translation: 'on the European Defence Community.',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {
                'Bundesländer': 'federal states',
                DDR: 'GDR (East Germany)',
                'Europäischen Union': 'European Union'
            }
        },
        {
            id: 206,
            question: 'Was bedeutete im Jahr 1989 in Deutschland das Wort „<span class="keyword" title="Monday demonstration">Montagsdemonstration</span>“?',
            translation: 'What did the word "Montagsdemonstration" mean in Germany in 1989?',
            context: 'Monday demonstrations were peaceful protests against the GDR regime, especially in Leipzig, which began in 1989 and helped lead to German reunification.',
            answers: [
                {
                    text: 'In der Bundesrepublik waren Demonstrationen nur am Montag erlaubt.',
                    translation: 'In the Federal Republic, demonstrations were only allowed on Mondays.',
                    correct: false
                },
                {
                    text: 'Montags waren Demonstrationen gegen das <span class="keyword" title="GDR (East Germany)">DDR</span>-Regime.',
                    translation: 'There were demonstrations against the GDR regime on Mondays.',
                    correct: true
                },
                {
                    text: 'Am ersten Montag im Monat trafen sich in der Bundesrepublik Deutschland Demonstranten.',
                    translation: 'Demonstrators met on the first Monday of each month in the Federal Republic of Germany.',
                    correct: false
                },
                {
                    text: 'Montags demonstrierte man in der <span class="keyword" title="GDR (East Germany)">DDR</span> gegen den Westen.',
                    translation: 'On Mondays, people demonstrated against the West in the GDR.',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {
                Montagsdemonstration: 'Monday demonstration',
                DDR: 'GDR (East Germany)'
            }
        },
        {
            id: 207,
            question: 'In welchem Militärbündnis war die <span class="keyword" title="GDR (East Germany)">DDR</span> Mitglied?',
            translation: 'In which military alliance was the GDR a member?',
            context: 'The question refers to the Cold War period, when Germany was divided into two states: the Federal Republic of Germany (FRG) in the west and the German Democratic Republic (GDR) in the east. Both belonged to different political and military alliances, each of which was shaped by the great powers of the USA and the Soviet Union. Knowledge of these alliances helps to understand the foreign policy orientation of the GDR.',
            answers: [
                {
                    text: 'in der <span class="keyword" title="NATO">NATO</span>',
                    translation: 'in NATO',
                    correct: false
                },
                {
                    text: 'im Rheinbund',
                    translation: 'in the Confederation of the Rhine',
                    correct: false
                },
                {
                    text: 'im Warschauer Pakt',
                    translation: 'in the Warsaw Pact',
                    correct: true
                },
                {
                    text: 'im Europabündnis',
                    translation: 'in the European Alliance',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {
                DDR: 'GDR (East Germany)',
                NATO: 'NATO'
            }
        },
        {
            id: 208,
            question: 'Was war die „<span class="keyword" title="Stasi (GDR secret service)">Stasi</span>“?',
            translation: 'What was the "Stasi"?',
            context: 'The question relates to German history in the 20th century, in particular to the period of German division during the Cold War. In East and West Germany, there were different political systems with their own state institutions. The term "Stasi" often appears in historical reports, films and discussions about surveillance, secret services and the GDR. The answer options are given by various organizations and institutions from different eras.',
            answers: [
                {
                    text: 'der Geheimdienst im „Dritten Reich“',
                    translation: 'the secret service in the "Third Reich"',
                    correct: false
                },
                {
                    text: 'eine berühmte deutsche Gedenkstätte',
                    translation: 'a famous German memorial',
                    correct: false
                },
                {
                    text: 'der Geheimdienst der <span class="keyword" title="GDR (East Germany)">DDR</span>',
                    translation: 'the secret service of the GDR',
                    correct: true
                },
                {
                    text: 'ein deutscher Sportverein während des Zweiten Weltkrieges',
                    translation: 'a German sports club during World War II',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {
                Stasi: 'Stasi (GDR secret service)',
                DDR: 'GDR (East Germany)'
            }
        },
        {
            id: 209,
            question: 'Welches war das <span class="keyword" title="coat of arms">Wappen</span> der Deutschen Demokratischen <span class="keyword" title="republic">Republik</span>?',
            translation: 'What was the coat of arms of the German Democratic Republic?',
            context: 'The question refers to the state coat of arms of the German Democratic Republic (GDR), which existed from 1949 to 1990. In many quiz or exam tasks, several pictures or numbered illustrations are shown from which the correct coat of arms is to be selected. The coat of arms of the GDR had characteristic symbols that represented the socialist state. The answer options 1 to 4 each stand for different coats of arms depicted.',
            answers: [
                {
                    text: '1',
                    translation: '1',
                    correct: false
                },
                {
                    text: '2',
                    translation: '2',
                    correct: false
                },
                {
                    text: '3',
                    translation: '3',
                    correct: false
                },
                {
                    text: '4',
                    translation: '4',
                    correct: true
                }
            ],
            category: 'History',
            image: 'images/q56-q99.42b88c95.png',
            keywords: {
                Republik: 'republic',
                Wappen: 'coat of arms'
            }
        },
        {
            id: 210,
            question: 'Was ereignete sich am 17. Juni 1953 in der <span class="keyword" title="GDR (East Germany)">DDR</span>?',
            translation: 'What happened on June 17, 1953 in the GDR?',
            context: 'June 17, 1953 is an important date in the history of the GDR. In the early years of the socialist state, there were economic difficulties, political tensions and discontent among the population, especially among workers. Decisions by the SED leadership and state measures led to protests that quickly spread. This event was of great importance for German-German history and was long celebrated as a day of remembrance in the Federal Republic.',
            answers: [
                {
                    text: 'der feierliche Beitritt zum Warschauer Pakt',
                    translation: 'the ceremonial accession to the Warsaw Pact',
                    correct: false
                },
                {
                    text: 'landesweite Streiks und ein Volksaufstand',
                    translation: 'nationwide strikes and a popular uprising',
                    correct: true
                },
                {
                    text: 'der 1. SED-Parteitag',
                    translation: 'the 1st SED Party Congress',
                    correct: false
                },
                {
                    text: 'der erste Besuch Fidel Castros',
                    translation: 'Fidel Castro\'s first visit',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {
                DDR: 'GDR (East Germany)'
            }
        },
        {
            id: 211,
            question: 'Welcher Politiker steht für die „Ostverträge“?',
            translation: 'Which politician stands for the "Eastern Treaties"?',
            context: 'The question relates to German foreign policy during the Cold War. In the late 1960s and early 1970s, the Federal Republic of Germany tried to ease relations with the states of the Eastern Bloc. Special treaties played a central role in this, which became known as the "Eastern Treaties". They were supposed to normalize relations with countries such as the Soviet Union, Poland and the GDR and recognize existing borders.',
            answers: [
                {
                    text: 'Helmut Kohl',
                    translation: 'Helmut Kohl',
                    correct: false
                },
                {
                    text: 'Willy Brandt',
                    translation: 'Willy Brandt',
                    correct: true
                },
                {
                    text: 'Michail Gorbatschow',
                    translation: 'Mikhail Gorbachev',
                    correct: false
                },
                {
                    text: 'Ludwig Erhard',
                    translation: 'Ludwig Erhard',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {}
        },
        {
            id: 212,
            question: 'Wie heißt Deutschland mit vollem Namen?',
            translation: 'What is Germany\'s full name?',
            context: 'The question comes from the field of general knowledge and political education. It refers to the official state name of Germany as used in laws, international treaties and historical documents. In order to find the right answer, it is helpful to have a basic knowledge of the political structure and the form of government in Germany, as well as to know how the official name differs from colloquial terms.',
            answers: [
                {
                    text: '<span class="keyword" title="federal state">Bundesstaat</span> Deutschland',
                    translation: 'Federal State of Germany',
                    correct: false
                },
                {
                    text: '<span class="keyword" title="federal states">Bundesländer</span> Deutschland',
                    translation: 'Federal States Germany',
                    correct: false
                },
                {
                    text: 'Bundesrepublik Deutschland',
                    translation: 'Federal Republic of Germany',
                    correct: true
                },
                {
                    text: 'Bundesbezirk Deutschland',
                    translation: 'Federal District Germany',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {
                Bundesstaat: 'federal state',
                'Bundesländer': 'federal states'
            }
        },
        {
            id: 213,
            question: 'Wie viele Einwohner hat Deutschland?',
            translation: 'How many inhabitants does Germany have?',
            context: 'The question refers to the current population of Germany. This is regularly recorded by statistical offices and can change over the years due to births, deaths and migration. The answer options give rounded numbers, as they are often used in media or statistics.',
            answers: [
                {
                    text: '70 Millionen',
                    translation: '70 million',
                    correct: false
                },
                {
                    text: '78 Millionen',
                    translation: '78 million',
                    correct: false
                },
                {
                    text: '80 Millionen',
                    translation: '80 Millionen',
                    correct: true
                },
                {
                    text: '90 Millionen',
                    translation: '90 million',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {}
        },
        {
            id: 214,
            question: 'Welche Farben hat die deutsche <span class="keyword" title="flag">Flagge</span>?',
            translation: 'What colors does the German flag have?',
            context: 'The following question refers to basic knowledge of national symbols of Germany. National flags have fixed colors that have grown historically and play an important role in identity, history, and state representation. To find the right answer, you should know what the flag of Germany looks like and what colors are officially used.',
            answers: [
                {
                    text: 'schwarz-rot-gold',
                    translation: 'black-red-gold',
                    correct: true
                },
                {
                    text: 'rot-weiß-schwarz',
                    translation: 'red-white-black',
                    correct: false
                },
                {
                    text: 'schwarz-rot-grün',
                    translation: 'black-red-green',
                    correct: false
                },
                {
                    text: 'schwarz-gelb-rot',
                    translation: 'black-yellow-red',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {
                Flagge: 'flag'
            }
        },
        {
            id: 215,
            question: 'Wer wird als „Kanzler der Deutschen Einheit“ bezeichnet?',
            translation: 'Who is called the "Chancellor of German Unity"?',
            context: 'The phrase "Chancellor of German Unity" refers to the political leadership of the Federal Republic of Germany during the process of reunification of East and West Germany in 1990. During this time, important domestic and foreign policy decisions were necessary to establish state unity. The question asks which of the named chancellors is closely associated with this historic event.',
            answers: [
                {
                    text: 'Gerhard Schröder',
                    translation: 'Gerhard Schröder',
                    correct: false
                },
                {
                    text: 'Helmut Kohl',
                    translation: 'Helmut Kohl',
                    correct: true
                },
                {
                    text: 'Konrad Adenauer',
                    translation: 'Konrad Adenauer',
                    correct: false
                },
                {
                    text: 'Helmut Schmidt',
                    translation: 'Helmut Schmidt',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {}
        },
        {
            id: 216,
            question: 'Welches Symbol ist im <span class="keyword" title="plenary chamber">Plenarsaal</span> des Deutschen Bundestages zu sehen?',
            translation: 'Which symbol can be seen in the plenary hall of the German Bundestag?',
            context: 'The German Bundestag meets in the plenary hall of the Reichstag building in Berlin. In this room, important debates and votes take place that shape Germany\'s political life. The plenary chamber is not only a place of work for members of parliament, but also contains central state symbols that reflect the history, constitution and sovereignty of the Federal Republic of Germany. Knowing about these symbols helps to better understand the meaning of the place.',
            answers: [
                {
                    text: 'der <span class="keyword" title="federal eagle">Bundesadler</span>.',
                    translation: 'the federal eagle',
                    correct: true
                },
                {
                    text: 'die Fahne der Stadt Berlin.',
                    translation: 'the flag of the city of Berlin',
                    correct: false
                },
                {
                    text: 'der Reichsadler.',
                    translation: 'the imperial eagle',
                    correct: false
                },
                {
                    text: 'die Reichskrone.',
                    translation: 'the imperial crown',
                    correct: false
                }
            ],
            category: 'Society & Law',
            image: 'images/q62.28bca79d.png',
            keywords: {
                Plenarsaal: 'plenary chamber',
                Bundesadler: 'federal eagle'
            }
        },
        {
            id: 217,
            question: 'In welchem Zeitraum gab es die Deutsche Demokratische <span class="keyword" title="republic">Republik</span> (<span class="keyword" title="GDR (East Germany)">DDR</span>)?',
            translation: 'In what period did the German Democratic Republic (GDR) exist?',
            context: 'After the Second World War, Germany was divided into different occupation zones. The political and economic developments in these zones gave rise to two German states with different political systems. One of them was the German Democratic Republic, a socialist state in East Germany. In order to be able to answer historical questions correctly, it is important to know when this state was founded and when it ended.',
            answers: [
                {
                    text: '1919 bis 1927',
                    translation: '1919 to 1927',
                    correct: false
                },
                {
                    text: '1933 bis 1945',
                    translation: '1933 to 1945',
                    correct: false
                },
                {
                    text: '1945 bis 1961',
                    translation: '1945 to 1961',
                    correct: false
                },
                {
                    text: '1949 bis 1990',
                    translation: '1949 to 1990',
                    correct: true
                }
            ],
            category: 'History',
            keywords: {
                Republik: 'republic',
                DDR: 'GDR (East Germany)'
            }
        },
        {
            id: 218,
            question: 'Wie viele <span class="keyword" title="federal states">Bundesländer</span> kamen bei der <span class="keyword" title="reunification">Wiedervereinigung</span> 1990 zur Bundesrepublik Deutschland hinzu?',
            translation: 'How many federal states were added to the Federal Republic of Germany during reunification in 1990?',
            context: 'The question relates to German reunification in 1990. After the end of the GDR and the fall of the Berlin Wall, political and administrative structures were reorganized. The former districts of the GDR were converted back into federal states and joined the Federal Republic of Germany. This historical process results in the number of additional federal states sought.',
            answers: [
                {
                    text: '4',
                    translation: '4',
                    correct: false
                },
                {
                    text: '5',
                    translation: '5',
                    correct: true
                },
                {
                    text: '6',
                    translation: '6',
                    correct: false
                },
                {
                    text: '7',
                    translation: '7',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {
                Wiedervereinigung: 'reunification',
                'Bundesländer': 'federal states'
            }
        },
        {
            id: 219,
            question: 'Die Bundesrepublik Deutschland hat die Grenzen von heute seit ...',
            translation: 'The Federal Republic of Germany has closed the borders of today since ...',
            context: 'The question relates to the historical development of Germany after the Second World War. In different years, Germany\'s form of government, political order and territorial borders changed. The founding of the Federal Republic of Germany, the division into East and West Germany and German reunification are particularly important. The temporal context helps to understand the year from which the current borders of the Federal Republic of Germany exist.',
            answers: [
                {
                    text: '1933',
                    translation: '1933',
                    correct: false
                },
                {
                    text: '1949',
                    translation: '1949',
                    correct: false
                },
                {
                    text: '1971',
                    translation: '1971',
                    correct: false
                },
                {
                    text: '1990',
                    translation: '1990',
                    correct: true
                }
            ],
            category: 'History',
            keywords: {}
        },
        {
            id: 220,
            question: 'Der 27. Januar ist in Deutschland ein offizieller Gedenktag. Woran erinnert dieser Tag?',
            translation: 'January 27 is an official day of remembrance in Germany. What does this day remind us of?',
            context: 'In Germany, there are several state days of remembrance that commemorate important historical events or groups of people. These days often have a fixed date and are celebrated nationwide, for example through commemorative events, speeches or minutes of silence. January 27 is one of those days. In order to find the right answer, it is important to know what historical event took place on this date and what significance it has for German history and collective remembrance.',
            answers: [
                {
                    text: 'an das Ende des Zweiten Weltkrieges',
                    translation: 'at the end of the Second World War',
                    correct: false
                },
                {
                    text: 'an die Verabschiedung des Grundgesetzes',
                    translation: 'to the adoption of the Basic Law',
                    correct: false
                },
                {
                    text: 'an die <span class="keyword" title="reunification">Wiedervereinigung</span> Deutschlands',
                    translation: 'to the reunification of Germany',
                    correct: false
                },
                {
                    text: 'an die Opfer des <span class="keyword" title="National Socialism">Nationalsozialismus</span>',
                    translation: 'to the victims of National Socialism',
                    correct: true
                }
            ],
            category: 'History',
            keywords: {
                Wiedervereinigung: 'reunification',
                Nationalsozialismus: 'National Socialism'
            }
        },
        {
            id: 221,
            question: 'Deutschland ist Mitglied des Schengener Abkommens. Was bedeutet das?',
            translation: 'Germany is a member of the Schengen Agreement. What does that mean?',
            context: 'The Schengen Agreement is a European agreement that regulates border controls between certain European countries. It mainly affects travel across national borders and has an impact on how and with which documents people can move within Europe. To answer the question, you should know which countries are part of the Schengen area and what facilitations or restrictions this entails for travelers.',
            answers: [
                {
                    text: 'Deutsche können in viele Länder Europas ohne Passkontrolle reisen.',
                    translation: 'Germans can travel to many European countries without passport control',
                    correct: true
                },
                {
                    text: 'Alle Menschen können ohne Personenkontrolle in Deutschland einreisen.',
                    translation: 'All people can enter Germany without identity checks',
                    correct: false
                },
                {
                    text: 'Deutsche können ohne Passkontrolle in jedes Land reisen.',
                    translation: 'Germans can travel to any country without passport control',
                    correct: false
                },
                {
                    text: 'Deutsche können in jedem Land mit dem <span class="keyword" title="Euro">Euro</span> bezahlen.',
                    translation: 'Germans can pay with the euro in any country',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {
                Euro: 'Euro'
            }
        },
        {
            id: 222,
            question: 'Welches Land ist ein Nachbarland von Deutschland?',
            translation: 'Which country is a neighboring country of Germany?',
            context: 'The question comes from a geography quiz about Europe. It examines knowledge about the situation in Germany and its immediate neighbours. To find the right answer, you should know which countries share a border with Germany and which are further away. Knowledge of the map of Europe is helpful in this regard.',
            answers: [
                {
                    text: 'Ungarn',
                    translation: 'Hungary',
                    correct: false
                },
                {
                    text: 'Portugal',
                    translation: 'Portugal',
                    correct: false
                },
                {
                    text: 'Spanien',
                    translation: 'Spain',
                    correct: false
                },
                {
                    text: 'Schweiz',
                    translation: 'Switzerland',
                    correct: true
                }
            ],
            category: 'History',
            keywords: {}
        },
        {
            id: 223,
            question: 'Welches Land ist ein Nachbarland von Deutschland?',
            translation: 'Which country is a neighboring country of Germany?',
            context: 'The question comes from a geography quiz about Europe. It examines basic knowledge about the situation in Germany and its immediate neighbours. The answer options are given by various European countries, only one of which has a common border with Germany. The task is to correctly identify this neighboring country.',
            answers: [
                {
                    text: 'Rumänien',
                    translation: 'Romania',
                    correct: false
                },
                {
                    text: 'Bulgarien',
                    translation: 'Bulgaria',
                    correct: false
                },
                {
                    text: 'Polen',
                    translation: 'Poland',
                    correct: true
                },
                {
                    text: 'Griechenland',
                    translation: 'Greece',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {}
        },
        {
            id: 224,
            question: 'Was bedeutet die Abkürzung <span class="keyword" title="EU (European Union)">EU</span>?',
            translation: 'What does the abbreviation EU mean?',
            context: 'The question refers to political education and basic knowledge of international organizations. It is often asked in school, training or general knowledge tests. In order to be able to answer them, one should know the union of European states, their common goals and their significance for politics, the economy and society. The answer options contain similar terms, only one of which represents the official and correct name of this confederation of states.',
            answers: [
                {
                    text: 'Europäische Unternehmen',
                    translation: 'European companies',
                    correct: false
                },
                {
                    text: '<span class="keyword" title="European Union">Europäische Union</span>',
                    translation: 'European Union',
                    correct: true
                },
                {
                    text: 'Einheitliche Union',
                    translation: 'Single Union',
                    correct: false
                },
                {
                    text: '<span class="keyword" title="Euro">Euro</span> Union',
                    translation: 'Euro Union',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                EU: 'EU (European Union)',
                'Europäische Union': 'European Union',
                Euro: 'Euro'
            }
        },
        {
            id: 225,
            question: 'In welchem anderen Land gibt es eine große deutschsprachige Bevölkerung?',
            translation: 'In which other country is there a large German-speaking population?',
            context: 'The question refers to countries outside Germany where German is spoken by many people as their mother tongue or important lingua franca. In Europe, there are several neighboring countries with historically grown German-speaking population groups. Knowledge of language distribution, history and cultural proximity will help you choose the right answer.',
            answers: [
                {
                    text: 'Tschechien',
                    translation: 'Czech Republic',
                    correct: false
                },
                {
                    text: 'Norwegen',
                    translation: 'Norway',
                    correct: false
                },
                {
                    text: 'Spanien',
                    translation: 'Spain',
                    correct: false
                },
                {
                    text: 'Österreich',
                    translation: 'Austria',
                    correct: true
                }
            ],
            category: 'History',
            keywords: {}
        },
        {
            id: 226,
            question: 'Welche ist die <span class="keyword" title="flag">Flagge</span> der <span class="keyword" title="European Union">Europäischen Union</span>?',
            translation: 'What is the flag of the European Union?',
            context: 'In a quiz on general education and European symbols, the participants are to test their knowledge. The following question relates to the European Union and its official symbols. Several images are shown, only one of which represents the real flag of the European Union. Select the image that is correct.',
            answers: [
                {
                    text: '1',
                    translation: 'Image 1',
                    correct: false
                },
                {
                    text: '2',
                    translation: 'Image 2',
                    correct: true
                },
                {
                    text: '3',
                    translation: 'Image 3',
                    correct: false
                },
                {
                    text: '4',
                    translation: 'Image 4',
                    correct: false
                }
            ],
            category: 'History',
            image: 'images/q279.1a549501.png',
            keywords: {
                'Europäischen Union': 'European Union',
                Flagge: 'flag'
            }
        },
        {
            id: 227,
            question: 'Welches Land ist ein Nachbarland von Deutschland?',
            translation: 'Which country is a neighboring country of Germany?',
            context: 'The question refers to basic geographical knowledge about Europe. Germany is located in Central Europe and borders several other countries. To choose the right answer, you should know which countries have a direct land or sea border with Germany. The answer options name various Nordic countries to choose from.',
            answers: [
                {
                    text: 'Finnland',
                    translation: 'Finland',
                    correct: false
                },
                {
                    text: 'Dänemark',
                    translation: 'Denmark',
                    correct: true
                },
                {
                    text: 'Norwegen',
                    translation: 'Norway',
                    correct: false
                },
                {
                    text: 'Schweden',
                    translation: 'Sweden',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {}
        },
        {
            id: 228,
            question: 'Wie wird der Beitritt der <span class="keyword" title="GDR (East Germany)">DDR</span> zur Bundesrepublik Deutschland im Jahr 1990 allgemein genannt?',
            translation: 'What is the general name given to the GDR\'s accession to the Federal Republic of Germany in 1990?',
            context: 'After the fall of the Berlin Wall in 1989, there were far-reaching political changes in Germany. The German Democratic Republic (GDR) and the Federal Republic of Germany came closer together in terms of state and politics. This process led to the integration of the GDR into the political system of the Federal Republic in 1990. There is a well-established term for this historical event, which is used in politics, history and the media.',
            answers: [
                {
                    text: '<span class="keyword" title="NATO">NATO</span>-Osterweiterung',
                    translation: 'NATO eastward expansion',
                    correct: false
                },
                {
                    text: '<span class="keyword" title="EU (European Union)">EU</span>-Osterweiterung',
                    translation: 'EU eastward enlargement',
                    correct: false
                },
                {
                    text: 'Deutsche <span class="keyword" title="reunification">Wiedervereinigung</span>',
                    translation: 'German reunification',
                    correct: true
                },
                {
                    text: 'Europäische Gemeinschaft',
                    translation: 'European Community',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {
                DDR: 'GDR (East Germany)',
                NATO: 'NATO',
                EU: 'EU (European Union)',
                Wiedervereinigung: 'reunification'
            }
        },
        {
            id: 229,
            question: 'Welches Land ist ein Nachbarland von Deutschland?',
            translation: 'Which country is a neighboring country of Germany?',
            context: 'The following question refers to basic geographical knowledge about Europe. Germany is located in the central part of Europe and borders several other countries. To find the right answer, you should know which states share a direct land border with Germany and which are located in Europe but do not border Germany.',
            answers: [
                {
                    text: 'Spanien',
                    translation: 'Spain',
                    correct: false
                },
                {
                    text: 'Bulgarien',
                    translation: 'Bulgaria',
                    correct: false
                },
                {
                    text: 'Norwegen',
                    translation: 'Norway',
                    correct: false
                },
                {
                    text: 'Luxemburg',
                    translation: 'Luxembourg',
                    correct: true
                }
            ],
            category: 'History',
            keywords: {}
        },
        {
            id: 230,
            question: 'Das Europäische <span class="keyword" title="parliament">Parlament</span> wird regelmäßig gewählt, nämlich alle ...',
            translation: 'The European Parliament is elected regularly, namely every ...',
            context: 'This question is about the political system of the European Union. The European Parliament is an important institution of the EU and represents the citizens of the Member States. In order to ensure democratic co-determination, elections are held at regular intervals. The question tests the knowledge of the temporal rhythm in which these elections are held.',
            answers: [
                {
                    text: '5 Jahre.',
                    translation: '5 years',
                    correct: true
                },
                {
                    text: '6 Jahre.',
                    translation: '6 years',
                    correct: false
                },
                {
                    text: '7 Jahre.',
                    translation: '7 years',
                    correct: false
                },
                {
                    text: '8 Jahre.',
                    translation: '8 years',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Parlament: 'parliament'
            }
        },
        {
            id: 231,
            question: 'Was bedeutet der Begriff „europäische <span class="keyword" title="integration">Integration</span>“?',
            translation: 'What does the term "European integration" mean?',
            context: 'The question relates to political and historical developments in Europe after the Second World War. Many European states are looking for ways to work together to secure peace, economic stability and common values. In this context, a term was created that describes how countries in Europe are moving closer politically, economically and institutionally.',
            answers: [
                {
                    text: 'Damit sind amerikanische Einwanderer in Europa gemeint.',
                    translation: 'This refers to American immigrants in Europe',
                    correct: false
                },
                {
                    text: 'Der Begriff meint den Einwanderungsstopp nach Europa.',
                    translation: 'The term refers to the stop of immigration to Europe',
                    correct: false
                },
                {
                    text: 'Damit sind europäische Auswanderer in den USA gemeint.',
                    translation: 'This refers to European emigrants in the USA',
                    correct: false
                },
                {
                    text: 'Der Begriff meint den Zusammenschluss europäischer Staaten zur <span class="keyword" title="EU (European Union)">EU</span>.',
                    translation: 'The term refers to the union of European states to form the EU',
                    correct: true
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Integration: 'integration',
                EU: 'EU (European Union)'
            }
        },
        {
            id: 232,
            question: 'Wer wird bei der Europawahl gewählt?',
            translation: 'Who will be elected in the European elections?',
            context: 'The question relates to the European elections, which take place regularly in all Member States of the European Union. In doing so, citizens should understand which EU institution is determined by their vote. The answer options are given by various institutions and decisions at EU level in order to check which political body is actually directly elected by the voters.',
            answers: [
                {
                    text: 'die Europäische Kommission',
                    translation: 'the European Commission',
                    correct: false
                },
                {
                    text: 'die Länder, die in die <span class="keyword" title="EU (European Union)">EU</span> eintreten dürfen',
                    translation: 'the countries that are allowed to join the EU',
                    correct: false
                },
                {
                    text: 'die <span class="keyword" title="members of parliament">Abgeordneten</span> des Europäischen Parlaments',
                    translation: 'Members of the European Parliament',
                    correct: true
                },
                {
                    text: 'die europäische <span class="keyword" title="constitution">Verfassung</span>',
                    translation: 'the European Constitution',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                EU: 'EU (European Union)',
                Abgeordneten: 'members of parliament',
                Verfassung: 'constitution'
            }
        },
        {
            id: 233,
            question: 'Welches Land ist ein Nachbarland von Deutschland?',
            translation: 'Which country is a neighboring country of Germany?',
            context: 'The question refers to basic geographical knowledge about Europe. It calls for knowledge of Germany\'s neighboring countries. Germany is located in Central Europe and borders several countries. Among the given answer options, the country that has a direct border with Germany should be selected.',
            answers: [
                {
                    text: 'Tschechien',
                    translation: 'Czech Republic',
                    correct: true
                },
                {
                    text: 'Bulgarien',
                    translation: 'Bulgaria',
                    correct: false
                },
                {
                    text: 'Griechenland',
                    translation: 'Greece',
                    correct: false
                },
                {
                    text: 'Portugal',
                    translation: 'Portugal',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {}
        },
        {
            id: 234,
            question: 'Wo ist der Sitz des Europäischen Parlaments?',
            translation: 'Where is the seat of the European Parliament?',
            context: 'The European Parliament is one of the central institutions of the European Union and represents the citizens of the Member States. Like many EU institutions, the Parliament is not located in a single place, but has historically defined locations. The question relates to the city in which the official seat of the European Parliament is located.',
            answers: [
                {
                    text: 'London',
                    translation: 'London',
                    correct: false
                },
                {
                    text: 'Paris',
                    translation: 'Paris',
                    correct: false
                },
                {
                    text: 'Berlin',
                    translation: 'Berlin',
                    correct: false
                },
                {
                    text: 'Straßburg',
                    translation: 'Strasbourg',
                    correct: true
                }
            ],
            category: 'Society & Law',
            keywords: {}
        },
        {
            id: 235,
            question: 'Der französische Staatspräsident François Mitterrand und der deutsche <span class="keyword" title="Federal Chancellor">Bundeskanzler</span> Helmut Kohl gedenkn in Verdun gemeinsam der Toten beider Weltkriege. Welches Ziel der <span class="keyword" title="European Union">Europäischen Union</span> wird bei diesem Treffen deutlich?',
            translation: 'The then French President Francois Mitterrand and the then German Chancellor Helmut Kohl commemorate the dead of both world wars together in Verdun. What is the European Union\'s objective at this meeting?',
            context: 'The joint visit of François Mitterrand and Helmut Kohl to Verdun took place against the backdrop of the long and warlike history between France and Germany. Verdun is considered a symbol of the horrors of the world wars. The meeting was intended to show that former enemies can build a peaceful future through cooperation and understanding. This historic event illustrates the core values and objectives of the European Union after the Second World War.',
            answers: [
                {
                    text: 'Freundschaft zwischen England und Deutschland',
                    translation: 'Friendship between England and Germany',
                    correct: false
                },
                {
                    text: 'Reisefreiheit in alle Länder der <span class="keyword" title="EU (European Union)">EU</span>',
                    translation: 'Freedom to travel to all EU countries',
                    correct: false
                },
                {
                    text: 'Frieden und Sicherheit in den Ländern der <span class="keyword" title="EU (European Union)">EU</span>',
                    translation: 'Peace and security in the countries of the EU',
                    correct: true
                },
                {
                    text: 'einheitliche Feiertage in den Ländern der <span class="keyword" title="EU (European Union)">EU</span>',
                    translation: 'Uniform public holidays in the countries of the EU',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            image: 'images/q287.838640b1.png',
            keywords: {
                'Europäischen Union': 'European Union',
                Bundeskanzler: 'Federal Chancellor',
                EU: 'EU (European Union)'
            }
        },
        {
            id: 236,
            question: 'Wie viele Mitgliedstaaten hat die <span class="keyword" title="EU (European Union)">EU</span> heute?',
            translation: 'How many Member States does the EU have today?',
            context: 'The European Union is a political and economic association of European countries. The purpose of the EU is to promote cooperation, peace and economic development between Member States. Over time, new countries have joined the EU, while others have left. In order to be able to answer current political, economic or geographical questions correctly, it is important to know how many states the EU currently consists of.',
            answers: [
                {
                    text: '21',
                    translation: '21',
                    correct: false
                },
                {
                    text: '23',
                    translation: '23',
                    correct: false
                },
                {
                    text: '25',
                    translation: '25',
                    correct: false
                },
                {
                    text: '27',
                    translation: '27',
                    correct: true
                }
            ],
            category: 'History',
            keywords: {
                EU: 'EU (European Union)'
            }
        },
        {
            id: 237,
            question: '2007 wurde das 50-jährige Jubiläum der „Römischen Verträge“ gefeiert. Was war der Inhalt der Verträge?',
            translation: 'In 2007, the 50th anniversary of the "Treaties of Rome" was celebrated. What was the content of the contracts?',
            context: 'The question refers to an important event in European post-war history. The "Treaties of Rome" were signed by several Western European states in 1957 and are considered a central step in European integration. On the occasion of its 50th anniversary in 2007, its importance for cooperation, business and politics in Europe was recalled. In order to find the right answer, it is helpful to know what the objectives of the treaties were and which institutions were created as a result.',
            answers: [
                {
                    text: 'Beitritt Deutschlands zur <span class="keyword" title="NATO">NATO</span>',
                    translation: 'Germany\'s accession to NATO',
                    correct: false
                },
                {
                    text: 'Gründung der Europäischen Wirtschaftsgemeinschaft (EWG)',
                    translation: 'Establishment of the European Economic Community (EEC)',
                    correct: true
                },
                {
                    text: 'Verpflichtung Deutschlands zu Reparationsleistungen',
                    translation: 'Germany\'s obligation to pay reparations',
                    correct: false
                },
                {
                    text: 'Festlegung der Oder-Neiße-Linie als Ostgrenze',
                    translation: 'Determination of the Oder-Neisse line as the eastern border',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {
                NATO: 'NATO'
            }
        },
        {
            id: 238,
            question: 'An welchen Orten arbeitet das Europäische <span class="keyword" title="parliament">Parlament</span>?',
            translation: 'Where does the European Parliament work?',
            context: 'This question relates to the places of work of the European Parliament, a central institution of the European Union. It is a matter of knowing in which European cities the Parliament carries out its official activities, such as parliamentary sessions, committee work or administration. The answer options list different city combinations to choose from.',
            answers: [
                {
                    text: 'Paris, London und Den Haag',
                    translation: 'Paris, London and The Hague',
                    correct: false
                },
                {
                    text: 'Straßburg, Luxemburg und Brüssel',
                    translation: 'Strasbourg, Luxembourg and Brussels',
                    correct: true
                },
                {
                    text: 'Rom, Bern und Wien',
                    translation: 'Rome, Bern and Vienna',
                    correct: false
                },
                {
                    text: 'Bonn, Zürich und Mailand',
                    translation: 'Bonn, Zurich and Milan',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {
                Parlament: 'parliament'
            }
        },
        {
            id: 239,
            question: 'Durch welche Verträge schloss sich die Bundesrepublik Deutschland mit anderen Staaten zur Europäischen Wirtschaftsgemeinschaft zusammen?',
            translation: 'By what treaties did the Federal Republic of Germany join forces with other states to form the European Economic Community?',
            context: 'In the post-war period, the Federal Republic of Germany sought political and economic cooperation with other European countries. The aim was to secure peace, promote reconstruction and create common markets. In this context, several international treaties were concluded, which led to the creation of European communities. The question relates to those treaties by which the Federal Republic of Germany became part of the European Economic Community (EEC).',
            answers: [
                {
                    text: 'durch die „Hamburger Verträge“',
                    translation: 'through the "Hamburg Treaties"',
                    correct: false
                },
                {
                    text: 'durch die „Römischen Verträge“',
                    translation: 'by the "Treaties of Rome"',
                    correct: true
                },
                {
                    text: 'durch die „Pariser Verträge“',
                    translation: 'by the "Paris Treaties"',
                    correct: false
                },
                {
                    text: 'durch die „Londoner Verträge“',
                    translation: 'by the "London Treaties"',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {}
        },
        {
            id: 240,
            question: 'Seit wann bezahlt man in Deutschland mit dem <span class="keyword" title="Euro">Euro</span> in bar?',
            translation: 'Since when do people in Germany pay in cash with the euro?',
            context: 'The question relates to the introduction of the euro as cash in Germany. The euro was first introduced as book money for transfers and invoices, while the Deutsche Mark was still in circulation. It was only at a later point in time that people were able to pay with euro banknotes and coins in everyday life. The answer options name different years in which this conversion could have taken place.',
            answers: [
                {
                    text: '1995',
                    translation: '1995',
                    correct: false
                },
                {
                    text: '1998',
                    translation: '1998',
                    correct: false
                },
                {
                    text: '2002',
                    translation: '2002',
                    correct: true
                },
                {
                    text: '2005',
                    translation: '2005',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {
                Euro: 'Euro'
            }
        },
        {
            id: 241,
            question: 'Frau Seger bekommt ein Kind. Was muss sie tun, um Elterngeld zu erhalten?',
            translation: 'Mrs. Seger is having a child. What does she have to do to receive parental allowance?',
            context: 'Ms. Seger lives and works in Germany and is expecting a child. After the birth, she wants to stay at home for some time to look after her baby. She will find out what state support parents can receive and what steps are necessary to claim financial benefits after the birth.',
            answers: [
                {
                    text: 'Sie muss an ihre Krankenkasse schreiben.',
                    translation: 'She has to write to her health insurance company',
                    correct: false
                },
                {
                    text: 'Sie muss einen Antrag bei der Elterngeldstelle stellen.',
                    translation: 'She must submit an application to the parental allowance office',
                    correct: true
                },
                {
                    text: 'Sie muss nichts tun, denn sie bekommt automatisch Elterngeld.',
                    translation: 'She doesn\'t have to do anything, because she automatically receives parental allowance',
                    correct: false
                },
                {
                    text: 'Sie muss das Arbeitsamt um Erlaubnis bitten.',
                    translation: 'She must ask the employment office for permission',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {}
        },
        {
            id: 242,
            question: 'Wer entscheidet, ob ein Kind in Deutschland in den Kindergarten geht?',
            translation: 'Who decides whether a child goes to kindergarten in Germany?',
            context: 'In Germany, there are regulations on early childhood care and education. Kindergarten is part of the education system, but not compulsory everywhere. The question relates to who ultimately decides whether a child attends a kindergarten. State requirements, responsibilities and parental decision-making rights play a role in this.',
            answers: [
                {
                    text: 'der <span class="keyword" title="state">Staat</span>',
                    translation: 'the state',
                    correct: false
                },
                {
                    text: 'die <span class="keyword" title="federal states">Bundesländer</span>',
                    translation: 'the federal states',
                    correct: false
                },
                {
                    text: 'die Eltern/die Erziehungsberechtigten',
                    translation: 'the parents/guardians',
                    correct: true
                },
                {
                    text: 'die Schulen',
                    translation: 'the schools',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {
                Staat: 'state',
                'Bundesländer': 'federal states'
            }
        },
        {
            id: 243,
            question: 'Maik und Sybille wollen mit Freunden an ihrem deutschen Wohnort eine Demonstration auf der Straße abhalten. Was müssen sie vorher tun?',
            translation: 'Maik and Sybille want to hold a demonstration on the street with friends at their German place of residence. What do they have to do beforehand?',
            context: 'In Germany, assemblies and demonstrations are protected by the Basic Law, but are subject to certain legal regulations. Anyone planning a demonstration in public spaces must comply with the applicable regulations to ensure safety, order and the protection of others. This applies in particular to registration and cooperation with the responsible authorities.',
            answers: [
                {
                    text: 'Sie müssen die Demonstration anmelden.',
                    translation: 'You must register the demonstration.',
                    correct: true
                },
                {
                    text: 'Sie müssen nichts tun. Man darf in Deutschland jederzeit überall demonstrieren.',
                    translation: 'You don\'t have to do anything. You can demonstrate anywhere in Germany at any time.',
                    correct: false
                },
                {
                    text: 'Sie können gar nichts tun, denn Demonstrationen sind in Deutschland grundsätzlich verboten.',
                    translation: 'They can\'t do anything, because demonstrations are generally prohibited in Germany',
                    correct: false
                },
                {
                    text: 'Maik und Sybille müssen einen neuen Verein gründen, weil nur Vereine demonstrieren dürfen.',
                    translation: 'Maik and Sybille have to found a new club, because only clubs are allowed to demonstrate',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {}
        },
        {
            id: 244,
            question: 'Welchen Schulabschluss braucht man normalerweise, um an einer Universität in Deutschland ein Studium zu beginnen?',
            translation: 'What school-leaving certificate do you normally need to start studying at a university in Germany?',
            context: 'In Germany, there are different school and vocational qualifications. Anyone who wants to start studying after school must meet certain requirements. It is particularly important for pupils and parents to know which degree allows access to a university. The following question relates to the general admission requirements for studying in Germany.',
            answers: [
                {
                    text: 'das Abitur',
                    translation: 'the Abitur',
                    correct: true
                },
                {
                    text: 'ein Diplom',
                    translation: 'a diploma',
                    correct: false
                },
                {
                    text: 'die Prokura',
                    translation: 'the power of attorney',
                    correct: false
                },
                {
                    text: 'eine Gesellenprüfung',
                    translation: 'a journeyman\'s examination',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {}
        },
        {
            id: 245,
            question: 'Wer darf in Deutschland nicht als Paar zusammenleben?',
            translation: 'Who is not allowed to live together as a couple in Germany?',
            context: 'The question refers to the legal framework in Germany for living together as a couple. The protection of minors, age limits and equal rights play a major role in this. Adults are allowed to live together regardless of gender or age difference. However, adult-minor relationships are subject to strict legal restrictions to protect young people. This contextual knowledge helps to legally classify the answer options.',
            answers: [
                {
                    text: 'Hans (20 Jahre) und Marie (19 Jahre)',
                    translation: 'Hans (20 years) and Marie (19 years)',
                    correct: false
                },
                {
                    text: 'Tom (20 Jahre) und Klaus (45 Jahre)',
                    translation: 'Tom (20 years) and Klaus (45 years)',
                    correct: false
                },
                {
                    text: 'Sofie (35 Jahre) und Lisa (40 Jahre)',
                    translation: 'Sofie (35 years) and Lisa (40 years)',
                    correct: false
                },
                {
                    text: 'Anne (13 Jahre) und Tim (25 Jahre)',
                    translation: 'Anne (13 years) and Tim (25 years)',
                    correct: true
                }
            ],
            category: 'Society & Law',
            keywords: {}
        },
        {
            id: 246,
            question: 'Ab welchem Alter ist man in Deutschland volljährig?',
            translation: 'At what age do you come of age in Germany?',
            context: 'This question relates to the German legal system and the issue of the age of majority. In Germany, there are fixed age limits from which a person is legally considered an adult and receives certain rights and obligations, for example full legal capacity or the right to vote. The question is intended to examine the age at which a person is considered to be of legal age under German law.',
            answers: [
                {
                    text: '16',
                    translation: '16',
                    correct: false
                },
                {
                    text: '18',
                    translation: '18',
                    correct: true
                },
                {
                    text: '19',
                    translation: '19',
                    correct: false
                },
                {
                    text: '21',
                    translation: '21',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {}
        },
        {
            id: 247,
            question: 'Eine Frau ist schwanger. Sie ist kurz vor und nach der Geburt ihres Kindes vom <span class="keyword" title="law">Gesetz</span> besonders beschützt. Wie heißt dieser Schutz?',
            translation: 'A woman is pregnant. She is particularly protected by the law shortly before and after the birth of her child. What is this protection called?',
            context: 'The question refers to legal regulations in Germany that affect pregnant women. Special protective rights apply especially around the time before and after the birth, for example in labor law and health protection. Knowledge about this is important for expectant mothers, employers and in the context of exams or general education. The answer options name different terms that describe different phases or regulations around pregnancy and birth.',
            answers: [
                {
                    text: 'Elternzeit',
                    translation: 'Parental leave',
                    correct: false
                },
                {
                    text: 'Mutterschutz',
                    translation: 'Maternity leave',
                    correct: true
                },
                {
                    text: 'Geburtsvorbereitung',
                    translation: 'Birth preparation',
                    correct: false
                },
                {
                    text: 'Wochenbett',
                    translation: 'Postpartum',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Gesetz: 'law'
            }
        },
        {
            id: 248,
            question: 'Die Erziehung der Kinder ist in Deutschland vor allem Aufgabe ...',
            translation: 'In Germany, the education of children is above all a task ...',
            context: 'In Germany, the Basic Law regulates who is responsible for the upbringing and development of children. Family, state and educational institutions play different roles in this. The following question examines knowledge about the legal and social foundations of child-rearing in Germany and about who is primarily assigned this task.',
            answers: [
                {
                    text: 'des Staates.',
                    translation: 'of the State',
                    correct: false
                },
                {
                    text: 'der Eltern.',
                    translation: 'of parents',
                    correct: true
                },
                {
                    text: 'der Großeltern.',
                    translation: 'of grandparents',
                    correct: false
                },
                {
                    text: 'der Schulen.',
                    translation: 'of schools',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {}
        },
        {
            id: 249,
            question: 'Wer ist in Deutschland hauptsächlich verantwortlich für die Kindererziehung?',
            translation: 'Who is mainly responsible for raising children in Germany?',
            context: 'In Germany, there is often a discussion about who bears the main responsibility for raising children. Legal regulations, social expectations and the role of various institutions such as family, school and state play an important role in this. The following question refers to this understanding of responsibility in child rearing and tests basic knowledge about the German family and education system.',
            answers: [
                {
                    text: 'der <span class="keyword" title="state">Staat</span>',
                    translation: 'the state',
                    correct: false
                },
                {
                    text: 'die Eltern',
                    translation: 'die Eltern',
                    correct: true
                },
                {
                    text: 'die Verwandten',
                    translation: 'the relatives',
                    correct: false
                },
                {
                    text: 'die Schulen',
                    translation: 'die Schulen',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Staat: 'state'
            }
        },
        {
            id: 250,
            question: 'In Deutschland hat man die besten Chancen auf einen gut bezahlten Arbeitsplatz, wenn man ...?',
            translation: 'In Germany, you have the best chances of getting a well-paid job if you ...',
            context: 'The question relates to social and labour market-related factors in Germany. It is intended to help understand which personal characteristics or prerequisites are statistically or generally considered particularly important in order to have a good chance of finding a well-paid job. Different aspects such as gender, religion, political affiliation and level of education are compared in order to check which factor plays the greatest role in the German labour market.',
            answers: [
                {
                    text: 'katholisch ist.',
                    translation: 'is Catholic.',
                    correct: false
                },
                {
                    text: 'gut ausgebildet ist.',
                    translation: 'is well educated.',
                    correct: true
                },
                {
                    text: 'eine Frau ist.',
                    translation: 'is a woman.',
                    correct: false
                },
                {
                    text: 'Mitglied einer <span class="keyword" title="party">Partei</span> ist.',
                    translation: 'is a member of a political party.',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {
                Partei: 'party'
            }
        },
        {
            id: 251,
            question: 'Wenn man in Deutschland ein Kind schlägt, ...',
            translation: 'If you hit a child in Germany, ...',
            context: 'The question relates to German law and the handling of violence against children. In Germany, children have a legally enshrined right to a non-violent upbringing. The context of the question is intended to help understand the legal and societal consequences of adults inflicting physical violence on children, and whether this is considered a private matter or criminal behavior.',
            answers: [
                {
                    text: 'geht das niemanden etwas an.',
                    translation: 'it\'s nobody\'s business',
                    correct: false
                },
                {
                    text: 'geht das nur die Familie etwas an.',
                    translation: 'is it only the family\'s business',
                    correct: false
                },
                {
                    text: 'kann man dafür nicht bestraft werden.',
                    translation: 'you can\'t be punished for it',
                    correct: false
                },
                {
                    text: 'kann man dafür bestraft werden.',
                    translation: 'you can be punished for it',
                    correct: true
                }
            ],
            category: 'Society & Law',
            keywords: {}
        },
        {
            id: 252,
            question: 'In Deutschland ...',
            translation: 'In Germany ...',
            context: 'In an integration or civics test, questions about German family and marriage law are often asked. These are to check whether the basic legal regulations concerning cohabitation, marriage and partnerships in Germany are known. Among other things, the question is how many marriages are allowed at the same time and what legal requirements apply to marriage.',
            answers: [
                {
                    text: 'darf man zur gleichen Zeit nur mit einem Partner / einer Partnerin verheiratet sein.',
                    translation: 'darf man zur gleichen Zeit nur mit einem Partner / einer Partnerin verheiratet sein.',
                    correct: true
                },
                {
                    text: 'kann man mehrere Ehepartner / Ehepartnerinnen gleichzeitig haben.',
                    translation: 'kann man mehrere Ehepartner / Ehepartnerinnen gleichzeitig haben.',
                    correct: false
                },
                {
                    text: 'darf man nicht wieder heiraten, wenn man einmal verheiratet war.',
                    translation: 'you are not allowed to remarry once you have been married.',
                    correct: false
                },
                {
                    text: 'darf eine Frau nicht wieder heiraten, wenn ihr Mann gestorben ist.',
                    translation: 'a woman may not remarry if her husband has died.',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {}
        },
        {
            id: 253,
            question: 'Wo müssen Sie sich anmelden, wenn Sie in Deutschland umziehen?',
            translation: 'Where do you have to register if you move in Germany?',
            context: 'Imagine you move to a new apartment or another city within Germany. In addition to the move itself, there are also legal obligations that must be fulfilled. The state wants to know where people live in order to regulate administrative matters correctly. In this context, the question arises as to which authority you have to officially register your new address with.',
            answers: [
                {
                    text: 'beim <span class="keyword" title="residents registration office">Einwohnermeldeamt</span>',
                    translation: 'at the Residents\' Registration Office',
                    correct: true
                },
                {
                    text: 'beim Standesamt',
                    translation: 'at the registry office',
                    correct: false
                },
                {
                    text: 'beim <span class="keyword" title="public order office">Ordnungsamt</span>',
                    translation: 'at the public order office',
                    correct: false
                },
                {
                    text: 'beim Gewerbeamt',
                    translation: 'at the trade office',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {
                Einwohnermeldeamt: 'residents registration office',
                Ordnungsamt: 'public order office'
            }
        },
        {
            id: 254,
            question: 'In Deutschland dürfen Ehepaare sich scheiden lassen. Meistens müssen sie dazu das „Trennungsjahr“ einhalten. Was bedeutet das?',
            translation: 'In Germany, married couples are allowed to divorce. Most of the time, they have to comply with the "year of separation". What does that mean?',
            context: 'In Germany, divorce is regulated by law. Before a court divorces a marriage, certain conditions must be met. An important prerequisite is often the so-called "separation year". It is about how married couples shape their relationship and their everyday life before divorce. The year of separation is intended to show that the marriage has actually failed and that there is no longer a joint partnership.',
            answers: [
                {
                    text: 'Der Scheidungsprozess dauert ein Jahr.',
                    translation: 'The divorce process takes one year.',
                    correct: false
                },
                {
                    text: 'Mann und Frau sind ein Jahr verheiratet, dann ist die Scheidung möglich.',
                    translation: 'Mann und Frau sind ein Jahr verheiratet, dann ist die Scheidung möglich.',
                    correct: false
                },
                {
                    text: 'Das Besuchsrecht für die Kinder gilt ein Jahr.',
                    translation: 'The right of visitation for the children is valid for one year.',
                    correct: false
                },
                {
                    text: 'Mann und Frau führen mindestens ein Jahr getrennt ihr eigenes Leben. Danach ist die Scheidung möglich.',
                    translation: 'Mann und Frau führen mindestens ein Jahr getrennt ihr eigenes Leben. Danach ist die Scheidung möglich.',
                    correct: true
                }
            ],
            category: 'Society & Law',
            keywords: {}
        },
        {
            id: 255,
            question: 'Bei Erziehungsproblemen können Eltern in Deutschland Hilfe erhalten vom ...',
            translation: 'In case of parenting problems, parents in Germany can get help from the ...',
            context: 'The question relates to the German system of child and youth welfare. Parents can face various parenting problems in everyday life, such as conflicts, behavioral problems or family crises. In Germany, there are various state authorities that have different areas of responsibility, such as order, school, health or youth welfare. In order to identify the right contact point, it is important to know which authority advises, supports and offers help to parents on parenting issues.',
            answers: [
                {
                    text: '<span class="keyword" title="public order office">Ordnungsamt</span>.',
                    translation: 'Public order office.',
                    correct: false
                },
                {
                    text: 'Schulamt.',
                    translation: 'School Authority.',
                    correct: false
                },
                {
                    text: 'Jugendamt.',
                    translation: 'Youth Welfare Office.',
                    correct: true
                },
                {
                    text: 'Gesundheitsamt.',
                    translation: 'Health Department.',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {
                Ordnungsamt: 'public order office'
            }
        },
        {
            id: 256,
            question: 'Ein Ehepaar möchte in Deutschland ein Restaurant eröffnen. Was braucht es dazu unbedingt?',
            translation: 'A couple wants to open a restaurant in Germany. What is absolutely necessary for this?',
            context: 'A couple is planning to become self-employed in Germany and open their own restaurant. Before operations can start, various legal and bureaucratic requirements must be met. This includes filings with authorities and possibly special permits. The question relates to what permit is mandatory to operate a restaurant.',
            answers: [
                {
                    text: 'eine Erlaubnis der Polizei',
                    translation: 'a permit from the police',
                    correct: false
                },
                {
                    text: 'eine Genehmigung einer <span class="keyword" title="party">Partei</span>',
                    translation: 'a permit from a party',
                    correct: false
                },
                {
                    text: 'eine Genehmigung des Einwohnermeldeamts',
                    translation: 'a permit from the Residents\' Registration Office',
                    correct: false
                },
                {
                    text: 'eine Gaststättenerlaubnis von der zuständigen Behörde',
                    translation: 'a restaurant permit from the competent authority',
                    correct: true
                }
            ],
            category: 'Society & Law',
            keywords: {
                Partei: 'party'
            }
        },
        {
            id: 257,
            question: 'Eine erwachsene Frau möchte in Deutschland das Abitur nachholen. Das kann sie an ...',
            translation: 'An adult woman wants to catch up on her Abitur in Germany. She can do that at ...',
            context: 'The question is based on the German education system. In Germany, there are various school and educational paths to obtain a school-leaving certificate. Some people take their Abitur directly after school, others want to do it later, for example in adulthood. There are special educational institutions for this purpose, which differ from regular schools, universities or colleges. The question tests the knowledge of which institutions are suitable for adults to catch up on the Abitur.',
            answers: [
                {
                    text: 'einer Hochschule.',
                    translation: 'of a university',
                    correct: false
                },
                {
                    text: 'einem Abendgymnasium.',
                    translation: 'an evening grammar school',
                    correct: true
                },
                {
                    text: 'einer Hauptschule.',
                    translation: 'of a Hauptschule',
                    correct: false
                },
                {
                    text: 'einer Privatuniversität.',
                    translation: 'of a private university',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {}
        },
        {
            id: 258,
            question: 'Was darf das Jugendamt in Deutschland?',
            translation: 'What is the youth welfare office allowed to do in Germany?',
            context: 'The question relates to the tasks and powers of the youth welfare office in Germany. The Youth Welfare Office is a state agency that deals with the protection and support of children, young people and families. In order to find the right answer, you have to know what legal bases the youth welfare office has and in which situations it may or may not intervene. The answer options describe different possible responsibilities of this authority.',
            answers: [
                {
                    text: 'Es entscheidet, welche <span class="keyword" title="school">Schule</span> das Kind besucht.',
                    translation: 'It decides which school the child attends.',
                    correct: false
                },
                {
                    text: 'Es kann ein Kind, das geschlagen wird oder hungern muss, aus der Familie nehmen.',
                    translation: 'It can take a child who is beaten or starving from the family.',
                    correct: true
                },
                {
                    text: 'Es bezahlt das Kindergeld an die Eltern.',
                    translation: 'It pays the child benefit to the parents.',
                    correct: false
                },
                {
                    text: 'Es kontrolliert, ob das Kind einen Kindergarten besucht.',
                    translation: 'It checks whether the child attends a kindergarten.',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {
                Schule: 'school'
            }
        },
        {
            id: 259,
            question: 'Das Berufsinformationszentrum BIZ bei der Bundesagentur für Arbeit in Deutschland hilft bei der ...',
            translation: 'The Career Information Centre BIZ at the Federal Employment Agency in Germany helps with the ...',
            context: 'The Career Information Centre (BIZ) is an institution of the Federal Employment Agency. There, young people and adults receive information on professions, training opportunities and further training. Visitors can find out about various job profiles, prepare applications and receive support in professional orientation and planning for their future.',
            answers: [
                {
                    text: 'Rentenberechnung.',
                    translation: 'Pension calculation',
                    correct: false
                },
                {
                    text: 'Lehrstellensuche.',
                    translation: 'Apprenticeship search',
                    correct: true
                },
                {
                    text: 'Steuererklärung.',
                    translation: 'Tax return',
                    correct: false
                },
                {
                    text: '<span class="keyword" title="health insurance">Krankenversicherung</span>.',
                    translation: 'Health insurance',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {
                Krankenversicherung: 'health insurance'
            }
        },
        {
            id: 260,
            question: 'In Deutschland hat ein Kind in der <span class="keyword" title="school">Schule</span> ...',
            translation: 'In Germany, a child at school...',
            context: 'The question relates to the German education system and the basic rights and duties of school-age children. In Germany, certain rules are laid down by law to ensure regular school attendance and to enable equal educational opportunities. This includes requirements on what rights children have and what obligations they must fulfil. The possible answers reflect typical misunderstandings or central principles of the school system.',
            answers: [
                {
                    text: 'Recht auf unbegrenzte Freizeit.',
                    translation: 'Right to unlimited free time.',
                    correct: false
                },
                {
                    text: 'Wahlfreiheit für alle Fächer.',
                    translation: 'Freedom of choice for all subjects.',
                    correct: false
                },
                {
                    text: 'Anspruch auf Schulgeld.',
                    translation: 'Entitlement to school fees.',
                    correct: false
                },
                {
                    text: 'Anwesenheitspflicht.',
                    translation: 'Compulsory attendance.',
                    correct: true
                }
            ],
            category: 'Society & Law',
            keywords: {
                Schule: 'school'
            }
        },
        {
            id: 261,
            question: 'Ein Mann möchte mit 30 Jahren in Deutschland sein Abitur nachholen. Wo kann er das tun? An ...',
            translation: 'A man wants to catch up on his Abitur in Germany at the age of 30. Where can he do that? On ...',
            context: 'In Germany, there are various educational paths for adults who want to catch up on a higher school leaving certificate. The Abitur is a prerequisite for studying at a university or college. People who are already in working life or older than 20 years can also catch up on the Abitur in special ways. The question relates to which educational institution is suitable for a 30-year-old man to catch up on the Abitur in Germany.',
            answers: [
                {
                    text: 'einer Hochschule',
                    translation: 'of a university',
                    correct: false
                },
                {
                    text: 'einem Abendgymnasium',
                    translation: 'an evening grammar school',
                    correct: true
                },
                {
                    text: 'einer Hauptschule',
                    translation: 'of a Hauptschule',
                    correct: false
                },
                {
                    text: 'einer Privatuniversität',
                    translation: 'of a private university',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {}
        },
        {
            id: 262,
            question: 'Was bedeutet in Deutschland der Grundsatz der Gleichbehandlung?',
            translation: 'What does the principle of equal treatment mean in Germany?',
            context: 'The question relates to the principle of equal treatment in German law. This principle is enshrined in the Basic Law and is intended to ensure that all people are equal before the law. It plays an important role in protecting against discrimination, for example in everyday life, in working life or in dealing with government agencies, and concerns fair and equal treatment of all persons.',
            answers: [
                {
                    text: 'Niemand darf z. B. wegen einer Behinderung benachteiligt werden.',
                    translation: 'No one may be disadvantaged because of a disability, for example.',
                    correct: true
                },
                {
                    text: 'Man darf andere Personen benachteiligen, wenn ausreichende persönliche Gründe hierfür vorliegen.',
                    translation: 'You can discriminate against other people if there are sufficient personal reasons for doing so.',
                    correct: false
                },
                {
                    text: 'Niemand darf gegen Personen klagen, wenn sie benachteiligt wurden.',
                    translation: 'No one is allowed to sue people if they have been disadvantaged.',
                    correct: false
                },
                {
                    text: 'Es ist für alle <span class="keyword" title="law">Gesetz</span>, benachteiligten Gruppen jährlich Geld zu spenden.',
                    translation: 'It is the law for everyone to donate money to disadvantaged groups every year.',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Gesetz: 'law'
            }
        },
        {
            id: 263,
            question: 'In Deutschland sind Jugendliche ab 14 Jahren strafmündig. Das bedeutet: Jugendliche, die 14 Jahre und älter sind und gegen Strafgesetze verstoßen, ...',
            translation: 'In Germany, young people from the age of 14 are criminally responsible. This means that young people who are 14 years of age and older and who violate criminal laws ...',
            context: 'In Germany, there are special legal regulations for children and adolescents in criminal law. These rules are intended to take into account that young people are still developing and act and think differently than adults. From a certain age, they can be held responsible for crimes, but special provisions of juvenile criminal law apply that differ from those for adults.',
            answers: [
                {
                    text: 'werden bestraft.',
                    translation: 'are punished.',
                    correct: true
                },
                {
                    text: 'werden wie Erwachsene behandelt.',
                    translation: 'are treated like adults.',
                    correct: false
                },
                {
                    text: 'teilen die Strafe mit ihren Eltern.',
                    translation: 'share the punishment with their parents.',
                    correct: false
                },
                {
                    text: 'werden nicht bestraft.',
                    translation: 'are not punished.',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {}
        },
        {
            id: 264,
            question: 'Zu welchem Fest tragen Menschen in Deutschland bunte Kostüme und Masken?',
            translation: 'For which festival do people in Germany wear colorful costumes and masks?',
            context: 'The question refers to traditional festivals in Germany, where certain customs are typical. Some occasions include traditional costumes, others religious rituals or folk festivals. Celebrations where people dress up, wear masks and take part in parades are particularly well-known. Such customs often have a historical or regional background and take place on fixed days in the course of the year.',
            answers: [
                {
                    text: 'am Rosenmontag',
                    translation: 'on Shrove Monday',
                    correct: true
                },
                {
                    text: 'am Maifeiertag',
                    translation: 'on May Day',
                    correct: false
                },
                {
                    text: 'beim Oktoberfest',
                    translation: 'at the Oktoberfest',
                    correct: false
                },
                {
                    text: 'an <span class="keyword" title="Pentecost">Pfingsten</span>',
                    translation: 'at Pentecost',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {
                Pfingsten: 'Pentecost'
            }
        },
        {
            id: 265,
            question: 'Wohin muss man in Deutschland zuerst gehen, wenn man heiraten möchte?',
            translation: 'Where do you have to go first in Germany if you want to get married?',
            context: 'In Germany, marriage is a formal process that requires certain legal steps. Couples must inform themselves about the responsible authority before the wedding, compile important documents and make an appointment. Depending on the task, different offices are responsible, for example for registration, order or employment services. The question aims to know which state agency is responsible for the first registration of a marriage.',
            answers: [
                {
                    text: 'zum <span class="keyword" title="residents registration office">Einwohnermeldeamt</span>',
                    translation: 'to the Residents\' Registration Office',
                    correct: false
                },
                {
                    text: 'zum <span class="keyword" title="public order office">Ordnungsamt</span>',
                    translation: 'to the public order office',
                    correct: false
                },
                {
                    text: 'zur Agentur für Arbeit',
                    translation: 'to the Employment Agency',
                    correct: false
                },
                {
                    text: 'zum Standesamt',
                    translation: 'to the registry office',
                    correct: true
                }
            ],
            category: 'Society & Law',
            keywords: {
                Einwohnermeldeamt: 'residents registration office',
                Ordnungsamt: 'public order office'
            }
        },
        {
            id: 266,
            question: 'Wann beginnt die gesetzliche Nachtruhe in Deutschland?',
            translation: 'When does the statutory night\'s rest begin in Germany?',
            context: 'In Germany, there are legal regulations on noise protection that determine the times at which special silence must be observed. These so-called quiet periods are intended to protect residents from night-time noise and apply to music, construction work or loud equipment, among other things. The exact regulations can be laid down in the Federal Immission Control Act as well as in municipal regulations. The question is aimed at when this night\'s rest officially begins.',
            answers: [
                {
                    text: 'wenn die Sonne untergeht',
                    translation: 'When the sun goes down',
                    correct: false
                },
                {
                    text: 'wenn die Nachbarn schlafen gehen',
                    translation: 'when the neighbors go to sleep',
                    correct: false
                },
                {
                    text: 'um 0 Uhr, Mitternacht',
                    translation: 'at 0 o\'clock, midnight',
                    correct: false
                },
                {
                    text: 'um 22 Uhr',
                    translation: 'at 10 p.m.',
                    correct: true
                }
            ],
            category: 'Society & Law',
            keywords: {}
        },
        {
            id: 267,
            question: 'Eine junge Frau in Deutschland, 22 Jahre alt, lebt mit ihrem Freund zusammen. Die Eltern der Frau finden das nicht gut, weil ihnen der Freund nicht gefällt. Was können die Eltern tun?',
            translation: 'A young woman in Germany, 22 years old, lives with her boyfriend. The woman\'s parents don\'t like this because they don\'t like the boyfriend. What can parents do?',
            context: 'It is about a legal and social situation in Germany. A 22-year-old woman is of age and lives self-determined with her boyfriend. The parents do not agree with this life decision. The question examines what rights and possibilities parents have vis-à-vis adult children and how self-determination, parental rights and personal freedom are regulated in the German legal system.',
            answers: [
                {
                    text: 'Sie müssen die Entscheidung der volljährigen Tochter respektieren.',
                    translation: 'They must respect the decision of the adult daughter.',
                    correct: true
                },
                {
                    text: 'Sie haben das Recht, die Tochter in die elterliche Wohnung zurückzuholen.',
                    translation: 'They have the right to bring their daughter back to her parents\' home.',
                    correct: false
                },
                {
                    text: 'Sie können zur Polizei gehen und die Tochter anzeigen.',
                    translation: 'They can go to the police and report the daughter.',
                    correct: false
                },
                {
                    text: 'Sie suchen einen anderen Mann für die Tochter.',
                    translation: 'They are looking for another man for their daughter.',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {}
        },
        {
            id: 268,
            question: 'Eine junge Frau will den <span class="keyword" title="driving license">Führerschein</span> machen. Sie hat Angst vor der Prüfung, weil ihre Muttersprache nicht Deutsch ist. Was ist richtig?',
            translation: 'A young woman wants to get her driver\'s license. She is afraid of the exam because her mother tongue is not German. Which is correct?',
            context: 'A young woman lives in Germany and wants to get her driver\'s license. She can already drive, but is unsure because of the theoretical and practical test. She is particularly worried because German is not her mother tongue and she is afraid of not understanding the questions. Now she is finding out about the possibilities, under what conditions and in which language she can take the driving test.',
            answers: [
                {
                    text: 'Sie muss mindestens zehn Jahre in Deutschland leben, bevor sie den <span class="keyword" title="driving license">Führerschein</span> machen kann.',
                    translation: 'She must live in Germany for at least ten years before she can get her driver\'s license.',
                    correct: false
                },
                {
                    text: 'Wenn sie kein Deutsch kann, darf sie keinen <span class="keyword" title="driving license">Führerschein</span> haben.',
                    translation: 'If she doesn\'t speak German, she can\'t have a driver\'s license.',
                    correct: false
                },
                {
                    text: 'Sie muss den <span class="keyword" title="driving license">Führerschein</span> in dem Land machen, in dem man ihre Sprache spricht.',
                    translation: 'She has to get her driver\'s license in the country where her language is spoken.',
                    correct: false
                },
                {
                    text: 'Sie kann die Theorie-Prüfung vielleicht in ihrer Mttersprache machen. Es gibt mehr als zehn Sprachen zur Auswahl.',
                    translation: 'Sie kann die Theorie-Prüfung vielleicht in ihrer Mttersprache machen. Es gibt mehr als zehn Sprachen zur Auswahl.',
                    correct: true
                }
            ],
            category: 'Society & Law',
            keywords: {
                'Führerschein': 'driving license'
            }
        },
        {
            id: 269,
            question: 'In Deutschland haben Kinder ab dem Alter von drei Jahren bis zur Ersteinschulung einen Anspruch auf ...',
            translation: 'In Germany, children from the age of three to their first school enrolment are entitled to ...',
            context: 'The question refers to legal regulations on early childhood care and education in Germany. Parents have certain rights and entitlements when their children reach a certain age. Especially in the area of child and youth welfare, it is determined which services municipalities must provide in order to ensure the care and support of children until they start school. This knowledge is important for parents and guardians.',
            answers: [
                {
                    text: 'monatliches Taschengeld.',
                    translation: 'monthly pocket money.',
                    correct: false
                },
                {
                    text: 'einen Platz in einem Sportverein.',
                    translation: 'a place in a sports club.',
                    correct: false
                },
                {
                    text: 'einen Kindergartenplatz.',
                    translation: 'a kindergarten place.',
                    correct: true
                },
                {
                    text: 'einen Ferienpass.',
                    translation: 'a holiday pass.',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {}
        },
        {
            id: 270,
            question: 'Die Volkshochschule in Deutschland ist eine Einrichtung ...',
            translation: 'The adult education centre in Germany is an institution ...',
            context: 'In Germany, there are various educational institutions with different tasks and target groups. Some are aimed at children or young people, others at students or special professional groups. The adult education centre plays a special role in the educational offer for the population. In order to choose the right answer, you should know what goals the adult education centre pursues and for whom its offers are intended.',
            answers: [
                {
                    text: 'für den <span class="keyword" title="religious education">Religionsunterricht</span>.',
                    translation: 'for religious education.',
                    correct: false
                },
                {
                    text: 'nur für Jugendliche.',
                    translation: 'only for young people.',
                    correct: false
                },
                {
                    text: 'zur Weiterbildung.',
                    translation: 'for further education.',
                    correct: true
                },
                {
                    text: 'nur für Rentner und Rentnerinnen.',
                    translation: 'only for pensioners.',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {
                Religionsunterricht: 'religious education'
            }
        },
        {
            id: 271,
            question: 'Was ist in Deutschland ein Brauch zu <span class="keyword" title="Christmas">Weihnachten</span>?',
            translation: 'What is a custom at Christmas in Germany?',
            context: 'The question refers to typical traditions and customs that are maintained in Germany on certain holidays. Christmas is one of the most important festivals and is usually celebrated in the family circle. The answer options name various customs, some of which belong to other festivals or seasons. The custom that is traditionally associated with Christmas in Germany is sought.',
            answers: [
                {
                    text: 'bunte Eier verstecken',
                    translation: 'Hide colorful eggs',
                    correct: false
                },
                {
                    text: 'einen Tannenbaum schmücken',
                    translation: 'to decorate a Christmas tree',
                    correct: true
                },
                {
                    text: 'sich mit Masken und Kostümen verkleiden',
                    translation: 'dress up with masks and costumes',
                    correct: false
                },
                {
                    text: 'Kürbisse vor die Tür stellen',
                    translation: 'Putting pumpkins in front of the door',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {
                Weihnachten: 'Christmas'
            }
        },
        {
            id: 272,
            question: 'Welche Lebensform ist in Deutschland nicht erlaubt?',
            translation: 'Which way of life is not allowed in Germany?',
            context: 'In Germany, various forms of life and family are legally regulated. Family law determines which partnerships and forms of cohabitation are permitted, for example through marriage, family and criminal law. The following question refers to legal requirements in Germany and examines the understanding of which ways of life occur in society but are allowed or prohibited by law. This is not about moral evaluations, but about the current legal situation.',
            answers: [
                {
                    text: 'Mann und Frau sind geschieden und leben mit neuen Partnern zusammen.',
                    translation: 'Husband and wife are divorced and live together with new partners',
                    correct: false
                },
                {
                    text: 'Zwei Frauen leben zusammen.',
                    translation: 'Two women live together',
                    correct: false
                },
                {
                    text: 'Ein allein erziehender Vater lebt mit seinen zwei Kindern zusammen.',
                    translation: 'Ein allein erziehender Vater lebt mit seinen zwei Kindern zusammen.',
                    correct: false
                },
                {
                    text: 'Ein Mann ist mit zwei Frauen zur selben Zeit verheiratet.',
                    translation: 'A man is married to two women at the same time',
                    correct: true
                }
            ],
            category: 'Society & Law',
            keywords: {}
        },
        {
            id: 273,
            question: 'Bei Erziehungsproblemen gehen Sie in Deutschland ...',
            translation: 'If you have parenting problems in Germany, you go ...',
            context: 'The context of this question refers to contact points in Germany for problems in raising children. In Germany, there are various authorities and institutions with different tasks. The question examines which institution is responsible when parents need support, advice or help with educational issues, and requires basic knowledge of the German social and administrative system.',
            answers: [
                {
                    text: 'zum Arzt / zur Ärztin.',
                    translation: 'to the doctor',
                    correct: false
                },
                {
                    text: 'zum Gesundheitsamt.',
                    translation: 'to the health department',
                    correct: false
                },
                {
                    text: 'zum <span class="keyword" title="residents registration office">Einwohnermeldeamt</span>.',
                    translation: 'to the Residents\' Registration Office',
                    correct: false
                },
                {
                    text: 'zum Jugendamt.',
                    translation: 'to the Youth Welfare Office',
                    correct: true
                }
            ],
            category: 'Society & Law',
            keywords: {
                Einwohnermeldeamt: 'residents registration office'
            }
        },
        {
            id: 274,
            question: 'Sie haben in Deutschland absichtlich einen Brief geöffnet, der an eine andere Person adressiert ist. Was haben Sie nicht beachtet?',
            translation: 'In Germany, you have intentionally opened a letter addressed to another person. What did you not pay attention to?',
            context: 'In Germany, certain personal rights are protected by law. This also includes the handling of postal items. The following question context refers to an everyday situation in which someone intentionally opens a letter that is not addressed to himself. In order to find the right answer, one should know which fundamental rights and duties apply in such cases and which rights are violated by this behavior.',
            answers: [
                {
                    text: 'das Schweigerecht',
                    translation: 'the right to remain silent',
                    correct: false
                },
                {
                    text: 'das Briefgeheimnis',
                    translation: 'the secrecy of correspondence',
                    correct: true
                },
                {
                    text: 'die Schweigepflicht',
                    translation: 'the duty of confidentiality',
                    correct: false
                },
                {
                    text: 'die <span class="keyword" title="freedom of opinion">Meinungsfreiheit</span>',
                    translation: 'freedom of expression',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Meinungsfreiheit: 'freedom of opinion'
            }
        },
        {
            id: 275,
            question: 'Was braucht man in Deutschland für eine Ehescheidung?',
            translation: 'What do you need for a divorce in Germany?',
            context: 'The question relates to the legal requirements for divorce in Germany. It is aimed at people who want to know what formal or legal conditions must be met in order to be able to end a marriage. This involves possible parties or evidence that could play a role in the divorce proceedings. The answer is intended to clarify what is actually required by law.',
            answers: [
                {
                    text: 'die Einwilligung der Eltern',
                    translation: 'parental consent',
                    correct: false
                },
                {
                    text: 'ein Attest eines Arztes / einer Ärztin',
                    translation: 'a doctor\'s certificate',
                    correct: false
                },
                {
                    text: 'die Einwilligung der Kinder',
                    translation: 'the consent of the children',
                    correct: false
                },
                {
                    text: 'die Unterstützung eines Anwalts / einer Anwältin',
                    translation: 'the support of a lawyer',
                    correct: true
                }
            ],
            category: 'Society & Law',
            keywords: {}
        },
        {
            id: 276,
            question: 'Was sollten Sie tun, wenn Sie von Ihrem Ansprechpartner / Ihrer Ansprechpartnerin in einer deutschen Behörde schlecht behandelt werden?',
            translation: 'What should you do if you are treated badly by your contact person in a German authority?',
            context: 'Imagine you have an appointment with a German authority to clarify an important concern. During the interview, you feel disrespected or unfairly treated by your contact person. You are unsure what options you have in such a situation and how you can react appropriately. The following question will help you understand the right way to behave towards authorities.',
            answers: [
                {
                    text: 'Ich kann nichts tun.',
                    translation: 'I can\'t do anything.',
                    correct: false
                },
                {
                    text: 'Ich muss mir diese Behandlung gefallen lassen.',
                    translation: 'I have to put up with this treatment.',
                    correct: false
                },
                {
                    text: 'Ich drohe der Person.',
                    translation: 'I threaten the person.',
                    correct: false
                },
                {
                    text: 'Ich kann mich beim Behördenleiter / bei der Behördenleiterin beschweren.',
                    translation: 'I can complain to the head of the authority.',
                    correct: true
                }
            ],
            category: 'Society & Law',
            keywords: {}
        },
        {
            id: 277,
            question: 'Eine Frau, die ein zweijähriges Kind hat, bewirbt sich in Deutschland um eine Stelle. Was ist ein Beispiel für <span class="keyword" title="discrimination">Diskriminierung</span>? Sie bekommt die Stelle nur deshalb nicht, weil sie ...',
            translation: 'A woman who has a two-year-old child applies for a job in Germany. What is an example of discrimination? The only reason she doesn\'t get the job is because she ...',
            context: 'The question relates to the topic of equal treatment and discrimination in professional life in Germany. It is about a woman who applies for a job and is the mother of a small child. The context is the General Equal Treatment Act (AGG), which protects people from discrimination. The answer options are intended to help identify when a rejection has objective reasons and when it is based on a personal characteristic that must not lead to discrimination.',
            answers: [
                {
                    text: 'kein Englisch spricht.',
                    translation: 'no English speaks',
                    correct: false
                },
                {
                    text: 'zu hohe Gehaltsvorstellungen hat.',
                    translation: 'has too high salary expectations',
                    correct: false
                },
                {
                    text: 'keine Erfahrungen in diesem Beruf hat.',
                    translation: 'has no experience in this profession',
                    correct: false
                },
                {
                    text: 'Mutter ist.',
                    translation: 'Mother is',
                    correct: true
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Diskriminierung: 'discrimination'
            }
        },
        {
            id: 278,
            question: 'Ein Mann im Rollstuhl hat sich auf eine Stelle als Buchhalter beworben. Was ist ein Beispiel für <span class="keyword" title="discrimination">Diskriminierung</span>? Er bekommt die Stelle nur deshalb nicht, weil er ...',
            translation: 'A man in a wheelchair has applied for a job as an accountant. What is an example of discrimination? The only reason he doesn\'t get the job is because he ...',
            context: 'An applicant applies for a job as an accountant. He meets the professional requirements, but there are various possible reasons why he does not get the job. In this context, it is to be assessed which reason for refusal constitutes discrimination. This is about the question of when a decision is unfair or discriminatory.',
            answers: [
                {
                    text: 'im Rollstuhl sitzt.',
                    translation: 'in a wheelchair.',
                    correct: true
                },
                {
                    text: 'keine Erfahrung hat.',
                    translation: 'has no experience.',
                    correct: false
                },
                {
                    text: 'zu hohe Gehaltsvorstellungen hat.',
                    translation: 'has too high salary expectations.',
                    correct: false
                },
                {
                    text: 'kein Englisch spricht.',
                    translation: 'doesn\'t speak English.',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Diskriminierung: 'discrimination'
            }
        },
        {
            id: 279,
            question: 'In den meisten Mietshäusern in Deutschland gibt es eine „Hausordnung“. Was steht in einer solchen „Hausordnung“? Sie nennt ...',
            translation: 'In most apartment buildings in Germany there are "house rules". What does such "house rules" say? It calls',
            context: 'In many apartment buildings, the so-called house rules regulate the coexistence of the residents. It is intended to avoid conflicts and ensure that everyone feels comfortable in the house. The house rules often supplement the rental agreement and provide information about the rules that apply in everyday life, for example when dealing with common areas or when observing quiet hours. The following question refers to the typical content of such house rules.',
            answers: [
                {
                    text: 'Regeln für die Benutzung öffentlicher Verkehrsmittel.',
                    translation: 'Rules for the use of public.',
                    correct: false
                },
                {
                    text: 'alle Mieter und Mieterinnen im Haus.',
                    translation: 'all tenants in the building.',
                    correct: false
                },
                {
                    text: 'Regeln, an die sich alle Bewohner und Bewohnerinnen halten müssen.',
                    translation: 'Rules that all residents must adhere to.',
                    correct: true
                },
                {
                    text: 'die Adresse des nächsten Ordnungsamtes.',
                    translation: 'the address of the nearest public order office.',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {}
        },
        {
            id: 280,
            question: 'Wenn Sie sich in Deutschland gegen einen falschen Steuerbescheid wehren wollen, müssen Sie ..',
            translation: 'If you want to defend yourself against a false tax assessment in Germany, you must ...',
            context: 'In Germany, the tax office regularly checks tax returns and then issues a tax assessment. Sometimes this notice can contain errors, for example incorrect calculations or information that has not been taken into account. Taxpayers have certain rights and obligations if they do not agree with the assessment. The question relates to how to react correctly to an incorrect tax assessment.',
            answers: [
                {
                    text: 'nichts machen.',
                    translation: 'do nothing.',
                    correct: false
                },
                {
                    text: 'den Bescheid wegwerfen.',
                    translation: 'throw away the notice.',
                    correct: false
                },
                {
                    text: 'Einspruch einlegen.',
                    translation: 'file an objection.',
                    correct: true
                },
                {
                    text: 'warten, bis ein anderer Bescheid kommt.',
                    translation: 'wait until another decision comes.',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {}
        },
        {
            id: 281,
            question: 'Zwei Freunde wollen in ein öffentliches Schwimmbad in Deutschland. Beide haben eine dunkle Hautfarbe und werden deshalb nicht hineingelassen. Welches Recht wird in dieser Situation verletzt? Das Recht auf ...',
            translation: 'Two friends want to go to a public swimming pool in Germany. Both have dark skin and are therefore not allowed in. Which right is violated in this situation? The right to ...',
            context: 'It is about an everyday situation in Germany in which two people are excluded from using a public facility because of their skin color. The case is intended to illustrate how the Basic Law protects people from discrimination. The example is intended to show which fundamental right applies when someone is treated unequally on the basis of personal characteristics.',
            answers: [
                {
                    text: '<span class="keyword" title="freedom of opinion">Meinungsfreiheit</span>',
                    translation: 'Freedom of expression',
                    correct: false
                },
                {
                    text: 'Gleichbehandlung',
                    translation: 'Equal treatment',
                    correct: true
                },
                {
                    text: '<span class="keyword" title="freedom of assembly">Versammlungsfreiheit</span>',
                    translation: 'Freedom of assembly',
                    correct: false
                },
                {
                    text: '<span class="keyword" title="freedom of movement">Freizügigkeit</span>',
                    translation: 'Free movement of persons',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Meinungsfreiheit: 'freedom of opinion',
                Versammlungsfreiheit: 'freedom of assembly',
                'Freizügigkeit': 'freedom of movement'
            }
        },
        {
            id: 282,
            question: 'Welches Ehrenamt müssen deutsche <span class="keyword" title="citizen">Staatsbürger</span> / Staatsbürgerinnen übernehmen, wenn sie dazu aufgefordert werden?',
            translation: 'What honorary office do German citizens have to take on if they are asked to do so?',
            context: 'The question comes from the field of civics and refers to rights and duties in a democracy. In Germany, there are certain honorary positions that citizens can take on as part of their participation in the state if they are asked to do so. Knowledge of this is important for understanding democratic processes, especially elections and citizen participation.',
            answers: [
                {
                    text: 'Vereinstrainer / Vereinstrainerin',
                    translation: 'Vereinstrainer / Vereinstrainerin',
                    correct: false
                },
                {
                    text: 'Wahlhelfer / Wahlhelferin',
                    translation: 'Wahlhelfer / Wahlhelferin',
                    correct: true
                },
                {
                    text: 'Bibliotheksaufsicht',
                    translation: 'Library supervision',
                    correct: false
                },
                {
                    text: 'Lehrer / Lehrerin',
                    translation: 'Lehrer / Lehrerin',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                'Staatsbürger': 'citizen'
            }
        },
        {
            id: 283,
            question: 'Was tun Sie, wenn Sie eine falsche Rechnung von einer deutschen Behörde bekommen?',
            translation: 'What do you do if you receive a wrong invoice from a German authority?',
            context: 'Imagine you receive an invoice by post from a German authority, for example for fees or charges. When you check, you find that the amount or information is incorrect. They are unsure how to deal with such a situation correctly in Germany and what steps are planned to officially clarify or contest a mistake.',
            answers: [
                {
                    text: 'Ich lasse die Rechnung liegen.',
                    translation: 'I leave the bill behind.',
                    correct: false
                },
                {
                    text: 'Ich lege Widerspruch bei der Behörde ein.',
                    translation: 'I file an objection with the authorities.',
                    correct: true
                },
                {
                    text: 'Ich schicke die Rechnung an die Behörde zurück.',
                    translation: 'I send the invoice back to the authority.',
                    correct: false
                },
                {
                    text: 'Ich gehe mit der Rechnung zum Finanzamt.',
                    translation: 'I go to the tax office with the invoice.',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {}
        },
        {
            id: 284,
            question: 'Was man für die Arbeit können muss, ändert sich in Zukunft sehr schnell. Was kann man tun?',
            translation: 'What you need to be able to do for work will change very quickly in the future. What can be done?',
            context: 'In many professions, the requirements are changing very quickly due to technology, digitization and new ways of working. Knowledge and skills that are important today may become obsolete in a few years. Therefore, the question arises as to how people should deal with these changes and what significance learning has for professional life not only at school, but also in adulthood.',
            answers: [
                {
                    text: 'Es ist egal, was man lernt.',
                    translation: 'It doesn\'t matter what you learn.',
                    correct: false
                },
                {
                    text: 'Erwachsene müssen auch nach der Ausbildung immer weiter lernen.',
                    translation: 'Adults have to keep learning even after their training.',
                    correct: true
                },
                {
                    text: 'Kinder lernen in der <span class="keyword" title="school">Schule</span> alles, was im Beruf wichtig ist. Nach der Schule muss man nicht weiter lernen.',
                    translation: 'Children learn everything that is important at work at school. After school, you don\'t have to continue learning.',
                    correct: false
                },
                {
                    text: 'Alle müssen früher aufhören zu arbeiten, weil sich alles ändert.',
                    translation: 'Everyone has to stop working earlier because everything is changing.',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {
                Schule: 'school'
            }
        },
        {
            id: 285,
            question: 'Frau Frost arbeitet als fest angestellte Mitarbeiterin in einem Büro. Was muss sie nicht von ihrem Gehalt bezahlen?',
            translation: 'Ms. Frost works as a permanent employee in an office. What does she not have to pay from her salary?',
            context: 'The question relates to the payroll of a permanent office worker in Germany. Female employees receive their gross salary, from which certain taxes and social security contributions are automatically deducted. These include insurance levies and state taxes. Other taxes or levies, on the other hand, tend to affect companies or self-employed persons. Against this background, it should be clarified which of the aforementioned taxes are not paid directly from an employee\'s salary.',
            answers: [
                {
                    text: 'Lohnsteuer',
                    translation: 'Payroll tax',
                    correct: false
                },
                {
                    text: 'Beiträge zur <span class="keyword" title="unemployment insurance">Arbeitslosenversicherung</span>',
                    translation: 'Unemployment insurance contributions',
                    correct: false
                },
                {
                    text: 'Beiträge zur Renten- und <span class="keyword" title="health insurance">Krankenversicherung</span>',
                    translation: 'Contributions to pension and health insurance',
                    correct: false
                },
                {
                    text: 'Umsatzsteuer',
                    translation: 'Value added tax',
                    correct: true
                }
            ],
            category: 'Society & Law',
            keywords: {
                Arbeitslosenversicherung: 'unemployment insurance',
                Krankenversicherung: 'health insurance'
            }
        },
        {
            id: 286,
            question: 'Welche Organisation in einer Firma hilft den Arbeitnehmern und Arbeitnehmerinnen bei Problemen mit dem Arbeitgeber / der Arbeitgeberin?',
            translation: 'Which organization in a company helps employees with problems with the employer?',
            context: 'In many German companies, there are various internal bodies and committees with different tasks. Some take care of organization and management, others control or representation of interests. It is important for employees to know who they can turn to if there are conflicts, questions about working conditions or problems with the employer. The following question tests this knowledge.',
            answers: [
                {
                    text: 'der Betriebsrat',
                    translation: 'the works council',
                    correct: true
                },
                {
                    text: 'der Betriebsprüfer / die Betriebsprüferin',
                    translation: 'the tax auditor',
                    correct: false
                },
                {
                    text: 'die Betriebsgruppe',
                    translation: 'the operating group',
                    correct: false
                },
                {
                    text: 'das Betriebsmanagement',
                    translation: 'Operations management',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {}
        },
        {
            id: 287,
            question: 'Sie möchten bei einer Firma in Deutschland Ihr Arbeitsverhältnis beenden. Was müssen Sie beachten?',
            translation: 'You would like to end your employment relationship with a company in Germany. What do you need to consider?',
            context: 'In Germany, the termination of an employment relationship is regulated by fixed legal and contractual rules. Employees must comply with certain obligations and deadlines for the termination to be effective and not to incur any legal or financial disadvantages. Labour law, social security law and contractual aspects play a role in this, which should be checked before dismissal.',
            answers: [
                {
                    text: 'die Gehaltszahlungen',
                    translation: 'salary payments',
                    correct: false
                },
                {
                    text: 'die Arbeitszeit',
                    translation: 'working hours',
                    correct: false
                },
                {
                    text: 'die Kündigungsfrist',
                    translation: 'the notice period',
                    correct: true
                },
                {
                    text: 'die Versicherungspflicht',
                    translation: 'compulsory insurance',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {}
        },
        {
            id: 288,
            question: 'Bei welchem Amt muss man in Deutschland in der Regel seinen Hund anmelden?',
            translation: 'At which office must you usually register your dog in Germany?',
            context: 'In Germany, dogs must be registered with the local municipality (Kommune), and a dog tax (Hundesteuer) is paid.',
            answers: [
                {
                    text: 'beim Finanzamt',
                    translation: 'at the tax office',
                    correct: false
                },
                {
                    text: 'beim <span class="keyword" title="residents registration office">Einwohnermeldeamt</span>',
                    translation: 'at the residents registration office',
                    correct: false
                },
                {
                    text: 'bei der Kommune (Stadt oder Gemeinde)',
                    translation: 'at the municipality (city or community)',
                    correct: true
                },
                {
                    text: 'beim Gesundheitsamt',
                    translation: 'at the health office',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Einwohnermeldeamt: 'residents registration office'
            }
        },
        {
            id: 289,
            question: 'Ein Mann mit dunkler Hautfarbe bewirbt sich um eine Stelle als Kellner in einem Restaurant in Deutschland. Was ist ein Beispiel für <span class="keyword" title="discrimination">Diskriminierung</span>? Er bekommt die Stelle nur deshalb nicht, weil ...',
            translation: 'A man with dark skin applies for a job as a waiter in a restaurant in Germany. What is an example of discrimination? The only reason he doesn\'t get the job is because ...',
            context: 'In Germany, the General Equal Treatment Act (AGG) applies. It protects people from being disadvantaged when looking for a job because of personal characteristics. These include, for example, origin, skin color, religion or gender. When applying, employers must take into account professional qualifications, experience and language skills. Reasons that have nothing to do with suitability for the job must not play a role. The following question examines whether discrimination can be detected.',
            answers: [
                {
                    text: 'seine Deutschkenntnisse zu gering sind.',
                    translation: 'his knowledge of German is too low.',
                    correct: false
                },
                {
                    text: 'er zu hohe Gehaltsvorstellungen hat.',
                    translation: 'he has too high salary expectations.',
                    correct: false
                },
                {
                    text: 'er eine dunkle Haut hat.',
                    translation: 'he has dark skin.',
                    correct: true
                },
                {
                    text: 'er keine Erfahrungen im Beruf hat.',
                    translation: 'he has no experience in the profession.',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {
                Diskriminierung: 'discrimination'
            }
        },
        {
            id: 290,
            question: 'Sie haben in Deutschland einen Fernseher gekauft. Zu Hause packen Sie den Fernseher aus, doch er funktioniert nicht. Der Fernseher ist kaputt. Was können Sie machen?',
            translation: 'You bought a television in Germany. At home, you unpack the TV, but it doesn\'t work. The TV is broken. What can you do?',
            context: 'Imagine you buy a new TV in a German electronics store. After the purchase, you bring it home and unpack it. When you turn it on, you notice that the TV is not working properly or does not turn on at all. So the TV is defective. Now you are wondering what options you have as a customer and how you should react correctly to solve the problem.',
            answers: [
                {
                    text: 'eine Anzeige schreiben',
                    translation: 'Write an ad',
                    correct: false
                },
                {
                    text: 'den Fernseher reklamieren',
                    translation: 'complain about the TV',
                    correct: true
                },
                {
                    text: 'das Gerät ungefragt austauschen',
                    translation: 'replace the device without being asked',
                    correct: false
                },
                {
                    text: 'die Garantie verlängern',
                    translation: 'extend the warranty',
                    correct: false
                }
            ],
            category: 'Politics & Democracy',
            keywords: {}
        },
        {
            id: 291,
            question: 'Warum muss man in Deutschland bei der Steuererklärung aufschreiben, ob man zu einer <span class="keyword" title="church">Kirche</span> gehört oder nicht? Weil ...',
            translation: 'Why do you have to write down in Germany when filing your tax return whether you belong to a church or not? Because ...',
            context: 'In Germany, there is a special tax system for recognized religious communities. Members of certain churches pay a church tax in addition to income or income tax. The state collects this tax together with the other taxes and passes it on to the churches. Therefore, it is important to indicate whether you are a member of a church or not when filing your tax return, as this will affect the amount of taxes you pay.',
            answers: [
                {
                    text: 'es eine Kirchensteuer gibt, die an die Einkommen- und Lohnsteuer geknüpft ist.',
                    translation: 'there is a church tax that is linked to income and wage tax.',
                    correct: true
                },
                {
                    text: 'das für die Statistik in Deutschland wichtig ist.',
                    translation: 'which is important for statistics in Germany.',
                    correct: false
                },
                {
                    text: 'man mehr <span class="keyword" title="taxes">Steuern</span> zahlen muss, wenn man nicht zu einer <span class="keyword" title="church">Kirche</span> gehört.',
                    translation: 'you have to pay more taxes if you don\'t belong to a church.',
                    correct: false
                },
                {
                    text: 'die <span class="keyword" title="church">Kirche</span> für die Steuererklärung verantwortlich ist.',
                    translation: 'the church is responsible for the tax return.',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {
                Kirche: 'church',
                Steuern: 'taxes'
            }
        },
        {
            id: 292,
            question: 'Die Menschen in Deutschland leben nach dem Grundsatz der religösen <span class="keyword" title="tolerance">Toleranz</span>. Was bedeutet das?',
            translation: 'The people in Germany live according to the principle of religious tolerance. What does that mean?',
            context: 'In Germany, freedom of religion is an important fundamental right. It is anchored in the Basic Law and shapes the way people live together. The state is religiously neutral and protects different faiths. People with different religions or without religious beliefs live together in society. Against this background, the question of what is to be understood by the principle of religious tolerance in Germany should be clarified.',
            answers: [
                {
                    text: 'Es dürfen keine Moscheen gebaut werden.',
                    translation: 'No mosques may be built.',
                    correct: false
                },
                {
                    text: 'Alle Menschen glauben an Gott.',
                    translation: 'All people believe in God.',
                    correct: false
                },
                {
                    text: 'Jeder kann glauben, was er möchte.',
                    translation: 'Everyone can believe what they want.',
                    correct: true
                },
                {
                    text: 'Der <span class="keyword" title="state">Staat</span> entscheidet, an welchen Gott die Menschen glauben.',
                    translation: 'The state decides which God people believe in.',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {
                Toleranz: 'tolerance',
                Staat: 'state'
            }
        },
        {
            id: 293,
            question: 'Was ist in Deutschland ein Brauch an <span class="keyword" title="Easter">Ostern</span>?',
            translation: 'What is an Easter custom in Germany?',
            context: 'The following question refers to traditional customs in Germany. Easter is an important Christian festival that celebrates the spring and resurrection of Jesus Christ. During this period, there are various typical traditions that can vary depending on the region. The answer options describe various actions, only one of which is actually one of the well-known Easter customs in Germany.',
            answers: [
                {
                    text: 'Kürbisse vor die Tür stellen',
                    translation: 'Putting pumpkins in front of the door',
                    correct: false
                },
                {
                    text: 'einen Tannenbaum schmücken',
                    translation: 'to decorate a Christmas tree',
                    correct: false
                },
                {
                    text: 'Eier bemalen',
                    translation: 'Paint eggs',
                    correct: true
                },
                {
                    text: 'Raketen in die Luft schießen',
                    translation: 'Shoot missiles into the air',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {
                Ostern: 'Easter'
            }
        },
        {
            id: 294,
            question: '<span class="keyword" title="Pentecost">Pfingsten</span> ist ein ...',
            translation: 'Pentecost is a ...',
            context: 'The question refers to the meaning of Pentecost. Pentecost is a well-known term in the German calendar and is related to religion, holidays and traditions. To find the right answer, it is helpful to know what role Pentecost plays in Christianity, how it is celebrated, and whether it is a religious or state day of remembrance or a regional custom.',
            answers: [
                {
                    text: 'christlicher <span class="keyword" title="public holiday">Feiertag</span>.',
                    translation: 'Christian holiday.',
                    correct: true
                },
                {
                    text: 'deutscher Gedenktag.',
                    translation: 'German Remembrance Day.',
                    correct: false
                },
                {
                    text: 'internationaler Trauertag.',
                    translation: 'international day of mourning.',
                    correct: false
                },
                {
                    text: 'bayerischer Brauch.',
                    translation: 'Bavarian custom.',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {
                Pfingsten: 'Pentecost',
                Feiertag: 'public holiday'
            }
        },
        {
            id: 295,
            question: 'Welche <span class="keyword" title="religion">Religion</span> hat die europäische und deutsche Kultur geprägt?',
            translation: 'What religion has shaped European and German culture?',
            context: 'The question relates to historical and cultural influences on Europe and Germany. For many centuries, religious ideas shaped political orders, values, festivals, art, education and everyday life. Monasteries, churches, holidays and ethical ideas had a strong influence on the development of state and society. Against this background, it is to be recognized which religion had the greatest influence on European and German culture.',
            answers: [
                {
                    text: 'der Hinduismus',
                    translation: 'Hinduism',
                    correct: false
                },
                {
                    text: 'das Christentum',
                    translation: 'Christianity',
                    correct: true
                },
                {
                    text: 'der Buddhismus',
                    translation: 'Buddhism',
                    correct: false
                },
                {
                    text: 'der Islam',
                    translation: 'Islam',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {
                Religion: 'religion'
            }
        },
        {
            id: 296,
            question: 'In Deutschland nennt man die letzten vier Wochen vor <span class="keyword" title="Christmas">Weihnachten</span> ...',
            translation: 'In Germany, the last four weeks before Christmas are called ...',
            context: 'The question refers to Christian and cultural traditions in Germany around Christmas. It tests knowledge about church festivals and periods in the course of the year. This refers to the special preparation period before Christmas, which is characterized by customs such as Advent calendars, Advent wreaths and Christmas markets. The answer options name various religious holidays and commemoration days.',
            answers: [
                {
                    text: 'den Buß- und Bettag.',
                    translation: 'the Day of Repentance and Prayer.',
                    correct: false
                },
                {
                    text: 'das Erntedankfest.',
                    translation: 'Thanksgiving.',
                    correct: false
                },
                {
                    text: 'die Adventszeit.',
                    translation: 'the Advent season.',
                    correct: true
                },
                {
                    text: 'Allerheiligen.',
                    translation: 'All Saints\' Day.',
                    correct: false
                }
            ],
            category: 'Society & Law',
            keywords: {
                Weihnachten: 'Christmas'
            }
        },
        {
            id: 297,
            question: 'Aus welchem Land sind die meisten Migranten / Migrantinnen nach Deutschland gekommen?',
            translation: 'From which country did the most migrants come to Germany?',
            context: 'Many people with a migrant background live in Germany. The composition of this population group has changed over time due to various historical events, such as labour migration, political developments or EU freedom of movement. Statistics show from which countries of origin a particularly large number of migrants have come to Germany. The following question relates to these demographic developments and would like to check which country of origin has the largest share.',
            answers: [
                {
                    text: 'Italien',
                    translation: 'Italy',
                    correct: false
                },
                {
                    text: 'Polen',
                    translation: 'Poland',
                    correct: false
                },
                {
                    text: 'Marokko',
                    translation: 'Morocco',
                    correct: false
                },
                {
                    text: 'Türkei',
                    translation: 'Turkey',
                    correct: true
                }
            ],
            category: 'History',
            keywords: {}
        },
        {
            id: 298,
            question: 'In der <span class="keyword" title="GDR (East Germany)">DDR</span> lebten vor allem Migranten aus',
            translation: 'In the GDR, it was mainly migrants from ...',
            context: 'The question relates to migration in the German Democratic Republic (GDR). Foreign workers and contract workers lived and worked in the GDR, most of whom came from socialist or friendly countries on the basis of state agreements. They were mainly used in industry, agriculture and construction. Knowledge about the countries of origin of these migrants is important in order to better understand the migration policy and international relations of the GDR.',
            answers: [
                {
                    text: 'Vietnam, Polen, Mosambik.',
                    translation: 'Vietnam, Poland, Mozambique',
                    correct: true
                },
                {
                    text: 'Frankreich, Rumänien, Somalia.',
                    translation: 'France, Romania, Somalia.',
                    correct: false
                },
                {
                    text: 'Chile, Ungarn, Simbabwe.',
                    translation: 'Chile, Hungary, Zimbabwe.',
                    correct: false
                },
                {
                    text: 'Nordkorea, Mexiko, Ägypten.',
                    translation: 'North Korea, Mexico, Egypt.',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {
                DDR: 'GDR (East Germany)'
            }
        },
        {
            id: 299,
            question: 'Ausländische Arbeitnehmer und Arbeitnehmerinnen, die in den 50er und 60er Jahren von der Bundesrepublik Deutschland angeworben wurden, nannte man ...',
            translation: 'Foreign workers who were recruited by the Federal Republic of Germany in the 50s and 60s were called ...',
            context: 'After the Second World War, the Federal Republic of Germany experienced strong economic growth, the so-called "economic miracle". Since there were not enough workers, Germany concluded recruitment agreements with various countries in order to attract workers from abroad. Many people came to Germany in the 1950s and 1960s to work in factories, mining or other areas. A certain term was used for this group of workers, which is now historically coined.',
            answers: [
                {
                    text: 'Schwarzarbeiter / Schwarzarbeiterinnen',
                    translation: 'Undeclared workers',
                    correct: false
                },
                {
                    text: '<span class="keyword" title="guest worker">Gastarbeiter</span> / Gastarbeiterinnen',
                    translation: 'Guest workers',
                    correct: true
                },
                {
                    text: 'Zeitarbeiter / Zeitarbeiterinnen',
                    translation: 'Temporary workers',
                    correct: false
                },
                {
                    text: 'Schichtarbeiter / Schichtarbeiterinnen',
                    translation: 'Shift workers',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {
                Gastarbeiter: 'guest worker'
            }
        },
        {
            id: 300,
            question: 'Aus welchem Land kamen die ersten <span class="keyword" title="guest worker">Gastarbeiter</span> / Gastarbeiterinnen nach Deutschland?',
            translation: 'From which country did the first guest workers come to Germany?',
            context: 'After World War II, the Federal Republic of Germany experienced strong economic growth, which led to labor shortages. In order to remedy this, the government concluded recruitment agreements with various countries in the 1950s and 1960s. These agreements made it possible for foreign workers to work in Germany on a temporary basis. The question refers to the first country of origin of these so-called guest workers.',
            answers: [
                {
                    text: 'Italien',
                    translation: 'Italy',
                    correct: true
                },
                {
                    text: 'Spanien',
                    translation: 'Spain',
                    correct: false
                },
                {
                    text: 'Portugal',
                    translation: 'Portugal',
                    correct: false
                },
                {
                    text: 'Türkei',
                    translation: 'Turkey',
                    correct: false
                }
            ],
            category: 'History',
            keywords: {
                Gastarbeiter: 'guest worker'
            }
        }
    ],
    
    // 10 state-specific questions per Bundesland (16 states x 10 = 160 questions)
    states: {
        BW: {
            name: 'Baden-Württemberg',
            questions: [
                {
                    id: 301,
                    question: 'Welches <span class="keyword" title="coat of arms">Wappen</span> gehört zum <span class="keyword" title="federal state">Bundesland</span> Baden-Württemberg?',
                    translation: 'Which coat of arms belongs to the state of Baden-Württemberg?',
                    context: 'The question refers to German federal states and their official coats of arms. Each federal state has its own, historically shaped coat of arms with certain symbols, colours and motifs. In the task, several numbered images of coats of arms are shown. The aim is to identify the correct coat of arms, which belongs to the state of Baden-Württemberg. Knowledge of the appearance of the state coat of arms and comparison with other possible coats of arms are helpful for this.',
                    answers: [
                        {
                            text: '2',
                            translation: '2',
                            correct: false
                        },
                        {
                            text: '4',
                            translation: '4',
                            correct: false
                        },
                        {
                            text: '1',
                            translation: '1',
                            correct: true
                        },
                        {
                            text: '3',
                            translation: '3',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    image: 'images/qbw1.18061c05.jpeg',
                    keywords: {
                        Bundesland: 'federal state',
                        Wappen: 'coat of arms'
                    }
                },
                {
                    id: 302,
                    question: 'Welches ist ein Landkreis in Baden-Württemberg?',
                    translation: 'Which is a district in Baden-Württemberg?',
                    context: 'The following question refers to the geographical division of Germany. Germany is divided into federal states, administrative districts and rural districts. A district that belongs to the state of Baden-Württemberg is being sought. The answer options are given by different districts, each of which is located in different regions or federal states. In order to find the right answer, basic knowledge of the German federal states and their respective districts is helpful.',
                    answers: [
                        {
                            text: 'Neckar-Odenwald-Kreis',
                            translation: 'Neckar-Odenwald-Kreis',
                            correct: true
                        },
                        {
                            text: 'Nordfriesland',
                            translation: 'Nordfriesland',
                            correct: false
                        },
                        {
                            text: 'Altötting',
                            translation: 'Altötting',
                            correct: false
                        },
                        {
                            text: 'Mecklenburgische Seenplatte',
                            translation: 'Mecklenburg Lake District',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {}
                },
                {
                    id: 303,
                    question: 'Für wie viele Jahre wird der <span class="keyword" title="state parliament">Landtag</span> in Baden-Württemberg gewählt?',
                    translation: 'For how many years will the state parliament in Baden-Württemberg be elected?',
                    context: 'The question relates to the political system of the German state of Baden-Württemberg. There is a state parliament as an elected state parliament, whose members are determined at regular intervals by elections. The length of the electoral period is defined by law and determines how long the deputies exercise their mandate before a new election is held. Knowledge of state politics and constitutional regulations helps to answer this question.',
                    answers: [
                        {
                            text: '6',
                            translation: '6',
                            correct: false
                        },
                        {
                            text: '3',
                            translation: '3',
                            correct: false
                        },
                        {
                            text: '5',
                            translation: '5',
                            correct: true
                        },
                        {
                            text: '4',
                            translation: '4',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        Landtag: 'state parliament'
                    }
                },
                {
                    id: 304,
                    question: 'Ab welchem Alter darf man in Baden-Württemberg bei Kommunalwahlen <span class="keyword" title="to vote/elect">wählen</span>?',
                    translation: 'From what age can you vote in local elections in Baden-Württemberg?',
                    context: 'In Germany, voting rights vary depending on the federal state and the type of election. Especially in local elections, i.e. elections at municipal and district level, different age limits sometimes apply than in Bundestag or state elections. In recent years, Baden-Württemberg has made adjustments to promote political participation among young people. Against this background, the question arises as to the minimum age at which citizens are allowed to participate in local elections.',
                    answers: [
                        {
                            text: '16',
                            translation: '16',
                            correct: true
                        },
                        {
                            text: '18',
                            translation: '18',
                            correct: false
                        },
                        {
                            text: '20',
                            translation: '20',
                            correct: false
                        },
                        {
                            text: '14',
                            translation: '14',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        'wählen': 'to vote/elect'
                    }
                },
                {
                    id: 305,
                    question: 'Welche Farben hat die Landesflagge von Baden-Württemberg?',
                    translation: 'What colors does the state flag of Baden-Württemberg have?',
                    context: 'The question refers to the knowledge of German federal states and their symbols. Baden-Württemberg is one of the 16 federal states of Germany and, like each federal state, has its own state flag. In a multiple-choice format, different color combinations are offered. To choose the correct answer, one should know the flags of German states or be familiar with German geography and heraldry.',
                    answers: [
                        {
                            text: 'grün-weiß-rot',
                            translation: 'green-white-red',
                            correct: false
                        },
                        {
                            text: 'weiß-blau',
                            translation: 'white-blue',
                            correct: false
                        },
                        {
                            text: 'blau-weiß-rot',
                            translation: 'blue-white-red',
                            correct: false
                        },
                        {
                            text: 'schwarz-gold',
                            translation: 'black-gold',
                            correct: true
                        }
                    ],
                    category: 'State Specific',
                    keywords: {}
                },
                {
                    id: 306,
                    question: 'Wo können Sie sich in Baden-Württemberg über politische Themen informieren?',
                    translation: 'Where can you find out about political topics in Baden-Württemberg?',
                    context: 'The question refers to ways to find out about political issues in Baden-Württemberg. It examines knowledge about which institutions are specifically responsible for political education and information. Various state, social and church institutions are named in order to make it clear that not every authority or organization primarily carries out political education work.',
                    answers: [
                        {
                            text: 'bei der Landeszentrale für politische Bildung',
                            translation: 'at the State Agency for Civic Education',
                            correct: true
                        },
                        {
                            text: 'beim <span class="keyword" title="public order office">Ordnungsamt</span> der Gemeinde',
                            translation: 'at the public order office of the municipality',
                            correct: false
                        },
                        {
                            text: 'bei den Kirchen',
                            translation: 'at the churches',
                            correct: false
                        },
                        {
                            text: 'bei der Verbraucherzentrale',
                            translation: 'at the Consumer Advice Centre',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        Ordnungsamt: 'public order office'
                    }
                },
                {
                    id: 307,
                    question: 'Die Landeshauptstadt von Baden-Württemberg heißt ...',
                    translation: 'The state capital of Baden-Württemberg is called ...',
                    context: 'The question relates to the political and geographical structures of the German federal states. Baden-Württemberg is one of the 16 federal states of Germany and has a designated state capital in which the government and parliament have their seats. The answer options name well-known cities in the state, of which only one is the capital.',
                    answers: [
                        {
                            text: 'Mannheim',
                            translation: 'Mannheim',
                            correct: false
                        },
                        {
                            text: 'Stuttgart',
                            translation: 'Stuttgart',
                            correct: true
                        },
                        {
                            text: 'Heidelberg',
                            translation: 'Heidelberg',
                            correct: false
                        },
                        {
                            text: 'Karlsruhe',
                            translation: 'Karlsruhe',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {}
                },
                {
                    id: 308,
                    question: 'Welches <span class="keyword" title="federal state">Bundesland</span> ist Baden-Württemberg?',
                    translation: 'Which state is Baden-Württemberg?',
                    context: 'The question comes from a multiple-choice test on German geography. On a figure or list, the federal states of Germany are marked with the numbers 1 to 4. These numbers are to be used to determine which number corresponds to the state of Baden-Württemberg. The aim is to test knowledge about the situation and classification of the federal states.',
                    answers: [
                        {
                            text: '1',
                            translation: '1',
                            correct: false
                        },
                        {
                            text: '2',
                            translation: '2',
                            correct: true
                        },
                        {
                            text: '3',
                            translation: '3',
                            correct: false
                        },
                        {
                            text: '4',
                            translation: '4',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    image: 'images/qbw8.27ed57e1.jpeg',
                    keywords: {
                        Bundesland: 'federal state'
                    }
                },
                {
                    id: 309,
                    question: 'Wie nennt man den <span class="keyword" title="head of government">Regierungschef</span> / die <span class="keyword" title="head of government (female)">Regierungschefin</span> in Baden-Württemberg?',
                    translation: 'What is the head of government in Baden-Württemberg called?',
                    context: 'The question relates to the political system of Germany and in particular to the federal states. Each federal state has its own state government with a head of government. Depending on the state, this position has a specific official title, which differs from municipal offices or international titles. On the basis of the answer options, it is to be tested how well one knows the official titles of the political leadership at the state level, especially in the state of Baden-Württemberg.',
                    answers: [
                        {
                            text: 'Bürgermeister / Bürgermeisterin',
                            translation: 'Mayor',
                            correct: false
                        },
                        {
                            text: '<span class="keyword" title="state premier">Ministerpräsident</span> / <span class="keyword" title="state premier (female)">Ministerpräsidentin</span>',
                            translation: 'Prime Minister',
                            correct: true
                        },
                        {
                            text: 'Premierminister / Premierministerin',
                            translation: 'Prime Minister',
                            correct: false
                        },
                        {
                            text: 'Erster <span class="keyword" title="minister">Minister</span> / Erste <span class="keyword" title="minister (female)">Ministerin</span>',
                            translation: 'First Minister',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        Regierungschefin: 'head of government (female)',
                        Regierungschef: 'head of government',
                        'Ministerpräsidentin': 'state premier (female)',
                        'Ministerpräsident': 'state premier',
                        Ministerin: 'minister (female)',
                        Minister: 'minister'
                    }
                },
                {
                    id: 310,
                    question: 'Welchen <span class="keyword" title="minister">Minister</span> / welche <span class="keyword" title="minister (female)">Ministerin</span> hat Baden-Württemberg nicht?',
                    translation: 'Which minister does Baden-Württemberg not have?',
                    context: 'Germany consists of 16 federal states, each of which has its own state governments. These state governments have ministries for certain policy areas, for example finance, interior or justice. However, some ministries only exist at the federal level and not in the states. In order to be able to answer the question, it is important to know which tasks a federal state regulates itself and which are taken over exclusively by the federal government.',
                    answers: [
                        {
                            text: 'Finanzminister / Finanzministerin',
                            translation: 'Minister of Finance',
                            correct: false
                        },
                        {
                            text: 'Innenminister / Innenministerin',
                            translation: 'Minister of the Interior',
                            correct: false
                        },
                        {
                            text: 'Außenminister / Außenministerin',
                            translation: 'Foreign Minister',
                            correct: true
                        },
                        {
                            text: 'Justizminister / Justizministerin',
                            translation: 'Minister of Justice',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        Ministerin: 'minister (female)',
                        Minister: 'minister'
                    }
                }
            ]
        },
        BY: {
            name: 'Bayern (Bavaria)',
            questions: [
                {
                    id: 311,
                    question: 'Welches <span class="keyword" title="coat of arms">Wappen</span> gehört zum Freistaat Bayern?',
                    translation: 'Which coat of arms belongs to the Free State of Bavaria?',
                    context: 'In this task, you will see several numbered images of coats of arms. Each coat of arms belongs to a different German state or historical region. Their task is to recognize the official coat of arms of the Free State of Bavaria based on the typical symbols, colors and patterns. Select the number that corresponds to the Bavarian state coat of arms.',
                    answers: [
                        {
                            text: '1',
                            translation: '1',
                            correct: false
                        },
                        {
                            text: '2',
                            translation: '2',
                            correct: true
                        },
                        {
                            text: '3',
                            translation: '3',
                            correct: false
                        },
                        {
                            text: '4',
                            translation: '4',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    image: 'images/qby1.378f8193.jpeg',
                    keywords: {
                        Wappen: 'coat of arms'
                    }
                },
                {
                    id: 312,
                    question: 'Welches ist ein Landkreis in Bayern?',
                    translation: 'Which is a district in Bavaria?',
                    context: 'The question refers to administrative regions in Germany. Germany is divided into federal states, which in turn are divided into districts or independent cities. Bavaria is one of the 16 federal states, and there are several districts within this state. The answer options name various regions, some of which are located in other federal states. The aim is to identify which of the options mentioned is a district in the state of Bavaria.',
                    answers: [
                        {
                            text: 'Altötting',
                            translation: 'Altötting',
                            correct: true
                        },
                        {
                            text: 'Prignitz',
                            translation: 'Prignitz',
                            correct: false
                        },
                        {
                            text: 'Nordfriesland',
                            translation: 'Nordfriesland',
                            correct: false
                        },
                        {
                            text: 'Rhein-Sieg-Kreis',
                            translation: 'Rhein-Sieg district',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {}
                },
                {
                    id: 313,
                    question: 'Für wie viele Jahre wird der <span class="keyword" title="state parliament">Landtag</span> in Bayern gewählt?',
                    translation: 'For how many years will the state parliament in Bavaria be elected?',
                    context: 'In Germany, the states are their own political entities with their own parliaments, the so-called state parliaments. These parliaments are elected at regular intervals by the citizens. The duration of an electoral period is fixed by law and can differ from state to state. The question relates specifically to the Bavarian state parliament and the length of its legislative period.',
                    answers: [
                        {
                            text: '3',
                            translation: '3',
                            correct: false
                        },
                        {
                            text: '4',
                            translation: '4',
                            correct: false
                        },
                        {
                            text: '5',
                            translation: '5',
                            correct: true
                        },
                        {
                            text: '6',
                            translation: '6',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        Landtag: 'state parliament'
                    }
                },
                {
                    id: 314,
                    question: 'Ab welchem Alter darf man in Bayern bei Kommunalwahlen <span class="keyword" title="to vote/elect">wählen</span>?',
                    translation: 'From what age can you vote in local elections in Bavaria?',
                    context: 'In Germany, different legal regulations apply to elections, which can differ depending on the type of election and the federal state. Especially in local elections, some federal states have lowered the voting age to enable younger people to participate in politics. The following question refers specifically to the age limit for the right to vote in local elections in the state of Bavaria.',
                    answers: [
                        {
                            text: '14',
                            translation: '14',
                            correct: false
                        },
                        {
                            text: '16',
                            translation: '16',
                            correct: false
                        },
                        {
                            text: '18',
                            translation: '18',
                            correct: true
                        },
                        {
                            text: '20',
                            translation: '20',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        'wählen': 'to vote/elect'
                    }
                },
                {
                    id: 315,
                    question: 'Welche Farben hat die Landesflagge von Bayern?',
                    translation: 'What colors does the state flag of Bavaria have?',
                    context: 'The question refers to knowledge about German states and their official symbols. National flags in particular are an important part of the regional identity and history. In Germany, each state has its own colors and flags, which often originated from historical coats of arms or traditions. To find the right answer, you should be familiar with the symbols of the Free State of Bavaria and its typical colors.',
                    answers: [
                        {
                            text: 'weiß-blau',
                            translation: 'white-blue',
                            correct: true
                        },
                        {
                            text: 'schwarz-gelb',
                            translation: 'black-yellow',
                            correct: false
                        },
                        {
                            text: 'blau-weiß-rot',
                            translation: 'blue-white-red',
                            correct: false
                        },
                        {
                            text: 'grün-weiß-rot',
                            translation: 'green-white-red',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {}
                },
                {
                    id: 316,
                    question: 'Wo können Sie sich in Bayern über politische Themen informieren?',
                    translation: 'Where can you find out about political issues in Bavaria?',
                    context: 'The question refers to ways to obtain factual and reliable information about political topics in the state of Bavaria. It examines knowledge about which public or social institutions provide information on political education. In a multiple-choice selection, the appropriate institution is to be identified.',
                    answers: [
                        {
                            text: 'bei den Kirchen',
                            translation: 'at the churches',
                            correct: false
                        },
                        {
                            text: 'beim <span class="keyword" title="public order office">Ordnungsamt</span> der Gemeinde',
                            translation: 'at the public order office of the municipality',
                            correct: false
                        },
                        {
                            text: 'bei der Landeszentrale für politische Bildung',
                            translation: 'at the State Agency for Civic Education',
                            correct: true
                        },
                        {
                            text: 'bei der Verbraucherzentrale',
                            translation: 'at the Consumer Advice Centre',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        Ordnungsamt: 'public order office'
                    }
                },
                {
                    id: 317,
                    question: 'Die Landeshauptstadt von Bayern heißt ...',
                    translation: 'The state capital of Bavaria is called ...',
                    context: 'The question comes from the field of geography and general knowledge about Germany. It refers to the German federal states and their political centres. "State capital" refers to the city in which the government of a federal state has its seat. Bavaria is one of the 16 federal states of Germany, and there are several significant cities to choose from.',
                    answers: [
                        {
                            text: 'Nürnberg',
                            translation: 'Nuremberg',
                            correct: false
                        },
                        {
                            text: 'München',
                            translation: 'Munich',
                            correct: true
                        },
                        {
                            text: 'Regensburg',
                            translation: 'Regensburg',
                            correct: false
                        },
                        {
                            text: 'Ingolstadt',
                            translation: 'Ingolstadt',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {}
                },
                {
                    id: 318,
                    question: 'Wie nennt man den <span class="keyword" title="head of government">Regierungschef</span> / die <span class="keyword" title="head of government (female)">Regierungschefin</span> in Bayern?',
                    translation: 'What is the head of government in Bavaria called?',
                    context: 'The question refers to the political system of Germany and specifically to the state of Bavaria. Each federal state has its own state government with a specific name for the person who is at the head of it. To find the right answer, you should know how government offices are named at the state level.',
                    answers: [
                        {
                            text: '<span class="keyword" title="state premier">Ministerpräsident</span> / <span class="keyword" title="state premier (female)">Ministerpräsidentin</span>',
                            translation: 'Prime Minister',
                            correct: true
                        },
                        {
                            text: 'Bürgermeister / Bürgermeisterin',
                            translation: 'Mayor',
                            correct: false
                        },
                        {
                            text: 'Premierminister / Premierministerin',
                            translation: 'Prime Minister',
                            correct: false
                        },
                        {
                            text: 'Erster <span class="keyword" title="minister">Minister</span> / Erste <span class="keyword" title="minister (female)">Ministerin</span>',
                            translation: 'First Minister',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        Regierungschefin: 'head of government (female)',
                        Regierungschef: 'head of government',
                        'Ministerpräsidentin': 'state premier (female)',
                        'Ministerpräsident': 'state premier',
                        Ministerin: 'minister (female)',
                        Minister: 'minister'
                    }
                },
                {
                    id: 319,
                    question: 'Welchen <span class="keyword" title="minister">Minister</span> / welche <span class="keyword" title="minister (female)">Ministerin</span> hat Bayern nicht?',
                    translation: 'Which minister does Bavaria not have?',
                    context: 'In Germany, the federal states have their own state governments with different ministries. However, these are not identical with the ministries at the federal level. While certain ministries such as Interior, Finance or Justice are typically administered by the Länder themselves, other areas of responsibility are exclusively the responsibility of the Federal Government. To understand the question, you should know which ministries a state like Bavaria can have and which cannot.',
                    answers: [
                        {
                            text: 'Außenminister / Außenministerin',
                            translation: 'Foreign Minister',
                            correct: true
                        },
                        {
                            text: 'Innenminister / Innenministerin',
                            translation: 'Minister of the Interior',
                            correct: false
                        },
                        {
                            text: 'Finanzminister / Finanzministerin',
                            translation: 'Minister of Finance',
                            correct: false
                        },
                        {
                            text: 'Justizminister / Justizministerin',
                            translation: 'Minister of Justice',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        Ministerin: 'minister (female)',
                        Minister: 'minister'
                    }
                },
                {
                    id: 320,
                    question: 'Welches <span class="keyword" title="federal state">Bundesland</span> ist Bayern?',
                    translation: 'Which state is Bavaria?',
                    context: 'In this context, the focus is on basic knowledge of Germany\'s political geography. The question checks whether you know how the 16 federal states are classified or numbered. Based on the answer options, the correct state of Bavaria is to be identified.',
                    answers: [
                        {
                            text: '1',
                            translation: '1',
                            correct: false
                        },
                        {
                            text: '2',
                            translation: '2',
                            correct: false
                        },
                        {
                            text: '3',
                            translation: '3',
                            correct: false
                        },
                        {
                            text: '4',
                            translation: '4',
                            correct: true
                        }
                    ],
                    category: 'State Specific',
                    image: 'images/qby10.eaddc2be.jpeg',
                    keywords: {
                        Bundesland: 'federal state'
                    }
                }
            ]
        },
        BE: {
            name: 'Berlin',
            questions: [
                {
                    id: 321,
                    question: 'Welches <span class="keyword" title="coat of arms">Wappen</span> gehört zum <span class="keyword" title="federal state">Bundesland</span> Berlin?',
                    translation: 'Which coat of arms belongs to the state of Berlin?',
                    context: 'This task is about the German federal states and their official coats of arms. Each federal state has its own national emblem, which has historical and cultural significances. On the picture or in the task, several coats of arms with numbers are depicted. The question asks you to identify the coat of arms, which officially belongs to the state of Berlin, and to select the appropriate number.',
                    answers: [
                        {
                            text: '1',
                            translation: '1',
                            correct: false
                        },
                        {
                            text: '2',
                            translation: '2',
                            correct: false
                        },
                        {
                            text: '3',
                            translation: '3',
                            correct: false
                        },
                        {
                            text: '4',
                            translation: '4',
                            correct: true
                        }
                    ],
                    category: 'State Specific',
                    image: 'images/qbl1.83065446.jpeg',
                    keywords: {
                        Bundesland: 'federal state',
                        Wappen: 'coat of arms'
                    }
                },
                {
                    id: 322,
                    question: 'Welches ist ein Bezirk von Berlin?',
                    translation: 'Which is a district of Berlin?',
                    context: 'The question relates to the administrative structure of Germany. Berlin is divided into several districts, which represent a special form of municipal administration. The answer options contain different geographical names: Some are Berlin districts, others are districts or districts in other federal states or cities. The aim is to identify the district that actually belongs to Berlin.',
                    answers: [
                        {
                            text: 'Pankow',
                            translation: 'Pankow',
                            correct: true
                        },
                        {
                            text: 'Prignitz',
                            translation: 'Prignitz',
                            correct: false
                        },
                        {
                            text: 'Mecklenburgische Seenplatte',
                            translation: 'Mecklenburg Lake District',
                            correct: false
                        },
                        {
                            text: 'Altona',
                            translation: 'Altona',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {}
                },
                {
                    id: 323,
                    question: 'Für wie viele Jahre wird das Landesparlament in Berlin gewählt?',
                    translation: 'For how many years will the state parliament be elected in Berlin?',
                    context: 'The question relates to the political system of the federal state of Berlin. Berlin has its own state parliament, the "House of Representatives of Berlin". Elections take place at regular intervals in which the people of Berlin elect their representatives. The legislative period determines how many years the parliament remains in office before new elections are held. The answers indicate different time periods from which the correct one should be chosen.',
                    answers: [
                        {
                            text: '3',
                            translation: '3',
                            correct: false
                        },
                        {
                            text: '4',
                            translation: '4',
                            correct: false
                        },
                        {
                            text: '5',
                            translation: '5',
                            correct: true
                        },
                        {
                            text: '6',
                            translation: '6',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {}
                },
                {
                    id: 324,
                    question: 'Ab welchem Alter darf man in Berlin bei Kommunalwahlen (<span class="keyword" title="election">Wahl</span> der Bezirksverordnetenversammlung) <span class="keyword" title="to vote/elect">wählen</span>?',
                    translation: 'From what age can you vote in local elections (election of the district assembly) in Berlin?',
                    context: 'The question relates to the right to vote in local elections in Berlin. Specifically, it is about the election of the district council (BVV), i.e. the parliamentary representation of a Berlin district. Different federal states have different age limits for the right to vote at the municipal level. The answer options name different age groups from which citizens are allowed to participate in this election.',
                    answers: [
                        {
                            text: '14',
                            translation: '14',
                            correct: false
                        },
                        {
                            text: '16',
                            translation: '16',
                            correct: true
                        },
                        {
                            text: '18',
                            translation: '18',
                            correct: false
                        },
                        {
                            text: '20',
                            translation: '20',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        'wählen': 'to vote/elect',
                        Wahl: 'election'
                    }
                },
                {
                    id: 325,
                    question: 'Welche Farben hat die Landesflagge von Berlin?',
                    translation: 'What colors does the state flag of Berlin have?',
                    context: 'The following question refers to general knowledge about German federal states. Specifically, it is about the state flag of Berlin, i.e. the official flag of the German capital. Based on the answer options, it should be possible to recognize which colors this flag consists of. The question tests knowledge of national and regional symbols of Germany.',
                    answers: [
                        {
                            text: 'grün-weiß-rot',
                            translation: 'green-white-red',
                            correct: false
                        },
                        {
                            text: 'schwarz-gold',
                            translation: 'black-gold',
                            correct: false
                        },
                        {
                            text: 'weiß-rot',
                            translation: 'white-red',
                            correct: true
                        },
                        {
                            text: 'blau-weiß-rot',
                            translation: 'blue-white-red',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {}
                },
                {
                    id: 326,
                    question: 'Wo können Sie sich in Berlin über politische Themen informieren?',
                    translation: 'Where can you find out about political topics in Berlin?',
                    context: 'The question refers to opportunities for citizens in Berlin to inform themselves objectively and reliably about political topics, democratic processes and current developments. These are public institutions or organizations that provide educational and information services. The answer options name various institutions, from administrative offices to religious institutions to special information and education centers.',
                    answers: [
                        {
                            text: 'beim <span class="keyword" title="public order office">Ordnungsamt</span> der Gemeinde',
                            translation: 'at the public order office of the municipality',
                            correct: false
                        },
                        {
                            text: 'bei den Kirchen',
                            translation: 'at the churches',
                            correct: false
                        },
                        {
                            text: 'bei der Verbraucherzentrale',
                            translation: 'at the Consumer Advice Centre',
                            correct: false
                        },
                        {
                            text: 'bei der Landeszentrale für politische Bildung',
                            translation: 'at the State Agency for Civic Education',
                            correct: true
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        Ordnungsamt: 'public order office'
                    }
                },
                {
                    id: 327,
                    question: 'Welches <span class="keyword" title="federal state">Bundesland</span> ist ein Stadtstaat?',
                    translation: 'Which state is a city-state?',
                    context: 'There are 16 federal states in Germany with different political and geographical structures. Some federal states consist of several cities and regions, while others consist of only one large city and therefore have special forms of administration. These so-called city states include only a few federal states. The following question checks whether you know which of the mentioned federal states belongs to this special category.',
                    answers: [
                        {
                            text: 'Brandenburg',
                            translation: 'Brandenburg',
                            correct: false
                        },
                        {
                            text: 'Berlin',
                            translation: 'Berlin',
                            correct: true
                        },
                        {
                            text: 'Hessen',
                            translation: 'Hesse',
                            correct: false
                        },
                        {
                            text: 'Saarland',
                            translation: 'Saarland',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        Bundesland: 'federal state'
                    }
                },
                {
                    id: 328,
                    question: 'Wie nennt man den <span class="keyword" title="head of government">Regierungschef</span> / die <span class="keyword" title="head of government (female)">Regierungschefin</span> des Stadtstaates Berlin?',
                    translation: 'What do you call the head of government of the city-state of Berlin?',
                    context: 'In Germany, the federal states are organized differently. Some federal states are so-called city states, where city and state coincide. Berlin is such a city-state and therefore has special political structures. The term for the government and its top differs here from territorial states or from normal cities. To answer the following question, it is helpful to know the specific government offices and titles in a city-state like Berlin.',
                    answers: [
                        {
                            text: 'Regierender Bürgermeister / Regierende Bürgermeisterin',
                            translation: 'Governing Mayor',
                            correct: true
                        },
                        {
                            text: 'Präsident / Präsidentin des Senats',
                            translation: 'President of the Senate',
                            correct: false
                        },
                        {
                            text: '<span class="keyword" title="state premier">Ministerpräsident</span> / <span class="keyword" title="state premier (female)">Ministerpräsidentin</span>',
                            translation: 'Prime Minister',
                            correct: false
                        },
                        {
                            text: 'Oberbürgermeister / Oberbürgermeisterin',
                            translation: 'Lord Mayor',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        Regierungschefin: 'head of government (female)',
                        Regierungschef: 'head of government',
                        'Ministerpräsidentin': 'state premier (female)',
                        'Ministerpräsident': 'state premier'
                    }
                },
                {
                    id: 329,
                    question: 'Welchen Senator / welche Senatorin hat Berlin nicht?',
                    translation: 'Which senator does Berlin not have?',
                    context: 'Berlin is a German state and at the same time a city-state. The state government is called the "Senate of Berlin" and consists of the Governing Mayor and several senators, each of whom heads a specific department, for example Finance, Interior Affairs or Justice. Not every political field of activity exists at the state level. The question examines which of the senatorial offices mentioned do not exist in the Berlin Senate.',
                    answers: [
                        {
                            text: 'Senator / Senatorin für Außenbeziehungen',
                            translation: 'Senator for External Relations',
                            correct: true
                        },
                        {
                            text: 'Finanzsenator / Finanzsenatorin',
                            translation: 'Senator for Finance',
                            correct: false
                        },
                        {
                            text: 'Justizsenator / Justizsenatorin',
                            translation: 'Senator of Justice',
                            correct: false
                        },
                        {
                            text: 'Innensenator / Innensenatorin',
                            translation: 'Senator of the Interior',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {}
                },
                {
                    id: 330,
                    question: 'Welches <span class="keyword" title="federal state">Bundesland</span> ist Berlin?',
                    translation: 'Which state is Berlin?',
                    context: 'The question relates to the federal structure of Germany. Germany consists of 16 federal states, some of which are also city states. In a quiz or test, participants are asked to choose which federal state is Berlin based on given answer options. Options a to d stand for numbered answers, from which one should be selected as correct.',
                    answers: [
                        {
                            text: '1',
                            translation: '1',
                            correct: false
                        },
                        {
                            text: '2',
                            translation: '2',
                            correct: false
                        },
                        {
                            text: '3',
                            translation: '3',
                            correct: false
                        },
                        {
                            text: '4',
                            translation: '4',
                            correct: true
                        }
                    ],
                    category: 'State Specific',
                    image: 'images/qbl10.70634ae6.jpeg',
                    keywords: {
                        Bundesland: 'federal state'
                    }
                }
            ]
        },
        BB: {
            name: 'Brandenburg',
            questions: [
                {
                    id: 331,
                    question: 'Welches <span class="keyword" title="coat of arms">Wappen</span> gehört zum <span class="keyword" title="federal state">Bundesland</span> Brandenburg?',
                    translation: 'Which coat of arms belongs to the state of Brandenburg?',
                    context: 'In a quiz, several coats of arms with numbers are displayed. The task is to assign the correct coat of arms to a German state. Basic knowledge of the symbols of the federal states is helpful for this. In particular, you should know the coat of arms of Brandenburg, which is marked by its red eagle. You have to decide which of the numbered illustrations fits with it.',
                    answers: [
                        {
                            text: '1',
                            translation: '1',
                            correct: true
                        },
                        {
                            text: '2',
                            translation: '2',
                            correct: false
                        },
                        {
                            text: '3',
                            translation: '3',
                            correct: false
                        },
                        {
                            text: '4',
                            translation: '4',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    image: 'images/qbb1.706c4d3c.jpeg',
                    keywords: {
                        Bundesland: 'federal state',
                        Wappen: 'coat of arms'
                    }
                },
                {
                    id: 332,
                    question: 'Welches ist ein Landkreis in Brandenburg?',
                    translation: 'Which is a district in Brandenburg?',
                    context: 'The question relates to the administrative structure of Germany. Germany is divided into federal states, which in turn consist of rural districts and independent cities. Brandenburg is a federal state in eastern Germany. In the multiple-choice question, different districts are named, which may belong to different federal states. The aim is to identify the district, which belongs to the state of Brandenburg, in contrast to districts from other regions of Germany.',
                    answers: [
                        {
                            text: 'Amberg-Sulzbach',
                            translation: 'Amberg-Sulzbach',
                            correct: false
                        },
                        {
                            text: 'Rhein-Sieg-Kreis',
                            translation: 'Rhein-Sieg district',
                            correct: false
                        },
                        {
                            text: 'Prignitz',
                            translation: 'Prignitz',
                            correct: true
                        },
                        {
                            text: 'Vogtlandkreis',
                            translation: 'Vogtlandkreis',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {}
                },
                {
                    id: 333,
                    question: 'Für wie viele Jahre wird der <span class="keyword" title="state parliament">Landtag</span> in Brandenburg gewählt?',
                    translation: 'For how many years will the state parliament in Brandenburg be elected?',
                    context: 'The question relates to the parliamentary system of the federal state of Brandenburg. The state parliament is the state parliament and is elected at regular intervals. The electoral periods of the state parliaments differ depending on the federal state. The task tests knowledge about the duration of a legislative period in Brandenburg and offers several possible answers to choose from.',
                    answers: [
                        {
                            text: '3',
                            translation: '3',
                            correct: false
                        },
                        {
                            text: '4',
                            translation: '4',
                            correct: false
                        },
                        {
                            text: '5',
                            translation: '5',
                            correct: true
                        },
                        {
                            text: '6',
                            translation: '6',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        Landtag: 'state parliament'
                    }
                },
                {
                    id: 334,
                    question: 'Ab welchem Alter darf man in Brandenburg bei Kommunalwahlen <span class="keyword" title="to vote/elect">wählen</span>?',
                    translation: 'At what age can you vote in local elections in Brandenburg?',
                    context: 'In local elections, citizens decide on representatives in municipalities, cities and districts. In Germany, the voting rights can be regulated differently depending on the federal state. In particular, the minimum age for participation in local elections varies and is therefore an important requirement that voters should be aware of.',
                    answers: [
                        {
                            text: '14',
                            translation: '14',
                            correct: false
                        },
                        {
                            text: '16',
                            translation: '16',
                            correct: true
                        },
                        {
                            text: '18',
                            translation: '18',
                            correct: false
                        },
                        {
                            text: '20',
                            translation: '20',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        'wählen': 'to vote/elect'
                    }
                },
                {
                    id: 335,
                    question: 'Welche Farben hat die Landesflagge von Brandenburg?',
                    translation: 'What colors does the state flag of Brandenburg have?',
                    context: 'The question refers to the knowledge of German federal states and their official symbols. Each state in Germany has its own state flag with certain colors and often a coat of arms. The national flags are displayed at official events, on public buildings and at regional events. To find the right answer, one should know the flag of the state of Brandenburg or know which colors are traditionally associated with this state.',
                    answers: [
                        {
                            text: 'rot-weiß',
                            translation: 'red and white',
                            correct: true
                        },
                        {
                            text: 'schwarz-gelb',
                            translation: 'black-yellow',
                            correct: false
                        },
                        {
                            text: 'grün-weiß-rot',
                            translation: 'green-white-red',
                            correct: false
                        },
                        {
                            text: 'blau-weiß-rot',
                            translation: 'blue-white-red',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {}
                },
                {
                    id: 336,
                    question: 'Wo können Sie sich in Brandenburg über politische Themen informieren?',
                    translation: 'Where can you find out about political topics in Brandenburg?',
                    context: 'The question refers to ways to obtain factual information about political issues in the state of Brandenburg. It presents various institutions that have different tasks, for example administration, education, consumer protection or religious work. The aim is to identify which of these bodies is specifically responsible for providing civic education and informing citizens about politics, democracy and social issues.',
                    answers: [
                        {
                            text: 'beim <span class="keyword" title="public order office">Ordnungsamt</span> der Gemeinde',
                            translation: 'at the public order office of the municipality',
                            correct: false
                        },
                        {
                            text: 'bei der Landeszentrale für politische Bildung',
                            translation: 'at the State Agency for Civic Education',
                            correct: true
                        },
                        {
                            text: 'bei der Verbraucherzentrale',
                            translation: 'at the Consumer Advice Centre',
                            correct: false
                        },
                        {
                            text: 'bei den Kirchen',
                            translation: 'at the churches',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        Ordnungsamt: 'public order office'
                    }
                },
                {
                    id: 337,
                    question: 'Die Landeshauptstadt von Brandenburg heißt ...',
                    translation: 'The state capital of Brandenburg is called ...',
                    context: 'In Germany, each state consists of a state capital in which the government and parliament have their seats. Brandenburg is a federal state in eastern Germany with several larger cities. The following question tests the knowledge about the political capital of this state and distinguishes it from other important cities in Brandenburg.',
                    answers: [
                        {
                            text: 'Cottbus',
                            translation: 'Cottbus',
                            correct: false
                        },
                        {
                            text: 'Frankfurt/Oder',
                            translation: 'Frankfurt/Oder',
                            correct: false
                        },
                        {
                            text: 'Potsdam',
                            translation: 'Potsdam',
                            correct: true
                        },
                        {
                            text: 'Brandenburg',
                            translation: 'Brandenburg',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {}
                },
                {
                    id: 338,
                    question: 'Wie nennt man den <span class="keyword" title="head of government">Regierungschef</span> / die <span class="keyword" title="head of government (female)">Regierungschefin</span> in Brandenburg?',
                    translation: 'What is the head of government in Brandenburg called?',
                    context: 'The question refers to the political system of the Federal Republic of Germany and specifically to the federal state of Brandenburg. In Germany, each state has its own state government with a clearly defined designation for its top management. In order to be able to choose the correct answer, it is helpful to know the typical titles of heads of government at the state level and to distinguish between municipal, national and international government names.',
                    answers: [
                        {
                            text: '<span class="keyword" title="state premier">Ministerpräsident</span> / <span class="keyword" title="state premier (female)">Ministerpräsidentin</span>',
                            translation: 'Prime Minister',
                            correct: true
                        },
                        {
                            text: 'Bürgermeister / Bürgermeisterin',
                            translation: 'Mayor',
                            correct: false
                        },
                        {
                            text: 'Erster <span class="keyword" title="minister">Minister</span> / Erste <span class="keyword" title="minister (female)">Ministerin</span>',
                            translation: 'First Minister',
                            correct: false
                        },
                        {
                            text: 'Premierminister / Premierministerin',
                            translation: 'Prime Minister',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        Regierungschefin: 'head of government (female)',
                        Regierungschef: 'head of government',
                        'Ministerpräsidentin': 'state premier (female)',
                        'Ministerpräsident': 'state premier',
                        Ministerin: 'minister (female)',
                        Minister: 'minister'
                    }
                },
                {
                    id: 339,
                    question: 'Welchen <span class="keyword" title="minister">Minister</span> / welche <span class="keyword" title="minister (female)">Ministerin</span> hat Brandenburg nicht?',
                    translation: 'Which minister does Brandenburg not have?',
                    context: 'The question refers to the state government of the state of Brandenburg in Germany. Each federal state has its own ministries that cover certain policy areas. Typical ministries are, for example, finance, home affairs or justice. However, some ministries only exist at the federal level because certain responsibilities do not lie with the states. Against this background, it is to be examined which of the mentioned ministerial offices do not exist in Brandenburg.',
                    answers: [
                        {
                            text: 'Finanzminister / Finanzministerin',
                            translation: 'Minister of Finance',
                            correct: false
                        },
                        {
                            text: 'Innenminister / Innenministerin',
                            translation: 'Minister of the Interior',
                            correct: false
                        },
                        {
                            text: 'Außenminister / Außenministerin',
                            translation: 'Foreign Minister',
                            correct: true
                        },
                        {
                            text: 'Justizminister / Justizministerin',
                            translation: 'Minister of Justice',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        Ministerin: 'minister (female)',
                        Minister: 'minister'
                    }
                },
                {
                    id: 340,
                    question: 'Welches <span class="keyword" title="federal state">Bundesland</span> ist Brandenburg?',
                    translation: 'Which state is Brandenburg?',
                    context: 'A quiz on the political geography of Germany is about correctly classifying the German states. The question can refer to maps, numbering or illustrations in which the federal states are numbered consecutively. To choose the correct answer, you need to know which of these numbered areas corresponds to the state of Brandenburg.',
                    answers: [
                        {
                            text: '1',
                            translation: '1',
                            correct: false
                        },
                        {
                            text: '2',
                            translation: '2',
                            correct: false
                        },
                        {
                            text: '3',
                            translation: '3',
                            correct: false
                        },
                        {
                            text: '4',
                            translation: '4',
                            correct: true
                        }
                    ],
                    category: 'State Specific',
                    image: 'images/qbb10.7926742d.jpeg',
                    keywords: {
                        Bundesland: 'federal state'
                    }
                }
            ]
        },
        HB: {
            name: 'Bremen',
            questions: [
                {
                    id: 341,
                    question: 'Welches <span class="keyword" title="coat of arms">Wappen</span> gehört zur Freien Hansestadt Bremen?',
                    translation: 'Which coat of arms belongs to the Free Hanseatic City of Bremen?',
                    context: 'The question refers to the knowledge of German national coats of arms. In the task, several numbered coats of arms are presented, one of which shows the official coat of arms of the Free Hanseatic City of Bremen. To find the right answer, you should know what the Bremen coat of arms looks like and what historical symbols it contains. Then compare this knowledge with the options 1 to 4 shown and select the appropriate number.',
                    answers: [
                        {
                            text: '1',
                            translation: '1',
                            correct: false
                        },
                        {
                            text: '2',
                            translation: '2',
                            correct: false
                        },
                        {
                            text: '3',
                            translation: '3',
                            correct: true
                        },
                        {
                            text: '4',
                            translation: '4',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    image: 'images/qbm1.9033f1b7.jpeg',
                    keywords: {
                        Wappen: 'coat of arms'
                    }
                },
                {
                    id: 342,
                    question: 'Welches ist ein Stadtteil von Bremen?',
                    translation: 'Which is a district of Bremen?',
                    context: 'The question refers to German cities and their districts. Bremen is an independent city and a federal state with several districts. The answer options contain names of districts that belong to different German cities, sometimes to Berlin or Hamburg. The task is to recognize which of the districts mentioned actually belongs to Bremen.',
                    answers: [
                        {
                            text: 'Hemelingen',
                            translation: 'Hemelingen',
                            correct: true
                        },
                        {
                            text: 'Pankow',
                            translation: 'Pankow',
                            correct: false
                        },
                        {
                            text: 'Babelsberg',
                            translation: 'Babelsberg',
                            correct: false
                        },
                        {
                            text: 'Altona',
                            translation: 'Altona',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {}
                },
                {
                    id: 343,
                    question: 'Für wie viele Jahre wird das Landesparlament in Bremen gewählt?',
                    translation: 'For how many years will the state parliament in Bremen be elected?',
                    context: 'The question relates to the political system of the state of Bremen in Germany. Each federal state has its own parliament, which is elected for a specific legislative period. This legislative period determines how many years MPs remain in office before a new election is held.',
                    answers: [
                        {
                            text: '3',
                            translation: '3',
                            correct: false
                        },
                        {
                            text: '4',
                            translation: '4',
                            correct: true
                        },
                        {
                            text: '5',
                            translation: '5',
                            correct: false
                        },
                        {
                            text: '6',
                            translation: '6',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {}
                },
                {
                    id: 344,
                    question: 'Ab welchem Alter darf man in Bremen bei den <span class="keyword" title="elections">Wahlen</span> zur Bürgerschaft (<span class="keyword" title="state parliament">Landtag</span>) <span class="keyword" title="to vote/elect">wählen</span>?',
                    translation: 'From what age can you vote in the elections for the state parliament in Bremen?',
                    context: 'In Germany, voting rights differ depending on the federal state and the type of election. The question refers specifically to the state of Bremen and the elections to the parliament, which functions as the state parliament there. Bremen has special regulations compared to other federal states, for example because it consists of two cities. To find the right answer, you need to know the minimum age from which citizens in Bremen are allowed to vote in state elections.',
                    answers: [
                        {
                            text: '14',
                            translation: '14',
                            correct: false
                        },
                        {
                            text: '16',
                            translation: '16',
                            correct: true
                        },
                        {
                            text: '18',
                            translation: '18',
                            correct: false
                        },
                        {
                            text: '20',
                            translation: '20',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        Landtag: 'state parliament',
                        Wahlen: 'elections',
                        'wählen': 'to vote/elect'
                    }
                },
                {
                    id: 345,
                    question: 'Welche Farben hat die Landesflagge von Bremen?',
                    translation: 'What colors is the state flag of Bremen?',
                    context: 'The question refers to the national flags of the German federal states. Each state in Germany has its own flag with characteristic colors that have historical and cultural meanings. In order to find the right answer, it is helpful to have basic knowledge about the symbols and colors of the city-state of Bremen as well as their historical origins.',
                    answers: [
                        {
                            text: 'grün-weiß-rot',
                            translation: 'green-white-red',
                            correct: false
                        },
                        {
                            text: 'schwarz-gelb',
                            translation: 'black-yellow',
                            correct: false
                        },
                        {
                            text: 'rot-weiß',
                            translation: 'red and white',
                            correct: true
                        },
                        {
                            text: 'blau-weiß-rot',
                            translation: 'blue-white-red',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {}
                },
                {
                    id: 346,
                    question: 'Wo können Sie sich in Bremen über politische Themen informieren?',
                    translation: 'Where can you find out about political topics in Bremen?',
                    context: 'The question relates to possibilities of political education and information in the state of Bremen. It aims to examine which institutions are specifically responsible for informing citizens about political issues, democratic processes and social developments. The answer options are given by various public and social institutions, only one of which has a clear mandate to carry out political education work.',
                    answers: [
                        {
                            text: 'beim <span class="keyword" title="public order office">Ordnungsamt</span> der Gemeinde',
                            translation: 'at the public order office of the municipality',
                            correct: false
                        },
                        {
                            text: 'bei den Kirchen',
                            translation: 'at the churches',
                            correct: false
                        },
                        {
                            text: 'bei der Verbraucherzentrale',
                            translation: 'at the Consumer Advice Centre',
                            correct: false
                        },
                        {
                            text: 'bei der Landeszentrale für politische Bildung',
                            translation: 'at the State Agency for Civic Education',
                            correct: true
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        Ordnungsamt: 'public order office'
                    }
                },
                {
                    id: 347,
                    question: 'Was ist ein deutscher Stadtstaat?',
                    translation: 'What is a German city-state?',
                    context: 'There are different types of federal states in the German state structure. Some federal states consist of several cities and regions, others are special cases. A so-called city-state is a federal state that essentially consists of a single large city and does not include any other independent regions. In order to find the right answer, you should know which German states have this special form.',
                    answers: [
                        {
                            text: 'Erfurt',
                            translation: 'Erfurt',
                            correct: false
                        },
                        {
                            text: 'Bremen',
                            translation: 'Bremen',
                            correct: true
                        },
                        {
                            text: 'München',
                            translation: 'Munich',
                            correct: false
                        },
                        {
                            text: 'Frankfurt',
                            translation: 'Frankfurt',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {}
                },
                {
                    id: 348,
                    question: 'Wie nennt man den <span class="keyword" title="head of government">Regierungschef</span> / die <span class="keyword" title="head of government (female)">Regierungschefin</span> des Stadtstaates Bremen?',
                    translation: 'What do you call the head of government of the city-state of Bremen?',
                    context: 'Bremen is one of the 16 federal states of Germany and at the same time a city-state, consisting of the cities of Bremen and Bremerhaven. In Germany, the heads of government of the federal states have different official titles, depending on the constitutional tradition and the structure of the country. While territorial states usually have a prime minister, city states often use other titles. The question aims to know the correct official title of the head of government of the state of Bremen.',
                    answers: [
                        {
                            text: 'Präsident / Präsidentin des Senats',
                            translation: 'President of the Senate',
                            correct: true
                        },
                        {
                            text: '<span class="keyword" title="state premier">Ministerpräsident</span> / <span class="keyword" title="state premier (female)">Ministerpräsidentin</span>',
                            translation: 'Prime Minister',
                            correct: false
                        },
                        {
                            text: 'Regierender Bürgermeister / Regierende Bürgermeisterin',
                            translation: 'Governing Mayor',
                            correct: false
                        },
                        {
                            text: 'Erster Bürgermeister / Erste Bürgermeisterin',
                            translation: 'First Mayor',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        Regierungschefin: 'head of government (female)',
                        Regierungschef: 'head of government',
                        'Ministerpräsidentin': 'state premier (female)',
                        'Ministerpräsident': 'state premier'
                    }
                },
                {
                    id: 349,
                    question: 'Welchen Senator / welche Senatorin hat Bremen nicht?',
                    translation: 'Which senator does Bremen not have?',
                    context: 'The question refers to the state government of the Free Hanseatic City of Bremen. In the German federal states, there are ministries that are called "senators" in Bremen. These senators head certain ministries such as justice, home affairs or finance. However, due to its special state structure and limited responsibilities, Bremen does not have a separate department for each policy area. The question asks which of the senatorial offices mentioned does not exist in Bremen.',
                    answers: [
                        {
                            text: 'Justizsenator / Justizsenatorin',
                            translation: 'Senator of Justice',
                            correct: false
                        },
                        {
                            text: 'Senator / Senatorin für Außenbeziehungen',
                            translation: 'Senator for External Relations',
                            correct: true
                        },
                        {
                            text: 'Innensenator / Innensenatorin',
                            translation: 'Senator of the Interior',
                            correct: false
                        },
                        {
                            text: 'Finanzsenator / Finanzsenatorin',
                            translation: 'Senator for Finance',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {}
                },
                {
                    id: 350,
                    question: 'Welches <span class="keyword" title="federal state">Bundesland</span> ist Bremen?',
                    translation: 'Which federal state is Bremen?',
                    context: 'There are 16 federal states in the German federal state, including so-called city states. These consist of a city that also forms its own federal state. General education or policy tests often ask which category certain regions belong to. The following question examines knowledge about Bremen and its position within the Federal Republic of Germany.',
                    answers: [
                        {
                            text: '1',
                            translation: '1',
                            correct: true
                        },
                        {
                            text: '2',
                            translation: '2',
                            correct: false
                        },
                        {
                            text: '3',
                            translation: '3',
                            correct: false
                        },
                        {
                            text: '4',
                            translation: '4',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    image: 'images/qbm10.9f45074b.jpeg',
                    keywords: {
                        Bundesland: 'federal state'
                    }
                }
            ]
        },
        HH: {
            name: 'Hamburg',
            questions: [
                {
                    id: 351,
                    question: 'Welches <span class="keyword" title="coat of arms">Wappen</span> gehört zur Freien und Hansestadt Hamburg?',
                    translation: 'Which coat of arms belongs to the Free and Hanseatic City of Hamburg?',
                    context: 'The question relates to the recognition of official emblems of German cities. The Free and Hanseatic City of Hamburg has its own coat of arms, which reflects its history, its status as a city-state and its importance as a port city. In the task, several images of coats of arms are shown, and it is necessary to decide which of them belongs to Hamburg. Knowledge of German city coats of arms or visual features can help.',
                    answers: [
                        {
                            text: '1',
                            translation: '1',
                            correct: false
                        },
                        {
                            text: '2',
                            translation: '2',
                            correct: true
                        },
                        {
                            text: '3',
                            translation: '3',
                            correct: false
                        },
                        {
                            text: '4',
                            translation: '4',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    image: 'images/qhb1.ec3ac9e3.jpeg',
                    keywords: {
                        Wappen: 'coat of arms'
                    }
                },
                {
                    id: 352,
                    question: 'Welches ist ein Bezirk von Hamburg?',
                    translation: 'Which is a district of Hamburg?',
                    context: 'The question relates to the administrative structure in Germany. Large cities such as Hamburg are divided into so-called districts, which are part of the city administration. Other possible answers belong to different federal states or cities, such as Berlin, Bremen or Mecklenburg-Western Pomerania. With this knowledge, it should be possible to identify which of the areas mentioned is actually a district of the city of Hamburg.',
                    answers: [
                        {
                            text: 'Pankow',
                            translation: 'Pankow',
                            correct: false
                        },
                        {
                            text: 'Altona',
                            translation: 'Altona',
                            correct: true
                        },
                        {
                            text: 'Mecklenburgische Seenplatte',
                            translation: 'Mecklenburg Lake District',
                            correct: false
                        },
                        {
                            text: 'Hemelingen',
                            translation: 'Hemelingen',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {}
                },
                {
                    id: 353,
                    question: 'Für wie viele Jahre wird das Landesparlament in Hamburg gewählt?',
                    translation: 'For how many years will the state parliament be elected in Hamburg?',
                    context: 'The question relates to the political system of the German state of Hamburg. Hamburg is a city-state with its own state parliament, the so-called Hamburg Parliament. This is elected at regular intervals by the citizens entitled to vote. The term of office of the state parliament is fixed by law and determines how long the deputies serve in parliament before a new election takes place.',
                    answers: [
                        {
                            text: '3',
                            translation: '3',
                            correct: false
                        },
                        {
                            text: '4',
                            translation: '4',
                            correct: false
                        },
                        {
                            text: '5',
                            translation: '5',
                            correct: true
                        },
                        {
                            text: '6',
                            translation: '6',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {}
                },
                {
                    id: 354,
                    question: 'Ab welchem Alter darf man in Hamburg bei Kommunalwahlen (<span class="keyword" title="election">Wahl</span> der Bezirksversammlungen) <span class="keyword" title="to vote/elect">wählen</span>?',
                    translation: 'From what age can you vote in local elections (election of the district assemblies) in Hamburg?',
                    context: 'In Hamburg, there are also local elections in addition to Bundestag and parliamentary elections. The district assemblies are elected, which have a say in many local issues such as urban development, schools or transport. The question of the voting age is particularly relevant because the age limit can differ depending on the type of election and the federal state. In order to understand the political participation opportunities of young people, it is important to know at what age you are entitled to vote in these elections.',
                    answers: [
                        {
                            text: '14',
                            translation: '14',
                            correct: false
                        },
                        {
                            text: '16',
                            translation: '16',
                            correct: true
                        },
                        {
                            text: '18',
                            translation: '18',
                            correct: false
                        },
                        {
                            text: '20',
                            translation: '20',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        'wählen': 'to vote/elect',
                        Wahl: 'election'
                    }
                },
                {
                    id: 355,
                    question: 'Welche Farben hat die Landesflagge von Hamburg?',
                    translation: 'What colors does the state flag of Hamburg have?',
                    context: 'The following question refers to the German federal states and their official symbols. Each state has its own flag with certain colors that are historically and culturally significant. To find the right answer, basic knowledge about the flags of German cities or countries is helpful, especially about the city of Hamburg.',
                    answers: [
                        {
                            text: 'weiß-rot',
                            translation: 'white-red',
                            correct: true
                        },
                        {
                            text: 'schwarz-gelb',
                            translation: 'black-yellow',
                            correct: false
                        },
                        {
                            text: 'blau-weiß-rot',
                            translation: 'blue-white-red',
                            correct: false
                        },
                        {
                            text: 'grün-weiß-rot',
                            translation: 'green-white-red',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {}
                },
                {
                    id: 356,
                    question: 'Wo können Sie sich in Hamburg über politische Themen informieren?',
                    translation: 'Where can you find out about political topics in Hamburg?',
                    context: 'The question refers to possibilities of political information in the city of Hamburg. It checks whether it is known which public or social institutions are specifically responsible for objectively informing citizens about political issues, democratic processes and opportunities for participation. Various institutions are named that have different tasks to promote knowledge about politics and society or to perform other administrative and advisory tasks.',
                    answers: [
                        {
                            text: 'bei der Verbraucherzentrale',
                            translation: 'at the Consumer Advice Centre',
                            correct: false
                        },
                        {
                            text: 'bei der Landeszentrale für politische Bildung',
                            translation: 'at the State Agency for Civic Education',
                            correct: true
                        },
                        {
                            text: 'beim <span class="keyword" title="public order office">Ordnungsamt</span> der Gemeinde',
                            translation: 'at the public order office of the municipality',
                            correct: false
                        },
                        {
                            text: 'bei den Kirchen',
                            translation: 'at the churches',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        Ordnungsamt: 'public order office'
                    }
                },
                {
                    id: 357,
                    question: 'Welches <span class="keyword" title="federal state">Bundesland</span> ist ein Stadtstaat?',
                    translation: 'Which state is a city-state?',
                    context: 'The following question refers to the political system of Germany. Germany consists of several federal states, some of which are so-called city states. A city-state is a federal state that consists of only one city. Which of the options mentioned is such a city-state?',
                    answers: [
                        {
                            text: 'Sachsen',
                            translation: 'Saxony',
                            correct: false
                        },
                        {
                            text: 'Bayern',
                            translation: 'Bavaria',
                            correct: false
                        },
                        {
                            text: 'Thüringen',
                            translation: 'Thuringia',
                            correct: false
                        },
                        {
                            text: 'Hamburg',
                            translation: 'Hamburg',
                            correct: true
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        Bundesland: 'federal state'
                    }
                },
                {
                    id: 358,
                    question: 'Wie nennt man den <span class="keyword" title="head of government">Regierungschef</span> / die <span class="keyword" title="head of government (female)">Regierungschefin</span> des Stadtstaates Hamburg?',
                    translation: 'What is the head of government of the city-state of Hamburg called?',
                    context: 'Germany is a federal state with federal, state and local governments. Some federal states are city-states, such as Hamburg, Berlin and Bremen. These have special government structures that differ from territorial states. That is why their heads of government have different titles than in the other federal states or in individual cities. In order to know the correct name, you have to know what role Hamburg plays in the German political system and how its state government is organized.',
                    answers: [
                        {
                            text: 'Erster Bürgermeister / Erste Bürgermeisterin',
                            translation: 'First Mayor',
                            correct: true
                        },
                        {
                            text: 'Oberbürgermeister / Oberbürgermeisterin',
                            translation: 'Lord Mayor',
                            correct: false
                        },
                        {
                            text: '<span class="keyword" title="state premier">Ministerpräsident</span> / <span class="keyword" title="state premier (female)">Ministerpräsidentin</span>',
                            translation: 'Prime Minister',
                            correct: false
                        },
                        {
                            text: 'Regierender Senator / Regierende Senatorin',
                            translation: 'Governing Senator',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        Regierungschefin: 'head of government (female)',
                        Regierungschef: 'head of government',
                        'Ministerpräsidentin': 'state premier (female)',
                        'Ministerpräsident': 'state premier'
                    }
                },
                {
                    id: 359,
                    question: 'Welchen Senator / welche Senatorin hat Hamburg nicht?',
                    translation: 'Which senator does Hamburg not have?',
                    context: 'The question relates to the political structure of the federal state of Hamburg. Hamburg is both a city and a country and is governed by a senate. This Senate consists of the First Mayor and several senators, each of whom is responsible for specific departments such as Interior, Justice or Finance. Depending on the distribution of tasks, there are certain senatorial offices, while others are common at the federal level but do not exist in Hamburg.',
                    answers: [
                        {
                            text: 'Senator / Senatorin für Außenbeziehungen',
                            translation: 'Senator for External Relations',
                            correct: true
                        },
                        {
                            text: 'Innensenator / Innensenatorin',
                            translation: 'Senator of the Interior',
                            correct: false
                        },
                        {
                            text: 'Justizsenator / Justizsenatorin',
                            translation: 'Senator of Justice',
                            correct: false
                        },
                        {
                            text: 'Finanzsenator / Finanzsenatorin',
                            translation: 'Senator for Finance',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {}
                },
                {
                    id: 360,
                    question: 'Welches <span class="keyword" title="federal state">Bundesland</span> ist Hamburg?',
                    translation: 'Which state is Hamburg?',
                    context: 'In Germany, the country is divided into 16 federal states. In addition to so-called territorial states, there are also city-states. City states are cities that simultaneously form their own federal state and have no other superordinate state administration. These special federal states include only a few large cities. The question aims to check whether it is known what role Hamburg plays within this federal system.',
                    answers: [
                        {
                            text: '1',
                            translation: '1',
                            correct: false
                        },
                        {
                            text: '2',
                            translation: '2',
                            correct: false
                        },
                        {
                            text: '3',
                            translation: '3',
                            correct: true
                        },
                        {
                            text: '4',
                            translation: '4',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    image: 'images/qhb10.4c2c3aab.jpeg',
                    keywords: {
                        Bundesland: 'federal state'
                    }
                }
            ]
        },
        HE: {
            name: 'Hessen',
            questions: [
                {
                    id: 361,
                    question: 'Welches <span class="keyword" title="coat of arms">Wappen</span> gehört zum <span class="keyword" title="federal state">Bundesland</span> Hessen?',
                    translation: 'Which coat of arms belongs to the state of Hesse?',
                    context: 'As part of a quiz or a learning task on German civics, knowledge of the federal states is to be tested. Each state in Germany has its own coat of arms with specific symbols and colors. The participants see several images of coats of arms and have to recognize which of them is assigned to the state of Hesse. The selection is made via numbered options, only one of which is correct.',
                    answers: [
                        {
                            text: '1',
                            translation: '1',
                            correct: true
                        },
                        {
                            text: '2',
                            translation: '2',
                            correct: false
                        },
                        {
                            text: '3',
                            translation: '3',
                            correct: false
                        },
                        {
                            text: '4',
                            translation: '4',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    image: 'images/qhs1.a1d732b7.jpeg',
                    keywords: {
                        Bundesland: 'federal state',
                        Wappen: 'coat of arms'
                    }
                },
                {
                    id: 362,
                    question: 'Welches ist ein Landkreis in Hessen?',
                    translation: 'Which is a district in Hesse?',
                    context: 'The question relates to the administrative structure of Germany. Germany is divided into federal states, which in turn consist of rural districts and independent cities. Hesse is one of these federal states. In order to find the right answer, you have to know which of the districts mentioned is actually in Hesse and which belong to other federal states.',
                    answers: [
                        {
                            text: 'Main-Taunus-Kreis',
                            translation: 'Main-Taunus-Kreis',
                            correct: true
                        },
                        {
                            text: 'Prignitz',
                            translation: 'Prignitz',
                            correct: false
                        },
                        {
                            text: 'Ammerland',
                            translation: 'Ammerland',
                            correct: false
                        },
                        {
                            text: 'Altötting',
                            translation: 'Altötting',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {}
                },
                {
                    id: 363,
                    question: 'Für wie viele Jahre wird der <span class="keyword" title="state parliament">Landtag</span> in Hessen gewählt?',
                    translation: 'For how many years will the state parliament in Hesse be elected?',
                    context: 'The Landtag is the state parliament of a German federal state and is elected at regular intervals by the citizens. The electoral period determines how long the members of parliament exercise their mandate before a new election is held. The duration of this legislative period may differ in the different federal states. In order to check basic political knowledge, the question is how many years the electoral period of the Hessian state parliament is.',
                    answers: [
                        {
                            text: '3',
                            translation: '3',
                            correct: false
                        },
                        {
                            text: '4',
                            translation: '4',
                            correct: false
                        },
                        {
                            text: '5',
                            translation: '5',
                            correct: true
                        },
                        {
                            text: '6',
                            translation: '6',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        Landtag: 'state parliament'
                    }
                },
                {
                    id: 364,
                    question: 'Ab welchem Alter darf man in Hessen bei Kommunalwahlen <span class="keyword" title="to vote/elect">wählen</span>?',
                    translation: 'At what age can you vote in local elections in Hesse?',
                    context: 'The question relates to the right to vote in local elections in a German federal state. In Germany, the regulations on the voting age differ depending on the type of election and the federal state. Local elections concern the election of representatives at the municipal level, such as city or municipal councils. The voting age is particularly interesting because it is sometimes set lower than in Bundestag or European elections. The answer options show various possible age limits, which may be politically or legally relevant.',
                    answers: [
                        {
                            text: '14',
                            translation: '14',
                            correct: false
                        },
                        {
                            text: '16',
                            translation: '16',
                            correct: false
                        },
                        {
                            text: '18',
                            translation: '18',
                            correct: true
                        },
                        {
                            text: '20',
                            translation: '20',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        'wählen': 'to vote/elect'
                    }
                },
                {
                    id: 365,
                    question: 'Welche Farben hat die Landesflagge von Hessen?',
                    translation: 'What colors is the state flag of Hesse?',
                    context: 'The question refers to general knowledge about German federal states. Hesse is a federal state in the middle of Germany and, like all federal states, has its own state flag. To find the right answer, you should be familiar with the symbols and colors of the Hessian flag or have a basic knowledge of German state flags.',
                    answers: [
                        {
                            text: 'rot-weiß',
                            translation: 'red and white',
                            correct: true
                        },
                        {
                            text: 'schwarz-gold',
                            translation: 'black-gold',
                            correct: false
                        },
                        {
                            text: 'grün-weiß-rot',
                            translation: 'green-white-red',
                            correct: false
                        },
                        {
                            text: 'blau-weiß-rot',
                            translation: 'blue-white-red',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {}
                },
                {
                    id: 366,
                    question: 'Wo können Sie sich in Hessen über politische Themen informieren?',
                    translation: 'Where can you find out about political topics in Hesse?',
                    context: 'This question relates to political education and information opportunities in the state of Hesse. It aims to examine which state or public institution is specifically responsible for providing citizens with factual information about politics, democracy and social issues. In order to find the right answer, it is important to know what tasks different institutions such as authorities, churches or educational institutions have.',
                    answers: [
                        {
                            text: 'bei der Verbraucherzentrale',
                            translation: 'at the Consumer Advice Centre',
                            correct: false
                        },
                        {
                            text: 'bei der Landeszentrale für politische Bildung',
                            translation: 'at the State Agency for Civic Education',
                            correct: true
                        },
                        {
                            text: 'bei den Kirchen',
                            translation: 'at the churches',
                            correct: false
                        },
                        {
                            text: 'beim <span class="keyword" title="public order office">Ordnungsamt</span> der Gemeinde',
                            translation: 'at the public order office of the municipality',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        Ordnungsamt: 'public order office'
                    }
                },
                {
                    id: 367,
                    question: 'Die Landeshauptstadt von Hessen heißt ...',
                    translation: 'The state capital of Hesse is called ...',
                    context: 'In Germany, each state has its own state capital, which is the seat of government and parliament. Hesse is a federal state in the middle of Germany. The following multiple-choice question tests your knowledge of German geography by choosing the right state capital of Hesse from several well-known cities.',
                    answers: [
                        {
                            text: 'Kassel',
                            translation: 'Kassel',
                            correct: false
                        },
                        {
                            text: 'Darmstadt',
                            translation: 'Darmstadt',
                            correct: false
                        },
                        {
                            text: 'Frankfurt',
                            translation: 'Frankfurt',
                            correct: false
                        },
                        {
                            text: 'Wiesbaden',
                            translation: 'Wiesbaden',
                            correct: true
                        }
                    ],
                    category: 'State Specific',
                    keywords: {}
                },
                {
                    id: 368,
                    question: 'Wie nennt man den <span class="keyword" title="head of government">Regierungschef</span> / die <span class="keyword" title="head of government (female)">Regierungschefin</span> in Hessen?',
                    translation: 'What is the head of government in Hesse called?',
                    context: 'The question relates to Germany\'s political system. Germany is a federal state with 16 federal states, each of which has its own state government. Each federal state has its own head of government with a specific official title, which may differ from other states or from the federal government.',
                    answers: [
                        {
                            text: 'Bürgermeister / Bürgermeisterin',
                            translation: 'Mayor',
                            correct: false
                        },
                        {
                            text: '<span class="keyword" title="state premier">Ministerpräsident</span> / <span class="keyword" title="state premier (female)">Ministerpräsidentin</span>',
                            translation: 'Prime Minister',
                            correct: true
                        },
                        {
                            text: 'Premierminister / Premierministerin',
                            translation: 'Prime Minister',
                            correct: false
                        },
                        {
                            text: 'Erster <span class="keyword" title="minister">Minister</span> / Erste <span class="keyword" title="minister (female)">Ministerin</span>',
                            translation: 'First Minister',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        Regierungschefin: 'head of government (female)',
                        Regierungschef: 'head of government',
                        'Ministerpräsidentin': 'state premier (female)',
                        'Ministerpräsident': 'state premier',
                        Ministerin: 'minister (female)',
                        Minister: 'minister'
                    }
                },
                {
                    id: 369,
                    question: 'Welchen <span class="keyword" title="minister">Minister</span> / welche <span class="keyword" title="minister (female)">Ministerin</span> hat Hessen nicht?',
                    translation: 'Which minister does Hesse not have?',
                    context: 'The question relates to the political structure of the federal state of Hesse. In Germany, the federal states have their own state governments with ministries for different areas of responsibility. Some departments, such as finance, justice or home affairs, are typically located at the state level, while other responsibilities lie at the federal level. In order to find the right answer, you have to know which ministries a state like Hesse usually has or not.',
                    answers: [
                        {
                            text: 'Außenminister / Außenministerin',
                            translation: 'Foreign Minister',
                            correct: true
                        },
                        {
                            text: 'Finanzminister / Finanzministerin',
                            translation: 'Minister of Finance',
                            correct: false
                        },
                        {
                            text: 'Justizminister / Justizministerin',
                            translation: 'Minister of Justice',
                            correct: false
                        },
                        {
                            text: 'Innenminister / Innenministerin',
                            translation: 'Minister of the Interior',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        Ministerin: 'minister (female)',
                        Minister: 'minister'
                    }
                },
                {
                    id: 370,
                    question: 'Welches <span class="keyword" title="federal state">Bundesland</span> ist Hessen?',
                    translation: 'Which state is Hesse?',
                    context: 'The question refers to a quiz about the federal states of Germany. The federal states are usually numbered on a map or in a list. The task is to use this numbering to identify which number is assigned to the state of Hesse and to select the correct answer option.',
                    answers: [
                        {
                            text: '1',
                            translation: '1',
                            correct: false
                        },
                        {
                            text: '2',
                            translation: '2',
                            correct: false
                        },
                        {
                            text: '3',
                            translation: '3',
                            correct: true
                        },
                        {
                            text: '4',
                            translation: '4',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    image: 'images/qhs10.da672a59.jpeg',
                    keywords: {
                        Bundesland: 'federal state'
                    }
                }
            ]
        },
        MV: {
            name: 'Mecklenburg-Vorpommern',
            questions: [
                {
                    id: 371,
                    question: 'Welches <span class="keyword" title="coat of arms">Wappen</span> gehört zum <span class="keyword" title="federal state">Bundesland</span> Mecklenburg-Vorpommern?',
                    translation: 'Which coat of arms belongs to the state of Mecklenburg-Vorpommern?',
                    context: 'In Germany, each state has its own coat of arms with typical symbols and colors. These coats of arms often show animals, heraldic images or colours that historically stand for the respective region. In the task, several coats of arms are depicted and numbered. Your task is to use your knowledge of German states to identify which of these coats of arms represents the state of Mecklenburg-Vorpommern.',
                    answers: [
                        {
                            text: '1',
                            translation: '1',
                            correct: false
                        },
                        {
                            text: '2',
                            translation: '2',
                            correct: false
                        },
                        {
                            text: '3',
                            translation: '3',
                            correct: true
                        },
                        {
                            text: '4',
                            translation: '4',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    image: 'images/qmv1.a2812830.jpeg',
                    keywords: {
                        Bundesland: 'federal state',
                        Wappen: 'coat of arms'
                    }
                },
                {
                    id: 372,
                    question: 'Welches ist ein Landkreis in Mecklenburg-Vorpommern?',
                    translation: 'Which is a district in Mecklenburg-Vorpommern?',
                    context: 'The question refers to basic geographical knowledge about Germany. It checks whether German districts are known and can be assigned to the correct federal states. In the multiple-choice task, several districts are named, each of which can be located in different regions of Germany, and it is asked which of them is located in the state of Mecklenburg-Vorpommern.',
                    answers: [
                        {
                            text: 'Vogtlandkreis',
                            translation: 'Vogtlandkreis',
                            correct: false
                        },
                        {
                            text: 'Rhein-Sieg-Kreis',
                            translation: 'Rhein-Sieg district',
                            correct: false
                        },
                        {
                            text: 'Mecklenburgische Seenplatte',
                            translation: 'Mecklenburg Lake District',
                            correct: true
                        },
                        {
                            text: 'Prignitz',
                            translation: 'Prignitz',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {}
                },
                {
                    id: 373,
                    question: 'Für wie viele Jahre wird der <span class="keyword" title="state parliament">Landtag</span> in Mecklenburg-Vorpommern gewählt?',
                    translation: 'For how many years will the state parliament in Mecklenburg-Western Pomerania be elected?',
                    context: 'The question relates to the parliamentary system of the German state of Mecklenburg-Western Pomerania. Each federal state has its own state parliament, which acts as a legislative body and is elected by the citizens. The electoral period determines how long the members of parliament remain in office before a new election is held. This duration is regulated in the state constitution and may differ from other federal states.',
                    answers: [
                        {
                            text: '3',
                            translation: '3',
                            correct: false
                        },
                        {
                            text: '4',
                            translation: '4',
                            correct: false
                        },
                        {
                            text: '5',
                            translation: '5',
                            correct: true
                        },
                        {
                            text: '6',
                            translation: '6',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        Landtag: 'state parliament'
                    }
                },
                {
                    id: 374,
                    question: 'Ab welchem Alter darf man in Mecklenburg-Vorpommern bei Kommunalwahlen <span class="keyword" title="to vote/elect">wählen</span>?',
                    translation: 'At what age can you vote in local elections in Mecklenburg-Vorpommern?',
                    context: 'In Germany, different age limits apply to the right to vote depending on the federal state and the type of election. In addition to federal and state elections, there are also local elections, in which citizens vote on local issues such as municipal councils or district councils. Some federal states have lowered the voting age for local elections in order to promote political participation of young people. The question relates to the minimum age for participation in local elections, especially in Mecklenburg-Western Pomerania.',
                    answers: [
                        {
                            text: '14',
                            translation: '14',
                            correct: false
                        },
                        {
                            text: '16',
                            translation: '16',
                            correct: true
                        },
                        {
                            text: '18',
                            translation: '18',
                            correct: false
                        },
                        {
                            text: '20',
                            translation: '20',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        'wählen': 'to vote/elect'
                    }
                },
                {
                    id: 375,
                    question: 'Welche Farben hat die Landesflagge von Mecklenburg-Vorpommern?',
                    translation: 'What colors does the state flag of Mecklenburg-Western Pomerania have?',
                    context: 'The question refers to the knowledge of German federal states and their official symbols. Mecklenburg-Western Pomerania is a state in northeastern Germany with its own state flag. To find the right answer, you should know what colors this flag wears. Such questions often appear in geography, politics or general knowledge quizzes, especially in connection with German states and their state characteristics.',
                    answers: [
                        {
                            text: 'blau-weiß-gelb-rot',
                            translation: 'blue-white-yellow-red',
                            correct: true
                        },
                        {
                            text: 'schwarz-gelb',
                            translation: 'black-yellow',
                            correct: false
                        },
                        {
                            text: 'schwarz-rot-gold',
                            translation: 'black-red-gold',
                            correct: false
                        },
                        {
                            text: 'grün-weiß-rot',
                            translation: 'green-white-red',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {}
                },
                {
                    id: 376,
                    question: 'Wo können Sie sich in Mecklenburg-Vorpommern über politische Themen informieren?',
                    translation: 'Where can you find out about political topics in Mecklenburg-Vorpommern?',
                    context: 'The question relates to opportunities for political education in a German federal state. Citizens should know which public institutions provide information on politics, democracy and social issues. In Mecklenburg-Western Pomerania, there are various state and non-state agencies with different tasks. The context helps to understand which institution is specifically responsible for political education and which tend to take on other tasks such as administration, consumer protection or religious care.',
                    answers: [
                        {
                            text: 'bei der Verbraucherzentrale',
                            translation: 'at the Consumer Advice Centre',
                            correct: false
                        },
                        {
                            text: 'beim <span class="keyword" title="public order office">Ordnungsamt</span> der Gemeinde',
                            translation: 'at the public order office of the municipality',
                            correct: false
                        },
                        {
                            text: 'bei der Landeszentrale für politische Bildung',
                            translation: 'at the State Agency for Civic Education',
                            correct: true
                        },
                        {
                            text: 'bei den Kirchen',
                            translation: 'at the churches',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        Ordnungsamt: 'public order office'
                    }
                },
                {
                    id: 377,
                    question: 'Die Landeshauptstadt von Mecklenburg-Vorpommern heißt ...',
                    translation: 'The state capital of Mecklenburg-Western Pomerania is called ...',
                    context: 'The question refers to the political and geographical knowledge about the federal states of Germany. Each federal state has its own state capital, in which the government and parliament are located. Mecklenburg-Western Pomerania is located in the northeast of Germany. The answer options name well-known cities from this state.',
                    answers: [
                        {
                            text: 'Wismar',
                            translation: 'Wismar',
                            correct: false
                        },
                        {
                            text: 'Rostock',
                            translation: 'Rostock',
                            correct: false
                        },
                        {
                            text: 'Greifswald',
                            translation: 'Greifswald',
                            correct: false
                        },
                        {
                            text: 'Schwerin',
                            translation: 'Schwerin',
                            correct: true
                        }
                    ],
                    category: 'State Specific',
                    keywords: {}
                },
                {
                    id: 378,
                    question: 'Wie nennt man den <span class="keyword" title="head of government">Regierungschef</span> / die <span class="keyword" title="head of government (female)">Regierungschefin</span> in Mecklenburg-Vorpommern?',
                    translation: 'What is the head of government in Mecklenburg-Western Pomerania called?',
                    context: 'In Germany, political leadership is organized at different levels. In addition to the federal government, there is a separate state government in each federal state. The title of the head of government can differ depending on the political level and federal state. The question refers specifically to the state of Mecklenburg-Western Pomerania.',
                    answers: [
                        {
                            text: 'Bürgermeister / Bürgermeisterin',
                            translation: 'Mayor',
                            correct: false
                        },
                        {
                            text: '<span class="keyword" title="state premier">Ministerpräsident</span> / <span class="keyword" title="state premier (female)">Ministerpräsidentin</span>',
                            translation: 'Prime Minister',
                            correct: true
                        },
                        {
                            text: 'Premierminister / Premierministerin',
                            translation: 'Prime Minister',
                            correct: false
                        },
                        {
                            text: 'Erster Bürgermeister / Erste Bürgermeisterin',
                            translation: 'First Mayor',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        Regierungschefin: 'head of government (female)',
                        Regierungschef: 'head of government',
                        'Ministerpräsidentin': 'state premier (female)',
                        'Ministerpräsident': 'state premier'
                    }
                },
                {
                    id: 379,
                    question: 'Welchen <span class="keyword" title="minister">Minister</span> / welche <span class="keyword" title="minister (female)">Ministerin</span> hat Mecklenburg-Vorpommern nicht?',
                    translation: 'Which minister does Mecklenburg-Western Pomerania not have?',
                    context: 'The question refers to the state government of Mecklenburg-Western Pomerania. Each state in Germany has its own ministries with different responsibilities, for example for the interior, finance or justice. However, some ministerial posts only exist at the federal level and not in the state governments. In order to find the right answer, you have to know which ministries typically exist at the state level and which tasks are performed exclusively by the federal government.',
                    answers: [
                        {
                            text: 'Finanzsenator / Finanzsenatorin',
                            translation: 'Senator for Finance',
                            correct: false
                        },
                        {
                            text: 'Außenminister / Außenministerin',
                            translation: 'Foreign Minister',
                            correct: true
                        },
                        {
                            text: 'Innenminister / Innenministerin',
                            translation: 'Minister of the Interior',
                            correct: false
                        },
                        {
                            text: 'Justizminister / Justizministerin',
                            translation: 'Minister of Justice',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        Ministerin: 'minister (female)',
                        Minister: 'minister'
                    }
                },
                {
                    id: 380,
                    question: 'Welches <span class="keyword" title="federal state">Bundesland</span> ist Mecklenburg-Vorpommern?',
                    translation: 'Which state is Mecklenburg-Western Pomerania?',
                    context: 'The question refers to a quiz or an exam on the geography of Germany. The federal states are numbered, for example on a map or in an illustration. These numbers are used to identify which number is assigned to the state of Mecklenburg-Western Pomerania.',
                    answers: [
                        {
                            text: '1',
                            translation: '1',
                            correct: false
                        },
                        {
                            text: '2',
                            translation: '2',
                            correct: false
                        },
                        {
                            text: '3',
                            translation: '3',
                            correct: true
                        },
                        {
                            text: '4',
                            translation: '4',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    image: 'images/qmv10.bc891748.jpeg',
                    keywords: {
                        Bundesland: 'federal state'
                    }
                }
            ]
        },
        NI: {
            name: 'Niedersachsen (Lower Saxony)',
            questions: [
                {
                    id: 381,
                    question: 'Welches <span class="keyword" title="coat of arms">Wappen</span> gehört zum <span class="keyword" title="federal state">Bundesland</span> Niedersachsen?',
                    translation: 'Which coat of arms belongs to the state of Lower Saxony?',
                    context: 'The question refers to German national coats of arms. Lower Saxony is one of the 16 federal states of Germany and has an official coat of arms with characteristic symbols from its history. Four coats of arms are depicted in the task. The aim is to assign the appropriate coat of arms to the state of Lower Saxony on the basis of colours, figures and heraldic features.',
                    answers: [
                        {
                            text: '1',
                            translation: '1',
                            correct: false
                        },
                        {
                            text: '2',
                            translation: '2',
                            correct: false
                        },
                        {
                            text: '3',
                            translation: '3',
                            correct: true
                        },
                        {
                            text: '4',
                            translation: '4',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    image: 'images/qns1.fc718c6e.jpeg',
                    keywords: {
                        Bundesland: 'federal state',
                        Wappen: 'coat of arms'
                    }
                },
                {
                    id: 382,
                    question: 'Welches ist ein Landkreis in Niedersachsen?',
                    translation: 'Which is a district in Lower Saxony?',
                    context: 'The question relates to the administrative structure of Germany. Germany is divided into federal states, which in turn consist of rural districts and independent cities. Not every district belongs to the same federal state. To find the right answer, you have to know which of the areas mentioned is in the state of Lower Saxony.',
                    answers: [
                        {
                            text: 'Rhein-Sieg-Kreis',
                            translation: 'Rhein-Sieg district',
                            correct: false
                        },
                        {
                            text: 'Vogtlandkreis',
                            translation: 'Vogtlandkreis',
                            correct: false
                        },
                        {
                            text: 'Nordfriesland',
                            translation: 'Nordfriesland',
                            correct: false
                        },
                        {
                            text: 'Ammerland',
                            translation: 'Ammerland',
                            correct: true
                        }
                    ],
                    category: 'State Specific',
                    keywords: {}
                },
                {
                    id: 383,
                    question: 'Für wie viele Jahre wird der <span class="keyword" title="state parliament">Landtag</span> in Niedersachsen gewählt?',
                    translation: 'For how many years will the state parliament in Lower Saxony be elected?',
                    context: 'The question refers to the state parliament of the state of Lower Saxony. The state parliament is the state parliament and is elected at regular intervals by the citizens entitled to vote. Each election determines how long the members of parliament sit in parliament and make political decisions at the state level. The duration of this electoral period is determined by law.',
                    answers: [
                        {
                            text: '3',
                            translation: '3',
                            correct: false
                        },
                        {
                            text: '4',
                            translation: '4',
                            correct: false
                        },
                        {
                            text: '5',
                            translation: '5',
                            correct: true
                        },
                        {
                            text: '6',
                            translation: '6',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        Landtag: 'state parliament'
                    }
                },
                {
                    id: 384,
                    question: 'Ab welchem Alter darf man in Niedersachsen bei Kommunalwahlen <span class="keyword" title="to vote/elect">wählen</span>?',
                    translation: 'At what age can you vote in local elections in Lower Saxony?',
                    context: 'In Germany, different age limits apply to the right to vote at the municipal level, depending on the federal state. Especially in local elections, i.e. elections of municipal councils, city councils or district councils, some federal states have lowered the voting age. The following question refers specifically to the state of Lower Saxony and is intended to check the age at which citizens there are allowed to participate in local elections.',
                    answers: [
                        {
                            text: '14',
                            translation: '14',
                            correct: false
                        },
                        {
                            text: '18',
                            translation: '18',
                            correct: false
                        },
                        {
                            text: '16',
                            translation: '16',
                            correct: true
                        },
                        {
                            text: '20',
                            translation: '20',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        'wählen': 'to vote/elect'
                    }
                },
                {
                    id: 385,
                    question: 'Welche Farben hat die Landesflagge von Niedersachsen?',
                    translation: 'What colors does the state flag of Lower Saxony have?',
                    context: 'The question refers to knowledge about German states and their official symbols. Country flags are important identification features and usually consist of certain colors that have historical or political significance. Here it is to be recognized which color combination belongs to the flag of the state of Lower Saxony.',
                    answers: [
                        {
                            text: 'schwarz-rot-gold',
                            translation: 'black-red-gold',
                            correct: true
                        },
                        {
                            text: 'blau-weiß-rot',
                            translation: 'blue-white-red',
                            correct: false
                        },
                        {
                            text: 'weiß-blau',
                            translation: 'white-blue',
                            correct: false
                        },
                        {
                            text: 'schwarz-gelb',
                            translation: 'black-yellow',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {}
                },
                {
                    id: 386,
                    question: 'Wo können Sie sich in Niedersachsen über politische Themen informieren?',
                    translation: 'Where can you find out about political topics in Lower Saxony?',
                    context: 'The question refers to possibilities of political information in Lower Saxony. It is intended to help identify which institutions are responsible for political education and neutral information. The aim is to distinguish between government agencies, counselling services and social institutions and to know where citizens can get reliable information on politics.',
                    answers: [
                        {
                            text: 'bei der Verbraucherzentrale',
                            translation: 'at the Consumer Advice Centre',
                            correct: false
                        },
                        {
                            text: 'bei der Landeszentrale für politische Bildung',
                            translation: 'at the State Agency for Civic Education',
                            correct: true
                        },
                        {
                            text: 'beim <span class="keyword" title="public order office">Ordnungsamt</span> der Gemeinde',
                            translation: 'at the public order office of the municipality',
                            correct: false
                        },
                        {
                            text: 'bei den Kirchen',
                            translation: 'at the churches',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        Ordnungsamt: 'public order office'
                    }
                },
                {
                    id: 387,
                    question: 'Die Landeshauptstadt von Niedersachsen heißt …',
                    translation: 'The state capital of Lower Saxony is called ...',
                    context: 'In Germany, each state is divided into administrative areas and has its own state capital, where the government and parliament have their seats. Lower Saxony is located in the north of Germany and is one of the largest federal states in terms of area. The question relates to which city will take on this central political and administrative function for Lower Saxony. The answer options name well-known cities, all of which are located in Lower Saxony or are closely connected to the state.',
                    answers: [
                        {
                            text: 'Wolfsburg',
                            translation: 'Wolfsburg',
                            correct: false
                        },
                        {
                            text: 'Hannover',
                            translation: 'Hanover',
                            correct: true
                        },
                        {
                            text: 'Braunschweig',
                            translation: 'Brunswick',
                            correct: false
                        },
                        {
                            text: 'Osnabrück',
                            translation: 'Osnabrück',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {}
                },
                {
                    id: 388,
                    question: 'Welches <span class="keyword" title="federal state">Bundesland</span> ist Niedersachsen?',
                    translation: 'Which state is Lower Saxony?',
                    context: 'The question relates to the geographical classification of a German federal state. There are 16 federal states in Germany, which are often numbered or marked on maps. The answer options represent different numbers, each of which could be assigned to a specific federal state. In order to find the right answer, you have to know which number is on the corresponding overview map or list for the state of Lower Saxony.',
                    answers: [
                        {
                            text: '1',
                            translation: '1',
                            correct: true
                        },
                        {
                            text: '2',
                            translation: '2',
                            correct: false
                        },
                        {
                            text: '3',
                            translation: '3',
                            correct: false
                        },
                        {
                            text: '4',
                            translation: '4',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    image: 'images/qns8.81db6464.jpeg',
                    keywords: {
                        Bundesland: 'federal state'
                    }
                },
                {
                    id: 389,
                    question: 'Wie nennt man den <span class="keyword" title="head of government">Regierungschef</span> / die <span class="keyword" title="head of government (female)">Regierungschefin</span> in Niedersachsen?',
                    translation: 'What is the head of government in Lower Saxony called?',
                    context: 'The question relates to the political system of Germany and specifically to the state of Lower Saxony. In Germany, the federal states consist of their own state governments, each with a head of government. The office titles differ depending on the level, for example between the federal, state and local governments. To find the right answer, you should know what the head of government of a German state is officially called and what titles are used in other political systems or administrative levels.',
                    answers: [
                        {
                            text: '<span class="keyword" title="state premier">Ministerpräsident</span> / <span class="keyword" title="state premier (female)">Ministerpräsidentin</span>',
                            translation: 'Prime Minister',
                            correct: true
                        },
                        {
                            text: 'Premierminister / Premierministerin',
                            translation: 'Prime Minister',
                            correct: false
                        },
                        {
                            text: 'Bürgermeister / Bürgermeisterin',
                            translation: 'Mayor',
                            correct: false
                        },
                        {
                            text: 'Erster <span class="keyword" title="minister">Minister</span> / Erste <span class="keyword" title="minister (female)">Ministerin</span>',
                            translation: 'First Minister',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        Regierungschefin: 'head of government (female)',
                        Regierungschef: 'head of government',
                        'Ministerpräsidentin': 'state premier (female)',
                        'Ministerpräsident': 'state premier',
                        Ministerin: 'minister (female)',
                        Minister: 'minister'
                    }
                },
                {
                    id: 390,
                    question: 'Welchen <span class="keyword" title="minister">Minister</span> / welche <span class="keyword" title="minister (female)">Ministerin</span> hat Niedersachsen nicht?',
                    translation: 'Which minister does Lower Saxony not have?',
                    context: 'The question relates to the structure of the state government of Lower Saxony. Each federal state has its own ministries, whose responsibilities may differ from those of the federal government. Some departments are common at the state level, others only exist at the federal level or have different names. In order to find the right answer, you have to know which ministries in Lower Saxony are actually part of the state government.',
                    answers: [
                        {
                            text: 'Innenminister / Innenministerin',
                            translation: 'Minister of the Interior',
                            correct: false
                        },
                        {
                            text: 'Justizminister / Justizministerin',
                            translation: 'Minister of Justice',
                            correct: false
                        },
                        {
                            text: 'Finanzminister / Finanzministerin',
                            translation: 'Minister of Finance',
                            correct: false
                        },
                        {
                            text: 'Außenminister / Außenministerin',
                            translation: 'Foreign Minister',
                            correct: true
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        Ministerin: 'minister (female)',
                        Minister: 'minister'
                    }
                }
            ]
        },
        NW: {
            name: 'Nordrhein-Westfalen',
            questions: [
                {
                    id: 391,
                    question: 'Welches <span class="keyword" title="coat of arms">Wappen</span> gehört zum <span class="keyword" title="federal state">Bundesland</span> Nordrhein-Westfalen?',
                    translation: 'Which coat of arms belongs to the state of North Rhine-Westphalia?',
                    context: 'This task is about the recognition of state coats of arms in Germany. Each federal state has its own official coat of arms with typical symbols and colors. North Rhine-Westphalia historically consists of Rhineland, Westphalia and Lippe, which is reflected in the coat of arms. Select the image that shows the correct coat of arms of the state of North Rhine-Westphalia.',
                    answers: [
                        {
                            text: '1',
                            translation: '1',
                            correct: false
                        },
                        {
                            text: '2',
                            translation: '2',
                            correct: true
                        },
                        {
                            text: '3',
                            translation: '3',
                            correct: false
                        },
                        {
                            text: '4',
                            translation: '4',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    image: 'images/qnw1.78baa273.jpeg',
                    keywords: {
                        Bundesland: 'federal state',
                        Wappen: 'coat of arms'
                    }
                },
                {
                    id: 392,
                    question: 'Welches ist ein Landkreis in Nordrhein-Westfalen?',
                    translation: 'Which is a district in North Rhine-Westphalia?',
                    context: 'The question refers to geographical knowledge about the administrative structure of Germany. In Germany, the federal states are divided into districts and independent cities. North Rhine-Westphalia is one of the 16 federal states and has several districts. In order to answer the question correctly, you have to know which of the options mentioned is actually a district within North Rhine-Westphalia and which belong to other federal states.',
                    answers: [
                        {
                            text: 'Ammerland',
                            translation: 'Ammerland',
                            correct: false
                        },
                        {
                            text: 'Nordfriesland',
                            translation: 'Nordfriesland',
                            correct: false
                        },
                        {
                            text: 'Rhein-Sieg-Kreis',
                            translation: 'Rhein-Sieg district',
                            correct: true
                        },
                        {
                            text: 'Vogtlandkreis',
                            translation: 'Vogtlandkreis',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {}
                },
                {
                    id: 393,
                    question: 'Für wie viele Jahre wird der <span class="keyword" title="state parliament">Landtag</span> in Nordrhein-Westfalen gewählt?',
                    translation: 'For how many years will the state parliament in North Rhine-Westphalia be elected?',
                    context: 'The state parliament of North Rhine-Westphalia is the parliament of the federal state of North Rhine-Westphalia and is elected by the citizens entitled to vote. It passes laws, controls the state government and elects the prime minister. The election takes place at regular intervals, which are laid down in the state constitution. The question relates to the duration of this election period.',
                    answers: [
                        {
                            text: '3',
                            translation: '3',
                            correct: false
                        },
                        {
                            text: '4',
                            translation: '4',
                            correct: false
                        },
                        {
                            text: '5',
                            translation: '5',
                            correct: true
                        },
                        {
                            text: '6',
                            translation: '6',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        Landtag: 'state parliament'
                    }
                },
                {
                    id: 394,
                    question: 'Ab welchem Alter darf man in Nordrhein-Westfalen bei Kommunalwahlen <span class="keyword" title="to vote/elect">wählen</span>?',
                    translation: 'At what age can you vote in local elections in North Rhine-Westphalia?',
                    context: 'In Germany, voting rights differ depending on the type of election and the federal state. Especially in local elections, the individual states determine the age at which citizens are allowed to vote. North Rhine-Westphalia has its own legal regulations for this, which can differ from those for Bundestag or state elections. To find the right answer, you need to know the specific electoral laws for local elections in North Rhine-Westphalia.',
                    answers: [
                        {
                            text: '14',
                            translation: '14',
                            correct: false
                        },
                        {
                            text: '18',
                            translation: '18',
                            correct: false
                        },
                        {
                            text: '16',
                            translation: '16',
                            correct: true
                        },
                        {
                            text: '20',
                            translation: '20',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        'wählen': 'to vote/elect'
                    }
                },
                {
                    id: 395,
                    question: 'Welche Farben hat die Landesflagge von Nordrhein-Westfalen?',
                    translation: 'What colors does the state flag of North Rhine-Westphalia have?',
                    context: 'The question refers to the general knowledge about the German federal states. Each federal state has its own national flag with characteristic colors. To find the right answer, you should know what the flag of North Rhine-Westphalia looks like, a state in the west of Germany with the state capital Düsseldorf.',
                    answers: [
                        {
                            text: 'schwarz-gold',
                            translation: 'black-gold',
                            correct: false
                        },
                        {
                            text: 'rot-weiß',
                            translation: 'red and white',
                            correct: false
                        },
                        {
                            text: 'grün-weiß-rot',
                            translation: 'green-white-red',
                            correct: true
                        },
                        {
                            text: 'blau-weiß-rot',
                            translation: 'blue-white-red',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {}
                },
                {
                    id: 396,
                    question: 'Wo können Sie sich in Nordrhein-Westfalen über politische Themen informieren?',
                    translation: 'Where can you find out about political issues in North Rhine-Westphalia?',
                    context: 'The question relates to possibilities of political information for citizens in North Rhine-Westphalia. It addresses which institutions are responsible for providing neutral information about politics, democracy and participation. Such questions are typical for naturalization tests or political education offers and test knowledge about existing information and educational institutions at state and municipal level.',
                    answers: [
                        {
                            text: 'bei den Kirchen',
                            translation: 'at the churches',
                            correct: false
                        },
                        {
                            text: 'bei der Verbraucherzentrale',
                            translation: 'at the Consumer Advice Centre',
                            correct: false
                        },
                        {
                            text: 'bei der Landeszentrale für politische Bildung',
                            translation: 'at the State Agency for Civic Education',
                            correct: true
                        },
                        {
                            text: 'beim <span class="keyword" title="public order office">Ordnungsamt</span> der Gemeinde',
                            translation: 'at the public order office of the municipality',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        Ordnungsamt: 'public order office'
                    }
                },
                {
                    id: 397,
                    question: 'Die Landeshauptstadt von Nordrhein-Westfalen heißt …',
                    translation: 'The state capital of North Rhine-Westphalia is called ...',
                    context: 'The following question refers to a federal state in Germany. North Rhine-Westphalia is one of the most populous federal states and is located in the west of the country. It has many large cities with historical, political, and economic significance. Each state capital is the seat of the state government and plays a central role in the administration. The answer options name well-known cities from North Rhine-Westphalia, of which only one is the official state capital.',
                    answers: [
                        {
                            text: 'Dortmund',
                            translation: 'Dortmund',
                            correct: false
                        },
                        {
                            text: 'Bonn',
                            translation: 'Bonn',
                            correct: false
                        },
                        {
                            text: 'Köln',
                            translation: 'Cologne',
                            correct: false
                        },
                        {
                            text: 'Düsseldorf',
                            translation: 'Dusseldorf',
                            correct: true
                        }
                    ],
                    category: 'State Specific',
                    keywords: {}
                },
                {
                    id: 398,
                    question: 'Welches <span class="keyword" title="federal state">Bundesland</span> ist Nordrhein-Westfalen?',
                    translation: 'Which state is North Rhine-Westphalia?',
                    context: 'This task is about recognizing German federal states. On a figure or list, several federal states are marked with numbers. The question asks you to use this numbering to determine which of the fields mentioned represents North Rhine-Westphalia. Select the number assigned to the state of North Rhine-Westphalia.',
                    answers: [
                        {
                            text: '1',
                            translation: '1',
                            correct: false
                        },
                        {
                            text: '2',
                            translation: '2',
                            correct: false
                        },
                        {
                            text: '3',
                            translation: '3',
                            correct: true
                        },
                        {
                            text: '4',
                            translation: '4',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    image: 'images/qnw8.f555cf6b.jpeg',
                    keywords: {
                        Bundesland: 'federal state'
                    }
                },
                {
                    id: 399,
                    question: 'Wie nennt man den <span class="keyword" title="head of government">Regierungschef</span> / die <span class="keyword" title="head of government (female)">Regierungschefin</span> in Nordrhein-Westfalen?',
                    translation: 'What is the head of government in North Rhine-Westphalia called?',
                    context: 'Germany is a federal state consisting of 16 federal states. Each federal state has its own government with a person at the top. North Rhine-Westphalia is one of these federal states. The question relates to what the official name for the head of government of a German federal state is.',
                    answers: [
                        {
                            text: '<span class="keyword" title="state premier">Ministerpräsident</span> / <span class="keyword" title="state premier (female)">Ministerpräsidentin</span>',
                            translation: 'Prime Minister',
                            correct: true
                        },
                        {
                            text: 'Bürgermeister / Bürgermeisterin',
                            translation: 'Mayor',
                            correct: false
                        },
                        {
                            text: 'Erster <span class="keyword" title="minister">Minister</span> / Erste <span class="keyword" title="minister (female)">Ministerin</span>',
                            translation: 'First Minister',
                            correct: false
                        },
                        {
                            text: 'Premierminister / Premierministerin',
                            translation: 'Prime Minister',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        Regierungschefin: 'head of government (female)',
                        Regierungschef: 'head of government',
                        'Ministerpräsidentin': 'state premier (female)',
                        'Ministerpräsident': 'state premier',
                        Ministerin: 'minister (female)',
                        Minister: 'minister'
                    }
                },
                {
                    id: 400,
                    question: 'Welchen <span class="keyword" title="minister">Minister</span> / welche <span class="keyword" title="minister (female)">Ministerin</span> hat Nordrhein-Westfalen nicht?',
                    translation: 'Which minister does North Rhine-Westphalia not have?',
                    context: 'In the federal states of Germany, there are state governments with different ministries. These ministries are responsible for specific policy areas such as finance, home affairs or justice. However, some responsibilities do not lie with the federal states, but with the federal government. The question relates to North Rhine-Westphalia and to which of the aforementioned ministerial offices do not exist at the state level. To do this, you need to know which political tasks are regulated at the state level and which are carried out exclusively by the federal government.',
                    answers: [
                        {
                            text: 'Finanzminister / Finanzministerin',
                            translation: 'Minister of Finance',
                            correct: false
                        },
                        {
                            text: 'Innenminister / Innenministerin',
                            translation: 'Minister of the Interior',
                            correct: false
                        },
                        {
                            text: 'Außenminister / Außenministerin',
                            translation: 'Foreign Minister',
                            correct: true
                        },
                        {
                            text: 'Justizminister / Justizministerin',
                            translation: 'Minister of Justice',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        Ministerin: 'minister (female)',
                        Minister: 'minister'
                    }
                }
            ]
        },
        RP: {
            name: 'Rheinland-Pfalz',
            questions: [
                {
                    id: 401,
                    question: 'Welches <span class="keyword" title="coat of arms">Wappen</span> gehört zum <span class="keyword" title="federal state">Bundesland</span> Rheinland-Pfalz?',
                    translation: 'Which coat of arms belongs to the state of Rhineland-Palatinate?',
                    context: 'The question refers to the German federal states and their official coats of arms. Each federal state has its own coat of arms with certain symbols that have historical or regional significance. In the task, several illustrations of coats of arms with the numbers 1 to 4 are shown. The aim is to recognize the coat of arms assigned to the state of Rhineland-Palatinate and to select the correct number.',
                    answers: [
                        {
                            text: '1',
                            translation: '1',
                            correct: true
                        },
                        {
                            text: '2',
                            translation: '2',
                            correct: false
                        },
                        {
                            text: '3',
                            translation: '3',
                            correct: false
                        },
                        {
                            text: '4',
                            translation: '4',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    image: 'images/qrp1.5a74c5da.jpeg',
                    keywords: {
                        Bundesland: 'federal state',
                        Wappen: 'coat of arms'
                    }
                },
                {
                    id: 402,
                    question: 'Welches ist ein Landkreis in Rheinland-Pfalz?',
                    translation: 'Which is a district in Rhineland-Palatinate?',
                    context: 'The question relates to German administrative structures. In Germany, the federal states are divided into various administrative units, including rural districts. Rhineland-Palatinate is a federal state in western Germany and consists of several such districts. The answer options are given by different districts, but they may be located in different federal states. In order to find the right answer, you have to know which of the districts mentioned actually belongs to Rhineland-Palatinate.',
                    answers: [
                        {
                            text: 'Westerwaldkreis',
                            translation: 'Westerwaldkreis',
                            correct: true
                        },
                        {
                            text: 'Altötting',
                            translation: 'Altötting',
                            correct: false
                        },
                        {
                            text: 'Emsland',
                            translation: 'Emsland',
                            correct: false
                        },
                        {
                            text: 'Prignitz',
                            translation: 'Prignitz',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {}
                },
                {
                    id: 403,
                    question: 'Für wie viele Jahre wird der <span class="keyword" title="state parliament">Landtag</span> in Rheinland-Pfalz gewählt?',
                    translation: 'For how many years will the state parliament in Rhineland-Palatinate be elected?',
                    context: 'The Landtag is the parliament of a German federal state and is re-elected at regular intervals. The duration of the electoral period is set out in the state constitution and determines how long the members of parliament remain in office. The question refers specifically to the electoral period of the state parliament in the state of Rhineland-Palatinate.',
                    answers: [
                        {
                            text: '3',
                            translation: '3',
                            correct: false
                        },
                        {
                            text: '4',
                            translation: '4',
                            correct: false
                        },
                        {
                            text: '5',
                            translation: '5',
                            correct: true
                        },
                        {
                            text: '6',
                            translation: '6',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        Landtag: 'state parliament'
                    }
                },
                {
                    id: 404,
                    question: 'Ab welchem Alter darf man in Rheinland-Pfalz bei Kommunalwahlen <span class="keyword" title="to vote/elect">wählen</span>?',
                    translation: 'At what age can you vote in local elections in Rhineland-Palatinate?',
                    context: 'In Germany, different age limits apply to elections, depending on the type of election and the respective federal state. Especially in local elections, some federal states have lowered the voting age to enable young people to have more political participation. Rhineland-Palatinate is one of these federal states. To find the right answer to the question, it is helpful to know what rules are set there specifically for local elections.',
                    answers: [
                        {
                            text: '14',
                            translation: '14',
                            correct: false
                        },
                        {
                            text: '18',
                            translation: '18',
                            correct: true
                        },
                        {
                            text: '16',
                            translation: '16',
                            correct: false
                        },
                        {
                            text: '20',
                            translation: '20',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        'wählen': 'to vote/elect'
                    }
                },
                {
                    id: 405,
                    question: 'Welche Farben hat die Landesflagge von Rheinland-Pfalz?',
                    translation: 'What colors does the state flag of Rhineland-Palatinate have?',
                    context: 'The question refers to the German federal states and their national emblems. Rhineland-Palatinate is one of these federal states and has its own state flag with certain colors. To find the right answer, it helps to have a basic knowledge of German national flags or general knowledge of state symbols in Germany.',
                    answers: [
                        {
                            text: 'schwarz-rot-gold',
                            translation: 'black-red-gold',
                            correct: true
                        },
                        {
                            text: 'weiß-rot',
                            translation: 'white-red',
                            correct: false
                        },
                        {
                            text: 'grün-weiß-rot',
                            translation: 'green-white-red',
                            correct: false
                        },
                        {
                            text: 'schwarz-gelb',
                            translation: 'black-yellow',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {}
                },
                {
                    id: 406,
                    question: 'Wo können Sie sich in Rheinland-Pfalz über politische Themen informieren?',
                    translation: 'Where can you find out about political topics in Rhineland-Palatinate?',
                    context: 'The question refers to ways of obtaining factual and official information about political issues in Rhineland-Palatinate. This refers to facilities or institutions that provide information on politics, democracy, elections or political education. The answer options name different bodies from society, administration and education where citizens could seek knowledge or advice.',
                    answers: [
                        {
                            text: 'bei den Kirchen',
                            translation: 'at the churches',
                            correct: false
                        },
                        {
                            text: 'bei der Verbraucherzentrale',
                            translation: 'at the Consumer Advice Centre',
                            correct: false
                        },
                        {
                            text: 'bei der Landeszentrale für politische Bildung',
                            translation: 'at the State Agency for Civic Education',
                            correct: true
                        },
                        {
                            text: 'beim <span class="keyword" title="public order office">Ordnungsamt</span> der Gemeinde',
                            translation: 'at the public order office of the municipality',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        Ordnungsamt: 'public order office'
                    }
                },
                {
                    id: 407,
                    question: 'Die Landeshauptstadt von Rheinland-Pfalz heißt …',
                    translation: 'The state capital of Rhineland-Palatinate is called ...',
                    context: 'In this context, it is about basic knowledge of German geography and the political structure of the federal states. Rhineland-Palatinate is one of the 16 federal states of Germany. The question examines whether it is known which city serves as the seat of government and administrative center of this federal state.',
                    answers: [
                        {
                            text: 'Kaiserslautern',
                            translation: 'Kaiserslautern',
                            correct: false
                        },
                        {
                            text: 'Ludwigshafen',
                            translation: 'Ludwigshafen',
                            correct: false
                        },
                        {
                            text: 'Mainz',
                            translation: 'Mainz',
                            correct: true
                        },
                        {
                            text: 'Koblenz',
                            translation: 'Koblenz',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {}
                },
                {
                    id: 408,
                    question: 'Welches <span class="keyword" title="federal state">Bundesland</span> ist Rheinland-Pfalz?',
                    translation: 'Which state is Rhineland-Palatinate?',
                    context: 'In this task, reference is made to an overview or map of the German federal states, in which each federal state is marked with a number. Based on this numbering, participants should be able to identify which number is assigned to the state of Rhineland-Palatinate and select the correct option.',
                    answers: [
                        {
                            text: '1',
                            translation: '1',
                            correct: true
                        },
                        {
                            text: '2',
                            translation: '2',
                            correct: false
                        },
                        {
                            text: '3',
                            translation: '3',
                            correct: false
                        },
                        {
                            text: '4',
                            translation: '4',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    image: 'images/qrp8.528dcff5.jpeg',
                    keywords: {
                        Bundesland: 'federal state'
                    }
                },
                {
                    id: 409,
                    question: 'Wie nennt man den <span class="keyword" title="head of government">Regierungschef</span> / die <span class="keyword" title="head of government (female)">Regierungschefin</span> in Rheinland-Pfalz?',
                    translation: 'What is the head of government in Rhineland-Palatinate called?',
                    context: 'The question relates to the political system of the Federal Republic of Germany and its federal states. Each state has its own state government with a specific title for the leadership of this government. In order to find the right answer, it is important to know what the head of government of a German state is officially called, especially in the case of Rhineland-Palatinate.',
                    answers: [
                        {
                            text: '<span class="keyword" title="state premier">Ministerpräsident</span> / <span class="keyword" title="state premier (female)">Ministerpräsidentin</span>',
                            translation: 'Prime Minister',
                            correct: true
                        },
                        {
                            text: 'Bürgermeister / Bürgermeisterin',
                            translation: 'Mayor',
                            correct: false
                        },
                        {
                            text: 'Erster <span class="keyword" title="minister">Minister</span> / Erste <span class="keyword" title="minister (female)">Ministerin</span>',
                            translation: 'First Minister',
                            correct: false
                        },
                        {
                            text: 'Premierminister / Premierministerin',
                            translation: 'Prime Minister',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        Regierungschefin: 'head of government (female)',
                        Regierungschef: 'head of government',
                        'Ministerpräsidentin': 'state premier (female)',
                        'Ministerpräsident': 'state premier',
                        Ministerin: 'minister (female)',
                        Minister: 'minister'
                    }
                },
                {
                    id: 410,
                    question: 'Welchen <span class="keyword" title="minister">Minister</span> / welche <span class="keyword" title="minister (female)">Ministerin</span> hat Rheinland-Pfalz nicht?',
                    translation: 'Which minister does Rhineland-Palatinate not have?',
                    context: 'There are various ministries in the German federal states, which are set up depending on the competence of the state. Some ministries exist in all states, others only at the federal level. To answer the question, it is necessary to know which tasks are performed by state governments and which are reserved exclusively for the federal government. Rhineland-Palatinate has a state government with several ministers, whose responsibilities may differ from those at the federal level.',
                    answers: [
                        {
                            text: 'Außenminister / Außenministerin',
                            translation: 'Foreign Minister',
                            correct: true
                        },
                        {
                            text: 'Innenminister / Innenministerin',
                            translation: 'Minister of the Interior',
                            correct: false
                        },
                        {
                            text: 'Justizminister / Justizministerin',
                            translation: 'Minister of Justice',
                            correct: false
                        },
                        {
                            text: 'Finanzminister / Finanzministerin',
                            translation: 'Minister of Finance',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        Ministerin: 'minister (female)',
                        Minister: 'minister'
                    }
                }
            ]
        },
        SL: {
            name: 'Saarland',
            questions: [
                {
                    id: 411,
                    question: 'Welches <span class="keyword" title="coat of arms">Wappen</span> gehört zum <span class="keyword" title="federal state">Bundesland</span> Saarland?',
                    translation: 'Which coat of arms belongs to the state of Saarland?',
                    context: 'The question refers to the coats of arms of the German federal states. The viewer is shown several numbered coats of arms (1–4). The task is to assign the correct coat of arms to the state of Saarland. To do this, you should know the typical heraldic symbols of the Saarland or compare them with the other federal states.',
                    answers: [
                        {
                            text: '1',
                            translation: '1',
                            correct: false
                        },
                        {
                            text: '2',
                            translation: '2',
                            correct: false
                        },
                        {
                            text: '3',
                            translation: '3',
                            correct: false
                        },
                        {
                            text: '4',
                            translation: '4',
                            correct: true
                        }
                    ],
                    category: 'State Specific',
                    image: 'images/qsl1.5d22fa5a.jpeg',
                    keywords: {
                        Bundesland: 'federal state',
                        Wappen: 'coat of arms'
                    }
                },
                {
                    id: 412,
                    question: 'Welches ist ein Landkreis im Saarland?',
                    translation: 'Which is a district in Saarland?',
                    context: 'The question relates to the administrative structure of Germany. Germany is divided into federal states, which in turn have districts and independent cities. We are looking for a district that belongs to the state of Saarland. The answer options contain names of districts from different regions of Germany, so it is important to know which districts belong to which state.',
                    answers: [
                        {
                            text: 'Rhein-Sieg-Kreis',
                            translation: 'Rhein-Sieg district',
                            correct: false
                        },
                        {
                            text: 'Neunkirchen',
                            translation: 'Neunkirchen',
                            correct: true
                        },
                        {
                            text: 'Mecklenburgische Seenplatte',
                            translation: 'Mecklenburg Lake District',
                            correct: false
                        },
                        {
                            text: 'Altötting',
                            translation: 'Altötting',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {}
                },
                {
                    id: 413,
                    question: 'Für wie viele Jahre wird der <span class="keyword" title="state parliament">Landtag</span> des Saarlandes gewählt?',
                    translation: 'For how many years will the Saarland state parliament be elected?',
                    context: 'The state parliament of the Saarland is the parliament of the federal state of Saarland. He is elected by the citizens in general elections and takes on important tasks such as legislation and control of the state government. The question refers to the duration of an electoral period, i.e. how many years the members of parliament remain in office before new elections are held.',
                    answers: [
                        {
                            text: '3',
                            translation: '3',
                            correct: false
                        },
                        {
                            text: '4',
                            translation: '4',
                            correct: false
                        },
                        {
                            text: '5',
                            translation: '5',
                            correct: true
                        },
                        {
                            text: '6',
                            translation: '6',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        Landtag: 'state parliament'
                    }
                },
                {
                    id: 414,
                    question: 'Ab welchem Alter darf man im Saarland bei Kommunalwahlen <span class="keyword" title="to vote/elect">wählen</span>?',
                    translation: 'At what age can you vote in local elections in Saarland?',
                    context: 'In elections in Germany, there are different regulations on the voting age, depending on the federal state and the type of election. Especially in local elections, the age limits can differ from those in Bundestag or state elections. In order to promote political participation of young people, some federal states have lowered the voting age. Against this background, the question arises as to the age at which citizens in Saarland are allowed to vote in local elections.',
                    answers: [
                        {
                            text: '14',
                            translation: '14',
                            correct: false
                        },
                        {
                            text: '18',
                            translation: '18',
                            correct: true
                        },
                        {
                            text: '16',
                            translation: '16',
                            correct: false
                        },
                        {
                            text: '20',
                            translation: '20',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        'wählen': 'to vote/elect'
                    }
                },
                {
                    id: 415,
                    question: 'Welche Farben hat die Landesflagge des Saarlandes?',
                    translation: 'What colors does the state flag of Saarland have?',
                    context: 'Saarland is one of the 16 federal states of Germany and, like each federal state, has its own emblems, including a coat of arms and a state flag. The flag is hoisted on official occasions, on public buildings and at state events. The question is aimed at recognizing the correct colors of this country flag.',
                    answers: [
                        {
                            text: 'grün-weiß-rot',
                            translation: 'green-white-red',
                            correct: false
                        },
                        {
                            text: 'schwarz-rot-gold',
                            translation: 'black-red-gold',
                            correct: true
                        },
                        {
                            text: 'schwarz-gelb',
                            translation: 'black-yellow',
                            correct: false
                        },
                        {
                            text: 'weiß-blau',
                            translation: 'white-blue',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {}
                },
                {
                    id: 416,
                    question: 'Wo können Sie sich im Saarland über politische Themen informieren?',
                    translation: 'Where can you find out about political topics in Saarland?',
                    context: 'The question refers to ways in which citizens in the state of Saarland can obtain reliable information on political topics. These are institutions that offer political education or provide information about politics, democracy and society. The answer options are given by various public, church or advisory bodies where you can get basic information. The aim is to identify which institution is specifically responsible for political education.',
                    answers: [
                        {
                            text: 'beim <span class="keyword" title="public order office">Ordnungsamt</span> der Gemeinde',
                            translation: 'at the public order office of the municipality',
                            correct: false
                        },
                        {
                            text: 'bei der Landeszentrale für politische Bildung',
                            translation: 'at the State Agency for Civic Education',
                            correct: true
                        },
                        {
                            text: 'bei den Kirchen',
                            translation: 'at the churches',
                            correct: false
                        },
                        {
                            text: 'bei der Verbraucherzentrale',
                            translation: 'at the Consumer Advice Centre',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        Ordnungsamt: 'public order office'
                    }
                },
                {
                    id: 417,
                    question: 'Die Landeshauptstadt des Saarlandes heißt …',
                    translation: 'The state capital of the Saarland is called ...',
                    context: 'The question refers to basic geographical knowledge about Germany. Saarland is one of the 16 federal states of the Federal Republic of Germany and is located in the southwest of the state. The state capital of Saarland is being sought. There are several well-known cities from Saarland to choose from, of which only one fulfils this function.',
                    answers: [
                        {
                            text: 'Saarbrücken',
                            translation: 'Saarbrücken',
                            correct: true
                        },
                        {
                            text: 'Neunkirchen',
                            translation: 'Neunkirchen',
                            correct: false
                        },
                        {
                            text: 'Völklingen',
                            translation: 'Völklingen',
                            correct: false
                        },
                        {
                            text: 'Homburg',
                            translation: 'Homburg',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {}
                },
                {
                    id: 418,
                    question: 'Welches <span class="keyword" title="federal state">Bundesland</span> ist das Saarland?',
                    translation: 'Which federal state is Saarland?',
                    context: 'In a quiz about the federal states of Germany, it is to be checked whether one knows to which category or number a certain state belongs. Germany consists of 16 federal states, which are often numbered in lists, maps or statistics. The following question refers specifically to Saarland and requires you to select the correct assignment from several numbered answer options.',
                    answers: [
                        {
                            text: '1',
                            translation: '1',
                            correct: false
                        },
                        {
                            text: '2',
                            translation: '2',
                            correct: true
                        },
                        {
                            text: '3',
                            translation: '3',
                            correct: false
                        },
                        {
                            text: '4',
                            translation: '4',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    image: 'images/qsl8.e724ee61.jpeg',
                    keywords: {
                        Bundesland: 'federal state'
                    }
                },
                {
                    id: 419,
                    question: 'Wie nennt man den <span class="keyword" title="head of government">Regierungschef</span> / die <span class="keyword" title="head of government (female)">Regierungschefin</span> des Saarlandes?',
                    translation: 'What do you call the head of government of the Saarland?',
                    context: 'Germany is a federal state consisting of 16 federal states. Each federal state has its own government and an official head of government. This designation can differ from municipal offices such as mayor and is regulated in the same way in all federal states. In order to find the right answer, it is helpful to know the political structures and official titles of the German federal states.',
                    answers: [
                        {
                            text: 'Bürgermeister / Bürgermeisterin',
                            translation: 'Mayor',
                            correct: false
                        },
                        {
                            text: 'Erster <span class="keyword" title="minister">Minister</span> / Erste <span class="keyword" title="minister (female)">Ministerin</span>',
                            translation: 'First Minister',
                            correct: false
                        },
                        {
                            text: 'Premierminister / Premierministerin',
                            translation: 'Prime Minister',
                            correct: false
                        },
                        {
                            text: '<span class="keyword" title="state premier">Ministerpräsident</span> / <span class="keyword" title="state premier (female)">Ministerpräsidentin</span>',
                            translation: 'Prime Minister',
                            correct: true
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        Regierungschefin: 'head of government (female)',
                        Regierungschef: 'head of government',
                        Ministerin: 'minister (female)',
                        Minister: 'minister',
                        'Ministerpräsidentin': 'state premier (female)',
                        'Ministerpräsident': 'state premier'
                    }
                },
                {
                    id: 420,
                    question: 'Welchen <span class="keyword" title="minister">Minister</span> / welche <span class="keyword" title="minister (female)">Ministerin</span> hat das Saarland nicht?',
                    translation: 'Which minister does Saarland not have?',
                    context: 'Saarland is one of Germany\'s 16 federal states and has its own state government with various departments. These ministries are headed by ministers who are responsible for specific policy areas such as home affairs, finance or justice. Not all ministries exist at the state level, as some responsibilities lie with the federal government. The question calls for recognizing which of the mentioned ministerial offices does not exist in the state government of the Saarland.',
                    answers: [
                        {
                            text: 'Justizminister / Justizministerin',
                            translation: 'Minister of Justice',
                            correct: false
                        },
                        {
                            text: 'Innenminister / Innenministerin',
                            translation: 'Minister of the Interior',
                            correct: false
                        },
                        {
                            text: 'Außenminister / Außenministerin',
                            translation: 'Foreign Minister',
                            correct: true
                        },
                        {
                            text: 'Finanzminister / Finanzministerin',
                            translation: 'Minister of Finance',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        Ministerin: 'minister (female)',
                        Minister: 'minister'
                    }
                }
            ]
        },
        SN: {
            name: 'Sachsen (Saxony)',
            questions: [
                {
                    id: 421,
                    question: 'Welches <span class="keyword" title="coat of arms">Wappen</span> gehört zum Freistaat Sachsen?',
                    translation: 'Which coat of arms belongs to the Free State of Saxony?',
                    context: 'This task is about the coats of arms of the German federal states. You will be shown several coats of arms with the numbers 1 to 4. Each coat of arms belongs to a different federal state. Your task is to recognize the coat of arms assigned to the Free State of Saxony and select the corresponding number. Knowledge of symbols, colours and typical features of the Saxon coat of arms will help you make the right decision.',
                    answers: [
                        {
                            text: '1',
                            translation: '1',
                            correct: false
                        },
                        {
                            text: '2',
                            translation: '2',
                            correct: false
                        },
                        {
                            text: '3',
                            translation: '3',
                            correct: false
                        },
                        {
                            text: '4',
                            translation: '4',
                            correct: true
                        }
                    ],
                    category: 'State Specific',
                    image: 'images/qss1.71aaeb78.jpeg',
                    keywords: {
                        Wappen: 'coat of arms'
                    }
                },
                {
                    id: 422,
                    question: 'Welches ist ein Landkreis in Sachsen?',
                    translation: 'Which is a district in Saxony?',
                    context: 'The following question refers to the German federal states and their administrative units. In Germany, rural districts are important regional administrative units, each of which belongs to a specific federal state. Saxony is one of these federal states. In order to find the right answer, it is helpful to know which of the districts mentioned is actually in the state of Saxony and which belong to other federal states.',
                    answers: [
                        {
                            text: 'Altötting',
                            translation: 'Altötting',
                            correct: false
                        },
                        {
                            text: 'Nordfriesland',
                            translation: 'Nordfriesland',
                            correct: false
                        },
                        {
                            text: 'Vogtlandkreis',
                            translation: 'Vogtlandkreis',
                            correct: true
                        },
                        {
                            text: 'Uckermark',
                            translation: 'Uckermark',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {}
                },
                {
                    id: 423,
                    question: 'Für wie viele Jahre wird der <span class="keyword" title="state parliament">Landtag</span> in Sachsen gewählt?',
                    translation: 'For how many years will the state parliament in Saxony be elected?',
                    context: 'The context: The question relates to the political system of the Free State of Saxony in Germany. The state parliament is the state parliament and is re-elected at regular intervals. The question is about the length of the legislative period, i.e. the number of years for which the members of the Saxon state parliament are elected.',
                    answers: [
                        {
                            text: '3',
                            translation: '3',
                            correct: false
                        },
                        {
                            text: '4',
                            translation: '4',
                            correct: false
                        },
                        {
                            text: '5',
                            translation: '5',
                            correct: true
                        },
                        {
                            text: '6',
                            translation: '6',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        Landtag: 'state parliament'
                    }
                },
                {
                    id: 424,
                    question: 'Ab welchem Alter darf man in Sachsen bei Kommunalwahlen <span class="keyword" title="to vote/elect">wählen</span>?',
                    translation: 'At what age can you vote in local elections in Saxony?',
                    context: 'In local elections, citizens decide on municipal councillors, city councillors and mayors in their region. In Germany, the rules on voting age can vary depending on the federal state. It is especially important for young people to know at what age they are allowed to have a say in local elections. The question refers specifically to the federal state of Saxony and its legal regulations on electoral law at the municipal level.',
                    answers: [
                        {
                            text: '14',
                            translation: '14',
                            correct: false
                        },
                        {
                            text: '18',
                            translation: '18',
                            correct: true
                        },
                        {
                            text: '16',
                            translation: '16',
                            correct: false
                        },
                        {
                            text: '20',
                            translation: '20',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        'wählen': 'to vote/elect'
                    }
                },
                {
                    id: 425,
                    question: 'Welche Farben hat die Landesflagge von Sachsen?',
                    translation: 'What colors does the state flag of Saxony have?',
                    context: 'The question refers to the knowledge of German federal states and their symbols. The focus is on the Free State of Saxony and its state flag. Several colour combinations are used to identify which colours officially belong to the flag of Saxony. Such questions are typical of general knowledge, geography or political education.',
                    answers: [
                        {
                            text: 'schwarz-gelb',
                            translation: 'black-yellow',
                            correct: false
                        },
                        {
                            text: 'grün-weiß-rot',
                            translation: 'green-white-red',
                            correct: false
                        },
                        {
                            text: 'blau-weiß-rot',
                            translation: 'blue-white-red',
                            correct: false
                        },
                        {
                            text: 'weiß-grün',
                            translation: 'white-green',
                            correct: true
                        }
                    ],
                    category: 'State Specific',
                    keywords: {}
                },
                {
                    id: 426,
                    question: 'Wo können Sie sich in Sachsen über politische Themen informieren?',
                    translation: 'Where can you find out about political topics in Saxony?',
                    context: 'The following question refers to possibilities of political education and information services in Saxony. It is to check whether it is known which institutions are specifically responsible for informing citizens about political issues, democratic processes and social contexts. The answer options name various institutions of public life, from authorities to religious institutions to specialized educational institutions.',
                    answers: [
                        {
                            text: 'bei der Verbraucherzentrale',
                            translation: 'at the Consumer Advice Centre',
                            correct: false
                        },
                        {
                            text: 'beim <span class="keyword" title="public order office">Ordnungsamt</span> der Gemeinde',
                            translation: 'at the public order office of the municipality',
                            correct: false
                        },
                        {
                            text: 'bei den Kirchen',
                            translation: 'at the churches',
                            correct: false
                        },
                        {
                            text: 'bei der Landeszentrale für politische Bildung',
                            translation: 'at the State Agency for Civic Education',
                            correct: true
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        Ordnungsamt: 'public order office'
                    }
                },
                {
                    id: 427,
                    question: 'Die Landeshauptstadt von Sachsen heißt …',
                    translation: 'The state capital of Saxony is called ...',
                    context: 'This question refers to the political and geographical knowledge about the federal states in Germany. Each federal state has its own state capital, in which the government and administration are located. Using the example of the Free State of Saxony, it will be examined whether it is known which city will take on this central function.',
                    answers: [
                        {
                            text: 'Dresden',
                            translation: 'Dresden',
                            correct: true
                        },
                        {
                            text: 'Zwickau',
                            translation: 'Zwickau',
                            correct: false
                        },
                        {
                            text: 'Leipzig',
                            translation: 'Leipzig',
                            correct: false
                        },
                        {
                            text: 'Chemnitz',
                            translation: 'Chemnitz',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {}
                },
                {
                    id: 428,
                    question: 'Welches <span class="keyword" title="federal state">Bundesland</span> ist Sachsen?',
                    translation: 'Which federal state is Saxony?',
                    context: 'The question refers to Germany\'s federal system, which consists of 16 federal states. Each federal state has a specific number or position that can be used depending on how it is presented, for example in diagrams, maps or exams. In order to find the right answer, you have to know which federal state Saxony is and which number is assigned to it in the respective context.',
                    answers: [
                        {
                            text: '1',
                            translation: '1',
                            correct: false
                        },
                        {
                            text: '2',
                            translation: '2',
                            correct: false
                        },
                        {
                            text: '3',
                            translation: '3',
                            correct: false
                        },
                        {
                            text: '4',
                            translation: '4',
                            correct: true
                        }
                    ],
                    category: 'State Specific',
                    image: 'images/qss8.6922b0bb.jpeg',
                    keywords: {
                        Bundesland: 'federal state'
                    }
                },
                {
                    id: 429,
                    question: 'Wie nennt man den <span class="keyword" title="head of government">Regierungschef</span> / die <span class="keyword" title="head of government (female)">Regierungschefin</span> in Sachsen?',
                    translation: 'What is the head of government in Saxony called?',
                    context: 'Germany is a federal state with 16 federal states. Each state has its own state government with a clearly defined head. The designation for the head of government may differ from the titles at the municipal or national level. Saxony is one of these federal states. In order to find the right answer, it is important to know what the political structure of the countries looks like and what official titles are common there.',
                    answers: [
                        {
                            text: 'Bürgermeister / Bürgermeisterin',
                            translation: 'Mayor',
                            correct: false
                        },
                        {
                            text: '<span class="keyword" title="state premier">Ministerpräsident</span> / <span class="keyword" title="state premier (female)">Ministerpräsidentin</span>',
                            translation: 'Prime Minister',
                            correct: true
                        },
                        {
                            text: 'Premierminister / Premierministerin',
                            translation: 'Prime Minister',
                            correct: false
                        },
                        {
                            text: 'Erster <span class="keyword" title="minister">Minister</span> / Erste <span class="keyword" title="minister (female)">Ministerin</span>',
                            translation: 'First Minister',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        Regierungschefin: 'head of government (female)',
                        Regierungschef: 'head of government',
                        'Ministerpräsidentin': 'state premier (female)',
                        'Ministerpräsident': 'state premier',
                        Ministerin: 'minister (female)',
                        Minister: 'minister'
                    }
                },
                {
                    id: 430,
                    question: 'Welchen <span class="keyword" title="minister">Minister</span> / welche <span class="keyword" title="minister (female)">Ministerin</span> hat Sachsen nicht?',
                    translation: 'Which minister does Saxony not have?',
                    context: 'In Germany, political responsibility is divided between the federal government and the federal states. Each federal state, such as Saxony, has its own state government with different ministries for certain areas of responsibility. However, not all policy areas are the responsibility of the state governments; some are the sole responsibility of the federal government. To answer the question, one should know which ministries typically exist at the state level and which tasks are only performed at the federal level.',
                    answers: [
                        {
                            text: 'Außenminister / Außenministerin',
                            translation: 'Foreign Minister',
                            correct: true
                        },
                        {
                            text: 'Finanzminister / Finanzministerin',
                            translation: 'Minister of Finance',
                            correct: false
                        },
                        {
                            text: 'Justizminister / Justizministerin',
                            translation: 'Minister of Justice',
                            correct: false
                        },
                        {
                            text: 'Innenminister / Innenministerin',
                            translation: 'Minister of the Interior',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        Ministerin: 'minister (female)',
                        Minister: 'minister'
                    }
                }
            ]
        },
        ST: {
            name: 'Sachsen-Anhalt',
            questions: [
                {
                    id: 431,
                    question: 'Welches <span class="keyword" title="coat of arms">Wappen</span> gehört zum <span class="keyword" title="federal state">Bundesland</span> Sachsen-Anhalt?',
                    translation: 'Which coat of arms belongs to the federal state of Saxony-Anhalt?',
                    context: 'In a quiz on the German federal states, various coats of arms are shown. Each coat of arms is provided with a number (1 to 4). Your task is to assign the correct coat of arms to the state of Saxony-Anhalt based on your knowledge of the symbols of the federal states. Choose the number that belongs to the official coat of arms of Saxony-Anhalt.',
                    answers: [
                        {
                            text: '1',
                            translation: '1',
                            correct: false
                        },
                        {
                            text: '2',
                            translation: '2',
                            correct: false
                        },
                        {
                            text: '3',
                            translation: '3',
                            correct: false
                        },
                        {
                            text: '4',
                            translation: '4',
                            correct: true
                        }
                    ],
                    category: 'State Specific',
                    image: 'images/qsa1.1e4245dd.jpeg',
                    keywords: {
                        Bundesland: 'federal state',
                        Wappen: 'coat of arms'
                    }
                },
                {
                    id: 432,
                    question: 'Welches ist ein Landkreis in Sachsen-Anhalt?',
                    translation: 'Which is a district in Saxony-Anhalt?',
                    context: 'The question relates to the administrative structure of Germany. Germany is divided into federal states, which in turn consist of rural districts and independent cities. Saxony-Anhalt is one of these federal states and has several districts of its own. The task names different districts, which can be assigned to different federal states. The aim is to identify the district, which is actually located in the state of Saxony-Anhalt.',
                    answers: [
                        {
                            text: 'Uckermark',
                            translation: 'Uckermark',
                            correct: false
                        },
                        {
                            text: 'Ammerland',
                            translation: 'Ammerland',
                            correct: false
                        },
                        {
                            text: 'Börde',
                            translation: 'Börde',
                            correct: true
                        },
                        {
                            text: 'Altötting',
                            translation: 'Altötting',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {}
                },
                {
                    id: 433,
                    question: 'Für wie viele Jahre wird der <span class="keyword" title="state parliament">Landtag</span> in Sachsen-Anhalt gewählt?',
                    translation: 'For how many years will the state parliament in Saxony-Anhalt be elected?',
                    context: 'The Landtag is the parliament of a German state and is elected at regular intervals. In Saxony-Anhalt, the state constitution regulates how often these elections take place and how long the members of parliament remain in office. The question refers to the electoral period of the state parliament of Saxony-Anhalt and wants to know for how many years the citizens elect their representatives. The answer options indicate different possible time periods.',
                    answers: [
                        {
                            text: '3',
                            translation: '3',
                            correct: false
                        },
                        {
                            text: '4',
                            translation: '4',
                            correct: false
                        },
                        {
                            text: '5',
                            translation: '5',
                            correct: true
                        },
                        {
                            text: '6',
                            translation: '6',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        Landtag: 'state parliament'
                    }
                },
                {
                    id: 434,
                    question: 'Ab welchem Alter darf man in Sachsen-Anhalt bei Kommunalwahlen <span class="keyword" title="to vote/elect">wählen</span>?',
                    translation: 'At what age can you vote in local elections in Saxony-Anhalt?',
                    context: 'In Germany, the voting age depends on the type of election and the respective federal state. In local elections, the states independently determine the age at which citizens are allowed to vote. Saxony-Anhalt has its own legal regulations for this, which can differ from federal or state elections. In order to vote correctly, it is important to know what is the minimum age for participating in local elections.',
                    answers: [
                        {
                            text: '14',
                            translation: '14',
                            correct: false
                        },
                        {
                            text: '18',
                            translation: '18',
                            correct: false
                        },
                        {
                            text: '16',
                            translation: '16',
                            correct: true
                        },
                        {
                            text: '20',
                            translation: '20',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        'wählen': 'to vote/elect'
                    }
                },
                {
                    id: 435,
                    question: 'Welche Farben hat die Landesflagge von Sachsen-Anhalt?',
                    translation: 'What colours does the state flag of Saxony-Anhalt have?',
                    context: 'In Germany, each state has its own national flag with fixed colors and symbols. The question refers to Saxony-Anhalt, a federal state in central Germany. To find the right answer, you need to know the official colors of the country\'s flag and compare them with the color variants offered.',
                    answers: [
                        {
                            text: 'gelb-schwarz',
                            translation: 'yellow-black',
                            correct: true
                        },
                        {
                            text: 'grün-weiß-rot',
                            translation: 'green-white-red',
                            correct: false
                        },
                        {
                            text: 'weiß-blau',
                            translation: 'white-blue',
                            correct: false
                        },
                        {
                            text: 'blau-weiß-rot',
                            translation: 'blue-white-red',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {}
                },
                {
                    id: 436,
                    question: 'Wo können Sie sich in Sachsen-Anhalt über politische Themen informieren?',
                    translation: 'Where can you find out about political topics in Saxony-Anhalt?',
                    context: 'The question refers to ways to find out about political issues in Saxony-Anhalt. It examines knowledge of which state or social institutions are specifically responsible for providing political education, information on democracy, elections and social issues. This includes understanding the tasks of various institutions in the state and distinguishing between political education and other public or private services.',
                    answers: [
                        {
                            text: 'bei der Landeszentrale für politische Bildung',
                            translation: 'at the State Agency for Civic Education',
                            correct: true
                        },
                        {
                            text: 'bei den Kirchen',
                            translation: 'at the churches',
                            correct: false
                        },
                        {
                            text: 'beim <span class="keyword" title="public order office">Ordnungsamt</span> der Gemeinde',
                            translation: 'at the public order office of the municipality',
                            correct: false
                        },
                        {
                            text: 'bei der Verbraucherzentrale',
                            translation: 'at the Consumer Advice Centre',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        Ordnungsamt: 'public order office'
                    }
                },
                {
                    id: 437,
                    question: 'Die Landeshauptstadt von Sachsen-Anhalt heißt …',
                    translation: 'The state capital of Saxony-Anhalt is called ...',
                    context: 'This question comes from a geography or general knowledge quiz about the federal states of Germany. It tests knowledge of the political and administrative capitals of each country. Saxony-Anhalt is one of the 16 federal states, and the task is to choose the right state capital from several well-known cities.',
                    answers: [
                        {
                            text: 'Magdeburg',
                            translation: 'Magdeburg',
                            correct: true
                        },
                        {
                            text: 'Wittenberg',
                            translation: 'Wittenberg',
                            correct: false
                        },
                        {
                            text: 'Halle',
                            translation: 'Hall',
                            correct: false
                        },
                        {
                            text: 'Dessau',
                            translation: 'Dessau',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {}
                },
                {
                    id: 438,
                    question: 'Welches <span class="keyword" title="federal state">Bundesland</span> ist Sachsen-Anhalt?',
                    translation: 'Which federal state is Saxony-Anhalt?',
                    context: 'The following question relates to the political and geographical system of Germany. Germany is divided into several federal states, each with its own administrations and special features. In order to be able to answer the question, one should know what kind of administrative unit a federal state is and how the federal states in Germany are organized. The answer options are numbered and are examples of different categories or assignments.',
                    answers: [
                        {
                            text: '1',
                            translation: '1',
                            correct: false
                        },
                        {
                            text: '2',
                            translation: '2',
                            correct: false
                        },
                        {
                            text: '3',
                            translation: '3',
                            correct: true
                        },
                        {
                            text: '4',
                            translation: '4',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    image: 'images/qsa8.fd6b5f78.jpeg',
                    keywords: {
                        Bundesland: 'federal state'
                    }
                },
                {
                    id: 439,
                    question: 'Wie nennt man den <span class="keyword" title="head of government">Regierungschef</span> / die <span class="keyword" title="head of government (female)">Regierungschefin</span> in Sachsen-Anhalt?',
                    translation: 'What is the head of government in Saxony-Anhalt called?',
                    context: 'The question relates to Germany\'s political system. Germany is a federal state consisting of several federal states, including Saxony-Anhalt. Each federal state has its own state government with a person at the top who takes on certain tasks and responsibilities. The name of this government office may differ from other states or levels such as federal or municipal. To find the right answer, you should know what the head of government of a German state is officially called.',
                    answers: [
                        {
                            text: 'Premierminister / Premierministerin',
                            translation: 'Prime Minister',
                            correct: false
                        },
                        {
                            text: 'Bürgermeister / Bürgermeisterin',
                            translation: 'Mayor',
                            correct: false
                        },
                        {
                            text: '<span class="keyword" title="state premier">Ministerpräsident</span> / <span class="keyword" title="state premier (female)">Ministerpräsidentin</span>',
                            translation: 'Prime Minister',
                            correct: true
                        },
                        {
                            text: 'Erster <span class="keyword" title="minister">Minister</span> / Erste <span class="keyword" title="minister (female)">Ministerin</span>',
                            translation: 'First Minister',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        Regierungschefin: 'head of government (female)',
                        Regierungschef: 'head of government',
                        'Ministerpräsidentin': 'state premier (female)',
                        'Ministerpräsident': 'state premier',
                        Ministerin: 'minister (female)',
                        Minister: 'minister'
                    }
                },
                {
                    id: 440,
                    question: 'Welchen <span class="keyword" title="minister">Minister</span> / welche <span class="keyword" title="minister (female)">Ministerin</span> hat Sachsen-Anhalt nicht?',
                    translation: 'Which minister does Saxony-Anhalt not have?',
                    context: 'In Germany, politics is divided between the federal government and the federal states. Each federal state, such as Saxony-Anhalt, has its own state government with certain ministries, for example for finance, interior or justice. Other policy areas, however, are exclusively the responsibility of the federal government. In order to understand the question correctly, one should know which tasks are typically performed at the state level and which are not.',
                    answers: [
                        {
                            text: 'Finanzminister / Finanzministerin',
                            translation: 'Minister of Finance',
                            correct: false
                        },
                        {
                            text: 'Innenminister / Innenministerin',
                            translation: 'Minister of the Interior',
                            correct: false
                        },
                        {
                            text: 'Außenminister / Außenministerin',
                            translation: 'Foreign Minister',
                            correct: true
                        },
                        {
                            text: 'Justizminister / Justizministerin',
                            translation: 'Minister of Justice',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        Ministerin: 'minister (female)',
                        Minister: 'minister'
                    }
                }
            ]
        },
        SH: {
            name: 'Schleswig-Holstein',
            questions: [
                {
                    id: 441,
                    question: 'Welches <span class="keyword" title="coat of arms">Wappen</span> gehört zum <span class="keyword" title="federal state">Bundesland</span> Schleswig-Holstein?',
                    translation: 'Which coat of arms belongs to the federal state of Schleswig-Holstein?',
                    context: 'This question is about the recognition of state coats of arms in Germany. You will be shown several numbered images of coats of arms. Your task is to identify the coat of arms, which belongs to the state of Schleswig-Holstein, based on typical symbols and colors. Schleswig-Holstein has a characteristic coat of arms with historical elements that indicate its history and location. Select the number that correctly represents this emblem.',
                    answers: [
                        {
                            text: '1',
                            translation: '1',
                            correct: false
                        },
                        {
                            text: '2',
                            translation: '2',
                            correct: false
                        },
                        {
                            text: '3',
                            translation: '3',
                            correct: true
                        },
                        {
                            text: '4',
                            translation: '4',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    image: 'images/qsh1.c4be2a60.jpeg',
                    keywords: {
                        Bundesland: 'federal state',
                        Wappen: 'coat of arms'
                    }
                },
                {
                    id: 442,
                    question: 'Welches ist ein Landkreis in Schleswig-Holstein?',
                    translation: 'Which is a district in Schleswig-Holstein?',
                    context: 'Germany is divided into federal states and these in turn are divided into districts. Each district belongs to exactly one federal state. Schleswig-Holstein is located in the north of Germany between the North Sea and the Baltic Sea. The question examines whether one knows which of the districts mentioned belongs to Schleswig-Holstein and which are more likely to be assigned to other federal states such as Mecklenburg-Western Pomerania, North Rhine-Westphalia or Lower Saxony.',
                    answers: [
                        {
                            text: 'Nordfriesland',
                            translation: 'Nordfriesland',
                            correct: true
                        },
                        {
                            text: 'Mecklenburgische Seenplatte',
                            translation: 'Mecklenburg Lake District',
                            correct: false
                        },
                        {
                            text: 'Rhein-Sieg-Kreis',
                            translation: 'Rhein-Sieg district',
                            correct: false
                        },
                        {
                            text: 'Ammerland',
                            translation: 'Ammerland',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {}
                },
                {
                    id: 443,
                    question: 'Für wie viele Jahre wird der <span class="keyword" title="state parliament">Landtag</span> in Schleswig-Holstein gewählt?',
                    translation: 'For how many years will the state parliament in Schleswig-Holstein be elected?',
                    context: 'In Germany, the federal states have their own parliaments, which are called state parliaments. These are regularly elected by the citizens of a federal state. The duration of a legislative period is not regulated in the same way in all federal states, but can vary depending on the state constitution. The question refers specifically to the state parliament of the state of Schleswig-Holstein and to how many years the members of parliament will be elected for.',
                    answers: [
                        {
                            text: '3',
                            translation: '3',
                            correct: false
                        },
                        {
                            text: '4',
                            translation: '4',
                            correct: false
                        },
                        {
                            text: '5',
                            translation: '5',
                            correct: true
                        },
                        {
                            text: '6',
                            translation: '6',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        Landtag: 'state parliament'
                    }
                },
                {
                    id: 444,
                    question: 'Ab welchem Alter darf man in Schleswig-Holstein bei Kommunalwahlen <span class="keyword" title="to vote/elect">wählen</span>?',
                    translation: 'At what age can you vote in local elections in Schleswig-Holstein?',
                    context: 'The question relates to the right to vote in Germany at the state and local level. Each federal state can set its own regulations on the voting age for local elections. Schleswig-Holstein is one of the federal states with special provisions for the participation of young people in local political decisions. In order to find the right answer, you have to know the minimum age at which citizens are allowed to vote in local elections.',
                    answers: [
                        {
                            text: '14',
                            translation: '14',
                            correct: false
                        },
                        {
                            text: '18',
                            translation: '18',
                            correct: false
                        },
                        {
                            text: '16',
                            translation: '16',
                            correct: true
                        },
                        {
                            text: '20',
                            translation: '20',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        'wählen': 'to vote/elect'
                    }
                },
                {
                    id: 445,
                    question: 'Welche Farben hat die Landesflagge von Schleswig-Holstein?',
                    translation: 'What colors does the state flag of Schleswig-Holstein have?',
                    context: 'The following question refers to a German state in the north of the country. In order to answer them correctly, basic knowledge of German national flags is helpful. Each country flag has certain colors, which often have historical or cultural significance. The question checks whether you know which colors officially belong to the flag of Schleswig-Holstein.',
                    answers: [
                        {
                            text: 'weiß-blau',
                            translation: 'white-blue',
                            correct: false
                        },
                        {
                            text: 'grün-weiß-rot',
                            translation: 'green-white-red',
                            correct: false
                        },
                        {
                            text: 'blau-weiß-rot',
                            translation: 'blue-white-red',
                            correct: true
                        },
                        {
                            text: 'weiß-rot',
                            translation: 'white-red',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {}
                },
                {
                    id: 446,
                    question: 'Wo können Sie sich in Schleswig-Holstein über politische Themen informieren?',
                    translation: 'Where can you find out about political topics in Schleswig-Holstein?',
                    context: 'The question refers to possibilities of political education in Schleswig-Holstein. Citizens should know which official bodies provide information on political topics. The aim is to understand state institutions, their tasks and where reliable and independent information on politics, democracy and social issues can be obtained. The answer options show different institutions, each of which has different functions in public life.',
                    answers: [
                        {
                            text: 'beim <span class="keyword" title="public order office">Ordnungsamt</span> der Gemeinde',
                            translation: 'at the public order office of the municipality',
                            correct: false
                        },
                        {
                            text: 'beim / bei der Landesbeauftragten für politische Bildung',
                            translation: 'with the State Commissioner for Civic Education',
                            correct: true
                        },
                        {
                            text: 'bei den Kirchen',
                            translation: 'at the churches',
                            correct: false
                        },
                        {
                            text: 'bei der Verbraucherzentrale',
                            translation: 'at the Consumer Advice Centre',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        Ordnungsamt: 'public order office'
                    }
                },
                {
                    id: 447,
                    question: 'Die Landeshauptstadt von Schleswig-Holstein heißt …',
                    translation: 'The state capital of Schleswig-Holstein is called ...',
                    context: 'Germany consists of different federal states, and each has its own state capital, in which the government and administration have their seat. Schleswig-Holstein is located in the north of Germany between the North Sea and the Baltic Sea. The following question tests the basic geographical knowledge of which city is the political capital of this state.',
                    answers: [
                        {
                            text: 'Lübeck',
                            translation: 'Lübeck',
                            correct: false
                        },
                        {
                            text: 'Kiel',
                            translation: 'Kiel',
                            correct: true
                        },
                        {
                            text: 'Flensburg',
                            translation: 'Flensburg',
                            correct: false
                        },
                        {
                            text: 'Husum',
                            translation: 'Husum',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {}
                },
                {
                    id: 448,
                    question: 'Welches <span class="keyword" title="federal state">Bundesland</span> ist Schleswig-Holstein?',
                    translation: 'Which federal state is Schleswig-Holstein?',
                    context: 'This task is about the geographical classification of German federal states. On an illustration or map, several regions are marked with the numbers 1 to 4. You should recognize which of these marked regions represents the state of Schleswig-Holstein. Schleswig-Holstein is located in the north of Germany between the North Sea and the Baltic Sea and borders Denmark. Select the number that corresponds to that region.',
                    answers: [
                        {
                            text: '1',
                            translation: '1',
                            correct: true
                        },
                        {
                            text: '2',
                            translation: '2',
                            correct: false
                        },
                        {
                            text: '3',
                            translation: '3',
                            correct: false
                        },
                        {
                            text: '4',
                            translation: '4',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    image: 'images/qsh8.442d7ed7.jpeg',
                    keywords: {
                        Bundesland: 'federal state'
                    }
                },
                {
                    id: 449,
                    question: 'Wie nennt man den <span class="keyword" title="head of government">Regierungschef</span> / die <span class="keyword" title="head of government (female)">Regierungschefin</span> in Schleswig-Holstein?',
                    translation: 'What is the head of government in Schleswig-Holstein called?',
                    context: 'In Germany, the individual federal states have their own state governments. Each federal state is led by a person at the head of the state government. This designation may differ from that of the head of government at the federal level. The question refers specifically to the state of Schleswig-Holstein and wants to know what the title of the head of government there is.',
                    answers: [
                        {
                            text: '<span class="keyword" title="state premier">Ministerpräsident</span> / <span class="keyword" title="state premier (female)">Ministerpräsidentin</span>',
                            translation: 'Prime Minister',
                            correct: true
                        },
                        {
                            text: 'Bürgermeister / Bürgermeisterin',
                            translation: 'Mayor',
                            correct: false
                        },
                        {
                            text: 'Erster <span class="keyword" title="minister">Minister</span> / Erste <span class="keyword" title="minister (female)">Ministerin</span>',
                            translation: 'First Minister',
                            correct: false
                        },
                        {
                            text: 'Premierminister / Premierministerin',
                            translation: 'Prime Minister',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        Regierungschefin: 'head of government (female)',
                        Regierungschef: 'head of government',
                        'Ministerpräsidentin': 'state premier (female)',
                        'Ministerpräsident': 'state premier',
                        Ministerin: 'minister (female)',
                        Minister: 'minister'
                    }
                },
                {
                    id: 450,
                    question: 'Welchen <span class="keyword" title="minister">Minister</span> / welche <span class="keyword" title="minister (female)">Ministerin</span> hat Schleswig-Holstein nicht?',
                    translation: 'Which minister does Schleswig-Holstein not have?',
                    context: 'The question relates to the structure of the state government of Schleswig-Holstein. In Germany, the federal states have their own ministries for certain policy areas such as the interior, justice or finance. Other responsibilities, however, lie exclusively with the federal government. In order to find the right answer, you have to know which tasks are typically taken over by state ministries and which departments do not exist at the state level.',
                    answers: [
                        {
                            text: 'Innenminister / Innenministerin',
                            translation: 'Minister of the Interior',
                            correct: false
                        },
                        {
                            text: 'Außenminister / Außenministerin',
                            translation: 'Foreign Minister',
                            correct: true
                        },
                        {
                            text: 'Justizminister / Justizministerin',
                            translation: 'Minister of Justice',
                            correct: false
                        },
                        {
                            text: 'Finanzminister / Finanzministerin',
                            translation: 'Minister of Finance',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        Ministerin: 'minister (female)',
                        Minister: 'minister'
                    }
                }
            ]
        },
        TH: {
            name: 'Thüringen',
            questions: [
                {
                    id: 451,
                    question: 'Welches <span class="keyword" title="coat of arms">Wappen</span> gehört zum Freistaat Thüringen?',
                    translation: 'Which coat of arms belongs to the Free State of Thuringia?',
                    context: 'This task is about coats of arms of German federal states. You will be shown four different coats of arms with the numbers 1 to 4. Based on your knowledge of symbols, colors and heraldic features, you should recognize which of these coats of arms belongs to the Free State of Thuringia.',
                    answers: [
                        {
                            text: '1',
                            translation: '1',
                            correct: false
                        },
                        {
                            text: '2',
                            translation: '2',
                            correct: false
                        },
                        {
                            text: '3',
                            translation: '3',
                            correct: false
                        },
                        {
                            text: '4',
                            translation: '4',
                            correct: true
                        }
                    ],
                    category: 'State Specific',
                    image: 'images/qtg1.aca82959.jpeg',
                    keywords: {
                        Wappen: 'coat of arms'
                    }
                },
                {
                    id: 452,
                    question: 'Welches ist ein Landkreis in Thüringen?',
                    translation: 'Which is a district in Thuringia?',
                    context: 'The question relates to the administrative structure of Germany. Germany is divided into federal states, which in turn have districts. Thuringia is one of these federal states. In the task, several districts are to be compared, which can come from different federal states. The district that actually belongs to the state of Thuringia is sought.',
                    answers: [
                        {
                            text: 'Altötting',
                            translation: 'Altötting',
                            correct: false
                        },
                        {
                            text: 'Wartburgkreis',
                            translation: 'Wartburgkreis',
                            correct: true
                        },
                        {
                            text: 'Ammerland',
                            translation: 'Ammerland',
                            correct: false
                        },
                        {
                            text: 'Nordfriesland',
                            translation: 'Nordfriesland',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {}
                },
                {
                    id: 453,
                    question: 'Für wie viele Jahre wird der <span class="keyword" title="state parliament">Landtag</span> in Thüringen gewählt?',
                    translation: 'For how many years will the state parliament in Thuringia be elected?',
                    context: 'The question relates to the political system of the German state of Thuringia. The state parliament is the state parliament and is elected at regular intervals by the citizens entitled to vote. The length of the electoral period is determined by law and determines how long the members of parliament exercise their mandate.',
                    answers: [
                        {
                            text: '3',
                            translation: '3',
                            correct: false
                        },
                        {
                            text: '4',
                            translation: '4',
                            correct: false
                        },
                        {
                            text: '5',
                            translation: '5',
                            correct: true
                        },
                        {
                            text: '6',
                            translation: '6',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        Landtag: 'state parliament'
                    }
                },
                {
                    id: 454,
                    question: 'Ab welchem Alter darf man in Thüringen bei Kommunalwahlen <span class="keyword" title="to vote/elect">wählen</span>?',
                    translation: 'At what age can you vote in local elections in Thuringia?',
                    context: 'The question relates to the electoral law in Germany and specifically to the state of Thuringia. It wants to clarify the minimum age from which citizens are allowed to vote in local elections. Local elections affect decisions at the local level, for example in cities and municipalities. Since the voting age can vary depending on the federal state and the type of election, background knowledge of state law regulations is necessary in order to select the right answer.',
                    answers: [
                        {
                            text: '14',
                            translation: '14',
                            correct: false
                        },
                        {
                            text: '18',
                            translation: '18',
                            correct: false
                        },
                        {
                            text: '16',
                            translation: '16',
                            correct: true
                        },
                        {
                            text: '20',
                            translation: '20',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        'wählen': 'to vote/elect'
                    }
                },
                {
                    id: 455,
                    question: 'Welche Farben hat die Landesflagge von Thüringen?',
                    translation: 'What colors does the state flag of Thuringia have?',
                    context: 'As part of a quiz about the German federal states, the focus is on their symbols and identity. The national flag, which often has historical and cultural significance, plays an important role in this. The following question tests your knowledge of the colors of the flag of the state of Thuringia and offers several answer options to choose from.',
                    answers: [
                        {
                            text: 'weiß-rot',
                            translation: 'white-red',
                            correct: true
                        },
                        {
                            text: 'schwarz-gold',
                            translation: 'black-gold',
                            correct: false
                        },
                        {
                            text: 'grün-weiß-rot',
                            translation: 'green-white-red',
                            correct: false
                        },
                        {
                            text: 'blau-weiß-rot',
                            translation: 'blue-white-red',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {}
                },
                {
                    id: 456,
                    question: 'Wo können Sie sich in Thüringen über politische Themen informieren?',
                    translation: 'Where can you find out about political topics in Thuringia?',
                    context: 'The question refers to political education in a German state. Citizens should know which institutions offer official and reliable information on politics, democracy and social issues. In Thuringia, there are various state, church and civil society institutions that perform different tasks. The answer options differ according to whether their main task is political information and education or another social field of activity.',
                    answers: [
                        {
                            text: 'beim <span class="keyword" title="public order office">Ordnungsamt</span> der Gemeinde',
                            translation: 'at the public order office of the municipality',
                            correct: false
                        },
                        {
                            text: 'bei den Kirchen',
                            translation: 'at the churches',
                            correct: false
                        },
                        {
                            text: 'bei der Verbraucherzentrale',
                            translation: 'at the Consumer Advice Centre',
                            correct: false
                        },
                        {
                            text: 'bei der Landeszentrale für politische Bildung',
                            translation: 'at the State Agency for Civic Education',
                            correct: true
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        Ordnungsamt: 'public order office'
                    }
                },
                {
                    id: 457,
                    question: 'Die Landeshauptstadt von Thüringen heißt …',
                    translation: 'The state capital of Thuringia is called ...',
                    context: 'Germany consists of 16 federal states, each of which has its own state capital. Thuringia is located in the middle of Germany and has several important cities with historical and cultural significance. The question aims to identify the city in which the state government of Thuringia is based.',
                    answers: [
                        {
                            text: 'Jena',
                            translation: 'Jena',
                            correct: false
                        },
                        {
                            text: 'Gera',
                            translation: 'Gera',
                            correct: false
                        },
                        {
                            text: 'Eisenach',
                            translation: 'Eisenach',
                            correct: false
                        },
                        {
                            text: 'Erfurt',
                            translation: 'Erfurt',
                            correct: true
                        }
                    ],
                    category: 'State Specific',
                    keywords: {}
                },
                {
                    id: 458,
                    question: 'Welches <span class="keyword" title="federal state">Bundesland</span> ist Thüringen?',
                    translation: 'Which state is Thuringia?',
                    context: 'This task is about the geographical classification of the German federal states. On a map or in a list, the federal states are marked with numbers. The question checks which of these numbers corresponds to the state of Thuringia. Select the number that correctly assigns Thuringia.',
                    answers: [
                        {
                            text: '1',
                            translation: '1',
                            correct: false
                        },
                        {
                            text: '2',
                            translation: '2',
                            correct: true
                        },
                        {
                            text: '3',
                            translation: '3',
                            correct: false
                        },
                        {
                            text: '4',
                            translation: '4',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    image: 'images/qtg8.56380392.jpeg',
                    keywords: {
                        Bundesland: 'federal state'
                    }
                },
                {
                    id: 459,
                    question: 'Wie nennt man den <span class="keyword" title="head of government">Regierungschef</span> / die <span class="keyword" title="head of government (female)">Regierungschefin</span> in Thüringen?',
                    translation: 'What is the head of government called in Thuringia?',
                    context: 'In Germany, the federal states are independent political entities with their own government. Each federal state has a head of government with a specific official title. The question refers to the state of Thuringia and examines how the head of government there is officially called, in contrast to other political levels such as the federal government or the municipality.',
                    answers: [
                        {
                            text: 'Erster <span class="keyword" title="minister">Minister</span> / Erste <span class="keyword" title="minister (female)">Ministerin</span>',
                            translation: 'First Minister',
                            correct: false
                        },
                        {
                            text: '<span class="keyword" title="state premier">Ministerpräsident</span> / <span class="keyword" title="state premier (female)">Ministerpräsidentin</span>',
                            translation: 'Prime Minister',
                            correct: true
                        },
                        {
                            text: 'Bürgermeister / Bürgermeisterin',
                            translation: 'Mayor',
                            correct: false
                        },
                        {
                            text: 'Premierminister / Premierministerin',
                            translation: 'Prime Minister',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        Regierungschefin: 'head of government (female)',
                        Regierungschef: 'head of government',
                        Ministerin: 'minister (female)',
                        Minister: 'minister',
                        'Ministerpräsidentin': 'state premier (female)',
                        'Ministerpräsident': 'state premier'
                    }
                },
                {
                    id: 460,
                    question: 'Welchen <span class="keyword" title="minister">Minister</span> / welche <span class="keyword" title="minister (female)">Ministerin</span> hat Thüringen nicht?',
                    translation: 'Which minister does Thuringia not have?',
                    context: 'The question relates to the structure of the state government of the German state of Thuringia. Each federal state has its own ministries for certain policy areas, which differ from the tasks of the federal government. Some departments are typically at the state level, others only exist at the federal level. To answer the question, you should know what responsibilities a federal state has and which ministries are located exclusively at the federal level.',
                    answers: [
                        {
                            text: 'Finanzminister / Finanzministerin',
                            translation: 'Minister of Finance',
                            correct: false
                        },
                        {
                            text: 'Innenminister / Innenministerin',
                            translation: 'Minister of the Interior',
                            correct: false
                        },
                        {
                            text: 'Außenminister / Außenministerin',
                            translation: 'Foreign Minister',
                            correct: true
                        },
                        {
                            text: 'Justizminister / Justizministerin',
                            translation: 'Minister of Justice',
                            correct: false
                        }
                    ],
                    category: 'State Specific',
                    keywords: {
                        Ministerin: 'minister (female)',
                        Minister: 'minister'
                    }
                }
            ]
        }
    }
};

// Helper: get total question count
questionsDatabase.totalCount = questionsDatabase.general.length;
questionsDatabase.stateQuestionCount = Object.keys(questionsDatabase.states).length * 10;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = questionsDatabase;
}
