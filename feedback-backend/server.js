const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/feedback_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Middleware to parse JSON
app.use(express.json());

// Feedback Schema
const feedbackSchema = new mongoose.Schema({
  name: String,
  message: String
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

// ROUTES

// Root
app.get('/', (req, res) => {
  res.send('👋 Welcome to the Feedback API!');
});

// GET all feedback
app.get('/feedback', async (req, res) => {
  const allFeedback = await Feedback.find();
  res.json(allFeedback);
});

// POST new feedback
app.post('/feedback', async (req, res) => {
  const { name, message } = req.body;
  if (!name || !message) {
    return res.status(400).json({ error: 'Name and message are required' });
  }

  const newFeedback = new Feedback({ name, message });
  const saved = await newFeedback.save();
  res.status(201).json(saved);
});

// PUT update feedback by ID
app.put('/feedback/:id', async (req, res) => {
  const { id } = req.params;
  const { name, message } = req.body;

  const updated = await Feedback.findByIdAndUpdate(
    id,
    { name, message },
    { new: true } // return updated doc
  );

  if (!updated) return res.status(404).json({ error: 'Feedback not found' });

  res.json(updated);
});

// DELETE feedback by ID
app.delete('/feedback/:id', async (req, res) => {
  const { id } = req.params;

  const deleted = await Feedback.findByIdAndDelete(id);
  if (!deleted) return res.status(404).json({ error: 'Feedback not found' });

  res.json({ message: 'Deleted successfully' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});