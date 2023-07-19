import React from "react";
import Card from "./card/Card";

export default function CountryList({ countries, onSelectCountry }) {
  return (
    <div className="data-map">
      {countries.map((country) => (
        <Card
          key={country.name}
          country={country}
          onSelectCountry={onSelectCountry}
        />
      ))}
    </div>
  );
}
