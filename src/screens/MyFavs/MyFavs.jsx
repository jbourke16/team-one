import {useState, useEffect} from 'react';
import { getFavGames } from '../../services/users';
import './MyFavs.css'; // Importing the CSS file
import Nav from '../../components/Nav/Nav';

const MyFavs = () => {
  const [favGames, setFavGames] = useState([])

  useEffect(()=>{
    async function fetchFavGames(){
      const data = await getFavGames()
      setFavGames(data.favGames)
    }

    fetchFavGames()
  }, [])

  return (
    <div className="myfav-container">
      <h1>My Favorite Screen</h1>
      <p>This is my favorite screen where I showcase all my favorite things!</p>
      <div className="favorite-items">
        {
          favGames.length > 0 && favGames.map((game) => (
            <div className="favorite-item">
              <img src={game.image} alt={game.name} />
              <p>{game.name}</p>
            </div>
          ))
        }
        {/* Add more favorite items as needed */}
      </div>
    </div>
  );
}

export default MyFavs;
