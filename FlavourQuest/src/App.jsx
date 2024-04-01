import './App.css'
import Container from './components/Container'
import { Provider } from 'react-redux';
import { store } from './redux/Store';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home"
import RecipeSearch from './components/RecipeSearch';


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
