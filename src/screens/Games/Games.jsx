import './Games.css'
import { useState, useEffect } from 'react'
import Game from '../../components/Game/Game.jsx'
import { getGames } from '../../services/games.js'
import Nav from '../../components/Nav/Nav.jsx'
import Searchbar from '../../components/Searchbar/Searchbar.jsx'

function Games({ user, setToggleUser }) {
  const [scrollable, setScrollable] = useState(false);
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
  const handleMouseEnter = () => {
    setScrollable(true);
  };

  const handleMouseLeave = () => {
    setScrollable(false);
  }
  return (
    <div className="games">
      <Nav user={user} />
      <Searchbar games={games} setSearchedGames={setSearchedGames}/>
      <div className={`gallery games-container ${scrollable ? 'scrollable' : ''}`}>
        {searchedGames.map((game, index) => {
          let isFavGame = user?.favGames?.includes(game._id);
          return (
            <div className="game-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key={index}>
            <Game
              id={game._id}
              name={game.name}
              image={game.image}
              bio={game.bio}
              console={game.console}
              release={game.release}
              genre={game.genre}
              isFavGame={isFavGame}
              setToggleUser={setToggleUser}
              key={index}
            />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Games;