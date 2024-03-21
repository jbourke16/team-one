import { useState, useEffect} from 'react'
import { getGameReviews } from '../../services/reviews.js'
import { useParams } from 'react-router-dom'
import Review from '../../components/Review/Review.jsx'
import Nav from '../../components/Nav/Nav.jsx'
import AddReview from '../../modals/AddReviews/AddReview.jsx'
import './GameReviews.css'

function GameReviews() {
const[reviews, setReviews] = useState([])

const { gameId } = useParams()

useEffect(() => {
  const fetchReviews = async () => {
    const allReviews = await getGameReviews(gameId);
    setReviews(allReviews);
  }
  fetchReviews()
}, [])

  return (
    <div className='reviews'>
      <Nav />
      <AddReview />
      <div className='reviews-container'>
        {reviews.map((review) => {
          return <Review 
          comment={review.comment}
          user={review.userId}
          rating={review.rating}
          key={review._id}/>
        })}
      </div>
    </div>
  )
}

export default GameReviews