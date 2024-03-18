import React, { useState } from 'react';
import { Navigate } from 'react-router-dom'
import './styles/ContactCSS.css';

function Contact() {
  const[goBackToCart, setGoBackToCart] = React.useState(false);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
    checkFormValidity();
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
    checkFormValidity();
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
    checkFormValidity();
  };

  const checkFormValidity = () => {
    setIsSubmitEnabled(name !== '' && address !== '' && message.split(/\s+/).length <= 100);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    
    console.log("Name:", name);
    console.log("Address:", address);
    console.log("Message:", message);
    
    setName('');
    setAddress('');
    setMessage('');
    setIsSubmitEnabled(false);
    setIsSubmitted(true); 
  };

  if (goBackToCart) {
    return <Navigate to="/cart" />;
  }

  return (
    <div>
      <div className="progress-bar" style={{textAlign: 'center', fontWeight: 'bold'}}> Shopping Progress </div> {}
      <h2 style={{color: '#4F7942'}}> Your Contact Information</h2>
      <h3> *Text fields are required.</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name: * 
          <input type="text" value={name} onChange={handleNameChange} placeholder='Enter Full Name' />
        </label>
        <br />
        <br />
        <label>
          Address: * 
          <input type="text" value={address} onChange={handleAddressChange} placeholder='Town/City & Postal Code'/>
        </label>
        <br />
        <br />
        <label>
          Message (limit 100 words):
          <textarea value={message} onChange={handleMessageChange} placeholder='Do you have any questions/feedback for us?' />
        </label>
        <br />
        <button
            type="back"
            onClick={() => {
                setGoBackToCart(true);
            }}
        >
            {" "}
            Back to Cart
        </button>
        <button type="submit" disabled={!isSubmitEnabled}>Submit</button>
        {isSubmitted && (
          <div style={{ display: 'inline-block', marginLeft: '10px', color: '#d63c96', textAlign: 'center' }}>
            <h2>Thank You for your interest!</h2>
            <p>We will be in-contact with you very soon.</p>
          </div>
        )}
      </form>
    </div>
  );
}

export default Contact;

