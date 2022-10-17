import { UserMenu } from 'components/UserMenu/UserMenu';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { getIsLoggedIn } from '../../Redux/auth/authSelectors';
import { useSelector } from 'react-redux';

export function Layout() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>
      <header>
        <nav>
          <NavLink end to="/">
            Home
          </NavLink>
          {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
          {isLoggedIn ? (
            <UserMenu />
          ) : (
            <>
              <NavLink to="/login">Log in</NavLink>
              <NavLink to="/register">Register</NavLink>
            </>
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
