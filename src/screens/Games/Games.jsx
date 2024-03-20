import React from 'react'
import './Games.css'
import { useState, useEffect } from 'react'
import Game from '../../components/Game/Game.jsx'
import { getGames } from '../../services/games.js'
import Nav from '../../components/Nav/Nav.jsx'


function Games({ user }) {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const allGames = await getGames();
      setGames(allGames);
    };

    fetchGames();
  }, []);

  return (
    <div className="games">
      <Nav user={user} />
      <div className="games-container">
        {games.map((game, index) => {
          return <Game 
          id={game._id}
          name={game.name} 
          image={game.image} 
          bio={game.bio}
          console={game.console}
          release={game.release}
          genre={game.genre}
          key={index} />;
        })}
      </div>
    </div>
  );
}

export default Games;