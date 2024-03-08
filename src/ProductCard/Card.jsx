import React, { useState } from 'react'
import "./card.css"

function Card() {
    const[quantity, setquantity]= useState(0)
    const[price, setprice]=useState(0);
    const[btn, setbtn]=useState("Buy Now");
  return (
    <div className='card'>
        <div className="image">
            <img src="" alt="" />
        </div>
        <p style={{fontSize:"25px"}} >Shooe</p>
        <div className="quantity">
            <button onClick={()=>{
                setquantity(quantity+1);
            }}>+</button>
            <p> {quantity} </p>
            <button onClick={()=>{
                setquantity(quantity-1);
            }}>-</button>
        </div>
            
        <p>Discount = 2%</p>
        <button onClick={()=>{
            setprice(quantity*50)
        }}>price</button>
        <p>Price = {(price-((price*2)/100))}</p>



        <button onClick={()=>{
            setbtn("Thank you")
        }} >{btn}</button>
    </div>
  )
}

export default Card