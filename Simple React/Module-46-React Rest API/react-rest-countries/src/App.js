import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
     <LoadCountries></LoadCountries>
    </div>
  );
}


function LoadCountries() {
const [countries, setCountries] = useState([]);
useEffect( () => {
fetch("https://restcountries.com/v3.1/all")
.then(res => res.json())
.then(data => setCountries(data))


},[])
  return (
    
    <div>
      <h1>Visiting Every of the world!!!</h1>
<h2>Available countries:  {countries.length}</h2>
    </div>
  )
}

export default App;
