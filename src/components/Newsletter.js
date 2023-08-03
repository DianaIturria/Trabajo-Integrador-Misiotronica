import React, { useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Verificamos si el campo de correo electrónico está vacío antes de suscribir al usuario
    if (!email) {
        setFormSubmitted(true); // Para mostrar el mensaje de error
        return;
      }

    // Aquí puedes agregar la lógica para enviar el correo electrónico a tu backend o realizar alguna acción con el email ingresado.
    console.log('Correo electrónico:', email);
    setEmail('');
    setSubscribed(true); // Actualizamos el estado para mostrar el mensaje de agradecimiento.
  
    // Después de 3 segundos (3000 milisegundos), restablecemos el estado de "subscribed" a "false" para mostrar el formulario nuevamente.
  setTimeout(() => {
    setSubscribed(false);
  }, 3000);
};

  return (
    <div className="newsletter-container">
      <h2>Suscribite a nuestro Newsletter</h2>
      <p>Y enterate de las últimas novedades</p>
      {!subscribed ? (
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          className={`newsletter-input ${formSubmitted && !email ? 'error' : ''}`}
          placeholder="Ingresa tu correo electrónico"
          value={email}
          onChange={handleEmailChange}
          required // Campo requerido
        />
        <button type="submit" className="newsletter-btn">Suscribirse</button>
      </form>
      ) : (
        <p>¡Gracias por suscribirte! Te mantendremos informado con nuestras novedades.</p>
      )}
    </div>
  );
};

export default Newsletter;
