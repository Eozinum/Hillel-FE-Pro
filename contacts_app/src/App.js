import './App.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';

function App() {
  const redirect = useNavigate();
  return (
    <header>
      <Button size="large" color="success" variant="contained" onClick={() => redirect('/contacts')}>
        CONTACTS
      </Button>
    </header>
  );
}

export default App;
