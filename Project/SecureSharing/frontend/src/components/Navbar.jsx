import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const { isDarkMode, toggleTheme } = useTheme();

  const getAbbreviatedEmail = (email) => {
    if (!email) return '';
    const [username, domain] = email.split('@');
    if (username.length <= 2) return email;
    return `${username.substring(0, 2)}***@${domain}`;
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          SecureSharing
        </Link>
        
        <div className="nav-links">
          <button onClick={toggleTheme} className="theme-toggle" title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
            {isDarkMode ? '☀️' : '🌙'}
          </button>

          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="nav-link">
                Dashboard
              </Link>
              <span className="nav-user" title={user?.email}>
                {getAbbreviatedEmail(user?.email)}
              </span>
              <button onClick={logout} className="nav-button logout">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link">
                Login
              </Link>
              <Link to="/register" className="nav-button register">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
