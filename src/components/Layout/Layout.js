import { UserMenu } from 'components/UserMenu/UserMenu';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { getIsLoggedIn } from '../../Redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import scss from '../Layout/Layout.module.scss';

export function Layout() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>
      <header className={scss.headerLayout}>
        <nav>
          <NavLink class={scss.navlink} end to="/">
            Phonebook
          </NavLink>
          {isLoggedIn && <NavLink class={scss.navlink} to="/contacts">Contacts</NavLink>}
          {isLoggedIn ? (
            <UserMenu />
          ) : (
              <div className={scss.register}>
              <NavLink to="/login">Log in</NavLink>
              <NavLink to="/register">Register</NavLink>
            </div>
          )}
        </nav>
      </header>
      <main>
        <Suspense fallback={'Loading...'}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
