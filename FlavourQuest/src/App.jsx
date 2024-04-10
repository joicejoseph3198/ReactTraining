import './App.css'
import Container from './components/Container'
import { Provider } from 'react-redux';
import { store } from './redux/Store';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home"
import RecipeSearch from './components/RecipeSearch';
import RecipeDetails from './components/RecipeDetails';


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
      }
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  )
}

export default App
