//declaring the game as an object containing certain conditions and functions
const game = {
  name: "Hitchcock's\xa0\xa0Rope",
  description: "Are you a master of suspense\xa0? See if you can guess the names of these mystery Hitchcock films !",
  imgSrc: "assets/images/hitchcock-1024x686.jpg",
  //player starts with 3 "lives"
  guessesLeft: 3,
  //including a validChars array will help us distinguish between
  //guessable characters (which need to be guessed to win the round and which constitute valid key inputs)
  //and non-guessable characters (which do not)
  validChars: [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
  ],

  words: [
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
  ],

  themes: [
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
  ],

  images: [
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
  ]
};

//matches properties that will be represented visually to the corresponding id in the HTML, effectively mapping them onto the page
nameText = document.getElementById("name-text");
descriptionText = document.getElementById("description-text");
displayImg = document.getElementById("display-img-container");
winsText = document.getElementById("wins-text");
lossesText = document.getElementById("losses-text");
guessesText = document.getElementById("guesses");
answerArrayText = document.getElementById("answer-array-text");
lastAnswerText = document.getElementById("last-answer-text");
lastAnswerImg = document.getElementById("last-answer-img");

//in conjunction with getElementById method, writes name of the game in capital letters to the corresponding HTML location
nameText.textContent = game.name.toUpperCase();
//in conjunction with getElementById method, writes description of the game to the corresponding HTML location
descriptionText.textContent = game.description;
//in conjunction with getElementById method, adds thematically appropriate display to the corresponding HTML location
displayImg.innerHTML = `<img id="display-img" src="${game.imgSrc}">`;

//this function carries out several of the tasks needed to start a new round (new secretWord, reset array to blanks, etc.)
function play() {
  //secretWord (i.e., the correct answer for this round) is selected randomly from the words array
  secretWord = words[Math.floor(Math.random() * words.length)];

  //the starting number of guessesLeft equals the default number stored in the game object
  guessesLeft = game.guessesLeft;

  //the player's character guesses, the array which will be displayed as a series of blanks being filled in with the player's correct guesses, and the previous round's correct answer all start out empty
  yourGuesses = "";
  answerArray = [];
  lastAnswer = [];

  //sets up array that will track the player's progress toward getting the correct answer
  for (let i = 0; i < secretWord.length; i++) {
    //validChars replaced with blanks
    if (game.validChars.includes(secretWord[i])) {
      answerArray[i] = "_";
    }
    //non-guessable characters left alone, except ...
    if (!game.validChars.includes(secretWord[i])) {
      answerArray[i] = secretWord[i];
    }
    //hyphens replaced with spaces to separate words
    if (secretWord[i] === "-") {
      answerArray[i] = " ";
    }
  }

  //in conjunction with the corresponding getElementById method above, this serves to write the answer array into the HTML by stringing together its elements, with the characters spaced apart
  answerArrayText.textContent = answerArray.join("\xa0");

  //defines a function returning the number of validChars in a string since we are specifically interested in the characters that remain to be guessed, not the number of characters in general
  function validCharLength(str) {
    let chars = 0;
    for (let i = 0; i < str.length; i++) {
      if (game.validChars.includes(str[i])) {
        chars++;
      }
    }
    return chars;
  }

  //the initial number of characters remaining to be guessed is simply the number of validChars in the secretWord string
  remainingChars = validCharLength(secretWord);
}

//starts up the first round as soon as the browser has loaded the page
window.onload = () => {
  //wins and losses are both 0 at beginning of first round
  wins = 0;
  losses = 0;
  //pool of words from which the one secret correct answer will be drawn each round (i.e., each time this play function is called)
  words = game.words;
  //relative links to theme music corresponding one-to-one via index matching to the strings in the words array
  themes = game.themes;
  //relative links to movie posters corresponding one-to-one via index matching to the strings in the words array
  images = game.images;
  currentAudio = "";
  play();
}

