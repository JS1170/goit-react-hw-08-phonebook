import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from 'Redux/auth/authSelectors';
import { logOut } from '../../Redux/auth/authOperations';
import scss from '../UserMenu/UserMenu.module.scss';

export function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  return (
    <div>
      <p>Hello, {name}</p>
      <button className={scss.logoutBtn} type='button' onClick={()=>dispatch(logOut())}>Log out</button>
    </div>
  );
}
