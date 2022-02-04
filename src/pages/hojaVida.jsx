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

      <CajaInformacíon título={data.cabecera.título}>
        <p className='texto text-center'>{data.cabecera.profesión}</p>
        <p className='texto text-center'>{data.cabecera.correo}</p>
        <p className='texto text-center'>{data.cabecera.ubicacíon}</p>
      </CajaInformacíon>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 '>
      <div className='divFlex'>
        <CajaInformacíon título={data.sobreMí.título}>
          <p className='texto text-center'>{data.sobreMí.perfil}</p>
        </CajaInformacíon>

        <CajaInfoAtributo
          título={data.interesesYHobbies.título}
          atributos={data.interesesYHobbies.atributos}
        />
      </div>

      <div className='divFlex'>
        <CajaInfoAtributo
          título={data.habilidades.título}
          atributos={data.habilidades.atributos}
        />
        <CajaInfoAtributo
          título={data.idiomas.título}
          atributos={data.idiomas.atributos}
        />
      </div>
    </div>

    <div className='flex flex-col xl:flex-row gap-5'>
      <CajaInfoTexto
        título={data.informaciónAcadémica.título}
        atributos={data.informaciónAcadémica.cajas}
      />
      <CajaInfoTexto
        título={data.experienciaLaboral.título}
        atributos={data.experienciaLaboral.cajas}
      />
    </div>

    <CajaInfoAtributo
      título={data.contacto.título}
      atributos={data.contacto.atributos}
    />
  </div>
);

export default HojaVida;
