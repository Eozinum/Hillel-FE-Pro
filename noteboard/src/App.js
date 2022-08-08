import React from 'react';
import './App.css';
import { NoteBoard } from './components/NoteBoard';
import { ThemeProvider } from './context/ThemeProvider';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { NoteEdit } from './components/NoteEdit';

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
          <Route path="/note/:id" element={<NoteEdit />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
