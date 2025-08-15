
// import area
import { useState } from "react";


// import css
import "./App.css";

function App() {

  const people = [{
    id: 1,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
  }, {
    id: 2,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
  }, {
    id: 3,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
  }, {
    id: 4,
    name: 'Percy Lavon Julian',
    profession: 'chemist',
  }, {
    id: 5,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
  }];



  return (
    <>
      <h1 className="heading"> Count:</h1>
      <ul>
       {
        people.map( (element) => {
          return <li className="listitem" key={element.id}>
            <div>Name: {element.name}</div>
            <div>Profession: {element.profession}</div>
          </li>
        } )
       }
      </ul>

    </>
  )

}



export default App;