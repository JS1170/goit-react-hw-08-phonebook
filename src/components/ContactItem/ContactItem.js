import PropTypes from 'prop-types';
import scss from './contactItem.module.scss';
// import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getIsLoading } from 'Redux/contacts/contactsSelector';

export function ContactItem({ id, name, number, deleteBtn }) {
  // const [localLoading, setLocalLoading] = useState(false);
  // const isLoading = useSelector(getIsLoading);

  return (
    <li className={scss.item}>
      {name}: {number}
      <button
        className={scss.btnItem}
        type="button"
        onClick={() => {
          deleteBtn(id);
          // setLocalLoading(true);
        }}
      >
        Delete 
        {}
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteBtn: PropTypes.func.isRequired,
};
