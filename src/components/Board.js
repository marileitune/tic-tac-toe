import React from 'react';
import Square from './Square';

 const Board = ({onClick, board}) => {
    
    return (
        <div className="board">
            {
                board.map((square, i) => {
                    return <Square key={i} value={board[i]} onClick={(() =>onClick(i))}/>
                })
            }
        </div>
    )
};

export default Board;