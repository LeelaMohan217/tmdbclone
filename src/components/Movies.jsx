import React from "react";
import MovieCard from "./MovieCard";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";

const Movies = ({ handleWatchlist, handleRemoveWatchlist, watchlist }) => {
  const [movies, setMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const handlePrevious = () => {
    if (pageNumber === 1) {
      setPageNumber(pageNumber);
    } else {
      setPageNumber(pageNumber - 1);
    }
  };

  const handleNext = () => {
    setPageNumber(pageNumber + 1);
  };
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=f9dbe4a25d6a7119a8e184d4e83ed80e&include_adult=false&include_video=false&language=en-US&page=${pageNumber}&sort_by=popularity.desc`
      )
      .then(function (res) {
        setMovies(res.data.results);
      });
  }, [pageNumber]);
  return (
    <>
      <div className="">
        <div className="p-2">
          <div className="text-center m-5 text-2xl font-bold">
            Trending Movies
          </div>
          <div className="flex flex-row flex-wrap justify-around gap-8 m-10">
            {movies.map((movieObj) => {
              return (
                <MovieCard
                  key={movieObj.id}
                  poster_path={movieObj.poster_path}
                  name={movieObj.title}
                  movieObj={movieObj}
                  handleWatchlist={handleWatchlist}
                  handleRemoveWatchlist={handleRemoveWatchlist}
                  watchlist={watchlist}
                />
              );
            })}
          </div>
          <Pagination
            pageNumber={pageNumber}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
          />
        </div>
      </div>
    </>
  );
};

export default Movies;

//        "https://api.themoviedb.org/3/discover/movie?api_key=f9dbe4a25d6a7119a8e184d4e83ed80e&include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc"
