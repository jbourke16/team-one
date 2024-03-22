import { useState } from 'react'
import Game from '../../components/Game/Game.jsx';
import React from 'react'
import './Searchbar.css'

function Searchbar({ games, setSearchedGames }) {

  const [search, setSearch] = useState("");

  function handleClick() {
    const filteredGames = games?.filter((game) => {
      return game.name.toLowerCase().includes(search.toLowerCase())
    });

    setSearchedGames(filteredGames);
  }

  return (
    <div className="search-section">
      <div className="search-bar">
        <input type="text" value={search} placeholder='Search for a game' onChange={(e) => setSearch(e.target.value)} />
        <button className="browse-btn" onClick={handleClick}>Submit</button>
      </div>
    </div>
  )
}

export default Searchbar