//key event interprets player pressing a key as a guess and produces the appropriate result
document.onkeyup = event => {
  //ensures that uppercase and lowercase key inputs will both be treated as valid guesses
  let playerGuess = event.key.toUpperCase();

  //ensures that the input will be treated as a valid guess only if it is a validChar and only if the player has not already guessed the same character this round
  if (game.validChars.includes(playerGuess) && !yourGuesses.includes(playerGuess)) {
    //adds character to the list of guesses
    yourGuesses = yourGuesses + " " + playerGuess;
    //if the guess is correct, then the number of remaining characters will decrease accordingly (by 1 for each instance of the character) and the appropriate blanks will be filled in with the guess
    if (secretWord.includes(playerGuess)) {
      for (let i = 0; i < secretWord.length; i++) {
        if (secretWord[i] === playerGuess) {
          answerArray[i] = playerGuess;
          remainingChars--;
        }
      }
    //if the guess is incorrect, then the player loses a "life"
    } else {
      guessesLeft--;
    }
  }

  //if loss conditions are met (all lives lost and all validChars in the secretWord string have not yet been guessed), then the appropriate results occur
  if (guessesLeft === 0 && remainingChars > 0) {
    //loss count increases by 1
    losses++;
    lossesText.textContent = "L: " + losses;
    //"lives" replenished for next round
    guessesLeft = game.guessesLeft;
    //reset answer array and list of guesses
    answerArray = [];
    yourGuesses = "";
    //pause any music that may be playing in order to prevent simultaneous tracks
    if (currentAudio) {
      currentAudio.pause();
    }
    //display correct answer from the round just completed
    lastAnswer = secretWord.replace(/-/g, " ");
    //matches secretWord to its appropriate image by identifying the image source as the corresponding element (same index) in the images array
    for (let i = 0; i < words.length; i++) {  
      if (secretWord === words[i]) {
        lastAnswerImg.src = images[i];
      }
    }
    //allows image to be shown by removing the "hide" class which gives the image a "display: none" CSS property
    lastAnswerImg.classList.remove("hide");
    lastAnswerText.textContent = lastAnswer;
    //sets up new round
    play();
  }

  //if win condition is met (all validChars in the secretWord string have been guessed), then the appropriate results occur
  if (remainingChars === 0) {
    //win count increases by 1
    wins++;
    winsText.textContent = "W: " + wins;
    //"lives" replenished as needed
    guessesLeft = game.guessesLeft;
    //reset answer array and list of guesses
    answerArray = [];
    yourGuesses = "";
    //pause any music that may be playing in order to prevent simultaneous tracks
    if (currentAudio) {
      currentAudio.pause();
    }
    //display correct answer from the round just completed
    lastAnswer = secretWord.replace(/-/g, " ");
    //matches secretWord to its appropriate image by identifying the image source as the corresponding element (same index) in the images array
    for (let i = 0; i < words.length; i++) {  
      if (secretWord === words[i]) {
        lastAnswerImg.src = images[i];
      }
    }
    //allows image to be shown by removing the "hide" class which gives the image a "display: none" CSS property
    lastAnswerImg.classList.remove("hide");
    lastAnswerText.textContent = lastAnswer;
    //matches secretWord to its appropriate audio track by identifying the audio source as the corresponding element (same index) in the themes array
    for (let i = 0; i < words.length; i++) {  
      if (secretWord === words[i]) {
        currentAudio = themes[i];
      }
    }
    //plays the theme music
    currentAudio.play();
    //sets up new round
    play();
  }

  //in conjunction with getElementById method, writes updates into HTML to visually reflect the changed game state after each key press
  guessesText.innerHTML =
    '<p id="guesses-left-text">Guesses remaining: ' + guessesLeft + "</p>"
    + '<p id="your-guesses-text">Your guesses: ' + yourGuesses + "</p>";
  answerArrayText.textContent = answerArray.join("\xa0");
}
