const mongoose = require("mongoose");

const rdSchema = new mongoose.Schema({
  holderName: { type: String, required: true },
  rdType: { type: String, required: true },
  bankName: { type: String, required: true },
  rdNumber: { type: String, required: true },
  startDate: { type: Date, required: true },
  deductionDate: { type: Date, required: true },
  maturityDate: { type: Date, required: true },
  monthlyInstallment: { type: Number, required: true },
  interestRate: { type: Number, required: true },
  paymentMode: { type: String, required: true },
  receipt: { type: String, default: null },
  comments: { type: String }
}, { timestamps: true });

module.exports = mongoose.models.RD || mongoose.model("RD", rdSchema, "RD");
