import React from 'react';
import Square from './Square';

 const Board = ({onClick, board}) => {
    
    return (
        <div style={style}>
            {
                board.map((square, i) => {
                    return (
                        <Square key={i} value={board[i]} onClick={(() =>onClick(i))}/>
                    )
                })
            }
        </div>
    )
};

const style = {
	border: "4px solid darkblue",
	borderRadius: "10px",
	width: "250px",
	height: "250px",
	margin: "0 auto",
	display: "grid",
	gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
};

export default Board;