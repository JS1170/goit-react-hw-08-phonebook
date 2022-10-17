// import { func } from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'Redux/auth/authOperations';


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
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Mail
          <input
            onChange={handleChange}
            type="email"
            name="email"
            value={email}
          ></input>
        </label>
        <label>
          Password
          <input
            onChange={handleChange}
            type="text"
            name="password"
            value={password}
          ></input>
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}
