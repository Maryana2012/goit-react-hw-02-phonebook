import Contact from "components/Contact/Contact";

export default function ContactList(props) {
   
    const { contacts, handleDelete } = props;

    return (<ul>
        {contacts.map(contact =>
            <Contact key={contact.id}
                name={contact.name}
                number={contact.number}
                handleDelete={handleDelete} />)}
           </ul>)
}