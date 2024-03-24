import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <div className="about-us">
        <NavLink className="about-link" to="/about">About Us</NavLink>
    </div>
  )
}

export default Footer