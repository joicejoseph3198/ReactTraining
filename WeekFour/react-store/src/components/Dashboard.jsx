import { useState, useEffect} from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import store from "../redux/Store";
import {Provider} from 'react-redux';

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
      <Provider store={store}>
        <div>
          <Navbar />
          <Outlet />
        </div>
      </Provider>
    </>
  );
};

export default Dashboard;
