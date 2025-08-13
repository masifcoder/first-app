
// import area
import Child from "./Child.jsx";
import { useState } from "react";


// import css
import "./App.css";

function App() {
  const [count, setCount] = useState(0);


  const appName = "First App";
  // const userName    = "Khalid";

  // const welcome = (name = null) => {
  //   alert(`welcome user ${name}`)
  // }

  function increment() {
    setCount( count + 1);
    
  }

  return (
    <>
      <h1 className="heading"> {appName} </h1>

      <button onClick={increment}>Increment</button>
      <button onClick={ () => setCount( count - 1)} >Decrement</button>
      <button onClick={() => setCount(0) }>Reset</button>
      <h1>Count: {count} </h1>


      {/* <button onClick={welcome }  > Increment </button>
      <button onClick={ () => welcome("Sara") }  >Decrement</button> */}



      
      <Child name="ali" city="Lodhran" age={count} />
      {/* <Child name="sara" city="Bahawalpur" age={30} /> */}
    </>
  )

}



export default App;