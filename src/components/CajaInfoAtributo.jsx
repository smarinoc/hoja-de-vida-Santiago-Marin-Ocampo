import React from 'react';
import CajaAtributo from 'components/CajaAtributo';
import CajaInformacíon from 'components/CajaInformación';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const CajaInfoAtributo = ({ titulo, atributos }) => (
  <CajaInformacíon titulo={titulo}>
    <div className='grid flex-col gap-3 xl:grid-cols-2'>
      {atributos.map((item) => (
        <CajaAtributo Característica={item} icon={faStar} />
      ))}
    </div>
  </CajaInformacíon>
);

export default CajaInfoAtributo;
