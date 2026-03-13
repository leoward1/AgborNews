import mongoose from 'mongoose';

const streamEventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ['upcoming', 'live', 'past'],
    default: 'upcoming',
  },
  scheduledStartTime: {
    type: Date,
    required: true,
  },
  streamUrl: {
    type: String, // StreamYard / YouTube embed URL
  },
  thumbnail: {
    type: String,
  },
}, {
  timestamps: true,
});

const StreamEvent = mongoose.model('StreamEvent', streamEventSchema);
export default StreamEvent;
