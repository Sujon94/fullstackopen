import {useState, useEffect} from 'react'
import Note from "../components/Note";
import noteService from "./services/notes"

const App = () => {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState('A new note...');
    const [showAll, setShowAll] = useState(true);

    useEffect(() => {
        noteService
            .getAll()
            .then(res => {
                setNotes(res)
            })
    }, []);

    const handleNewNote = (e) => {
        setNewNote(e.target.value)
    }

    const addNote = (e) => {
        e.preventDefault();
        const newNoteObj = {
            content: newNote,
            important: Math.random() < 0.5
        }

        noteService
            .create(newNoteObj)
            .then(res => {
                setNotes(notes.concat(res))
                setNewNote('')
            })
    }
    //Show button
    const notesToShow = showAll ? notes : notes.filter(note => note.important === true)
    //Toggle Importance
    const toggleImportanceOf = (id) => {
        const note = notes.find(n => n.id === id)
        const changedNote = {...note, important: !note.important}

        noteService
            .update(id, changedNote)
            .then(res => {
                setNotes(notes.map(n => n.id !== id ? n : res))
            }).catch(e => {
                alert(`the note ${note.content} was already deleted from server.`)
                setNotes(notes.filter(n=>n.id !== id))
        })
    }

    return (
        <div>
            <h1>Notes</h1>
            <div>
                <button onClick={() => setShowAll(!showAll)}>show {showAll ? 'important' : 'all'}</button>
            </div>
            <ul>
                {notesToShow.map(note =>
                    <Note
                        key={note.id}
                        note={note}
                        toggleImportance={() => toggleImportanceOf(note.id)}
                    />
                )}
            </ul>
            <form onSubmit={addNote}>
                <input value={newNote} onChange={handleNewNote}/>
                <button type="submit">add</button>
            </form>
        </div>
    )
}

export default App
