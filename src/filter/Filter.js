import { useState } from "react";

export default function Filter({ onSort }) {
  const style = {
    backgroundColor: "var(--DarkBlue)",
    color: "var(--White)",
    fontFamily: "inherit",
    border: "none",
    padding: "1.2rem 3.2rem",
    fontWeight: 300,
    fontSize: "1.8rem",
    cursor: "pointer",
    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
  };

  const [sortRegion, setSortRegion] = useState("");
  const handleRegionChange = (event) => {
    const region = event.target.value;
    setSortRegion(region);
    onSort(region);
  };

  return (
    <div className="country-sort">
      <select value={sortRegion} style={style} onChange={handleRegionChange}>
        <option value="" style={style}>
          All
        </option>
        <option value="Asia" style={style}>
          Asia
        </option>
        <option value="Africa" style={style}>
          Africa
        </option>
        <option value="Americas" style={style}>
          America
        </option>
        <option value="Europe" style={style}>
          Europe
        </option>
        <option value="Oceania" style={style}>
          Oceanic
        </option>
      </select>
    </div>
  );
}
