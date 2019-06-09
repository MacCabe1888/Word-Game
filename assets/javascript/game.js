//declaring the game as an object containing certain conditions and functions
const game = {
    name: "Hitchcock's\xa0 Rope",
    description: 'Are you a "master of suspense" ? See if you can guess the names of these mystery Hitchcock films!',
    //wins and losses are both 0 at beginning of game
    wins: 0,
    losses: 0,
    //player starts with 3 "lives"
    guessesLeft: 3,
    //including an alphabet-defining array will help us distinguish between letters (which need to be guessed to win the round and which constitute valid key inputs) and non-alphabetical characters (which do not)
    alphabet: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    //the player's letter guesses, the array which will be displayed as a series of blanks being filled in with the player's correct guesses, and the previous round's correct answer all start out empty
    yourGuesses: "",
    answerArray: [],
    lastAnswer: [],

    //matches properties that will be represented visually to the corresponding id in the HTML, effectively mapping them onto the page
    nameText: document.getElementById("name-text"),
    descriptionText: document.getElementById("description-text"),
    winsText: document.getElementById("wins-text"),
    lossesText: document.getElementById("losses-text"),
    guessesLeftText: document.getElementById("guesses-left-text"),
    yourGuessesText: document.getElementById("your-guesses-text"),
    answerArrayText: document.getElementById("answer-array-text"),
    lastAnswerText: document.getElementById("last-answer-text"),
    lastAnswerImg: document.getElementById("last-answer-img"),

    //this function carries out several of the tasks needed to start a new round (new secret film title, reset array to blanks, etc.)
    play() {

        //pool of film titles from which the one secret correct answer will be drawn each round (i.e., each time this play function is called)
        movies = [
            "THE-LODGER:-A-STORY-OF-THE-LONDON-FOG",
            "THE-39-STEPS",
            "THE-LADY-VANISHES",
            "REBECCA",
            "SABOTEUR",
            "SHADOW-OF-A-DOUBT",
            "AVENTURE-MALGACHE",
            "BON-VOYAGE",
            "LIFEBOAT",
            "SPELLBOUND",
            "NOTORIOUS",
            "ROPE",
            "STRANGERS-ON-A-TRAIN",
            "DIAL-M-FOR-MURDER",
            "REAR-WINDOW",
            "THE-TROUBLE-WITH-HARRY",
            "TO-CATCH-A-THIEF",
            "THE-MAN-WHO-KNEW-TOO-MUCH",
            "VERTIGO",
            "NORTH-BY-NORTHWEST",
            "PSYCHO",
            "THE-BIRDS",
            "MARNIE",
            "TORN-CURTAIN",
            "TOPAZ",
            "FAMILY-PLOT"
        ];

        //relative links to theme music corresponding one-to-one via index matching to the film titles in the movies array
        themes = [
            new Audio("assets/audio/restored-version-of-hitchcock-classic-the-lodger-with-nitin-sawhney-score.mp3"),
            new Audio("assets/audio/the-39-steps-hitchcock-1935-opening-title-sequence.mp3"),
            new Audio("assets/audio/the-lady-vanishes-1938.mp3"),
            new Audio("assets/audio/franz-waxman-theme-from-rebecca-1940.mp3"),
            new Audio("assets/audio/saboteur-1942-opening-title-sequence.mp3"),
            new Audio("assets/audio/shadow-of-a-doubt-1943-instrumental.mp3"),
            new Audio("assets/audio/benjamin-frankel-music-from-alfred-hitchcocks-aventure-malgache-1944.mp3"),
            new Audio("assets/audio/benjamin-frankel-music-from-alfred-hitchcocks-bon-voyage-1944.mp3"),
            new Audio("assets/audio/alfred-hitchcock-lifeboat-extras.mp3"), 
            new Audio("assets/audio/miklos-rozsa-spellbound-main-theme.mp3"),
            new Audio("assets/audio/notorious-1946-theatrical-trailer.mp3"),
            new Audio("assets/audio/rope-1948-opening-title-sequence.mp3"),
            new Audio("assets/audio/strangers-on-a-train-1951-opening-title-sequence.mp3"),
            new Audio("assets/audio/dial-m-for-murder-theme.mp3"),
            new Audio("assets/audio/rear-window-1954-opening-title-sequence.mp3"),
            new Audio("assets/audio/bernard-herrmann-the-trouble-with-harry-suite-from-the-film-music-1955.mp3"),
            new Audio("assets/audio/to-catch-a-thief-official-trailer-cary-grant-movie-1955.mp3"),
            new Audio("assets/audio/music-composed-by-bernard-herrmann-man-who-knew-too-much-main-title-keith-lockhardt.mp3"),
            new Audio("assets/audio/bernard-herrmann-vertigo-theme.mp3"),
            new Audio("assets/audio/north-by-northwest-theme.mp3"),
            new Audio("assets/audio/bernard-herrmann-psycho-theme.mp3"),
            new Audio("assets/audio/the-birds-1963-title-sequence.mp3"),
            new Audio("assets/audio/theme-from-marnie-bernard-herrmann-tippi-hedren-pictures-best-hd-quality.mp3"),
            new Audio("assets/audio/john-addison-torn-curtain-main-title.mp3"),
            new Audio("assets/audio/topaz-1969-intro.mp3"),
            new Audio("assets/audio/john-williams-family-plot-end-credits-end-titles.mp3")
        ];

        //relative links to movie posters corresponding one-to-one via index matching to the film titles in the movies array
        images = [
            "assets/images/The Lodger_ A Story of the London Fog.jpg",
            "assets/images/The 39 Steps.jpg",
            "assets/images/The Lady Vanishes.jpg",
            "assets/images/Rebecca.jpg",
            "assets/images/Saboteur.jpg",
            "assets/images/Shadow of a Doubt.jpg",
            "assets/images/Aventure Malgache.jpg",
            "assets/images/Bon Voyage.jpg",
            "assets/images/Lifeboat.jpg",
            "assets/images/Spellbound.jpg",
            "assets/images/Notorious.jpg",
            "assets/images/Rope.jpg",
            "assets/images/Strangers on a Train.jpg",
            "assets/images/Dial M for Murder.jpg",
            "assets/images/Rear Window.png",
            "assets/images/The Trouble with Harry.jpg",
            "assets/images/To Catch a Thief.jpg",
            "assets/images/The Man Who Knew Too Much.jpg",
            "assets/images/Vertigo.jpg",
            "assets/images/North by Northwest.jpg",
            "assets/images/Psycho.jpg",
            "assets/images/The Birds.jpg",
            "assets/images/Marnie.jpg",
            "assets/images/Torn Curtain.jpg",
            "assets/images/Topaz.jpg",
            "assets/images/Family Plot.jpg"
        ];

        //film (i.e., the correct answer for this round) is selected randomly from the movies array
        film = movies[Math.floor(Math.random() * movies.length)];

        //sets up array that will track the player's progress toward getting the correct answer
        for (let i = 0; i < film.length; i++) {
            //letters replaced with blanks
            if (game.alphabet.includes(film[i])) {
                game.answerArray[i] = "_";
            }
            //non-alphabetical characters left alone, except ...
            if (!game.alphabet.includes(film[i])) {
                game.answerArray[i] = film[i];
            }
            //hyphens replaced with spaces to separate words
            if (film[i] === "-") {
                game.answerArray[i] = "\xa0";
            }
        }

        //in conjunction with the corresponding getElementById method above, this serves to write the answer array into the HTML by stringing together its elements, with the characters spaced apart
        game.answerArrayText.textContent = game.answerArray.join(" ");

        //defines a function returning the number of letters in a string since we are specifically interested in the letters that remain to be guessed, not the number of characters in general
        function alphabeticalLength(str) {
            let letters = 0;
            for (let i = 0; i < str.length; i++) {
                if (game.alphabet.indexOf(str[i]) > -1) {
                    letters++;
                }
            }
            return letters;
        }

        //the initial number of letters remaining to be guessed is simply the number of letters in the secret film's title
        remainingLetters = alphabeticalLength(film);
    }
}

