const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-header">
          <h1>About SecureSharing</h1>
          <p>Secure, private, and easy file sharing for everyone.</p>
        </div>

        <div className="about-content">
          <section className="about-section">
            <h2>Our Mission</h2>
            <p>
              At SecureSharing, we believe that sharing files should be both simple and secure. 
              We've built a platform that puts privacy and security first, while maintaining 
              the ease of use that modern users expect.
            </p>
          </section>

          <section className="about-section">
            <h2>What We Do</h2>
            <p>
              SecureSharing is a modern file sharing platform that allows you to upload images 
              and videos, then share them securely with anyone through unique, encrypted links. 
              Our platform offers advanced security features like password protection, 
              expiration dates, and view limits.
            </p>
          </section>

          <section className="about-section">
            <h2>Why Choose SecureSharing?</h2>
            <div className="features-grid">
              <div className="feature-card">
                <h3>🔒 Privacy First</h3>
                <p>Your files are encrypted and stored securely. We never access your content without permission.</p>
              </div>
              <div className="feature-card">
                <h3>🚀 Easy to Use</h3>
                <p>Simple, intuitive interface that anyone can use. Upload, share, and manage files effortlessly.</p>
              </div>
              <div className="feature-card">
                <h3>⚡ Fast & Reliable</h3>
                <p>Quick uploads, fast downloads, and reliable service with minimal downtime.</p>
              </div>
              <div className="feature-card">
                <h3>🛡️ Advanced Security</h3>
                <p>Password protection, expiration dates, view limits, and secure sharing links.</p>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2>Our Values</h2>
            <div className="values-list">
              <div className="value-item">
                <h3>Privacy</h3>
                <p>We respect your privacy and never sell or share your personal data with third parties.</p>
              </div>
              <div className="value-item">
                <h3>Security</h3>
                <p>We use industry-standard encryption and security practices to protect your files.</p>
              </div>
              <div className="value-item">
                <h3>Transparency</h3>
                <p>We're open about our practices and policies. No hidden terms or surprise changes.</p>
              </div>
              <div className="value-item">
                <h3>Simplicity</h3>
                <p>Technology should be simple and accessible. We focus on user-friendly design.</p>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2>Technology</h2>
            <p>
              SecureSharing is built with modern web technologies including React, Node.js, 
              and MongoDB. We use industry-standard encryption, secure authentication with JWT tokens, 
              and follow best practices for web security.
            </p>
          </section>

          <section className="about-section">
            <h2>Open Source</h2>
            <p>
              We believe in transparency and community contribution. Parts of our platform 
              are open source, and we welcome contributions from developers who share our 
              vision of secure, private file sharing.
            </p>
          </section>

          <section className="about-section">
            <h2>Contact Us</h2>
            <p>
              Have questions or feedback? We'd love to hear from you. 
              <a href="/contact"> Get in touch with our team</a> and we'll respond as quickly as possible.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
