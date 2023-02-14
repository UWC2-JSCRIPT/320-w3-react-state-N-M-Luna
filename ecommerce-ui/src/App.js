import bnbs from './bnbs';
import BnbListings from './BnbListings.js';
import ShoppingCart from './ShoppingCart.js';
import { useState } from 'react';

function App() {
  //State of the cart
  const [bnbsInCart, setBnbsInCart] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

    //How to add BnBs to cart
  const addToCart = (bnb) => {
    const exists = bnbsInCart.find(x => x.title === bnb.title)
    if (!exists) {
      setBnbsInCart([...bnbsInCart, bnb])
      setTotalCost(totalCost + bnb.payment.cost)
    }
  }
  //How to remove BnBs from cart
  const removeFromCart = (bnb) => {
    const allButThatOne = bnbsInCart.filter(x => x.title !== bnb.title)
    setBnbsInCart(allButThatOne)
    setTotalCost(totalCost - bnb.payment.cost)
  }

  return (
    <div className="App">
      <h1>BnB's from Earth</h1>
      <div className='flexible-box'>
        <div className='listings'>
          <BnbListings bnbList={ bnbs } addToCart={addToCart} />
        </div>
        <div className='cart'>
          <ShoppingCart bnbsInCart={ bnbsInCart } totalCost={ totalCost } removeFromCart={removeFromCart} />
        </div>
      </div>
    </div>
  );
}

export default App;