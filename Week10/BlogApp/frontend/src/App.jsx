import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from "react-router"
import toast, { Toaster } from 'react-hot-toast';
import './App.css'
import RootLayout from './components/RootLayout'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import AddArticle from './components/AddArticle'
import UserProfile from './components/UserProfile'
import AuthorProfile from './components/AuthorProfile';
import Article from './components/Article';
import AuthorDashboard from './components/AuthorDashboard';
import UserDashboard from './components/UserDashboard';
import EditArticle from './components/EditArticle';

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
        },
        {
          path:"user-profile",
          element: <UserProfile />,
          children:[
            
          ]
        },
        {
          path:"author-profile",
          element:<AuthorProfile />,
          children:[
            
          ]
        },
        {
          path:"article/:id",
          element: <Article />
        },
        {
          path:"author-dashboard",
          element:<AuthorDashboard />
        },
        {
          path:"user-dashboard",
          element:<UserDashboard />
        },{
          path:"edit-article",
          element:<EditArticle />
        }
      ]
    }
  ]);
  return (
    <>
      <Toaster position='top-center' />
    <RouterProvider router={routerObj}></RouterProvider>
    </>
  )
}

export default App
