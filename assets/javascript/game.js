let game = {
    name: "Hitchcock's Rope",
    description: "Are you an expert on the master of suspense? See if you can guess the names of these mystery Hitchcock films!",
    wins: 0,
    losses: 0,
    guessesLeft: 5,
    alphabet: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    yourGuesses: "",
    answerArray: [],

    nameText: document.getElementById("name-text"),
    descriptionText: document.getElementById("description-text"),
    winsText: document.getElementById("wins-text"),
    lossesText: document.getElementById("losses-text"),
    guessesLeftText: document.getElementById("guesses-left-text"),
    yourGuessesText: document.getElementById("your-guesses-text"),
    answerArrayText: document.getElementById("answer-array-text"),
    
    play: function() {
    
    let movies = ["THE-LODGER:-A-STORY-OF-THE-LONDON-FOG", "THE-39-STEPS", "THE-LADY-VANISHES", "REBECCA", "SABOTEUR", "SHADOW-OF-A-DOUBT", "AVENTURE-MALGACHE",
    "BON-VOYAGE", "LIFEBOAT", "SPELLBOUND", "NOTORIOUS", "ROPE", "STRANGERS-ON-A-TRAIN", "DIAL-\"M\"-FOR-MURDER", "REAR-WINDOW", "THE-TROUBLE-WITH-HARRY",
    "TO-CATCH-A-THIEF", "THE-MAN-WHO-KNEW-TOO-MUCH", "VERTIGO", "NORTH-BY-NORTHWEST", "PSYCHO", "THE-BIRDS", "MARNIE", "TORN-CURTAIN", "TOPAZ", "FAMILY-PLOT"];

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

game.nameText.textContent = game.name;
game.descriptionText.textContent = game.description;

window.onload = function() {
    game.play();
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
        game.guessesLeft = 5;
        game.answerArray = [];
        game.yourGuesses = [];
        game.play();
    }

    if (remainingLetters === 0) {
        game.wins++;
        game.guessesLeft = 5;
        game.answerArray = [];
        game.yourGuesses = [];
        game.play();
    }

    game.winsText.textContent = "Wins: " + game.wins;
    game.lossesText.textContent = "Losses: " + game.losses;
    game.guessesLeftText.textContent = "Guesses remaining: " + game.guessesLeft;
    game.answerArrayText.textContent = game.answerArray.join(" ");
    game.yourGuessesText.textContent = "Your guesses so far: " + game.yourGuesses;
    
}