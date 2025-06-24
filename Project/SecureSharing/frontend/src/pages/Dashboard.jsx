import { useState, useEffect } from 'react';
import { fileAPI } from '../services/api';
import FileUpload from '../components/FileUpload';
import FileList from '../components/FileList';

const Dashboard = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    try {
      setLoading(true);
      const response = await fileAPI.getUserFiles();
      setFiles(response.data);
    } catch (error) {
      setError('Failed to fetch files');
      console.error('Error fetching files:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileUploaded = (newFile) => {
    setFiles(prev => [newFile, ...prev]);
  };

  const handleFileDeleted = (fileId) => {
    setFiles(prev => prev.filter(file => file._id !== fileId));
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Upload and manage your shared files</p>
      </div>

      <div className="dashboard-content">
        <div className="upload-section">
          <FileUpload onFileUploaded={handleFileUploaded} />
        </div>

        <div className="files-section">
          <h2>Your Files</h2>
          {error && <div className="error-message">{error}</div>}
          
          {loading ? (
            <div className="loading">Loading files...</div>
          ) : (
            <FileList 
              files={files} 
              onFileDeleted={handleFileDeleted}
              onRefresh={fetchFiles}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
