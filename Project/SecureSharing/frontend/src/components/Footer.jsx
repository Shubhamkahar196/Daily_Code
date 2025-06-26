const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>SecureSharing</h3>
            <p>Share your files securely with password protection, expiration dates, and view limits.</p>

          </div>

          <div className="footer-section">
            <h4>Features</h4>
            <ul>
              <li>Password Protection</li>
              <li>Expiration Dates</li>
              <li>View Limits</li>
              <li>Secure Links</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li><a href="/help">Help Center</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/security">Security</a></li>
              <li><a href="/api-docs">API Documentation</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} SecureSharing. All rights reserved.</p>
            <p>Built with ❤️ for secure file sharing</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
