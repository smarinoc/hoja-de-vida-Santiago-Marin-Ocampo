/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable spaced-comment */
/* eslint-disable prettier/prettier */

import { faChessKnight } from '@fortawesome/free-solid-svg-icons';
import CajaAtributo from 'components/CajaAtributo';
import CajaInformacíon from 'components/CajaInformación';
import CajaTexto from 'components/CajaTexto';
import gato2 from './gato2.jpg'
import 'styles/globals.css';

const App = () => {
  return (
    <div className='flex flex-col px-5 py-8 gap-y-5 bg-ColorBackground'>
      <div className='flex flex-col md:flex-row gap-5 items-center'>
        <img src={gato2} width={300} height={300} />

        <CajaInformacíon titulo='Santiago Marín Ocampo'>
          <p className='texto text-center'>Estudiante de octavo semestre de ingeniería en sistemas</p>
          <p className='texto text-center'>santiagomarinocampo@gmail.com</p>
          <p className='texto text-center'>Medellín, Antioquia, Colombia</p>
        </CajaInformacíon>


      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 ' >

        <div className='flex flex-col gap-y-5'>

          <CajaInformacíon titulo='Sobre mí'>
            <p className='texto text-center'>Estudiante en últimos semestres de la carrera ingeniería de sistemas, con sentido de pertenencia, respetuoso hacia sus compañeros, honesto, capacidad para adaptarse fácilmente y fácil aprendizaje. </p>
          </CajaInformacíon>


          <CajaInformacíon titulo='Intereses y hobbies'>
            <div className='flex flex-col gap-y-3'>
              <CajaAtributo Característica='Apasionado por la programación' />
              <CajaAtributo Característica='Desarrollo móvil' />
              <CajaAtributo Característica='Fan de videojuegos' />
              <CajaAtributo Característica='Ciclista regular  ' />
            </div>
          </CajaInformacíon>

        </div>

        <div className='flex flex-col gap-y-5'>

          <CajaInformacíon titulo='Habilidades'>
            <div className='flex flex-col gap-y-3'>
              <CajaAtributo Característica='Pensamiento Lógico' />
              <CajaAtributo Característica='Autoevaluación' />
              <CajaAtributo Característica='Adaptabilidad' />
              <CajaAtributo Característica='Resolución de problemas' />

            </div>
          </CajaInformacíon>

          <CajaInformacíon titulo='Idiomas'>
            <div className='flex flex-col gap-y-3'>

              <CajaAtributo Característica='Español Nivel: Nativo' />
              <CajaAtributo Característica='Inglés Nivel: A2' />

            </div>
          </CajaInformacíon>

        </div>
      </div >

      <div className='flex flex-col xl:flex-row gap-5'>
        <CajaInformacíon titulo='Información académica '>
          <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 items-center xl:grid-cols-2'>

            <CajaTexto titulo='Bachiller con énfasis en desarrollo de software' propiedad1='I. E. Francisco Miranda' propiedad2='2011-2016' />
            <CajaTexto titulo='Medio técnico en desarrollo de software' propiedad1=' Politécnico Colombiano Jaime Isaza Cadavid' propiedad2='2014- 2016' />
            <CajaTexto titulo='Ingeniería de sistemas' propiedad1='Universidad de Antioquia' propiedad2='2017-Actualidad' />

          </div>
        </CajaInformacíon>

        <CajaInformacíon titulo='Experiencia laboral'>
          <div className='flex content-center justify-center'>
            <CajaTexto titulo='Soporte técnico call center' propiedad1='Emtelco' propiedad2='3 meses' />
          </div>
        </CajaInformacíon>

      </div>

      <CajaInformacíon titulo='Contacto'>
        <div className='flex flex-col gap-y-3'>

          <CajaAtributo Característica='Correo electrónico santiagomarinocampo@gmail.com' />
          <CajaAtributo Característica='Teléfono móvil +57 3126684942' />
          <CajaAtributo Característica='GitHub https://github.com/Santiango' />
          <CajaAtributo Característica='LinkedIn https://www.linkedin.com/in/santiago-marin-ocampo-478198227/2' />

        </div>
      </CajaInformacíon>




    </div >

  )

};

export default App;
