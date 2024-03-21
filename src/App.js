import './App.css';
import { useState, useEffect } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { verifyUser } from './services/users.js'
import Home from "./screens/Home/Home.jsx"
import SignUp from "./screens/AuthForms/SignUp.jsx"
import SignIn from "./screens/AuthForms/SignIn.jsx"
import SignOut from "./screens/AuthForms/SignOut.jsx"
import Games from "./screens/Games/Games.jsx"
import GameReviews from "./screens/GameReviews/GameReviews.jsx"
import MyFavs from "./screens/MyFavs/MyFavs.jsx"
import MyReviews from "./screens/MyReviews/MyReviews.jsx"
import AddReview from './modals/AddReviews/AddReview.jsx'
// import GameDetails from './modals/GameDetails/GameDetails.jsx';
import EditReview from './modals/AddReviews/EditReview.jsx';

function App() {

  const [user, setUser] = useState(null)
  const [toggleUser, setToggleUser] = useState(false)

  useEffect(()=>{
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setUser(user) : setUser(null)
    }
    fetchUser()
  }, [toggleUser])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home user={user}/>}/>
        <Route path="/sign-up" element={<SignUp setUser={setUser}/>}/>
        <Route path="/sign-in" element={<SignIn setUser={setUser}/>}/>
        <Route path="/sign-out" element={<SignOut setUser={setUser} />} />
        <Route path="/games" element={<Games user={user} setToggleUser={setToggleUser}/>}/>
        <Route path="/reviews/games/:gameId" element={<GameReviews user={user}/>}/>
        <Route path="/addreview" element={<AddReview user={user}/>}/>
        <Route path="reviews/:reviewId" element={<EditReview user={user}/>}/>
        {/* <Route path="/gamedetails" element={<GameDetails user={user}/>}/> */}
        <Route path="/myfavs" element={
          user ? <MyFavs user={user}/> : <Navigate to="/sign-up"/>}/>
        <Route path="/myreviews" element={
          user ? <MyReviews user={user}/> : <Navigate to="/sign-up"/>}/>
        <Route />
      </Routes>
    </div>
  );
}

export default App;
