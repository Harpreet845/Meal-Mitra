const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../config/cloudinary');
const express = require('express');
const router = express.Router();
const Donation = require('../models/Donation');

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'mealmitra',
    allowed_formats: ['jpg', 'png', 'jpeg'],
  },
});

const upload = multer({ storage });

router.get('/', async (req, res) => {
  try {
    const donations = await Donation.find();
    res.json(donations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', upload.single('image'), async (req, res) => {
  try {
    const donation = new Donation({
      donor: req.body.donor,
      food: req.body.food,
      quantity: req.body.quantity,
      type: req.body.type,
      location: req.body.location,
      time: req.body.time,
      image: req.file?.path,
    });
    const savedDonation = await donation.save();
    res.status(201).json(savedDonation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put('/:id/accept', async (req, res) => {
  try {
    const updatedDonation =
      await Donation.findByIdAndUpdate(
        req.params.id,
        { status: 'Accepted',
          acceptedBy: req.body.acceptedBy,
          acceptedByEmail: req.body.acceptedByEmail,
        },
        { new: true }
      );

    res.json(updatedDonation);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.put('/:id/deliver', async (req, res) => {
  try {
    const updatedDonation =
      await Donation.findByIdAndUpdate(
        req.params.id,
        { status: 'Delivered' },
        { new: true }
      );

    res.json(updatedDonation);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Donation.findByIdAndDelete(req.params.id);
    res.json({ message: 'Donation deleted successfully' });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;