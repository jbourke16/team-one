import React from 'react'
import './Games.css'
import { useState, useEffect } from 'react'
import Game from '../../components/Game/Game.jsx'
import { getGames } from '../../services/games.js'
import Nav from '../../components/Nav/Nav.jsx'
import EditReview from '../../modals/AddReviews/EditReview.jsx'


function Games({ user }) {
  const [games, setGames] = useState([]);
  const [scrollable, setScrollable] = useState(false);

  useEffect(() => {
    const fetchGames = async () => {
      const allGames = await getGames();
      setGames(allGames);
    };

    fetchGames();
  }, []);

  const handleMouseEnter = () => {
    setScrollable(true);
  };

  const handleMouseLeave = () => {
    setScrollable(false);
  }

  return (
    <div className="games">
      <Nav user={user} />
      <div className={`games-container ${scrollable ? 'scrollable' : ''}`}>
        <div className="gallery">
          {games.map((game, index) => (
            <div className="game-item"onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key={index}>
              <Game
                id={game._id}
                name={game.name}
                image={game.image}
                bio={game.bio}
                console={game.console}
                release={game.release}
                genre={game.genre}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Games;