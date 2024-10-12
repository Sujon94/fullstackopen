import {useEffect, useState} from 'react'
import axios from "axios";
import Person from "../component/Person";

const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [show, setShow] = useState('');
    const baseUrl = 'http://localhost:3002/persons';

    useEffect(() => {
        axios.get(baseUrl)
            .then(res => {
                setPersons(res.data)
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
                axios.post(baseUrl, contactObj)
                    .then(res => {
                        setPersons(persons.concat(res.data));
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
            <Person contact={contactList}/>

        </div>
    )

}

export default App
