import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addContact } from '../services/services';

import { Button, ButtonGroup, Box, TextField } from '@mui/material';

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
    addContact({ name, surname, phone }).then(() => redirect('/contacts'));
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
      <TextField color="warning" label="Name" onChange={onNameChange} />
      <TextField color="warning" label="Surname" onChange={onSurnameChange} />
      <TextField color="warning" label="Phone" onChange={onPhoneChange} />
      <ButtonGroup>
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
