// AI Maze - Pac-Man Style Game with AI Quiz

// ==================== LANGUAGE / TRANSLATIONS ====================
let currentLanguage = 'en';

const TRANSLATIONS = {
    en: {
        // Start Screen
        subtitle: "Test Your Artificial Intelligence Knowledge",
        surveyPrompt: "Don't have time to play?",
        surveyBtn: "Take the Quick Survey",
        howToPlay: "How to Play",
        instruction1: 'Use <span class="key">Arrow Keys</span> or <span class="key">WASD</span> to navigate',
        instruction2: "Collect the glowing dots to earn points",
        instruction3: "Question bubbles spawn periodically - collect them!",
        instruction4: '<span class="highlight-green">Correct answers</span> freeze ghosts and award bonus points',
        instruction5: '<span class="highlight-purple">Wrong answers</span> spawn additional ghosts',
        instruction6: "Collect and answer all 3 bubbles to complete the game",
        instruction7: "Avoid contact with the ghosts",
        startGame: "Start Game",
        
        // Game Screen
        score: "Score",
        lives: "Lives",
        questions: "Questions",
        nextBubble: "Next Bubble",
        
        // Question Modal
        aiQuestion: "AI Question",
        quickSurvey: "Quick AI Survey",
        questionProgress: "Question {current} of {total}",
        correct: "Correct!",
        incorrect: "Incorrect!",
        correctFeedback: "Correct! Ghosts are frozen for 5 seconds! +{points} points",
        incorrectFeedback: "Wrong! A new ghost has spawned!",
        ghostsFrozen: "GHOSTS FROZEN - CATCH THEM!",
        
        // Survey Results
        surveyComplete: "Survey Complete",
        thankYou: "Thank you for participating!",
        questionsCorrect: "Questions Correct",
        yourScore: "Your Score",
        playFullGame: "Play the Full Game",
        backToStart: "Back to Start",
        
        // Game Results
        gameComplete: "Game Complete",
        finalScore: "Final Score",
        quizPoints: "Quiz Points",
        dotsCollected: "Dots Collected",
        playAgain: "Play Again",
        
        // Game Over
        gameOver: "Game Over",
        ghostsCaughtYou: "The ghosts caught you!",
        questionsAnswered: "Questions Answered",
        tryAgain: "Try Again",
        
        // Grades
        aiExpert: "AI Expert!",
        aiEnthusiast: "AI Enthusiast!",
        keepLearning: "Keep Learning!"
    },
    de: {
        // Start Screen
        subtitle: "Teste dein Wissen über Künstliche Intelligenz",
        surveyPrompt: "Keine Zeit zum Spielen?",
        surveyBtn: "Zur Schnellumfrage",
        howToPlay: "Spielanleitung",
        instruction1: 'Benutze <span class="key">Pfeiltasten</span> oder <span class="key">WASD</span> zum Navigieren',
        instruction2: "Sammle die leuchtenden Punkte für Punkte",
        instruction3: "Fragenblasen erscheinen regelmäßig - sammle sie!",
        instruction4: '<span class="highlight-green">Richtige Antworten</span> frieren Geister ein und geben Bonuspunkte',
        instruction5: '<span class="highlight-purple">Falsche Antworten</span> lassen neue Geister erscheinen',
        instruction6: "Sammle und beantworte alle 3 Blasen um das Spiel zu beenden",
        instruction7: "Vermeide Kontakt mit den Geistern",
        startGame: "Spiel starten",
        
        // Game Screen
        score: "Punkte",
        lives: "Leben",
        questions: "Fragen",
        nextBubble: "Nächste Blase",
        
        // Question Modal
        aiQuestion: "KI-Frage",
        quickSurvey: "Schnelle KI-Umfrage",
        questionProgress: "Frage {current} von {total}",
        correct: "Richtig!",
        incorrect: "Falsch!",
        correctFeedback: "Richtig! Geister sind 5 Sekunden eingefroren! +{points} Punkte",
        incorrectFeedback: "Falsch! Ein neuer Geist ist erschienen!",
        ghostsFrozen: "GEISTER EINGEFROREN - FANG SIE!",
        
        // Survey Results
        surveyComplete: "Umfrage abgeschlossen",
        thankYou: "Vielen Dank für deine Teilnahme!",
        questionsCorrect: "Richtige Antworten",
        yourScore: "Dein Ergebnis",
        playFullGame: "Vollständiges Spiel spielen",
        backToStart: "Zurück zum Start",
        
        // Game Results
        gameComplete: "Spiel abgeschlossen",
        finalScore: "Endpunktzahl",
        quizPoints: "Quiz-Punkte",
        dotsCollected: "Gesammelte Punkte",
        playAgain: "Nochmal spielen",
        
        // Game Over
        gameOver: "Spiel vorbei",
        ghostsCaughtYou: "Die Geister haben dich erwischt!",
        questionsAnswered: "Beantwortete Fragen",
        tryAgain: "Erneut versuchen",
        
        // Grades
        aiExpert: "KI-Experte!",
        aiEnthusiast: "KI-Enthusiast!",
        keepLearning: "Weiter lernen!"
    },
    fr: {
        // Start Screen
        subtitle: "Testez vos connaissances en Intelligence Artificielle",
        surveyPrompt: "Pas le temps de jouer ?",
        surveyBtn: "Répondre au sondage rapide",
        howToPlay: "Comment jouer",
        instruction1: 'Utilisez les <span class="key">Flèches</span> ou <span class="key">WASD</span> pour naviguer',
        instruction2: "Collectez les points lumineux pour gagner des points",
        instruction3: "Des bulles de questions apparaissent régulièrement - collectez-les !",
        instruction4: '<span class="highlight-green">Les bonnes réponses</span> gèlent les fantômes et donnent des points bonus',
        instruction5: '<span class="highlight-purple">Les mauvaises réponses</span> font apparaître de nouveaux fantômes',
        instruction6: "Collectez et répondez aux 3 bulles pour terminer le jeu",
        instruction7: "Évitez le contact avec les fantômes",
        startGame: "Commencer le jeu",
        
        // Game Screen
        score: "Score",
        lives: "Vies",
        questions: "Questions",
        nextBubble: "Prochaine bulle",
        
        // Question Modal
        aiQuestion: "Question IA",
        quickSurvey: "Sondage rapide IA",
        questionProgress: "Question {current} sur {total}",
        correct: "Correct !",
        incorrect: "Incorrect !",
        correctFeedback: "Correct ! Les fantômes sont gelés pendant 5 secondes ! +{points} points",
        incorrectFeedback: "Faux ! Un nouveau fantôme est apparu !",
        ghostsFrozen: "FANTÔMES GELÉS - ATTRAPEZ-LES !",
        
        // Survey Results
        surveyComplete: "Sondage terminé",
        thankYou: "Merci pour votre participation !",
        questionsCorrect: "Réponses correctes",
        yourScore: "Votre score",
        playFullGame: "Jouer au jeu complet",
        backToStart: "Retour au début",
        
        // Game Results
        gameComplete: "Jeu terminé",
        finalScore: "Score final",
        quizPoints: "Points du quiz",
        dotsCollected: "Points collectés",
        playAgain: "Rejouer",
        
        // Game Over
        gameOver: "Fin de partie",
        ghostsCaughtYou: "Les fantômes vous ont attrapé !",
        questionsAnswered: "Questions répondues",
        tryAgain: "Réessayer",
        
        // Grades
        aiExpert: "Expert en IA !",
        aiEnthusiast: "Passionné d'IA !",
        keepLearning: "Continuez à apprendre !"
    },
    es: {
        // Start Screen
        subtitle: "Pon a prueba tus conocimientos de Inteligencia Artificial",
        surveyPrompt: "¿No tienes tiempo para jugar?",
        surveyBtn: "Responder encuesta rápida",
        howToPlay: "Cómo jugar",
        instruction1: 'Usa las <span class="key">Flechas</span> o <span class="key">WASD</span> para navegar',
        instruction2: "Recoge los puntos brillantes para ganar puntos",
        instruction3: "Las burbujas de preguntas aparecen periódicamente - ¡recógelas!",
        instruction4: '<span class="highlight-green">Las respuestas correctas</span> congelan a los fantasmas y dan puntos extra',
        instruction5: '<span class="highlight-purple">Las respuestas incorrectas</span> hacen aparecer nuevos fantasmas',
        instruction6: "Recoge y responde las 3 burbujas para completar el juego",
        instruction7: "Evita el contacto con los fantasmas",
        startGame: "Iniciar juego",
        
        // Game Screen
        score: "Puntuación",
        lives: "Vidas",
        questions: "Preguntas",
        nextBubble: "Próxima burbuja",
        
        // Question Modal
        aiQuestion: "Pregunta de IA",
        quickSurvey: "Encuesta rápida de IA",
        questionProgress: "Pregunta {current} de {total}",
        correct: "¡Correcto!",
        incorrect: "¡Incorrecto!",
        correctFeedback: "¡Correcto! ¡Los fantasmas están congelados por 5 segundos! +{points} puntos",
        incorrectFeedback: "¡Error! ¡Un nuevo fantasma ha aparecido!",
        ghostsFrozen: "FANTASMAS CONGELADOS - ¡ATRÁPALOS!",
        
        // Survey Results
        surveyComplete: "Encuesta completada",
        thankYou: "¡Gracias por participar!",
        questionsCorrect: "Respuestas correctas",
        yourScore: "Tu puntuación",
        playFullGame: "Jugar el juego completo",
        backToStart: "Volver al inicio",
        
        // Game Results
        gameComplete: "Juego completado",
        finalScore: "Puntuación final",
        quizPoints: "Puntos del quiz",
        dotsCollected: "Puntos recogidos",
        playAgain: "Jugar de nuevo",
        
        // Game Over
        gameOver: "Fin del juego",
        ghostsCaughtYou: "¡Los fantasmas te atraparon!",
        questionsAnswered: "Preguntas respondidas",
        tryAgain: "Intentar de nuevo",
        
        // Grades
        aiExpert: "¡Experto en IA!",
        aiEnthusiast: "¡Entusiasta de IA!",
        keepLearning: "¡Sigue aprendiendo!"
    }
};

