import {useState, useEffect} from 'react';
import { getFavGames, deleteFavGame } from '../../services/users';
import Nav from '../../components/Nav/Nav';
import './MyFavs.css';
import Game from '../../components/Game/Game.jsx';

const MyFavs = ({user, setToggleUser}) => {
  const [favGames, setFavGames] = useState([])
   
  useEffect(()=>{
    async function fetchFavGames(){
      const data = await getFavGames()
      setFavGames(data.favGames)
    }

    fetchFavGames()
  }, [user])

  return (
    <div className="myfavs-wrapper">
      <Nav user={user} />
      <div className='myfavs-container'>
          <h1 className='myfavs-header'>My Favorite Games:</h1>
          <div className="favorite-items">
            {
              favGames.length > 0 && favGames.map((game, index) => {
                let isFavGame = user?.favGames?.includes(game._id)
                return (
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
                      userName={user?.userName}
                    />
                )
              }
              )
            }
          </div>
        </div>
    </div>
  );
}

export default MyFavs;
