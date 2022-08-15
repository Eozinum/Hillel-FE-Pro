import React from 'react';
import { Contact } from './Contact';

export const ContactsList = ({ contacts, onDelete, onEdit }) => {
  return (
    <>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} onDelete={onDelete}  />
      ))}
    </>
  );
};