// ==================== GAME CONFIGURATION ====================
const CONFIG = {
    cellSize: 28,
    mazeWidth: 25,
    mazeHeight: 22,
    tunnelRow: 10, // The row where wrap-around is allowed
    playerSpeed: 4,
    ghostSpeed: 2,
    bubbleSpawnInterval: 3000, // 3 seconds
    ghostFreezeTime: 5000, // 5 seconds freeze on correct answer
    totalQuestions: 3,
    pointsPerDot: 10,
    pointsPerQuestion: 100,
    pointsPerGhost: 200,
    lives: 3
};

// ==================== MAZE LAYOUT ====================
// 0 = path, 1 = wall, 2 = dot, 3 = empty (no dot)
const MAZE_TEMPLATE = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,2,1,1,1,2,1,1,1,1,1,2,1,2,1,1,1,1,1,2,1,1,1,2,1],
    [1,2,1,1,1,2,1,1,1,1,1,2,1,2,1,1,1,1,1,2,1,1,1,2,1],
    [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,2,1,1,1,2,1,2,1,1,1,1,1,1,1,1,1,2,1,2,1,1,1,2,1],
    [1,2,2,2,2,2,1,2,2,2,2,2,1,2,2,2,2,2,1,2,2,2,2,2,1],
    [1,1,1,1,1,2,1,1,1,1,1,0,1,0,1,1,1,1,1,2,1,1,1,1,1],
    [1,1,1,1,1,2,1,0,0,0,0,0,0,0,0,0,0,0,1,2,1,1,1,1,1],
    [1,1,1,1,1,2,1,0,1,1,1,0,0,0,1,1,1,0,1,2,1,1,1,1,1],
    [0,0,0,0,0,2,0,0,1,0,0,0,0,0,0,0,1,0,0,2,0,0,0,0,0],
    [1,1,1,1,1,2,1,0,1,1,1,1,1,1,1,1,1,0,1,2,1,1,1,1,1],
    [1,1,1,1,1,2,1,0,0,0,0,0,0,0,0,0,0,0,1,2,1,1,1,1,1],
    [1,1,1,1,1,2,1,0,1,1,1,1,1,1,1,1,1,0,1,2,1,1,1,1,1],
    [1,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,2,1,1,1,2,1,1,1,1,1,2,1,2,1,1,1,1,1,2,1,1,1,2,1],
    [1,2,2,2,1,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,1,2,2,2,1],
    [1,1,1,2,1,2,1,2,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,1,1],
    [1,2,2,2,2,2,1,2,2,2,2,2,1,2,2,2,2,2,1,2,2,2,2,2,1],
    [1,2,1,1,1,1,1,1,1,1,1,2,1,2,1,1,1,1,1,1,1,1,1,2,1],
    [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];

