import React from 'react';
import { useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import { Link } from 'react-router-dom';

export const Note = ({ note, onDelete }) => {
  const [description, setDescription] = useState(note.description);
  const { theme } = useTheme();
  return (
    <div className={`note-item ${theme}`}>
      <span className="note-delete-item" onClick={onDelete.bind(null, note)}>
        x
      </span>
      <div>
        <div className="note-item-text">{description}</div>
        <Link to={`/note/${note.id}`}>
          <button className="note-edit-item">Edit</button>
        </Link>
      </div>
    </div>
  );
};
