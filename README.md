# TIC TAC TOE

Game built using React.js.

## Logic:

Board has 9 squares:
- 0 1 2
- 3 4 5
- 6 7 8

Any player wins if completes:
- 0 1 2
- 3 4 5
- 6 7 8
- 0 4 8
- 2 4 6
- 0 3 6
- 1 4 7
- 2 5 8

The game ends if one player wins or if after 9 rounds nobody wins. 

## Structure:

There are 5 components and 2 pages.

![alt text](https://res.cloudinary.com/dplgnsjzm/image/upload/v1635017297/tic-tac-toe/Captura_de_Tela_2021-10-23_a%CC%80s_16.27.36_oijmzt.png)

### Pages:

- **Game** - where it is shown whose turn it is to play (the color changes depending on whether it is player 1 or player 2), the board and a reset button. As a component, it's where are stored all the functions and states.
- **Notification** - where it is shown who won the game or if there was a draw and a button to restart the game.

### Components:

- **Turn** - shows who should play.
- **Board** - consists of 9 squares.
- **Square** - it's the button where the player clicks to choose a spot. 
- **Button** - it's used twice: to reset the game and to restart the game. The name of the button is passed as a props.  
- **Result** - shows who won the game or if there was a draw.

### Utils:

- **Colors** - where are stored all the colors used in the game.
- **Sizes** - where are stored the font sizes and the box sizes (padding and margin).

## Links

### Wireframe:

[Figma Link](https://www.figma.com/file/igw4PHoB0LekhvsSufQXe4/Tic-Tac-Toe?node-id=0%3A1)

### Trello:

[Board Link](https://trello.com/b/5kVi6nud/tic-tac-toe)

### Git:

[Repository Link](https://github.com/marileitune/tic-tac-toe)