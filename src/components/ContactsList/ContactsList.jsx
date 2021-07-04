import React from 'react';
import { List, Item} from './ContactsList.styled.js'

const ContactsList = ({contacts}) => {
    // console.log(contacts)
    return (
        <List>
            {contacts.map(({ id, name }) => (
               <Item key={id} >{name}</Item>
            ))}
        </List>
    )
}

export default ContactsList
