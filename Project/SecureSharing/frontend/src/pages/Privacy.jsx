const Privacy = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="legal-content">
          <section>
            <h2>1. Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>When you create an account, we collect:</p>
            <ul>
              <li>Email address (for account creation and communication)</li>
              <li>Password (encrypted and stored securely)</li>
              <li>Account creation date and last login time</li>
            </ul>

            <h3>File Information</h3>
            <p>When you upload files, we collect:</p>
            <ul>
              <li>File content (images and videos you upload)</li>
              <li>File metadata (name, size, type, upload date)</li>
              <li>Security settings (password protection, expiration, view limits)</li>
              <li>Access logs (when files are viewed, IP addresses for security)</li>
            </ul>

            <h3>Technical Information</h3>
            <p>We automatically collect:</p>
            <ul>
              <li>IP address and browser information</li>
              <li>Device type and operating system</li>
              <li>Usage patterns and feature interactions</li>
              <li>Error logs and performance data</li>
            </ul>
          </section>

          <section>
            <h2>2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Provide and maintain our file sharing service</li>
              <li>Authenticate your account and secure your files</li>
              <li>Generate and manage secure sharing links</li>
              <li>Enforce security settings (passwords, expiration, view limits)</li>
              <li>Communicate important service updates</li>
              <li>Improve our service and fix technical issues</li>
              <li>Prevent abuse and ensure platform security</li>
            </ul>
          </section>

          <section>
            <h2>3. Information Sharing</h2>
            <p>We do not sell, trade, or rent your personal information. We may share information only in these limited circumstances:</p>
            <ul>
              <li><strong>With your consent:</strong> When you explicitly authorize sharing</li>
              <li><strong>Legal requirements:</strong> When required by law or legal process</li>
              <li><strong>Security purposes:</strong> To prevent fraud, abuse, or security threats</li>
              <li><strong>Service providers:</strong> With trusted partners who help operate our service (under strict confidentiality agreements)</li>
            </ul>
          </section>

          <section>
            <h2>4. Data Security</h2>
            <p>We implement industry-standard security measures:</p>
            <ul>
              <li>Encryption of data in transit and at rest</li>
              <li>Secure password hashing using bcrypt</li>
              <li>JWT tokens for secure authentication</li>
              <li>Regular security audits and updates</li>
              <li>Access controls and monitoring</li>
              <li>Secure file storage with access logging</li>
            </ul>
          </section>

          <section>
            <h2>5. Data Retention</h2>
            <p>We retain your data as follows:</p>
            <ul>
              <li><strong>Account data:</strong> Until you delete your account</li>
              <li><strong>Files:</strong> Until you delete them or they expire</li>
              <li><strong>Access logs:</strong> 90 days for security purposes</li>
              <li><strong>Expired files:</strong> Permanently deleted within 24 hours of expiration</li>
            </ul>
          </section>

          <section>
            <h2>6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal data and download your files</li>
              <li>Correct inaccurate information</li>
              <li>Delete your account and all associated data</li>
              <li>Export your data in a portable format</li>
              <li>Opt out of non-essential communications</li>
              <li>Request information about data processing</li>
            </ul>
          </section>

          <section>
            <h2>7. Cookies and Tracking</h2>
            <p>We use minimal tracking:</p>
            <ul>
              <li><strong>Essential cookies:</strong> For authentication and security</li>
              <li><strong>Preference cookies:</strong> To remember your theme choice</li>
              <li><strong>No advertising cookies:</strong> We don't track for advertising</li>
              <li><strong>No third-party trackers:</strong> We don't share data with advertisers</li>
            </ul>
          </section>

          <section>
            <h2>8. International Users</h2>
            <p>If you're outside the United States:</p>
            <ul>
              <li>Your data may be transferred to and processed in the US</li>
              <li>We comply with applicable international privacy laws</li>
              <li>You have the same privacy rights regardless of location</li>
            </ul>
          </section>

          <section>
            <h2>9. Children's Privacy</h2>
            <p>Our service is not intended for children under 13. We do not knowingly collect personal information from children under 13. If we become aware of such collection, we will delete the information immediately.</p>
          </section>

          <section>
            <h2>10. Changes to This Policy</h2>
            <p>We may update this privacy policy to reflect changes in our practices or legal requirements. We will notify users of significant changes via email or prominent notice on our website.</p>
          </section>

          <section>
            <h2>11. Contact Us</h2>
            <p>If you have questions about this privacy policy or our data practices:</p>
            <ul>
              <li>Email: privacy@securesharing.com</li>
              <li>Contact form: <a href="/contact">Contact Us</a></li>
              <li>Mail: SecureSharing Privacy Team, [Address]</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
