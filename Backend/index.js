// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const path = require("path");
// const multer = require("multer");
// // const dashboardRoutes = require("./Routes/Dashboard");
// // const expenseDashboardRoutes = require("./Routes/ExpenseDashboard");
// const dashboardRoutes = require("./Routes/Dashboard");


// // Routes

// const rdRoutes = require("./Routes/RD");
// const medicalPolicyRoute = require("./Routes/medicalPolicy");

// // Models
// const Expense = require("./Models/Expense");
// const MutualFund = require("./Models/MutualFund");
// const SGB = require("./Models/Sgb");
// const fdRoutes = require("./Routes/Fd");
// const app = express();

// // -------------------- MIDDLEWARE --------------------
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // Serve uploaded files
// // app.use("/api", dashboardRoutes);
// // app.use("/api", expenseDashboardRoutes);
// app.use("/dashboard", dashboardRoutes);


// // Multer setup for file uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, "uploads/"),
//   filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
// });
// const upload = multer({ storage });

// // -------------------- ROUTES --------------------

// // FD routes
// app.use("/fd", fdRoutes);

// // RD routes
// app.use("/rd", rdRoutes);



// // -------------------- EXPENSES ROUTE --------------------
// app.post("/expenses", upload.single("receipt"), async (req, res) => {
//   try {
//     const data = {
//       ...req.body,
//       amount: Number(req.body.amount),
//       recurring: req.body.recurring === "true",
//       receipt: req.file ? req.file.filename : null,
//     };
//     const expense = new Expense(data);
//     await expense.save();
//     res.json({ message: "Expense saved!", expense });
//   } catch (err) {
//     console.error("Error saving expense:", err);
//     res.status(500).json({ message: "Error saving expense", error: err.message });
//   }
// });

// // -------------------- MUTUAL FUNDS ROUTE --------------------
// app.post("/mutualfunds", upload.single("receipt"), async (req, res) => {
//   try {
//     const data = {
//       ...req.body,
//       startDate: req.body.startDate ? new Date(req.body.startDate) : null,
//       sipDate: req.body.sipDate ? Number(req.body.sipDate) : null,
//       amountInvested: Number(req.body.amountInvested),
//       navAtPurchase: Number(req.body.navAtPurchase),
//       unitsPurchased: Number(req.body.unitsPurchased),
//       receipt: req.file ? req.file.filename : null,
//     };
//     const mf = new MutualFund(data);
//     await mf.save();
//     res.json({ message: "Mutual Fund entry saved!", mf });
//   } catch (err) {
//     console.error("Error saving mutual fund:", err);
//     res.status(500).json({ message: "Error saving mutual fund", error: err.message });
//   }
// });

// // -------------------- SGB ROUTE --------------------
// app.post("/sgb", upload.single("receipt"), async (req, res) => {
//   try {
//     const sgbData = {
//       investorName: req.body.investorName,
//       seriesName: req.body.seriesName,
//       issueDate: req.body.issueDate ? new Date(req.body.issueDate) : null,
//       maturityDate: req.body.maturityDate ? new Date(req.body.maturityDate) : null,
//       quantity: req.body.quantity ? Number(req.body.quantity) : 0,
//       issuePricePerGram: req.body.issuePricePerGram ? Number(req.body.issuePricePerGram) : 0,
//       totalAmountInvested: req.body.totalAmountInvested ? Number(req.body.totalAmountInvested) : 0,
//       paymentMode: req.body.paymentMode,
//       nextInterestPaymentDate: req.body.nextInterestPaymentDate ? new Date(req.body.nextInterestPaymentDate) : null,
//       receipt: req.file ? req.file.filename : null,
//       comments: req.body.comments || ""
//     };
//     const sgb = new SGB(sgbData);
//     await sgb.save();
//     res.json({ message: "SGB entry saved!", sgb });
//   } catch (err) {
//     console.error("Error saving SGB:", err);
//     res.status(500).json({ message: "Error saving SGB", error: err.message });
//   }
// });

