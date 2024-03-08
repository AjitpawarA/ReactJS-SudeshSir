import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Don't forget to import axios

function CreateUser() {
  const [value, setValue] = useState({ name: "", email: "" }); // Fix the typo here
  const navigate = useNavigate();

  function handleclick(e) { // Define the event parameter here
    e.preventDefault();
    axios.post('http://localhost:3000/users', value)
      .then(res => console.log(res))
      .catch(error => console.error("Error creating user:", error));
    navigate('/');
  }

  return (
    <div style={{ width: "100%", height: "auto", display: "flex", gap: "20px", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "20px" }}>
      <h1>Create New User</h1>
      <input style={{ border: "1px solid black", padding: "10px" }} value={value.name} name="name" onChange={(e) => setValue({ ...value, [e.target.name]: e.target.value })} type="text" placeholder="Enter Your Name" />

      <input style={{ border: "1px solid black", padding: "10px" }} value={value.email} name="email" onChange={(e) => setValue({ ...value, [e.target.name]: e.target.value })} type="email" placeholder="Enter Your Email" />

      <button onClick={handleclick} style={{ padding: "10px", backgroundColor: "orange", color: "black" }}>Submit</button>
    </div>
  );
}

export default CreateUser;
