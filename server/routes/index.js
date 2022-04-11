const express = require('express');
var path = require('path');

const transcript = require(path.join(__dirname, '../controllers', 'transcript.controller'));

const router = express.Router();

router.post('/audio', transcript.postAudio);
router.get('/transcript', transcript.init);

module.exports = router;
