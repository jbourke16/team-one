import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Welcome.css"

function Welcome() {
  return (
    <div className= "welcome-wrapper">
      <div className= "welcome-statement">Welcome to REK'T!</div>
        <div className='welcome-content-wrapper'>
            <p className= "welcome-content1">Where your opinion matters!--</p>
            <p className= 'welcome-content2'>Welcome to our gaming haven, where every button press tells a story. Dive into our world, designed exclusively for gamers like you. Think-- Letterboxd, but for the virtual realm, our platform is your ultimate companion in exploring, reviewing, and discussing the vast universe of video games!</p>
        </div>
        <p className= 'sign-up-statement'>Join our on-line community and connect today!</p>
        <NavLink className = "welcome-link" to = "/sign-up">Sign Up</NavLink>
      

    </div>
  );
}

export default Welcome