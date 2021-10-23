import React from 'react';
import { colors } from '../utils/colors';
import { sizes } from '../utils/sizes';

 const Result = ({winner}) => {
    return (
        <>
            { winner !== 'Draw' ? 
            <>  
                {
                    winner === 'Player One' ? 
                    <>
                        <h3 style={style.textBlack}>{winner} won</h3>
                        <img style={style.image} src='https://res.cloudinary.com/dplgnsjzm/image/upload/v1634905132/tic-tac-toe/XPlayer_caqey7.svg' alt="x"/>  
                    </>
                    : 
                    <>
                        <h3 style={style.textWhite}>{winner} won</h3>
                        <img style={style.image} src='https://res.cloudinary.com/dplgnsjzm/image/upload/v1634905132/tic-tac-toe/OPlayer_tk589h.svg' alt="o"/>
                    </>
                } 
            </>
            : 
            <>
                <h3 style={style.text}>{winner}</h3>
            </> 
            }   
        </>
    )
};

const style = {
    text: {
        fontSize: sizes.fontSizes.h3,
        margin: 0,
    },
    textBlack: {
        fontSize: sizes.fontSizes.h3,
        margin: 0,
        color: colors.black
    },
    textWhite: {
        fontSize: sizes.fontSizes.h3,
        margin: 0,
        color: colors.white
    },
    image: {
        width: '20%',
        marginTop: sizes.boxSizes.xl,
        marginBottom: sizes.boxSizes.xl,
    }

}


export default Result;