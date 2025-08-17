import React from 'react'
import {createBrowserRouter, Route, Routes,RouterProvider } from 'react-router-dom';
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Explore from './screens/Explore';
import Practice from './screens/Practice';
import Profile from './screens/Profile';
import toast, { Toaster } from 'react-hot-toast';
const App = () => {

  const appRouter=createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/signup',
      element:<Signup/>
    },
    {
      path:'/explore',
      element:<Explore/>
    },
    {
      path:'/practice',
      element:<Practice/>
    },
    {
      path:'/profile',
      element:<Profile/>
    }
  ])


  return (
    <div>
      <RouterProvider router={appRouter}/>
      <Toaster/>
    </div>
  )
}

export default App
