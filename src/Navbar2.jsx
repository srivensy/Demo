import React from 'react'
import { Link } from 'react-router-dom'

const Navbar2 = () => {
  return (
    <div>
     <nav class="nav">
        <Link to="/home">
        <a class="nav-link">Home</a>
        </Link>
        <Link to="/contact">
        <a class="nav-link">Contact</a>
        </Link>
        <Link to="/service">
         <a class="nav-link" >Services</a>
        </Link>
        <Link to="/about">
        <a class="nav-link ">About Us</a>
        </Link>
    </nav>
    </div>
  )
}

export default Navbar2
