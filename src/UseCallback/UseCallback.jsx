import React, { useCallback } from 'react'
import { useState } from 'react'

function UseCallback() {
    const [count, setcount]=useState(0);

    const decrement= useCallback(()=>{
        setcount(count-1);
    },[count])

  return (
    <div>
        <p>{count}</p>
        <button onClick={()=>{
            setcount(count+1);
        }}>+</button>
        <button onClick={decrement}>-</button>
    </div>
  )
}

export default UseCallback