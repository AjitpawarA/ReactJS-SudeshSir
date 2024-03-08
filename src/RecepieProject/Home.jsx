import React, { useEffect } from 'react'
import { useState } from 'react'
import Category from './Category';

function Home() {

  const[data, setdata]=useState([]);
  useEffect(()=>{
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(res=>res.json())
    .then(d=>setdata(d.meals));
  },[])
  return (
    <div className='home' style={{ width: "100%"}}>
      {data.map((item) => (
        <div
          className='todaysspecial'
          key={item.idmeal}
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap:"150px"
          }}
        >
          <div className='left' style={{alignItems:"center", justifyContent:"center",display:"flex", flexDirection:"column", fontSize:"35px", gap:"20px"}}>
            <h1>Todays Special</h1>
            <h2 style={{color:"orange", fontWeight:"bolder"}}>{item.strMeal}</h2>
            <h3>{item.strCategory}</h3>
          </div>
          <div className='right' style={{alignItems:"center", justifyContent:"center",display:"flex"}}>
            <img src={item.strMealThumb} style={{width:"300px", height:"300px", borderRadius:"50%"}} alt={item.strMeal} />
          </div>
        </div>
      ))}
      <Category />
    </div>
  );
  
}

export default Home