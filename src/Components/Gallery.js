// Gallery.js
import React from 'react';

const images = [
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  // adicione mais URLs de imagem conforme necessário
];

function Gallery() {
  return (
    <div>
      {images.map((image, index) => (
        <img key={index} src={image} alt="" />
      ))}
    </div>
  );
}

export default Gallery;
