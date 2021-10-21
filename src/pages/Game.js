import React, {useState} from 'react';
import Turn from '../components/Turn';
import Board from '../components/Board';

 const Game = () => {

    // -------- STATES --------

    const [state, setState] = useState({
        player1: [],
        player2: []
      });

    const [turn, setTurn] = useState('Player One');

    const [winner, setWinner] = useState('');

    // -------- FUNCTIONS --------

    const playGame = (value) => {
        // add a number in the array of 1 of the states (player1 or player2) and call the function checkTurn.
        let { player1, player2 } = state;
        turn === 'Player One' ? player1.push(value) : player2.push(value);
        checkTurn();
    };

    const checkTurn = () => {
        turn === 'Player One' ? setTurn('Player Two') : setTurn('Player One')
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
        let { player1, player2 } = state;
        player1 = []
        player2 = []
        setTurn('Player One');
        setWinner('');
    };


    // -------- RETURN --------

    return (
        <>
            <Turn turn={turn}/>
            <Board onClick={playGame}/>
        </>
    )
};

export default Game;