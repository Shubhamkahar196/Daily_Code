import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';

const Home = () => {
  const { isAuthenticated } = useAuth();
  const [testResult, setTestResult] = useState('');

  const testBackend = async () => {
    try {
      const response = await fetch('http://localhost:8000');
      const data = await response.json();
      setTestResult(`✅ Backend connected: ${data.message}`);
    } catch (error) {
      setTestResult(`❌ Backend error: ${error.message}`);
    }
  };

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
          <button onClick={testBackend} className="btn btn-secondary">
            Test Backend
          </button>
          <Link to="/debug" className="btn btn-secondary">
            Debug Info
          </Link>
        </div>

        {testResult && (
          <div style={{ marginTop: '1rem', padding: '1rem', background: '#f0f0f0', borderRadius: '4px' }}>
            {testResult}
          </div>
        )}
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
