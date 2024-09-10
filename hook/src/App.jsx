import { useState } from "react";
import "./App.css";
function App() {
  let [counter, setCounter] = useState(0);
  const addvalue = () => {
    counter = counter + 1;
    setCounter(counter);
  };

  const removevalue = () => {
    counter = counter - 1;
    setCounter(counter);
  };
  return (
    <>
      <h1>Counter project for understanding Of React Hooks </h1>
      <h2>Counter value: {counter} </h2>
      <button onClick={addvalue}>Add value </button>
      <button onClick={removevalue}>Remove value </button>
    </>
  );
}

export default App;
