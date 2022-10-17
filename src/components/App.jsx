import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { ContactsView } from '../Pages/ContactsView/ContactsView';
import { RegisterView } from '../Pages/RegisterView/RegisterView';
import { LoginView } from '../Pages/LoginView/LoginView';
import { HomePage } from '../Pages/HomePage/HomePage';
import { useDispatch, useSelector } from 'react-redux';
import { getIsFetchingCurrentUser } from 'Redux/auth/authSelectors';
import { useEffect } from 'react';
import { fetchCurrentUser } from 'Redux/auth/authOperations';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';

export function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrentUser);
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    isFetchingCurrentUser && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PublicRoute>
                <HomePage />
              </PublicRoute>
            }
          ></Route>

          <Route
            path="contacts"
            element={
              <PrivateRoute redirect="/login">
                <ContactsView />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="register"
            element={
              <PublicRoute restricted redirect="/contacts">
                <RegisterView />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="login"
            element={
              <PublicRoute restricted redirect="/contacts">
                <LoginView />
              </PublicRoute>
            }
          ></Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Route>
      </Routes>
    )
  );
}
