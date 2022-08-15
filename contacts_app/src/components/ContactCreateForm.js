import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../services/services';

export const ContactCreateForm = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const redirect = useNavigate();

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onSurnameChange = (e) => {
    setSurname(e.target.value);
  };

  const onPhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const onCancel = (e) => {
    redirect('/contacts');
  };

  const onSave = (e) => {
    e.preventDefault();
    addUser({ name, surname, phone });
    redirect('/contacts');
  };

  return (
    <form>
      <input value={name} onChange={onNameChange} />
      <input value={surname} onChange={onSurnameChange} />
      <input value={phone} onChange={onPhoneChange} />
      <button onClick={onSave}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </form>
  );
};
