const express = require('express');
const router = express.Router();
const {
  getFileInfo,
  accessFile,
} = require('../controllers/viewController');

router.get('/:shareLink', getFileInfo);
router.post('/:shareLink/access', accessFile);

module.exports = router;
