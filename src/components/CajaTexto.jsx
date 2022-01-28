/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';

const CajaTexto = ({ titulo, propiedad1, propiedad2 }) => {
    return (
        <div className='flex flex-col gap-y-5 text-center bg-ColorPrimarioFuerte  p-3 border-2 border-ColorSecundarioFuerte rounded-[20px] '>
            <h3 className='subtitulo'>{titulo}</h3>
            <p className='texto'>{propiedad1}</p>
            <span className='texto'>{propiedad2}</span>
        </div>
    );
};

export default CajaTexto;