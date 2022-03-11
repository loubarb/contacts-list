import React from "react";
import "./styles.css";
import { useState } from "react";

const App = () => {
  const contacts = [
    { name: "Jenny Han", email: "jenny.han@notreal.com", age: 25 },
    { name: "Jason Long", email: "jason.long@notreal.com", age: 45 },
    { name: "Peter Pan", email: "peter.pan@neverland.com", age: 100 }
  ];

  return(
    <div>
      {contacts.map(contact => (
        <ContactCard
          avatar="https://via.placeholder.com/150"
          name={contact.name}
          email={contact.email}
          age={contact.age} 
        />
      ))}
    </div>
  );
  };

const ContactCard = props => {
  console.log(props.avatar);
  console.log(props.name);
  console.log(props.email);
  console.log(props.age);

  const [showAge, setShowAge] = useState(false);

  return (
    <div className="contact-card">
      <img src="{props.avatar}" alt="profile" />
      <div className="user-details">
        <p>Name: {props.name}</p>
        <p>Email: {props.email}</p>
        <button onClick={() => setShowAge(!showAge)}>
          Toggle Age
        </button>
        {showAge === true ? <p>Age: {props.age}</p> : null}
      </div>
    </div>
  );
}

export default App