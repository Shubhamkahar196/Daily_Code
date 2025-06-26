import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="home">
      <div className="hero">
        <h1>SecureSharing</h1>
        <p>Share your images and videos securely with password protection and expiration dates</p>
        
        <div className="hero-actions">
          {isAuthenticated ? (
            <Link to="/dashboard" className="btn btn-primary">
              Go to Dashboard
            </Link>
          ) : (
            <>
              <Link to="/register" className="btn btn-primary">
                Get Started
              </Link>
              <Link to="/login" className="btn btn-secondary">
                Login
              </Link>
            </>
          )}
        </div>
      </div>

      <div className="features">
        <h2>Features</h2>
        <div className="features-grid">
          <div className="feature">
            <h3>🔒 Password Protection</h3>
            <p>Protect your files with passwords for extra security</p>
          </div>
          <div className="feature">
            <h3>⏰ Expiration Dates</h3>
            <p>Set expiration dates for automatic file removal</p>
          </div>
          <div className="feature">
            <h3>👁️ View Limits</h3>
            <p>Control how many times your files can be viewed</p>
          </div>
          <div className="feature">
            <h3>🔗 Secure Links</h3>
            <p>Generate unique, secure links for sharing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
