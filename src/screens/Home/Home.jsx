import React from 'react'
import './Home.css'
import Nav from "../../components/Nav/Nav.jsx";

function Home({user}) {
  return (
    <div>
      <Nav user={user}/>
    </div>
  )
}

export default Home