import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Note from './components/Note'
import CreateArea from './components/CreateArea';
import notes from "./notes";


function App() {
  return (
    <>
      <Header />
      <CreateArea />
      {notes.map((note) => (
        <Note 
          key={note.id}
          title={note.title}
          content={note.content}
        />
        )
      )}

      <Footer />
    </>
  )
}

export default App;