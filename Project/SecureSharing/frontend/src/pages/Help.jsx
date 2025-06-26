const Help = () => {
  return (
    <div className="help-page">
      <div className="help-container">
        <h1>Help Center</h1>
        <p>Find answers to common questions and learn how to use SecureSharing effectively.</p>

        <div className="help-sections">
          <section className="help-section">
            <h2>🚀 Getting Started</h2>
            <div className="help-content">
              <h3>How to create an account?</h3>
              <p>Click on "Register" in the top navigation, enter your email and password, then click "Create Account". You'll be automatically logged in and redirected to your dashboard.</p>

              <h3>How to upload files?</h3>
              <ol>
                <li>Log in to your account</li>
                <li>Go to your Dashboard</li>
                <li>Click "Select File" and choose an image or video</li>
                <li>Optionally set a password, expiration time, or view limit</li>
                <li>Click "Upload File"</li>
                <li>Copy the generated share link</li>
              </ol>
            </div>
          </section>

          <section className="help-section">
            <h2>🔒 Security Features</h2>
            <div className="help-content">
              <h3>Password Protection</h3>
              <p>Add an extra layer of security by setting a password for your files. Only people with the password can view your content.</p>

              <h3>Expiration Dates</h3>
              <p>Set how long your files should be available. After the expiration time, the files will no longer be accessible.</p>

              <h3>View Limits</h3>
              <p>Control how many times your file can be viewed. Once the limit is reached, the file becomes inaccessible.</p>
            </div>
          </section>

          <section className="help-section">
            <h2>📁 File Management</h2>
            <div className="help-content">
              <h3>Supported File Types</h3>
              <p>We support all common image formats (JPG, PNG, GIF, WebP) and video formats (MP4, WebM, MOV, AVI).</p>

              <h3>File Size Limits</h3>
              <p>Maximum file size is 100MB per upload.</p>

              <h3>How to delete files?</h3>
              <p>Go to your Dashboard, find the file you want to delete, and click the "Delete" button. This action cannot be undone.</p>
            </div>
          </section>

          <section className="help-section">
            <h2>🔗 Sharing Files</h2>
            <div className="help-content">
              <h3>How to share files?</h3>
              <p>After uploading a file, copy the generated share link and send it to anyone you want to share with. They don't need an account to view your files.</p>

              <h3>Share Link Security</h3>
              <p>Each share link is unique and randomly generated. Only people with the exact link can access your files.</p>
            </div>
          </section>

          <section className="help-section">
            <h2>⚙️ Account Settings</h2>
            <div className="help-content">
              <h3>Dark Mode</h3>
              <p>Toggle between light and dark themes using the moon/sun icon in the navigation bar.</p>

              <h3>Privacy</h3>
              <p>Your email is displayed in abbreviated form (first 2 characters) for privacy. Hover over it to see the full email.</p>
            </div>
          </section>

          <section className="help-section">
            <h2>❓ Troubleshooting</h2>
            <div className="help-content">
              <h3>File won't upload</h3>
              <ul>
                <li>Check if the file size is under 100MB</li>
                <li>Ensure the file is an image or video</li>
                <li>Check your internet connection</li>
                <li>Try refreshing the page</li>
              </ul>

              <h3>Can't access shared file</h3>
              <ul>
                <li>Check if the file has expired</li>
                <li>Verify the share link is complete and correct</li>
                <li>If password protected, ensure you have the correct password</li>
                <li>Check if the view limit has been reached</li>
              </ul>

              <h3>Login issues</h3>
              <ul>
                <li>Verify your email and password are correct</li>
                <li>Clear your browser cache and cookies</li>
                <li>Try using a different browser</li>
              </ul>
            </div>
          </section>
        </div>

        <div className="help-contact">
          <h2>Still need help?</h2>
          <p>If you can't find the answer you're looking for, please <a href="/contact">contact our support team</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default Help;
