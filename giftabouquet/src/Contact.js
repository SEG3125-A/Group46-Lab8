import React, { useState } from 'react';
import { Navigate } from 'react-router-dom'
import './styles/ContactCSS.css';

function Contact() {
  const[goToCart, setGoToCart] = React.useState(false);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [goBackToOptions, setGoBackToOptions] = useState(false);
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
  if (goBackToOptions) {
    return <Navigate to="/" />;
  }
  if (goToCart) {
    return <Navigate to="/cart" />;
  }

  return (
    <div>
      <div className="progress-bar" style={{textAlign: 'center', fontWeight: 'bold'}}> Shopping Progress </div> {}
      <h2 style={{color: '#d63c96'}}> Your Receiver's Contact Information</h2>
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
        <button type="button">Help</button>
        <button
            type="back"
            onClick={() => {
                setGoBackToOptions(true);
            }}
        >
            {" "}
            Back to Options
        </button>
        <button
            type="next"
            onClick={() => {
                setGoToCart(true);
            }}
        >
            {" "}
            Go to Cart
        </button>
      </form>
    </div>
  );
}

export default Contact;

