import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from 'Redux/auth/authSelectors';
import { logOut } from '../../Redux/auth/authOperations';

export function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  return (
    <div>
      <p>Hello, {name}</p>
      <button type='button' onClick={()=>dispatch(logOut())}>Logout</button>
    </div>
  );
}
