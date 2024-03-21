import React from 'react'
import axios from 'axios'
import './Games.css'
import { useState, useEffect } from 'react'
import Game from '../../components/Game/Game.jsx'
import { getGames } from '../../services/games.js'
import Nav from '../../components/Nav/Nav.jsx'
import Searchbar from '../../components/Searchbar/Searchbar.jsx'
import ScrollableImageContainer from '../../components/ScrollableImageContainer/ScrollableImageContainer.jsx'

function Games({ user }) {
  const [games, setGames] = useState([]);
  const [searchedGames, setSearchedGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const allGames = await getGames();
      setGames(allGames);
      setSearchedGames(allGames)
    };

    fetchGames();
  }, []);
  return (
    <div className="games">
      <Nav user={user} />
      <Searchbar games={games} setSearchedGames={setSearchedGames}/>
      <div className="games-container">
        {searchedGames.map((game, index) => {
          return <Game 
          user={user}
          id={game._id}
          name={game.name} 
          image={game.image} 
          bio={game.bio}
          console={game.console}
          release={game.release}
          genre={game.genre}
          key={index} 
          />;
        })}
      </div>
    </div>
  );
}

export default Games;