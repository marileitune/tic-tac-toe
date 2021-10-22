import React from 'react';

 const Button = ({message, restartGame}) => {
    return (
        <>
            <button onClick={restartGame}>{message}</button>
        </>
    )
};

export default Button;