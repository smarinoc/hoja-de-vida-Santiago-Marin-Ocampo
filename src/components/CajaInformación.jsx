import React from 'react';

const CajaInformacíon = ({ titulo, children }) => (
  <div className='flex flex-col gap-y-3 w-full'>
    <div className='bg-ColorTerciario roundedCaja'>
      <h2 className='titulo text-ColorTitulo text-center'>{titulo}</h2>
    </div>
    <div className='bg-ColorPrimario bg-opacity-80 p-3 roundedCaja'>
      {children}
    </div>
  </div>
);

export default CajaInformacíon;
