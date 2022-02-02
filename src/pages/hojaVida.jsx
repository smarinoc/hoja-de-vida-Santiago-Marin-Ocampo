import React from 'react';
import data from 'assets/data.json';
import CajaInformacíon from 'components/CajaInformación';
import foto from 'assets/foto.jpg';
import CajaInfoTexto from 'components/CajaInfoTexto';
import CajaInfoAtributo from 'components/CajaInfoAtributo';

const HojaVida = () => (
  <div className='divFlex px-5 py-8 bg-ColorBackground'>
    <div className='flex flex-col md:flex-row gap-5 items-center'>
      <img src={foto} alt='Foto perfil' width={300} height={300} />

      <CajaInformacíon titulo={data.cabezera.titulo}>
        <p className='texto text-center'>{data.cabezera.titulación}</p>
        <p className='texto text-center'>{data.cabezera.correo}</p>
        <p className='texto text-center'>{data.cabezera.ubicacíon}</p>
      </CajaInformacíon>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 '>
      <div className='divFlex'>
        <CajaInformacíon titulo={data.sobreMí.titulo}>
          <p className='texto text-center'>{data.sobreMí.perfil}</p>
        </CajaInformacíon>

        <CajaInfoAtributo
          titulo={data.interesesYHobbies.titulo}
          atributos={data.interesesYHobbies.atributos}
        />
      </div>

      <div className='divFlex'>
        <CajaInfoAtributo
          titulo={data.habilidades.titulo}
          atributos={data.habilidades.atributos}
        />
        <CajaInfoAtributo
          titulo={data.idiomas.titulo}
          atributos={data.idiomas.atributos}
        />
      </div>
    </div>

    <div className='flex flex-col xl:flex-row gap-5'>
      <CajaInfoTexto
        titulo={data.informaciónAcadémica.titulo}
        atributos={data.informaciónAcadémica.cajas}
      />
      <CajaInfoTexto
        titulo={data.experienciaLaboral.titulo}
        atributos={data.experienciaLaboral.cajas}
      />
    </div>

    <CajaInfoAtributo
      titulo={data.contacto.titulo}
      atributos={data.contacto.atributos}
    />
  </div>
);

export default HojaVida;