//in conjunction with getElementById method, writes name of the game in capital letters to the corresponding HTML location
game.nameText.textContent = game.name.toUpperCase();
//in conjunction with getElementById method, writes description of the game to the corresponding HTML location
game.descriptionText.textContent = game.description;

//starts up the first round as soon as the browser has loaded the page
//matches the secret film to the corresponding theme music that will play if the player guesses correctly
window.onload = () => {
    game.play();
    for (let i = 0; i < movies.length; i++) {  
        if (film === movies[i]) {
            filmAudio = themes[i];
        }
    }
}

//key event interprets player pressing a key as a guess and produces the appropriate result
document.onkeyup = event => {

    //ensures that uppercase and lowercase key inputs will both be treated as valid guesses
    let playerGuess = event.key.toUpperCase();

    //ensures that the input will be treated as a valid guess only if it is a letter and if the player has not already guessed the same letter this round
    if ( (game.alphabet.includes(playerGuess)) && (!game.yourGuesses.includes(playerGuess)) ) {
        //adds letter to the list of guesses
        game.yourGuesses = game.yourGuesses + " " + playerGuess;
        //if the guess is correct, then the number of remaining letters will decrease accordingly (by 1 for each instance of the letter) and the appropriate blanks will be filled in with the guess
        if (film.includes(playerGuess)) {
            for (let i = 0; i < film.length; i++) {
                if (film[i] === playerGuess) {
                    game.answerArray[i] = playerGuess;
                    remainingLetters--;
                }
            }
        //if the guess is incorrect, then the player loses a "life"
        } else {
            game.guessesLeft--;
        }
    }

    //if loss conditions are met (all lives lost and all letters in the film title have not yet been guessed), then the appropriate results occur
    if ( (game.guessesLeft === 0) && (remainingLetters > 0) ) {
        //loss count increases by 1
        game.losses++;
        //"lives" replenished for next round
        game.guessesLeft = 3;
        //reset answer array and list of guesses
        game.answerArray = [];
        game.yourGuesses = "";
        //pause any music that may be playing in order to prevent simultaneous tracks
        filmAudio.pause();
        //display correct answer from the round just completed
        for (let i = 0; i < film.length; i++) {
            if (film[i] === "-") {
                game.lastAnswer[i] = "\xa0";
            } else {
                game.lastAnswer[i] = film[i];
            }
        }
        //ensures that all characters from the previous round's displayed correct answer get erased, even if the new answer replacing it has fewer characters
        for (let i = film.length; i < game.lastAnswer.length; i++) {
            game.lastAnswer[i] = "";
        }
        //matches correct answer to image of the film's poster by identifying the image source as the corresponding element (same index) in the images array
        for (let i = 0; i < movies.length; i++) {  
            if (film === movies[i]) {
                game.lastAnswerImg.src = images[i];
            }
        }
        //sets up new round
        game.play();
    }

    //if win condition is met (all letters in the film title have been guessed), then the appropriate results occur
    if (remainingLetters === 0) {
        //win count increases by 1
        game.wins++;
        //"lives" replenished as needed
        game.guessesLeft = 3;
        //reset answer array and list of guesses
        game.answerArray = [];
        game.yourGuesses = "";
        //pause any music that may be playing in order to prevent simultaneous tracks
        filmAudio.pause();
        //display correct answer from the round just completed
        for (let i = 0; i < film.length; i++) {
            if (film[i] === "-") {
                game.lastAnswer[i] = "\xa0";
            } else {
                game.lastAnswer[i] = film[i];
            }
        }
        //ensures that all characters from the previous round's displayed correct answer get erased, even if the new answer replacing it has fewer characters
        for (let i = film.length; i < game.lastAnswer.length; i++) {
            game.lastAnswer[i] = "";
        }
        //matches correct answer to image of the film's poster by identifying the image source as the corresponding element (same index) in the images array
        for (let i = 0; i < movies.length; i++) {  
            if (film === movies[i]) {
                game.lastAnswerImg.src = images[i];
            }
        }
        //matches correct answer to audio track of the film's theme music by identifying the film audio as the corresponding element (same index) in the themes array
        for (let i = 0; i < movies.length; i++) {  
            if (film === movies[i]) {
                filmAudio = themes[i];
            }
        }
        //plays the theme music
        filmAudio.play();
        //sets up new round
        game.play();
    }

    //in conjunction with getElementById method, writes updates into HTML to visually reflect the changed game state after each key press
    game.winsText.textContent = "Wins: " + game.wins;
    game.lossesText.textContent = "Losses: " + game.losses;
    game.guessesLeftText.textContent = "Incorrect guesses remaining: " + game.guessesLeft;
    game.answerArrayText.textContent = game.answerArray.join(" ");
    game.yourGuessesText.textContent = "Letters you've already guessed: " + game.yourGuesses;
    game.lastAnswerText.textContent = game.lastAnswer.join("");

}
