import React from 'react';
import CajaAtributo from 'components/CajaAtributo';
import CajaInformacíon from 'components/CajaInformación';

const CajaInfoAtributo = ({ titulo, atributos }) => (
  <CajaInformacíon titulo={titulo}>
    <div className='grid gap-3 xl:grid-cols-2'>
      {atributos.map((item) => (
        <CajaAtributo
          Característica={item.Característica}
          tipoIcon={item.tipoIcono}
          icon={item.icon}
        />
      ))}
    </div>
  </CajaInformacíon>
);

export default CajaInfoAtributo;
