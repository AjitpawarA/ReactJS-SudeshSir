import React, { useState } from 'react';

function Weatherapp() {
    const key = "a2cb3482a13d088fb032449ed1e84cfd";
    const url = "https://api.openweathermap.org/data/2.5/weather";

    const [weather, setWeather] = useState({});
    const [search, setSearch] = useState("");

    function clickHandle() {
        fetch(`${url}?q=${search}&appid=${key}`)
            .then(res => res.json())
            .then(data => {
                setWeather(data);
            });
    }

    console.log(weather);

    return (
        <div>
            <div className='container'>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Enter city name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            style={{ width: "400px" }}
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <div id="emailHelp" className="form-text">
                            We'll never share your email with anyone else.
                        </div>
                    </div>
                    <button type="button" className="btn btn-primary" style={{color:"black"}} onClick={clickHandle}>
                        Submit
                    </button>
                </form>
            </div>

            <div>
                <br /><br />
                <h1 className='container'>DATA - </h1>
                <div className="card" style={{ width: "18rem" }}>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">City - {weather.name}</li>
                        <li className="list-group-item">temprature - {weather.main.temp}</li>
                        <li className="list-group-item">{weather.weather[0].description}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Weatherapp;
