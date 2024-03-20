import React from "react";
import "./Game.css";
import GameDetails from "../../modals/GameDetails/GameDetails.jsx";
import AddReview from "../../modals/AddReviews/AddReview.jsx";

function Game(props) {
  return (
    <div>
      <div className="image-container" onClick={AddReview}>
        <div className="game-name"> {props.name}</div>
        <img className="game-image" src={props.image} alt={props.name} />
      </div>
    </div>
  );
}

export default Game;
