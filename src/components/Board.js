import React from 'react';
import Square from './Square';

 const Board = ({turn, fill, onClick}) => {
    
    return (
        <div className="board">
            <div className="row">
                <Square turn={turn} fill={fill} value={0} onClick={(value) => onClick(value)}/>
                <Square turn={turn} fill={fill} value={1} onClick={(value) => onClick(value)}/>
                <Square turn={turn} fill={fill} value={2} onClick={(value) => onClick(value)}/>
            </div>
            <div className="row">
                <Square turn={turn} fill={fill} value={3} onClick={(value) => onClick(value)}/>
                <Square turn={turn} fill={fill} value={4} onClick={(value) => onClick(value)}/>
                <Square turn={turn} fill={fill} value={5} onClick={(value) => onClick(value)}/>
            </div>
            <div className="row">
                <Square turn={turn} fill={fill} value={6} onClick={(value) => onClick(value)}/>
                <Square turn={turn} fill={fill} value={7} onClick={(value) => onClick(value)}/>
                <Square turn={turn} fill={fill} value={8} onClick={(value) => onClick(value)}/>
            </div>
        </div>
    )
};

export default Board;