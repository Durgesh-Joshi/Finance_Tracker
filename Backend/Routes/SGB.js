const express = require("express");
const multer = require("multer");
const path = require("path");
const SGB = require("../Models/SGB");

const router = express.Router();

// Setup multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// POST /dashboard/sgb
router.post("/", upload.single("receipt"), async (req, res) => {
  try {
    const data = {
      investorName: req.body.investorName,
      seriesName: req.body.seriesName,
      issueDate: req.body.issueDate,
      maturityDate: req.body.maturityDate,
      quantity: Number(req.body.quantity),
      issuePricePerGram: Number(req.body.issuePricePerGram),
      totalAmountInvested: Number(req.body.totalAmountInvested),
      paymentMode: req.body.paymentMode,
      nextInterestPaymentDate: req.body.nextInterestPaymentDate,
      receipt: req.file ? req.file.filename : null,
      comments: req.body.comments,
    };

    const sgb = new SGB(data);
    await sgb.save();

    res.json({ message: "SGB saved successfully!", sgb });
  } catch (err) {
    console.error("Error saving SGB:", err);
    res.status(500).json({ message: "Error saving SGB", error: err.message });
  }
});

// GET /dashboard/sgb (optional: fetch all SGBs)
router.get("/", async (req, res) => {
  try {
    const sgbs = await SGB.find().sort({ createdAt: -1 });
    res.json(sgbs);
  } catch (err) {
    console.error("Error fetching SGBs:", err);
    res.status(500).json({ message: "Error fetching SGBs", error: err.message });
  }
});

module.exports = router;
