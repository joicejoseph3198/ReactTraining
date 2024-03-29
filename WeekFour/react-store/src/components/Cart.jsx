import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  // will fetch cart 
  if (cartItems.length > 0) {
    return (
      <div className="flex flex-wrap flex-row justify-center gap-4 text-xl color-black pt-10">
        <table className="table-fixed">
          <thead className="text-xl text-center border-2 border-black" >
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((product, index) => (
              <tr key={index} className="border-2 border-black">
                <td className="border-2 border-black p-5">{index + 1}</td>
                <td className="border-2 border-black p-5">{product?.title}</td>
                <td className="border-2 border-black p-5">{product?.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
        <div className="flex justify-center h-screen p-10" >
             <h1>You currently have zero items in your cart.Your shopping cart is currently empty.
                Explore our wide range of products to discover items you will love. Once you have found 
                what you are looking for, simply add them to your cart for a seamless checkout experience. Happy shopping!</h1>
        </div>
   
    );
  }
};

Cart.propTypes = {
  cartItems: PropTypes.array,
};
export default Cart;
