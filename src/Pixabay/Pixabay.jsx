import React, { useEffect, useState } from "react";
import "./pixabay.css";

function Pixabay() {
  const [data, setData] = useState(null);
  const [input, setinput] = useState("");
  const [inputurlval, setinputurlval] = useState("flower");

  function handleclick() {
    setinputurlval(input);
  }

  const url = `https://pixabay.com/api/?key=25132635-2d0ac55e733f32b065ebe1990&image_type=photo&pretty=true&q=${inputurlval}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [inputurlval, input]);

  const hits = data?.hits || [];

  return (
    <div>
      <div className="pixabayhome">
        <nav>
          <div className="logo">Pixabay</div>
          <div className="head">
            <ul>
              <li>Explore</li>
              <li>Login</li>
              <li>Profile</li>
              <li>Upload</li>
            </ul>
          </div>
        </nav>

        <div className="inputarea">
          <h1>Stunning royalty-free images & royalty-free stock</h1>
          <p>
            Over 4.4 million+ high-quality stock images, videos, and music shared
            by our talented community.
          </p>
          <div className="input">
            <input
              type="text"
              name=""
              id=""
              onChange={(e) => {
                setinput(e.target.value);
              }}
              placeholder="Enter the image tags you want ..."
            />
            <button className="find" onClick={handleclick}>
              Find
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="imagescontent">
          {hits.length > 0 ? (
            <div className="images">
              {hits.map((hit) => (
                <div key={hit.id}>
                  <img
                    className="img"
                    style={{
                      width: "100%",
                      maxWidth: "400px",
                      height: "auto",
                      padding: "20px",
                      borderRadius: "5px",
                    }}
                    src={hit.webformatURL}
                    alt={hit.tags}
                  />
                </div>
              ))}
            </div>
          ) : (
            <p
              style={{
                width: "100%",
                height: "auto",
                padding: "50px",
                fontSize: "35px",
                textAlign: "center",
              }}
            >
              Loading...
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Pixabay;
