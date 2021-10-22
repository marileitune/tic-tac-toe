import React from 'react';

 const Square = ({ value, onClick }) => {
    return (
        <>
            <button style={{width: '50px', height: '50px'}} onClick={() => onClick(value)}>{value}</button>
        </>
    )
};

export default Square;