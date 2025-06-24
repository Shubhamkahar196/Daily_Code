import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { viewAPI } from '../services/api';

const ViewFile = () => {
  const { shareLink } = useParams();
  const [fileInfo, setFileInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [password, setPassword] = useState('');
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [fileUrl, setFileUrl] = useState('');
  const [accessing, setAccessing] = useState(false);

  useEffect(() => {
    fetchFileInfo();
  }, [shareLink]);

  const fetchFileInfo = async () => {
    try {
      setLoading(true);
      const response = await viewAPI.getFileInfo(shareLink);
      setFileInfo(response.data);
      
      if (response.data.isPasswordProtect) {
        setShowPasswordForm(true);
      } else {
        // If no password required, access file immediately
        await accessFile();
      }
    } catch (error) {
      setError(error.response?.data?.message || 'File not found');
    } finally {
      setLoading(false);
    }
  };

  const accessFile = async (filePassword = '') => {
    try {
      setAccessing(true);
      setError('');
      
      const response = await viewAPI.accessFile(shareLink, filePassword);
      
      // Create blob URL for the file
      const blob = new Blob([response.data]);
      const url = URL.createObjectURL(blob);
      setFileUrl(url);
      setShowPasswordForm(false);
      
    } catch (error) {
      if (error.response?.status === 401) {
        setError('Invalid password');
      } else {
        setError(error.response?.data?.message || 'Failed to access file');
      }
    } finally {
      setAccessing(false);
    }
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password.trim()) {
      accessFile(password);
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  const downloadFile = () => {
    if (fileUrl && fileInfo) {
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = fileInfo.originalFilename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  if (loading) {
    return (
      <div className="view-file">
        <div className="loading">Loading file...</div>
      </div>
    );
  }

  if (error && !fileInfo) {
    return (
      <div className="view-file">
        <div className="error-container">
          <h2>Error</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="view-file">
      {fileInfo && (
        <div className="file-header">
          <h2>{fileInfo.originalFilename}</h2>
          <div className="file-meta">
            <span>Size: {formatFileSize(fileInfo.fileSize)}</span>
            <span>Type: {fileInfo.fileType}</span>
            <span>Uploaded: {formatDate(fileInfo.createdAt)}</span>
            {fileInfo.viewLimit && (
              <span>Views: {fileInfo.currentView + 1}/{fileInfo.viewLimit}</span>
            )}
            {fileInfo.expirationDate && (
              <span>Expires: {formatDate(fileInfo.expirationDate)}</span>
            )}
          </div>
        </div>
      )}

      {error && <div className="error-message">{error}</div>}

      {showPasswordForm && (
        <div className="password-form">
          <h3>This file is password protected</h3>
          <form onSubmit={handlePasswordSubmit}>
            <div className="form-group">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary" disabled={accessing}>
              {accessing ? 'Accessing...' : 'Access File'}
            </button>
          </form>
        </div>
      )}

      {fileUrl && fileInfo && (
        <div className="file-content">
          <div className="file-actions">
            <button onClick={downloadFile} className="btn btn-primary">
              Download File
            </button>
          </div>
          
          <div className="file-preview">
            {fileInfo.fileType.startsWith('image/') ? (
              <img src={fileUrl} alt={fileInfo.originalFilename} />
            ) : fileInfo.fileType.startsWith('video/') ? (
              <video controls>
                <source src={fileUrl} type={fileInfo.fileType} />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="no-preview">
                <p>Preview not available for this file type</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewFile;
