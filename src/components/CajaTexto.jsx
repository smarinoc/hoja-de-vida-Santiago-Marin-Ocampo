import React from 'react';

const CajaTexto = ({ titulo, propiedad1, propiedad2 }) => (
  <div className='divFlex text-center bg-ColorPrimario p-3 roundedAtributo'>
    <h3 className='subtítulo'>{titulo}</h3>
    <p className='texto'>{propiedad1}</p>
    <span className='texto'>{propiedad2}</span>
  </div>
);

export default CajaTexto;
