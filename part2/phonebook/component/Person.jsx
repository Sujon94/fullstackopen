const Person = ({contact, removePerson}) => {
    return (
        <li>{contact.name + ' ' + contact.number}
            <button onClick={removePerson}>delete</button>
        </li>
    )
}

export default Person;