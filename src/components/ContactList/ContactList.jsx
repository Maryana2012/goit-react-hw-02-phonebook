import PropTypes from 'prop-types';
import Contact from "components/Contact/Contact";
export default function ContactList({contacts,onDeleteContacts}) {
   const { id, name, number} = contacts;
    return (<ul>
        {contacts.map(contact =>
            <Contact key={contact.id}
                id={contact.id}
                name={contact.name}
                number={contact.number}
                onDeleteContacts={onDeleteContacts} />)}
           </ul>)
}
ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
    name: PropTypes.string,
    number: PropTypes.string,
    id: PropTypes.string,
    onDeleteContacts:PropTypes.func.isRequired
}