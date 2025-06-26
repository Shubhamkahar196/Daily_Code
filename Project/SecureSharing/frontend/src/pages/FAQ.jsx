import { useState } from 'react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqData = [
    {
      question: "What file types can I upload?",
      answer: "You can upload images (JPG, PNG, GIF, WebP, etc.) and videos (MP4, WebM, MOV, AVI, etc.). We support all common image and video formats."
    },
    {
      question: "What's the maximum file size?",
      answer: "The maximum file size is 100MB per upload. This limit ensures fast uploads and downloads while accommodating most image and video files."
    },
    {
      question: "How long are files stored?",
      answer: "Files are stored until you delete them or they reach their expiration date (if set). You have full control over how long your files remain available."
    },
    {
      question: "Is my data secure?",
      answer: "Yes! We use industry-standard encryption for data storage and transmission. Your files are protected with secure sharing links, and you can add password protection for extra security."
    },
    {
      question: "Can I password protect my files?",
      answer: "Absolutely! When uploading a file, you can set a password that viewers must enter to access your content. This adds an extra layer of security."
    },
    {
      question: "What are view limits?",
      answer: "View limits let you control how many times your file can be viewed. Once the limit is reached, the file becomes inaccessible. This is useful for one-time sharing or limited distribution."
    },
    {
      question: "How do expiration dates work?",
      answer: "You can set an expiration time when uploading files. After this time passes, the file is automatically deleted and the sharing link becomes invalid."
    },
    {
      question: "Do I need an account to view shared files?",
      answer: "No! Anyone with a sharing link can view files without creating an account. Only uploading files requires an account."
    },
    {
      question: "Can I edit files after uploading?",
      answer: "Currently, you cannot edit files after uploading. However, you can delete files and upload new versions if needed."
    },
    {
      question: "How do I delete my files?",
      answer: "Go to your Dashboard, find the file you want to delete, and click the 'Delete' button. This action cannot be undone, so make sure you really want to delete the file."
    },
    {
      question: "What happens if I forget my password?",
      answer: "Currently, we don't have a password reset feature. If you forget your password, you'll need to create a new account. We recommend using a password manager."
    },
    {
      question: "Can I share files with multiple people?",
      answer: "Yes! You can share the same link with as many people as you want. Just copy the sharing link and send it to anyone you want to share with."
    },
    {
      question: "Is there a mobile app?",
      answer: "Not yet, but our website is fully responsive and works great on mobile devices. You can use SecureSharing from any web browser on your phone or tablet."
    },
    {
      question: "Do you have an API?",
      answer: "We're working on a public API for developers. If you're interested in API access, please contact us through our contact form."
    },
    {
      question: "How much does it cost?",
      answer: "SecureSharing is currently free to use! We may introduce premium features in the future, but the core functionality will always remain free."
    },
    {
      question: "Can I use this for business?",
      answer: "Yes, you can use SecureSharing for business purposes. However, please review our Terms of Service for any restrictions and contact us for high-volume usage."
    },
    {
      question: "What browsers are supported?",
      answer: "SecureSharing works on all modern browsers including Chrome, Firefox, Safari, and Edge. We recommend using the latest version of your browser for the best experience."
    },
    {
      question: "How do I report a problem or bug?",
      answer: "If you encounter any issues, please contact us through our contact form or email bugs@securesharing.com. Include as much detail as possible about the problem."
    },
    {
      question: "Can I download files that were shared with me?",
      answer: "Yes! When viewing a shared file, you'll see a download button that allows you to save the file to your device."
    },
    {
      question: "What happens to my files if I delete my account?",
      answer: "If you delete your account, all your uploaded files and data are permanently deleted. This action cannot be undone, so make sure to download any files you want to keep first."
    }
  ];

  return (
    <div className="faq-page">
      <div className="faq-container">
        <div className="faq-header">
          <h1>Frequently Asked Questions</h1>
          <p>Find quick answers to common questions about SecureSharing.</p>
        </div>

        <div className="faq-content">
          <div className="faq-search">
            <p>Can't find what you're looking for? <a href="/contact">Contact our support team</a> or check our <a href="/help">Help Center</a>.</p>
          </div>

          <div className="faq-list">
            {faqData.map((item, index) => (
              <div key={index} className={`faq-item ${openItems[index] ? 'open' : ''}`}>
                <button 
                  className="faq-question"
                  onClick={() => toggleItem(index)}
                  aria-expanded={openItems[index]}
                >
                  <span>{item.question}</span>
                  <span className="faq-icon">{openItems[index] ? '−' : '+'}</span>
                </button>
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="faq-footer">
          <h2>Still have questions?</h2>
          <p>If you can't find the answer you're looking for, our support team is here to help.</p>
          <div className="faq-actions">
            <a href="/contact" className="btn btn-primary">Contact Support</a>
            <a href="/help" className="btn btn-secondary">Help Center</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
