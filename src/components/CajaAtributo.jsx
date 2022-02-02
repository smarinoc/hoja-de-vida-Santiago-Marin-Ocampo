import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'fontawesome.js';

const CajaAtributo = ({ Característica, tipoIcon, icon }) => (
  <div className='flex items-center place-content-center gap-4 roundedAtributo bg-ColorPrimario p-3 flex-wrap'>
    <FontAwesomeIcon
      icon={['fa', 'star']}
      className='text-ColorSecundario'
      size='2x'
    />
    <span className='texto  grow '>{Característica}</span>
    <FontAwesomeIcon
      icon={[tipoIcon, icon]}
      className='text-ColorSecundario'
      size='2x'
    />
  </div>
);

export default CajaAtributo;
