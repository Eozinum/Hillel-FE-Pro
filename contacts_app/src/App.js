import './App.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const redirect = useNavigate();
  return (
    <header>
      <button onClick={() => redirect('/contacts')}>CONTACTS</button>
    </header>
  );
}

export default App;
