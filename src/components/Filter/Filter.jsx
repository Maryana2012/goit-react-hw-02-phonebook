import Contact from "components/Contact/Contact";

export default function Filter(props) {
    const { contacts, filter } = props; 
    return (<ul> 
        {contacts.filter(contact => (contact.name.toLowerCase())
            .includes(filter.toLowerCase()))
            .map(contact =>
            <Contact key={contact.id}
                     name={contact.name}
                     number={contact.number}/>)}
           </ul>)
}