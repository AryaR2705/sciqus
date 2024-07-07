import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 

function Container1() {
  const [images, setImages] = useState([
    'https://picsum.photos/400/300',
    'https://picsum.photos/400/300',
    'https://picsum.photos/400/300',
    'https://picsum.photos/400/300'
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newImages = Array.from({ length: images.length }, (_, index) => `https://picsum.photos/400/300?random=${Math.random()}`);
      setImages(newImages);
    }, 5000); 

    return () => clearInterval(interval); 
  }, [images]); 

  return (
    <div className="container">
      <h2>Container1</h2>
      <div className="image-carousel">
        <Carousel showThumbs={false} showArrows={true} infiniteLoop={true} emulateTouch={true}>
          {images.map((imageUrl, index) => (
            <div key={index}>
              <img src={imageUrl} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Container1;
