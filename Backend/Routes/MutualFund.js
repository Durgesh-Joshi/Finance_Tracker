const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const MutualFund = require("../Models/MutualFund");

// Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, path.join(__dirname, "..", "uploads")),
  filename: (req, file, cb) => {
    const safeName = file.originalname.replace(/\s+/g, "_");
    cb(null, Date.now() + "_" + safeName);
  },
});

const upload = multer({ storage });

// POST: Add Mutual Fund
router.post("/", upload.single("receipt"), async (req, res) => {
  try {
    const {
      investorName,
      investmentType,
      schemeName,
      fundType,
      startDate,
      sipDate,
      amountInvested,
      navAtPurchase,
      unitsPurchased,
      paymentMode,
      comments,
    } = req.body;

    const fund = new MutualFund({
      investorName,
      investmentType,
      schemeName,
      fundType,
      startDate,
      sipDate: sipDate ? Number(sipDate) : undefined,
      amountInvested: Number(amountInvested),
      navAtPurchase: Number(navAtPurchase),
      unitsPurchased: Number(unitsPurchased),
      paymentMode,
      comments,
      receipt: req.file ? req.file.filename : undefined,
    });

    await fund.save();

    res.json({ success: true, message: "✅ Mutual Fund saved successfully!" });
  } catch (err) {
    console.error("Error saving Mutual Fund:", err);
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET: Fetch all Mutual Funds
router.get("/", async (req, res) => {
  try {
    const funds = await MutualFund.find().sort({ createdAt: -1 });
    const formattedFunds = funds.map((f) => ({
      investorName: f.investorName,
      investmentType: f.investmentType,
      schemeName: f.schemeName,
      fundType: f.fundType,
      startDate: f.startDate,
      sipDate: f.sipDate,
      amountInvested: f.amountInvested,
      navAtPurchase: f.navAtPurchase,
      unitsPurchased: f.unitsPurchased,
      paymentMode: f.paymentMode,
      comments: f.comments || "",
    }));
    res.json({ success: true, data: formattedFunds });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error fetching funds" });
  }
});

module.exports = router;
