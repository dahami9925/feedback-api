// server.js

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();  // ✅ Must be declared before use

const PORT = 5050; // Or change to 3001 if port 5000 is busy

// ✅ Enable CORS for frontend connection
app.use(cors());

// ✅ Enable JSON body parsing
app.use(express.json());

// ✅ MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/feedback_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// ✅ Schema + Model
const feedbackSchema = new mongoose.Schema({
  name: String,
  message: String
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

// ✅ Routes

// Health check
app.get('/', (req, res) => {
  res.send('👋 Welcome to the Feedback API!');
});

// Get all feedback
app.get('/feedback', async (req, res) => {
  try {
    const allFeedback = await Feedback.find();
    res.json(allFeedback);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch feedback' });
  }
});

// Create feedback
app.post('/feedback', async (req, res) => {
  const { name, message } = req.body;
  if (!name || !message) {
    return res.status(400).json({ error: 'Name and message are required' });
  }

  try {
    const newFeedback = new Feedback({ name, message });
    const saved = await newFeedback.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save feedback' });
  }
});

// Update feedback
app.put('/feedback/:id', async (req, res) => {
  const { id } = req.params;
  const { name, message } = req.body;

  try {
    const updated = await Feedback.findByIdAndUpdate(
      id,
      { name, message },
      { new: true }
    );

    if (!updated) return res.status(404).json({ error: 'Feedback not found' });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Update failed' });
  }
});

// Delete feedback
app.delete('/feedback/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Feedback.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ error: 'Feedback not found' });

    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Delete failed' });
  }
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});