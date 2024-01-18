const Feedback = require('../model/feedback');

// Controller to handle submitting feedback
exports.submitFeedback = async (req, res) => {
  try {
    const { email, name, feedbackText } = req.body;

    const newFeedback = new Feedback({
      email,
      name,
      feedbackText,
    });

    const savedFeedback = await newFeedback.save();

    res.status(201).json(savedFeedback);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller to get all feedback
exports.getAllFeedback = async (req, res) => {
  try {
    const allFeedback = await Feedback.find().sort({ createdAt: -1 });
    res.status(200).json(allFeedback);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
