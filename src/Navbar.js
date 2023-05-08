import React from 'react'
import "./Navbar.css"
import logo from "./logo1.png"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
   
         <div>
        <nav className="navbar">
          <div className="navbar-container container">
            <input type="checkbox" name="" id="" />
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
            <ul className="menu-items">
              <li><Link to="/">Random Quotes</Link></li>
              <li><Link to="/mquotes">Manual Quotes</Link></li>
              <li><Link to="/addquotes">Add New Quotes</Link></li>
              
            </ul>
            <img className="logo" src={logo} alt='logo'/>
          </div>
        </nav>
    </div>
    
  )
}

export default Navbar