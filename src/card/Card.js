import React from "react";
import "./Card.css";

export default function Card({ country }) {
  return (
    <div className="card">
      <img src={country.flags.svg} alt={country.name} />

      <div className="card-content">
        <h4>{country.name}</h4>
        <p>
          Population: <span>{country.population}</span>
        </p>
        <p>
          Region: <span>{country.region}</span>
        </p>
        <p>
          Capital: <span>{country.capital}</span>
        </p>
      </div>
    </div>
  );
}
