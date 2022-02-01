import React from 'react';

const CajaInformacíon = ({ titulo, children }) => (
  <div className='divFlex w-full'>
    <div className='bg-ColorTerciario roundedCaja'>
      <h2 className='título text-ColorTítulo text-center'>{titulo}</h2>
    </div>
    <div className='bg-ColorPrimario bg-opacity-80 p-3 roundedCaja'>
      {children}
    </div>
  </div>
);

export default CajaInformacíon;
