import {useState, useEffect} from 'react';
import { getFavGames, deleteFavGame } from '../../services/users';
import Nav from '../../components/Nav/Nav';
import './MyFavs.css'; // Importing the CSS file

const MyFavs = ({user}) => {
  const [favGames, setFavGames] = useState([])
  const [showMyFav, setShowMyFav] = useState(false);
   
  const toggleShowMyFav = () => {
    setShowMyFav(!showMyFav)
  }

  useEffect(()=>{
    async function fetchFavGames(){
      const data = await getFavGames()
      setFavGames(data.favGames)
    }

    fetchFavGames()
  }, [])

  const handleDelete = async (gameId) => {
    await deleteFavGame(gameId)

    const updatedFavGames = await getFavGames();
    setFavGames(updatedFavGames.favGames)
  }

  return (
    <div className="myfav-container">

      <h1>My Favorite Screen</h1>
      <p>This is my favorite screen where I showcase all my favorite things!</p>
      <div className="favorite-items" onClick={toggleShowMyFav}>
        {
          favGames.length > 0 && favGames.map((game) => (
            <div className="favorite-item" key={game._id}>
              <img src={game.image} alt={game.name} />
              <p>{game.name}</p>
              <button onClick={() => handleDelete(game._id)}>Delete</button>
            </div>
          ))
        }
        {/* Add more favorite items as needed */}
      </div>
    </div>
  );
}

export default MyFavs;
