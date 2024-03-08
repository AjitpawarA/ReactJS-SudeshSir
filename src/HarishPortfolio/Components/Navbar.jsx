import React from 'react'
import "./navbar.scss"

function Navbar() {

  function my() {
    var e=document.body;
    e.classList.toggle("darkmode");
    let h=document.getElementById("btn");
    h.classList.toggle("color")
    }
  
  return (
    <div className='navbar'>
      <div className="left">
        <h1>Ajit Pawar....</h1>
      </div>
      <div className="right">
            <button>Home</button>
            <button>Skills</button>
            <button className="fbtn">Full Screen</button>
            {/* <div
        id="toggle"
        onClick={() => darkMode === false ? setDarkMode(true) : setDarkMode(false)}
      >
        <div className="toggle-inner"/>
      </div> */}
      <button id='btn' onClick={my}>click</button>
      </div>
    </div>
  )
}

export default Navbar