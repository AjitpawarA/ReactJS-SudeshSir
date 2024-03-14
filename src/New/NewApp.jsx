import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Home"
import Navbar from './Navbar'


function NewApp() {
  return (
    <div>
        <Navbar/>
        <BrowserRouter>
        <Routes>
            <Route path="/"  element={<Home/>}>
            </Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default NewApp