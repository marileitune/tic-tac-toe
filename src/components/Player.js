import React from 'react';

 const XPlayer = (turn) => {
    return (
        <>
            {
                turn === "Player One" ? <img src='https://res.cloudinary.com/dplgnsjzm/image/upload/v1634905132/tic-tac-toe/XPlayer_caqey7.svg'/> : <img src='https://res.cloudinary.com/dplgnsjzm/image/upload/v1634905132/tic-tac-toe/OPlayer_tk589h.svg'/>
            }
        </>
    )
};

export default XPlayer;