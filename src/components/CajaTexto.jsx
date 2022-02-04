import React from 'react';

const CajaTexto = ({ título, propiedad1, propiedad2 }) => (
  <div className='divFlex text-center bg-ColorPrimario p-3 roundedAtributo self-center w-full md:max-w-[350px] lg:max-w-[300px]'>
    <h3 className='subtítulo'>{título}</h3>
    <p className='texto'>{propiedad1}</p>
    <span className='texto'>{propiedad2}</span>
  </div>
);

export default CajaTexto;
