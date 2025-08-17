const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const Expense = require("../Models/Expense");

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});
const upload = multer({ storage });

// POST add expense
router.post("/add", upload.single("receipt"), async (req, res) => {
  try {
    const { date, title, category, description, amount, currency, paymentMethod, paymentStatus, recurring, frequency, tags } = req.body;

    if (!date || !title || !category || !amount || !paymentMethod) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    const newExpense = new Expense({
      date,
      title,
      category,
      description: description || "",
      amount,
      currency: currency || "INR",
      paymentMethod,
      paymentStatus: paymentStatus || "Paid",
      recurring: recurring === "true" || recurring === true, // handle checkbox boolean
      frequency: frequency || "",
      tags: tags || "",
      receipt: req.file ? req.file.filename : null
    });

    const savedExpense = await newExpense.save();
    res.status(201).json(savedExpense);
  } catch (err) {
    console.error("Error saving expense:", err);
    res.status(500).json({ message: "Server error saving expense" });
  }
});

// GET all expenses
router.get("/", async (req, res) => {
  try {
    const expenses = await Expense.find().sort({ date: -1 });
    res.json(expenses);
  } catch (err) {
    console.error("Error fetching expenses:", err);
    res.status(500).json({ message: "Server error fetching expenses" });
  }
});

module.exports = router;
