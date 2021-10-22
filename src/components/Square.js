import React from 'react';
import Player from './Player';

 const Square = ({ value, turn, onClick }) => {
    return (
        <>
            <button style={{width: '50px', height: '50px'}} onClick={() => onClick(value)}><Player/></button>
        </>
    )
};

export default Square;