// ==================== AI QUESTIONS ====================
const AI_QUESTIONS = {
    en: [
        {
            question: "What does AI stand for?",
            answers: ["Artificial Intelligence", "Automated Integration", "Advanced Internet", "Applied Informatics"],
            correct: 0
        },
        {
            question: "Which company developed ChatGPT?",
            answers: ["Google", "Microsoft", "OpenAI", "Meta"],
            correct: 2
        },
        {
            question: "What is machine learning?",
            answers: [
                "Programming explicit rules for every scenario",
                "Systems that learn from data to improve performance",
                "Robots that physically learn to move",
                "Computers that replace human workers"
            ],
            correct: 1
        },
        {
            question: "What is a neural network inspired by?",
            answers: ["Computer circuits", "The human brain", "Spider webs", "Social networks"],
            correct: 1
        },
        {
            question: "What is 'training' in machine learning?",
            answers: [
                "Teaching robots physical exercises",
                "The process of a model learning from data",
                "Human operators learning to use AI",
                "Installing software updates"
            ],
            correct: 1
        },
        {
            question: "What is a 'Large Language Model' (LLM)?",
            answers: [
                "A very big dictionary",
                "An AI trained on vast text data to understand and generate language",
                "A programming language for large companies",
                "A type of computer memory"
            ],
            correct: 1
        },
        {
            question: "What is 'deep learning'?",
            answers: [
                "Learning while sleeping",
                "Neural networks with many layers",
                "Studying AI for many years",
                "Underground data centers"
            ],
            correct: 1
        },
        {
            question: "What is a 'prompt' in AI?",
            answers: [
                "A reminder notification",
                "The input text given to an AI model",
                "A type of AI error",
                "The AI's response"
            ],
            correct: 1
        },
        {
            question: "What is 'computer vision'?",
            answers: [
                "A computer screen",
                "AI that can interpret and understand images",
                "Virtual reality glasses",
                "High-resolution displays"
            ],
            correct: 1
        },
        {
            question: "What is the 'Turing Test'?",
            answers: [
                "A programming certification",
                "A test to see if AI can exhibit human-like intelligence",
                "A security vulnerability scan",
                "A speed benchmark for computers"
            ],
            correct: 1
        },
        {
            question: "What is 'natural language processing' (NLP)?",
            answers: [
                "Speaking naturally to computers",
                "AI understanding and generating human language",
                "A type of keyboard",
                "Voice recording technology"
            ],
            correct: 1
        },
        {
            question: "What is 'reinforcement learning'?",
            answers: [
                "Learning by repetition only",
                "Learning through rewards and penalties",
                "Strengthening computer hardware",
                "Backup learning systems"
            ],
            correct: 1
        },
        {
            question: "What is an AI 'hallucination'?",
            answers: [
                "AI having dreams",
                "AI generating false or made-up information confidently",
                "Visual glitches on screen",
                "AI refusing to answer"
            ],
            correct: 1
        },
        {
            question: "What is 'generative AI'?",
            answers: [
                "AI that generates electricity",
                "AI that creates new content like text, images, or music",
                "The next generation of computers",
                "AI that only analyzes data"
            ],
            correct: 1
        },
        {
            question: "What does GPU stand for in AI context?",
            answers: [
                "General Purpose Unit",
                "Graphics Processing Unit",
                "Gigabyte Power Usage",
                "Global Processing Utility"
            ],
            correct: 1
        }
    ],
    de: [
        {
            question: "Wofür steht KI?",
            answers: ["Künstliche Intelligenz", "Kontrollierte Integration", "Komplexe Informatik", "Kalkulierte Information"],
            correct: 0
        },
        {
            question: "Welches Unternehmen hat ChatGPT entwickelt?",
            answers: ["Google", "Microsoft", "OpenAI", "Meta"],
            correct: 2
        },
        {
            question: "Was ist maschinelles Lernen?",
            answers: [
                "Programmierung expliziter Regeln für jedes Szenario",
                "Systeme, die aus Daten lernen um sich zu verbessern",
                "Roboter, die physisch lernen sich zu bewegen",
                "Computer, die menschliche Arbeiter ersetzen"
            ],
            correct: 1
        },
        {
            question: "Wovon ist ein neuronales Netzwerk inspiriert?",
            answers: ["Computerschaltkreisen", "Dem menschlichen Gehirn", "Spinnennetzen", "Sozialen Netzwerken"],
            correct: 1
        },
        {
            question: "Was ist 'Training' beim maschinellen Lernen?",
            answers: [
                "Robotern körperliche Übungen beibringen",
                "Der Prozess, bei dem ein Modell aus Daten lernt",
                "Menschen lernen KI zu bedienen",
                "Software-Updates installieren"
            ],
            correct: 1
        },
        {
            question: "Was ist ein 'Large Language Model' (LLM)?",
            answers: [
                "Ein sehr großes Wörterbuch",
                "Eine KI, die auf großen Textmengen trainiert wurde um Sprache zu verstehen",
                "Eine Programmiersprache für große Unternehmen",
                "Eine Art Computerspeicher"
            ],
            correct: 1
        },
        {
            question: "Was ist 'Deep Learning'?",
            answers: [
                "Lernen im Schlaf",
                "Neuronale Netzwerke mit vielen Schichten",
                "Jahrelanges KI-Studium",
                "Unterirdische Rechenzentren"
            ],
            correct: 1
        },
        {
            question: "Was ist ein 'Prompt' in der KI?",
            answers: [
                "Eine Erinnerungsbenachrichtigung",
                "Der Eingabetext für ein KI-Modell",
                "Eine Art KI-Fehler",
                "Die Antwort der KI"
            ],
            correct: 1
        },
        {
            question: "Was ist 'Computer Vision'?",
            answers: [
                "Ein Computerbildschirm",
                "KI, die Bilder interpretieren und verstehen kann",
                "Virtual-Reality-Brillen",
                "Hochauflösende Displays"
            ],
            correct: 1
        },
        {
            question: "Was ist der 'Turing-Test'?",
            answers: [
                "Eine Programmierzertifizierung",
                "Ein Test, ob KI menschenähnliche Intelligenz zeigen kann",
                "Ein Sicherheits-Schwachstellenscan",
                "Ein Geschwindigkeitsbenchmark für Computer"
            ],
            correct: 1
        },
        {
            question: "Was ist 'Natural Language Processing' (NLP)?",
            answers: [
                "Natürlich mit Computern sprechen",
                "KI, die menschliche Sprache versteht und erzeugt",
                "Eine Art Tastatur",
                "Sprachaufnahmetechnologie"
            ],
            correct: 1
        },
        {
            question: "Was ist 'Reinforcement Learning'?",
            answers: [
                "Lernen nur durch Wiederholung",
                "Lernen durch Belohnungen und Bestrafungen",
                "Verstärkung von Computer-Hardware",
                "Backup-Lernsysteme"
            ],
            correct: 1
        },
        {
            question: "Was ist eine KI-'Halluzination'?",
            answers: [
                "KI, die träumt",
                "KI, die selbstbewusst falsche Informationen erzeugt",
                "Visuelle Bildschirmfehler",
                "KI, die nicht antwortet"
            ],
            correct: 1
        },
        {
            question: "Was ist 'generative KI'?",
            answers: [
                "KI, die Strom erzeugt",
                "KI, die neue Inhalte wie Text, Bilder oder Musik erstellt",
                "Die nächste Computergeneration",
                "KI, die nur Daten analysiert"
            ],
            correct: 1
        },
        {
            question: "Wofür steht GPU im KI-Kontext?",
            answers: [
                "General Purpose Unit",
                "Graphics Processing Unit",
                "Gigabyte Power Usage",
                "Global Processing Utility"
            ],
            correct: 1
        }
    ],
    fr: [
        {
            question: "Que signifie IA ?",
            answers: ["Intelligence Artificielle", "Intégration Automatisée", "Internet Avancé", "Informatique Appliquée"],
            correct: 0
        },
        {
            question: "Quelle entreprise a développé ChatGPT ?",
            answers: ["Google", "Microsoft", "OpenAI", "Meta"],
            correct: 2
        },
        {
            question: "Qu'est-ce que l'apprentissage automatique ?",
            answers: [
                "Programmer des règles explicites pour chaque scénario",
                "Des systèmes qui apprennent des données pour améliorer leurs performances",
                "Des robots qui apprennent physiquement à se déplacer",
                "Des ordinateurs qui remplacent les travailleurs humains"
            ],
            correct: 1
        },
        {
            question: "De quoi s'inspire un réseau de neurones ?",
            answers: ["Des circuits informatiques", "Du cerveau humain", "Des toiles d'araignée", "Des réseaux sociaux"],
            correct: 1
        },
        {
            question: "Qu'est-ce que l'entraînement en apprentissage automatique ?",
            answers: [
                "Enseigner des exercices physiques aux robots",
                "Le processus par lequel un modèle apprend des données",
                "Les opérateurs humains apprenant à utiliser l'IA",
                "L'installation de mises à jour logicielles"
            ],
            correct: 1
        },
        {
            question: "Qu'est-ce qu'un 'Grand Modèle de Langage' (LLM) ?",
            answers: [
                "Un très gros dictionnaire",
                "Une IA entraînée sur de vastes données textuelles pour comprendre et générer du langage",
                "Un langage de programmation pour grandes entreprises",
                "Un type de mémoire informatique"
            ],
            correct: 1
        },
        {
            question: "Qu'est-ce que le 'deep learning' ?",
            answers: [
                "Apprendre en dormant",
                "Des réseaux de neurones avec de nombreuses couches",
                "Étudier l'IA pendant de nombreuses années",
                "Des centres de données souterrains"
            ],
            correct: 1
        },
        {
            question: "Qu'est-ce qu'un 'prompt' en IA ?",
            answers: [
                "Une notification de rappel",
                "Le texte d'entrée donné à un modèle d'IA",
                "Un type d'erreur IA",
                "La réponse de l'IA"
            ],
            correct: 1
        },
        {
            question: "Qu'est-ce que la 'vision par ordinateur' ?",
            answers: [
                "Un écran d'ordinateur",
                "L'IA capable d'interpréter et comprendre les images",
                "Des lunettes de réalité virtuelle",
                "Des écrans haute résolution"
            ],
            correct: 1
        },
        {
            question: "Qu'est-ce que le 'Test de Turing' ?",
            answers: [
                "Une certification en programmation",
                "Un test pour voir si l'IA peut exhiber une intelligence semblable à l'humain",
                "Un scan de vulnérabilité de sécurité",
                "Un benchmark de vitesse pour ordinateurs"
            ],
            correct: 1
        },
        {
            question: "Qu'est-ce que le 'traitement du langage naturel' (NLP) ?",
            answers: [
                "Parler naturellement aux ordinateurs",
                "L'IA comprenant et générant le langage humain",
                "Un type de clavier",
                "Une technologie d'enregistrement vocal"
            ],
            correct: 1
        },
        {
            question: "Qu'est-ce que l'apprentissage par renforcement ?",
            answers: [
                "Apprendre uniquement par répétition",
                "Apprendre par récompenses et pénalités",
                "Renforcer le matériel informatique",
                "Des systèmes d'apprentissage de secours"
            ],
            correct: 1
        },
        {
            question: "Qu'est-ce qu'une 'hallucination' IA ?",
            answers: [
                "L'IA qui rêve",
                "L'IA générant des informations fausses ou inventées avec assurance",
                "Des glitches visuels à l'écran",
                "L'IA refusant de répondre"
            ],
            correct: 1
        },
        {
            question: "Qu'est-ce que l'IA générative ?",
            answers: [
                "L'IA qui génère de l'électricité",
                "L'IA qui crée du nouveau contenu comme du texte, des images ou de la musique",
                "La prochaine génération d'ordinateurs",
                "L'IA qui analyse uniquement les données"
            ],
            correct: 1
        },
        {
            question: "Que signifie GPU dans le contexte de l'IA ?",
            answers: [
                "General Purpose Unit",
                "Graphics Processing Unit",
                "Gigabyte Power Usage",
                "Global Processing Utility"
            ],
            correct: 1
        }
    ],
    es: [
        {
            question: "¿Qué significa IA?",
            answers: ["Inteligencia Artificial", "Integración Automatizada", "Internet Avanzado", "Informática Aplicada"],
            correct: 0
        },
        {
            question: "¿Qué empresa desarrolló ChatGPT?",
            answers: ["Google", "Microsoft", "OpenAI", "Meta"],
            correct: 2
        },
        {
            question: "¿Qué es el aprendizaje automático?",
            answers: [
                "Programar reglas explícitas para cada escenario",
                "Sistemas que aprenden de los datos para mejorar su rendimiento",
                "Robots que aprenden físicamente a moverse",
                "Computadoras que reemplazan a los trabajadores humanos"
            ],
            correct: 1
        },
        {
            question: "¿En qué se inspira una red neuronal?",
            answers: ["Circuitos de computadora", "El cerebro humano", "Telarañas", "Redes sociales"],
            correct: 1
        },
        {
            question: "¿Qué es el 'entrenamiento' en aprendizaje automático?",
            answers: [
                "Enseñar ejercicios físicos a robots",
                "El proceso mediante el cual un modelo aprende de los datos",
                "Operadores humanos aprendiendo a usar IA",
                "Instalar actualizaciones de software"
            ],
            correct: 1
        },
        {
            question: "¿Qué es un 'Modelo de Lenguaje Grande' (LLM)?",
            answers: [
                "Un diccionario muy grande",
                "Una IA entrenada con grandes cantidades de texto para entender y generar lenguaje",
                "Un lenguaje de programación para grandes empresas",
                "Un tipo de memoria de computadora"
            ],
            correct: 1
        },
        {
            question: "¿Qué es el 'deep learning'?",
            answers: [
                "Aprender mientras duermes",
                "Redes neuronales con muchas capas",
                "Estudiar IA durante muchos años",
                "Centros de datos subterráneos"
            ],
            correct: 1
        },
        {
            question: "¿Qué es un 'prompt' en IA?",
            answers: [
                "Una notificación de recordatorio",
                "El texto de entrada dado a un modelo de IA",
                "Un tipo de error de IA",
                "La respuesta de la IA"
            ],
            correct: 1
        },
        {
            question: "¿Qué es la 'visión por computadora'?",
            answers: [
                "Una pantalla de computadora",
                "IA que puede interpretar y entender imágenes",
                "Gafas de realidad virtual",
                "Pantallas de alta resolución"
            ],
            correct: 1
        },
        {
            question: "¿Qué es el 'Test de Turing'?",
            answers: [
                "Una certificación de programación",
                "Una prueba para ver si la IA puede exhibir inteligencia similar a la humana",
                "Un escaneo de vulnerabilidades de seguridad",
                "Un benchmark de velocidad para computadoras"
            ],
            correct: 1
        },
        {
            question: "¿Qué es el 'procesamiento del lenguaje natural' (NLP)?",
            answers: [
                "Hablar naturalmente con computadoras",
                "IA que entiende y genera lenguaje humano",
                "Un tipo de teclado",
                "Tecnología de grabación de voz"
            ],
            correct: 1
        },
        {
            question: "¿Qué es el aprendizaje por refuerzo?",
            answers: [
                "Aprender solo por repetición",
                "Aprender a través de recompensas y penalizaciones",
                "Reforzar el hardware de la computadora",
                "Sistemas de aprendizaje de respaldo"
            ],
            correct: 1
        },
        {
            question: "¿Qué es una 'alucinación' de IA?",
            answers: [
                "IA que sueña",
                "IA que genera información falsa o inventada con confianza",
                "Fallos visuales en pantalla",
                "IA que se niega a responder"
            ],
            correct: 1
        },
        {
            question: "¿Qué es la IA generativa?",
            answers: [
                "IA que genera electricidad",
                "IA que crea nuevo contenido como texto, imágenes o música",
                "La próxima generación de computadoras",
                "IA que solo analiza datos"
            ],
            correct: 1
        },
        {
            question: "¿Qué significa GPU en el contexto de IA?",
            answers: [
                "General Purpose Unit",
                "Graphics Processing Unit",
                "Gigabyte Power Usage",
                "Global Processing Utility"
            ],
            correct: 1
        }
    ]
};

