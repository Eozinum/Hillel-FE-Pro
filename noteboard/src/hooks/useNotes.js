import { useState, useEffect, useCallback } from 'react';
import API from '../constants/index';

const NEW_NOTE = {
  description: '',
};

export const useNotes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    API.get().then(({ data }) => {
      setNotes(data);
    });
  }, []);

  const addNewNote = useCallback(() => {
    API.post('', NEW_NOTE).then(({ data }) => {
      setNotes((prevNotes) => [...prevNotes, data]);
    });
  }, [notes]);

  const deleteNote = (id) => {
    API.delete(id);
    setNotes(notes.filter((item) => item.id !== id));
  };

  return {
    notes,
    addNewNote,
    deleteNote,
  };
};
