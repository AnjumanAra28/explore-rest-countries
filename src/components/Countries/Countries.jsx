import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [visitedCountries,setVisitedCountries] = useState([]);
  const [visitedCountryFlags,setVisitedCountryFlags]= useState([]);



  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

 const handleVisitedCountries = country=>{
    const newVisitedCountry =[...visitedCountries,country];
    setVisitedCountries(newVisitedCountry);
 }

 const handleVisitedCountryFlags = country =>{
    const newVisitedCountryFlags = [...visitedCountryFlags,country]
    setVisitedCountryFlags(newVisitedCountryFlags)
 }
  return (
    <div>
      <h2>Countries: {countries.length}</h2>
      <div>
        <h3>Visited Countries: {visitedCountries.length}</h3>
        <ul>
          {
            visitedCountries.map((country)=><li key={country.cca3}>{country.name.common}</li>)
          }
        </ul>
        <div>
          {
          visitedCountryFlags.map((country ,idx)=><img  style={{height:'60px' , margin:'10px'}} key={idx} src={country.flags.png}></img>)
          } 
        </div>
      </div> 
      

      <div className="country-container">
        {countries.map((country) => (
          <Country key={country.cca3} 
          handleVisitedCountries= {handleVisitedCountries}
          handleVisitedCountryFlags ={handleVisitedCountryFlags}
          country={country}></Country>
        ))}
      </div>
    </div>
  );
}
