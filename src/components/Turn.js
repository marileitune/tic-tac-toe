import React from 'react';
import { colors } from '../utils/colors';
import { sizes } from '../utils/sizes';

 const Turn = ({turn}) => {
    return (
        <>
        {
            turn === 'Player One' ? <h3 style={style.black}>Next: {turn}</h3> : <h3 style={style.white}>Next: {turn}</h3>
        }
        </>
    )
};

const style = {
    white: {
        fontSize: sizes.fontSizes.h3,
        margin: 0,
        color: colors.white
    },
    black: {
        fontSize: sizes.fontSizes.h3,
        margin: 0,
        color: colors.black
    }
}

export default Turn;