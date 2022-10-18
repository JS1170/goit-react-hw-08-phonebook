import { UserMenu } from 'components/UserMenu/UserMenu';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { getIsLoggedIn } from '../../Redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import scss from '../Layout/Layout.module.scss';

export function Layout() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <div className={scss.layoutContainer}>
      <header className={scss.headerLayout}>
        <nav className={scss.navLayout}>
          <NavLink className={scss.navlink} end to="/">
            Phone<span className={scss.navBook}>book</span>
          </NavLink>
          {isLoggedIn && <NavLink className={scss.navlink} to="/contacts">Contacts</NavLink>}
          {isLoggedIn ? (
            <UserMenu />
          ) : (
              <div className={scss.register}>
              <NavLink className={scss.navlink}  to="/login">Log in</NavLink>
              <NavLink className={scss.navlink}  to="/register">Register</NavLink>
            </div>
          )}
        </nav>
      </header>
      <main>
        <Suspense fallback={'Loading...'}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}
