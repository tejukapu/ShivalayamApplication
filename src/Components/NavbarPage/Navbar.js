import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      
          <Link to="/">Home</Link>
        
          <Link to="/Heritage">Heritage</Link>
       
          <Link to="/Booking">Booking</Link>
       
          <Link to="/Donation">Donation</Link>
        
          <Link to="/Profile">Profile</Link>

          <Link to="./Login">Login</Link>
         
       
    </nav>
  );
}

export default Navbar;

