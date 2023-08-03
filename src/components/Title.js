import React from 'react';
import './Title.css';

function Title(props) {
  return (
    <div>
      <h1 className='titulos'>{props.title}</h1>
    </div>
  );
}

export default Title;