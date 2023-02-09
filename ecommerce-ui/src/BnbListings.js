import React from 'react';
import BnbCard from './BnbCard.js';

function BnbListing({ bnbList }) {
  
    const list = bnbList.map((bnb, i) =>  {
    return <BnbCard key={i} bnb={bnb} />
  })

    return (
    <div className='bnb-list'> 
      {list}
    </div>
    );
  }
  
  export default BnbListing;