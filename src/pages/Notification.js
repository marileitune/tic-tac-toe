import React from 'react';
import Result from '../components/Result';
import Button from '../components/Button';

 const Notification = ({winner, restartGame}) => {
    return (
        <>
            <Result winner={winner}/>
            <Button message={"restart"} restartGame={restartGame}/>
        </>
    )
};

export default Notification;