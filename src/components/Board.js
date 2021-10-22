import React from 'react';
import Square from './Square';

 const Board = ({onClick, board}) => {
    
    return (
        <div className="board">
            <div className="row">
                <Square value={board[0]} onClick={(() =>onClick(0))}/>
                <Square value={board[1]} onClick={(() =>onClick(1))}/>
                <Square value={board[2]} onClick={(() =>onClick(2))}/>
            </div>
            <div className="row">
                <Square value={board[3]} onClick={(() =>onClick(3))}/>
                <Square value={board[4]} onClick={(() =>onClick(4))}/>
                <Square value={board[5]} onClick={(() =>onClick(5))}/>
            </div>
            <div className="row">
                <Square value={board[6]} onClick={(() =>onClick(6))}/>
                <Square value={board[7]} onClick={(() =>onClick(7))}/>
                <Square value={board[8]} onClick={(() =>onClick(8))}/>
            </div>
        </div>
    )
};

export default Board;