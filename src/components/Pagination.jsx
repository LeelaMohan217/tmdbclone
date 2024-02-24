import React from "react";

function Pagination({ handlePrevious, handleNext, pageNumber }) {
  return (
    <div className=" p-2 mt-4 flex justify-center">
      <div
        onClick={handlePrevious}
        className="px-4 hover:cursor-pointer rounded"
        style={{ color: "blue" }}
      >
        <i className="fa-solid fa-arrow-left"></i>
      </div>
      <div className="font-bold px-4" style={{ color: "blue" }}>
        {pageNumber}
      </div>
      <div
        onClick={handleNext}
        className="px-4 hover:cursor-pointer rounded"
        style={{ color: "blue" }}
      >
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
}

export default Pagination;
