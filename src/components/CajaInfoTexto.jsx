import React from 'react';
import CajaInformacíon from 'components/CajaInformación';
import CajaTexto from 'components/CajaTexto';

const CajaInfoTexto = ({ titulo, atributos }) => (
  <CajaInformacíon titulo={titulo}>
    <div className='flex flex-row gap-3 flex-wrap justify-center'>
      {atributos.map((item) => (
        <CajaTexto titulo={item.h1} propiedad1={item.h2} propiedad2={item.h3} />
      ))}
    </div>
  </CajaInformacíon>
);

export default CajaInfoTexto;
