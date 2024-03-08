import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function JsonServer() {


  const[data,setData]=useState([])

  
     
  useEffect(()=>{
      axios.get('http://localhost:3000/users')
      .then(res=>setData(res.data))

  },[])


  const navigate = useNavigate();


  

console.log(data);
  return (
    <div>
      <div className="container" style={{width:"100%", alignItems:"center", padding:"10px", display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
        <h1 style={{fontSize:"30px"}}>CRUD App </h1>
        <button onClick={()=>navigate("/create")} style={{padding:"10px", backgroundColor:"orange", color:"black"}}>Add User</button>
      </div>
      <br /><br />
      <hr />
      <div className="userslist container" style={{ width: "100%", height: "auto" }}>
        <table className="table container">
          <thead>
            <tr>
              <th scope="col">sr no.</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((item)=>{
                return(
                  <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td><button style={{padding:"10px", backgroundColor:"orange", color:"black"}}>Edit</button></td>
              <td><button style={{padding:"10px", backgroundColor:"orange", color:"black"}}>Delete</button></td>
            </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default JsonServer;
