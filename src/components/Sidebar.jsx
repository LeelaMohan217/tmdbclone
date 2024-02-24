import React from "react";

const Sidebar = () => {
  return (
    <div className="w-[70vw] h-[40vh] md:h-[92vh] bg-gray-200 sticky top-0 ">
      <section>
        <ul>
          <li className="py-2">
            <a>Now Playing</a>
          </li>
          <li className="py-2">
            <a>Popular</a>
          </li>
          <li className="py-2">
            <a>Top Rated</a>
          </li>
          <li className="py-2">
            <a>Upcoming</a>
          </li>
        </ul>
      </section>
      <section>
        <ul>
          <li className="py-2">
            <a href="">Action</a>
          </li>
          <li className="py-2">
            <a href="">Thriller</a>
          </li>
          <li className="py-2">
            <a href="">Horror</a>
          </li>
          <li className="py-2">
            <a href="">Romance</a>
          </li>
          <li className="py-2">
            <a href="">Science fiction</a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Sidebar;
