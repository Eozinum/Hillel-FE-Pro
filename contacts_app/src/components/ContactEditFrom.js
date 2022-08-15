import React, { useEffect } from 'react';
import { useState } from 'react';
import { getContact, editContact } from '../services/services';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, ButtonGroup, Box, TextField } from '@mui/material';

export const ContactEditForm = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const redirect = useNavigate();
  useEffect(() => {
    getContact(id).then(({ data }) => {
      setName(data.name);
      setSurname(data.surname);
      setPhone(data.phone);
    });
  }, [id]);

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
    editContact(id, { name, surname, phone }).then(() => redirect('/contacts'));
  };

  const onCancel = (e) => {
    redirect('/contacts');
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, width: '35ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField color="warning" label="Name" value={name} onChange={onNameChange} />
      <TextField label="Surname" color="warning" value={surname} onChange={onSurnameChange} />
      <TextField label="Phone" color="warning" value={phone} onChange={onPhoneChange} />
      <ButtonGroup variant="outlined">
        <Button color="success" onClick={onSave}>
          Save
        </Button>
        <Button color="warning" onClick={onCancel}>
          Cancel
        </Button>
      </ButtonGroup>
    </Box>
  );
};
