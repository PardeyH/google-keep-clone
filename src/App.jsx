import './App.css'
import { useState } from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import CreateArea from './components/CreateArea';


function App() {
  const [noteList, setNoteList] = useState([]);

  function addNote(note) {
      setNoteList((prevNotes) => {
      return [...prevNotes, note]
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
          index={note.id}
          title={note.title}
          content={note.content}
        />
        );
      })}

      <Footer />
    </>
  )
}

export default App;