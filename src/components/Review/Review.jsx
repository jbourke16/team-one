import './Review.css'
import {useState, useEffect} from 'react'
import { getGame } from '../../services/games.js'
import {useParams, useNavigate} from 'react-router-dom'
import { findUser } from '../../services/users.js'

function Review(props) {
  const [game, setGame] = useState([]);
  const [reviewUser, setReviewUser] = useState([]);

  let { gameId } = useParams()

  useEffect(() => {
    const fetchReviewUser = async () => {
      if (props.userId) {
        const revUser = await findUser(props.userId)
        setReviewUser(revUser)
      }
    }
    fetchReviewUser()
  }, [])

  useEffect(()=> {
    const fetchGame = async () =>{
      const oneGame = await getGame(gameId)
      setGame(oneGame)
    }
    fetchGame()
  }, [])


  return (
    <div className='review-container'>
      <h3>{game.name}</h3>
      <h4>User: {reviewUser.userName}</h4>
      <p>Rating: {props.rating}</p>
      <p>Review: {props.comment}</p>
    </div>
  )
}

export default Review