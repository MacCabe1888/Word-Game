//matches properties that will be represented visually to the corresponding id in the HTML, effectively mapping them onto the page
gameMenu = document.getElementById("select-game");
nameText = document.getElementById("name-text");
descriptionText = document.getElementById("description-text");
displayImg = document.getElementById("display-img-container");
winsText = document.getElementById("wins-text");
lossesText = document.getElementById("losses-text");
guessesText = document.getElementById("guesses");
answerArrayText = document.getElementById("answer-array-text");
lastAnswerText = document.getElementById("last-answer-text");
lastAnswerImg = document.getElementById("last-answer-img");

//populating the menu with all games from the gamesArr array
gameMenu.innerHTML = '<option name="" value="">Choose a Game</option>' +
gamesArr.map((game, i) => {
  const options = [];
  options[i] = `<option name="${game.name}" value="${i}">${game.name}</option>`;
  return options.join("");
});

//onchange function for the gameMenu HTML element
const selectGame = () => {
  const currentGame = game;
  const i = gameMenu.value;
  //if the user has selected a game from the menu,
  //set the game to the corresponding element from gamesArr
  game = i ? gamesArr[i] : currentGame;
  //if the game has changed as a result,
  //run the newGame function to reset display, wins, losses, etc.
  if (game !== currentGame) {
    newGame();
  }
};

//declaring the game as an object containing only the theme-specific data,
//randomly drawn from gamesArr by default
let game = gamesArr[Math.floor(Math.random() * length)];

//start up the game as soon as the browser has loaded the page
window.onload = () => newGame();

const newGame = () => {
  //in conjunction with getElementById method, writes name of the game in capital letters to the corresponding HTML location
  nameText.textContent = game.name.toUpperCase();
  //in conjunction with getElementById method, writes description of the game to the corresponding HTML location
  descriptionText.textContent = game.description;
  //in conjunction with getElementById method, adds thematically appropriate display to the corresponding HTML location
  displayImg.innerHTML = `<img id="display-img" src="assets/images/${game.imgSrc}">`;
  //wins and losses are both 0 at beginning of first round
  wins = 0;
  losses = 0;
  //pool of words from which the one secret correct answer will be drawn each round (i.e., each time this play function is called)
  words = game.words;
  //relative links to theme music corresponding one-to-one via index matching to the strings in the words array
  themes = [];
  game.themes.map((path, i) => {
    return themes[i] = new Audio(`assets/audio/${path}`);
  });
  //relative links to movie posters corresponding one-to-one via index matching to the strings in the words array
  images = [];
  game.images.map((path, i) => {
    return images[i] = `assets/images/${path}`;
  });
  currentAudio = "";
  newRound();
};

//this function carries out several of the tasks needed to start a new round (new secretWord, reset array to blanks, etc.)
const newRound = () => {
  //secretWord (i.e., the correct answer for this round) is selected randomly from the words array
  secretWord = words[Math.floor(Math.random() * words.length)];

  //the starting number of guessesLeft equals the default number stored in the game object
  guessesLeft = game.guessesLeft;

  //reset answer array and list of guesses
  answerArray = [];
  yourGuesses = "";

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
  const validCharLength = str => {
    let chars = 0;
    for (let i = 0; i < str.length; i++) {
      if (game.validChars.includes(str[i])) {
        chars++;
      }
    }
    return chars;
  };

  //the initial number of characters remaining to be guessed is simply the number of validChars in the secretWord string
  remainingChars = validCharLength(secretWord);
};

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

  //if round is over ...
  if (remainingChars === 0 || guessesLeft === 0) {
    //pause any audio that may be playing in order to prevent simultaneous tracks
    if (currentAudio) {
      currentAudio.pause();
    }

    //match secretWord to its appropriate image by identifying the image source as the corresponding element (same index) in the images array
    for (let i = 0; i < words.length; i++) {  
      if (secretWord === words[i]) {
        lastAnswerImg.src = images[i];
      }
    }
    //allow image to be shown by removing the "hide" class which gives the image a "display: none" CSS property
    lastAnswerImg.classList.remove("hide");

    //display correct answer from the round just completed
    lastAnswer = secretWord.replace(/-/g, " ");
    lastAnswerText.textContent = lastAnswer;

    //run appropriate end-of-round function
    remainingChars === 0 ? win() : loss();

    //start a new round
    newRound();
  }

  //in conjunction with getElementById method, writes updates into HTML to visually reflect the changed game state after each key press
  guessesText.innerHTML =
  '<p id="guesses-left-text">Guesses remaining: ' + guessesLeft + "</p>"
  + '<p id="your-guesses-text">Your guesses: ' + yourGuesses + "</p>";
  answerArrayText.textContent = answerArray.join("\xa0");
};

const win = () => {
  //win count increases by 1
  wins++;
  winsText.textContent = "W: " + wins;
  //matches secretWord to its appropriate audio track by identifying the audio source as the corresponding element (same index) in the themes array
  for (let i = 0; i < words.length; i++) {  
    if (secretWord === words[i]) {
      currentAudio = themes[i];
    }
  }
  //plays the theme music
  currentAudio.play();
};

const loss = () => {
  //loss count increases by 1
  losses++;
  lossesText.textContent = "L: " + losses;
};
