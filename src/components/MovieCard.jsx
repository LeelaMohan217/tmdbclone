import React from "react";

const MovieCard = ({
  poster_path,
  name,
  handleWatchlist,
  movieObj,
  handleRemoveWatchlist,
  watchlist,
}) => {
  function isContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }
  return (
    <>
      <div
        className="h-[40vh] w-[250px] bg-cover bg-center rounded-xl hover:scale-110 duration-300ms hover:cursor-pointer flex flex-col justify-between items-end"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
        }}
      >
        {isContain(movieObj) ? (
          <div
            onClick={() => handleRemoveWatchlist(movieObj)}
            className="m-2 p-4 flex justify-center items-center rounded h-6 w-6 bg-gray-900/60"
          >
            <i
              className="fa-solid fa-heart text-red text-xl"
              style={{ color: "red" }}
            ></i>
          </div>
        ) : (
          <div
            onClick={() => handleWatchlist(movieObj)}
            className="m-2 p-4 flex justify-center items-center rounded h-6 w-6 bg-gray-900/60"
          >
            <i className="fa-regular fa-heart text-white text-xl "></i>
          </div>
        )}

        <div className=" text-white text-xl w-full p-2 text-center bg-gray-900/60 rounded-xl">
          {name}
        </div>
      </div>
    </>
  );
};

export default MovieCard;
