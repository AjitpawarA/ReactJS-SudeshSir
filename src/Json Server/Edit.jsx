import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Edit() {
  const [value, setValue] = useState({ name: "", email: "" });
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/users/`+id)
      .then(res => setValue(res.data))
  }, [id])

  function handleclick(e) {
    e.preventDefault();
    axios.put(`http://localhost:3000/users/${id}`, value)
      .then(res => console.log(res))
      .catch(error => console.error("Error updating user:", error));
    navigate('/');
  }

  return (
    <div style={{ width: "100%", height: "auto", display: "flex", gap: "20px", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "20px" }}>
      <h1>Update </h1>
      <input style={{ border: "1px solid black", padding: "10px" }} value={value.name} name="name" onChange={(e) => setValue({ ...value, [e.target.name]: e.target.value })} type="text" placeholder="Enter Your Name" />

      <input style={{ border: "1px solid black", padding: "10px" }} value={value.email} name="email" onChange={(e) => setValue({ ...value, [e.target.name]: e.target.value })} type="email" placeholder="Enter Your Email" />

      <button onClick={handleclick} style={{ padding: "10px", backgroundColor: "orange", color: "black" }}>Submit</button>
    </div>
  );
}

export default Edit;