// Helper to get questions for current language
function getQuestions() {
    return AI_QUESTIONS[currentLanguage];
}

// ==================== TRANSLATION FUNCTIONS ====================
function t(key, replacements = {}) {
    let text = TRANSLATIONS[currentLanguage][key] || TRANSLATIONS['en'][key] || key;
    
    // Replace placeholders like {current}, {total}, {points}
    for (const [placeholder, value] of Object.entries(replacements)) {
        text = text.replace(`{${placeholder}}`, value);
    }
    
    return text;
}

function applyTranslations() {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = t(key);
        element.innerHTML = translation;
    });
    
    // Update language button states
    document.getElementById('lang-en').classList.toggle('active', currentLanguage === 'en');
    document.getElementById('lang-de').classList.toggle('active', currentLanguage === 'de');
    document.getElementById('lang-fr').classList.toggle('active', currentLanguage === 'fr');
    document.getElementById('lang-es').classList.toggle('active', currentLanguage === 'es');
}

function setLanguage(lang) {
    currentLanguage = lang;
    applyTranslations();
    
    // Store preference
    localStorage.setItem('aimaze-language', lang);
}

// ==================== GAME STATE ====================
let canvas, ctx;
let gameState = {
    maze: [],
    player: null,
    ghosts: [],
    bubbles: [],
    score: 0,
    lives: CONFIG.lives,
    questionsAnswered: 0,
    correctAnswers: 0,
    quizPoints: 0,
    dotsCollected: 0,
    totalDots: 0,
    gameRunning: false,
    gamePaused: false,
    ghostsFrozen: false,
    bubbleTimer: CONFIG.bubbleSpawnInterval / 1000,
    usedQuestions: [],
    currentQuestion: null
};

let lastTime = 0;
let bubbleSpawnTimer = 0;
let ghostFreezeTimer = 0;

// ==================== DOM ELEMENTS ====================
let screens = {};

// ==================== SURVEY STATE ====================
let surveyState = {
    questions: [],
    currentIndex: 0,
    correctAnswers: 0,
    totalQuestions: 3
};

