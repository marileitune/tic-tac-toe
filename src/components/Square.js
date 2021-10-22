import React from 'react';
import Player from './Player';

 const Square = ({ value, onClick }) => {
    return (
        <div style={squareStyle.box}>
            <button style={squareStyle.button} onClick={() => onClick(value)}>
                { value !== "" ? value ==='Player One' ? <Player player={'Player One'}/> : <Player player={'Player Two'}/> : ""}
            </button>
        </div>
    )
};

const squareStyle = {
    box: {
        width: "30%",
        height: "100px",
        background: "gray",
        float: "left",
        margin: "5px",
        color: "white",
        verticalAlign: "middle",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    button: {
        background:  "gray",
        width: '100px',
        height: '100px'
    }
    
  };

export default Square;