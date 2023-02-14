import React from 'react';
import BnbRental from './BnbRental.js';

function ShoppingCart({ bnbsInCart, totalCost, removeFromCart }) {

  const tripOutline = bnbsInCart.map((bnb, i) => (
    <BnbRental key={i} bnb={bnb} removeFromCart={removeFromCart} />
  ))
  
    return (
      <div className='shopping-cart'> 
      <h2>Your trip</h2>
        <div>
          {bnbsInCart.length === 0 && <p>Add a stop to your trip.</p>}
        </div>
        {tripOutline}
      <p>Your total on this trip: ${totalCost}</p>
      </div>
    );
  }
  
  export default ShoppingCart;