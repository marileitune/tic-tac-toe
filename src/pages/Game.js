import React, {useState, useEffect} from 'react';
import Turn from '../components/Turn';
import Board from '../components/Board';
import Notification from './Notification';

 const Game = () => {

    // -------- STATES --------

    const [player1, setPlayer1] = useState([]);

    const [player2, setPlayer2] = useState([])

    const [turn, setTurn] = useState('Player One');

    const [winner, setWinner] = useState('');

    const [rounds, setRounds] = useState(1);

    // -------- FUNCTIONS --------

    const playGame = (value) => {
        // add a number in the array of 1 of the states (player1 or player2) and call the function checkTurn.

        if(!player1.includes(value) && !player2.includes(value)) {
            turn === 'Player One' ? (setPlayer1([...player1, value])) : (setPlayer2([...player2, value]));
            setRounds(rounds+1);
            checkGameOver();
        }
        console.log(player1, player2)
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

        const winCases = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6], [0, 3, 6], [1, 4, 7], [2, 5, 8]]

        winCases.forEach((winCase) => {
            switch (true) {
                case winCase.every(elem => player1.includes(elem)):        
                    setWinner("Player 1")
                    break;
                case winCase.every(elem => player2.includes(elem)):
                    setWinner("Player 2");
                    break;
                case rounds === 9:
                    setWinner("Draw")
                    break; 
                default: checkTurn() 
            }           
        })    
    }

    const restartGame = () => {
        setPlayer1([]);
        setPlayer2([]);
        setTurn('Player One');
        setWinner('');
        setRounds(1)
    };


    // -------- RETURN --------

    return (
        <>
            {!winner ?
                <div>
                    <Turn turn={turn}/>
                    <Board onClick={playGame} player={turn}/> 
                </div> 
            : 
                <Notification winner={winner} restartGame={restartGame}/>}
        </>
    )
};

export default Game;