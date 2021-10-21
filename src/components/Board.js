import React from 'react';
import Square from './Square';

 const Board = ({onClick}) => {

    return (
        <div className="board">
            <div className="row">
                <Square onClick={() => onClick(0)}/>
                <Square onClick={() => onClick(1)}/>
                <Square onClick={() => onClick(2)}/>
            </div>
            <div className="row">
                <Square onClick={() => onClick(3)}/>
                <Square onClick={() => onClick(4)}/>
                <Square onClick={() => onClick(5)}/>
            </div>
            <div className="row">
                <Square onClick={() => onClick(6)}/>
                <Square onClick={() => onClick(7)}/>
                <Square onClick={() => onClick(8)}/>
            </div>
        </div>
    )
};

export default Board;