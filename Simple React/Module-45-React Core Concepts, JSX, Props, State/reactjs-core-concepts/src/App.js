import logo from './logo.svg';
import './App.css';

const id = 555;
const singer1 = { name: 'Dr. Mahfuzur ', job : 'Singer1'} 
const singer2 = { name: 'Eva Rahman ', job : 'Singer2'} 
// New style property in react 

const singerStyle ={
  color: 'blue',
  backgroundColor: 'white',
  margin: '5%'
}

function App() {
  return (
    <div className="App">
    <Person></Person>
    <Friend></Friend>
    <Person></Person>
    <Friend></Friend>
    <Person></Person>
    <Friend></Friend>
    <Person></Person>
    <Friend></Friend>
    <Person></Person>
    <Friend></Friend>
    <Friend></Friend>
    
    </div>
  );
}

function Person() {
  return (

    <div className="person">
      <h1>Name: Reja</h1>
      <p style={singerStyle}>Job: Intern</p>
    </div>
  )
  
}


function Friend() {
  return (

    <div className="person1">
      <h1>Name: Habu</h1>
      <p style={singerStyle}>Job: Intern</p>
    </div>
  )
  
}


export default App;
