import React, { useEffect, useState, useRef } from 'react';
import { ContactsList } from './ContactsList';
import { getUsers, deleteUser } from '../services/services';
import { useNavigate } from 'react-router-dom';
import { Button, Paper, Table, TableBody, TableCell, TableRow, TableHead, TableContainer } from '@mui/material';

export const ContactsTable = () => {
  const [contacts, setContacts] = useState([]);
  const redirect = useNavigate();

  useEffect(() => {
    getUsers().then(({ data }) => setContacts(data));
  }, []);

  const onDeleteContact = async (id) => {
    await deleteUser(id);
    setContacts(contacts.filter((contact) => contact.id !== id));
  };
  const onAddContact = () => {
    redirect('/contact/create');
  };

  return (
    <>
      <Button sx={{ margin: '20px 0' }} size="large" variant="contained" color="warning" onClick={onAddContact}>
        ADD NEW CONTACT
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">NAME</TableCell>
              <TableCell align="center">SURNAME</TableCell>
              <TableCell align="center">PHONE</TableCell>
              <TableCell align="center">CHANGE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <ContactsList contacts={contacts} onDelete={onDeleteContact} />
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
