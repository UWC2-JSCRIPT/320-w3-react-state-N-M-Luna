import React from 'react';
import BnbCard from './BnbCard.js';

function ShoppingCart({ tripOutline }) {
    const shoppingList = []
    if (tripOutline.length===0) {
        return <div className='shopping-cart'> <p>Your shopping cart is empty.</p> </div>;
    }
    else{
        tripOutline.map((tripStop, i) => <BnbCard key={i} bnb={ tripStop } />)
    }
    return (
      <div className='shopping-cart'> { shoppingList } </div>
    );
  }
  
  export default ShoppingCart;