import { getIsLoggedIn } from '../../Redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


export function PublicRoute({ children, restricted = false, redirect = '/' }) {
    const isLoggedIn = useSelector(getIsLoggedIn);
    const isNavigate = isLoggedIn && restricted;
    return <>{isNavigate ? <Navigate to={redirect} /> : children}</>;

}