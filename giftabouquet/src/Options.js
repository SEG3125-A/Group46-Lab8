import React from 'react';
import { Navigate } from 'react-router-dom'


function Options() {
  const[goToCart, setGoToCart] = React.useState(false);
  
  if (goToCart) {
    return <Navigate to="/cart" />;
  }

  return (
    <div>
        Options
        <button
            onClick={() => {
                setGoToCart(true);
            }}
        >
            {" "}
            Go to Cart
        </button>
    </div> 
  );
}

export default Options;