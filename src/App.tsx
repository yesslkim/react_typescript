import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';

function App() {
  const personName = {
    first: 'kim',
    last: 'mary'
  }

  const nameList = [
    {
      first: 'kim',
      last: 'one'
    },
    {
      first: 'lee',
      last: 'two'
    },
    {
      first: 'park',
      last: 'three'
    }
  ]


  return (
    <div className="App">
      <Greet name="studyroom" messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList}/>
    </div>
  );
}

export default App;
