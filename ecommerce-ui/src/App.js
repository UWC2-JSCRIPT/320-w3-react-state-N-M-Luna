import bnbs from './bnbs';
import BnbListings from './BnbListings.js';
import ShoppingCart from './ShoppingCart.js';
import { useState } from 'react';

function App() {
  //State of the cart
  const [bnbsInCart, setBnbsInCart] = useState([]);

    //How to add BnBs to cart
  const addToCart = (bnb) => {
    const exists = bnbsInCart.find(x => x.title === bnb.title)
    if (!exists) {
      setBnbsInCart([...bnbsInCart, bnb])
    }
  }
  //How to remove BnBs from cart
  const removeFromCart = (bnb) => {
    const allButThatOne = bnbsInCart.filter(x => x.title !== bnb.title)
    setBnbsInCart(allButThatOne)
  }

  return (
    <div className="App">
      <h1>BnB's from Earth</h1>
      <div className='listings'>
        <BnbListings bnbList={ bnbs } addToCart={addToCart} />
        </div>
        <div className='cart'>
        <ShoppingCart bnbsInCart={ bnbsInCart } removeFromCart={removeFromCart} />
      </div>
    </div>
  );
}

export default App;