//src/APP.js
import './App.css';
import { useState } from 'react';
import contactsInfo from './contacts.json';


function App() {
  const [contacts, setContacts] = useState(contactsInfo.slice(0, 6));
  const handleRandomContact = Math.floor(Math.random() * contactsInfo.length);
  
  const listUpdater = () => {
    setContacts([...contacts, contactsInfo[handleRandomContact]]);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={listUpdater}>Add Random Contact</button>
      <table>
        <tr>
          <th scope="col">Picture</th>
          <th scope="col">Name</th>
          <th scope="col">Popularity</th>
          <th scope="col">Won an Oscar</th>
          <th scope="col">Won an Emmy</th>
        </tr>
        {contacts.map((contact) => {
          return (
            <tr key={contacts.id}>
              <td>
                <img 
                  src={contact.pictureUrl}
                  alt="pic"
                  style={{ width: '10%'}}
                  />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar === true ? '🏆' : ' '}</td>
              <td>{contact.wonEmmy === true ? '🏆' : ' '}</td>
            </tr>    
          );
        })}
      </table>
    </div>
  );
}

export default App;


