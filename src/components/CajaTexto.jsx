import React from 'react';

const CajaTexto = ({ titulo, propiedad1, propiedad2 }) => (
  <div className='flex flex-col gap-y-5 text-center bg-ColorPrimario p-3 roundedAtributo'>
    <h3 className='subtitulo'>{titulo}</h3>
    <p className='texto'>{propiedad1}</p>
    <span className='texto'>{propiedad2}</span>
  </div>
);

export default CajaTexto;