// ==================== INITIALIZATION ====================
function init() {
    // Initialize screens after DOM is loaded
    screens = {
        start: document.getElementById('start-screen'),
        game: document.getElementById('game-screen'),
        results: document.getElementById('results-screen'),
        gameover: document.getElementById('gameover-screen'),
        questionModal: document.getElementById('question-modal'),
        surveyModal: document.getElementById('survey-modal'),
        surveyResults: document.getElementById('survey-results-screen')
    };
    
    canvas = document.getElementById('game-canvas');
    if (canvas) {
        ctx = canvas.getContext('2d');
        canvas.width = CONFIG.mazeWidth * CONFIG.cellSize;
        canvas.height = CONFIG.mazeHeight * CONFIG.cellSize;
    }
    
    // Game event listeners
    document.getElementById('start-btn').addEventListener('click', startGame);
    document.getElementById('play-again-btn').addEventListener('click', startGame);
    document.getElementById('retry-btn').addEventListener('click', startGame);
    
    // Survey event listeners
    const surveyLink = document.getElementById('survey-link');
    const playGameBtn = document.getElementById('play-game-btn');
    const backToStartLink = document.getElementById('back-to-start');
    
    if (surveyLink) {
        surveyLink.addEventListener('click', function(e) {
            e.preventDefault();
            startSurvey();
        });
    }
    if (playGameBtn) {
        playGameBtn.addEventListener('click', startGame);
    }
    if (backToStartLink) {
        backToStartLink.addEventListener('click', function(e) {
            e.preventDefault();
            backToStart();
        });
    }
    
    // Language event listeners
    document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));
    document.getElementById('lang-de').addEventListener('click', () => setLanguage('de'));
    document.getElementById('lang-fr').addEventListener('click', () => setLanguage('fr'));
    document.getElementById('lang-es').addEventListener('click', () => setLanguage('es'));
    
    // Load saved language preference or default to English
    const savedLang = localStorage.getItem('aimaze-language') || 'en';
    currentLanguage = savedLang;
    applyTranslations();
    
    document.addEventListener('keydown', handleKeyDown);
}

function startGame() {
    // Reset game state
    gameState = {
        maze: JSON.parse(JSON.stringify(MAZE_TEMPLATE)),
        player: { x: 12, y: 16, direction: null, nextDirection: null },
        ghosts: [
            { x: 12, y: 10, direction: 'up', color: '#D72339' }, // Siemens Red ghost
            { x: 11, y: 10, direction: 'left', color: '#FF9000' }, // Siemens Orange ghost
        ],
        bubbles: [],
        floatingTexts: [],
        score: 0,
        lives: CONFIG.lives,
        questionsAnswered: 0,
        correctAnswers: 0,
        quizPoints: 0,
        dotsCollected: 0,
        totalDots: 0,
        gameRunning: true,
        gamePaused: false,
        ghostsFrozen: false,
        bubbleTimer: CONFIG.bubbleSpawnInterval / 1000,
        usedQuestions: [],
        currentQuestion: null
    };
    
    // Count total dots
    for (let y = 0; y < CONFIG.mazeHeight; y++) {
        for (let x = 0; x < CONFIG.mazeWidth; x++) {
            if (gameState.maze[y][x] === 2) {
                gameState.totalDots++;
            }
        }
    }
    
    bubbleSpawnTimer = 0;
    ghostFreezeTimer = 0;
    lastTime = performance.now();
    
    // Show game screen
    showScreen('game');
    updateUI();
    
    // Start game loop
    requestAnimationFrame(gameLoop);
}

// ==================== GAME LOOP ====================
function gameLoop(currentTime) {
    if (!gameState.gameRunning) return;
    
    const deltaTime = currentTime - lastTime;
    lastTime = currentTime;
    
    if (!gameState.gamePaused) {
        update(deltaTime);
        render();
    }
    
    requestAnimationFrame(gameLoop);
}

function update(deltaTime) {
    // Update bubble spawn timer
    bubbleSpawnTimer += deltaTime;
    gameState.bubbleTimer = Math.max(0, Math.ceil((CONFIG.bubbleSpawnInterval - bubbleSpawnTimer) / 1000));
    
    if (bubbleSpawnTimer >= CONFIG.bubbleSpawnInterval && gameState.questionsAnswered < CONFIG.totalQuestions) {
        spawnBubble();
        bubbleSpawnTimer = 0;
    }
    
    // Update ghost freeze timer
    if (gameState.ghostsFrozen) {
        ghostFreezeTimer -= deltaTime;
        if (ghostFreezeTimer <= 0) {
            gameState.ghostsFrozen = false;
        }
    }
    
    // Update player
    updatePlayer();
    
    // Update ghosts
    if (!gameState.ghostsFrozen) {
        updateGhosts();
    }
    
    // Check collisions
    checkCollisions();
    
    // Update UI
    updateUI();
}

// ==================== PLAYER MOVEMENT ====================
function updatePlayer() {
    const player = gameState.player;
    
    // Check if we can change to the requested direction
    if (player.nextDirection && canMove(player.x, player.y, player.nextDirection)) {
        const oldDirection = player.direction;
        player.direction = player.nextDirection;
        
        // Snap to grid center when changing direction
        const isVertical = player.direction === 'up' || player.direction === 'down';
        const wasVertical = oldDirection === 'up' || oldDirection === 'down';
        
        if (isVertical && !wasVertical) {
            // Changing to vertical movement - snap X to center
            player.x = Math.round(player.x);
        } else if (!isVertical && wasVertical) {
            // Changing to horizontal movement - snap Y to center
            player.y = Math.round(player.y);
        }
    }
    
    if (player.direction && canMove(player.x, player.y, player.direction)) {
        const speed = CONFIG.playerSpeed * 0.05;
        
        switch (player.direction) {
            case 'up': player.y -= speed; break;
            case 'down': player.y += speed; break;
            case 'left': player.x -= speed; break;
            case 'right': player.x += speed; break;
        }
        
        // Wrap around only on tunnel row
        const playerRow = Math.floor(player.y + 0.5);
        if (playerRow === CONFIG.tunnelRow) {
            if (player.x < 0) player.x = CONFIG.mazeWidth - 1;
            if (player.x >= CONFIG.mazeWidth) player.x = 0;
        }
    }
    
    // Collect dots
    const cellX = Math.floor(player.x + 0.5);
    const cellY = Math.floor(player.y + 0.5);
    
    if (cellY >= 0 && cellY < CONFIG.mazeHeight && cellX >= 0 && cellX < CONFIG.mazeWidth) {
        if (gameState.maze[cellY][cellX] === 2) {
            gameState.maze[cellY][cellX] = 0;
            gameState.score += CONFIG.pointsPerDot;
            gameState.dotsCollected++;
        }
    }
    
    // Check bubble collision
    for (let i = gameState.bubbles.length - 1; i >= 0; i--) {
        const bubble = gameState.bubbles[i];
        const dist = Math.sqrt(Math.pow(player.x - bubble.x, 2) + Math.pow(player.y - bubble.y, 2));
        
        if (dist < 0.8) {
            collectBubble(i);
            break;
        }
    }
}

function canMove(x, y, direction) {
    let newX = x;
    let newY = y;
    const offset = 0.4;
    
    switch (direction) {
        case 'up': newY -= offset; break;
        case 'down': newY += offset; break;
        case 'left': newX -= offset; break;
        case 'right': newX += offset; break;
    }
    
    const cellY = Math.floor(newY + 0.5);
    
    // Wrap check - only allow on tunnel row
    if (newX < 0 || newX >= CONFIG.mazeWidth) {
        return cellY === CONFIG.tunnelRow;
    }
    
    const cellX = Math.floor(newX + 0.5);
    
    if (cellY < 0 || cellY >= CONFIG.mazeHeight) return false;
    if (cellX < 0 || cellX >= CONFIG.mazeWidth) return cellY === CONFIG.tunnelRow;
    
    return gameState.maze[cellY][cellX] !== 1;
}

