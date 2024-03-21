import { useState, useEffect} from 'react'
import { getGameReviews } from '../../services/reviews.js'
import { useParams } from 'react-router-dom'
import Review from '../../components/Review/Review.jsx'
import Nav from '../../components/Nav/Nav.jsx'
import AddReview from '../../modals/AddReviews/AddReview.jsx'
import './GameReviews.css'

function GameReviews({user}) {
const[reviews, setReviews] = useState([])

const { gameId } = useParams()

const fetchReviews = async () => {
  const allReviews = await getGameReviews(gameId);
  setReviews(allReviews);
}

useEffect(() => {
  fetchReviews()
}, [])

  if (!user) return <h1>Loading...</h1>

  return (
    <div className='reviews'>
      <Nav user={user}/>
      <AddReview user={user} game={gameId} fetchReviews={fetchReviews}/>
      <div className='reviews-container'>
        {reviews.map((review) => {
          return <Review 
          user={user}
          game={review.gameId}
          comment={review.comment}
          userId={review.userId}
          rating={review.rating}
          key={review._id}/>
        })}
      </div>
    </div>
  )
}

export default GameReviews