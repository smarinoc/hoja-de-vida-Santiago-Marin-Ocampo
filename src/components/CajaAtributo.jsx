/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar, faChessKnight} from '@fortawesome/free-solid-svg-icons';

const CajaAtributo = ({Característica}, {icon}) => {
    return (
        <div className='flex items-center gap-x-4 roundedAtributo bg-ColorPrimario p-3'>
            <FontAwesomeIcon icon={faStar} className=' text-ColorSecundario' size="2x"/>
            <span className='texto  grow'>{Característica}</span>
            <FontAwesomeIcon icon={faChessKnight} className=' text-ColorSecundario' size='2x'/>
        </div>
    );
};

export default CajaAtributo;