import React from "react";
import Form from "./Form/Form";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

export default class PhoneBook extends React.Component {
     state = {
       contacts: [],
       filter: ''
  }
  
  handleChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }
  
 FormHandlerSubmit = (data) => {
    this.setState(prevState =>
    ({ contacts: [...prevState.contacts, data]}))
  }

  handleDelete = (e) => {
    const index = this.state.contacts.findIndex(contact => contact.name === e.currentTarget.name)
    this.setState(prevState => {
    // console.log(prevState);
      prevState.contacts.splice(index, 1)
    }
    ); 
    
}
  
  render(){
    return (<div>
      <h1> PhoneBook</h1>
      <Form onSubmit={this.FormHandlerSubmit}
            contacts={ this.state.contacts} />

      <h2>Contacts</h2>
      
      <label htmlFor="">Find contact by name
        <input type="text"
          name="filter"
          value={this.state.filter}
          onChange={this.handleChange}
          />
      </label>
        
      
      {(this.state.filter === '')
        ? <ContactList contacts={this.state.contacts} filter={this.state.filter} handleDelete={this.handleDelete}  />
        : <Filter contacts={this.state.contacts} filter={this.state.filter} />}
      
        
      
    
     
    </div>)
            
  }  
   
    
} 



