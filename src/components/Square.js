import React from 'react';
import Player from './Player';

 const Square = ({ value, onClick }) => {
    return (
        <>
            <button style={{width: '50px', height: '50px'}} onClick={() => onClick(value)}>
                { value !== "" ? value ==='Player One' ? <Player player={'Player One'}/> : <Player player={'Player Two'}/> : ""}
            </button>
        </>
    )
};

export default Square;