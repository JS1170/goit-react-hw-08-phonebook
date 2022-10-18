import PropTypes from 'prop-types';
import { ContactItem } from '../ContactItem/ContactItem';
import scss from './ContactList.module.scss';

export function ContactList({ contacts, deleteBtn }) {
  return (
    <ul className={scss.contactItem}>
      {contacts.map(({ id, name, number}) => {
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            deleteBtn={deleteBtn}
          ></ContactItem>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteBtn: PropTypes.func.isRequired,
};
