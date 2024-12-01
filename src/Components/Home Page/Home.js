import React from 'react';
import './Home.css'; // Import the CSS file
import About from '../AboutPage/About';
import Signup from '../Signuppage/Signup';
import Heritage from '../HeritagePage/Heritage';
import Event from '../EventPage/Event';




const Home = () => {
  return (
    <div className="home-page">
    
      {/* Header */}
      <header className='image'>
        <img src="https://images.pexels.com/photos/13041184/pexels-photo-13041184.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Temple Logo" />
        <h1 className='header-text'>Shivalayam Temple Administration Portal</h1>
        
      </header>

      <div>
        <Heritage/>
      </div>

      {/* Main Content */}
      <main>
        <div className="left-column">
          <h2 className='temple-header'>Temple Events</h2>
       <Event/>
        </div>
        <div className="right-column">
          <h2 className='signup-header'>Signup</h2>
           <Signup/>
        </div>
      </main>

      {/* Footer */}
      <footer className='footer'>
         <About/>
      </footer>
    </div>
  );
};

export default Home;