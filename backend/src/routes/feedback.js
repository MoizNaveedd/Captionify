const express = require('express');
const router = express.Router();
const feedbackController = require('../controller/feedback');

// POST endpoint to submit feedback
router.post('/submit', feedbackController.submitFeedback);

// GET endpoint to get all feedback
router.get('/getAll', feedbackController.getAllFeedback);

module.exports = router;
