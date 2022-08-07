import React from 'react';
import { useTheme } from '../hooks/useTheme';

export const Header = ({ onNoteAddClick }) => {
  const { theme, setTheme, themes } = useTheme();
  const toggleTheme = () => {
    if (theme === themes.light) {
      setTheme(themes.dark);
    } else {
      setTheme(themes.light);
    }
  };
  return (
    <div className="noteboard-header">
      NoteBoard
      <span className="add-note-btn" onClick={onNoteAddClick}>
        Add new Note
      </span>
      <button className="change-theme-btn" onClick={toggleTheme}>
        Change theme
      </button>
    </div>
  );
};
