# Snakes-and-Ladders-Game

I am creating this game for my milestone project.

Sankes and Ladders is one of the board games I played as a kid and am constantly playing it now with the kids in the family.

The object of the game is to get to box 100.

Each player rolls a dice and moves the amount of positions as the dice shows.
When player hits a snake, player moves down to the tail of the snake, and when player hits a ladder, player moves up the ladder.

The game is won when player hits 100 EXACTLY.

(script.js is the game setup file.)

How this was coded to play;

User clicks button to begin

Then program decides which player's turn it is in function called switchPlayer

It then calls function throwdice and passes in char (red or blue) into function

throw dice first randomizes number from 1 to 6, it calls function called DicePicture in dice.js,

Which decides which DICE picture to display based on random number

It then defines destination cell (starting cell plus dice number)

it moves the character one div at a time to the destination cell in function move

Program checks the destination number if it is a snake or a ladder then calls snakes snakesLadder.js which specifies the path of the snake or the ladder.

When player lands on a snake or a ladder, an image is shown and a sound is played. (all defined in array called snakeData in script.js)
The game continues until one character wins. Character wins only when it hits 100 exactly .
(e.g if character is on box 99 and dice=6 it will remain on box 99 until it gets a dice =1)

I would still like to add a server to this game, so two people can play at once from other computers.
I would also like to make this responsive. 

source for Dice images

https://www.geeksforgeeks.org/building-a-dice-game-using-javascript/

PHOTO OF CLOCK

Photo by <a href="https://unsplash.com/@kiranck123?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kiran CK</a> on <a href="https://unsplash.com/images/things/clock?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

photo of break time

https://depositphotos.com/111864308/stock-photo-note-with-brake-time-inscription.html
author: roobcio
