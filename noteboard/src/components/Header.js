import React from 'react';

export const Header = ({ onNoteAddClick }) => {
  return (
    <div className="noteboard-header">
      NoteBoard
      <span className="add-note-btn" onClick={onNoteAddClick}>
        Add new
      </span>
    </div>
  );
};
