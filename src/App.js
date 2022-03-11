import React from "react";
import "./styles.css";
import { useState } from "react";

const App = () => {
  const [contacts, setContacts] = useState([]);

  fetch("https://randomuser.me/api/?results=3")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setContacts(data.results);
    });

  return(
    <div>
      {contacts.map(contact => (
        <ContactCard
          picture={contact.picture.large}
          name={contact.name.first + " " + contact.name.last}
          email={contact.email}
          age={contact.dob.age} 
        />
      ))}
    </div>
  );
};

const ContactCard = props => {
  // console.log(props.picture);
  // console.log(props.name);
  // console.log(props.email);
  // console.log(props.age);

  const [showAge, setShowAge] = useState(false);

  return (
    <div className="contact-card">
      <img src={props.picture} alt="profile" />
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