import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import { editNote } from '../service/noteActions';
import axios from 'axios';
import { API_URL } from '../constants';

export const NoteEdit = () => {
  const [desc, setDesc] = useState('');
  const { id } = useParams();
  const redirect = useNavigate();
  const { theme } = useTheme();

  useEffect(() => {
    axios.get(`${API_URL}/${id}`).then(({ data }) => {
      setDesc(data.description);
    });
  }, []);

  const saveNote = (e) => {
    e.preventDefault();
    editNote(id, desc).then(() => redirect('/'));
  };
  return (
    <div className={`edit-item ${theme}`}>
      <form className={`edit-form ${theme}`}>
        <textarea
          type="text"
          value={desc}
          className={`edit-input ${theme}`}
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
        <button type="submit" className={`edit-btn ${theme}`} onClick={saveNote}>
          Save
        </button>
      </form>
    </div>
  );
};
