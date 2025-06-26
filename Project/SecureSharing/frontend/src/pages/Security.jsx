const Security = () => {
  return (
    <div className="security-page">
      <div className="security-container">
        <div className="security-header">
          <h1>Security & Privacy</h1>
          <p>Learn how we protect your files and keep your data secure.</p>
        </div>

        <div className="security-content">
          <section className="security-section">
            <h2>🔒 Data Encryption</h2>
            <div className="security-details">
              <h3>Encryption in Transit</h3>
              <p>All data transmitted between your device and our servers is encrypted using TLS 1.3, the latest and most secure encryption protocol. This ensures that your files and personal information cannot be intercepted during upload or download.</p>
              
              <h3>Encryption at Rest</h3>
              <p>Your files are encrypted when stored on our servers using AES-256 encryption, the same standard used by banks and government agencies. Even if someone gained physical access to our servers, your files would remain protected.</p>
            </div>
          </section>

          <section className="security-section">
            <h2>🔐 Authentication & Access Control</h2>
            <div className="security-details">
              <h3>Secure Authentication</h3>
              <p>We use JSON Web Tokens (JWT) for secure user authentication. Your password is hashed using bcrypt with salt rounds, making it virtually impossible to reverse-engineer even if our database were compromised.</p>
              
              <h3>Unique Share Links</h3>
              <p>Every file gets a unique, randomly generated sharing link that's virtually impossible to guess. These links use UUID4 format with 122 bits of entropy, providing excellent security against brute-force attacks.</p>
              
              <h3>Access Logging</h3>
              <p>We log all file access attempts for security monitoring. This helps us detect and prevent unauthorized access attempts while maintaining your privacy.</p>
            </div>
          </section>

          <section className="security-section">
            <h2>🛡️ File Protection Features</h2>
            <div className="security-details">
              <h3>Password Protection</h3>
              <p>Add an extra layer of security by setting passwords for your files. Passwords are hashed and stored securely, and only users with the correct password can access your content.</p>
              
              <h3>Expiration Dates</h3>
              <p>Set automatic expiration dates for your files. Once expired, files are permanently deleted from our servers and cannot be recovered, ensuring your content doesn't remain accessible indefinitely.</p>
              
              <h3>View Limits</h3>
              <p>Control how many times your files can be viewed. This is perfect for one-time sharing or limiting distribution to a specific number of people.</p>
            </div>
          </section>

          <section className="security-section">
            <h2>🏗️ Infrastructure Security</h2>
            <div className="security-details">
              <h3>Secure Hosting</h3>
              <p>Our servers are hosted in secure data centers with 24/7 monitoring, redundant power systems, and strict physical access controls.</p>
              
              <h3>Regular Updates</h3>
              <p>We keep all our systems updated with the latest security patches and regularly audit our code for vulnerabilities.</p>
              
              <h3>Backup & Recovery</h3>
              <p>We maintain secure, encrypted backups to ensure data availability while protecting against data loss.</p>
            </div>
          </section>

          <section className="security-section">
            <h2>🔍 Privacy Protection</h2>
            <div className="security-details">
              <h3>Minimal Data Collection</h3>
              <p>We only collect the minimum data necessary to provide our service. We don't track your browsing habits or sell your data to third parties.</p>
              
              <h3>Email Privacy</h3>
              <p>Your email address is displayed in abbreviated form (first 2 characters only) to protect your privacy while still allowing account identification.</p>
              
              <h3>No Content Scanning</h3>
              <p>We don't scan or analyze your uploaded files for content. Your files remain private and are only accessible through the sharing links you create.</p>
            </div>
          </section>

          <section className="security-section">
            <h2>⚠️ Security Best Practices</h2>
            <div className="security-tips">
              <h3>For Users</h3>
              <ul>
                <li>Use strong, unique passwords for your account</li>
                <li>Don't share your account credentials with others</li>
                <li>Only share file links with trusted recipients</li>
                <li>Use password protection for sensitive files</li>
                <li>Set appropriate expiration dates for temporary sharing</li>
                <li>Regularly review and delete old files you no longer need</li>
              </ul>
              
              <h3>What We Do</h3>
              <ul>
                <li>Regular security audits and penetration testing</li>
                <li>Continuous monitoring for suspicious activity</li>
                <li>Immediate response to security incidents</li>
                <li>Regular staff security training</li>
                <li>Compliance with industry security standards</li>
              </ul>
            </div>
          </section>

          <section className="security-section">
            <h2>🚨 Incident Response</h2>
            <div className="security-details">
              <h3>Security Monitoring</h3>
              <p>We continuously monitor our systems for security threats and unusual activity. Our automated systems can detect and respond to many threats in real-time.</p>
              
              <h3>Incident Response Plan</h3>
              <p>In the unlikely event of a security incident, we have a comprehensive response plan that includes immediate containment, investigation, and user notification if necessary.</p>
              
              <h3>Transparency</h3>
              <p>If a security incident affects user data, we commit to transparent communication about what happened, what data was affected, and what steps we're taking to prevent future incidents.</p>
            </div>
          </section>

          <section className="security-section">
            <h2>📋 Compliance & Standards</h2>
            <div className="security-details">
              <h3>Industry Standards</h3>
              <p>We follow industry best practices and standards including OWASP security guidelines and secure coding practices.</p>
              
              <h3>Regular Audits</h3>
              <p>We conduct regular security audits and vulnerability assessments to ensure our security measures remain effective.</p>
              
              <h3>Third-Party Security</h3>
              <p>Any third-party services we use are carefully vetted for security and must meet our strict security requirements.</p>
            </div>
          </section>

          <section className="security-section">
            <h2>📞 Report Security Issues</h2>
            <div className="security-details">
              <p>If you discover a security vulnerability or have security concerns, please report them immediately:</p>
              <ul>
                <li>Email: security@securesharing.com</li>
                <li>For critical issues, use our <a href="/contact">contact form</a> marked as "Security Concern"</li>
                <li>We take all security reports seriously and will respond promptly</li>
                <li>We appreciate responsible disclosure and will work with security researchers</li>
              </ul>
            </div>
          </section>
        </div>

        <div className="security-footer">
          <h2>Questions about Security?</h2>
          <p>If you have questions about our security practices or need more information, please don't hesitate to contact us.</p>
          <a href="/contact" className="btn btn-primary">Contact Security Team</a>
        </div>
      </div>
    </div>
  );
};

export default Security;