// ==================== GHOST AI ====================
function updateGhosts() {
    gameState.ghosts.forEach(ghost => {
        const speed = CONFIG.ghostSpeed * 0.05;
        
        // Move in current direction
        let newX = ghost.x;
        let newY = ghost.y;
        
        switch (ghost.direction) {
            case 'up': newY -= speed; break;
            case 'down': newY += speed; break;
            case 'left': newX -= speed; break;
            case 'right': newX += speed; break;
        }
        
        const ghostRow = Math.floor(newY + 0.5);
        
        // Wrap around only on tunnel row
        if (ghostRow === CONFIG.tunnelRow) {
            if (newX < 0) newX = CONFIG.mazeWidth - 1;
            if (newX >= CONFIG.mazeWidth) newX = 0;
        }
        
        const cellX = Math.floor(newX + 0.5);
        const cellY = Math.floor(newY + 0.5);
        
        // Check if can continue in current direction
        if (cellY >= 0 && cellY < CONFIG.mazeHeight && cellX >= 0 && cellX < CONFIG.mazeWidth && 
            gameState.maze[cellY][cellX] !== 1) {
            ghost.x = newX;
            ghost.y = newY;
        }
        
        // Change direction at intersections
        const currentCellX = Math.floor(ghost.x + 0.5);
        const currentCellY = Math.floor(ghost.y + 0.5);
        
        if (Math.abs(ghost.x - currentCellX) < 0.1 && Math.abs(ghost.y - currentCellY) < 0.1) {
            const possibleDirections = [];
            const opposites = { 'up': 'down', 'down': 'up', 'left': 'right', 'right': 'left' };
            
            ['up', 'down', 'left', 'right'].forEach(dir => {
                if (dir !== opposites[ghost.direction] && canGhostMove(currentCellX, currentCellY, dir)) {
                    possibleDirections.push(dir);
                }
            });
            
            if (possibleDirections.length > 0) {
                // Simple AI: sometimes chase player, sometimes random
                if (Math.random() < 0.6) {
                    // Chase player
                    const player = gameState.player;
                    let bestDir = ghost.direction;
                    let bestDist = Infinity;
                    
                    possibleDirections.forEach(dir => {
                        let testX = currentCellX;
                        let testY = currentCellY;
                        
                        switch (dir) {
                            case 'up': testY--; break;
                            case 'down': testY++; break;
                            case 'left': testX--; break;
                            case 'right': testX++; break;
                        }
                        
                        const dist = Math.sqrt(Math.pow(player.x - testX, 2) + Math.pow(player.y - testY, 2));
                        if (dist < bestDist) {
                            bestDist = dist;
                            bestDir = dir;
                        }
                    });
                    
                    ghost.direction = bestDir;
                } else {
                    // Random direction
                    ghost.direction = possibleDirections[Math.floor(Math.random() * possibleDirections.length)];
                }
            } else if (canGhostMove(currentCellX, currentCellY, opposites[ghost.direction])) {
                ghost.direction = opposites[ghost.direction];
            }
        }
    });
}

function canGhostMove(x, y, direction) {
    let newX = x;
    let newY = y;
    
    switch (direction) {
        case 'up': newY--; break;
        case 'down': newY++; break;
        case 'left': newX--; break;
        case 'right': newX++; break;
    }
    
    // Only allow wrap on tunnel row
    if (newX < 0 || newX >= CONFIG.mazeWidth) return y === CONFIG.tunnelRow;
    if (newY < 0 || newY >= CONFIG.mazeHeight) return false;
    
    return gameState.maze[newY][newX] !== 1;
}

// ==================== COLLISIONS ====================
function checkCollisions() {
    // Don't check collisions when game is paused (question displayed)
    if (gameState.gamePaused) return;
    
    const player = gameState.player;
    
    // Check collisions with each ghost
    for (let i = gameState.ghosts.length - 1; i >= 0; i--) {
        const ghost = gameState.ghosts[i];
        const dist = Math.sqrt(Math.pow(player.x - ghost.x, 2) + Math.pow(player.y - ghost.y, 2));
        
        if (dist < 0.7) {
            if (gameState.ghostsFrozen) {
                // Catch the ghost when frozen - bonus points!
                catchGhost(i);
            } else {
                // Ghost catches player
                playerHit();
                break;
            }
        }
    }
}

function catchGhost(index) {
    const ghost = gameState.ghosts[index];
    
    // Store position for floating text
    gameState.floatingTexts = gameState.floatingTexts || [];
    gameState.floatingTexts.push({
        x: ghost.x,
        y: ghost.y,
        text: '+' + CONFIG.pointsPerGhost,
        life: 60 // frames to display
    });
    
    // Remove the ghost
    gameState.ghosts.splice(index, 1);
    
    // Award bonus points
    gameState.score += CONFIG.pointsPerGhost;
}

function playerHit() {
    gameState.lives--;
    
    if (gameState.lives <= 0) {
        gameOver();
    } else {
        // Reset positions
        gameState.player.x = 12;
        gameState.player.y = 16;
        gameState.player.direction = null;
        
        // Reset ghosts
        gameState.ghosts.forEach((ghost, index) => {
            ghost.x = 11 + index;
            ghost.y = 10;
        });
    }
    
    updateUI();
}

// ==================== BUBBLES & QUESTIONS ====================
function spawnBubble() {
    // Find valid spawn location
    const validPositions = [];
    
    for (let y = 0; y < CONFIG.mazeHeight; y++) {
        for (let x = 0; x < CONFIG.mazeWidth; x++) {
            if (gameState.maze[y][x] !== 1) {
                // Check distance from player
                const dist = Math.sqrt(Math.pow(gameState.player.x - x, 2) + Math.pow(gameState.player.y - y, 2));
                if (dist > 5) {
                    validPositions.push({ x, y });
                }
            }
        }
    }
    
    if (validPositions.length > 0) {
        const pos = validPositions[Math.floor(Math.random() * validPositions.length)];
        gameState.bubbles.push({
            x: pos.x,
            y: pos.y,
            pulse: 0
        });
    }
}

function collectBubble(index) {
    gameState.bubbles.splice(index, 1);
    showQuestion();
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function showQuestion() {
    gameState.gamePaused = true;
    
    const questions = getQuestions();
    
    // Get unused question indices and shuffle them
    const availableIndices = questions
        .map((_, i) => i)
        .filter(i => !gameState.usedQuestions.includes(i));
    
    if (availableIndices.length === 0) {
        gameState.gamePaused = false;
        return;
    }
    
    // Pick a random question from available ones
    const shuffledIndices = shuffleArray(availableIndices);
    const questionIndex = shuffledIndices[0];
    gameState.usedQuestions.push(questionIndex);
    
    const originalQuestion = questions[questionIndex];
    
    // Create shuffled answers with original index tracking
    const answersWithIndex = originalQuestion.answers.map((answer, i) => ({
        text: answer,
        originalIndex: i
    }));
    const shuffledAnswers = shuffleArray(answersWithIndex);
    
    // Find new position of correct answer
    const newCorrectIndex = shuffledAnswers.findIndex(a => a.originalIndex === originalQuestion.correct);
    
    gameState.currentQuestion = {
        question: originalQuestion.question,
        answers: shuffledAnswers.map(a => a.text),
        correct: newCorrectIndex
    };
    
    // Display question
    document.getElementById('question-text').textContent = gameState.currentQuestion.question;
    
    const answersContainer = document.getElementById('answers-container');
    answersContainer.innerHTML = '';
    
    gameState.currentQuestion.answers.forEach((answer, i) => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.textContent = answer;
        btn.addEventListener('click', () => selectAnswer(i));
        answersContainer.appendChild(btn);
    });
    
    document.getElementById('feedback').classList.add('hidden');
    screens.questionModal.classList.remove('hidden');
}

