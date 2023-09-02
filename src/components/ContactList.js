// ContactList.js
import React, { useState } from 'react';

function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({ name: '', phoneNumber: '' });

  const handleAddContact = () => {
    if (newContact.name && newContact.phoneNumber) {
      setContacts((prevContacts) => [
        ...prevContacts,
        { id: Date.now(), ...newContact },
      ]);
      setNewContact({ name: '', phoneNumber: '' });
    }
  };

  const handleDeleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  return (
    <div>
      <h1>Contact List</h1>
      <form>
        <input
          type="text"
          placeholder="Name"
          value={newContact.name}
          onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={newContact.phoneNumber}
          onChange={(e) =>
            setNewContact({ ...newContact, phoneNumber: e.target.value })
          }
        />
        <button type="button" onClick={handleAddContact}>
          Add Contact
        </button>
      </form>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <span>Name: {contact.name}</span>
            <span>Phone Number: {contact.phoneNumber}</span>
            <button onClick={() => handleDeleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
