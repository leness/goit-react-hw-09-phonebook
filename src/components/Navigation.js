import { NavLink } from 'react-router-dom';
import { authSelectors } from '../redux/auth'
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
  

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};


export default function Navigation() {

  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated)
  return (
    <nav>

      <NavLink
      to="/"
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      Головна
      </NavLink>
    
    {isLoggedIn && (
      <NavLink
      to="/contacts"
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      Контакти
      </NavLink>
    )}
  
  </nav>
  )
}

