/* eslint-disable react/prop-types */
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from "@mui/material/Zoom";

export default function CreateArea(props) {
    const [isExpanded, setExpanded] = useState(false);

    const [note, setNote] = useState({
        id: "",
        title: "",
        content: ""
    });
    
    // This function updates the state when user types in the "title" and "content" field
    function handleChange(event) {
        const { name, value } = event.target;
    
        setNote(prevNote => {
          return {
            ...prevNote,
            [name]: value
          };
        });
    }

    // When pressing the "Add"-Button a unique ID is created and the note is send to App.jsx via the onAdd-prop
    function submitNote(event) {
        props.onAdd(note);
        setNote({
            id: uuidv4(),
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    function expand() {
        setExpanded(true);
    }

    return (
        <div>
        <form className="create-note">
            {isExpanded && (
            <input
                name="title"
                onChange={handleChange}
                value={note.title}
                placeholder="Title"
            />
            )}

            <textarea
                name="content"
                onClick={expand}
                onChange={handleChange}
                value={note.content}
                placeholder="Take a note..."
                rows={isExpanded ? 3 : 1}
            />
            <Zoom in={isExpanded}>
                <Fab onClick={submitNote}>
                    <AddIcon />
                </Fab>
            </Zoom>
        </form>
        </div>
    );
}