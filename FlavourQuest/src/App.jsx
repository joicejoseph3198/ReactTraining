import './App.css'
import Container from './components/Container'
import { Provider } from 'react-redux';
import { store } from './redux/Store';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home"
import RecipeSearch from './components/RecipeSearch';
import RecipeDetails from './components/RecipeDetails';
import Favourite from './components/Favourite';
import { AnimatePresence } from 'framer-motion';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Container/>,
    children: [ 
      {
        path: "",
        element: <Home/>,
      },
      {
        path: "search",
        element: <RecipeSearch/>,
      },
      {
        path:"detail/:recipeId",
        element: <RecipeDetails/>
      },
      {
        path: "favourites",
        element: <Favourite/>,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <AnimatePresence mode='wait'>
      <RouterProvider router={router}/>
      </AnimatePresence>
    </Provider>
  )
}

export default App
