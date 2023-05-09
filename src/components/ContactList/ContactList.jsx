import PropTypes from 'prop-types';
import Contact from "components/Contact/Contact";
export default function ContactList({contacts,onDeleteContacts}) {
   const { id, name, number} = contacts;
    return (<ul>
        {contacts.map(contact =>
            <Contact key={id}
                id={id}
                name={name}
                number={number}
                onDeleteContacts={onDeleteContacts} />)}
           </ul>)
}
ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
    name: PropTypes.string,
    number: PropTypes.number,
    id: PropTypes.number,
    onDeleteContacts:PropTypes.func.isRequired
}