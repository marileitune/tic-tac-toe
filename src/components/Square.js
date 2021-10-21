import React from 'react';

 const Square = ({ value, onClick }) => {//here I'm destructuring the props in the parameter
    return (
        <>
            <button style={{width: '50px', height: '50px'}} onClick={() => onClick(value)}>{value}</button>
        </>
    )
};

export default Square;