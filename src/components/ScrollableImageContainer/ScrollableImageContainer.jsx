import React, { useState } from 'react';

const ScrollableImageContainer = ({ images }) => {
  const [scrolling, setScrolling] = useState(false);

  let scrollInterval;

  const startScroll = () => {
    scrollInterval = setInterval(() => {
      const container = document.querySelector('.scroll-wrapper');
      container.style.transform = 'translateX(-1px)';
    }, 10);
    setScrolling(true);
  };

  const stopScroll = () => {
    clearInterval(scrollInterval);
    setScrolling(false);
  };

  return (
    <div
      className="image-container"
      onMouseOver={startScroll}
      onMouseOut={stopScroll}
    >
      <div className="scroll-wrapper">
        {images.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} />
        ))}
      </div>
    </div>
  );
};

export default ScrollableImageContainer;