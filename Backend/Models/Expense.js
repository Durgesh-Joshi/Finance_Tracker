const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  title: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, default: "" },
  amount: { type: Number, required: true },
  currency: { type: String, default: "INR" },
  paymentMethod: { type: String, required: true },
  paymentStatus: { type: String, default: "Paid" },
  recurring: { type: Boolean, default: false },
  frequency: { type: String, default: "" },
  tags: { type: String, default: "" },
  receipt: { type: String, default: null }
}, { timestamps: true }); // this adds createdAt and updatedAt automatically

module.exports = mongoose.model("Expense", expenseSchema);
