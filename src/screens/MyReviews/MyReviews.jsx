import { useState, useEffect} from 'react'
import { getReviews } from '../../services/reviews.js'
import Review from '../../components/Review/Review.jsx'
import Nav from '../../components/Nav/Nav.jsx'
import './MyReviews.css'


function MyReviews({user}) {

  const[reviews, setReviews] = useState([])

  const fetchReviews = async () => {
    const allReviews = await getReviews();
    setReviews(allReviews);
  }
  
  useEffect(() => {
    fetchReviews()
  }, [])

  return (
    <div>
      <Nav user={user}/>
    </div>
  )
}

export default MyReviews