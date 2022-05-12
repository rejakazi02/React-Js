import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Counts> </Counts>{" "}
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

export default App;
