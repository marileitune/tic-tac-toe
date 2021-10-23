import React from 'react';
import { colors } from '../utils/colors';

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
        fontSize: 'calc(1em + 3vw)',
        margin: 0,
    },
    textBlack: {
        fontSize: 'calc(1em + 3vw)',
        margin: 0,
        color: colors.black
    },
    textWhite: {
        fontSize: 'calc(1em + 3vw)',
        margin: 0,
        color: colors.white
    },
    image: {
        width: '20%',
    }

}


export default Result;