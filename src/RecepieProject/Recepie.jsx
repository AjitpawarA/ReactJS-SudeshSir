import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import SpecifinCat from './SpecifinCat';
import Meals from './Meals';

function Recipe() {
  return (
    <BrowserRouter>
    <div style={{width:"100%"}}>
      <Navbar />
      </div>
      <div style={{paddingTop:"150px"}}>
        <Routes>
          
        <Route path='/' element={<Home />} />
        <Route path='/specat' element={<SpecifinCat/>} />
        
        <Route path='/meals' element={<Meals/>} />
        </Routes>
      </div>
    </BrowserRouter>
    // <>
    // <Navbar/>
    // <Home/>
    
    // </>
  );
}

export default Recipe;
