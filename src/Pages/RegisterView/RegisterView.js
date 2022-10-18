import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../Redux/auth/authOperations';
import scss from './RegisterView.module.scss';

export function RegisterView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  function handleChange({ target: { name, value } }) {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  }

  return (
    <div className={scss.formRegister}>
      <form className={scss.form} onSubmit={handleSubmit}>
        <label className={scss.formLabel}>
          <span>Name</span>
          <input
            className={scss.formInput}
            onChange={handleChange}
            type="text"
            name="name"
            value={name}
          ></input>
        </label>
        <label className={scss.formLabel}>
          <span> Mail</span>
          <input
            className={scss.formInput}
            onChange={handleChange}
            type="email"
            name="email"
            value={email}
          ></input>
        </label>
        <label className={scss.formLabel}>
          <span>Password</span>
          <input
            className={scss.formInput}
            onChange={handleChange}
            type="text"
            name="password"
            value={password}
          ></input>
        </label>
        <button className={scss.btn} type="submit">
          Registration
        </button>
      </form>
    </div>
  );
}
