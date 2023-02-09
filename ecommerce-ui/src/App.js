//import './App.css';
import bnbs from './bnbs';
import BnbListings from './BnbListings.js';
import ShoppingCart from './ShoppingCart.js';

function App() {
  return (
    <div className="App">
      <h1>BnB's from Earth</h1>
      <BnbListings bnbList={ bnbs } />
      <ShoppingCart tripOutline={ [] } />
    </div>
  );
}

export default App;
