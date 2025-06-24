const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const File = require('../models/File');

// Configure multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueName = uuidv4() + path.extname(file.originalname);
    cb(null, uniqueName);
  },
});

const fileFilter = (req, file, cb) => {
  // Allow images and videos
  if (file.mimetype.startsWith('image/') || file.mimetype.startsWith('video/')) {
    cb(null, true);
  } else {
    cb(new Error('Only image and video files are allowed!'), false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 100 * 1024 * 1024, // 100MB limit
  },
  fileFilter: fileFilter,
});

// Generate secure share link
const generateShareLink = () => {
  return uuidv4();
};


const uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const { password, expirationHours, viewLimit } = req.body;

    // Calculate expiration date if provided
    let expirationDate = null;
    if (expirationHours && parseInt(expirationHours) > 0) {
      expirationDate = new Date();
      expirationDate.setHours(expirationDate.getHours() + parseInt(expirationHours));
    }

    // Create file record
    const fileRecord = await File.create({
      user: req.user._id,
      originalFilename: req.file.originalname,
      storedFileName: req.file.filename,
      fileType: req.file.mimetype,
      fileSize: req.file.size,
      shareLink: generateShareLink(),
      isPasswordProtect: !!password,
      filePassword: password || undefined,
      expirationDate: expirationDate,
      viewLimit: viewLimit ? parseInt(viewLimit) : null,
    });

    res.status(201).json({
      message: 'File uploaded successfully',
      shareLink: fileRecord.shareLink,
      file: {
        id: fileRecord._id,
        originalFilename: fileRecord.originalFilename,
        fileType: fileRecord.fileType,
        fileSize: fileRecord.fileSize,
        isPasswordProtect: fileRecord.isPasswordProtect,
        expirationDate: fileRecord.expirationDate,
        viewLimit: fileRecord.viewLimit,
        createdAt: fileRecord.createdAt,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getUserFiles = async (req, res) => {
  try {
    const files = await File.find({ user: req.user._id })
      .select('-filePassword')
      .sort({ createdAt: -1 });

    res.json(files);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const deleteFile = async (req, res) => {
  try {
    const file = await File.findById(req.params.id);

    if (!file) {
      return res.status(404).json({ message: 'File not found' });
    }

    // Check if user owns the file
    if (file.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    // Delete file from filesystem
    const fs = require('fs');
    const filePath = path.join(__dirname, '../uploads', file.storedFileName);

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    // Delete file record from database
    await File.findByIdAndDelete(req.params.id);

    res.json({ message: 'File deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  upload,
  uploadFile,
  getUserFiles,
  deleteFile,
};