import { NavLink } from "react-router-dom"
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
  <NavLink className = "link" to = "/games">Browse Games</NavLink>
  <NavLink className = "link" to ="/"> Home</NavLink>
  </>
)

const Nav = ({ user }) => {
  console.log(user)
  return (
    <nav>
      <div className="nav">
        <div className="links">
          {user && <div className="link-welcome">Welcome, {user.userName}</div>}
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </div>
      </div>
    </nav>
  )
}

export default Nav;