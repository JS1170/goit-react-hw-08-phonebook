import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'Redux/contactsSlice';
import {
  addContact,
  deleteContact,
  fetchContacts,
} from 'Redux/contactsOperations';
import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export default function App() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const submitFormValue = newContactObject => {
    if (checkName(newContactObject.name)) {
      alert(`${newContactObject.name} is already in contacts.`);
      return;
    }
    dispatch(addContact(newContactObject));
  };

  const checkName = name => {
    return state.contacts.items.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  const filterContacts = () => {
    return state.contacts.items.filter(contact => {
      return contact.name.toLowerCase().includes(state.filter.toLowerCase());
    });
  };

  return (
    <div style={{ marginLeft: '40px' }}>
      <h1>Phonebook</h1>
      <ContactForm submitForm={submitFormValue} />

      <h2>Contacts</h2>
      <Filter
        onChangeFilter={event => dispatch(changeFilter(event.target.value))}
      />
      <ContactList
        contacts={filterContacts()}
        deleteBtn={id => dispatch(deleteContact(id))}
      />
    </div>
  );
}
