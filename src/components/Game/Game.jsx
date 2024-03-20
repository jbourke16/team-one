import React from "react";
import "./Game.css";
import GameDetails from "../../modals/GameDetails/GameDetails.jsx";

function Game(props) {
  return (
    <div>
      <div className="image-container" onClick={GameDetails}>
        <div className="game-name"> {props.name}</div>
        <img className="game-image" src={props.image} alt={props.name} />
      </div>
    </div>
  );
}

export default Game;
