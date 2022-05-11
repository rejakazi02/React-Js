import logo from './logo.svg';
import './App.css';

const id = 555;
const singer1 = { name: 'Dr. Mahfuzur ', job : 'Singer1'} 
const singer2 = { name: 'Eva Rahman ', job : 'Singer2'} 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>
       <div className="contrainer">

         <h3>hello dud ds</h3>
       </div>

       <div className="music">
         <p>Id: {id}</p>
         <p>Name: {singer1.name} Job: {singer1.job}</p>
         <p>Name: {singer2.name} Job: {singer2.job}</p>
       </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
