import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'Redux/contacts/contactsSlice';
import {
  addContact,
  deleteContact,
  fetchContacts,
} from '../../Redux/contacts/contactsOperations';
import { Filter } from '../../components/Filter/Filter';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList';
import { getIsLoggedIn } from '../../Redux/auth/authSelectors';
import {
  getContactsItems,
  getError,
  getFilter,
} from 'Redux/contacts/contactsSelector';
import { useNavigate } from 'react-router-dom';
import scss from './ContactsView.module.scss';

export function ContactsView() {
  // const state = useSelector(state => state);
  const items = useSelector(getContactsItems);
  const filterState = useSelector(getFilter);
  const errorState = useSelector(getError);
  const login = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (errorState) {
    alert('Error)');
    // вставить натификашку
  }

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch, login, navigate]);

  const submitFormValue = newContactObject => {
    if (checkName(newContactObject.name)) {
      alert(`${newContactObject.name} is already in contacts.`);
      return;
    }
    dispatch(addContact(newContactObject));
  };

  const checkName = name => {
    return items.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  const filterContacts = () => {
    return items.filter(contact => {
      return contact.name.toLowerCase().includes(filterState.toLowerCase());
    });
  };

  return (
    <div className={scss.contactsView}>
      <div>
        <h1>Add a new contact</h1>
        <ContactForm submitForm={submitFormValue} />
      </div>
      <div className={scss.contactsViewAll}>
        <div>
          <h2>All your contacts</h2>
          <Filter
            onChangeFilter={event => dispatch(changeFilter(event.target.value))}
          />
        </div>
        <div>
          <ContactList
            contacts={filterContacts()}
            deleteBtn={id => dispatch(deleteContact(id))}
          />
        </div>
      </div>
    </div>
  );
}
