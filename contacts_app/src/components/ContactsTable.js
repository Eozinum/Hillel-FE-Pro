import React from 'react';
import { useEffect, useState } from 'react';
import { ContactsList } from './ContactsList';
import { getUsers, deleteUser } from '../services/services';
import { useNavigate } from 'react-router-dom';

export const ContactsTable = () => {
  const [contacts, setContacts] = useState([]);
  const redirect = useNavigate();

  useEffect(() => {
    getUsers().then(({ data }) => setContacts(data));
  }, []);

  const onDeleteContact = (contact) => {
    deleteUser(contact.id);
    setContacts(contacts.filter((item) => item.id !== contact.id));
  };
  const onAddContact = () => {
    redirect('/contact/create');
  };

  return (
    <>
      <span onClick={onAddContact}>ADD NEW CONTACT</span>
      <table>
        <tbody>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>SURNAME</th>
            <th>PHONE</th>
            <th>CHANGE</th>
          </tr>
          <ContactsList contacts={contacts} onDelete={onDeleteContact} />
        </tbody>
      </table>
    </>
  );
};
