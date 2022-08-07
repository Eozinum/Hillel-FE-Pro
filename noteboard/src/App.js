import React from 'react';
import './App.css';
import { NoteBoard } from './components/NoteBoard';
import { ThemeProvider } from './context/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <NoteBoard />
      </div>
    </ThemeProvider>
  );
}

export default App;
