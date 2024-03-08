import React, { useRef } from 'react'

function UseRef() {

    const inpele= useRef();
    function foc(){
        inpele.current.focus();
    }
  return (
    <div>
        <input type='text' ref={inpele} style={{border:"1px solid black"}}></input>
        <button onClick={foc} >Focus</button>
    </div>
  )
}

export default UseRef