import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const CajaAtributo = ({ Característica, icon }) => (
  <div className='flex items-center gap-4 roundedAtributo bg-ColorPrimario p-3 flex-wrap'>
    <FontAwesomeIcon icon={faStar} className='text-ColorSecundario' size='2x' />
    <span className='texto  grow'>{Característica}</span>
    <FontAwesomeIcon icon={icon} className='text-ColorSecundario' size='2x' />
  </div>
);

export default CajaAtributo;
