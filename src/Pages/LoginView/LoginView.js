// import { func } from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'Redux/auth/authOperations';
import scss from './LoginView.module.scss';



export function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  function handleChange({ target: { name, value } }) {
    switch (name) {
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
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  }

  return (
    <div className={scss.formRegister}>
      <form className={scss.form} onSubmit={handleSubmit}>
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
        <button className={scss.btn} type="submit">Log in</button>
      </form>
    </div>
  );
}
