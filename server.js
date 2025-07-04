const express = require('express');
const app = express();
const PORT = 3000;

// Built-in middleware to parse JSON body
app.use(express.json());

// Store feedback in memory (like a mini-database)
const feedbacks = [];

app.get('/', (req, res) => {
  res.send('👋 Welcome to the Feedback API!');
});

// Get all feedback
app.get('/feedback', (req, res) => {
  res.json(feedbacks);
});

// Post new feedback
app.post('/feedback', (req, res) => {
  const { name, message } = req.body;

  if (!name || !message) {
    return res.status(400).json({ error: 'Name and message are required' });
  }

  const newFeedback = { id: feedbacks.length + 1, name, message };
  feedbacks.push(newFeedback);

  res.status(201).json(newFeedback);
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});