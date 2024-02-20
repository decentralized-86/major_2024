const express = require('express')
const router = express.Router();

const {post_job} = require('../controllers/jobPost.controller');

router.post('/jobpost',post_job);


module.exports = router;