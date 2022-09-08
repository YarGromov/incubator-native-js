import React from 'react';
import './App.css';

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
      <ul>
          {liElements}
      </ul>
    </div>
  );
}

export default App;
