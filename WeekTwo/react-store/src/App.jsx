import "./App.css";
import Dashboard from "./components/Dashboard";
import Cart from "./components/Cart";
import Home from "./components/Home";
import ProductListing from "./components/ProductListing";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>,
    children: [
      {
        path: "cart",
        element: <Cart/>,
      },
      {
        path: "",
        element: <Home/>,
      },
      {
        path: "products",
        element: <ProductListing/>,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
