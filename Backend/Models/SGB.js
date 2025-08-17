// // // 
// // const mongoose = require("mongoose");

// // const sgbSchema = new mongoose.Schema(
// //   {
// //     investorName: { type: String, required: true },
// //     seriesName: { type: String, required: true },
// //     issueDate: { type: Date, required: true },
// //     maturityDate: { type: Date, required: true },
// //     quantity: { type: Number, required: true },
// //     issuePricePerGram: { type: Number, required: true },
// //     totalAmountInvested: { type: Number, required: true },
// //     paymentMode: { type: String, required: true },
// //     nextInterestPaymentDate: { type: Date, required: true },
// //     receipt: { type: String },
// //     comments: { type: String },
// //   },
// //   { timestamps: true }
// // );

// // // Prevent OverwriteModelError
// // module.exports = mongoose.models.SGB || mongoose.model("SGB", sgbSchema, "SGB");

// const mongoose = require("mongoose");

// const sgbSchema = new mongoose.Schema(
//   {
//     investorName: { type: String, required: true },
//     seriesName: { type: String, required: true },
//     issueDate: { type: Date, required: true },
//     maturityDate: { type: Date, required: true },
//     quantity: { type: Number, required: true },
//     issuePricePerGram: { type: Number, required: true },
//     totalAmountInvested: { type: Number, required: true },
//     paymentMode: { type: String, required: true },
//     nextInterestPaymentDate: { type: Date, required: true },
//     receipt: { type: String },
//     comments: { type: String },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.models.SGB || mongoose.model("SGB", sgbSchema, "SGB");

const mongoose = require("mongoose");

const sgbSchema = new mongoose.Schema(
  {
    investorName: { type: String, required: true },
    seriesName: { type: String, required: true },
    issueDate: { type: Date, required: true },
    maturityDate: { type: Date, required: true },
    quantity: { type: Number, required: true },
    issuePricePerGram: { type: Number, required: true },
    totalAmountInvested: { type: Number, required: true },
    paymentMode: { type: String, required: true },
    nextInterestPaymentDate: { type: Date, required: true },
    receipt: { type: String },
    comments: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.models.SGB || mongoose.model("SGB", sgbSchema, "SGB");