// // -------------------- RD ROUTE --------------------
// app.post("/rd", upload.single("receipt"), async (req, res) => {
//   try {
//     // const RD = require("./Models/RD"); // Make sure RD model exists
//     const rdData = {
//       holderName: req.body.holderName,
//       rdType: req.body.rdType,
//       bankName: req.body.bankName,
//       rdNumber: req.body.rdNumber,
//       startDate: req.body.startDate ? new Date(req.body.startDate) : null,
//       deductionDate: req.body.deductionDate ? new Date(req.body.deductionDate) : null,
//       maturityDate: req.body.maturityDate ? new Date(req.body.maturityDate) : null,
//       monthlyInstallment: req.body.monthlyInstallment ? Number(req.body.monthlyInstallment) : 0,
//       interestRate: req.body.interestRate ? Number(req.body.interestRate) : 0,
//       paymentMode: req.body.paymentMode,
//       receipt: req.file ? req.file.filename : null,
//       comments: req.body.comments || ""
//     };
//     const rd = new RD(rdData);
//     await rd.save();
//     res.json({ message: "RD entry saved!", rd });
//   } catch (err) {
//     console.error("Error saving RD:", err);
//     res.status(500).json({ message: "Error saving RD", error: err.message });
//   }
// });

// // -------------------- MEDICAL POLICY ROUTE --------------------
// app.post("/medicalpolicy", upload.single("receipt"), async (req, res) => {
//   try {
//     const MedicalPolicy = require("./Models/MedicalPolicy");
//     const policyData = {
//       holderName: req.body.holderName,
//       policyNumber: req.body.policyNumber,
//       insuranceCompany: req.body.insuranceCompany,
//       policyType: req.body.policyType,
//       coverageAmount: req.body.coverageAmount ? Number(req.body.coverageAmount) : 0,
//       premiumAmount: req.body.premiumAmount ? Number(req.body.premiumAmount) : 0,
//       startDate: req.body.startDate ? new Date(req.body.startDate) : null,
//       expiryDate: req.body.expiryDate ? new Date(req.body.expiryDate) : null,
//       paymentMode: req.body.paymentMode,
//       receipt: req.file ? req.file.filename : null,
//       preferredHospitals: req.body.preferredHospitals || "",
//       comments: req.body.comments || ""
//     };
//     const policy = new MedicalPolicy(policyData);
//     await policy.save();
//     res.json({ message: "Medical Policy saved!", policy });
//   } catch (err) {
//     console.error("Error saving Medical Policy:", err);
//     res.status(500).json({ message: "Error saving Medical Policy", error: err.message });
//   }
// });

// // -------------------- MONGODB CONNECTION --------------------
// mongoose.connect("mongodb://localhost:27017/Finance", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log("MongoDB Connected"))
// .catch(err => console.error("MongoDB connection failed:", err));

// // -------------------- START SERVER --------------------
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// ---------------- IMPORTS ----------------
// const express = require("express");
// const cors = require("cors");
// const path = require("path");
// const mongoose = require("mongoose");

// // Import routes
// const fdRoutes = require("./Routes/Fd");
// const expenseRoutes = require("./Routes/Expense");
// const mutualFundRoutes = require("./Routes/MutualFund");
// const sgbRoutes = require("./Routes/SGB");
// const medicalPolicyRoutes = require("./Routes/MedicalPolicy");
// const rdRoutes = require("./Routes/RD");
// const dashboardRoutes = require("./Routes/Dashboard");
// const app = express();

// // ---------------- MIDDLEWARE ----------------
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // Serve uploaded files

// // ---------------- ROUTES ----------------
// app.use("/dashboard/fds", fdRoutes);
// app.use("/dashboard/expenses", expenseRoutes);
// app.use("/dashboard/mutualfunds", mutualFundRoutes);
// app.use("/dashboard/sgb", sgbRoutes);
// app.use("/medicalpolicy", medicalPolicyRoutes);
// app.use("/rd", rdRoutes);
// app.use("/dashboard", dashboardRoutes);

// // ---------------- MONGODB CONNECTION ----------------
// mongoose.connect("mongodb://localhost:27017/Finance")
//   .then(() => console.log("✅ MongoDB Connected"))
//   .catch(err => console.error("❌ MongoDB connection failed:", err));

// // ---------------- START SERVER ----------------
// const PORT = 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");

const fdRoutes = require("./Routes/Fd");
const expenseRoutes = require("./Routes/Expense");
const mutualFundRoutes = require("./Routes/MutualFund");
const sgbRoutes = require("./Routes/SGB");
const medicalPolicyRoutes = require("./Routes/MedicalPolicy");
const rdRoutes = require("./Routes/RD");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Consistent, lowercase, plural endpoints
app.use("/dashboard/fds", fdRoutes);
app.use("/dashboard/expenses", expenseRoutes);
app.use("/dashboard/mutualfunds", mutualFundRoutes);
app.use("/dashboard/sgb", sgbRoutes);
app.use("/dashboard/medicalpolicies", medicalPolicyRoutes);
app.use("/rd", rdRoutes);


mongoose.connect("mongodb://localhost:27017/Finance")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB connection failed:", err));

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

