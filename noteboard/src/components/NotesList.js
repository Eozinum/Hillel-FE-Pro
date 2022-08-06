import { Note } from './Note';
import React from 'react';

export const NotesList = ({ notes, onDelete, onSave }) => {
  return (
    <div className="all-notes">
      {notes.map((item) => (
        <Note key={item.id} note={item} onDelete={onDelete} onSave={onSave} />
      ))}
    </div>
  );
};
