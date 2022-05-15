import React from 'react';
import { useEffect, useState } from 'react';

const Person = () => {
    return (
        <div>
              <LoadCountries></LoadCountries>
        </div>
    );
};



function LoadCountries() {
    const [countries, setCountries] = useState([]);
    useEffect( () => {
    fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => setCountries(data))
    
    
    },[]);
      return (
        
        <div>
          <h1>Visiting Every of the world!!!</h1>
    <h2>Available countries:  {countries.length}</h2>
     
     {
       countries.map(country => <CountriesInfo name={country.name.common} population={country.population} > </CountriesInfo>)
     }
     
        </div>
      )
    }
    
    
    function CountriesInfo(props) {
      return (
    
        <div> 
          <h1> Population: {props.population}</h1>
        </div>
      )
      }
export default Person;