import React from 'react';

 const Game = () => {

    // -------- STATES --------

    const [state, setState] = useState({
        player1: [],
        player2: []
      });

    const [turn, setTurn] = useState('');

    const [winner, setWinner] = useState('');

    // -------- FUNCTIONS --------

    const playGame = () => {
        // add a number in the array of 1 of the states (playerOne or playerTwo)
    };

    const checkTurn = () => {
        // change the turn state depending on who it's turn to play.
    };

    const checkGameOver = () => {
        /* 
         from the third round, check if all squares have been filled or check if any player has one of the following sequences in the array:
            -- 0 1 2
            -- 3 4 5
            -- 6 7 8
            -- 0 4 8
            -- 2 4 6
            -- 0 3 6
            -- 1 4 7
            -- 2 5 8 
        IF NOT: call the function checkTurn. 
        IF YES: check who won, pass it for the state called "winner", show one of the notifications and call the function restartGame() .
        */
    };

    const restartGame = () => {
        // set all the states to the initial form.
    };

    // -------- RETURN --------

    return (
        <>
            
        </>
    )
};

export default Game;