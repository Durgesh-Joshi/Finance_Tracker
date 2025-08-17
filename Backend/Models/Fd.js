const mongoose = require("mongoose");

const FdSchema = new mongoose.Schema({
  fdHolderName: { type: String, required: true },
  fdType: { type: String, required: true },
  bankName: { type: String, required: true },
  fdNumber: { type: String, required: true, unique: true },
  principalAmount: { type: Number, required: true },
  interestRate: { type: Number, required: true },
  startDate: { type: Date, required: true },
  maturityDate: { type: Date, required: true },
  paymentMode: { type: String, required: true },
  receipt: { type: String, default: null },
  comments: { type: String, default: "" }
}, { timestamps: true });

module.exports = mongoose.models.Fd || mongoose.model("Fd", FdSchema, "fds");
