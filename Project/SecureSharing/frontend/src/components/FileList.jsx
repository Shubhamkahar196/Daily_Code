import { useState } from 'react';
import { fileAPI } from '../services/api';

const FileList = ({ files, onFileDeleted, onRefresh }) => {
  const [deletingId, setDeletingId] = useState(null);

  const handleDelete = async (fileId) => {
    if (!window.confirm('Are you sure you want to delete this file?')) {
      return;
    }

    setDeletingId(fileId);
    try {
      await fileAPI.deleteFile(fileId);
      onFileDeleted(fileId);
    } catch (error) {
      alert('Failed to delete file');
      console.error('Delete error:', error);
    } finally {
      setDeletingId(null);
    }
  };

  const copyShareLink = (shareLink) => {
    const fullLink = `${window.location.origin}/view/${shareLink}`;
    navigator.clipboard.writeText(fullLink);
    alert('Share link copied to clipboard!');
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

  if (files.length === 0) {
    return (
      <div className="no-files">
        <p>No files uploaded yet. Upload your first file above!</p>
      </div>
    );
  }

  return (
    <div className="file-list">
      {files.map((file) => (
        <div key={file._id} className="file-item">
          <div className="file-info">
            <h4>{file.originalFilename}</h4>
            <div className="file-details">
              <span className="file-type">{file.fileType}</span>
              <span className="file-size">{formatFileSize(file.fileSize)}</span>
              <span className="file-date">Uploaded: {formatDate(file.createdAt)}</span>
            </div>
            
            <div className="file-settings">
              {file.isPasswordProtect && (
                <span className="setting-badge">🔒 Password Protected</span>
              )}
              {file.expirationDate && (
                <span className="setting-badge">
                  ⏰ Expires: {formatDate(file.expirationDate)}
                </span>
              )}
              {file.viewLimit && (
                <span className="setting-badge">
                  👁️ Views: {file.currentView}/{file.viewLimit}
                </span>
              )}
            </div>
          </div>

          <div className="file-actions">
            <button
              onClick={() => copyShareLink(file.shareLink)}
              className="btn btn-secondary"
            >
              Copy Link
            </button>
            <button
              onClick={() => handleDelete(file._id)}
              className="btn btn-danger"
              disabled={deletingId === file._id}
            >
              {deletingId === file._id ? 'Deleting...' : 'Delete'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FileList;
