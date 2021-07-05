import React, { Component } from 'react'
import {Container, TitleMain, Form, Input, TitleBook, TitleInput, Button,} from './App.styled.js'
import nanoid from '../../utils/nanoid.js';
import ContactsList from '../ContactsList/ContactsList';
export class App extends Component {
  state = {
  contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  name: '',
  number: ''
  }
  
  handleButton = (e) => {
    e.preventDefault()
    const { name,number } = this.state;
    const obj = {
      name,
      number,
      id: nanoid(),
    };
    this.setState({ contacts: [...this.state.contacts, obj] });
  }

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({[name]: value,})
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

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <Container>
        <TitleMain>Phonebook</TitleMain>
        <Form>
         <TitleInput>Name</TitleInput> 
          <Input
  type="text"
  name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            onChange={this.handleChange}
  title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required       
          />
          <TitleInput>Number</TitleInput>
          <Input 
  type="tel"
  name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            onChange={this.handleChange}
  title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
  required
          />
        <Button onClick={this.handleButton}>Add contact</Button>
        </Form>
        <TitleBook>Contacts</TitleBook>
        <Input type="text" value={filter} onChange={this.findContacts} />
        <ContactsList contacts={visibleContacts}/>
      </Container>
    )
  }
}

export default App

