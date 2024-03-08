import React from 'react'

function Child(props) {
  return (
    <div>
        <h1>Hello my name is {props.name} and my age is {props.age}</h1>
        <button onClick={props.Dark} style={{border:"1px solid black", padding:"10px", borderRadius:"10px"}}>darkmode</button>
    </div>
  )
}

export default Child