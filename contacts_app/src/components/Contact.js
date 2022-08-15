import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Contact = ({ contact, onDelete }) => {
  const { id, name, surname, phone } = contact;
  const redirect = useNavigate();
  const onEdit = () => {
    redirect(`/contact/${id}`);
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{surname}</td>
      <td>{phone}</td>
      <td>
        <button onClick={onEdit.bind(null, contact)}>Edit</button>
        <button onClick={onDelete.bind(null, contact)}>Delete</button>
      </td>
    </tr>
  );
};
