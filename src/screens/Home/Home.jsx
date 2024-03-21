import React from 'react'
import './Home.css'
import Nav from "../../components/Nav/Nav.jsx";
import Welcome from "./Welcome.jsx"
import "./Welcome.css"
import Monsters from "./Monsters.jsx"
import "./Monsters.css";
import Mission from "./Mission.jsx"
import "./Mission.css";


function Home({user}) {
  return (
  <>
    <div>
      <div className='header-container'>
      <h1 className='catch-phrase'>Play it, Love it, Log it.</h1>
      <h2 className='follow-phrase1'>Level up your gaming experience:</h2>
      <h2 className='follow-phrase2'>Connect, Discover, and Review with-</h2>
      <img className="header-logo"src='https://github.com/jbourke16/team-rekt-frontend/blob/dev/public/logos/LOGO-OUTLINE-BLACK.png?raw=true'/>
      <img className='monster-header' src='https://github.com/erichowington/Anime-Nexus/blob/main/public/images/MONSTERS2.png?raw=true'/>
        {/* <img className="header-logo"src='https://github.com/jbourke16/team-rekt-frontend/blob/dev/public/logos/LOGO-OUTLINE-BLACK.png?raw=true'/> */}
        <div className='header-content'>
        </div>
      </div>
      {/* <Nav user={user}/> */}
    </div>
    <Nav user={user}/>
    <Welcome />
    <Monsters/>
    <Mission />
  </>
  )
}

export default Home