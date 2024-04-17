import './App.css'
import { useState } from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import CreateArea from './components/CreateArea';


function App() {
  const [noteList, setNoteList] = useState([]);

  console.log(noteList);

  function addNote(newNote) {
      setNoteList((prevNotes) => {
      return [...prevNotes, newNote]
    });
  }

  function deleteNote(noteId) {
    console.log(noteId);
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