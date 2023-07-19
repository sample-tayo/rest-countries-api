import React from "react";
import "./Search.css";
import { FaSearch } from "react-icons/fa";

export default function SearchBox({ searchInput, setSearchInput, onSearch }) {
  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
    onSearch(event.target.value);
    console.log("ello");
  };

  return (
    <div className="search-box">
      <button className="btn-search">
        <FaSearch />
      </button>
      <input
        type="text"
        className="input-search"
        placeholder="Type to Search..."
        value={searchInput}
        onChange={handleSearchInput}
      />
    </div>
  );
}
