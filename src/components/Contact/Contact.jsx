export default function Contact(props){
    const { name, number} = props;
//    console.log(props);
    return (<li> {name}: {number} <button name={name } type='button' onClick={props.handleDelete}>delete</button></li>)
}
