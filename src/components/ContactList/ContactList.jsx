import PropTypes from 'prop-types';
import Contact from "components/Contact/Contact";
export default function ContactList(props) {
   const { contacts, onDeleteContacts} = props;
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
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    onDeleteContacts:PropTypes.func.isRequired
}