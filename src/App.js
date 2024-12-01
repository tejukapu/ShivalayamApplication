import React from 'react';
import { Route,  Routes } from 'react-router-dom';
import './App.css'; // Your main CSS file
import Heritage from './Components/HeritagePage/Heritage';
import Booking from './Components/BookingPage/Booking';
import Navbar from './Components/NavbarPage/Navbar';
import Donation from './Components/Donationpage/Donation';
import About from './Components/AboutPage/About';
import Profile from './Components/ProfilePage/Profile';
import Home from './Components/Home Page/Home';
import Login from './Components/LoginPage/Login';
import Signup from './Components/Signuppage/Signup';




function App() {
  return (
    <div className="App">
     
      <Navbar/>
 
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Heritage" element={<Heritage />} />
     <Route path="/Booking" element={<Booking />} />
      <Route path="/Donation" element={<Donation />} />
      <Route path="/About" element={<About />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />

      </Routes>
  
    </div>
  );
}

export default App;