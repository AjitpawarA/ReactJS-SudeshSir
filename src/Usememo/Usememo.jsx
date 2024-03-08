import React, { useMemo } from "react";
import { useState } from "react";

function Usememo() {
    const[count, setcount]=useState(0);


    const power= ()=>{
        return count**2;
    }

    const memo= useMemo(()=>power(count))

  return (
    <div>
      <p>{count}</p>
      <p>{memo}</p>
      <button onClick={()=>{
        setcount(count+1);
      }}>+</button>
    </div>
  );
}

export default Usememo;
