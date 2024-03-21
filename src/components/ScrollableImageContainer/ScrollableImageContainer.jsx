import React, { useState } from 'react';

const ScrollableImageContainer = ({ images }) => {
  const [scrolling, setScrolling] = useState(false);
  const [showDetails, setShowDetails] = useState(false);


  // const [showDetails, setShowDetails] = useState(false);

  // const toggleDetails = () => {
  //   setShowDetails(!showDetails);
  // };
  // if(showDetails) {
  //   document.body.classList.add('active-showDetails')
  // } else {
  //   document.body.classList.remove('active-showDetails')
  // }


  let scrollInterval;

  // const startScroll = () => {
  //   scrollInterval = setInterval(() => {
  //     const container = document.querySelector('.scroll-wrapper');
  //     container.style.transform = 'translateX(-1px)';
  //   }, 10);
  //   setScrolling(true);
  // };

  // const stopScroll = () => {
  //   clearInterval(scrollInterval);
  //   setScrolling(false);
  // };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  if(showDetails) {
    document.body.classList.add('active-showDetails')
  } else {
    document.body.classList.remove('active-showDetails')
  }

  return (
    <div
    showDetails
      className="scroll-image-container" onClick={toggleDetails}
      // onMouseOver={startScroll}
      // onMouseOut={stopScroll}
    >
      {showDetails && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-content">
              stdfjdsydfgiudysdhjfkgjdsyjfkgjdhsjfkgh
              {/* <h2>{props.name}</h2>
              <p>Bio: {props.bio}</p>
              <p>Genre: {props.genre}</p>
              <p>Console: {props.console}</p>
              <p>Release Date: {props.release}</p> */}
              {/* <button>Add Review</button> */}
              <button className="close-modal" onClick={toggleDetails}>
                Close
              </button>
              </div>
          </div>
        </div>
      )}
      <div className="scroll-wrapper">
        {images.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} onClick={toggleDetails} />
        ))}
      </div>
    </div>
  );
};

export default ScrollableImageContainer;