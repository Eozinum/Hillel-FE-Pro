import React from 'react';
import { useTheme } from '../hooks/useTheme';

export const Header = ({ onNoteAddClick }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`noteboard-header ${theme}`}>
      NoteBoard
      <button className="add-note-btn" onClick={onNoteAddClick}>
        Add new Note
      </button>
      <button className="change-theme-btn" onClick={toggleTheme}>
        Change theme
      </button>
    </div>
  );
};
