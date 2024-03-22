import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './styles/OptionsCSS.css';

function Options() {
  const [goToContact, setGoToContact] = useState(false);
  const [goBackToHomepage, setGoBackToHomepage] = useState(false);
  const [cart, setCart] = useState([]);
  const [personalizedMessage, setPersonalizedMessage] = useState('');
  const [deliveryOption, setDeliveryOption] = useState(true);

  if (goToContact) {
    return <Navigate to="/contact" />;
  }

  if (goBackToHomepage) {
    return <Navigate to="/" />;
  }

  const flowers = [
    { id: 1, name: 'Rose', price: 10 },
    { id: 2, name: 'Tulip', price: 8 },
    { id: 3, name: 'Sunflower', price: 12 },
  ];

  const handleCheckboxChange = (flower) => {
    const isFlowerInCart = cart.some(item => item.id === flower.id);
    if (isFlowerInCart) {
      setCart(cart.filter(item => item.id !== flower.id));
    } else {
      setCart([...cart, flower]);
    }
  };

  const handlePersonalizedMessageChange = (e) => {
    setPersonalizedMessage(e.target.value);
  };

  const handleDeliveryOptionChange = (e) => {
    setDeliveryOption(e.target.value === 'delivery');
  };

  return (
    <div>
      <div className="options-progress-bar" style={{textAlign: 'center', fontWeight: 'bold'}}> Shopping Progress </div> {}
      <div className="titles">
        Customize Your Bouquet
      </div>
      <br />
      <br />
      <div>
        <div className="flower-options">
          <h2 className="heading2" style={{color:'black', fontWeight: 'bold'}}>Flower Options</h2>
          <div className="outlined-box">
            {flowers.map(flower => (
              <div key={flower.id}>
                <h3>{flower.name}</h3>
                <p>Price: ${flower.price}</p>
                <label>
                  <input
                    type="checkbox"
                    onChange={() => handleCheckboxChange(flower)}
                  />
                  Add to Cart
                </label>
              </div>
            ))}
          </div>
        </div>

        <br />

        <div className="personalized-message">
          <h2 className="heading2" style={{color:'black', fontWeight: 'bold'}}>Personalized Message</h2>
          <textarea
            rows="4"
            cols="50"
            placeholder='What would you like to tell the receiver?'
            value={personalizedMessage}
            onChange={handlePersonalizedMessageChange}
          />
        </div>

        <br />

        <div className="delivery-options">
          <h2 className="heading2" style={{color:'black', fontWeight: 'bold'}}>Delivery Options</h2>
          <label>
            <input
              type="radio"
              value="delivery"
              checked={deliveryOption}
              onChange={handleDeliveryOptionChange}
            />
            Delivery
          </label>
          <label>
            <input
              type="radio"
              value="pickup"
              checked={!deliveryOption}
              onChange={handleDeliveryOptionChange}
            />
            Pickup
          </label>
        </div>
      </div>
      <br />
      <button
            type="goBackToHomepage"
            onClick={() => {
                setGoBackToHomepage(true);
            }}
        >
            {" "}
            Back to Homepage
      </button>
      <button
            type="goToContact"
            onClick={() => {
                setGoToContact(true);
            }}
        >
            {" "}
            Go to Contact Information
        </button>
    </div>
  );
}

export default Options;
