const path = require('path');
const fs = require('fs');
const File = require('../models/File');

const getFileInfo = async (req, res) => {
  try {
    const { shareLink } = req.params;

    const file = await File.findOne({ shareLink }).select('-filePassword');

    if (!file) {
      return res.status(404).json({ message: 'File not found' });
    }

    // Check if file has expired
    if (file.expirationDate && new Date() > file.expirationDate) {
      return res.status(410).json({ message: 'File has expired' });
    }

    // Check view limit
    if (file.viewLimit && file.currentView >= file.viewLimit) {
      return res.status(410).json({ message: 'View limit exceeded' });
    }

    res.json({
      originalFilename: file.originalFilename,
      fileType: file.fileType,
      fileSize: file.fileSize,
      isPasswordProtect: file.isPasswordProtect,
      expirationDate: file.expirationDate,
      viewLimit: file.viewLimit,
      currentView: file.currentView,
      createdAt: file.createdAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const accessFile = async (req, res) => {
  try {
    const { shareLink } = req.params;
    const { password } = req.body;

    const file = await File.findOne({ shareLink });

    if (!file) {
      return res.status(404).json({ message: 'File not found' });
    }

    // Check if file has expired
    if (file.expirationDate && new Date() > file.expirationDate) {
      return res.status(410).json({ message: 'File has expired' });
    }

    // Check view limit
    if (file.viewLimit && file.currentView >= file.viewLimit) {
      return res.status(410).json({ message: 'View limit exceeded' });
    }

    // Check password if required
    if (file.isPasswordProtect) {
      if (!password) {
        return res.status(401).json({ message: 'Password required' });
      }

      const isPasswordValid = await file.isPasswordCorrect(password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid password' });
      }
    }

    // Increment view count
    file.currentView += 1;
    await file.save();

    // Serve the file
    const filePath = path.join(__dirname, '../uploads', file.storedFileName);

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ message: 'File not found on server' });
    }

    // Set appropriate headers
    res.setHeader('Content-Type', file.fileType);
    res.setHeader('Content-Disposition', `inline; filename="${file.originalFilename}"`);

    // Stream the file
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getFileInfo,
  accessFile,
};