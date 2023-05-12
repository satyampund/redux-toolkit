import classes from './Header.module.css';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth';
import { Link } from 'react-router-dom';

const Header = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
            <li>
              <Link to="/StaticTable">Static Table</Link>
            </li>
            <li>
              <Link to="/dynamicTable">Dynamic Table</Link>
            </li>
            <li>
              <Link to="/crudTable">CRUD Table</Link>
            </li>
            <li>
              <Link to="/">
                <button onClick={logoutHandler}>Logout</button>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
