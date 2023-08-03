import React from 'react';
import './About.css';
import AboutMisio from '../assets/paraBanner/BannerVista.png';
import Title from '../components/Title';

function About() {
  return (
    <>
      <Title title='NOSOTROS' />
      <div className="aboutUs">
        <div className="aboutUsContent">
          <img src={AboutMisio} alt="Logo de Misiotrónica" className="logo" />

          <p>
            Bienvenido a Misiotrónica, tu tienda de confianza para todo lo relacionado con la electrónica en la hermosa provincia de Misiones. </p>
          <p>Somos una empresa familiar apasionada por la tecnología y los dispositivos electrónicos, y nos enorgullecemos de brindar a nuestros clientes productos de alta calidad y un servicio excepcional.
          </p>
          <h2>NUESTRA HISTORIA</h2>
          <p>
            Misiotrónica nació con el sueño de ofrecer a nuestra comunidad una amplia variedad de productos electrónicos de última generación. </p>
          <p>Desde nuestros humildes comienzos en un pequeño local hasta convertirnos en una Pyme próspera, siempre hemos mantenido nuestro compromiso de proporcionar soluciones tecnológicas para cada uno de nuestros clientes.
          </p>
          <h2>NUESTRO EQUIPO</h2>
          <p>
            Detrás de Misiotrónica hay un equipo de expertos apasionados por la electrónica y las últimas tendencias del mercado. Nuestro personal está altamente capacitado y siempre está dispuesto a ayudarte a encontrar el producto perfecto que se adapte a tus necesidades y presupuesto.
          </p>
          <h2>NUESTRA MISIÓN</h2>
          <p>
            En Misiotrónica, nuestra misión es hacer que la tecnología sea accesible para todos. Creemos que la electrónica puede mejorar nuestras vidas y conectar al mundo, por lo que nos esforzamos por ofrecer productos innovadores y de calidad que mejoren tu experiencia diaria.
          </p>
          <h2>NUESTRA VISIÓN</h2>
          <p>
            Nuestra visión es convertirnos en el referente de la electrónica en Misiones, siendo reconocidos por nuestro compromiso con la satisfacción del cliente, la excelencia en el servicio y la calidad de nuestros productos. </p>
          <p>Queremos seguir siendo la elección preferida de nuestros clientes cuando busquen soluciones confiables y de vanguardia.
          </p>
          <h2>
            Gracias por elegir Misiotrónica como tu tienda de electrónica de confianza. ¡Esperamos verte pronto!
          </h2>
        </div>
      </div>
    </>
  );
}

export default About;

/*
<h1 className='about-title'>NOSOTROS</h1>
*/