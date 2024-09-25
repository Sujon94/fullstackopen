const Person = ({contact}) => {
    return (
        <div>
            <ul>
                {contact.map(person =>
                    <li key={person.id}>{person.name + ' ' + person.number}</li>
                )}
            </ul>
        </div>
    )
}

export default Person;