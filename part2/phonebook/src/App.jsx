import {useState} from 'react'
import Person from "../component/Person";

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Sujon Chondro Shil', id: 5, number: '01833801211'},
        {name: 'Arto Hellas', number: '040-123456', id: 1},
        {name: 'Ada Lovelace', number: '39-44-5323523', id: 2},
        {name: 'Dan Abramov', number: '12-43-234345', id: 3},
        {name: 'Mary Poppendieck', number: '39-23-6423122', id: 4}
    ])
    const [newName, setNewName] = useState('')
    const handleNewName = (e) => {
        setNewName(e.target.value);
    }

    const [newNumber, setNewNumber] = useState('')
    const handleNewNumber = (e) => {
        setNewNumber(e.target.value);
    }

    const storeContact = (e) => {
        e.preventDefault();
        let err = 0;
        persons.map((item, index) => {
            if (item.name.toUpperCase() === newName.toUpperCase()) {
                err = 1;
            }
        })

        if (err === 0) {
            const contactObj = {
                name: newName,
                number: newNumber,
                id: String(persons.length + 1)
            }

            setPersons(persons.concat(contactObj));
            setNewName('');
            setNewNumber('')
        } else {
            alert(newName + ' is already added to phonebook.')
        }
    }


    const [show, setShow] = useState('');

    const contactList = (show !== '') ? (persons.filter(
        (per) => {
            if (per.name.toLowerCase().includes(show.toLowerCase()) || per.number.includes(show)) {
                return per;
            }
        })) : persons;

    return (
        <div>
            <h2>Phonebook</h2>
            {/*<Filter />*/}
            <div>
                search: <input onChange={e => setShow(e.target.value)}/>
            </div>

            <h3>Add a new</h3>
            {/*<PersonForm/>*/}
            <form onSubmit={storeContact}>
                <div>
                    name: <input value={newName} onChange={handleNewName}/>
                    number: <input value={newNumber} onChange={handleNewNumber}/>
                    <button type="submit">add</button>
                </div>
            </form>

            <h3>Numbers</h3>
            <Person contact={contactList} />

        </div>
    )

}

export default App
