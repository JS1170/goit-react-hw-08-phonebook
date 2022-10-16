import PropTypes from 'prop-types';
import scss from './contactItem.module.scss';

export function ContactItem({ id, name, phone, deleteBtn }) {
  return (
    <li className={scss.item}>
      {name}: {phone}
      <button
        className={scss.btnItem}
        type="button"
        onClick={() => {
          deleteBtn(id);
        }}
      >
        Delete
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  deleteBtn: PropTypes.func.isRequired,
};
