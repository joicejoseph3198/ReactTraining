import { useSelector } from "react-redux";
import { Link} from "react-router-dom";

const Navbar = () => {
  const cartItemsCount = useSelector(state=> state.cart.cartItems.length);
  return (
    <div className="font-bold flex flex-row flex-wrap justify-between border-b-2 pb-5 border-black">
      <div>
        <div className="text-5xl">/ React दुकान /</div>
      </div>
      <nav>
        <ul className="flex flex-wrap flex-row gap-4 text-2xl color-black">
          <li><Link to="">Home</Link></li>
          <li><Link to="products">Product Listing</Link></li>
          <li><Link to="cart">Cart</Link></li>
          <li>| Items in cart: {cartItemsCount}</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
