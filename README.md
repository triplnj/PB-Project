# EMOJUZZLE

> ### Introduction
The purpose of this code is to create a simple guessing game called "Emojuzzle". The game randomly selects 4 out of 6 possible emojis. The player has 10 attempts to correctly guess the emojis and their positions in the puzzle. If the player guesses correctly, the game ends and a winning message is displayed. If the player uses up all 10 attempts without guessing correctly, the game ends and a losing message is displayed.

 > ### NPM Packages used:
- readline-sync (interactivity)
- chalk        (text color)
- cfonts (font style)


> ### Functionality 

- The game starts by displaying a welcome message using the cfonts package to display text in a specific style. 
- It then creates an array of 6 possible emojis and uses the randomArr function to randomly select 4 of them and store them in the puzzleArray variable. 
- The game then prompts the player to enter their guesses and uses the gameLoop function to run the game.
- The gameLoop function reads the player's input using the readline package, splits it into an array of characters, and stores it in the guessArr variable. 
- It then uses the PlayerChoice constructor function to create an object with keys corresponding to the characters and values corresponding to the appropriate emojis. 
- The function then iterates through the guessArr array and pushes the corresponding emojis to the playerArr array. 
- It then compares the playerArr array to the puzzleArray array to determine if the player's guess was correct. 
- If the guess was correct, the game ends and a winning message is displayed. If the guess was incorrect, the game continues and the player is prompted for another guess. 
- If the player uses up all 10 attempts without guessing correctly, the game ends and a losing message is displayed.