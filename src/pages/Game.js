import React, {useState, useEffect} from 'react';
import Turn from '../components/Turn';
import Board from '../components/Board';
import Notification from './Notification';
import Button from '../components/Button';


 const Game = () => {

    // -------- STATES --------

    const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
    
    const [player1, setPlayer1] = useState([]);

    const [player2, setPlayer2] = useState([])

    const [turn, setTurn] = useState('Player One');

    const [winner, setWinner] = useState('');

    const [rounds, setRounds] = useState(0);


    // -------- FUNCTIONS --------

    useEffect(() => {
        checkGameOver()
    }, [player1, player2]);

    const playGame = (value) => {
        // add a number in the array of 1 of the states (player1 or player2) and call the function checkTurn.

        if(!player1.includes(value) && !player2.includes(value)) {
            turn === 'Player One' ? (setPlayer1([...player1, value])) : (setPlayer2([...player2, value]));
            setRounds(rounds+1);
            checkTurn();
            setBoard(
                board.map((square, i) => {
                  if (i === value && square === "") {
                    return turn;
                  }
                  return square;
                })
              );
        }

        console.log(board)
    };

    const checkTurn = () => {
        turn === 'Player One' ? setTurn('Player Two') : setTurn('Player One')
    };

    const checkGameOver = () => {
        /* 
         check if all squares have been filled or check if any player has one of the following sequences in the array:
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
                        setWinner('Player One')
                        break;
                    case winCase.every(elem => player2.includes(elem)):
                        setWinner('Player Two');
                        break;
                    case rounds === 9:
                        setWinner('Draw')
                        break; 
                    default: // do nothing;
                        break;
                }           
            })    
    }

    const restartGame = () => {
        setPlayer1([]);
        setPlayer2([]);
        setTurn('Player One');
        setWinner('');
        setRounds(0);
        setBoard(['', '', '', '', '', '', '', '', ''])
    };


    // -------- RETURN --------

    return (
        <>
            {!winner ?
                <>
                    <Turn turn={turn}/>
                    <Button message={'refresh'} restartGame={restartGame}/>
                    <Board onClick={playGame} board={board}/> 
                </> 
            : 
                <Notification winner={winner} restartGame={restartGame}/>}
        </>
    )
};

export default Game;