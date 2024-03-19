import { NavLink } from "react-router-dom"
import './Nav.css'

const authenticatedOptions = (
  <>
  <NavLink className = "link" to = "/myfavs">My Favs</NavLink>
  <NavLink className = "link" to = "/myreviews">My Reviews</NavLink>
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
  return (
    <nav>
      <div className="nav">
        <NavLink className="logo" to= "/">REK'T</NavLink>
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