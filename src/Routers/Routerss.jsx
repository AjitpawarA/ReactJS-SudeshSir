import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
function Routerss() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home/>,
          },
          {
            path: "/about",
            element: <About/>,
          },
          {
            path: "/contact",
            element: <Contact/>,
          },
          {
            path: "*",
            element: <div>404 error found</div>
          },

      ]);
  return (
    <div>
        <Navbar/>
        <RouterProvider router={router} />
    </div>
  )
}

export default Routerss