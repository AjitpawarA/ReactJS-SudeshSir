import React, { useEffect } from 'react'
import { useState } from 'react';

function Useeff() {

    const[count, setcount]=useState(0);
    useEffect(()=>{
        document.title=`${count}`

        const bgcolor = document.getElementById("bgcolor");
        bgcolor.addEventListener("click", ()=>{
            document.body.style.background="yellow";
        })
    },[count])
  return (
        <div>
        <h1>{count}</h1>
        <button onClick={()=>{
            setcount(count+1);
        }}>+</button>
        <button onClick={()=>{
            setcount(count-1);
        }}>-</button>

        <button id='bgcolor'>bgcolor</button>
    </div>
  )
}

export default Useeff