import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function CreateArea(props) {
    const [note, setNote] = useState({
        id: "",
        title: "",
        content: ""
    });
    
    function handleChange(event) {
        const { name, value } = event.target;
    
        setNote(prevNote => {
          return {
            ...prevNote,
            [name]: value
          };
        });
    }

    function submitNote(event) {
        props.onAdd(note);
        setNote({
            id: uuidv4(),
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    return (
        <div>
            <form>
            <input
                name="title"
                onChange={handleChange}
                value={note.title}
                placeholder="Title"
            />
            <textarea
                name="content"
                onChange={handleChange}
                value={note.content}
                placeholder="Take a note..."
                rows="3"
            />
            <button onClick={submitNote}>Add</button>
            </form>
      </div>
    );
}