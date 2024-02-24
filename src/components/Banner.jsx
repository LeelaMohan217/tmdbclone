// Banner.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";

function Banner() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const apiKey = "f9dbe4a25d6a7119a8e184d4e83ed80e";

    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`
      )
      .then((response) => {
        const firstMovie = response.data.results[0];
        if (firstMovie) {
          setMovie(firstMovie);
        }
      })
      .catch((error) => console.error("Error fetching movie:", error));
  }, []);

  return (
    <div className="flex">
      {/* <Sidebar /> */}
      {/* <div className="w-[20vw] h-[10vh] bg-cyan-500 ">klsudhfukhdfuvhfdsui</div> */}
      <div
        className="h-[20vh] md:h-[80vh] bg-cover bg-center flex  flex-grow  items-end "
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        }}
      >
        <div className="text-white text-2xl text-center w-full p-4 bg-gray-900/60">
          {movie.title}
        </div>
      </div>
    </div>
  );
}

export default Banner;
