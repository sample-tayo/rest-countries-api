import React, { useState } from "react";
import "./Search.css";
import { FaSearch } from "react-icons/fa";

export default function SearchBox() {
  const [input, setInput] = useState("");
  return (
    <div className="search-box">
      <button className="btn-search">
        <FaSearch />
      </button>
      <input
        type="text"
        className="input-search"
        placeholder="Type to Search..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}
