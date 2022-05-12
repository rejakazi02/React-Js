import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <Counts> </Counts>
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function Counts(props) {
  const [count, setCount] = useState(50);

  // 1 away

  const increaseCount = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  // 2 away
  const decreaseCount = () => setCount(count - 1);
  return (
    <div className="count">
      <h1> Counts: {count} </h1>{" "}
      <button onClick={increaseCount}> Increase </button>{" "}
      <button onClick={decreaseCount}> Decrease </button>{" "}
    </div>
  );
}

// ExternalUsers section

function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h2>External Users</h2>

      {users.map((user) => (
        <User name={user.name} email={user.email}>
          {" "}
        </User>
      ))}
    </div>
  );
}

function User(props) {
  return (
    <div className="userDiv">
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  );
}

export default App;
