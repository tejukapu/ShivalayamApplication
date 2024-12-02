import React, { useState } from 'react';
import './Booking.css'; // Import the CSS file for styling

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    address: '',
    email: '',
    phone: '',
    additionalInfo: '',
    createAccount: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Order placed successfully!');
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            placeholder="Enter your first name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            placeholder="Enter your last name"
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="companyName">Company Name</label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          placeholder="Enter your company name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          placeholder="Enter your address"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Enter your email"
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="Enter your phone number"
        />
      </div>

      <div className="form-group">
        <label htmlFor="additionalInfo">Additional Information</label>
        <textarea
          id="additionalInfo"
          name="additionalInfo"
          value={formData.additionalInfo}
          onChange={handleChange}
          rows="4"
          placeholder="Enter additional information"
        />
      </div>

      <div className="form-group checkbox-group">
        <input
          type="checkbox"
          id="createAccount"
          name="createAccount"
          checked={formData.createAccount}
          onChange={handleChange}
        />
        <label htmlFor="createAccount">Conform Booking?</label>
      </div>

      <button type="submit" className="submit-btn">
        Place Order
      </button>
    </form>
  );
};

export default BookingForm;
