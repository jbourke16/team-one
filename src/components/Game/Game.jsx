import React from "react";
import "./Game.css";
import { useState } from "react";
import { favGame, deleteFavGame } from "../../services/users.js";
import AddReview from "../../modals/AddReviews/AddReview.jsx";
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

  async function handleFavGameClick(){
    let response = await favGame(props.id)
    alert(`${response.message}`)
    props.setToggleUser(prev => !prev)
  }

  // async function deleteFavGameClick(){
  //   let response = await deleteFavGame(props.id)
  //   alert(`${response.message}`)
  //   props.setToggleUser(prev => !prev)
  // }

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

              <h2 className="game-modal-name">{props.name}</h2>
              {/* <p>Image: {props.image}</p> */}
              <p className="game-bio"><span className="game-header">Bio:</span> {props.bio}</p>
              <p className="game-genre"><span className="game-header">Genre:</span> {props.genre}</p>
              <p className="game-console"><span className="game-header">Console:</span> {props.console}</p>
              <p className="game-release"><span className="game-header">Release Date:</span>{props.release}</p>
              <Link className="link" to={props.userName ? `/reviews/games/${props.id}` : "/sign-in"}> Reviews </Link>
              {/* <button>Add Review</button> */}
              <button 
                style={{ backgroundColor: props.isFavGame ? "red" : "grey"}}
                onClick={handleFavGameClick}
              >Heart</button>

              <button className="close-modal" onClick={toggleDetails}>
                X
              </button>
              </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Game;
