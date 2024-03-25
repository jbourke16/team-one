import "./Review.css";
import { useState, useEffect } from "react";
import { getGame } from "../../services/games.js";
import { findUser } from "../../services/users.js";

function Review(props) {
  const [game, setGame] = useState([]);
  const [reviewUser, setReviewUser] = useState([]);

  useEffect(() => {
    const fetchReviewUser = async () => {
      if (props.user._id) {
        const revUser = await findUser(props.userId);
        setReviewUser(revUser);
      }
    };
    fetchReviewUser();
  }, []);

  useEffect(() => {
    const fetchGame = async () => {
      const oneGame = await getGame(props.game);
      setGame(oneGame);
    };
    fetchGame();
  }, []);

  return (
    <div className="review-wrapper">
      <div className="review-container">
        <div className="review-content">
          <h3 className="review-game-name">{game.name}</h3>
          <h4 className="review-user-name">User: {reviewUser.userName}</h4>
          <p className="review-user-rating">Rating: {props.rating}/5</p>
          <p className="review-user-comment">Review: {props.comment}</p>
        </div>
      </div>
    </div>
  );
}

export default Review;
