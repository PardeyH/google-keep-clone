import DeleteIcon from "@mui/icons-material/Delete";

/* eslint-disable react/prop-types */
export default function Note(props) {
    
    // When pressing the delete button on a note, the ID of the note is send to the App.jsx
    function handleClick() {
        props.onDelete(props.noteId);
    }
    
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleClick}>
                <DeleteIcon />
            </button>
        </div>
    );
}