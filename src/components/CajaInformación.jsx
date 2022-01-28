/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */


import React from 'react';

const CajaInformacíon = ({ titulo, children }) => {
    return (
        <div className='flex flex-col m-20 bg-slate-200 gap-y-3'>
            <div className='bg-ColorTerciarioMedio rounded-br-[20px] rounded-tl-[20px]'>
                <h2 className='text-ColorTitulo text-[36px] w-auto text-center'>{titulo}</h2>
            </div>

            <div className='bg-ColorPrimarioMedio bg-opacity-80 rounded-br-[20px] rounded-tl-[20px]'>
                {children}
            </div>

        </div>
    );
};

export default CajaInformacíon;