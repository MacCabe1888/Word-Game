let game = {
    name: "Hitchcock's\xa0 Rope",
    description: 'Are you a "master of suspense" ? See if you can guess the names of these mystery Hitchcock films!',
    wins: 0,
    losses: 0,
    guessesLeft: 3,
    alphabet: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    yourGuesses: "",
    answerArray: [],
    lastAnswer: [],

    nameText: document.getElementById("name-text"),
    descriptionText: document.getElementById("description-text"),
    winsText: document.getElementById("wins-text"),
    lossesText: document.getElementById("losses-text"),
    guessesLeftText: document.getElementById("guesses-left-text"),
    yourGuessesText: document.getElementById("your-guesses-text"),
    answerArrayText: document.getElementById("answer-array-text"),
    lastAnswerText: document.getElementById("last-answer-text"),
    lastAnswerImg: document.getElementById("last-answer-img"),
    
    play: function() {
    
    movies = ["THE-LODGER:-A-STORY-OF-THE-LONDON-FOG", "THE-39-STEPS", "THE-LADY-VANISHES", "REBECCA", "SABOTEUR", "SHADOW-OF-A-DOUBT", "AVENTURE-MALGACHE",
    "BON-VOYAGE", "LIFEBOAT", "SPELLBOUND", "NOTORIOUS", "ROPE", "STRANGERS-ON-A-TRAIN", "DIAL-M-FOR-MURDER", "REAR-WINDOW", "THE-TROUBLE-WITH-HARRY",
    "TO-CATCH-A-THIEF", "THE-MAN-WHO-KNEW-TOO-MUCH", "VERTIGO", "NORTH-BY-NORTHWEST", "PSYCHO", "THE-BIRDS", "MARNIE", "TORN-CURTAIN", "TOPAZ", "FAMILY-PLOT"];

    themes = [new Audio("assets/audio/restored-version-of-hitchcock-classic-the-lodger-with-nitin-sawhney-score.mp3"), new Audio("assets/audio/the-39-steps-hitchcock-1935-opening-title-sequence.mp3"),
    new Audio("assets/audio/the-lady-vanishes-1938.mp3"), new Audio("assets/audio/franz-waxman-theme-from-rebecca-1940.mp3"), new Audio("assets/audio/saboteur-1942-opening-title-sequence.mp3"),
    new Audio("assets/audio/shadow-of-a-doubt-1943-instrumental.mp3"), new Audio("assets/audio/benjamin-frankel-music-from-alfred-hitchcocks-aventure-malgache-1944.mp3"),
    new Audio("assets/audio/benjamin-frankel-music-from-alfred-hitchcocks-bon-voyage-1944.mp3"), new Audio("assets/audio/alfred-hitchcock-lifeboat-extras.mp3"), 
    new Audio("assets/audio/miklos-rozsa-spellbound-main-theme.mp3"), new Audio("assets/audio/notorious-1946-theatrical-trailer.mp3"), new Audio("assets/audio/rope-1948-opening-title-sequence.mp3"),
    new Audio("assets/audio/strangers-on-a-train-1951-opening-title-sequence.mp3"), new Audio("assets/audio/dial-m-for-murder-theme.mp3"),
    new Audio("assets/audio/rear-window-1954-opening-title-sequence.mp3"), new Audio("assets/audio/bernard-herrmann-the-trouble-with-harry-suite-from-the-film-music-1955.mp3"),
    new Audio("assets/audio/to-catch-a-thief-official-trailer-cary-grant-movie-1955.mp3"), new Audio("assets/audio/music-composed-by-bernard-herrmann-man-who-knew-too-much-main-title-keith-lockhardt.mp3"),
    new Audio("assets/audio/bernard-herrmann-vertigo-theme.mp3"), new Audio("assets/audio/north-by-northwest-theme.mp3"), new Audio("assets/audio/bernard-herrmann-psycho-theme.mp3"),
    new Audio("assets/audio/the-birds-1963-title-sequence.mp3"), new Audio("assets/audio/theme-from-marnie-bernard-herrmann-tippi-hedren-pictures-best-hd-quality.mp3"),
    new Audio("assets/audio/john-addison-torn-curtain-main-title.mp3"), new Audio("assets/audio/topaz-1969-intro.mp3"), new Audio("assets/audio/john-williams-family-plot-end-credits-end-titles.mp3"),];
    
    images = ["assets/images/The Lodger_ A Story of the London Fog.jpg", "assets/images/The 39 Steps.jpg", "assets/images/The Lady Vanishes.jpg", "assets/images/Rebecca.jpg", "assets/images/Saboteur.jpg",
    "assets/images/Shadow of a Doubt.jpg", "assets/images/Aventure Malgache.jpg", "assets/images/Bon Voyage.jpg", "assets/images/Lifeboat.jpg", "assets/images/Spellbound.jpg", "assets/images/Notorious.jpg",
    "assets/images/Rope.jpg", "assets/images/Strangers on a Train.jpg", "assets/images/Dial M for Murder.jpg", "assets/images/Rear Window.png", "assets/images/The Trouble with Harry.jpg",
    "assets/images/To Catch a Thief.jpg", "assets/images/The Man Who Knew Too Much.jpg", "assets/images/Vertigo.jpg", "assets/images/North by Northwest.jpg", "assets/images/Psycho.jpg",
    "assets/images/The Birds.jpg", "assets/images/Marnie.jpg", "assets/images/Torn Curtain.jpg", "assets/images/Topaz.jpg", "assets/images/Family Plot.jpg"];

    film = movies[Math.floor(Math.random() * movies.length)];

    for (let i = 0; i < film.length; i++) {
        if (game.alphabet.includes(film[i])) {
            game.answerArray[i] = "_";
        }
        if (!game.alphabet.includes(film[i])) {
            game.answerArray[i] = film[i];
        }
        if (film[i] === "-") {
            game.answerArray[i] = "\xa0";
        }
    }

    game.answerArrayText.textContent = game.answerArray.join(" ");

    function alphabeticalLength(str) {
        let letters = 0;
        for (let i = 0; i < str.length; i++) {
            if (game.alphabet.indexOf(str[i]) > -1) {
                letters = letters + 1;
            }
        }
        return letters;
    }

    remainingLetters = alphabeticalLength(film);

    }

}

