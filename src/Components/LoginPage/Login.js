import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css'; // Import your CSS file for styling

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const navigate= useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault()
    axios.post('http://localhost:8080/login', {email, password})
    .then(result=>{console.log(result)
      console.log('Login succesfull')
        navigate('/booking')
      
     
    })
    .catch(err=>console.log(err))

      
      
  };

  return (
    <div className="signup">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Login</h2>

        
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="Enter Your Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Enter Your Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

       
        <button type="submit" className="submit-button">
          Sign Up
        </button>
      </form>

      <p className="login-prompt">
        Dont Have an account? <button className='button-link'><Link to="/signup">Signup</Link>
          </button>
      </p>

      <div className="security-info">
        <p>
          Your data is safe with us. <br />
          We employ industry-standard security measures to protect your
          personal information.
        </p>
        <p>- Ravi Teja</p>
      </div>
    </div>
  );
};

export default Login;
