import React from "react";
import { useState } from "react";
function Usestate() {
  const [count, setcount] = useState(0);
  const [color, setcolor]= useState("black")
  const [bgcolor, setbgcolor]= useState("red")
  const [name, setname]= useState("");

  return (
    <div style={{ padding: "50px" }}>
      <button
        style={{
          border: "1px solid black",
          padding: "10px",
          width:"50px",
          borderRadius: "10px",
        }}
        onClick={() => {
          setcount(count + 1);
        }}
      >
        +
      </button>
      <h1 style={{ fontSize: "30px",width:"50px", color:`${color}`, background:`${bgcolor}`}}>{count}</h1>

      <button
        style={{
          border: "1px solid black",
          padding: "10px",
          width:"50px",
          borderRadius: "10px",
        }}
        onClick={() => {
          setcount(count - 1);
        }}
      >
        -
      </button>



      <button style={{
          border: "1px solid black",
          padding: "10px",
          borderRadius: "10px",
        }} onClick={()=>{
        setcolor("green")
      }}>color</button>
       <button style={{
          border: "1px solid black",
          padding: "10px",
          borderRadius: "10px",
        }} onClick={()=>{
        setbgcolor("pink")
      }}>bgcolor</button>

      <br />
      <br />

      <input type="text" style={{border:"1px solid black"}} placeholder="input the name" onChange={(e)=>{
        setname(e.target.value);
      }} />
      <p>My name is {name}</p>
    </div>
  );
}

export default Usestate;
