export default function Contact(props){
    const { name, number} = props;
    return (<li> {name}: {number} <button name={name } type='button' onClick={props.handleDelete}>delete</button></li>)
}
