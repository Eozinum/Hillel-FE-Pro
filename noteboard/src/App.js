import React from 'react';
import './App.css';
import { NoteBoard } from './components/NoteBoard';
import { ThemeProvider } from './context/ThemeProvider';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Note } from './components/Note';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="App">
                <NoteBoard />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
