import React from 'react';
import Player from './Player';

 const Square = ({ value, turn, fill, onClick }) => {
    return (
        <>
            <button style={{width: '50px', height: '50px'}} onClick={() => onClick(value)}>
                {fill.includes(value) && <Player turn={turn}/>}
            </button>
        </>
    )
};

export default Square;