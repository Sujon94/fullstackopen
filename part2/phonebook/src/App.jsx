import {useEffect, useState} from 'react'
import Person from "../component/Person";
import NoteService from "./services/notebook";

const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [show, setShow] = useState('');
    /**
     * Effect Hook
     * */
    useEffect(() => {
        NoteService.getAll()
            .then(res => {
                setPersons(res)
            })
    }, []);
    /*
    * Functions:
    */
    const handleNewName = (e) => {
        setNewName(e.target.value);
    }

    const handleNewNumber = (e) => {
        setNewNumber(e.target.value);
    }
    /**
     * Let's talk with server
     * */
        // Action: Store
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
                    number: newNumber
                };
                NoteService.create(contactObj)
                    .then(res => {
                        setPersons(persons.concat(res));
                        setNewName('');
                        setNewNumber('');
                    });

            } else {
                alert(newName + ' is already added to phonebook.')
            }
        }

    // Action: Get
    const contactList = (show !== '') ? (persons.filter(
        (per) => {
            if (per.name.toLowerCase().includes(show.toLowerCase()) || per.number.includes(show)) {
                return per;
            }
        })) : persons;
    // Action: Delete
    const removeAPerson = (id) => {
        NoteService.deleteItem(id).then(res => {
            setPersons(res);
        });
    }
    /**
     * Visualization
     * */
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
            <div>
                <ul>
                    {contactList.map(person =>
                        <Person key={person.id} contact={person} removePerson={() => removeAPerson(person.id)}/>
                    )}
                </ul>
            </div>
        </div>
    )

}

export default App
