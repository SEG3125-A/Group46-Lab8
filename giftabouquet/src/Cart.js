import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './styles/CartCSS.css'

function Cart() {
  const [goBackToContact, setGoBackToContact] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false); 

  const cartItems = useState([
    { id: 1, name: 'Rose', price: 10 },
    { id: 2, name: 'Sunflower', price: 12 },
  ])[0];

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
  
  const handleOrderNow = () => {
    setOrderPlaced(true);
  };

  if (goBackToContact) {
    return <Navigate to="/contact" />;
  }

  return (
    <div>
      <div className="cart-progress-bar" style={{textAlign: 'center', fontWeight: 'bold'}}> Shopping Progress </div> {}
      <h1 style={{color: '#d63c96'}}>Your Cart</h1>
      <div className="cart-items">
        <h2 className='heading2'>Selected Flowers</h2>
        <div className="outlined-box">
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
        <p style={{color: '#d63c96'}}>Total: ${totalPrice}</p>
        </div>
      </div>
      <br />
      <button
            type="goBackToContact"
            onClick={() => {
                setGoBackToContact(true);
            }}
      >
            {" "}
            Back to Contact Information
      </button>
      <button
            type="order"
            onClick={handleOrderNow}
      >
            {" "}
            Order Now
      </button>
      {orderPlaced && (
        <div style={{ marginTop: '20px', color: 'green' }}>
          Your order has been placed successfully.
          <br />
          Thank you for shopping with GiftABouquet!
        </div>
      )}
    </div>
  );
}

export default Cart;
