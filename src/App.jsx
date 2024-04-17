import './App.css'
import { useState } from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import CreateArea from './components/CreateArea';

function App() {
  const [noteList, setNoteList] = useState([]);

  // this function updates the noteList and adds a new note at the end of the array
  // the data comes from input fields in the CreateArea.jsx
  function addNote(newNote) {
      setNoteList((prevNotes) => {
      return [...prevNotes, newNote]
    });
  }

  // this function filters the noteList-Array and deletes the note with unique ID
  function deleteNote(noteId) {
    setNoteList(prevNotes => {
      return prevNotes.filter((noteItem) => {
        return noteItem.id !== noteId;
      });
    });
  }

  return (
    <>
      <Header />
      <CreateArea onAdd={addNote} />
            {noteList.map((note) => {
              return (
        <Note 
          key={note.id}
          noteId={note.id}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />
        );
      })}

      <Footer />
    </>
  )
}

export default App;