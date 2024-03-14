import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Home() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=d9fc5986b0464c15d68efcb7b182a137&language=en-US")
      .then(res => res.json())
      .then(d => setdata(d.results)); // Assuming you want to access the 'results' property of the API response
  }, []);

  console.log(data);

  return (
    <div>
      <Carousel>
        {data.map(movie => (
          <div key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <p className="legend">{movie.title}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Home;
