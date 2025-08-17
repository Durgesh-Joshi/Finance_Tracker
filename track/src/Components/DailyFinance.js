import React, { useState } from "react";

export default function DailyFinance() {
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split("T")[0],
    title: "",
    category: "",
    description: "",
    amount: "",
    currency: "INR",
    paymentMethod: "",
    paymentStatus: "Paid",
    recurring: false,
    frequency: "",
    tags: "",
    receipt: null
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.amount || !formData.category || !formData.title) {
      alert("Please fill all required fields");
      return;
    }

    try {
      // Prepare form data for backend
      const fd = new FormData();
      for (const key in formData) {
        if (formData[key] !== null) {
          fd.append(key, formData[key]);
        }
      }

      const res = await fetch("http://localhost:5000/dashboard/expenses/add", {
        method: "POST",
        body: fd
      });

      const data = await res.json();
      console.log("Saved Expense:", data);

      alert("Expense added successfully!");

      // Reset form
      setFormData({
        date: new Date().toISOString().split("T")[0],
        title: "",
        category: "",
        description: "",
        amount: "",
        currency: "INR",
        paymentMethod: "",
        paymentStatus: "Paid",
        recurring: false,
        frequency: "",
        tags: "",
        receipt: null
      });

    } catch (err) {
      console.error("Error saving expense:", err);
      alert("Failed to save expense.");
    }
  };

  return (
    <section className="py-10" style={{ minHeight: "100vh" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-200">
              <h2 className="text-center mb-6 text-indigo-600 font-bold text-3xl">
                💼 Daily Expense Tracker
              </h2>

              <form onSubmit={handleSubmit} className="row g-3">
                {/* Date */}
                <div className="col-md-6">
                  <label className="form-label font-semibold">Date of Expense *</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>

                {/* Title */}
                <div className="col-md-6">
                  <label className="form-label font-semibold">Expense Title *</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="e.g., Office Lunch"
                    className="form-control"
                  />
                </div>

                {/* Category */}
                <div className="col-md-6">
                  <label className="form-label font-semibold">Category *</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="">Select Category</option>
                    <option>Food & Drinks</option>
                    <option>Travel/Transport</option>
                    <option>Shopping</option>
                    <option>Bills & Utilities</option>
                    <option>Entertainment</option>
                    <option>Health</option>
                    <option>Others</option>
                  </select>
                </div>

                {/* Amount */}
                <div className="col-md-3">
                  <label className="form-label font-semibold">Amount (₹) *</label>
                  <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    className="form-control"
                    min="0"
                    step="0.01"
                  />
                </div>

                {/* Currency */}
                <div className="col-md-3">
                  <label className="form-label font-semibold">Currency</label>
                  <select
                    name="currency"
                    value={formData.currency}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="INR">INR</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                  </select>
                </div>

                {/* Payment Method */}
                <div className="col-md-6">
                  <label className="form-label font-semibold">Payment Method *</label>
                  <select
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="">Select Method</option>
                    <option>Cash</option>
                    <option>Credit Card</option>
                    <option>Debit Card</option>
                    <option>UPI/Online</option>
                    <option>Bank Transfer</option>
                  </select>
                </div>

                {/* Payment Status */}
                <div className="col-md-6">
                  <label className="form-label font-semibold">Payment Status</label>
                  <select
                    name="paymentStatus"
                    value={formData.paymentStatus}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option>Paid</option>
                    <option>Pending</option>
                    <option>Overdue</option>
                  </select>
                </div>

                {/* Description */}
                <div className="col-12">
                  <label className="form-label font-semibold">Description / Notes</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Enter any details..."
                    className="form-control"
                    rows="3"
                  ></textarea>
                </div>

                {/* Upload Receipt */}
                <div className="col-md-6">
                  <label className="form-label font-semibold">Upload Receipt/Invoice</label>
                  <input
                    type="file"
                    name="receipt"
                    accept="image/*,.pdf"
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>

                {/* Submit */}
                <div className="col-12 mt-4">
                  <button
                    type="submit"
                    className="btn btn-primary w-100 fw-bold shadow hover:scale-105 transition-transform duration-300"
                  >
                    Add Expense
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


// import React, { useState } from "react";
// import axios from "axios";

// export default function DailyFinance() {
//   const [formData, setFormData] = useState({
//     date: new Date().toISOString().split("T")[0],
//     title: "",
//     category: "",
//     description: "",
//     amount: "",
//     currency: "INR",
//     paymentMethod: "",
//     paymentStatus: "Paid",
//     recurring: false,
//     frequency: "",
//     tags: "",
//     receipt: null
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!formData.amount || !formData.category || !formData.title || !formData.paymentMethod) {
//       alert("Please fill all required fields");
//       return;
//     }

//     try {
//       const form = new FormData();
//       for (let key in formData) {
//         if (formData[key] !== null) form.append(key, formData[key]);
//       }

//       await axios.post("http://localhost:5000/expenses", form, {
//         headers: { "Content-Type": "multipart/form-data" }
//       });

//       alert("Expense added successfully!");

//       // Reset form
//       setFormData({
//         date: new Date().toISOString().split("T")[0],
//         title: "",
//         category: "",
//         description: "",
//         amount: "",
//         currency: "INR",
//         paymentMethod: "",
//         paymentStatus: "Paid",
//         recurring: false,
//         frequency: "",
//         tags: "",
//         receipt: null
//       });
//     } catch (err) {
//       console.error(err);
//       alert("Error adding expense. Check server console for details.");
//     }
//   };

//   return (
//     <section className="py-10" style={{ backgroundSize: "cover", backgroundPosition: "center", minHeight: "100vh" }}>
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-lg-8">
//             <div className="bg-white bg-opacity-90 p-6 md:p-8 rounded-xl shadow-lg border border-gray-200">
//               <h2 className="text-center mb-6 text-indigo-600 font-bold text-3xl">
//                 💼 Daily Expense Tracker
//               </h2>

//               <form onSubmit={handleSubmit} className="row g-3">
//                 {/* ... All your existing form fields ... */}
//                 <div className="col-12 mt-4">
//                   <button type="submit" className="btn btn-primary w-100 fw-bold shadow hover:scale-105 transition-transform duration-300">
//                     Add Expense
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import React, { Component } from "react";

// export class DailyFinance extends Component {
//   state = {
//     date: new Date().toISOString().split("T")[0],
//     title: "",
//     category: "",
//     description: "",
//     amount: "",
//     currency: "INR",
//     paymentMethod: "",
//     paymentStatus: "Paid",
//     recurring: false,
//     frequency: "",
//     tags: "",
//     receipt: null
//   };

//   handleChange = (e) => {
//     const { name, value, type, checked, files } = e.target;
//     if (type === "checkbox") {
//       this.setState({ [name]: checked });
//     } else if (type === "file") {
//       this.setState({ [name]: files[0] });
//     } else {
//       this.setState({ [name]: value });
//     }
//   };

//   handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate required fields
//     if (!this.state.title || !this.state.category || !this.state.amount || !this.state.paymentMethod) {
//       alert("Please fill all required fields");
//       return;
//     }

//     const formData = new FormData();
//     for (const key in this.state) {
//       formData.append(key, this.state[key]);
//     }

//     try {
//       const res = await fetch("http://localhost:5000/expenses", {
//         method: "POST",
//         body: formData
//       });
//       const data = await res.json();
//       console.log("Expense Saved:", data);
//       alert("Expense added successfully!");

//       // Reset form
//       this.setState({
//         date: new Date().toISOString().split("T")[0],
//         title: "",
//         category: "",
//         description: "",
//         amount: "",
//         currency: "INR",
//         paymentMethod: "",
//         paymentStatus: "Paid",
//         recurring: false,
//         frequency: "",
//         tags: "",
//         receipt: null
//       });
//     } catch (err) {
//       console.error(err);
//       alert("Error adding expense.");
//     }
//   };

//   render() {
//     return (
//       <div className="container">
//         <div className="min-h-screen bg-cover bg-center flex items-center justify-center p-4">
//           <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl border border-gray-200">
//             <h2 className="text-2xl font-bold mb-4 text-center text-primary">
//               💼 Daily Expense Tracker
//             </h2>
//             <form className="row g-3" onSubmit={this.handleSubmit}>
//               {/* Date */}
//               <div className="col-md-6">
//                 <label className="form-label fw-bold">Date *</label>
//                 <input
//                   type="date"
//                   className="form-control"
//                   name="date"
//                   value={this.state.date}
//                   onChange={this.handleChange}
//                   required
//                 />
//               </div>

//               {/* Title */}
//               <div className="col-md-6">
//                 <label className="form-label fw-bold">Expense Title *</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="e.g., Office Lunch"
//                   name="title"
//                   value={this.state.title}
//                   onChange={this.handleChange}
//                   required
//                 />
//               </div>

//               {/* Category */}
//               <div className="col-md-6">
//                 <label className="form-label fw-bold">Category *</label>
//                 <select
//                   className="form-select"
//                   name="category"
//                   value={this.state.category}
//                   onChange={this.handleChange}
//                   required
//                 >
//                   <option value="">Select Category</option>
//                   <option>Food & Drinks</option>
//                   <option>Travel/Transport</option>
//                   <option>Shopping</option>
//                   <option>Bills & Utilities</option>
//                   <option>Entertainment</option>
//                   <option>Health</option>
//                   <option>Others</option>
//                 </select>
//               </div>

//               {/* Amount */}
//               <div className="col-md-3">
//                 <label className="form-label fw-bold">Amount (₹) *</label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   placeholder="Enter Amount"
//                   min="0"
//                   name="amount"
//                   value={this.state.amount}
//                   onChange={this.handleChange}
//                   required
//                 />
//               </div>

//               {/* Currency */}
//               <div className="col-md-3">
//                 <label className="form-label fw-bold">Currency</label>
//                 <select
//                   className="form-select"
//                   name="currency"
//                   value={this.state.currency}
//                   onChange={this.handleChange}
//                 >
//                   <option value="INR">INR</option>
//                   <option value="USD">USD</option>
//                   <option value="EUR">EUR</option>
//                 </select>
//               </div>

//               {/* Payment Method */}
//               <div className="col-md-6">
//                 <label className="form-label fw-bold">Payment Method *</label>
//                 <select
//                   className="form-select"
//                   name="paymentMethod"
//                   value={this.state.paymentMethod}
//                   onChange={this.handleChange}
//                   required
//                 >
//                   <option value="">Select Method</option>
//                   <option>Cash</option>
//                   <option>Credit Card</option>
//                   <option>Debit Card</option>
//                   <option>UPI/Online</option>
//                   <option>Bank Transfer</option>
//                 </select>
//               </div>

//               {/* Payment Status */}
//               <div className="col-md-6">
//                 <label className="form-label fw-bold">Payment Status</label>
//                 <select
//                   className="form-select"
//                   name="paymentStatus"
//                   value={this.state.paymentStatus}
//                   onChange={this.handleChange}
//                 >
//                   <option>Paid</option>
//                   <option>Pending</option>
//                   <option>Overdue</option>
//                 </select>
//               </div>

//               {/* Description */}
//               <div className="col-12">
//                 <label className="form-label fw-bold">Description / Notes</label>
//                 <textarea
//                   className="form-control"
//                   rows="3"
//                   placeholder="Enter any details..."
//                   name="description"
//                   value={this.state.description}
//                   onChange={this.handleChange}
//                 ></textarea>
//               </div>

//               {/* Upload Receipt */}
//               <div className="col-md-6">
//                 <label className="form-label fw-bold">Upload Receipt/Invoice</label>
//                 <input
//                   type="file"
//                   className="form-control"
//                   name="receipt"
//                   onChange={this.handleChange}
//                 />
//               </div>

//               {/* Recurring */}
//               <div className="col-md-6 d-flex align-items-center">
//                 <div className="form-check">
//                   <input
//                     type="checkbox"
//                     name="recurring"
//                     checked={this.state.recurring}
//                     onChange={this.handleChange}
//                     className="form-check-input"
//                     id="recurringCheck"
//                   />
//                   <label className="form-check-label" htmlFor="recurringCheck">
//                     Recurring Expense
//                   </label>
//                 </div>
//               </div>

//               {/* Frequency */}
//               {this.state.recurring && (
//                 <div className="col-md-6">
//                   <label className="form-label fw-bold">Frequency</label>
//                   <select
//                     className="form-select"
//                     name="frequency"
//                     value={this.state.frequency}
//                     onChange={this.handleChange}
//                   >
//                     <option value="">Select Frequency</option>
//                     <option>Daily</option>
//                     <option>Weekly</option>
//                     <option>Monthly</option>
//                   </select>
//                 </div>
//               )}

//               {/* Tags */}
//               <div className="col-12">
//                 <label className="form-label fw-bold">Tags (optional)</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="e.g., Work, Personal"
//                   name="tags"
//                   value={this.state.tags}
//                   onChange={this.handleChange}
//                 />
//               </div>

//               {/* Submit */}
//               <div className="col-12 text-center mt-4">
//                 <button type="submit" className="btn btn-primary px-5 py-2 rounded-pill shadow">
//                   Add Expense
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default DailyFinance;

