import React from "react";
import { useState } from "react";
import genreIds from "../utility/genre";
import { useEffect } from "react";
const Watchlist = ({ watchlist, setWatchlist, handleRemoveWatchlist }) => {
  const [search, setSearch] = useState("");

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let sortIncreasing = () => {
    let sortedInc = watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWatchlist([...sortedInc]);
  };
  let sortDecreasing = () => {
    let sortedDec = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchlist([...sortedDec]);
  };

  const [genreList, setGenreList] = useState(["All Genres"]);
  useEffect(() => {
    let temp = watchlist.map((movieObj) => {
      return genreIds[movieObj.genre_ids[0]];
    });
    temp = new Set(temp);
    setGenreList(["All Genres", ...temp]);
  }, [watchlist]);

  const [currentGenre, setCurrentGenre] = useState("All Genres");
  const handleFilter = (genre) => {
    setCurrentGenre(genre);
  };
  return (
    <>
      <div className="flex justify-center flex-wrap m-4 gap-4">
        {genreList.map((genre) => {
          return (
            <div
              onClick={() => handleFilter(genre)}
              className={
                currentGenre == genre
                  ? "flex justify-center items-center bg-blue-400 h-[2.5rem] w-[8rem] text-white font-bold cursor-pointer rounded"
                  : "flex justify-center items-center bg-gray-400/50 h-[2.5rem] w-[8rem] text-white font-bold cursor-pointer rounded"
              }
            >
              {genre}
            </div>
          );
        })}
      </div>
      <div className="flex justify-center my-8 ">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          className="h-[3rem] w-[18rem]  px-4 bg-gray-200 rounded outline-none"
          placeholder="Search Movie"
        />
      </div>
      <div className="overflow-hidden  rounded-lg border border-gray-200 m-8">
        <table className="w-full  text-gray-500 text-center">
          <thead className="border-b-2 h-[3rem]">
            <tr>
              <th></th>
              <th>Name</th>
              <th className="flex justify-center">
                <div className="p-2" onClick={sortIncreasing}>
                  <i className="fa-solid fa-arrow-up"></i>
                </div>
                <div className="p-2">Ratings</div>
                <div className="p-2" onClick={sortDecreasing}>
                  <i className="fa-solid fa-arrow-down"></i>
                </div>
              </th>

              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchlist
              .filter((movieObj) => {
                if (currentGenre == "All Genres") {
                  return true;
                } else {
                  return genreIds[movieObj.genre_ids[0]] == currentGenre;
                }
              })
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr key={movieObj.id} className="border-b-2 ">
                    <td className="flex items-center px-6 py-4">
                      <img
                        className="h-[10rem] w-[8rem]"
                        src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                      />
                    </td>
                    <td>{movieObj.title}</td>
                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{genreIds[movieObj.genre_ids[0]]}</td>
                    <td
                      onClick={() => handleRemoveWatchlist(movieObj)}
                      className="text-red-800 font-bold cursor-pointer"
                    >
                      Delete
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Watchlist;
