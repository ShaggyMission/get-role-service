const express = require('express');
const router = express.Router();
const { getUserRole } = require('../controllers/roleController');

router.get('/user-role/:userId', getUserRole);

module.exports = router;
