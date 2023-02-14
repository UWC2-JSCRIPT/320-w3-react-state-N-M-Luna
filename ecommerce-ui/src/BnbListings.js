import React from 'react';
import BnbCard from './BnbCard.js';

function BnbListing({ bnbList, addToCart }) { //main
  
    const list = bnbList.map((bnb, i) => (
      <BnbCard key={i} bnb={bnb} addToCart={addToCart} />
    ))

    return (
    <div className='bnb-list'> 
      {list}
    </div>
    );
  }
  
  export default BnbListing;