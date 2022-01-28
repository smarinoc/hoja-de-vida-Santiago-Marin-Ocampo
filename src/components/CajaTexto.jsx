/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';

const CajaTexto = ({ titulo, propiedad1, propiedad2 }) => {
    return (
        <div className='flex-1 flex-col text-center bg-ColorPrimarioFuerte m-2 border-2 border-ColorSecundarioFuerte '>
            <h3>{titulo}</h3>
            <p>{propiedad1}</p>
            <span>{propiedad2}</span>
        </div>
    );
};

export default CajaTexto;