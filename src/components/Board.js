import React from 'react';
import { colors } from '../utils/colors';
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
	border: "4px solid",
    borderColor: colors.darkBlue,
    outline: 'none',
    width: '45vw',
    minWidth: '270px',
    height: '45vw',
    minHeight: '270px',
	margin: "0 auto",
	display: "grid",
	gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
};

export default Board;