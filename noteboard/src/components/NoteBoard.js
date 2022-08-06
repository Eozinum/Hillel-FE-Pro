import React from 'react';

import { Header } from './Header';
import { NotesList } from './NotesList';
import { useNotes } from '../hooks/useNotes';

export const NoteBoard = () => {
  const { notes, addNewNote, deleteNote, editNote } = useNotes();

  const addNote = () => addNewNote();
  const onDeleteNote = (note) => deleteNote(note.id);
  const onSaveNote = (note) => editNote(note);

  return (
    <>
      <Header onNoteAddClick={addNote} />
      <NotesList notes={notes} onDelete={onDeleteNote} onSave={onSaveNote} />
    </>
  );
};
