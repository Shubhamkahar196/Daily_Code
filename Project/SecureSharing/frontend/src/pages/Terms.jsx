const Terms = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>Terms of Service</h1>
        <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="legal-content">
          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing and using SecureSharing ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
          </section>

          <section>
            <h2>2. Description of Service</h2>
            <p>SecureSharing is a file sharing platform that allows users to:</p>
            <ul>
              <li>Upload and share images and videos securely</li>
              <li>Generate unique sharing links for files</li>
              <li>Set password protection, expiration dates, and view limits</li>
              <li>Manage and delete uploaded files</li>
            </ul>
          </section>

          <section>
            <h2>3. User Accounts</h2>
            <h3>Account Creation</h3>
            <ul>
              <li>You must provide accurate and complete information when creating an account</li>
              <li>You are responsible for maintaining the confidentiality of your password</li>
              <li>You are responsible for all activities that occur under your account</li>
              <li>You must notify us immediately of any unauthorized use of your account</li>
            </ul>

            <h3>Account Termination</h3>
            <ul>
              <li>You may delete your account at any time</li>
              <li>We may suspend or terminate accounts that violate these terms</li>
              <li>Upon termination, your files and data will be permanently deleted</li>
            </ul>
          </section>

          <section>
            <h2>4. Acceptable Use</h2>
            <h3>You agree NOT to use the Service to:</h3>
            <ul>
              <li>Upload illegal, harmful, or offensive content</li>
              <li>Share copyrighted material without permission</li>
              <li>Upload malware, viruses, or malicious code</li>
              <li>Harass, threaten, or harm others</li>
              <li>Spam or send unsolicited communications</li>
              <li>Attempt to hack or compromise the service</li>
              <li>Use the service for commercial purposes without permission</li>
              <li>Violate any applicable laws or regulations</li>
            </ul>

            <h3>Content Guidelines</h3>
            <ul>
              <li>You retain ownership of your uploaded content</li>
              <li>You grant us permission to store and serve your content</li>
              <li>You are responsible for ensuring you have rights to upload content</li>
              <li>We reserve the right to remove content that violates these terms</li>
            </ul>
          </section>

          <section>
            <h2>5. File Storage and Limits</h2>
            <ul>
              <li><strong>File Types:</strong> Images and videos only</li>
              <li><strong>File Size:</strong> Maximum 100MB per file</li>
              <li><strong>Storage Duration:</strong> Files are stored until deleted or expired</li>
              <li><strong>Bandwidth:</strong> Reasonable use limits apply</li>
            </ul>
          </section>

          <section>
            <h2>6. Privacy and Security</h2>
            <ul>
              <li>We implement security measures to protect your data</li>
              <li>You are responsible for setting appropriate sharing permissions</li>
              <li>Share links should be treated as confidential</li>
              <li>We cannot guarantee absolute security of data transmission</li>
              <li>See our <a href="/privacy">Privacy Policy</a> for detailed information</li>
            </ul>
          </section>

          <section>
            <h2>7. Intellectual Property</h2>
            <ul>
              <li>The SecureSharing platform and its features are our intellectual property</li>
              <li>You retain rights to your uploaded content</li>
              <li>You may not copy, modify, or distribute our platform</li>
              <li>Respect the intellectual property rights of others</li>
            </ul>
          </section>

          <section>
            <h2>8. Service Availability</h2>
            <ul>
              <li>We strive for high availability but cannot guarantee 100% uptime</li>
              <li>Scheduled maintenance will be announced in advance when possible</li>
              <li>We are not liable for service interruptions</li>
              <li>Emergency maintenance may occur without notice</li>
            </ul>
          </section>

          <section>
            <h2>9. Disclaimers</h2>
            <p>THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING:</p>
            <ul>
              <li>Warranties of merchantability and fitness for a particular purpose</li>
              <li>Warranties regarding security, reliability, or availability</li>
              <li>Warranties that the service will be error-free or uninterrupted</li>
            </ul>
          </section>

          <section>
            <h2>10. Limitation of Liability</h2>
            <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>
            <ul>
              <li>We are not liable for any indirect, incidental, or consequential damages</li>
              <li>Our total liability shall not exceed the amount paid by you for the service</li>
              <li>We are not responsible for loss of data, profits, or business interruption</li>
              <li>You use the service at your own risk</li>
            </ul>
          </section>

          <section>
            <h2>11. Indemnification</h2>
            <p>You agree to indemnify and hold us harmless from any claims, damages, or expenses arising from:</p>
            <ul>
              <li>Your use of the service</li>
              <li>Your violation of these terms</li>
              <li>Your violation of any rights of another party</li>
              <li>Content you upload or share</li>
            </ul>
          </section>

          <section>
            <h2>12. Modifications to Terms</h2>
            <ul>
              <li>We may modify these terms at any time</li>
              <li>Changes will be posted on this page with an updated date</li>
              <li>Continued use of the service constitutes acceptance of new terms</li>
              <li>Significant changes will be communicated via email when possible</li>
            </ul>
          </section>

          <section>
            <h2>13. Governing Law</h2>
            <p>These terms are governed by the laws of [Your Jurisdiction]. Any disputes will be resolved in the courts of [Your Jurisdiction].</p>
          </section>

          <section>
            <h2>14. Contact Information</h2>
            <p>For questions about these terms:</p>
            <ul>
              <li>Email: legal@securesharing.com</li>
              <li>Contact form: <a href="/contact">Contact Us</a></li>
              <li>Mail: SecureSharing Legal Team, [Address]</li>
            </ul>
          </section>

          <section>
            <h2>15. Severability</h2>
            <p>If any provision of these terms is found to be unenforceable, the remaining provisions will remain in full force and effect.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
