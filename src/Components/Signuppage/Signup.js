import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Signup.css'; // Import your CSS file for styling

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/signup', {
        name,
        email,
        password,
      });

      console.log(response.data);
      setSuccessMessage('Signup successful! Please login.'); // Display success message
      setErrorMessage(''); // Clear any previous errors
      setName(''); // Reset form fields
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error(error);
      setSuccessMessage(''); // Clear any success messages
      setErrorMessage(
        error.response?.data?.message || 'Something went wrong. Please try again.'
      );
    }
  };

  return (
    <div className="signup">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Sign Up</h2>

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          placeholder="Enter Your Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

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

        {errorMessage && (
          <p className="error-message" aria-live="assertive">
            {errorMessage}
          </p>
        )}
        {successMessage && (
          <p className="success-message" aria-live="polite">
            {successMessage}
          </p>
        )}

        <button type="submit" className="submit-button">
          Sign Up
        </button>
      </form>

      <p className="login-prompt">
        Already have an account? <button className='button-link'><Link to="/Login">Login</Link>
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

export default Signup;
