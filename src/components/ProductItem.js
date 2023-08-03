import React from 'react';
import './ProductsList';
import './ProductItem.css'

/* CARDS */

function ProductItem ({name, image, price}) {
  return (
    <div className='productItem'>
        <div style={{ backgroundImage: `url(${image})` }}></div>
        <h1>{name}</h1>
        <p>${price}</p>
        </div>
  );
}

export default ProductItem;

