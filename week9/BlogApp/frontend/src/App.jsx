import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from "react-router"
import './App.css'
import RootLayout from './components/RootLayout'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import AddArticle from './components/AddArticle'

function App() {
  const [count, setCount] = useState(0)
  const routerObj = createBrowserRouter([
    {
      path:"/",
      element:<RootLayout />,
      children:[
        {
          path:"/",
          element: <Home />
        },
        {
          path:"register",
          element: <Register />
        },
        {
          path:"login",
          element: <Login />
        },
        {
          path:"add-article",
          element:<AddArticle />
        }
      ]
    }
  ]);
  return (
    <div>
    <RouterProvider router={routerObj}></RouterProvider>
    </div>
  )
}

export default App