function selectAnswer(answerIndex) {
    const isCorrect = answerIndex === gameState.currentQuestion.correct;
    const buttons = document.querySelectorAll('.answer-btn');
    
    buttons.forEach((btn, i) => {
        btn.disabled = true;
        if (i === gameState.currentQuestion.correct) {
            btn.classList.add('correct');
        } else if (i === answerIndex && !isCorrect) {
            btn.classList.add('incorrect');
        }
    });
    
    const feedback = document.getElementById('feedback');
    feedback.classList.remove('hidden', 'correct', 'incorrect');
    
    if (isCorrect) {
        feedback.classList.add('correct');
        feedback.textContent = '✓ ' + t('correctFeedback', { points: CONFIG.pointsPerQuestion });
        gameState.score += CONFIG.pointsPerQuestion;
        gameState.quizPoints += CONFIG.pointsPerQuestion;
        gameState.correctAnswers++;
        gameState.ghostsFrozen = true;
        ghostFreezeTimer = CONFIG.ghostFreezeTime;
    } else {
        feedback.classList.add('incorrect');
        feedback.textContent = '✗ ' + t('incorrectFeedback');
        spawnGhost();
    }
    
    gameState.questionsAnswered++;
    
    // Close modal after delay
    setTimeout(() => {
        screens.questionModal.classList.add('hidden');
        gameState.gamePaused = false;
        
        // Check if game should end
        if (gameState.questionsAnswered >= CONFIG.totalQuestions) {
            showResults();
        }
        
        updateUI();
    }, 2000);
}

function spawnGhost() {
    // Siemens brand colors for ghosts
    const colors = ['#D72339', '#FF9000', '#206ED9', '#28BF66', '#EDBF00'];
    const newGhost = {
        x: 12,
        y: 10,
        direction: ['up', 'down', 'left', 'right'][Math.floor(Math.random() * 4)],
        color: colors[gameState.ghosts.length % colors.length]
    };
    gameState.ghosts.push(newGhost);
}

// ==================== SIEMENS COLORS ====================
const COLORS = {
    background: '#000028',      // Deep Blue 900
    wallFill: '#005159',        // Teal
    wallBorder: '#009999',      // Petrol
    dot: '#00FFB9',             // Bold Green
    bubble: '#FF9000',          // Orange
    bubbleFill: 'rgba(255, 144, 0, 0.25)',
    player: '#00CCCC',          // Interactive Coral
    frozenGhost: '#4C4C68',     // Deep Blue 700
    text: '#FFFFFF'
};

// ==================== RENDERING ====================
function render() {
    ctx.fillStyle = COLORS.background;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw maze
    for (let y = 0; y < CONFIG.mazeHeight; y++) {
        for (let x = 0; x < CONFIG.mazeWidth; x++) {
            const cell = gameState.maze[y][x];
            const px = x * CONFIG.cellSize;
            const py = y * CONFIG.cellSize;
            
            if (cell === 1) {
                // Wall - Siemens Teal
                ctx.fillStyle = COLORS.wallFill;
                ctx.fillRect(px, py, CONFIG.cellSize, CONFIG.cellSize);
                
                // Wall border effect - Siemens Petrol
                ctx.strokeStyle = COLORS.wallBorder;
                ctx.lineWidth = 2;
                ctx.strokeRect(px + 1, py + 1, CONFIG.cellSize - 2, CONFIG.cellSize - 2);
            } else if (cell === 2) {
                // Dot - Siemens Bold Green
                ctx.fillStyle = COLORS.dot;
                ctx.beginPath();
                ctx.arc(px + CONFIG.cellSize / 2, py + CONFIG.cellSize / 2, 3, 0, Math.PI * 2);
                ctx.fill();
            }
        }
    }
    
    // Draw bubbles - Siemens Orange
    gameState.bubbles.forEach(bubble => {
        const px = bubble.x * CONFIG.cellSize + CONFIG.cellSize / 2;
        const py = bubble.y * CONFIG.cellSize + CONFIG.cellSize / 2;
        
        bubble.pulse = (bubble.pulse + 0.1) % (Math.PI * 2);
        const pulseSize = Math.sin(bubble.pulse) * 3;
        
        // Glow effect
        ctx.shadowBlur = 15;
        ctx.shadowColor = COLORS.bubble;
        
        // Outer ring
        ctx.strokeStyle = COLORS.bubble;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(px, py, 10 + pulseSize, 0, Math.PI * 2);
        ctx.stroke();
        
        // Inner fill
        ctx.fillStyle = COLORS.bubbleFill;
        ctx.beginPath();
        ctx.arc(px, py, 8 + pulseSize, 0, Math.PI * 2);
        ctx.fill();
        
        // Question mark
        ctx.shadowBlur = 0;
        ctx.fillStyle = COLORS.text;
        ctx.font = 'bold 12px Segoe UI, Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('?', px, py);
    });
    
    ctx.shadowBlur = 0;
    
    // Draw ghosts
    gameState.ghosts.forEach(ghost => {
        const px = ghost.x * CONFIG.cellSize + CONFIG.cellSize / 2;
        const py = ghost.y * CONFIG.cellSize + CONFIG.cellSize / 2;
        const size = CONFIG.cellSize * 0.4;
        
        // Ghost body
        ctx.fillStyle = gameState.ghostsFrozen ? COLORS.frozenGhost : ghost.color;
        ctx.beginPath();
        ctx.arc(px, py - size * 0.2, size, Math.PI, 0, false);
        ctx.lineTo(px + size, py + size * 0.6);
        
        // Wavy bottom
        for (let i = 0; i < 4; i++) {
            const waveX = px + size - (i + 0.5) * (size * 2 / 4);
            ctx.quadraticCurveTo(waveX + size / 8, py + size * 0.3, waveX, py + size * 0.6);
        }
        
        ctx.closePath();
        ctx.fill();
        
        // Eyes
        ctx.fillStyle = COLORS.text;
        ctx.beginPath();
        ctx.arc(px - size * 0.3, py - size * 0.3, size * 0.25, 0, Math.PI * 2);
        ctx.arc(px + size * 0.3, py - size * 0.3, size * 0.25, 0, Math.PI * 2);
        ctx.fill();
        
        // Pupils
        ctx.fillStyle = COLORS.background;
        const pupilOffsetX = ghost.direction === 'left' ? -2 : ghost.direction === 'right' ? 2 : 0;
        const pupilOffsetY = ghost.direction === 'up' ? -2 : ghost.direction === 'down' ? 2 : 0;
        ctx.beginPath();
        ctx.arc(px - size * 0.3 + pupilOffsetX, py - size * 0.3 + pupilOffsetY, size * 0.12, 0, Math.PI * 2);
        ctx.arc(px + size * 0.3 + pupilOffsetX, py - size * 0.3 + pupilOffsetY, size * 0.12, 0, Math.PI * 2);
        ctx.fill();
    });
    
    // Draw player (Pac-Man style)
    const player = gameState.player;
    const playerPx = player.x * CONFIG.cellSize + CONFIG.cellSize / 2;
    const playerPy = player.y * CONFIG.cellSize + CONFIG.cellSize / 2;
    const playerSize = CONFIG.cellSize * 0.4;
    
    // Determine mouth angle based on direction
    let startAngle = 0.2;
    let endAngle = Math.PI * 2 - 0.2;
    
    const time = performance.now() / 100;
    const mouthOpen = Math.abs(Math.sin(time)) * 0.5;
    
    switch (player.direction) {
        case 'right':
            startAngle = mouthOpen;
            endAngle = Math.PI * 2 - mouthOpen;
            break;
        case 'left':
            startAngle = Math.PI + mouthOpen;
            endAngle = Math.PI - mouthOpen;
            break;
        case 'up':
            startAngle = -Math.PI / 2 + mouthOpen;
            endAngle = -Math.PI / 2 - mouthOpen + Math.PI * 2;
            break;
        case 'down':
            startAngle = Math.PI / 2 + mouthOpen;
            endAngle = Math.PI / 2 - mouthOpen + Math.PI * 2;
            break;
    }
    
    ctx.fillStyle = COLORS.player;
    ctx.beginPath();
    ctx.moveTo(playerPx, playerPy);
    ctx.arc(playerPx, playerPy, playerSize, startAngle, endAngle);
    ctx.closePath();
    ctx.fill();
    
    // Frozen indicator - Siemens style
    if (gameState.ghostsFrozen) {
        ctx.fillStyle = 'rgba(0, 255, 185, 0.15)';
        ctx.fillRect(0, 0, canvas.width, 40);
        ctx.fillStyle = COLORS.dot;
        ctx.font = 'bold 14px Segoe UI, Arial';
        ctx.textAlign = 'center';
        ctx.fillText(t('ghostsFrozen'), canvas.width / 2, 26);
    }
    
    // Draw floating texts (bonus points)
    if (gameState.floatingTexts) {
        for (let i = gameState.floatingTexts.length - 1; i >= 0; i--) {
            const ft = gameState.floatingTexts[i];
            const px = ft.x * CONFIG.cellSize + CONFIG.cellSize / 2;
            const py = ft.y * CONFIG.cellSize + CONFIG.cellSize / 2 - (60 - ft.life) * 0.5;
            const alpha = ft.life / 60;
            
            ctx.fillStyle = `rgba(0, 255, 185, ${alpha})`;
            ctx.font = 'bold 16px Segoe UI, Arial';
            ctx.textAlign = 'center';
            ctx.fillText(ft.text, px, py);
            
            ft.life--;
            if (ft.life <= 0) {
                gameState.floatingTexts.splice(i, 1);
            }
        }
    }
}

