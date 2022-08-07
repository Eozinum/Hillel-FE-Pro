import React from 'react';
import { useState } from 'react';
import { useTheme } from '../hooks/useTheme';

export const Note = ({ note, onSave, onDelete }) => {
  const [description, setDescription] = useState(note.description);
  const onInputChange = (event) => {
    setDescription(event.target.value);
  };

  const { theme } = useTheme();

  const saveDescription = () => {
    onSave({ ...note, description });
  };
  return (
    <div className={`note-item ${theme}`}>
      <span className="note-delete-item" onClick={onDelete.bind(null, note)}>
        x
      </span>
      <div>
        <textarea
          className="note-item-textarea"
          name="description"
          value={description}
          onChange={onInputChange}
        ></textarea>
        <button className="note-save-item" onClick={saveDescription}>
          Save
        </button>
      </div>
    </div>
  );
};
