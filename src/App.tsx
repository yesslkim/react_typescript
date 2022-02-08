import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading';
import Oscar from './components/Oscar';

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
      <Heading>Hello world!</Heading>
      <Oscar>
        <Heading> Oscar goes to someone!</Heading>
      </Oscar>
      <Greet name="studyroom" messageCount={20} isLoggedIn={false}/>
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status='error' />
      <Greet name="studyroom" messageCount={20} isLoggedIn={false} optional="옵션사항"/>
    </div>
  );
}

export default App;
