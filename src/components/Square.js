import React from 'react';
import { colors } from '../utils/colors';
import Player from './Player';

 const Square = ({ value, onClick }) => {
    return (
            <button style={style} onClick={() => onClick(value)}>
                { value !== "" ? value ==='Player One' ? <Player player={'Player One'}/> : <Player player={'Player Two'}/> : ""}
            </button>
    )
};

const style = {
    backgroundColor: 'transparent',
	border: "6px solid",
    outline: 'none',
    borderColor: colors.darkBlue,
	cursor: "pointer",
};



export default Square;