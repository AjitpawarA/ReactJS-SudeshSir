import React from 'react'
import "./home.scss"
import pro from "./my.jpg"

function Home() {
  return (
    <div id='home'>
      <div id='homeleft'>
        <h1>Hello, I'm Ajit C. Pawar</h1>
        <h3>React And Next js developemt </h3>
        <p>Lorem ipsum dolor sit.</p>
        <div>
          <button id='hirebtn'>Hire me</button>
          <button id='resumebtn'>Resume</button>
        </div>
        <div></div>
      </div>
      <div id='homeright'>
        <img src={pro}></img>
      </div>
    </div>
  )
}

export default Home