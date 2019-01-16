import React from 'react';
import FilterNotes from './FilterNotes/FilterNotesContainer';
import NoteEditor from './NoteEditor/NoteEditorContainer';
import NotesList from './NoteList/NotesListContainer';

const App = () => (
  <>
    <h2>Welcome</h2>
    <FilterNotes />
    <NoteEditor />
    <NotesList />
  </>
);

export default App;
