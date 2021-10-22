import React from 'react';
import Square from './Square';

 const Board = ({turn, onClick}) => {

    return (
        <div className="board">
            <div className="row">
                <Square turn={turn} onClick={() => onClick(0)}/>
                <Square turn={turn} onClick={() => onClick(1)}/>
                <Square turn={turn} onClick={() => onClick(2)}/>
            </div>
            <div className="row">
                <Square turn={turn} onClick={() => onClick(3)}/>
                <Square turn={turn} onClick={() => onClick(4)}/>
                <Square turn={turn} onClick={() => onClick(5)}/>
            </div>
            <div className="row">
                <Square turn={turn} onClick={() => onClick(6)}/>
                <Square turn={turn} onClick={() => onClick(7)}/>
                <Square turn={turn} onClick={() => onClick(8)}/>
            </div>
        </div>
    )
};

export default Board;