import {createBrowserRouter , Route, RouterProvider} from "react-router"
import './App.css'
import Home from "./components/Home";
import ContactUS from "./components/ContactUS";
import ProductsList from "./components/ProductsList";
import RootLayout from "./components/RootLayout";
import Product from "./components/Product";

function App() {
  const routerObj = createBrowserRouter([
    {
      path:"/",
      element: <RootLayout />,
      children:[
        {
          path:"",
          element:<Home />
        },
        {
          path:"products",
          element:<ProductsList />
        },
        {
          path:"contact",
          element:<ContactUS />
        },
        {
          path:"product",
          element:<Product />
        }
      ]
    }
  ]);
  return (
    <RouterProvider router={routerObj} />
  )
}

export default App
