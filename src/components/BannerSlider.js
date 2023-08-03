import React, { useState, useEffect } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import './BannerSlider.css';
import Banner1 from '../assets/paraBanner/BannerMisio.png';
import Banner2 from '../assets/paraBanner/BannerOfertaEspecial.png';
import Banner3 from '../assets/paraBanner/BannerEnvio.png';


const images = [
    Banner1,
    Banner2,
    Banner3
    // Agrega aquí la lista de nombres de tus imágenes
];

const BannerSlider = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const length = images.length;

    const nextSlide = () => {
        setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1);
    };

    const prevSlide = () => {
        setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1);
    };

    useEffect(() => {
        // Configura un intervalo para cambiar automáticamente las imágenes cada 5 segundos (5000 milisegundos)
        const autoPlay = setInterval(() => {
            nextSlide();
        }, 5000);

        // Limpia el intervalo cuando el componente se desmonta para evitar fugas de memoria
        return () => clearInterval(autoPlay);
    }, [currentImage]);

    return (
        <div className="slider">
            {images.map((image, index) => (
                <div
                    className={index === currentImage ? 'slide active' : 'slide'}
                    key={index}>
                        {index === currentImage && (
                    <img
                        src={image}
                        alt="slide"
                        className="image" />
                        )}
                </div>
            ))}
            
            {/* Iconos para cambiar manualmente las imágenes */}
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        </div>
    );
};

export default BannerSlider;
