import React from 'react';
import Player from './Player';

 const Square = ({ value, onClick }) => {
    return (
            <button style={style} onClick={() => onClick(value)}>
                { value !== "" ? value ==='Player One' ? <Player player={'Player One'}/> : <Player player={'Player Two'}/> : ""}
            </button>
    )
};

const style = {
	background: "lightblue",
	border: "2px solid darkblue",
	fontSize: "30px",
	fontWeight: "800",
	cursor: "pointer",
	outline: "none",
};



export default Square;