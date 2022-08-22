import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import PrivateRoute from './Route/PrivatRoute';
import PublicRoute from './Route/PublicRoute';
import { getStateToken } from 'redux/user/userSelector';
import { getUserThunk } from 'redux/user/userOperations';

const ContactsPage = lazy(() =>
  import('../pages/ContactsPage' /* webpackChunkName: 'ContactsPage' */)
);
const LoginPage = lazy(() => import('../pages/LoginPage' /* webpackChunkName: 'LoginPage' */));
const RegisterPage = lazy(() =>
  import('../pages/RegisterPage' /* webpackChunkName: 'RegisterPage' */)
);

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(getStateToken);

  useEffect(() => {
    if (token) {
      dispatch(getUserThunk());
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          path="register"
          element={<PublicRoute component={RegisterPage} nav="/contacts" restricted />}
        />
        <Route
          path="login"
          element={<PublicRoute component={LoginPage} nav="/contacts" restricted />}
        />
        <Route path="contacts" element={<PrivateRoute component={ContactsPage} nav="/login" />} />
      </Route>
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};