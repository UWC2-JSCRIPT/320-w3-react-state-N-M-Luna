import React from 'react';
import BnbCard from './BnbCard.js';
import PropTypes from 'prop-types';

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

  BnbListing.propTypes = {
    bnbList: PropTypes.array.isRequired,
    addToCart: PropTypes.func.isRequired
  };
  
  export default BnbListing;