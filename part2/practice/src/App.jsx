import {useState, useEffect} from 'react'
import Note from "../components/Note";
import noteService from "./services/notes"
import './index.css'
import Notification from "../components/Notification";
import Footer from "../components/Footer";

const App = () => {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState('A new note...');
    const [showAll, setShowAll] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

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

    const removeNote = (id) => {
        const note = notes.find(n => n.id === id)
        noteService.remove(id)
            .then(res => {
                setSuccessMessage(`${note.content} is removed.`);
                setTimeout(()=> {
                        setSuccessMessage(null)
                    }, 5000
                );
                noteService.getAll().then(res => {
                    setNotes(res);
                });
            }).catch(e=>{
                setErrorMessage(`${note.content} was already deleted from server.`);
                setTimeout(()=>{
                    setErrorMessage(null)
                }, 5000)
            setNotes(notes.filter(n => n.id !== id))
        });
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
            setErrorMessage(
                `${note.content} was already deleted from server.`
            )
            setTimeout(() => {
                    setErrorMessage(null)
                }, 5000
            )
            // alert(`the note ${note.content} was already deleted from server.`)
            setNotes(notes.filter(n => n.id !== id))
        })
    }

    return (
        <div>
            <h1>Notes</h1>
            <Notification errorMessage={errorMessage} successMessage={successMessage}/>
            <div>
                <button onClick={() => setShowAll(!showAll)}>show {showAll ? 'important' : 'all'}</button>
            </div>
            <ul>
                {notesToShow.map(note =>
                    <Note
                        key={note.id}
                        note={note}
                        toggleImportance={() => toggleImportanceOf(note.id)}
                        removeNote={() => removeNote(note.id)}
                    />
                )}
            </ul>
            <form onSubmit={addNote}>
                <input value={newNote} onChange={handleNewNote}/>
                <button type="submit">add</button>
            </form>

            <Footer/>
        </div>
    )
}

export default App
