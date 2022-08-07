import { Note } from './Note';
import React from 'react';
import { useTheme } from '../hooks/useTheme';

export const NotesList = ({ notes, onDelete, onSave }) => {
  const { theme } = useTheme();
  return (
    <div className={`all-notes ${theme}`}>
      {notes.map((item) => (
        <Note key={item.id} note={item} onDelete={onDelete} onSave={onSave} />
      ))}
    </div>
  );
};
