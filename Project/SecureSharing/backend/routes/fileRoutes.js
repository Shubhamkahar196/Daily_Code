const express = require('express');
const router = express.Router();
const {
  upload,
  uploadFile,
  getUserFiles,
  deleteFile,
} = require('../controllers/fileController');
const { protect } = require('../middleware/authMiddleware');

router.post('/upload', protect, upload.single('file'), uploadFile);
router.get('/my-files', protect, getUserFiles);
router.delete('/:id', protect, deleteFile);

module.exports = router;
