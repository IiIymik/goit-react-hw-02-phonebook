import React, { Component } from 'react'
import {Container, TitleMain, Form, Input, TitleBook, TitleInput, Button, List, Item} from './App.styled.js'
import nanoid from '../utils/nanoid.js';
export class App extends Component {
  state = {
  contacts: [],
  name: ''
  }
  handleButton = (e) => {
    const { name } = this.state;
    const obj = {
      name: name,
      id: nanoid(),
    };
    this.setState(prev =>({ contacts: {...obj} }))

  }

  handleChange = (e) => {
    // console.log(e.currentTarget.value)
    this.setState({name: e.currentTarget.value,})
  }
  render() {
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
        </Form>
        <Button onClick={this.handleButton}>Add contact</Button>
        <TitleBook>Contacts</TitleBook>
        <List>
          <Item/>
        </List>
      </Container>
    )
  }
}

export default App

