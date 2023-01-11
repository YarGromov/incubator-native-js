import React from 'react';
import './App.css';
import {User} from "./06-callbacks/06-callbacks";
import {Promises} from "./11 - Promises/Promises";

function App() {

    const names = ['Oleg', 'Katya', 'Pasha', 'Tanya']
    const users = [
        {name: 'Oleg Oleg'},
        {name: 'Katya Katya'},
        {name: 'Pasha Pasha'},
        {name: 'Tanya Tanya'},
    ]
    const liElements = users.map((u, index)=> <li key={index}>{index} - {u.name}</li>)
  return (
    <div className="App">
      <Promises/>
    </div>
  );
}

export default App;
