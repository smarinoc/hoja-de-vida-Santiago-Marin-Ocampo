/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */


import React from 'react';

const CajaInformacíon = ({ titulo, children }) => {
    return (
        <div className='flex flex-col gap-y-3'>
            <div className='bg-ColorTerciarioMedio rounded-br-[20px] rounded-tl-[20px]'>
                <h2 className='titulo text-ColorTitulo text-center'>{titulo}</h2>
            </div>

            <div className='bg-ColorPrimarioMedio bg-opacity-80 rounded-br-[20px] rounded-tl-[20px] p-3'>
                {children}
            </div>

        </div>
    );
};

export default CajaInformacíon;