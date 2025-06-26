import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        category: 'general'
      });
    }, 2000);
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>We're here to help! Get in touch with our support team.</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <div className="contact-methods">
              <div className="contact-method">
                <h3>📧 Email Support</h3>
                <p>support@securesharing.com</p>
                <span>Response time: 24-48 hours</span>
              </div>

              <div className="contact-method">
                <h3>💬 Live Chat</h3>
                <p>Available Monday-Friday</p>
                <span>9:00 AM - 6:00 PM EST</span>
              </div>

              <div className="contact-method">
                <h3>📞 Phone Support</h3>
                <p>+1 (555) 123-4567</p>
                <span>Business hours only</span>
              </div>

              <div className="contact-method">
                <h3>🐛 Bug Reports</h3>
                <p>bugs@securesharing.com</p>
                <span>Technical issues and bugs</span>
              </div>
            </div>

            <div className="contact-faq">
              <h3>Quick Answers</h3>
              <ul>
                <li><a href="/help">Check our Help Center</a></li>
                <li><a href="/faq">Frequently Asked Questions</a></li>
                <li><a href="/security">Security Information</a></li>
              </ul>
            </div>
          </div>

          <div className="contact-form-section">
            <h2>Send us a Message</h2>
            
            {isSubmitted ? (
              <div className="success-message">
                <h3>✅ Message Sent!</h3>
                <p>Thank you for contacting us. We'll get back to you within 24-48 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="category">Category</label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                  >
                    <option value="general">General Inquiry</option>
                    <option value="technical">Technical Support</option>
                    <option value="billing">Billing Question</option>
                    <option value="feature">Feature Request</option>
                    <option value="bug">Bug Report</option>
                    <option value="security">Security Concern</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please describe your question or issue in detail..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="contact-footer">
          <h3>Office Hours</h3>
          <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
          <p>Saturday - Sunday: Closed</p>
          <p>We aim to respond to all inquiries within 24-48 hours during business days.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
