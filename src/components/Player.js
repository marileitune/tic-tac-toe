import React from 'react';

 const Player = ({turn}) => {

    return (
        <>
            {
                turn === 'Player One' ? <img src='https://res.cloudinary.com/dplgnsjzm/image/upload/v1634905132/tic-tac-toe/XPlayer_caqey7.svg' alt="x"/> : <img src='https://res.cloudinary.com/dplgnsjzm/image/upload/v1634905132/tic-tac-toe/OPlayer_tk589h.svg' alt="o"/>
            }
        </>
    )
};

export default Player;