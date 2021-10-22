import React, {useState} from 'react';
import Turn from '../components/Turn';
import Board from '../components/Board';
import Notification from './Notification';

 const Game = () => {

    // -------- STATES --------

    const [state, setState] = useState({
        player1: [],
        player2: []
      });

    const [turn, setTurn] = useState('Player One');

    const [winner, setWinner] = useState('');

    const [rounds, setRounds] = useState(0);

    // -------- FUNCTIONS --------

    const playGame = (value) => {
        // add a number in the array of 1 of the states (player1 or player2) and call the function checkTurn.
        let { player1, player2 } = state;

        if(!player1.includes(value) && !player2.includes(value)) {
            turn === 'Player One' ? player1.push(value) : player2.push(value);
            setRounds(rounds+1)
            checkGameOver();
        }

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

        let { player1, player2 } = state;

        const winCases = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6], [0, 3, 6], [1, 4, 7], [2, 5, 8]]

        winCases.forEach((winCase) => {
            switch (true) {
                case player1.sort().includes(winCase.sort()):        
                    setWinner("Player 1");
                    break;
                case player2.sort().includes(winCase.sort()):
                    setWinner("Player 2");
                    break;
                case rounds === 9:
                    setWinner("Draw")
                    break; 
                default: checkTurn() 
            } 
            console.log("player1: " + player1, "player2: " + player2, "winCase: " + winCase)   
        })
    
        console.log("winner: " + winner)
        
    }

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
            {!winner ? <Board onClick={playGame}/> : <Notification winner={winner} restart={restartGame}/>}
        </>
    )
};

export default Game;