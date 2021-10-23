import React from 'react';
import { colors } from '../utils/colors';
import { sizes } from '../utils/sizes';

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
    fontSize: sizes.fontSizes.button,
    letterSpacing: '0.0625em',
    paddingRight: sizes.boxSizes.md, 
    paddingLeft: sizes.boxSizes.md,
    paddingTop: sizes.boxSizes.sm,  
    paddingBottom: sizes.boxSizes.sm,  
    marginTop: sizes.boxSizes.md,
    marginBottom: sizes.boxSizes.md,
    cursor: "pointer",
    color: colors.white,
}
export default Button;