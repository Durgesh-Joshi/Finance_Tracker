const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const Fd = require("../models/Fd");

// Multer storage setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

// GET all FDs
router.get("/", async (req, res) => {
  try {
    const fds = await Fd.find().sort({ createdAt: -1 });
    res.json(fds);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error fetching FDs" });
  }
});

// POST new FD with file upload
router.post("/add", upload.single("receipt"), async (req, res) => {
  try {
    console.log("req.body:", req.body);
    console.log("req.file:", req.file);

    const {
      fdHolderName, fdType, bankName, fdNumber,
      startDate, maturityDate, principalAmount, interestRate,
      paymentMode, comments
    } = req.body;

    if (!fdHolderName || !fdType || !bankName || !fdNumber || !startDate || !maturityDate || !principalAmount || !interestRate || !paymentMode) {
      return res.status(400).json({ message: "All required fields must be filled" });
    }

    const newFd = new Fd({
      fdHolderName,
      fdType,
      bankName,
      fdNumber,
      startDate,
      maturityDate,
      principalAmount,
      interestRate,
      paymentMode,
      receipt: req.file ? req.file.filename : null,
      comments
    });

    const savedFd = await newFd.save();
    res.status(201).json(savedFd);
  } catch (err) {
    console.error("Error adding FD:", err);
    res.status(500).json({ message: "Server error adding FD", error: err.message });
  }
});

module.exports = router;
