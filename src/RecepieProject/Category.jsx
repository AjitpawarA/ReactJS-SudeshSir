import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
function Category() {
  const [data, setdata] = useState([]);
  const navigate=useNavigate();
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((d) => setdata(d.categories));
  }, []);

  return (
    <div className='container' style={{fontSize:"35px"}}>
      Categories
      <br />
      <div style={{width:"100%", height:"150px", display:"flex", flexDirection:"row", gap:"50px", overflow:"scroll", alignItems:"center", justifyContent:"center"}}>
        {data.map((item) => (
          <div key={item.idCategory}>
            <img onClick={()=>navigate("/specat", {state:{item}})} style={{maxWidth:"200px", borderRadius:"50%"}} src={item.strCategoryThumb} alt={item.strCategory}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
