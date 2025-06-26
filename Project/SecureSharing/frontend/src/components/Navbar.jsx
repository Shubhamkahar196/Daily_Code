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
    <nav className="navbar sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-white/20 shadow-lg">
      <div className="nav-container max-w-6xl mx-auto px-6 flex justify-between items-center py-4">
        <Link to="/" className="nav-logo text-2xl font-bold bg-gradient-to-r from-primary-500 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform">
          SecureSharing
        </Link>

        <div className="nav-links flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="theme-toggle p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>

          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="nav-link px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-primary-500 hover:to-purple-600 hover:text-white transition-all duration-300 hover:-translate-y-0.5">
                Dashboard
              </Link>
              <span className="nav-user px-3 py-1 bg-primary-50 border border-primary-200 rounded-full text-sm text-primary-700" title={user?.email}>
                {getAbbreviatedEmail(user?.email)}
              </span>
              <button onClick={logout} className="nav-button bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 rounded-lg hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-primary-500 hover:to-purple-600 hover:text-white transition-all duration-300 hover:-translate-y-0.5">
                Login
              </Link>
              <Link to="/register" className="nav-button bg-gradient-to-r from-primary-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 font-medium">
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
