import React from 'react';

 const Button = ({message, restartGame}) => {
    return (
        <>
            <button className="br2" onClick={restartGame}>{message}</button>
        </>
    )
};

export default Button;