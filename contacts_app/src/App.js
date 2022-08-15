import './App.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';

function App() {
  const redirect = useNavigate();
  return (
    <Button
      sx={{ marginTop: '3%' }}
      size="large"
      color="success"
      variant="contained"
      onClick={() => redirect('/contacts')}
    >
      CONTACTS
    </Button>
  );
}

export default App;
