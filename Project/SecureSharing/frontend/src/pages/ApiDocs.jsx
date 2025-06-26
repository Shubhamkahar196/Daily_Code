const ApiDocs = () => {
  return (
    <div className="api-docs-page">
      <div className="api-docs-container">
        <div className="api-docs-header">
          <h1>API Documentation</h1>
          <p>Integrate SecureSharing into your applications with our REST API.</p>
        </div>

        <div className="api-docs-content">
          <section className="api-section">
            <h2>Getting Started</h2>
            <p>The SecureSharing API allows you to programmatically upload files, manage sharing settings, and retrieve file information.</p>
            
            <div className="api-info">
              <h3>Base URL</h3>
              <code>https://api.securesharing.com/api</code>
              
              <h3>Authentication</h3>
              <p>All API requests require authentication using JWT tokens. Include your token in the Authorization header:</p>
              <code>Authorization: Bearer YOUR_JWT_TOKEN</code>
            </div>
          </section>

          <section className="api-section">
            <h2>Authentication Endpoints</h2>
            
            <div className="endpoint">
              <h3>POST /auth/register</h3>
              <p>Create a new user account.</p>
              <div className="endpoint-details">
                <h4>Request Body:</h4>
                <pre><code>{`{
  "email": "user@example.com",
  "password": "securepassword"
}`}</code></pre>
                
                <h4>Response:</h4>
                <pre><code>{`{
  "_id": "user_id",
  "email": "user@example.com",
  "token": "jwt_token_here"
}`}</code></pre>
              </div>
            </div>

            <div className="endpoint">
              <h3>POST /auth/login</h3>
              <p>Authenticate and receive a JWT token.</p>
              <div className="endpoint-details">
                <h4>Request Body:</h4>
                <pre><code>{`{
  "email": "user@example.com",
  "password": "securepassword"
}`}</code></pre>
              </div>
            </div>
          </section>

          <section className="api-section">
            <h2>File Management</h2>
            
            <div className="endpoint">
              <h3>POST /files/upload</h3>
              <p>Upload a new file with optional security settings.</p>
              <div className="endpoint-details">
                <h4>Request (multipart/form-data):</h4>
                <ul>
                  <li><code>file</code> - The file to upload (required)</li>
                  <li><code>password</code> - Password protection (optional)</li>
                  <li><code>expirationHours</code> - Hours until expiration (optional)</li>
                  <li><code>viewLimit</code> - Maximum number of views (optional)</li>
                </ul>
                
                <h4>Response:</h4>
                <pre><code>{`{
  "message": "File uploaded successfully",
  "shareLink": "unique-share-link-id",
  "file": {
    "id": "file_id",
    "originalFilename": "image.jpg",
    "fileType": "image/jpeg",
    "fileSize": 1024000,
    "isPasswordProtect": true,
    "expirationDate": "2024-01-01T00:00:00.000Z",
    "viewLimit": 10,
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}`}</code></pre>
              </div>
            </div>

            <div className="endpoint">
              <h3>GET /files/my-files</h3>
              <p>Retrieve all files uploaded by the authenticated user.</p>
              <div className="endpoint-details">
                <h4>Response:</h4>
                <pre><code>{`[
  {
    "_id": "file_id",
    "originalFilename": "image.jpg",
    "fileType": "image/jpeg",
    "fileSize": 1024000,
    "shareLink": "unique-share-link",
    "isPasswordProtect": true,
    "currentView": 5,
    "viewLimit": 10,
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
]`}</code></pre>
              </div>
            </div>

            <div className="endpoint">
              <h3>DELETE /files/:id</h3>
              <p>Delete a specific file.</p>
              <div className="endpoint-details">
                <h4>Response:</h4>
                <pre><code>{`{
  "message": "File deleted successfully"
}`}</code></pre>
              </div>
            </div>
          </section>

          <section className="api-section">
            <h2>File Viewing</h2>
            
            <div className="endpoint">
              <h3>GET /view/:shareLink</h3>
              <p>Get information about a shared file (no authentication required).</p>
              <div className="endpoint-details">
                <h4>Response:</h4>
                <pre><code>{`{
  "originalFilename": "image.jpg",
  "fileType": "image/jpeg",
  "fileSize": 1024000,
  "isPasswordProtect": true,
  "expirationDate": "2024-01-01T00:00:00.000Z",
  "viewLimit": 10,
  "currentView": 5,
  "createdAt": "2024-01-01T00:00:00.000Z"
}`}</code></pre>
              </div>
            </div>

            <div className="endpoint">
              <h3>POST /view/:shareLink/access</h3>
              <p>Access and download a shared file (no authentication required).</p>
              <div className="endpoint-details">
                <h4>Request Body (if password protected):</h4>
                <pre><code>{`{
  "password": "file_password"
}`}</code></pre>
                
                <h4>Response:</h4>
                <p>Returns the file content as a binary stream.</p>
              </div>
            </div>
          </section>

          <section className="api-section">
            <h2>Error Responses</h2>
            <div className="error-codes">
              <h3>Common Error Codes:</h3>
              <ul>
                <li><code>400</code> - Bad Request (invalid data)</li>
                <li><code>401</code> - Unauthorized (invalid or missing token)</li>
                <li><code>404</code> - Not Found (file or endpoint doesn't exist)</li>
                <li><code>410</code> - Gone (file expired or view limit exceeded)</li>
                <li><code>413</code> - Payload Too Large (file size exceeds limit)</li>
                <li><code>500</code> - Internal Server Error</li>
              </ul>
              
              <h3>Error Response Format:</h3>
              <pre><code>{`{
  "message": "Error description"
}`}</code></pre>
            </div>
          </section>

          <section className="api-section">
            <h2>Rate Limits</h2>
            <p>To ensure fair usage, the following rate limits apply:</p>
            <ul>
              <li>Authentication: 10 requests per minute</li>
              <li>File uploads: 20 uploads per hour</li>
              <li>File access: 1000 requests per hour</li>
            </ul>
          </section>

          <section className="api-section">
            <h2>SDKs and Examples</h2>
            <p>We're working on official SDKs for popular programming languages. In the meantime, here are some examples:</p>
            
            <div className="code-example">
              <h3>JavaScript/Node.js Example</h3>
              <pre><code>{`// Upload a file
const formData = new FormData();
formData.append('file', fileInput.files[0]);
formData.append('password', 'optional-password');

const response = await fetch('/api/files/upload', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer ' + token
  },
  body: formData
});

const result = await response.json();
console.log('Share link:', result.shareLink);`}</code></pre>
            </div>
          </section>
        </div>

        <div className="api-docs-footer">
          <h2>Need Help?</h2>
          <p>If you have questions about the API or need assistance with integration, please <a href="/contact">contact our support team</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default ApiDocs;
