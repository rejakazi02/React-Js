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

  const nayoks = ['Rubel', 'BappaRaz', 'Razzak','Bappy'];

 
  return (
    <div className="App">

{
    nayoks.map(nayok => <Person name= { nayok }></Person>)
  }
    {/* <Person name= 'Reja'></Person>
    <Friend name= 'Tanbir' job= 'Developer'></Friend>
    <Person name= 'Rizvi'></Person>
    <Friend name= 'Jim' job= 'Developer'></Friend>
    <Person name= 'Habib'></Person>
    <Friend name= 'Rahad' job= 'Developer'></Friend>
    <Person name= 'Toasin'></Person>
    <Friend name= 'Imran' job= 'Developer'></Friend> */}
   
    </div>
  );
}

function Person(props) {
  return (

    <div className="person">
      <h1>{props.name}</h1>
      <p style={singerStyle}>Job: Intern</p>
    </div>
  )
  
}


function Friend(props) {
  return (

    <div className="person1">
      <h1>{props.name}</h1>
      <p style={singerStyle}>Job: {props.job}</p>
    </div>
  )
  
}


export default App;
