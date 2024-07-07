import React, { useState } from 'react';
import masterball from './masterball.png';
import pokeball from './pokeball.png';
import ultraball from './ultraball.png';

function Container3() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [masterball, pokeball, ultraball];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="container">
      <h2>Container 3</h2>
      <div className="interactive-slider">
        <button onClick={prevImage}>&#8249;</button>
        <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`} />
        <button onClick={nextImage}>&#8250;</button>
      </div>
    </div>
  );
}

export default Container3;