game.nameText.textContent = game.name.toUpperCase();
game.descriptionText.textContent = game.description;

window.onload = function() {
    game.play();
    for (let i = 0; i < movies.length; i++) {  
        if (film === movies[i]) {
            filmAudio = themes[i];
        }
    }
}

document.onkeyup = function(event) {

    let playerGuess = event.key.toUpperCase();

    if ( (game.alphabet.includes(playerGuess)) && (!game.yourGuesses.includes(playerGuess)) ) {
        game.yourGuesses = game.yourGuesses + " " + playerGuess;
        if (film.includes(playerGuess)) {
            for (let j = 0; j < film.length; j++) {
                if (film[j] === playerGuess) {
                    game.answerArray[j] = playerGuess;
                    remainingLetters--;
                }
            }
        } else {
            game.guessesLeft--;
        }
    }

    if ( (game.guessesLeft === 0) && (remainingLetters > 0) ) {
        game.losses++;
        game.guessesLeft = 3;
        game.answerArray = [];
        game.yourGuesses = [];
        filmAudio.pause();
        for (let i = 0; i < film.length; i++) {
            if (film[i] === "-") {
                game.lastAnswer[i] = "\xa0";
            } else {
                game.lastAnswer[i] = film[i];
            }
        }
        for (let i = film.length; i < game.lastAnswer.length; i++) {
            game.lastAnswer[i] = "";
        }
        for (let i = 0; i < movies.length; i++) {  
            if (film === movies[i]) {
                game.lastAnswerImg.src = images[i];
            }
        }
        game.play();
    }

    if (remainingLetters === 0) {
        game.wins++;
        game.guessesLeft = 3;
        game.answerArray = [];
        game.yourGuesses = [];
        filmAudio.pause();
        for (let i = 0; i < film.length; i++) {
            if (film[i] === "-") {
                game.lastAnswer[i] = "\xa0";
            } else {
                game.lastAnswer[i] = film[i];
            }
        }
        for (let i = film.length; i < game.lastAnswer.length; i++) {
            game.lastAnswer[i] = "";
        }
        for (let i = 0; i < movies.length; i++) {  
            if (film === movies[i]) {
                game.lastAnswerImg.src = images[i];
            }
        }
        for (let i = 0; i < movies.length; i++) {  
            if (film === movies[i]) {
                filmAudio = themes[i];
            }
        }
        filmAudio.play();
        game.play();
    }

    game.winsText.textContent = "Wins: " + game.wins;
    game.lossesText.textContent = "Losses: " + game.losses;
    game.guessesLeftText.textContent = "Incorrect guesses remaining: " + game.guessesLeft;
    game.answerArrayText.textContent = game.answerArray.join(" ");
    game.yourGuessesText.textContent = "Letters you've already guessed: " + game.yourGuesses;
    game.lastAnswerText.textContent = game.lastAnswer.join("");
    
}