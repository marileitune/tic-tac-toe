import React from 'react';

 const Result = ({winner}) => {
    return (
        <>
            { winner !== "Draw" ? <h3>{winner} won</h3> : <h3>{winner}</h3>}    
        </>
    )
};

export default Result;