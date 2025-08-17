const express = require("express");
const multer = require("multer");
const path = require("path");
const RD = require("../Models/RD");

const router = express.Router();

// Multer setup for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

// POST /rd
router.post("/", upload.single("receipt"), async (req, res) => {
  try {
    const data = {
      holderName: req.body.holderName,
      rdType: req.body.rdType,
      bankName: req.body.bankName,
      rdNumber: req.body.rdNumber,
      startDate: req.body.startDate,
      deductionDate: req.body.deductionDate,
      maturityDate: req.body.maturityDate,
      monthlyInstallment: Number(req.body.monthlyInstallment),
      interestRate: Number(req.body.interestRate),
      paymentMode: req.body.paymentMode,
      receipt: req.file ? req.file.filename : null,
      comments: req.body.comments
    };

    const rd = new RD(data);
    await rd.save();

    res.json({ message: "RD saved successfully!", rd });
  } catch (err) {
    console.error("Error saving RD:", err);
    res.status(500).json({ message: "Error saving RD", error: err.message });
  }
});

// GET all RD entries
router.get("/", async (req, res) => {
  try {
    const rds = await RD.find().sort({ createdAt: -1 });
    res.json(rds);
  } catch (err) {
    console.error("Error fetching RDs:", err);
    res.status(500).json({ message: "Error fetching RDs", error: err.message });
  }
});

module.exports = router;
