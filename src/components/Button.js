import React from 'react';
import { colors } from '../utils/colors';

 const Button = ({message, restartGame}) => {
    return (
        <>
            <button style={style} onClick={restartGame}>{message}</button>
        </>
    )
};

const style = {
    backgroundColor: colors.darkBlue,
    border: 'none',
    fontFamily: 'Montserrat',
    letterSpacing: '0.0625em',
    padding: '10px',
    width: '10%',
    minWidth: '70px',
    cursor: "pointer",
    color: colors.white,
    margin: 0
}
export default Button;