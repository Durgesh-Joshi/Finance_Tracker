const mongoose = require("mongoose");

const mutualFundSchema = new mongoose.Schema(
  {
    investorName: { type: String, required: true },
    investmentType: { type: String, required: true },
    schemeName: { type: String, required: true },
    fundType: { type: String, required: true },
    startDate: { type: Date, required: true },
    sipDate: { type: Number },
    amountInvested: { type: Number, required: true },
    navAtPurchase: { type: Number, required: true },
    unitsPurchased: { type: Number, required: true },
    paymentMode: { type: String, required: true },
    receipt: { type: String }, // filename of uploaded file
    comments: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("MutualFund", mutualFundSchema);
