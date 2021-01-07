import React from 'react';
import './App.css';
import PersonCard from './components/MyNewComponent';

function App() {
  return (
    <div className="App">
      <PersonCard lastName={"Doe"} firstName={"Jane"} age={45} hairColor={"Black"} />
      <PersonCard lastName={"Smith"} firstName={"John"} age={88} hairColor={"Brown"} />
      <PersonCard firstName="Maria" lastName="Smith" age={62} hairColor="Brown" />
      <PersonCard firstName="Millard" lastName="Fillmore" age={50} hairColor="Brown" />
    </div>
  );
}

export default App;
