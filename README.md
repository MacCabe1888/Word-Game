# Word-Guess-Game
A guessing game powered by JavaScript.

This game tests the player's knowledge of Alfred Hitchcock films (or of their titles, at any rate). It resembles Hangman in the following ways:

* You are allowed a limited number of incorrect guesses (i.e., letters that are not to be found in the word/phrase) before you lose the round (i.e., lose your chance to guess the word/phrase in question).
* Correct guesses (i.e., letters that are to be found in the word) not only do not subtract from your allowance of guesses, but they also fill in the blanks to show you the location of every occurrence of the letter in question in the word/phrase you're trying to uncover.
* Once you've correctly guessed all the letters in the word/phrase, you win!

It differs from Hangman in at least one major way:

* When you correctly guess the title of a film, you get a more tangible prize than a mere increment to your win count: the game will play music from the film in question! You can continue to listen to the music from the previous round's film while you move on to the next round. The music stops when and only when any of the four following conditions are met:
1. The track has played until its end.
2. The player loses a round, after which point there will be no more music until the player wins another round.
3. The player wins another round, at which point the track playing theretofore is replaced by music from the film whose title the player has just guessed.
4. The player exits the game (e.g., by closing its browser tab).

This game will be very challenging at first for all but the most fanatical Hitchcock buffs, but as you start to see repeats (which should not happen too often, though, as all twenty-six Hitchcock-directed films are in the pool of possibilities drawn from anew each round), you will gain some familiarity with the film titles. My goal is to inspire curiosity about Hitchcock's filmography via the gameplay as well as the music. Hopefully, these features will entice you to check out the work of this legendary director and *auteur*!
