import React from 'react';
import { colors } from '../utils/colors';

 const Turn = ({turn}) => {
    return (
        <>
        {
            turn === 'Player One' ? <h3 style={style.black}>{turn}'s turn</h3> : <h3 style={style.white}>{turn}'s turn</h3>
        }
            
        </>
    )
};

const style = {
    white: {
        fontSize: 'calc(1em + 3vw)',
        margin: 0,
        color: colors.white
    },
    black: {
        fontSize: 'calc(1em + 3vw)',
        margin: 0,
        color: colors.black
    }

}

export default Turn;