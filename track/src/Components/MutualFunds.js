// // // // // // // // // // // import React, { Component } from "react";

// // // // // // // // // // // export class MutualFunds extends Component {
// // // // // // // // // // //   state = {
// // // // // // // // // // //     investorName: "",
// // // // // // // // // // //     investmentType: "",
// // // // // // // // // // //     schemeName: "",
// // // // // // // // // // //     fundType: "",
// // // // // // // // // // //     startDate: new Date().toISOString().split("T")[0],
// // // // // // // // // // //     sipDate: "",
// // // // // // // // // // //     amountInvested: "",
// // // // // // // // // // //     navAtPurchase: "",
// // // // // // // // // // //     unitsPurchased: "",
// // // // // // // // // // //     paymentMode: "",
// // // // // // // // // // //     receipt: null,
// // // // // // // // // // //     comments: ""
// // // // // // // // // // //   };

// // // // // // // // // // //   handleChange = (e) => {
// // // // // // // // // // //     const { name, value, type, files } = e.target;
// // // // // // // // // // //     if (type === "file") {
// // // // // // // // // // //       this.setState({ [name]: files[0] });
// // // // // // // // // // //     } else {
// // // // // // // // // // //       this.setState({ [name]: value });
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   handleSubmit = async (e) => {
// // // // // // // // // // //     e.preventDefault();

// // // // // // // // // // //     // Validate required fields
// // // // // // // // // // //     const requiredFields = [
// // // // // // // // // // //       "investorName",
// // // // // // // // // // //       "investmentType",
// // // // // // // // // // //       "schemeName",
// // // // // // // // // // //       "fundType",
// // // // // // // // // // //       "startDate",
// // // // // // // // // // //       "amountInvested",
// // // // // // // // // // //       "navAtPurchase",
// // // // // // // // // // //       "unitsPurchased",
// // // // // // // // // // //       "paymentMode"
// // // // // // // // // // //     ];
// // // // // // // // // // //     for (let field of requiredFields) {
// // // // // // // // // // //       if (!this.state[field]) {
// // // // // // // // // // //         alert(`Please fill ${field}`);
// // // // // // // // // // //         return;
// // // // // // // // // // //       }
// // // // // // // // // // //     }

// // // // // // // // // // //     const formData = new FormData();
// // // // // // // // // // //     for (const key in this.state) {
// // // // // // // // // // //       formData.append(key, this.state[key]);
// // // // // // // // // // //     }

// // // // // // // // // // //     try {
// // // // // // // // // // //       const res = await fetch("http://localhost:5000/mutualfunds/add", {
// // // // // // // // // // //         method: "POST",
// // // // // // // // // // //         body: formData
// // // // // // // // // // //       });

// // // // // // // // // // //       if (!res.ok) {
// // // // // // // // // // //         const text = await res.text(); // show raw server response if error
// // // // // // // // // // //         console.error("Server response:", text);
// // // // // // // // // // //         throw new Error("Failed to save Mutual Fund");
// // // // // // // // // // //       }

// // // // // // // // // // //       const data = await res.json();
// // // // // // // // // // //       console.log("Mutual Fund Saved:", data);
// // // // // // // // // // //       alert("Mutual Fund entry saved successfully!");

// // // // // // // // // // //       // Reset form
// // // // // // // // // // //       this.setState({
// // // // // // // // // // //         investorName: "",
// // // // // // // // // // //         investmentType: "",
// // // // // // // // // // //         schemeName: "",
// // // // // // // // // // //         fundType: "",
// // // // // // // // // // //         startDate: new Date().toISOString().split("T")[0],
// // // // // // // // // // //         sipDate: "",
// // // // // // // // // // //         amountInvested: "",
// // // // // // // // // // //         navAtPurchase: "",
// // // // // // // // // // //         unitsPurchased: "",
// // // // // // // // // // //         paymentMode: "",
// // // // // // // // // // //         receipt: null,
// // // // // // // // // // //         comments: ""
// // // // // // // // // // //       });

// // // // // // // // // // //     } catch (err) {
// // // // // // // // // // //       console.error(err);
// // // // // // // // // // //       alert("Error saving mutual fund entry. Check console for details.");
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   render() {
// // // // // // // // // // //     return (
// // // // // // // // // // //       <div className="container min-h-screen bg-cover bg-center flex items-center justify-center p-4">
// // // // // // // // // // //         <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl border border-gray-200">
// // // // // // // // // // //           <h2 className="text-2xl font-bold mb-4 text-center text-primary">Mutual Fund Entry Form</h2>
// // // // // // // // // // //           <form className="row g-3" onSubmit={this.handleSubmit}>
// // // // // // // // // // //             {/* Investor Name */}
// // // // // // // // // // //             <div className="col-md-6">
// // // // // // // // // // //               <label className="form-label fw-bold">Investor Name *</label>
// // // // // // // // // // //               <input type="text" name="investorName" className="form-control" placeholder="Enter Investor Name" value={this.state.investorName} onChange={this.handleChange} required />
// // // // // // // // // // //             </div>

// // // // // // // // // // //             {/* Investment Type */}
// // // // // // // // // // //             <div className="col-md-6">
// // // // // // // // // // //               <label className="form-label fw-bold">Investment Type *</label>
// // // // // // // // // // //               <select name="investmentType" className="form-select" value={this.state.investmentType} onChange={this.handleChange} required>
// // // // // // // // // // //                 <option value="">Select Type</option>
// // // // // // // // // // //                 <option value="sip">SIP</option>
// // // // // // // // // // //                 <option value="lumpsum">Lump Sum</option>
// // // // // // // // // // //               </select>
// // // // // // // // // // //             </div>

// // // // // // // // // // //             {/* Scheme Name */}
// // // // // // // // // // //             <div className="col-md-6">
// // // // // // // // // // //               <label className="form-label fw-bold">Scheme Name *</label>
// // // // // // // // // // //               <input type="text" name="schemeName" className="form-control" placeholder="Enter Scheme Name" value={this.state.schemeName} onChange={this.handleChange} required />
// // // // // // // // // // //             </div>

// // // // // // // // // // //             {/* Fund Type */}
// // // // // // // // // // //             <div className="col-md-6">
// // // // // // // // // // //               <label className="form-label fw-bold">Fund Type *</label>
// // // // // // // // // // //               <select name="fundType" className="form-select" value={this.state.fundType} onChange={this.handleChange} required>
// // // // // // // // // // //                 <option value="">Select Fund Type</option>
// // // // // // // // // // //                 <option value="equity">Equity</option>
// // // // // // // // // // //                 <option value="debt">Debt</option>
// // // // // // // // // // //                 <option value="hybrid">Hybrid</option>
// // // // // // // // // // //               </select>
// // // // // // // // // // //             </div>

// // // // // // // // // // //             {/* Start Date */}
// // // // // // // // // // //             <div className="col-md-6">
// // // // // // // // // // //               <label className="form-label fw-bold">Investment Start Date *</label>
// // // // // // // // // // //               <input type="date" name="startDate" className="form-control" value={this.state.startDate} onChange={this.handleChange} required />
// // // // // // // // // // //             </div>

// // // // // // // // // // //             {/* SIP Date */}
// // // // // // // // // // //             <div className="col-md-6">
// // // // // // // // // // //               <label className="form-label fw-bold">SIP Date</label>
// // // // // // // // // // //               <input type="number" name="sipDate" className="form-control" placeholder="Day of Month (1-31)" min="1" max="31" value={this.state.sipDate} onChange={this.handleChange} />
// // // // // // // // // // //             </div>

// // // // // // // // // // //             {/* Amount Invested */}
// // // // // // // // // // //             <div className="col-md-6">
// // // // // // // // // // //               <label className="form-label fw-bold">Amount Invested (₹) *</label>
// // // // // // // // // // //               <input type="number" name="amountInvested" className="form-control" placeholder="Enter Amount" min="0" value={this.state.amountInvested} onChange={this.handleChange} required />
// // // // // // // // // // //             </div>

// // // // // // // // // // //             {/* NAV at Purchase */}
// // // // // // // // // // //             <div className="col-md-6">
// // // // // // // // // // //               <label className="form-label fw-bold">NAV at Purchase *</label>
// // // // // // // // // // //               <input type="number" step="0.01" name="navAtPurchase" className="form-control" placeholder="Enter NAV" value={this.state.navAtPurchase} onChange={this.handleChange} required />
// // // // // // // // // // //             </div>

// // // // // // // // // // //             {/* Units Purchased */}
// // // // // // // // // // //             <div className="col-md-6">
// // // // // // // // // // //               <label className="form-label fw-bold">Units Purchased *</label>
// // // // // // // // // // //               <input type="number" step="0.01" name="unitsPurchased" className="form-control" placeholder="Enter Units" value={this.state.unitsPurchased} onChange={this.handleChange} required />
// // // // // // // // // // //             </div>

// // // // // // // // // // //             {/* Payment Mode */}
// // // // // // // // // // //             <div className="col-md-6">
// // // // // // // // // // //               <label className="form-label fw-bold">Payment Mode *</label>
// // // // // // // // // // //               <select name="paymentMode" className="form-select" value={this.state.paymentMode} onChange={this.handleChange} required>
// // // // // // // // // // //                 <option value="">Select Mode</option>
// // // // // // // // // // //                 <option value="netbanking">Net Banking</option>
// // // // // // // // // // //                 <option value="upi">UPI</option>
// // // // // // // // // // //                 <option value="cheque">Cheque</option>
// // // // // // // // // // //                 <option value="auto-debit">Auto Debit</option>
// // // // // // // // // // //               </select>
// // // // // // // // // // //             </div>

// // // // // // // // // // //             {/* Receipt Upload */}
// // // // // // // // // // //             <div className="col-md-6">
// // // // // // // // // // //               <label className="form-label fw-bold">Upload Receipt</label>
// // // // // // // // // // //               <input type="file" name="receipt" className="form-control" onChange={this.handleChange} />
// // // // // // // // // // //             </div>

// // // // // // // // // // //             {/* Comments */}
// // // // // // // // // // //             <div className="col-12">
// // // // // // // // // // //               <label className="form-label fw-bold">Any Comments</label>
// // // // // // // // // // //               <textarea name="comments" className="form-control" rows="3" placeholder="Write any additional comments here" value={this.state.comments} onChange={this.handleChange}></textarea>
// // // // // // // // // // //             </div>

// // // // // // // // // // //             {/* Submit */}
// // // // // // // // // // //             <div className="col-12 text-center">
// // // // // // // // // // //               <button type="submit" className="btn btn-success px-5 py-2 rounded-pill shadow">Save Mutual Fund Entry</button>
// // // // // // // // // // //             </div>

// // // // // // // // // // //           </form>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </div>
// // // // // // // // // // //     );
// // // // // // // // // // //   }
// // // // // // // // // // // }

// // // // // // // // // // // export default MutualFunds;

// // // // // // // // // // // 

// // // // // // // // // // import React, { Component } from "react";

// // // // // // // // // // export class MutualFunds extends Component {
// // // // // // // // // //   state = {
// // // // // // // // // //     investorName: "",
// // // // // // // // // //     investmentType: "",
// // // // // // // // // //     schemeName: "",
// // // // // // // // // //     fundType: "",
// // // // // // // // // //     startDate: new Date().toISOString().split("T")[0],
// // // // // // // // // //     sipDate: "",
// // // // // // // // // //     amountInvested: "",
// // // // // // // // // //     navAtPurchase: "",
// // // // // // // // // //     unitsPurchased: "",
// // // // // // // // // //     paymentMode: "",
// // // // // // // // // //     receipt: null,
// // // // // // // // // //     comments: ""
// // // // // // // // // //   };

// // // // // // // // // //   handleChange = (e) => {
// // // // // // // // // //     const { name, value, type, files } = e.target;
// // // // // // // // // //     if (type === "file") {
// // // // // // // // // //       this.setState({ [name]: files[0] });
// // // // // // // // // //     } else {
// // // // // // // // // //       this.setState({ [name]: value });
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   handleSubmit = async (e) => {
// // // // // // // // // //     e.preventDefault();

// // // // // // // // // //     const requiredFields = [
// // // // // // // // // //       "investorName",
// // // // // // // // // //       "investmentType",
// // // // // // // // // //       "schemeName",
// // // // // // // // // //       "fundType",
// // // // // // // // // //       "startDate",
// // // // // // // // // //       "amountInvested",
// // // // // // // // // //       "navAtPurchase",
// // // // // // // // // //       "unitsPurchased",
// // // // // // // // // //       "paymentMode"
// // // // // // // // // //     ];

// // // // // // // // // //     for (let field of requiredFields) {
// // // // // // // // // //       if (!this.state[field]) {
// // // // // // // // // //         alert(`Please fill ${field}`);
// // // // // // // // // //         return;
// // // // // // // // // //       }
// // // // // // // // // //     }

// // // // // // // // // //     const formData = new FormData();
// // // // // // // // // //     for (const key in this.state) {
// // // // // // // // // //       formData.append(key, this.state[key]);
// // // // // // // // // //     }

// // // // // // // // // //     try {
// // // // // // // // // //       const res = await fetch("http://localhost:5000/mutualfunds", {
// // // // // // // // // //         method: "POST",
// // // // // // // // // //         body: formData
// // // // // // // // // //       });

// // // // // // // // // //       if (!res.ok) {
// // // // // // // // // //         const text = await res.text();
// // // // // // // // // //         console.error("Server response:", text);
// // // // // // // // // //         throw new Error("Failed to save Mutual Fund");
// // // // // // // // // //       }

// // // // // // // // // //       const data = await res.json();
// // // // // // // // // //       console.log("Mutual Fund Saved:", data);
// // // // // // // // // //       alert("Mutual Fund entry saved successfully!");

// // // // // // // // // //       this.setState({
// // // // // // // // // //         investorName: "",
// // // // // // // // // //         investmentType: "",
// // // // // // // // // //         schemeName: "",
// // // // // // // // // //         fundType: "",
// // // // // // // // // //         startDate: new Date().toISOString().split("T")[0],
// // // // // // // // // //         sipDate: "",
// // // // // // // // // //         amountInvested: "",
// // // // // // // // // //         navAtPurchase: "",
// // // // // // // // // //         unitsPurchased: "",
// // // // // // // // // //         paymentMode: "",
// // // // // // // // // //         receipt: null,
// // // // // // // // // //         comments: ""
// // // // // // // // // //       });

// // // // // // // // // //       // Reset file input manually
// // // // // // // // // //       document.querySelector('input[name="receipt"]').value = "";

// // // // // // // // // //     } catch (err) {
// // // // // // // // // //       console.error(err);
// // // // // // // // // //       alert("Error saving mutual fund entry. Check console for details.");
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   render() {
// // // // // // // // // //     return (
// // // // // // // // // //       <div className="container min-h-screen bg-cover bg-center flex items-center justify-center p-4">
// // // // // // // // // //         <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl border border-gray-200">
// // // // // // // // // //           <h2 className="text-2xl font-bold mb-4 text-center text-primary">
// // // // // // // // // //             Mutual Fund Entry Form
// // // // // // // // // //           </h2>
// // // // // // // // // //           <form className="row g-3" onSubmit={this.handleSubmit}>
// // // // // // // // // //             {/* Investor Name */}
// // // // // // // // // //             <div className="col-md-6">
// // // // // // // // // //               <label className="form-label fw-bold">Investor Name *</label>
// // // // // // // // // //               <input
// // // // // // // // // //                 type="text"
// // // // // // // // // //                 name="investorName"
// // // // // // // // // //                 className="form-control"
// // // // // // // // // //                 placeholder="Enter Investor Name"
// // // // // // // // // //                 value={this.state.investorName}
// // // // // // // // // //                 onChange={this.handleChange}
// // // // // // // // // //                 required
// // // // // // // // // //               />
// // // // // // // // // //             </div>

// // // // // // // // // //             {/* Investment Type */}
// // // // // // // // // //             <div className="col-md-6">
// // // // // // // // // //               <label className="form-label fw-bold">Investment Type *</label>
// // // // // // // // // //               <select
// // // // // // // // // //                 name="investmentType"
// // // // // // // // // //                 className="form-select"
// // // // // // // // // //                 value={this.state.investmentType}
// // // // // // // // // //                 onChange={this.handleChange}
// // // // // // // // // //                 required
// // // // // // // // // //               >
// // // // // // // // // //                 <option value="">Select Type</option>
// // // // // // // // // //                 <option value="sip">SIP</option>
// // // // // // // // // //                 <option value="lumpsum">Lump Sum</option>
// // // // // // // // // //               </select>
// // // // // // // // // //             </div>

// // // // // // // // // //             {/* Scheme Name */}
// // // // // // // // // //             <div className="col-md-6">
// // // // // // // // // //               <label className="form-label fw-bold">Scheme Name *</label>
// // // // // // // // // //               <input
// // // // // // // // // //                 type="text"
// // // // // // // // // //                 name="schemeName"
// // // // // // // // // //                 className="form-control"
// // // // // // // // // //                 placeholder="Enter Scheme Name"
// // // // // // // // // //                 value={this.state.schemeName}
// // // // // // // // // //                 onChange={this.handleChange}
// // // // // // // // // //                 required
// // // // // // // // // //               />
// // // // // // // // // //             </div>

// // // // // // // // // //             {/* Fund Type */}
// // // // // // // // // //             <div className="col-md-6">
// // // // // // // // // //               <label className="form-label fw-bold">Fund Type *</label>
// // // // // // // // // //               <select
// // // // // // // // // //                 name="fundType"
// // // // // // // // // //                 className="form-select"
// // // // // // // // // //                 value={this.state.fundType}
// // // // // // // // // //                 onChange={this.handleChange}
// // // // // // // // // //                 required
// // // // // // // // // //               >
// // // // // // // // // //                 <option value="">Select Fund Type</option>
// // // // // // // // // //                 <option value="equity">Equity</option>
// // // // // // // // // //                 <option value="debt">Debt</option>
// // // // // // // // // //                 <option value="hybrid">Hybrid</option>
// // // // // // // // // //               </select>
// // // // // // // // // //             </div>

// // // // // // // // // //             {/* Start Date */}
// // // // // // // // // //             <div className="col-md-6">
// // // // // // // // // //               <label className="form-label fw-bold">Investment Start Date *</label>
// // // // // // // // // //               <input
// // // // // // // // // //                 type="date"
// // // // // // // // // //                 name="startDate"
// // // // // // // // // //                 className="form-control"
// // // // // // // // // //                 value={this.state.startDate}
// // // // // // // // // //                 onChange={this.handleChange}
// // // // // // // // // //                 required
// // // // // // // // // //               />
// // // // // // // // // //             </div>

// // // // // // // // // //             {/* SIP Date */}
// // // // // // // // // //             <div className="col-md-6">
// // // // // // // // // //               <label className="form-label fw-bold">SIP Date</label>
// // // // // // // // // //               <input
// // // // // // // // // //                 type="number"
// // // // // // // // // //                 name="sipDate"
// // // // // // // // // //                 className="form-control"
// // // // // // // // // //                 placeholder="Day of Month (1-31)"
// // // // // // // // // //                 min="1"
// // // // // // // // // //                 max="31"
// // // // // // // // // //                 value={this.state.sipDate}
// // // // // // // // // //                 onChange={this.handleChange}
// // // // // // // // // //               />
// // // // // // // // // //             </div>

// // // // // // // // // //             {/* Amount Invested */}
// // // // // // // // // //             <div className="col-md-6">
// // // // // // // // // //               <label className="form-label fw-bold">Amount Invested (₹) *</label>
// // // // // // // // // //               <input
// // // // // // // // // //                 type="number"
// // // // // // // // // //                 name="amountInvested"
// // // // // // // // // //                 className="form-control"
// // // // // // // // // //                 placeholder="Enter Amount"
// // // // // // // // // //                 min="0"
// // // // // // // // // //                 value={this.state.amountInvested}
// // // // // // // // // //                 onChange={this.handleChange}
// // // // // // // // // //                 required
// // // // // // // // // //               />
// // // // // // // // // //             </div>

// // // // // // // // // //             {/* NAV at Purchase */}
// // // // // // // // // //             <div className="col-md-6">
// // // // // // // // // //               <label className="form-label fw-bold">NAV at Purchase *</label>
// // // // // // // // // //               <input
// // // // // // // // // //                 type="number"
// // // // // // // // // //                 step="0.01"
// // // // // // // // // //                 name="navAtPurchase"
// // // // // // // // // //                 className="form-control"
// // // // // // // // // //                 placeholder="Enter NAV"
// // // // // // // // // //                 value={this.state.navAtPurchase}
// // // // // // // // // //                 onChange={this.handleChange}
// // // // // // // // // //                 required
// // // // // // // // // //               />
// // // // // // // // // //             </div>

// // // // // // // // // //             {/* Units Purchased */}
// // // // // // // // // //             <div className="col-md-6">
// // // // // // // // // //               <label className="form-label fw-bold">Units Purchased *</label>
// // // // // // // // // //               <input
// // // // // // // // // //                 type="number"
// // // // // // // // // //                 step="0.01"
// // // // // // // // // //                 name="unitsPurchased"
// // // // // // // // // //                 className="form-control"
// // // // // // // // // //                 placeholder="Enter Units"
// // // // // // // // // //                 value={this.state.unitsPurchased}
// // // // // // // // // //                 onChange={this.handleChange}
// // // // // // // // // //                 required
// // // // // // // // // //               />
// // // // // // // // // //             </div>

// // // // // // // // // //             {/* Payment Mode */}
// // // // // // // // // //             <div className="col-md-6">
// // // // // // // // // //               <label className="form-label fw-bold">Payment Mode *</label>
// // // // // // // // // //               <select
// // // // // // // // // //                 name="paymentMode"
// // // // // // // // // //                 className="form-select"
// // // // // // // // // //                 value={this.state.paymentMode}
// // // // // // // // // //                 onChange={this.handleChange}
// // // // // // // // // //                 required
// // // // // // // // // //               >
// // // // // // // // // //                 <option value="">Select Mode</option>
// // // // // // // // // //                 <option value="netbanking">Net Banking</option>
// // // // // // // // // //                 <option value="upi">UPI</option>
// // // // // // // // // //                 <option value="cheque">Cheque</option>
// // // // // // // // // //                 <option value="auto-debit">Auto Debit</option>
// // // // // // // // // //               </select>
// // // // // // // // // //             </div>

// // // // // // // // // //             {/* Receipt Upload */}
// // // // // // // // // //             <div className="col-md-6">
// // // // // // // // // //               <label className="form-label fw-bold">Upload Receipt</label>
// // // // // // // // // //               <input
// // // // // // // // // //                 type="file"
// // // // // // // // // //                 name="receipt"
// // // // // // // // // //                 className="form-control"
// // // // // // // // // //                 onChange={this.handleChange}
// // // // // // // // // //               />
// // // // // // // // // //             </div>

// // // // // // // // // //             {/* Comments */}
// // // // // // // // // //             <div className="col-12">
// // // // // // // // // //               <label className="form-label fw-bold">Any Comments</label>
// // // // // // // // // //               <textarea
// // // // // // // // // //                 name="comments"
// // // // // // // // // //                 className="form-control"
// // // // // // // // // //                 rows="3"
// // // // // // // // // //                 placeholder="Write any additional comments here"
// // // // // // // // // //                 value={this.state.comments}
// // // // // // // // // //                 onChange={this.handleChange}
// // // // // // // // // //               ></textarea>
// // // // // // // // // //             </div>

// // // // // // // // // //             {/* Submit */}
// // // // // // // // // //             <div className="col-12 text-center">
// // // // // // // // // //               <button
// // // // // // // // // //                 type="submit"
// // // // // // // // // //                 className="btn btn-success px-5 py-2 rounded-pill shadow"
// // // // // // // // // //               >
// // // // // // // // // //                 Save Mutual Fund Entry
// // // // // // // // // //               </button>
// // // // // // // // // //             </div>
// // // // // // // // // //           </form>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>
// // // // // // // // // //     );
// // // // // // // // // //   }
// // // // // // // // // // }

// // // // // // // // // // export default MutualFunds;

// // // // // // // // // import React, { useState } from "react";

// // // // // // // // // const MutualFunds = () => {
// // // // // // // // //   const [formData, setFormData] = useState({
// // // // // // // // //     investorName: "",
// // // // // // // // //     investmentType: "",
// // // // // // // // //     schemeName: "",
// // // // // // // // //     fundType: "",
// // // // // // // // //     startDate: "",
// // // // // // // // //     sipDate: "",
// // // // // // // // //     amountInvested: "",
// // // // // // // // //     navAtPurchase: "",
// // // // // // // // //     unitsPurchased: "",
// // // // // // // // //     paymentMode: "",
// // // // // // // // //     comments: "",
// // // // // // // // //     receipt: null,
// // // // // // // // //   });

// // // // // // // // //   const handleChange = (e) => {
// // // // // // // // //     const { name, value, files } = e.target;
// // // // // // // // //     if (name === "receipt") {
// // // // // // // // //       setFormData({ ...formData, receipt: files[0] });
// // // // // // // // //     } else {
// // // // // // // // //       setFormData({ ...formData, [name]: value });
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   const handleSubmit = async (e) => {
// // // // // // // // //     e.preventDefault();

// // // // // // // // //     const data = new FormData();
// // // // // // // // //     Object.entries(formData).forEach(([key, value]) => {
// // // // // // // // //       data.append(key, value);
// // // // // // // // //     });

// // // // // // // // //     try {
// // // // // // // // //       const res = await fetch("http://localhost:5000/mutualfunds", {
// // // // // // // // //         method: "POST",
// // // // // // // // //         body: data,
// // // // // // // // //       });

// // // // // // // // //       const result = await res.json();
// // // // // // // // //       if (res.ok) {
// // // // // // // // //         alert("✅ Mutual Fund saved successfully!");
// // // // // // // // //         setFormData({
// // // // // // // // //           investorName: "",
// // // // // // // // //           investmentType: "",
// // // // // // // // //           schemeName: "",
// // // // // // // // //           fundType: "",
// // // // // // // // //           startDate: "",
// // // // // // // // //           sipDate: "",
// // // // // // // // //           amountInvested: "",
// // // // // // // // //           navAtPurchase: "",
// // // // // // // // //           unitsPurchased: "",
// // // // // // // // //           paymentMode: "",
// // // // // // // // //           comments: "",
// // // // // // // // //           receipt: null,
// // // // // // // // //         });
// // // // // // // // //       } else {
// // // // // // // // //         alert("❌ Error: " + result.message);
// // // // // // // // //       }
// // // // // // // // //     } catch (error) {
// // // // // // // // //       console.error("Error submitting form:", error);
// // // // // // // // //       alert("❌ Failed to connect to server.");
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div className="container mt-4">
// // // // // // // // //       <h2 className="text-center text-primary mb-4">Mutual Fund Entry Form</h2>

// // // // // // // // //       <form onSubmit={handleSubmit} className="row g-3">
// // // // // // // // //         {/* Left Column */}
// // // // // // // // //         <div className="col-md-6">
// // // // // // // // //           <label className="form-label">Investor Name *</label>
// // // // // // // // //           <input
// // // // // // // // //             type="text"
// // // // // // // // //             className="form-control"
// // // // // // // // //             name="investorName"
// // // // // // // // //             value={formData.investorName}
// // // // // // // // //             onChange={handleChange}
// // // // // // // // //             required
// // // // // // // // //           />

// // // // // // // // //           <label className="form-label mt-3">Investment Type *</label>
// // // // // // // // //           <select
// // // // // // // // //             className="form-control"
// // // // // // // // //             name="investmentType"
// // // // // // // // //             value={formData.investmentType}
// // // // // // // // //             onChange={handleChange}
// // // // // // // // //             required
// // // // // // // // //           >
// // // // // // // // //             <option value="">Select Type</option>
// // // // // // // // //             <option value="SIP">SIP</option>
// // // // // // // // //             <option value="Lumpsum">Lumpsum</option>
// // // // // // // // //           </select>

// // // // // // // // //           <label className="form-label mt-3">Scheme Name *</label>
// // // // // // // // //           <input
// // // // // // // // //             type="text"
// // // // // // // // //             className="form-control"
// // // // // // // // //             name="schemeName"
// // // // // // // // //             value={formData.schemeName}
// // // // // // // // //             onChange={handleChange}
// // // // // // // // //             required
// // // // // // // // //           />

// // // // // // // // //           <label className="form-label mt-3">Fund Type *</label>
// // // // // // // // //           <select
// // // // // // // // //             className="form-control"
// // // // // // // // //             name="fundType"
// // // // // // // // //             value={formData.fundType}
// // // // // // // // //             onChange={handleChange}
// // // // // // // // //             required
// // // // // // // // //           >
// // // // // // // // //             <option value="">Select Fund Type</option>
// // // // // // // // //             <option value="Equity">Equity</option>
// // // // // // // // //             <option value="Debt">Debt</option>
// // // // // // // // //             <option value="Hybrid">Hybrid</option>
// // // // // // // // //           </select>

// // // // // // // // //           <label className="form-label mt-3">Start Date *</label>
// // // // // // // // //           <input
// // // // // // // // //             type="date"
// // // // // // // // //             className="form-control"
// // // // // // // // //             name="startDate"
// // // // // // // // //             value={formData.startDate}
// // // // // // // // //             onChange={handleChange}
// // // // // // // // //             required
// // // // // // // // //           />
// // // // // // // // //         </div>

// // // // // // // // //         {/* Right Column */}
// // // // // // // // //         <div className="col-md-6">
// // // // // // // // //           <label className="form-label">SIP Date (if SIP)</label>
// // // // // // // // //           <input
// // // // // // // // //             type="date"
// // // // // // // // //             className="form-control"
// // // // // // // // //             name="sipDate"
// // // // // // // // //             value={formData.sipDate}
// // // // // // // // //             onChange={handleChange}
// // // // // // // // //           />

// // // // // // // // //           <label className="form-label mt-3">Amount Invested (₹) *</label>
// // // // // // // // //           <input
// // // // // // // // //             type="number"
// // // // // // // // //             className="form-control"
// // // // // // // // //             name="amountInvested"
// // // // // // // // //             value={formData.amountInvested}
// // // // // // // // //             onChange={handleChange}
// // // // // // // // //             required
// // // // // // // // //           />

// // // // // // // // //           <label className="form-label mt-3">NAV at Purchase *</label>
// // // // // // // // //           <input
// // // // // // // // //             type="number"
// // // // // // // // //             className="form-control"
// // // // // // // // //             step="0.01"
// // // // // // // // //             name="navAtPurchase"
// // // // // // // // //             value={formData.navAtPurchase}
// // // // // // // // //             onChange={handleChange}
// // // // // // // // //             required
// // // // // // // // //           />

// // // // // // // // //           <label className="form-label mt-3">Units Purchased *</label>
// // // // // // // // //           <input
// // // // // // // // //             type="number"
// // // // // // // // //             className="form-control"
// // // // // // // // //             step="0.01"
// // // // // // // // //             name="unitsPurchased"
// // // // // // // // //             value={formData.unitsPurchased}
// // // // // // // // //             onChange={handleChange}
// // // // // // // // //             required
// // // // // // // // //           />

// // // // // // // // //           <label className="form-label mt-3">Payment Mode *</label>
// // // // // // // // //           <select
// // // // // // // // //             className="form-control"
// // // // // // // // //             name="paymentMode"
// // // // // // // // //             value={formData.paymentMode}
// // // // // // // // //             onChange={handleChange}
// // // // // // // // //             required
// // // // // // // // //           >
// // // // // // // // //             <option value="">Select Mode</option>
// // // // // // // // //             <option value="Net Banking">Net Banking</option>
// // // // // // // // //             <option value="UPI">UPI</option>
// // // // // // // // //             <option value="Debit Card">Debit Card</option>
// // // // // // // // //           </select>

// // // // // // // // //           <label className="form-label mt-3">Upload Receipt</label>
// // // // // // // // //           <input
// // // // // // // // //             type="file"
// // // // // // // // //             className="form-control"
// // // // // // // // //             name="receipt"
// // // // // // // // //             onChange={handleChange}
// // // // // // // // //           />
// // // // // // // // //         </div>

// // // // // // // // //         {/* Full Width */}
// // // // // // // // //         <div className="col-12">
// // // // // // // // //           <label className="form-label">Any Comments</label>
// // // // // // // // //           <textarea
// // // // // // // // //             className="form-control"
// // // // // // // // //             name="comments"
// // // // // // // // //             value={formData.comments}
// // // // // // // // //             onChange={handleChange}
// // // // // // // // //             rows="3"
// // // // // // // // //           ></textarea>
// // // // // // // // //         </div>

// // // // // // // // //         <div className="col-12 text-center">
// // // // // // // // //           <button type="submit" className="btn btn-primary mt-3">
// // // // // // // // //             Save Mutual Fund
// // // // // // // // //           </button>
// // // // // // // // //         </div>
// // // // // // // // //       </form>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default MutualFunds;

// // // // // // // // import React, { useState } from "react";

// // // // // // // // function MutualFunds() {
// // // // // // // //   const [formData, setFormData] = useState({
// // // // // // // //     investorName: "",
// // // // // // // //     investmentType: "",
// // // // // // // //     schemeName: "",
// // // // // // // //     fundType: "",
// // // // // // // //     startDate: "",
// // // // // // // //     sipDate: "",
// // // // // // // //     amountInvested: "",
// // // // // // // //     navAtPurchase: "",
// // // // // // // //     unitsPurchased: "",
// // // // // // // //     paymentMode: "",
// // // // // // // //     comments: ""
// // // // // // // //   });

// // // // // // // //   const handleChange = (e) => {
// // // // // // // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // // // // // // //   };

// // // // // // // //   const handleSubmit = async (e) => {
// // // // // // // //     e.preventDefault();
// // // // // // // //     try {
// // // // // // // //       const res = await fetch("http://localhost:5000/dashboard/mutualfunds", {
// // // // // // // //         method: "POST",
// // // // // // // //         headers: { "Content-Type": "application/json" },
// // // // // // // //         body: JSON.stringify(formData)
// // // // // // // //       });

// // // // // // // //       if (!res.ok) {
// // // // // // // //         const text = await res.text();
// // // // // // // //         throw new Error(`Server Error: ${text}`);
// // // // // // // //       }

// // // // // // // //       const data = await res.json();
// // // // // // // //       alert("✅ Mutual Fund added successfully!");
// // // // // // // //       console.log("Response:", data);

// // // // // // // //       setFormData({
// // // // // // // //         investorName: "",
// // // // // // // //         investmentType: "",
// // // // // // // //         schemeName: "",
// // // // // // // //         fundType: "",
// // // // // // // //         startDate: "",
// // // // // // // //         sipDate: "",
// // // // // // // //         amountInvested: "",
// // // // // // // //         navAtPurchase: "",
// // // // // // // //         unitsPurchased: "",
// // // // // // // //         paymentMode: "",
// // // // // // // //         comments: ""
// // // // // // // //       });

// // // // // // // //     } catch (err) {
// // // // // // // //       console.error("❌ Error submitting form:", err);
// // // // // // // //       alert("❌ Failed to submit form. Check console.");
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div style={{ maxWidth: "600px", margin: "auto" }}>
// // // // // // // //       <h2>Mutual Fund Form</h2>
// // // // // // // //       <form onSubmit={handleSubmit}>
// // // // // // // //         <input name="investorName" value={formData.investorName} onChange={handleChange} placeholder="Investor Name" required /><br />
// // // // // // // //         <select name="investmentType" value={formData.investmentType} onChange={handleChange} required>
// // // // // // // //           <option value="">-- Select Investment Type --</option>
// // // // // // // //           <option value="SIP">SIP</option>
// // // // // // // //           <option value="Lump Sum">Lump Sum</option>
// // // // // // // //         </select><br />
// // // // // // // //         <input name="schemeName" value={formData.schemeName} onChange={handleChange} placeholder="Scheme Name" required /><br />
// // // // // // // //         <input name="fundType" value={formData.fundType} onChange={handleChange} placeholder="Fund Type" required /><br />
// // // // // // // //         <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required /><br />
// // // // // // // //         <input type="number" name="sipDate" value={formData.sipDate} onChange={handleChange} placeholder="SIP Date (1-31)" /><br />
// // // // // // // //         <input type="number" name="amountInvested" value={formData.amountInvested} onChange={handleChange} placeholder="Amount Invested" required /><br />
// // // // // // // //         <input type="number" name="navAtPurchase" value={formData.navAtPurchase} onChange={handleChange} placeholder="NAV at Purchase" required /><br />
// // // // // // // //         <input type="number" name="unitsPurchased" value={formData.unitsPurchased} onChange={handleChange} placeholder="Units Purchased" required /><br />
// // // // // // // //         <input name="paymentMode" value={formData.paymentMode} onChange={handleChange} placeholder="Payment Mode" required /><br />
// // // // // // // //         <textarea name="comments" value={formData.comments} onChange={handleChange} placeholder="Comments" /><br />
// // // // // // // //         <button type="submit">Save Mutual Fund</button>
// // // // // // // //       </form>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // export default MutualFunds;


// // // // // // // import React, { useState } from "react";

// // // // // // // function MutualFunds() {
// // // // // // //   const [formData, setFormData] = useState({
// // // // // // //     investorName: "",
// // // // // // //     investmentType: "",
// // // // // // //     schemeName: "",
// // // // // // //     fundType: "",
// // // // // // //     startDate: "",
// // // // // // //     sipDate: "",
// // // // // // //     amountInvested: "",
// // // // // // //     navAtPurchase: "",
// // // // // // //     unitsPurchased: "",
// // // // // // //     paymentMode: "",
// // // // // // //     comments: ""
// // // // // // //   });

// // // // // // //   const handleChange = (e) => {
// // // // // // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // // // // // //   };

// // // // // // //   const handleSubmit = async (e) => {
// // // // // // //     e.preventDefault();
// // // // // // //     try {
// // // // // // //       const res = await fetch("http://localhost:5000/dashboard/mutualfunds", {
// // // // // // //         method: "POST",
// // // // // // //         headers: { "Content-Type": "application/json" },
// // // // // // //         body: JSON.stringify(formData)
// // // // // // //       });

// // // // // // //       if (!res.ok) {
// // // // // // //         const text = await res.text();
// // // // // // //         throw new Error(`Server Error: ${text}`);
// // // // // // //       }

// // // // // // //       alert("✅ Mutual Fund added successfully!");

// // // // // // //       setFormData({
// // // // // // //         investorName: "",
// // // // // // //         investmentType: "",
// // // // // // //         schemeName: "",
// // // // // // //         fundType: "",
// // // // // // //         startDate: "",
// // // // // // //         sipDate: "",
// // // // // // //         amountInvested: "",
// // // // // // //         navAtPurchase: "",
// // // // // // //         unitsPurchased: "",
// // // // // // //         paymentMode: "",
// // // // // // //         comments: ""
// // // // // // //       });
// // // // // // //     } catch (err) {
// // // // // // //       console.error("❌ Error submitting form:", err);
// // // // // // //       alert("❌ Failed to submit form. Check console.");
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="max-w-3xl mx-auto mt-10 bg-white shadow-lg rounded-2xl p-8">
// // // // // // //       <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600">
// // // // // // //         Mutual Fund Investment Form
// // // // // // //       </h2>
// // // // // // //       <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
// // // // // // //         {/* Investor Name */}
// // // // // // //         <div>
// // // // // // //           <label className="block text-gray-700 font-medium mb-2">Investor Name</label>
// // // // // // //           <input
// // // // // // //             name="investorName"
// // // // // // //             value={formData.investorName}
// // // // // // //             onChange={handleChange}
// // // // // // //             placeholder="Enter Investor Name"
// // // // // // //             required
// // // // // // //             className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400"
// // // // // // //           />
// // // // // // //         </div>

// // // // // // //         {/* Investment Type */}
// // // // // // //         <div>
// // // // // // //           <label className="block text-gray-700 font-medium mb-2">Investment Type</label>
// // // // // // //           <select
// // // // // // //             name="investmentType"
// // // // // // //             value={formData.investmentType}
// // // // // // //             onChange={handleChange}
// // // // // // //             required
// // // // // // //             className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400"
// // // // // // //           >
// // // // // // //             <option value="">-- Select --</option>
// // // // // // //             <option value="SIP">SIP</option>
// // // // // // //             <option value="Lump Sum">Lump Sum</option>
// // // // // // //           </select>
// // // // // // //         </div>

// // // // // // //         {/* Scheme Name */}
// // // // // // //         <div>
// // // // // // //           <label className="block text-gray-700 font-medium mb-2">Scheme Name</label>
// // // // // // //           <input
// // // // // // //             name="schemeName"
// // // // // // //             value={formData.schemeName}
// // // // // // //             onChange={handleChange}
// // // // // // //             placeholder="Enter Scheme Name"
// // // // // // //             required
// // // // // // //             className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400"
// // // // // // //           />
// // // // // // //         </div>

// // // // // // //         {/* Fund Type */}
// // // // // // //         <div>
// // // // // // //           <label className="block text-gray-700 font-medium mb-2">Fund Type</label>
// // // // // // //           <input
// // // // // // //             name="fundType"
// // // // // // //             value={formData.fundType}
// // // // // // //             onChange={handleChange}
// // // // // // //             placeholder="Equity / Debt / Hybrid"
// // // // // // //             required
// // // // // // //             className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400"
// // // // // // //           />
// // // // // // //         </div>

// // // // // // //         {/* Start Date */}
// // // // // // //         <div>
// // // // // // //           <label className="block text-gray-700 font-medium mb-2">Start Date</label>
// // // // // // //           <input
// // // // // // //             type="date"
// // // // // // //             name="startDate"
// // // // // // //             value={formData.startDate}
// // // // // // //             onChange={handleChange}
// // // // // // //             required
// // // // // // //             className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400"
// // // // // // //           />
// // // // // // //         </div>

// // // // // // //         {/* SIP Date */}
// // // // // // //         <div>
// // // // // // //           <label className="block text-gray-700 font-medium mb-2">SIP Date (1-31)</label>
// // // // // // //           <input
// // // // // // //             type="number"
// // // // // // //             name="sipDate"
// // // // // // //             value={formData.sipDate}
// // // // // // //             onChange={handleChange}
// // // // // // //             placeholder="Ex: 15"
// // // // // // //             className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400"
// // // // // // //           />
// // // // // // //         </div>

// // // // // // //         {/* Amount Invested */}
// // // // // // //         <div>
// // // // // // //           <label className="block text-gray-700 font-medium mb-2">Amount Invested (₹)</label>
// // // // // // //           <input
// // // // // // //             type="number"
// // // // // // //             name="amountInvested"
// // // // // // //             value={formData.amountInvested}
// // // // // // //             onChange={handleChange}
// // // // // // //             required
// // // // // // //             className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400"
// // // // // // //           />
// // // // // // //         </div>

// // // // // // //         {/* NAV at Purchase */}
// // // // // // //         <div>
// // // // // // //           <label className="block text-gray-700 font-medium mb-2">NAV at Purchase</label>
// // // // // // //           <input
// // // // // // //             type="number"
// // // // // // //             name="navAtPurchase"
// // // // // // //             value={formData.navAtPurchase}
// // // // // // //             onChange={handleChange}
// // // // // // //             required
// // // // // // //             className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400"
// // // // // // //           />
// // // // // // //         </div>

// // // // // // //         {/* Units Purchased */}
// // // // // // //         <div>
// // // // // // //           <label className="block text-gray-700 font-medium mb-2">Units Purchased</label>
// // // // // // //           <input
// // // // // // //             type="number"
// // // // // // //             name="unitsPurchased"
// // // // // // //             value={formData.unitsPurchased}
// // // // // // //             onChange={handleChange}
// // // // // // //             required
// // // // // // //             className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400"
// // // // // // //           />
// // // // // // //         </div>

// // // // // // //         {/* Payment Mode */}
// // // // // // //         <div>
// // // // // // //           <label className="block text-gray-700 font-medium mb-2">Payment Mode</label>
// // // // // // //           <input
// // // // // // //             name="paymentMode"
// // // // // // //             value={formData.paymentMode}
// // // // // // //             onChange={handleChange}
// // // // // // //             placeholder="UPI / NetBanking / Debit Card"
// // // // // // //             required
// // // // // // //             className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400"
// // // // // // //           />
// // // // // // //         </div>

// // // // // // //         {/* Comments */}
// // // // // // //         <div className="md:col-span-2">
// // // // // // //           <label className="block text-gray-700 font-medium mb-2">Comments</label>
// // // // // // //           <textarea
// // // // // // //             name="comments"
// // // // // // //             value={formData.comments}
// // // // // // //             onChange={handleChange}
// // // // // // //             placeholder="Any additional notes"
// // // // // // //             className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400"
// // // // // // //           />
// // // // // // //         </div>

// // // // // // //         {/* Submit Button */}
// // // // // // //         <div className="md:col-span-2 flex justify-center">
// // // // // // //           <button
// // // // // // //             type="submit"
// // // // // // //             className="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
// // // // // // //           >
// // // // // // //             Save Mutual Fund
// // // // // // //           </button>
// // // // // // //         </div>
// // // // // // //       </form>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // // export default MutualFunds;

// // // // // // import React, { useState } from "react";

// // // // // // function MutualFunds() {
// // // // // //   const [formData, setFormData] = useState({
// // // // // //     investorName: "",
// // // // // //     investmentType: "",
// // // // // //     schemeName: "",
// // // // // //     fundType: "",
// // // // // //     startDate: "",
// // // // // //     sipDate: "",
// // // // // //     amountInvested: "",
// // // // // //     navAtPurchase: "",
// // // // // //     unitsPurchased: "",
// // // // // //     paymentMode: "",
// // // // // //     comments: ""
// // // // // //   });

// // // // // //   const handleChange = (e) => {
// // // // // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // // // // //   };

// // // // // //   const handleSubmit = async (e) => {
// // // // // //     e.preventDefault();
// // // // // //     try {
// // // // // //       const res = await fetch("http://localhost:5000/dashboard/mutualfunds", {
// // // // // //         method: "POST",
// // // // // //         headers: { "Content-Type": "application/json" },
// // // // // //         body: JSON.stringify(formData)
// // // // // //       });

// // // // // //       if (!res.ok) {
// // // // // //         throw new Error("Failed to save Mutual Fund");
// // // // // //       }

// // // // // //       alert("✅ Mutual Fund saved successfully!");
// // // // // //       setFormData({
// // // // // //         investorName: "",
// // // // // //         investmentType: "",
// // // // // //         schemeName: "",
// // // // // //         fundType: "",
// // // // // //         startDate: "",
// // // // // //         sipDate: "",
// // // // // //         amountInvested: "",
// // // // // //         navAtPurchase: "",
// // // // // //         unitsPurchased: "",
// // // // // //         paymentMode: "",
// // // // // //         comments: ""
// // // // // //       });
// // // // // //     } catch (err) {
// // // // // //       console.error(err);
// // // // // //       alert("❌ Failed to save Mutual Fund");
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="flex justify-center items-center mt-10">
// // // // // //       <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-4xl">
// // // // // //         <h2 className="text-2xl font-semibold text-center text-indigo-600 mb-6">
// // // // // //           Mutual Fund Investment Form
// // // // // //         </h2>

// // // // // //         <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // // // //           {/* Investor Name */}
// // // // // //           <div>
// // // // // //             <label className="block text-gray-700 font-medium mb-2">Investor Name</label>
// // // // // //             <input
// // // // // //               type="text"
// // // // // //               name="investorName"
// // // // // //               value={formData.investorName}
// // // // // //               onChange={handleChange}
// // // // // //               className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400"
// // // // // //               placeholder="Enter name"
// // // // // //               required
// // // // // //             />
// // // // // //           </div>

// // // // // //           {/* Investment Type */}
// // // // // //           <div>
// // // // // //             <label className="block text-gray-700 font-medium mb-2">Investment Type</label>
// // // // // //             <select
// // // // // //               name="investmentType"
// // // // // //               value={formData.investmentType}
// // // // // //               onChange={handleChange}
// // // // // //               className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400"
// // // // // //               required
// // // // // //             >
// // // // // //               <option value="">-- Select --</option>
// // // // // //               <option value="SIP">SIP</option>
// // // // // //               <option value="Lump Sum">Lump Sum</option>
// // // // // //             </select>
// // // // // //           </div>

// // // // // //           {/* Scheme Name */}
// // // // // //           <div>
// // // // // //             <label className="block text-gray-700 font-medium mb-2">Scheme Name</label>
// // // // // //             <input
// // // // // //               type="text"
// // // // // //               name="schemeName"
// // // // // //               value={formData.schemeName}
// // // // // //               onChange={handleChange}
// // // // // //               className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400"
// // // // // //               placeholder="Enter scheme"
// // // // // //               required
// // // // // //             />
// // // // // //           </div>

// // // // // //           {/* Fund Type */}
// // // // // //           <div>
// // // // // //             <label className="block text-gray-700 font-medium mb-2">Fund Type</label>
// // // // // //             <input
// // // // // //               type="text"
// // // // // //               name="fundType"
// // // // // //               value={formData.fundType}
// // // // // //               onChange={handleChange}
// // // // // //               className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400"
// // // // // //               placeholder="Equity / Debt / Hybrid"
// // // // // //               required
// // // // // //             />
// // // // // //           </div>

// // // // // //           {/* Start Date */}
// // // // // //           <div>
// // // // // //             <label className="block text-gray-700 font-medium mb-2">Start Date</label>
// // // // // //             <input
// // // // // //               type="date"
// // // // // //               name="startDate"
// // // // // //               value={formData.startDate}
// // // // // //               onChange={handleChange}
// // // // // //               className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400"
// // // // // //               required
// // // // // //             />
// // // // // //           </div>

// // // // // //           {/* SIP Date */}
// // // // // //           <div>
// // // // // //             <label className="block text-gray-700 font-medium mb-2">SIP Date (1-31)</label>
// // // // // //             <input
// // // // // //               type="number"
// // // // // //               name="sipDate"
// // // // // //               value={formData.sipDate}
// // // // // //               onChange={handleChange}
// // // // // //               className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400"
// // // // // //               placeholder="Ex: 15"
// // // // // //             />
// // // // // //           </div>

// // // // // //           {/* Amount Invested */}
// // // // // //           <div>
// // // // // //             <label className="block text-gray-700 font-medium mb-2">Amount Invested (₹)</label>
// // // // // //             <input
// // // // // //               type="number"
// // // // // //               name="amountInvested"
// // // // // //               value={formData.amountInvested}
// // // // // //               onChange={handleChange}
// // // // // //               className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400"
// // // // // //               required
// // // // // //             />
// // // // // //           </div>

// // // // // //           {/* NAV at Purchase */}
// // // // // //           <div>
// // // // // //             <label className="block text-gray-700 font-medium mb-2">NAV at Purchase</label>
// // // // // //             <input
// // // // // //               type="number"
// // // // // //               name="navAtPurchase"
// // // // // //               value={formData.navAtPurchase}
// // // // // //               onChange={handleChange}
// // // // // //               className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400"
// // // // // //               required
// // // // // //             />
// // // // // //           </div>

// // // // // //           {/* Units Purchased */}
// // // // // //           <div>
// // // // // //             <label className="block text-gray-700 font-medium mb-2">Units Purchased</label>
// // // // // //             <input
// // // // // //               type="number"
// // // // // //               name="unitsPurchased"
// // // // // //               value={formData.unitsPurchased}
// // // // // //               onChange={handleChange}
// // // // // //               className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400"
// // // // // //               required
// // // // // //             />
// // // // // //           </div>

// // // // // //           {/* Payment Mode */}
// // // // // //           <div>
// // // // // //             <label className="block text-gray-700 font-medium mb-2">Payment Mode</label>
// // // // // //             <input
// // // // // //               type="text"
// // // // // //               name="paymentMode"
// // // // // //               value={formData.paymentMode}
// // // // // //               onChange={handleChange}
// // // // // //               className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400"
// // // // // //               placeholder="UPI / NetBanking / Debit Card"
// // // // // //               required
// // // // // //             />
// // // // // //           </div>

// // // // // //           {/* Comments */}
// // // // // //           <div className="md:col-span-2">
// // // // // //             <label className="block text-gray-700 font-medium mb-2">Comments</label>
// // // // // //             <textarea
// // // // // //               name="comments"
// // // // // //               value={formData.comments}
// // // // // //               onChange={handleChange}
// // // // // //               className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400"
// // // // // //               placeholder="Any additional notes"
// // // // // //             />
// // // // // //           </div>

// // // // // //           {/* Submit */}
// // // // // //           <div className="md:col-span-2 flex justify-center">
// // // // // //             <button
// // // // // //               type="submit"
// // // // // //               className="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
// // // // // //             >
// // // // // //               Save Mutual Fund
// // // // // //             </button>
// // // // // //           </div>
// // // // // //         </form>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // export default MutualFunds;



// // // // // import React, { useState } from "react";

// // // // // const MutualFunds = () => {
// // // // //   const [formData, setFormData] = useState({
// // // // //     holderName: "",
// // // // //     fundName: "",
// // // // //     fundType: "",
// // // // //     folioNumber: "",
// // // // //     startDate: "",
// // // // //     maturityDate: "",
// // // // //     amount: "",
// // // // //     nav: "",
// // // // //     comments: "",
// // // // //     receipt: null,
// // // // //   });

// // // // //   const handleChange = (e) => {
// // // // //     const { name, value, files } = e.target;
// // // // //     setFormData({
// // // // //       ...formData,
// // // // //       [name]: files ? files[0] : value,
// // // // //     });
// // // // //   };

// // // // //   const handleSubmit = async (e) => {
// // // // //     e.preventDefault();
// // // // //     console.log("Submitting:", formData);
// // // // //     // TODO: connect with backend API
// // // // //   };

// // // // //   return (
// // // // //     <div className="container mt-4">
// // // // //       <div className="card shadow-lg p-4">
// // // // //         <h2 className="text-center text-primary mb-4">Mutual Fund Entry Form</h2>
// // // // //         <form onSubmit={handleSubmit}>
// // // // //           <div className="row">
// // // // //             {/* Holder Name */}
// // // // //             <div className="col-md-6 mb-3">
// // // // //               <label className="form-label fw-bold">Holder Name *</label>
// // // // //               <input
// // // // //                 type="text"
// // // // //                 name="holderName"
// // // // //                 value={formData.holderName}
// // // // //                 onChange={handleChange}
// // // // //                 placeholder="Enter Holder Name"
// // // // //                 className="form-control"
// // // // //                 required
// // // // //               />
// // // // //             </div>

// // // // //             {/* Fund Name */}
// // // // //             <div className="col-md-6 mb-3">
// // // // //               <label className="form-label fw-bold">Fund Name *</label>
// // // // //               <input
// // // // //                 type="text"
// // // // //                 name="fundName"
// // // // //                 value={formData.fundName}
// // // // //                 onChange={handleChange}
// // // // //                 placeholder="Enter Fund Name"
// // // // //                 className="form-control"
// // // // //                 required
// // // // //               />
// // // // //             </div>

// // // // //             {/* Fund Type */}
// // // // //             <div className="col-md-6 mb-3">
// // // // //               <label className="form-label fw-bold">Fund Type *</label>
// // // // //               <select
// // // // //                 name="fundType"
// // // // //                 value={formData.fundType}
// // // // //                 onChange={handleChange}
// // // // //                 className="form-select"
// // // // //                 required
// // // // //               >
// // // // //                 <option value="">Select Fund Type</option>
// // // // //                 <option value="Equity">Equity</option>
// // // // //                 <option value="Debt">Debt</option>
// // // // //                 <option value="Hybrid">Hybrid</option>
// // // // //               </select>
// // // // //             </div>

// // // // //             {/* Folio Number */}
// // // // //             <div className="col-md-6 mb-3">
// // // // //               <label className="form-label fw-bold">Folio Number *</label>
// // // // //               <input
// // // // //                 type="text"
// // // // //                 name="folioNumber"
// // // // //                 value={formData.folioNumber}
// // // // //                 onChange={handleChange}
// // // // //                 placeholder="Enter Folio Number"
// // // // //                 className="form-control"
// // // // //                 required
// // // // //               />
// // // // //             </div>

// // // // //             {/* Start Date */}
// // // // //             <div className="col-md-6 mb-3">
// // // // //               <label className="form-label fw-bold">Start Date *</label>
// // // // //               <input
// // // // //                 type="date"
// // // // //                 name="startDate"
// // // // //                 value={formData.startDate}
// // // // //                 onChange={handleChange}
// // // // //                 className="form-control"
// // // // //                 required
// // // // //               />
// // // // //             </div>

// // // // //             {/* Maturity Date */}
// // // // //             <div className="col-md-6 mb-3">
// // // // //               <label className="form-label fw-bold">Maturity Date</label>
// // // // //               <input
// // // // //                 type="date"
// // // // //                 name="maturityDate"
// // // // //                 value={formData.maturityDate}
// // // // //                 onChange={handleChange}
// // // // //                 className="form-control"
// // // // //               />
// // // // //             </div>

// // // // //             {/* Amount */}
// // // // //             <div className="col-md-6 mb-3">
// // // // //               <label className="form-label fw-bold">Amount (₹) *</label>
// // // // //               <input
// // // // //                 type="number"
// // // // //                 name="amount"
// // // // //                 value={formData.amount}
// // // // //                 onChange={handleChange}
// // // // //                 placeholder="Enter Amount"
// // // // //                 className="form-control"
// // // // //                 required
// // // // //               />
// // // // //             </div>

// // // // //             {/* NAV */}
// // // // //             <div className="col-md-6 mb-3">
// // // // //               <label className="form-label fw-bold">NAV (₹)</label>
// // // // //               <input
// // // // //                 type="number"
// // // // //                 name="nav"
// // // // //                 value={formData.nav}
// // // // //                 onChange={handleChange}
// // // // //                 placeholder="Enter NAV"
// // // // //                 className="form-control"
// // // // //               />
// // // // //             </div>

// // // // //             {/* Upload Receipt */}
// // // // //             <div className="col-md-6 mb-3">
// // // // //               <label className="form-label fw-bold">Upload Receipt</label>
// // // // //               <input
// // // // //                 type="file"
// // // // //                 name="receipt"
// // // // //                 onChange={handleChange}
// // // // //                 className="form-control"
// // // // //               />
// // // // //             </div>

// // // // //             {/* Comments */}
// // // // //             <div className="col-md-12 mb-3">
// // // // //               <label className="form-label fw-bold">Any Comments</label>
// // // // //               <textarea
// // // // //                 name="comments"
// // // // //                 value={formData.comments}
// // // // //                 onChange={handleChange}
// // // // //                 placeholder="Write any additional comments here"
// // // // //                 className="form-control"
// // // // //               />
// // // // //             </div>
// // // // //           </div>

// // // // //           <div className="text-center">
// // // // //             <button type="submit" className="btn btn-primary px-4">
// // // // //               Submit Mutual Fund
// // // // //             </button>
// // // // //           </div>
// // // // //         </form>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default MutualFunds;


// // // // import React, { useState } from "react";

// // // // const MutualFunds = () => {
// // // //   const [formData, setFormData] = useState({
// // // //     holderName: "",
// // // //     fundName: "",
// // // //     fundType: "",
// // // //     folioNumber: "",
// // // //     startDate: "",
// // // //     maturityDate: "",
// // // //     amount: "",
// // // //     nav: "",
// // // //     comments: "",
// // // //     receipt: null,
// // // //   });

// // // //   const handleChange = (e) => {
// // // //     const { name, value, files } = e.target;
// // // //     setFormData({
// // // //       ...formData,
// // // //       [name]: files ? files[0] : value,
// // // //     });
// // // //   };

// // // //   const handleSubmit = (e) => {
// // // //     e.preventDefault();
// // // //     // ✅ Keep your existing backend submission code here
// // // //     console.log("Submitting:", formData);
// // // //   };

// // // //   return (
// // // //     <div className="container mt-4">
// // // //       <div className="card shadow-lg p-4">
// // // //         <h2 className="text-center text-primary mb-4">
// // // //           Mutual Fund Entry Form
// // // //         </h2>
// // // //         <form onSubmit={handleSubmit}>
// // // //           <div className="row">
// // // //             {/* Holder Name */}
// // // //             <div className="col-md-6 mb-3">
// // // //               <label className="form-label fw-bold">Holder Name *</label>
// // // //               <input
// // // //                 type="text"
// // // //                 name="holderName"
// // // //                 value={formData.holderName}
// // // //                 onChange={handleChange}
// // // //                 className="form-control"
// // // //                 placeholder="Enter Holder Name"
// // // //                 required
// // // //               />
// // // //             </div>

// // // //             {/* Fund Name */}
// // // //             <div className="col-md-6 mb-3">
// // // //               <label className="form-label fw-bold">Fund Name *</label>
// // // //               <input
// // // //                 type="text"
// // // //                 name="fundName"
// // // //                 value={formData.fundName}
// // // //                 onChange={handleChange}
// // // //                 className="form-control"
// // // //                 placeholder="Enter Fund Name"
// // // //                 required
// // // //               />
// // // //             </div>

// // // //             {/* Fund Type */}
// // // //             <div className="col-md-6 mb-3">
// // // //               <label className="form-label fw-bold">Fund Type *</label>
// // // //               <select
// // // //                 name="fundType"
// // // //                 value={formData.fundType}
// // // //                 onChange={handleChange}
// // // //                 className="form-select"
// // // //                 required
// // // //               >
// // // //                 <option value="">Select Fund Type</option>
// // // //                 <option value="Equity">Equity</option>
// // // //                 <option value="Debt">Debt</option>
// // // //                 <option value="Hybrid">Hybrid</option>
// // // //               </select>
// // // //             </div>

// // // //             {/* Folio Number */}
// // // //             <div className="col-md-6 mb-3">
// // // //               <label className="form-label fw-bold">Folio Number *</label>
// // // //               <input
// // // //                 type="text"
// // // //                 name="folioNumber"
// // // //                 value={formData.folioNumber}
// // // //                 onChange={handleChange}
// // // //                 className="form-control"
// // // //                 placeholder="Enter Folio Number"
// // // //                 required
// // // //               />
// // // //             </div>

// // // //             {/* Start Date */}
// // // //             <div className="col-md-6 mb-3">
// // // //               <label className="form-label fw-bold">Start Date *</label>
// // // //               <input
// // // //                 type="date"
// // // //                 name="startDate"
// // // //                 value={formData.startDate}
// // // //                 onChange={handleChange}
// // // //                 className="form-control"
// // // //                 required
// // // //               />
// // // //             </div>

// // // //             {/* Maturity Date */}
// // // //             <div className="col-md-6 mb-3">
// // // //               <label className="form-label fw-bold">Maturity Date</label>
// // // //               <input
// // // //                 type="date"
// // // //                 name="maturityDate"
// // // //                 value={formData.maturityDate}
// // // //                 onChange={handleChange}
// // // //                 className="form-control"
// // // //               />
// // // //             </div>

// // // //             {/* Amount */}
// // // //             <div className="col-md-6 mb-3">
// // // //               <label className="form-label fw-bold">Amount (₹) *</label>
// // // //               <input
// // // //                 type="number"
// // // //                 name="amount"
// // // //                 value={formData.amount}
// // // //                 onChange={handleChange}
// // // //                 className="form-control"
// // // //                 placeholder="Enter Amount"
// // // //                 required
// // // //               />
// // // //             </div>

// // // //             {/* NAV */}
// // // //             <div className="col-md-6 mb-3">
// // // //               <label className="form-label fw-bold">NAV (₹)</label>
// // // //               <input
// // // //                 type="number"
// // // //                 name="nav"
// // // //                 value={formData.nav}
// // // //                 onChange={handleChange}
// // // //                 className="form-control"
// // // //                 placeholder="Enter NAV"
// // // //               />
// // // //             </div>

// // // //             {/* Receipt Upload */}
// // // //             <div className="col-md-6 mb-3">
// // // //               <label className="form-label fw-bold">Upload Receipt</label>
// // // //               <input
// // // //                 type="file"
// // // //                 name="receipt"
// // // //                 onChange={handleChange}
// // // //                 className="form-control"
// // // //               />
// // // //             </div>

// // // //             {/* Comments */}
// // // //             <div className="col-md-12 mb-3">
// // // //               <label className="form-label fw-bold">Comments</label>
// // // //               <textarea
// // // //                 name="comments"
// // // //                 value={formData.comments}
// // // //                 onChange={handleChange}
// // // //                 className="form-control"
// // // //                 placeholder="Any notes or comments"
// // // //               />
// // // //             </div>
// // // //           </div>

// // // //           <div className="text-center">
// // // //             <button type="submit" className="btn btn-primary px-4">
// // // //               Submit Mutual Fund
// // // //             </button>
// // // //           </div>
// // // //         </form>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default MutualFunds;


// // // // src/pages/MutualFunds.js
// // // import React, { Component } from "react";

// // // class MutualFunds extends Component {
// // //   state = {
// // //     investorName: "",
// // //     investmentType: "",
// // //     schemeName: "",
// // //     fundType: "",
// // //     startDate: "",
// // //     sipDate: "",
// // //     amountInvested: "",
// // //     navAtPurchase: "",
// // //     unitsPurchased: "",
// // //     paymentMode: "",
// // //     comments: "",
// // //     receipt: null,
// // //   };

// // //   handleChange = (e) => {
// // //     const { name, value, files, type } = e.target;
// // //     this.setState({ [name]: type === "file" ? files[0] : value });
// // //   };

// // //   handleSubmit = async (e) => {
// // //     e.preventDefault();

// // //     try {
// // //       const formData = new FormData();
// // //       Object.entries(this.state).forEach(([k, v]) => {
// // //         if (v !== undefined && v !== null) formData.append(k, v);
// // //       });

// // //       // ✅ SAME BACKEND ENDPOINT YOU ALREADY USE
// // //       const res = await fetch("http://localhost:5000/dashboard/mutualfunds", {
// // //         method: "POST",
// // //         body: formData,
// // //       });

// // //       // Read as text first to avoid JSON '<!DOCTYPE' issues on non-200
// // //       const text = await res.text();

// // //       if (!res.ok) {
// // //         console.error("Server error:", text);
// // //         alert("❌ Failed to save Mutual Fund");
// // //         return;
// // //       }

// // //       // Try parse JSON only if server returned JSON
// // //       try {
// // //         const data = JSON.parse(text);
// // //         console.log("Saved MF:", data);
// // //       } catch {
// // //         // If server returns plain text, that's fine—we still succeeded
// // //       }

// // //       alert("✅ Mutual Fund saved successfully!");

// // //       // Reset form
// // //       this.setState({
// // //         investorName: "",
// // //         investmentType: "",
// // //         schemeName: "",
// // //         fundType: "",
// // //         startDate: "",
// // //         sipDate: "",
// // //         amountInvested: "",
// // //         navAtPurchase: "",
// // //         unitsPurchased: "",
// // //         paymentMode: "",
// // //         comments: "",
// // //         receipt: null,
// // //       });
// // //       const fileInput = document.querySelector('input[name="receipt"]');
// // //       if (fileInput) fileInput.value = "";
// // //     } catch (err) {
// // //       console.error("Error submitting form:", err);
// // //       alert("❌ Could not connect to server.");
// // //     }
// // //   };

// // //   render() {
// // //     return (
// // //       <div className="container py-4">
// // //         <div className="card shadow border-0">
// // //           <div className="card-body p-4">
// // //             <h2 className="text-center text-primary mb-4">Mutual Fund Entry Form</h2>

// // //             <form className="row g-3" onSubmit={this.handleSubmit}>
// // //               {/* Left/Right column layout to match your FD form */}
// // //               <div className="col-md-6">
// // //                 <label className="form-label fw-bold">Investor Name *</label>
// // //                 <input
// // //                   type="text"
// // //                   className="form-control"
// // //                   name="investorName"
// // //                   placeholder="Enter Investor Name"
// // //                   value={this.state.investorName}
// // //                   onChange={this.handleChange}
// // //                   required
// // //                 />
// // //               </div>

// // //               <div className="col-md-6">
// // //                 <label className="form-label fw-bold">Investment Type *</label>
// // //                 <select
// // //                   className="form-select"
// // //                   name="investmentType"
// // //                   value={this.state.investmentType}
// // //                   onChange={this.handleChange}
// // //                   required
// // //                 >
// // //                   <option value="">Select Type</option>
// // //                   <option value="SIP">SIP</option>
// // //                   <option value="Lump Sum">Lump Sum</option>
// // //                 </select>
// // //               </div>

// // //               <div className="col-md-6">
// // //                 <label className="form-label fw-bold">Scheme Name *</label>
// // //                 <input
// // //                   type="text"
// // //                   className="form-control"
// // //                   name="schemeName"
// // //                   placeholder="Enter Scheme Name"
// // //                   value={this.state.schemeName}
// // //                   onChange={this.handleChange}
// // //                   required
// // //                 />
// // //               </div>

// // //               <div className="col-md-6">
// // //                 <label className="form-label fw-bold">Fund Type *</label>
// // //                 <select
// // //                   className="form-select"
// // //                   name="fundType"
// // //                   value={this.state.fundType}
// // //                   onChange={this.handleChange}
// // //                   required
// // //                 >
// // //                   <option value="">Select Fund Type</option>
// // //                   <option value="Equity">Equity</option>
// // //                   <option value="Debt">Debt</option>
// // //                   <option value="Hybrid">Hybrid</option>
// // //                 </select>
// // //               </div>

// // //               <div className="col-md-6">
// // //                 <label className="form-label fw-bold">Investment Start Date *</label>
// // //                 <input
// // //                   type="date"
// // //                   className="form-control"
// // //                   name="startDate"
// // //                   value={this.state.startDate}
// // //                   onChange={this.handleChange}
// // //                   required
// // //                 />
// // //               </div>

// // //               <div className="col-md-6">
// // //                 <label className="form-label fw-bold">SIP Date</label>
// // //                 <input
// // //                   type="number"
// // //                   className="form-control"
// // //                   name="sipDate"
// // //                   placeholder="Day of Month (1–31)"
// // //                   min="1"
// // //                   max="31"
// // //                   value={this.state.sipDate}
// // //                   onChange={this.handleChange}
// // //                 />
// // //               </div>

// // //               <div className="col-md-6">
// // //                 <label className="form-label fw-bold">Amount Invested (₹) *</label>
// // //                 <input
// // //                   type="number"
// // //                   className="form-control"
// // //                   name="amountInvested"
// // //                   placeholder="Enter Amount"
// // //                   min="0"
// // //                   value={this.state.amountInvested}
// // //                   onChange={this.handleChange}
// // //                   required
// // //                 />
// // //               </div>

// // //               <div className="col-md-6">
// // //                 <label className="form-label fw-bold">NAV at Purchase *</label>
// // //                 <input
// // //                   type="number"
// // //                   step="0.01"
// // //                   className="form-control"
// // //                   name="navAtPurchase"
// // //                   placeholder="Enter NAV"
// // //                   value={this.state.navAtPurchase}
// // //                   onChange={this.handleChange}
// // //                   required
// // //                 />
// // //               </div>

// // //               <div className="col-md-6">
// // //                 <label className="form-label fw-bold">Units Purchased *</label>
// // //                 <input
// // //                   type="number"
// // //                   step="0.0001"
// // //                   className="form-control"
// // //                   name="unitsPurchased"
// // //                   placeholder="Enter Units"
// // //                   value={this.state.unitsPurchased}
// // //                   onChange={this.handleChange}
// // //                   required
// // //                 />
// // //               </div>

// // //               <div className="col-md-6">
// // //                 <label className="form-label fw-bold">Payment Mode *</label>
// // //                 <select
// // //                   className="form-select"
// // //                   name="paymentMode"
// // //                   value={this.state.paymentMode}
// // //                   onChange={this.handleChange}
// // //                   required
// // //                 >
// // //                   <option value="">Select Mode</option>
// // //                   <option value="Net Banking">Net Banking</option>
// // //                   <option value="UPI">UPI</option>
// // //                   <option value="Cheque">Cheque</option>
// // //                   <option value="Auto Debit">Auto Debit</option>
// // //                 </select>
// // //               </div>

// // //               <div className="col-md-6">
// // //                 <label className="form-label fw-bold">Upload Receipt</label>
// // //                 <input
// // //                   type="file"
// // //                   className="form-control"
// // //                   name="receipt"
// // //                   onChange={this.handleChange}
// // //                 />
// // //               </div>

// // //               <div className="col-12">
// // //                 <label className="form-label fw-bold">Any Comments</label>
// // //                 <textarea
// // //                   className="form-control"
// // //                   name="comments"
// // //                   rows="3"
// // //                   placeholder="Write any additional comments here"
// // //                   value={this.state.comments}
// // //                   onChange={this.handleChange}
// // //                 />
// // //               </div>

// // //               <div className="col-12 text-center">
// // //                 <button type="submit" className="btn btn-primary px-5 py-2 rounded-pill shadow">
// // //                   Save Mutual Fund Entry
// // //                 </button>
// // //               </div>
// // //             </form>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     );
// // //   }
// // // }

// // // export default MutualFunds;


// // import React, { Component } from "react";

// // export default class MutualFundForm extends Component {
// //   state = {
// //     investorName: "",
// //     investmentType: "",
// //     schemeName: "",
// //     fundType: "",
// //     startDate: "",
// //     sipDate: "",
// //     amountInvested: "",
// //     navAtPurchase: "",
// //     unitsPurchased: "",
// //     paymentMode: "",
// //     receipt: null,
// //     comments: ""
// //   };

// //   handleChange = (e) => {
// //     const { name, value, files } = e.target;
// //     this.setState({ [name]: files ? files[0] : value });
// //   };

// //   handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const response = await fetch("http://localhost:5000/mutualfunds", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify({
// //           investorName: this.state.investorName,
// //           investmentType: this.state.investmentType,
// //           schemeName: this.state.schemeName,
// //           fundType: this.state.fundType,
// //           startDate: this.state.startDate,
// //           sipDate: this.state.sipDate,
// //           amountInvested: this.state.amountInvested,
// //           navAtPurchase: this.state.navAtPurchase,
// //           unitsPurchased: this.state.unitsPurchased,
// //           paymentMode: this.state.paymentMode,
// //           comments: this.state.comments,
// //         }),
// //       });

// //       const result = await response.json();
// //       if (result.success) {
// //         alert("✅ Mutual Fund saved successfully!");
// //         this.setState({
// //           investorName: "",
// //           investmentType: "",
// //           schemeName: "",
// //           fundType: "",
// //           startDate: "",
// //           sipDate: "",
// //           amountInvested: "",
// //           navAtPurchase: "",
// //           unitsPurchased: "",
// //           paymentMode: "",
// //           receipt: null,
// //           comments: "",
// //         });
// //       } else {
// //         alert("❌ Failed to save Mutual Fund");
// //       }
// //     } catch (err) {
// //       console.error("Error:", err);
// //       console.log(err);
// //       alert("❌ Something went wrong");
// //     }
// //   };

// //   render() {
// //     return (
// //       <div className="container py-4">
// //         <div className="card shadow border-0">
// //           <div className="card-body p-4">
// //             <h2 className="text-center text-primary mb-4">Mutual Fund Entry Form</h2>

// //             <form className="row g-3" onSubmit={this.handleSubmit}>
// //               <div className="col-md-6">
// //                 <label className="form-label fw-bold">Investor Name *</label>
// //                 <input
// //                   type="text"
// //                   className="form-control"
// //                   name="investorName"
// //                   placeholder="Enter Investor Name"
// //                   value={this.state.investorName}
// //                   onChange={this.handleChange}
// //                   required
// //                 />
// //               </div>

// //               <div className="col-md-6">
// //                 <label className="form-label fw-bold">Investment Type *</label>
// //                 <select
// //                   className="form-select"
// //                   name="investmentType"
// //                   value={this.state.investmentType}
// //                   onChange={this.handleChange}
// //                   required
// //                 >
// //                   <option value="">Select Type</option>
// //                   <option value="SIP">SIP</option>
// //                   <option value="Lump Sum">Lump Sum</option>
// //                 </select>
// //               </div>

// //               <div className="col-md-6">
// //                 <label className="form-label fw-bold">Scheme Name *</label>
// //                 <input
// //                   type="text"
// //                   className="form-control"
// //                   name="schemeName"
// //                   placeholder="Enter Scheme Name"
// //                   value={this.state.schemeName}
// //                   onChange={this.handleChange}
// //                   required
// //                 />
// //               </div>

// //               <div className="col-md-6">
// //                 <label className="form-label fw-bold">Fund Type *</label>
// //                 <select
// //                   className="form-select"
// //                   name="fundType"
// //                   value={this.state.fundType}
// //                   onChange={this.handleChange}
// //                   required
// //                 >
// //                   <option value="">Select Fund Type</option>
// //                   <option value="Equity">Equity</option>
// //                   <option value="Debt">Debt</option>
// //                   <option value="Hybrid">Hybrid</option>
// //                 </select>
// //               </div>

// //               <div className="col-md-6">
// //                 <label className="form-label fw-bold">Investment Start Date *</label>
// //                 <input
// //                   type="date"
// //                   className="form-control"
// //                   name="startDate"
// //                   value={this.state.startDate}
// //                   onChange={this.handleChange}
// //                   required
// //                 />
// //               </div>

// //               <div className="col-md-6">
// //                 <label className="form-label fw-bold">SIP Date</label>
// //                 <input
// //                   type="number"
// //                   className="form-control"
// //                   name="sipDate"
// //                   placeholder="Day of Month (1–31)"
// //                   min="1"
// //                   max="31"
// //                   value={this.state.sipDate}
// //                   onChange={this.handleChange}
// //                 />
// //               </div>

// //               <div className="col-md-6">
// //                 <label className="form-label fw-bold">Amount Invested (₹) *</label>
// //                 <input
// //                   type="number"
// //                   className="form-control"
// //                   name="amountInvested"
// //                   placeholder="Enter Amount"
// //                   min="0"
// //                   value={this.state.amountInvested}
// //                   onChange={this.handleChange}
// //                   required
// //                 />
// //               </div>

// //               <div className="col-md-6">
// //                 <label className="form-label fw-bold">NAV at Purchase *</label>
// //                 <input
// //                   type="number"
// //                   step="0.01"
// //                   className="form-control"
// //                   name="navAtPurchase"
// //                   placeholder="Enter NAV"
// //                   value={this.state.navAtPurchase}
// //                   onChange={this.handleChange}
// //                   required
// //                 />
// //               </div>

// //               <div className="col-md-6">
// //                 <label className="form-label fw-bold">Units Purchased *</label>
// //                 <input
// //                   type="number"
// //                   step="0.0001"
// //                   className="form-control"
// //                   name="unitsPurchased"
// //                   placeholder="Enter Units"
// //                   value={this.state.unitsPurchased}
// //                   onChange={this.handleChange}
// //                   required
// //                 />
// //               </div>

// //               <div className="col-md-6">
// //                 <label className="form-label fw-bold">Payment Mode *</label>
// //                 <select
// //                   className="form-select"
// //                   name="paymentMode"
// //                   value={this.state.paymentMode}
// //                   onChange={this.handleChange}
// //                   required
// //                 >
// //                   <option value="">Select Mode</option>
// //                   <option value="Net Banking">Net Banking</option>
// //                   <option value="UPI">UPI</option>
// //                   <option value="Cheque">Cheque</option>
// //                   <option value="Auto Debit">Auto Debit</option>
// //                 </select>
// //               </div>

// //               <div className="col-md-6">
// //                 <label className="form-label fw-bold">Upload Receipt</label>
// //                 <input
// //                   type="file"
// //                   className="form-control"
// //                   name="receipt"
// //                   onChange={this.handleChange}
// //                 />
// //               </div>

// //               <div className="col-12">
// //                 <label className="form-label fw-bold">Any Comments</label>
// //                 <textarea
// //                   className="form-control"
// //                   name="comments"
// //                   rows="3"
// //                   placeholder="Write any additional comments here"
// //                   value={this.state.comments}
// //                   onChange={this.handleChange}
// //                 />
// //               </div>

// //               <div className="col-12 text-center">
// //                 <button type="submit" className="btn btn-primary px-5 py-2 rounded-pill shadow">
// //                   Save Mutual Fund Entry
// //                 </button>
// //               </div>
// //             </form>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }
// // }


// import React, { Component } from "react";

// export class MutualFunds extends Component {
//   state = {
//     investorName: "",
//     investmentType: "",
//     schemeName: "",
//     fundType: "",
//     startDate: "",
//     sipDate: "",
//     amountInvested: "",
//     navAtPurchase: "",
//     unitsPurchased: "",
//     paymentMode: "",
//     receipt: null,
//     comments: "",
//   };

//   handleChange = (e) => {
//     const { name, value, type, files } = e.target;
//     this.setState({
//       [name]: type === "file" ? files[0] : value,
//     });
//   };

//   handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const formData = new FormData();
//       Object.keys(this.state).forEach((key) => {
//         formData.append(key, this.state[key]);
//       });

//       const res = await fetch("http://localhost:5000/dashboard/mutualfunds", {
//         method: "POST",
//         body: formData,
//       });

//       const result = await res.json();

//       if (result.success) {
//         alert("✅ Mutual Fund saved successfully!");
//         this.setState({
//           investorName: "",
//           investmentType: "",
//           schemeName: "",
//           fundType: "",
//           startDate: "",
//           sipDate: "",
//           amountInvested: "",
//           navAtPurchase: "",
//           unitsPurchased: "",
//           paymentMode: "",
//           receipt: null,
//           comments: "",
//         });
//       } else {
//         alert("❌ Failed to save Mutual Fund: " + result.message);
//       }
//     } catch (error) {
//       console.error("Error saving Mutual Fund:", error);
//       alert("⚠️ An error occurred while saving.");
//     }
//   };

//   render() {
//     return (
//       <div className="container py-4">
//         <div className="card shadow border-0">
//           <div className="card-body p-4">
//             <h2 className="text-center text-primary mb-4">
//               Mutual Fund Entry Form
//             </h2>

//             <form className="row g-3" onSubmit={this.handleSubmit}>
//               {/* Investor Name */}
//               <div className="col-md-6">
//                 <label className="form-label fw-bold">Investor Name *</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   name="investorName"
//                   placeholder="Enter Investor Name"
//                   value={this.state.investorName}
//                   onChange={this.handleChange}
//                   required
//                 />
//               </div>

//               {/* Investment Type */}
//               <div className="col-md-6">
//                 <label className="form-label fw-bold">Investment Type *</label>
//                 <select
//                   className="form-select"
//                   name="investmentType"
//                   value={this.state.investmentType}
//                   onChange={this.handleChange}
//                   required
//                 >
//                   <option value="">Select Type</option>
//                   <option value="SIP">SIP</option>
//                   <option value="Lump Sum">Lump Sum</option>
//                 </select>
//               </div>

//               {/* Scheme Name */}
//               <div className="col-md-6">
//                 <label className="form-label fw-bold">Scheme Name *</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   name="schemeName"
//                   placeholder="Enter Scheme Name"
//                   value={this.state.schemeName}
//                   onChange={this.handleChange}
//                   required
//                 />
//               </div>

//               {/* Fund Type */}
//               <div className="col-md-6">
//                 <label className="form-label fw-bold">Fund Type *</label>
//                 <select
//                   className="form-select"
//                   name="fundType"
//                   value={this.state.fundType}
//                   onChange={this.handleChange}
//                   required
//                 >
//                   <option value="">Select Fund Type</option>
//                   <option value="Equity">Equity</option>
//                   <option value="Debt">Debt</option>
//                   <option value="Hybrid">Hybrid</option>
//                 </select>
//               </div>

//               {/* Start Date */}
//               <div className="col-md-6">
//                 <label className="form-label fw-bold">
//                   Investment Start Date *
//                 </label>
//                 <input
//                   type="date"
//                   className="form-control"
//                   name="startDate"
//                   value={this.state.startDate}
//                   onChange={this.handleChange}
//                   required
//                 />
//               </div>

//               {/* SIP Date */}
//               <div className="col-md-6">
//                 <label className="form-label fw-bold">SIP Date</label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   name="sipDate"
//                   placeholder="Day of Month (1–31)"
//                   min="1"
//                   max="31"
//                   value={this.state.sipDate}
//                   onChange={this.handleChange}
//                 />
//               </div>

//               {/* Amount Invested */}
//               <div className="col-md-6">
//                 <label className="form-label fw-bold">
//                   Amount Invested (₹) *
//                 </label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   name="amountInvested"
//                   placeholder="Enter Amount"
//                   min="0"
//                   value={this.state.amountInvested}
//                   onChange={this.handleChange}
//                   required
//                 />
//               </div>

//               {/* NAV */}
//               <div className="col-md-6">
//                 <label className="form-label fw-bold">NAV at Purchase *</label>
//                 <input
//                   type="number"
//                   step="0.01"
//                   className="form-control"
//                   name="navAtPurchase"
//                   placeholder="Enter NAV"
//                   value={this.state.navAtPurchase}
//                   onChange={this.handleChange}
//                   required
//                 />
//               </div>

//               {/* Units */}
//               <div className="col-md-6">
//                 <label className="form-label fw-bold">Units Purchased *</label>
//                 <input
//                   type="number"
//                   step="0.0001"
//                   className="form-control"
//                   name="unitsPurchased"
//                   placeholder="Enter Units"
//                   value={this.state.unitsPurchased}
//                   onChange={this.handleChange}
//                   required
//                 />
//               </div>

//               {/* Payment Mode */}
//               <div className="col-md-6">
//                 <label className="form-label fw-bold">Payment Mode *</label>
//                 <select
//                   className="form-select"
//                   name="paymentMode"
//                   value={this.state.paymentMode}
//                   onChange={this.handleChange}
//                   required
//                 >
//                   <option value="">Select Mode</option>
//                   <option value="Net Banking">Net Banking</option>
//                   <option value="UPI">UPI</option>
//                   <option value="Cheque">Cheque</option>
//                   <option value="Auto Debit">Auto Debit</option>
//                 </select>
//               </div>

//               {/* Receipt */}
//               <div className="col-md-6">
//                 <label className="form-label fw-bold">Upload Receipt</label>
//                 <input
//                   type="file"
//                   className="form-control"
//                   name="receipt"
//                   onChange={this.handleChange}
//                 />
//               </div>

//               {/* Comments */}
//               <div className="col-12">
//                 <label className="form-label fw-bold">Any Comments</label>
//                 <textarea
//                   className="form-control"
//                   name="comments"
//                   rows="3"
//                   placeholder="Write any additional comments here"
//                   value={this.state.comments}
//                   onChange={this.handleChange}
//                 />
//               </div>

//               {/* Submit */}
//               <div className="col-12 text-center">
//                 <button
//                   type="submit"
//                   className="btn btn-primary px-5 py-2 rounded-pill shadow"
//                 >
//                   Save Mutual Fund Entry
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default MutualFunds;

import React, { useState } from "react";

export default function MutualFunds() {
  const [form, setForm] = useState({
    investorName: "",
    investmentType: "",
    schemeName: "",
    fundType: "",
    startDate: "",
    sipDate: "",
    amountInvested: "",
    navAtPurchase: "",
    unitsPurchased: "",
    paymentMode: "",
    receipt: null,
    comments: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, files, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "file" ? (files[0] || null) : value,
    }));
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        formData.append(key, value);
      }
    });

    try {
      const res = await fetch("http://localhost:5000/dashboard/mutualfunds", {
        method: "POST",
        body: formData,
      });

      const text = await res.text(); // read as text first
      let data;
      try {
        data = JSON.parse(text); // parse JSON safely
      } catch (err) {
        console.error("Failed to parse JSON:", err, text);
        alert("Server returned invalid JSON. Check console.");
        return;
      }

      if (res.ok && data.success) {
        alert("✅ Mutual Fund saved successfully!");
        setForm({
          investorName: "",
          investmentType: "",
          schemeName: "",
          fundType: "",
          startDate: "",
          sipDate: "",
          amountInvested: "",
          navAtPurchase: "",
          unitsPurchased: "",
          paymentMode: "",
          receipt: null,
          comments: "",
        });
      } else {
        alert("❌ " + (data.message || "Failed to save Mutual Fund"));
      }
    } catch (err) {
      console.error(err);
      alert("❌ Network/Server error.");
    }
  };

  return (
    <div className="container py-4">
      <div className="card shadow border-0">
        <div className="card-body p-4">
          <h2 className="text-center text-primary mb-4">Mutual Fund Entry Form</h2>
          <form className="row g-3" onSubmit={handleSubmit}>
            {/* Investor Name */}
            <div className="col-md-6">
              <label className="form-label fw-bold">Investor Name *</label>
              <input
                type="text"
                className="form-control"
                name="investorName"
                placeholder="Enter Investor Name"
                value={form.investorName}
                onChange={handleChange}
                required
              />
            </div>

            {/* Investment Type */}
            <div className="col-md-6">
              <label className="form-label fw-bold">Investment Type *</label>
              <select
                className="form-select"
                name="investmentType"
                value={form.investmentType}
                onChange={handleChange}
                required
              >
                <option value="">Select Type</option>
                <option value="SIP">SIP</option>
                <option value="Lump Sum">Lump Sum</option>
              </select>
            </div>

            {/* Scheme Name */}
            <div className="col-md-6">
              <label className="form-label fw-bold">Scheme Name *</label>
              <input
                type="text"
                className="form-control"
                name="schemeName"
                placeholder="Enter Scheme Name"
                value={form.schemeName}
                onChange={handleChange}
                required
              />
            </div>

            {/* Fund Type */}
            <div className="col-md-6">
              <label className="form-label fw-bold">Fund Type *</label>
              <select
                className="form-select"
                name="fundType"
                value={form.fundType}
                onChange={handleChange}
                required
              >
                <option value="">Select Fund Type</option>
                <option value="Equity">Equity</option>
                <option value="Debt">Debt</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>

            {/* Start Date */}
            <div className="col-md-6">
              <label className="form-label fw-bold">Investment Start Date *</label>
              <input
                type="date"
                className="form-control"
                name="startDate"
                value={form.startDate}
                onChange={handleChange}
                required
              />
            </div>

            {/* SIP Date */}
            <div className="col-md-6">
              <label className="form-label fw-bold">SIP Date</label>
              <input
                type="number"
                className="form-control"
                name="sipDate"
                placeholder="Day of Month (1–31)"
                min="1"
                max="31"
                value={form.sipDate}
                onChange={handleChange}
              />
            </div>

            {/* Amount Invested */}
            <div className="col-md-6">
              <label className="form-label fw-bold">Amount Invested (₹) *</label>
              <input
                type="number"
                className="form-control"
                name="amountInvested"
                placeholder="Enter Amount"
                min="0"
                value={form.amountInvested}
                onChange={handleChange}
                required
              />
            </div>

            {/* NAV at Purchase */}
            <div className="col-md-6">
              <label className="form-label fw-bold">NAV at Purchase *</label>
              <input
                type="number"
                step="0.01"
                className="form-control"
                name="navAtPurchase"
                placeholder="Enter NAV"
                value={form.navAtPurchase}
                onChange={handleChange}
                required
              />
            </div>

            {/* Units Purchased */}
            <div className="col-md-6">
              <label className="form-label fw-bold">Units Purchased *</label>
              <input
                type="number"
                step="0.0001"
                className="form-control"
                name="unitsPurchased"
                placeholder="Enter Units"
                value={form.unitsPurchased}
                onChange={handleChange}
                required
              />
            </div>

            {/* Payment Mode */}
            <div className="col-md-6">
              <label className="form-label fw-bold">Payment Mode *</label>
              <select
                className="form-select"
                name="paymentMode"
                value={form.paymentMode}
                onChange={handleChange}
                required
              >
                <option value="">Select Mode</option>
                <option value="Net Banking">Net Banking</option>
                <option value="UPI">UPI</option>
                <option value="Cheque">Cheque</option>
                <option value="Auto Debit">Auto Debit</option>
              </select>
            </div>

            {/* Receipt Upload */}
            <div className="col-md-6">
              <label className="form-label fw-bold">Upload Receipt</label>
              <input
                type="file"
                className="form-control"
                name="receipt"
                onChange={handleChange}
              />
            </div>

            {/* Comments */}
            <div className="col-12">
              <label className="form-label fw-bold">Any Comments</label>
              <textarea
                className="form-control"
                name="comments"
                rows="3"
                placeholder="Write any additional comments here"
                value={form.comments}
                onChange={handleChange}
              />
            </div>

            {/* Submit Button */}
            <div className="col-12 text-center">
              <button type="submit" className="btn btn-primary px-5 py-2 rounded-pill shadow">
                Save Mutual Fund Entry
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


