import { useState, useEffect} from 'react'
import { getUserReviews, deleteReview } from '../../services/reviews.js'
import Review from '../../components/Review/Review.jsx'
import Nav from '../../components/Nav/Nav.jsx'
import './MyReviews.css'
import EditReview from '../../modals/AddReviews/EditReview.jsx'


function MyReviews({user}) {

  const[userReviews, setUserReviews] = useState([])

  const handleDeleteReview = async (id) => {
   await deleteReview(id)
    fetchUserReviews()
  }

  const fetchUserReviews = async () => {
    const allUserReviews = await getUserReviews(user._id);
    setUserReviews(allUserReviews);
  }
  
  useEffect(() => {
    fetchUserReviews()
  }, [])

  if (!user) return <h1>Loading...</h1>

  return (
    <div>
      <Nav user={user}/>
      <div className='reviews-container'>
        {userReviews.map((userReview) => {
          return (
          <div>
          <Review 
          user={user}
          game={userReview.gameId}
          comment={userReview.comment}
          userId={userReview.userId}
          rating={userReview.rating}
          key={userReview._id}/>
          <EditReview user={user} reviewId={userReview._id} game={userReview.gameId} fetchUserReviews={fetchUserReviews}/>
          <button onClick={() => handleDeleteReview(userReview._id)}>Delete</button>
          </div>)
        })}

      </div>
    </div>
  )
}

export default MyReviews