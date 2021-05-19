import React from "react";
import Search from "../Assets/zoom-16.png"
import "./SearchBar.css"

function Searchbar() {
  return (
    <div>
      <form className="search">
        <input type="text" placeholder="Search"></input>
        <button><img src={Search}/></button>
      </form>
    </div>
  );
}

export default Searchbar;
