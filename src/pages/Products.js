import React, { useState } from 'react';
import { ProductsList } from '../components/ProductsList';
import './Products.css';
import ProductItem from '../components/ProductItem';
import Title from '../components/Title';



function Products() {

    const [searchQuery, setSearchQuery] = useState('');
    const [sortType, setSortType] = useState('ascName'); // Estado para almacenar el tipo de orden actual

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSortChange = (event) => {
        setSortType(event.target.value);
    };

    const filterProducts = ProductsList.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Función para ordenar los productos según el tipo de orden actual
    const sortProducts = (products) => {
        switch (sortType) {
            case 'ascName':
                return products.sort((a, b) => a.name.localeCompare(b.name));
            case 'descName':
                return products.sort((a, b) => b.name.localeCompare(a.name));
            case 'ascPrice':
                return products.sort((a, b) => a.price - b.price);
            case 'descPrice':
                return products.sort((a, b) => b.price - a.price);
            default:
                return products;
        }
    };

    return (
        <>
            <Title title='NUESTRO CATÁLOGO' />
            <div className='products'>
                <div className='searchAndOrder'>
                    <div className='searchBar'>
                        <input
                            type='text'
                            value={searchQuery}
                            onChange={handleSearchInputChange}
                            placeholder='Buscar productos...'
                        />
                        <div className='orderByOptions'>
                            <label htmlFor='sortSelect'>Ordenar por:</label>
                            <select id='sortSelect' value={sortType} onChange={handleSortChange}>
                                <option value='ascName'>Nombre ascendente</option>
                                <option value='descName'>Nombre descendente</option>
                                <option value='ascPrice'>Precio menor a mayor</option>
                                <option value='descPrice'>Precio mayor a menor</option>
                            </select>
                        </div>
                    </div>
                    <div className='productsList'>
                        {sortProducts(filterProducts).map((product, key) => {
                            return (
                                <ProductItem
                                    key={key}
                                    image={product.image}
                                    name={product.name}
                                    price={product.price}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Products;


