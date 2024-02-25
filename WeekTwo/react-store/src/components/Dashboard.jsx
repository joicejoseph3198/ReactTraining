import { useState, useEffect, createContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

// creating context so they can be used by appropriate Outlet
const ProductContext = createContext();

const Dashboard = () => {
  // contains state to maintain list of products
  // contains state to keep track of cart items
  // will act as parent component to all other components
  // This way I can mutate ProductCard and Cart together.
  // display ProductCard for each, with description and a Button
  // On Button interaction, should  add to/remove from  Cart.
  // Cart contains sublist of products

  const [productList, setProductList] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  // fetch data from the API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => setProductList([...json]));
  }, []);

  const handleCartOperation = (product, isAdded) => {
    console.log(product);
    console.log(isAdded);
    if (!isAdded) {
      const updatedCartItems = [...cartItems, product];
      setCartItems(updatedCartItems);
    } else {
      const updatedCartItems = cartItems.filter((p) => p !== product);
      setCartItems(updatedCartItems);
    }
  };

  return (
    <>
      <ProductContext.Provider
        value={{ productList, cartItems, handleCartOperation }}
      >
        <div>
          <Navbar />
          <Outlet />
        </div>
      </ProductContext.Provider>
    </>
  );
};

export default Dashboard;
export { ProductContext };
