import React from 'react';
import './NotFound.css';
/*import '../../App,css';*/
import Title from '../components/Title';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <Title title='UPSS! ERROR 404' />
      <div className='notFound-info'>
        <p>Esta página no existe</p>
        <Link to='/' className='notFound'>
          <button className='notFound-button'>REGRESAR AL INICIO</button>
        </Link>
      </div>
    </>
  );
}

export default NotFound;