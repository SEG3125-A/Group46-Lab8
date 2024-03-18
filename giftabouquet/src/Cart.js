import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
function Cart() {
  // Dummy data for selected flowers
  const [goToContact, setGoToContact] = useState(false);
  const cartItems = useState([
    { id: 1, name: 'Rose', price: 10 },
    { id: 2, name: 'Sunflower', price: 12 },
  ])[0];
  // Calculate total price
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handleOrderNow = () => {
    // Dummy function to simulate ordering
    console.log("Order placed!");
  };

  if (goToContact) {
    return <Navigate to="/contact" />;
  }
  return (
    <div>
      <h1 >Cart</h1>
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
        <p>Total: ${totalPrice}</p>
        </div>
      </div>
      <button className="next-buttons" onClick={() => { setGoToContact(true); }}>
          Back to Contact Page
        </button>
      <button className="next-buttons" onClick={handleOrderNow}>Order Now</button>

    </div>
  );
}

export default Cart;
