import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../Redux/auth/authOperations';

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
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            onChange={handleChange}
            type="text"
            name="name"
            value={name}
          ></input>
        </label>
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
        <button type="submit">Registration</button>
      </form>
    </div>
  );
}
