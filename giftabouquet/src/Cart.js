import React from 'react';
import { Navigate } from 'react-router-dom'


function Cart() {
  const[goToContact, setGoToContact] = React.useState(false);
  
  if (goToContact) {
    return <Navigate to="/contact" />;
  }

  return (
    <div>
        Cart
        <button
            onClick={() => {
                setGoToContact(true);
            }}
        >
            {" "}
            Go to Contact
        </button>
    </div> 
  );
}

export default Cart;