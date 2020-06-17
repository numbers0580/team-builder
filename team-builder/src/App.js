import React, {useState} from 'react';
import Form from './Form';
import {v4} from 'uuid';
//import './App.css';

const foundingMembers = [
  //keys of name, email, and role (select)
  {id: v4(), hName: 'El Jefe', email: 'management@superheroteam.org', role: 'Team Leader'},
  {id: v4(), hName: 'Fantabulous', email: 'very-dazzling@superheroteam.org', role: 'Layout Designer'},
  {id: v4(), hName: 'Rubik\'s Cube', email: 'always-sorting@superheroteam.org', role: 'Database Maintenance'},
  {id: v4(), hName: 'Shocklamp', email: 'bugzap@superheroteam.org', role: 'Error-Proofing / Debugger'},
  {id: v4(), hName: 'The Janitor', email: 'cleanup-isle-four@superheroteam.org', role: 'Garbage Collector'},
];

//From class notes
const blankValues = {hName: '', email: '', role: ''};

function App() {
  const [superHeroTeamMembers, draftTeamMembers] = useState(foundingMembers);

  //From class notes
  const [enteredValues, updateFormValues] = useState(blankValues);

  //From class notes
  const changedInput = function(event) {
    const {name, value} = event.target;

    updateFormValues({...enteredValues, [name]: value})
  }

  //From class notes
  const clickedSubmit = function(submitEvent) {
    submitEvent.preventDefault();

    const applicant = {
      id: v4(),
      hName: enteredValues.hName.trim(),
      email: enteredValues.email.trim(),
      role: enteredValues.role
    };

    draftTeamMembers([...superHeroTeamMembers, applicant]);
    updateFormValues(blankValues);
  }

  return (
    <div className="App">
        <div>
          <h1>Super Hero Development Team!</h1>
          <h2>Now Recruiting</h2>
        </div>
        <Form values={enteredValues} inputted={changedInput} submitted={clickedSubmit} />
        <div>
          {superHeroTeamMembers.map(hero => (
            <HeroDetails key={hero.id} hero={hero} />
          ))}
        </div>
    </div>
  );
}

function HeroDetails({hero}) {
  const {hName, email, role} = hero;
  return (
    <div className='herocard'>
      <h3>Name: {hName}</h3>
      <p>Contact: {email}</p>
      <p>Special Ability: {role}</p>
      <br />
    </div>
  );
}

export default App;
