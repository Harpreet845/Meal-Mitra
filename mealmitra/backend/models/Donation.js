const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  donor: {
    type: String,
    required: true,
  },
  food: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
    },
  image: {
    type: String,
  },
  status: {
  type: String,
  default: 'Available',
  },
  acceptedBy: {
    type: String,
    default: '',
  },
  acceptedByEmail: {
    type: String,
    default: '',
  }
});

module.exports = mongoose.model('Donation', donationSchema);