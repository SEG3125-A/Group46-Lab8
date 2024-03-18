import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

function Options() {
  const [goToContact, setGoToContact] = useState(false);
  const [cart, setCart] = useState([]);
  const [personalizedMessage, setPersonalizedMessage] = useState('');
  const [deliveryOption, setDeliveryOption] = useState(true); // true for delivery, false for pickup

  if (goToContact) {
    return <Navigate to="/contact" />;
  }

  const flowers = [
    { id: 1, name: 'Rose', price: 10 },
    { id: 2, name: 'Tulip', price: 8 },
    { id: 3, name: 'Sunflower', price: 12 },
    // Add more flowers as needed
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
      <div className="titles">
        Options
        <button className="next-buttons" onClick={() => { setGoToContact(true); }}>
          Go to Contact
        </button>
      </div>
      <div>
        <div className="flower-options">
          <h2 className="heading2">Flower Options</h2>
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

        <div className="personalized-message">
          <h2 className="heading2">Personalized Message</h2>
          <textarea
            rows="4"
            cols="50"
            value={personalizedMessage}
            onChange={handlePersonalizedMessageChange}
          />
        </div>

        <div className="delivery-options">
          <h2 className="heading2">Delivery Options</h2>
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
    </div>
    
  );
}

export default Options;
