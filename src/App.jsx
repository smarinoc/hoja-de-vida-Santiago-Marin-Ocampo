/* eslint-disable prettier/prettier */

import { faChessKnight } from '@fortawesome/free-solid-svg-icons';
import CajaAtributo from 'components/CajaAtributo';
import CajaInformacíon from 'components/CajaInformación';
import CajaTexto from 'components/CajaTexto';
import 'styles/globals.css';

const App = () => {
  return (
    <div className='w-full bg-indigo-700'>

      <CajaAtributo Característica='Color' icon={faChessKnight} />
      <CajaInformacíon titulo='Caja 1'>
        <p className='m-5 '>Lorem Ipsum es simplemente el texto de relleno de  imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.</p>
      </CajaInformacíon>

      <CajaInformacíon titulo='Caja 2'>
        <div className='flex flex-col gap-y-3 p-5'>
          <CajaAtributo Característica='Color' icon={faChessKnight} />
          <CajaAtributo Característica='Color' icon={faChessKnight} />
          <CajaAtributo Característica='Color' icon={faChessKnight} />
        </div>
      </CajaInformacíon>


      <CajaInformacíon titulo='Caja 3'>
        <CajaTexto titulo='titulo' propiedad1='propiedad1' propiedad2='propiedad2' />
      </CajaInformacíon>
    </div>);
};

export default App;
