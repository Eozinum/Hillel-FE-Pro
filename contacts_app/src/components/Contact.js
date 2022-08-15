import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TableCell, TableRow } from '@mui/material';

export const Contact = ({ contact, onDelete }) => {
  const { id, name, surname, phone } = contact;
  const redirect = useNavigate();
  const onEdit = () => {
    redirect(`/contact/${id}`);
  };
  const onContactDelete = () => onDelete(id);

  return (
    <TableRow>
      <TableCell align="center">{id}</TableCell>
      <TableCell align="center">{name}</TableCell>
      <TableCell align="center">{surname}</TableCell>
      <TableCell align="center">{phone}</TableCell>
      <TableCell align="center">
        <Button onClick={onEdit}>Edit</Button>
        <Button color="error" onClick={onContactDelete}>
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
};
