import React from "react";
import "./selectedCountry.css";
import { BiArrowBack } from "react-icons/bi";

export default function DisplaySelectedCountry({ country, handleBackButton }) {
  return (
    <div className="selectedCountry">
      <div className="back-img-container">
        <button className="back-btn" onClick={handleBackButton}>
          <BiArrowBack />
          Back
        </button>
        <img src={country.flag} alt={country.name} />
      </div>
      <div className="text-container">
        <div className="mini-container">
          <div className="country-name">
            <h4> {country.name}</h4>
            <p>
              Native Name: <span>{country.nativeName}</span>
            </p>
            <p>
              Population: <span>{country.population}</span>
            </p>
            <p>
              Region: <span>{country.region}</span>
            </p>
            <p>
              Sub Region: <span>{country.subregion}</span>
            </p>
            <p>
              Capital: <span> {country.capital}</span>
            </p>
          </div>

          <div className="domainLevel">
            <p>
              Top Level Domain: <span>{country.topLevelDomain}</span>
            </p>
            <p>
              Currencies: <span></span>
            </p>
            <p>
              Languages: <span></span>
            </p>
          </div>
        </div>

        <div className="border-countries"> Border: countries</div>
      </div>
    </div>
  );
}
