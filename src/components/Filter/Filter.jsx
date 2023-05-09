import PropTypes from 'prop-types';
export default function Filter(props){
    const { value, onChange } = props; 
    return(
         <label htmlFor="">Find contact by name
        <input type="text"
          value={value}
          onChange={onChange}
          />
      </label>
    )
    

}
Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}