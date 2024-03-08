import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player/youtube";

function Meals() {
  const location = useLocation();
  const data = location.state.item;

  const [datas, setDatas] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${data.idMeal}`
        );
        const result = await response.json();
        setDatas(result.meals); // Check the structure of the response to make sure this is correct
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [data.idMeal]);

  return (
    <div className="meals-container">
      <section className="header-section">
        <div className="image-container">
          <img src={data.strMealThumb} alt="" className="meal-image" />
        </div>
        <div className="meal-details">
          <h1 className="meal-title">{data.strMeal}</h1>
        </div>
      </section>

      <div className="meal-details-container">
        {/* Map over datas if it's an array */}
        {datas.map((item) => (
          <div key={item.idMeal} className="meal-info">
            <h1 className="sub-heading">{item.strMeal}</h1>
            <h3 className="sub-heading">{item.strCategory}</h3>
            <p className="instructions">{item.strInstructions}</p>

            <div className="video-player">
              <ReactPlayer url={item.strYoutube} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Meals;
