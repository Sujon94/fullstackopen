const Note = ({note, toggleImportance, removeNote})=>{
    const label = note.important ? 'make not important' : 'make important'

    return (
        <li className='note'>
            {note.content}
            <button onClick={toggleImportance}>{label}</button>
            <button onClick={removeNote}>Delete</button>
        </li>
    )
}


export default Note
