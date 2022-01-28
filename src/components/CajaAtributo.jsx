/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar, faChessKnight} from '@fortawesome/free-solid-svg-icons';

const CajaAtributo = ({Característica}, {icon}) => {
    return (
        <div className='flex items-center w-full border-2 rounded-[20px] border-ColorSecundarioFuerte bg-ColorPrimarioFuerte flex py-3'>
            <FontAwesomeIcon icon={faStar} className='ml-4 text-ColorSecundarioFuerte' size="2x"/>
            <span className='font-Roboto text-[18px] mx-4 text-ColorLetraTexto grow'>{Característica}</span>
            <FontAwesomeIcon icon={faChessKnight} className='mr-4 text-ColorSecundarioFuerte' size="2x"/>
        </div>
    );
};

export default CajaAtributo;