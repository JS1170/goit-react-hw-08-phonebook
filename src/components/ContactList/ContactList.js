import PropTypes from 'prop-types';
import { ContactItem } from '../ContactItem/ContactItem';

export function ContactList({ contacts, deleteBtn }) {
  return (
    <ul>
      {contacts.map(({ id, name, phone}) => {
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            phone={phone}
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
      phone: PropTypes.string.isRequired,
    })
  ),
  deleteBtn: PropTypes.func.isRequired,
};
