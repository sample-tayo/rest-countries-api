import React, { useState, useEffect } from "react";
import Card from "./card/Card";

export default function Datamap() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  /* The `useEffect` hook in React is used to perform side effects in functional components. In this
  case, the `useEffect` hook is being used to fetch data from a JSON file (`/data.json`) and update
  the state (`data`) with the fetched data. */
  useEffect(function () {
    async function fetchCountries() {
      try {
        setIsLoading(true);
        const res = await fetch(`/data.json`);

        if (!res.ok) throw new Error("Your network no good");

        const result = await res.json();
        setData(result.countries || []);
        console.log(result.countries);
        // setData(result.countries);
      } catch (err) {
        console.error(err.message);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCountries();
  }, []);

  return (
    <div className="data-map">
      {/* {isLoading ? (
        <Loader />
      ) : (
        data.map((country) => <Card key={country.name} country={country} />)
      )} */}

      {isLoading && <Loader />}
      {!isLoading &&
        !error &&
        data.map((country) => <Card key={country.name} country={country} />)}
      {error && <ErrorMessage message={error} />}
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
