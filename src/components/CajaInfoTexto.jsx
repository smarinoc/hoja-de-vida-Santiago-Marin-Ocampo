import React from 'react';
import CajaInformacíon from 'components/CajaInformación';
import CajaTexto from 'components/CajaTexto';

const CajaInfoTexto = ({ titulo, atributos }) => (
  <CajaInformacíon titulo={titulo}>
    <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 items-center content-center'>
      {atributos.map((item) => (
        <CajaTexto titulo={item.h1} propiedad1={item.h2} propiedad2={item.h3} />
      ))}
    </div>
  </CajaInformacíon>
);

export default CajaInfoTexto;
