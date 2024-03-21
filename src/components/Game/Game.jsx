import React from "react";
import "./Game.css";
import { useState } from "react";
import { Link } from "react-router-dom"

function Game(props) {

  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  if(showDetails) {
    document.body.classList.add('active-showDetails')
  } else {
    document.body.classList.remove('active-showDetails')
  }

  return (
    <div>
    
      <div className="image-container" onClick={toggleDetails}>

        <div className="game-name"> {props.name}</div>
        <img className="game-image" src={props.image} alt={props.name} />
      </div>
      {showDetails && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-content">
              <h2>{props.name}</h2>
              <p>Bio: {props.bio}</p>
              <p>Genre: {props.genre}</p>
              <p>Console: {props.console}</p>
              <p>Release Date: {props.release}</p>
              <Link className="link" to={`/reviews/games/${props.id}`}> Reviews </Link>
              <button className="close-modal" onClick={toggleDetails}>
                Close
              </button>
              </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Game;
