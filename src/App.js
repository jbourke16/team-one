import './App.css';
import { useState, useEffect } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { verifyUser } from './services/users.js'
import Home from "./screens/Home/Home.jsx"
import SignUp from "./screens/AuthForms/SignUp.jsx"
import SignIn from "./screens/AuthForms/SignIn.jsx"
import Games from "./screens/Games/Games.jsx"
import GameReviews from "./screens/GameReviews/GameReviews.jsx"
import MyFavs from "./screens/MyFavs/MyFavs.jsx"
import MyReviews from "./screens/MyReviews/MyReviews.jsx"

function App() {

  const [user, setUser] = useState(null)

  useEffect(()=>{
    const fetchUser = async () => {
      const user= await verifyUser()
      user ? setUser(user) : setUser(null)
    }
    fetchUser()
  }, [])

  return (
    <div className="App">
      Gucci
      <Routes>
        <Route path="/" element={<Home user={user}/>}/>
        <Route path="/sign-up" element={<SignUp setuser={setUser}/>}/>
        <Route path="/sign-in" element={<SignIn setuser={setUser}/>}/>
        <Route path="/games" element={<Games user={user}/>}/>
        <Route path="/reviews" element={<GameReviews user={user}/>}/>
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
