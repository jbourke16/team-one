import { NavLink } from "react-router-dom"
import { useState } from 'react';
import './Nav.css'

const authenticatedOptions = (
  <>
  <NavLink className = "authlink" to = "/myfavs">My Favs</NavLink> 
  <NavLink className = "authlink" to = "/myreviews">My Reviews</NavLink> 
  <NavLink className = "authlink" to= "/sign-out">Sign Out</NavLink> 
  </>
)
  

const unauthenticatedOptions = (
  <>
  <NavLink className = "link" to = "/sign-up">Sign Up</NavLink>
  <NavLink className = "link" to = "/sign-in">Sign In</NavLink>
  </> 
)

const alwaysOptions = (
  <>
  <NavLink className = "link" to ="/"><img className="home-nav-logo" src="https://github.com/jbourke16/team-rekt-frontend/blob/dev/public/logos/LOGO-NEON.png?raw=true"/></NavLink>
  <NavLink className = "link" to = "/games">Browse Games</NavLink>
  <NavLink className="link" to="/about">About</NavLink>
  </>
)


const Nav = ({ user }) => {
  const [isDropdownOpen, setIsDropDownOpen] = useState(false);

  const toggleDropdown = () => setIsDropDownOpen(!isDropdownOpen);

  return (

      <div className="nav">
        <div className="links">
          {alwaysOptions}
          {user ? (
              <div className="dropdown-toggle" onClick={toggleDropdown}>
                <div className="dropdown-container">
                  <NavLink className="link">Welcome, {user.userName}</NavLink>
                
                  {isDropdownOpen && (
                  <div className="dropdown-content">
                    {authenticatedOptions}
                  </div>
                
                  )}
                  </div>
            </div>
           ) : unauthenticatedOptions}
        </div>
      </div>
 
  )
}

export default Nav;