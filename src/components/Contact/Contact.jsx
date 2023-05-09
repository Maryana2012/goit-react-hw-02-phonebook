import PropTypes from 'prop-types';
export default function Contact(props) {
    const { id, name, number, onDeleteContacts} = props;
    return (<li> {name}: {number}
        <button type='button' onClick={()=>{onDeleteContacts(id)}}>delete</button>
    </li>)
}
Contact.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    onDeleteContacts: PropTypes.func.isRequired
}