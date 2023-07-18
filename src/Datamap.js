import React, { useState, useEffect } from "react";
import Card from "./card/Card";
import Filter from "./filter/Filter";
import SearchBox from "./search/Search";

export default function Datamap() {
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchCountries() {
      try {
        setIsLoading(true);
        const res = await fetch(`/data.json`);

        if (!res.ok) throw new Error("Your network no good");

        const result = await res.json();
        const countries = result.countries || [];
        setData(countries);
        setOriginalData(countries);
      } catch (err) {
        console.error(err.message);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCountries();
  }, []);

  const handleSort = (region) => {
    if (region) {
      const filteredData = originalData.filter(
        (country) => country.region === region
      );
      setData(filteredData);
    } else {
      // Reset to original data when "All" is selected
      setData(originalData);
    }
  };

  return (
    <div className="data-map-container">
      <section>
        <SearchBox />
        <Filter countries={data} onSort={handleSort} />
      </section>
      <div className="data-map">
        {isLoading && <Loader />}
        {!isLoading &&
          !error &&
          data.map((country) => <Card key={country.name} country={country} />)}
        {error && <ErrorMessage message={error} />}
      </div>
    </div>
  );
}

function ErrorMessage({ message }) {
  return (
    <p className="error" style={{ fontSize: "4rem", color: "black" }}>
      {message}
    </p>
  );
}

function Loader() {
  return (
    <p className="loader" style={{ fontSize: "4rem", color: "black" }}>
      Loading....
    </p>
  );
}
