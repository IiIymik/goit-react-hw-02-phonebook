import React, { Component } from 'react'
import Form from '../Form/Form';
import {Container, TitleMain, TitleBook,} from './App.styled.js'
import ContactsList from '../ContactsList/ContactsList';
import Filter from '../Filter/Filter';


export class App extends Component {
  state = {
  contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  }

  deleteContact = contactId => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== contactId),
    }))
  }

  findContacts = (e) => {
    const { value } = e.currentTarget
    this.setState({filter: value,})
  }

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>contact.name.toLowerCase().includes(normalizedFilter))
  }
  
  formSubmit = (data) => {
   this.setState({ contacts: [...this.state.contacts, data] });
  }

  render() {
    const {filter, contacts } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <Container>
        <TitleMain>Phonebook</TitleMain>
        <Form onSubmit={this.formSubmit} data={contacts}/>
        <TitleBook>Contacts</TitleBook>
        <Filter value={filter} onChange={this.findContacts} />
        <ContactsList contacts={visibleContacts} onDeleteContact={this.deleteContact}/>
      </Container>
    )
  }
}

export default App

