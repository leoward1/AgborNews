import express from 'express';
import { protect, admin } from '../middlewares/authMiddleware.js';
import StreamEvent from '../models/streamEventModel.js';

const router = express.Router();

// @desc    Get all stream events
// @route   GET /api/stream
// @access  Public
router.get('/', async (req, res) => {
  const events = await StreamEvent.find({});
  res.json(events);
});

// @desc    Create a stream event
// @route   POST /api/stream
// @access  Private/Admin
router.post('/', protect, admin, async (req, res) => {
  const { title, description, status, scheduledStartTime, streamUrl, thumbnail } = req.body;

  const event = await StreamEvent.create({
    title,
    description,
    status,
    scheduledStartTime,
    streamUrl,
    thumbnail,
  });

  if (event) {
    res.status(201).json(event);
  } else {
    res.status(400).json({ message: 'Invalid event data' });
  }
});

// @desc    Update a stream event status (e.g. going live)
// @route   PUT /api/stream/:id
// @access  Private/Admin
router.put('/:id', protect, admin, async (req, res) => {
  const event = await StreamEvent.findById(req.params.id);

  if (event) {
    event.status = req.body.status || event.status;
    event.streamUrl = req.body.streamUrl || event.streamUrl;
    
    const updatedEvent = await event.save();
    res.json(updatedEvent);
  } else {
    res.status(404).json({ message: 'Event not found' });
  }
});

export default router;
