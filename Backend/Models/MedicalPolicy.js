const mongoose = require("mongoose");

const medicalPolicySchema = new mongoose.Schema({
  holderName: { type: String, required: true },
  policyNumber: { type: String, required: true },
  insuranceCompany: { type: String, required: true },
  policyType: { type: String, required: true },
  coverageAmount: { type: Number, required: true },
  premiumAmount: { type: Number, required: true },
  startDate: { type: Date, required: true },
  expiryDate: { type: Date, required: true },
  paymentMode: { type: String, required: true },
  receipt: { type: String, default: null },
  preferredHospitals: { type: String },
  comments: { type: String }
}, { timestamps: true });

// Explicitly name the collection "medicalpolicies" (lowercase, plural)
module.exports = mongoose.models.MedicalPolicy || mongoose.model("MedicalPolicy", medicalPolicySchema, "medicalpolicies");