// ==================== UI UPDATES ====================
function updateUI() {
    document.getElementById('score').textContent = gameState.score;
    document.getElementById('lives').textContent = '❤️'.repeat(gameState.lives);
    document.getElementById('questions-count').textContent = `${gameState.questionsAnswered}/${CONFIG.totalQuestions}`;
    document.getElementById('bubble-timer').textContent = `${gameState.bubbleTimer}s`;
}

// ==================== SCREEN MANAGEMENT ====================
function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.add('hidden'));
    
    switch (screenName) {
        case 'start':
            screens.start.classList.remove('hidden');
            break;
        case 'game':
            screens.game.classList.remove('hidden');
            break;
        case 'results':
            screens.results.classList.remove('hidden');
            break;
        case 'gameover':
            screens.gameover.classList.remove('hidden');
            break;
        case 'surveyResults':
            screens.surveyResults.classList.remove('hidden');
            break;
    }
}

function showResults() {
    gameState.gameRunning = false;
    
    document.getElementById('final-score').textContent = gameState.score;
    document.getElementById('correct-answers').textContent = `${gameState.correctAnswers}/${gameState.questionsAnswered}`;
    document.getElementById('quiz-points').textContent = gameState.quizPoints;
    document.getElementById('dots-collected').textContent = gameState.dotsCollected;
    
    // Calculate grade
    const percentage = (gameState.correctAnswers / CONFIG.totalQuestions) * 100;
    const gradeEl = document.getElementById('grade');
    
    if (percentage >= 80) {
        gradeEl.textContent = '🏆 ' + t('aiExpert');
        gradeEl.className = 'grade excellent';
    } else if (percentage >= 50) {
        gradeEl.textContent = '⭐ ' + t('aiEnthusiast');
        gradeEl.className = 'grade good';
    } else {
        gradeEl.textContent = '📚 ' + t('keepLearning');
        gradeEl.className = 'grade average';
    }
    
    showScreen('results');
}

function gameOver() {
    gameState.gameRunning = false;
    
    document.getElementById('gameover-score').textContent = gameState.score;
    document.getElementById('gameover-questions').textContent = `${gameState.questionsAnswered}/${CONFIG.totalQuestions}`;
    
    showScreen('gameover');
}

// ==================== INPUT HANDLING ====================
function handleKeyDown(e) {
    if (!gameState.gameRunning || gameState.gamePaused) return;
    
    switch (e.key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
            gameState.player.nextDirection = 'up';
            e.preventDefault();
            break;
        case 'ArrowDown':
        case 's':
        case 'S':
            gameState.player.nextDirection = 'down';
            e.preventDefault();
            break;
        case 'ArrowLeft':
        case 'a':
        case 'A':
            gameState.player.nextDirection = 'left';
            e.preventDefault();
            break;
        case 'ArrowRight':
        case 'd':
        case 'D':
            gameState.player.nextDirection = 'right';
            e.preventDefault();
            break;
    }
}

// ==================== SURVEY FUNCTIONS ====================
function startSurvey() {
    // Reset survey state
    surveyState = {
        questions: [],
        currentIndex: 0,
        correctAnswers: 0,
        totalQuestions: 3
    };
    
    // Select 3 random questions from current language
    const shuffledQuestions = shuffleArray([...getQuestions()]);
    surveyState.questions = shuffledQuestions.slice(0, 3);
    
    // Hide start screen and show survey
    screens.start.classList.add('hidden');
    showSurveyQuestion();
}

function showSurveyQuestion() {
    const question = surveyState.questions[surveyState.currentIndex];
    
    // Shuffle answers
    const answersWithIndex = question.answers.map((answer, i) => ({
        text: answer,
        originalIndex: i
    }));
    const shuffledAnswers = shuffleArray(answersWithIndex);
    const newCorrectIndex = shuffledAnswers.findIndex(a => a.originalIndex === question.correct);
    
    // Store current question data
    surveyState.currentQuestion = {
        question: question.question,
        answers: shuffledAnswers.map(a => a.text),
        correct: newCorrectIndex
    };
    
    // Update progress
    document.getElementById('survey-progress').textContent = 
        t('questionProgress', { current: surveyState.currentIndex + 1, total: surveyState.totalQuestions });
    
    // Display question
    document.getElementById('survey-question-text').textContent = surveyState.currentQuestion.question;
    
    const answersContainer = document.getElementById('survey-answers-container');
    answersContainer.innerHTML = '';
    
    surveyState.currentQuestion.answers.forEach((answer, i) => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.textContent = answer;
        btn.addEventListener('click', () => selectSurveyAnswer(i));
        answersContainer.appendChild(btn);
    });
    
    document.getElementById('survey-feedback').classList.add('hidden');
    screens.surveyModal.classList.remove('hidden');
}

function selectSurveyAnswer(answerIndex) {
    const isCorrect = answerIndex === surveyState.currentQuestion.correct;
    const buttons = document.querySelectorAll('#survey-answers-container .answer-btn');
    
    buttons.forEach((btn, i) => {
        btn.disabled = true;
        if (i === surveyState.currentQuestion.correct) {
            btn.classList.add('correct');
        } else if (i === answerIndex && !isCorrect) {
            btn.classList.add('incorrect');
        }
    });
    
    const feedback = document.getElementById('survey-feedback');
    feedback.classList.remove('hidden', 'correct', 'incorrect');
    
    if (isCorrect) {
        feedback.classList.add('correct');
        feedback.textContent = t('correct');
        surveyState.correctAnswers++;
    } else {
        feedback.classList.add('incorrect');
        feedback.textContent = t('incorrect');
    }
    
    surveyState.currentIndex++;
    
    // Move to next question or show results
    setTimeout(() => {
        screens.surveyModal.classList.add('hidden');
        
        if (surveyState.currentIndex >= surveyState.totalQuestions) {
            showSurveyResults();
        } else {
            showSurveyQuestion();
        }
    }, 1500);
}

function showSurveyResults() {
    const percentage = Math.round((surveyState.correctAnswers / surveyState.totalQuestions) * 100);
    
    document.getElementById('survey-correct').textContent = 
        `${surveyState.correctAnswers}/${surveyState.totalQuestions}`;
    document.getElementById('survey-score').textContent = `${percentage}%`;
    
    const gradeEl = document.getElementById('survey-grade');
    
    if (percentage >= 67) {
        gradeEl.textContent = t('aiExpert');
        gradeEl.className = 'grade excellent';
    } else if (percentage >= 34) {
        gradeEl.textContent = t('aiEnthusiast');
        gradeEl.className = 'grade good';
    } else {
        gradeEl.textContent = t('keepLearning');
        gradeEl.className = 'grade average';
    }
    
    showScreen('surveyResults');
}

function backToStart() {
    showScreen('start');
}

// ==================== START ====================
window.addEventListener('DOMContentLoaded', init);
