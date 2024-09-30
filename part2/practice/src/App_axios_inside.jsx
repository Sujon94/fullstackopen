import {useState, useEffect} from 'react'
import axios from "axios";
import Note from "../components/Note";


const App = () => {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState('A new note...');
    const [showAll, setShowAll] = useState(true);

    /***Example of hook, useEffect*/

    const hook = () => {
        //console.log('effect')

        const eventHandler = res => {
            //console.log('Promise fulfilled')
            setNotes(res.data)
        };

        const promise = axios.get('http://localhost:3001/notes');
        promise.then(eventHandler);

        //OR

        // axios
        //     .get('http://localhost:3001/persons')
        //     .then(response => {
        //         console.log('promise fulfilled')
        //         setNotes(response.data)
        //     })

    };
    useEffect(hook, []);
    //console.log('render', notes.length, 'notes')

    const handleNewNote = (e) => {
        setNewNote(e.target.value)
    }
    const addNote = (e) => {
        e.preventDefault();
        const newNoteObj = {
            content: newNote,
            important: Math.random() < 0.5,
            //id: String(notes.length + 1)
        }

        axios.post('http://localhost:3001/notes',newNoteObj)
            .then(res=>{
                setNotes(notes.concat(newNoteObj));
                setNewNote('');
            });
    }
    //Show button
    const notesToShow = showAll ? notes : notes.filter(note => note.important === true)
    console.log(notesToShow,'nothing');
    //Toggle Importance
    const toggleImportanceOf = (id) =>{

        const url = `http://localhost:3001/notes/${id}`
        const note = notes.find(n=> n.id === id)
        const changedNote = { ...note, important: !note.important}

        axios.put(url,changedNote)
            .then(res=>{
                setNotes(notes.map(n=>n.id !== id ? n:res.data))
            })

        //console.log(`importance of ${id} Need to toggle`)
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
                        toggleImportance={()=>toggleImportanceOf(note.id)}
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
