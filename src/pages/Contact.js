import React, { useState } from 'react';
import BannerImage from '../assets/infoDireccionyHorario.png';
import './Contact.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Icon from '../assets/venue_location_icon.svg';
import L from 'leaflet';
import Title from '../components/Title';

const customIcon = new L.Icon({
  iconUrl: Icon,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

function Contact() {

  const [showForm, setShowForm] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Mostrar el mensaje de agradecimiento
    setShowForm(false);
    setShowMessage(true);
  };

  return (
    <> <Title title='CONTACTO' />
      <div className='contact-container'>
        <div className='contact-text'>
          <p>Si tenés alguna consulta, sugerencia o simplemente querés conocer más sobre nuestros 
            productos y servicios, no dudes en ponerte en contacto con nosotros</p>
          <p>Estamos aquí para ayudarte en todo lo que necesites.</p>
        </div>
        <div className='contact'>
          <div className='leftSide'
            style={{ backgroundImage: `url(${BannerImage})` }}></div>
          {showForm && (
            <div className='rightSide'>
              <h1>Consultanos</h1>
              <form id='contactForm' method='POST' onSubmit={handleFormSubmit}>
                <label htmlFor='name'>Nombre Completo</label>
                <input name='name' placeholder='Ingresa tu nombre' type='text' required />
                <label htmlFor='email'>Email</label>
                <input name='email' placeholder='Ingresa tu email' type='email' required />
                <label htmlFor='message'>Mensaje</label>
                <textarea rows="6"
                  placeholder='Ingrese su mensaje' name='message' required>
                </textarea>
                <button type='submit'>Enviar</button>
              </form>
            </div>
          )}

          {showMessage && (
            <div className="thankYouMessage">
              <h2>¡Gracias por escribirnos!</h2>
              <p>Pronto nos pondremos en contacto.</p>
            </div>
          )}
        </div>

        <div className='contact-map'>
          <MapContainer center={[-27.362, -55.903]} zoom={15} style={{ width: '100%', height: '400px' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[-27.362, -55.903]} icon={customIcon}>
              <Popup>
                Misiotrónica - Calle Cualquiera 123, Misiones
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </>
  );
}

export default Contact;



