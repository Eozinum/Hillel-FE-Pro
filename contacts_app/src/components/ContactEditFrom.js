import React, { useEffect } from 'react';
import { useState } from 'react';
import { getUser, editUser } from '../services/services';
import { useParams, useNavigate } from 'react-router-dom';

export const ContactEditForm = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const redirect = useNavigate();
  useEffect(() => {
    getUser(id).then(({ data }) => {
      setName(data.name);
      setSurname(data.surname);
      setPhone(data.phone);
    });
  }, []);

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onSurnameChange = (e) => {
    setSurname(e.target.value);
  };

  const onPhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const onSave = (e) => {
    e.preventDefault();
    editUser(id, { name, surname, phone });
    redirect('/contacts');
  };

  const onCancel = (e) => {
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
