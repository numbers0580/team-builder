import React, {useState} from 'react';
import Form from './Form';
import './App.css';

const foundingMembers = [
  //keys of name, email, and role (select)
  {name: 'El Jefe', email: 'management@superheroteam.org', role: 'Team Leader'},
  {name: 'Fantabulous', email: 'very-dazzling@superheroteam.org', role: 'Layout Designer'},
  {name: 'Rubik\'s Cube', email: 'always-sorting@superheroteam.org', role: 'Database Maintenance'},
  {name: 'Shocklamp', email: 'bugzap@superheroteam.org', role: 'Error-Proofing / Debugger'},
  {name: 'The Janitor', email: 'cleanup-isle-four@superheroteam.org', role: 'Garbage Collector'},
];

function App() {
  const [superHeroTeamMembers, draftTeamMembers] = useState(foundingMembers);

  return (
    <div className="App">
        <div>
          <h2>Super Hero Development Team!</h2>
          <h3>Now Recruiting</h3>
        </div>
        <Form />
        <div>
          {superHeroTeamMembers.map(hero => (
            <HeroDetails hero={hero} />
          ))}
        </div>
    </div>
  );
}

function HeroDetails({hero}) {
  const {name, email, role} = hero;
  return (
    <div>
      <h4>Name: {name}</h4>
      <p>Contact: {email}</p>
      <p>Special Ability: {role}</p>
      <br />
    </div>
  );
}

export default App;
