import React, { useState, useEffect } from "react";
// import Card from "./card/Card";
import Filter from "./filter/Filter";
import SearchBox from "./search/Search";
import DisplaySelectedCountry from "./selectedCountry/DisplaySelectedCountry";
import CountryList from "./CountryList";
// import { FaSearch } from "react-icons/fa";

export default function Datamap() {
  const [searchInput, setSearchInput] = useState("");
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleSelectedCountry = (countryName) => {
    const selectedCountry = data.find(
      (country) => country.name === countryName
    );
    setSelectedCountry(selectedCountry);
  };

  function handleBackButton() {
    setSelectedCountry(null);
  }

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

        console.log(countries);
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
      // Reset to original data when All is selected "oti sumi"
      setData(originalData);
    }
  };

  const handleSearch = (searchQuery) => {
    // just expeerimenting minimun characters for the search query
    if (searchQuery.length >= 2) {
      const filteredData = originalData.filter((country) =>
        country.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setData(filteredData);
    } else {
      // If the search query length is less than 2, reset the data to the original data
      setData(originalData);
    }
  };

  return (
    <>
      {selectedCountry ? (
        <DisplaySelectedCountry
          country={selectedCountry}
          handleBackButton={handleBackButton}
        />
      ) : (
        <div className="data-map-container">
          <section>
            <SearchBox
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              onSearch={handleSearch}
            />
            <Filter countries={data} onSort={handleSort} />
          </section>
          <div className="data-map">
            {isLoading && <Loader />}
            {!isLoading && !error && (
              <CountryList
                countries={data}
                onSelectCountry={handleSelectedCountry}
              />
            )}
            {error && <ErrorMessage message={error} />}
          </div>
        </div>
      )}
    </>
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
