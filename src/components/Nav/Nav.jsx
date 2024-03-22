import { NavLink } from "react-router-dom"
import { useState } from 'react';
import './Nav.css'

const authenticatedOptions = (
  <>
  <NavLink className = "link" to = "/myfavs">My Favs</NavLink> 
  <NavLink className = "link" to = "/myreviews">My Reviews</NavLink> 
  <NavLink className = "link" to= "/sign-out">Sign Out</NavLink> 
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
            <>
            <div className="dropdown-toggle" onClick={toggleDropdown}>
              <NavLink className="link">Welcome, {user.userName}</NavLink>
            </div>
            {isDropdownOpen && (
              <div className="dropdown-content">
                {authenticatedOptions}
              </div>
            )}
            </>
           ) : unauthenticatedOptions}
        </div>
      </div>
 
  )
}

export default Nav;