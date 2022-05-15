import logo from './logo.svg';
import './App.css';

import Country from './components/Country/Country';
import Person from './components/Person/Person';

function App() {
  return (
    <div className="App">
     {/* <LoadCountries></LoadCountries> */}
     <Country></Country>
     <Person></Person>
    </div>
  );
}



export default App;
