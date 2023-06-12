import React from "react";
// import PropTypes from 'prop-types';
import { Contact, ContactsLi, BTN } from './ContactList.styled';
import { deleteContact } from "redux/contactSlice";
import { useDispatch, useSelector } from "react-redux";
import { getFilterContacts } from "redux/selector";



export function ListContact() {
    const dispatch = useDispatch();
    const contacts = useSelector(getFilterContacts);
    
   

    return(
        <Contact>
            {contacts.map((e) =>
                <ContactsLi key={e.id}>
                    <span>{e.name} {e.number}</span>
                    <BTN onClick={()=>dispatch(deleteContact(e.id))}>Delete</BTN>
                </ContactsLi>)}
        </Contact>

        
    );
    
}

// ListContact.propTypes = {
//     contacts: PropTypes.arrayOf(Object).isRequired,
//     onContactDelete: PropTypes.func.isRequired,
// }