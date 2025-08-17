const express = require("express");
const multer = require("multer");
const path = require("path");
const MedicalPolicy = require("../Models/MedicalPolicy");

const router = express.Router();

// Multer config for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

// POST /medicalpolicy
router.post("/", upload.single("receipt"), async (req, res) => {
  try {
    const data = {
      holderName: req.body.holderName,
      policyNumber: req.body.policyNumber,
      insuranceCompany: req.body.insuranceCompany,
      policyType: req.body.policyType,
      coverageAmount: Number(req.body.coverageAmount),
      premiumAmount: Number(req.body.premiumAmount),
      startDate: req.body.startDate,
      expiryDate: req.body.expiryDate,
      paymentMode: req.body.paymentMode,
      receipt: req.file ? req.file.filename : null,
      preferredHospitals: req.body.preferredHospitals,
      comments: req.body.comments
    };

    const policy = new MedicalPolicy(data);
    await policy.save();

    res.json({ message: "Medical Policy saved successfully!", policy });
  } catch (err) {
    console.error("Error saving Medical Policy:", err);
    res.status(500).json({ message: "Error saving Medical Policy", error: err.message });
  }
});

// GET all policies
router.get("/", async (req, res) => {
  try {
    const policies = await MedicalPolicy.find().sort({ createdAt: -1 });
    res.json(policies);
  } catch (err) {
    console.error("Error fetching Medical Policies:", err);
    res.status(500).json({ message: "Error fetching Medical Policies", error: err.message });
  }
});

module.exports = router;
