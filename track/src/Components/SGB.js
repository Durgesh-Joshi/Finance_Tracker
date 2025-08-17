// // import React, { Component } from 'react';

// // export class SGB extends Component {
// //   state = {
// //     investorName: "",
// //     seriesName: "",
// //     issueDate: "",
// //     maturityDate: "",
// //     quantity: "",
// //     issuePricePerGram: "",
// //     totalAmountInvested: "",
// //     paymentMode: "",
// //     nextInterestPaymentDate: "",
// //     receipt: null,
// //     comments: ""
// //   };

// //   handleChange = (e) => {
// //     const { name, value, type, files } = e.target;
// //     if (type === "file") {
// //       this.setState({ [name]: files[0] });
// //     } else {
// //       this.setState({ [name]: value });
// //     }
// //   };

// //   handleSubmit = async (e) => {
// //     e.preventDefault();

// //     const formData = new FormData();
// //     for (const key in this.state) {
// //       formData.append(key, this.state[key]);
// //     }

// //     try {
// //       const res = await fetch("http://localhost:5000/sgb", {
// //         method: "POST",
// //         body: formData
// //       });

// //       const data = await res.json();
// //       console.log("SGB Saved:", data);
     
// //       alert("SGB entry added successfully!");

// //       // Reset form
// //       this.setState({
// //         investorName: "",
// //         seriesName: "",
// //         issueDate: "",
// //         maturityDate: "",
// //         quantity: "",
// //         issuePricePerGram: "",
// //         totalAmountInvested: "",
// //         paymentMode: "",
// //         nextInterestPaymentDate: "",
// //         receipt: null,
// //         comments: ""
// //       });
// //     } catch (err) {
// //       console.error("Error saving SGB:", err);
// //       alert("Error saving SGB entry.");
// //     }
// //   };

// //   render() {
// //     return (
// //       <div className="container min-h-screen bg-cover bg-center flex items-center justify-center p-4">
// //         <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl border border-gray-200">
// //           <h2 className="text-2xl font-bold mb-4 text-center text-warning">Sovereign Gold Bond Entry Form</h2>
// //           <form className="row g-3" onSubmit={this.handleSubmit}>

// //             {/* Investor Name */}
// //             <div className="col-md-6">
// //               <label className="form-label fw-bold">Investor Name *</label>
// //               <input type="text" className="form-control" name="investorName" value={this.state.investorName} onChange={this.handleChange} required />
// //             </div>

// //             {/* Series Name */}
// //             <div className="col-md-6">
// //               <label className="form-label fw-bold">SGB Series *</label>
// //               <input type="text" className="form-control" name="seriesName" value={this.state.seriesName} onChange={this.handleChange} required />
// //             </div>

// //             {/* Issue Date */}
// //             <div className="col-md-6">
// //               <label className="form-label fw-bold">Issue Date *</label>
// //               <input type="date" className="form-control" name="issueDate" value={this.state.issueDate} onChange={this.handleChange} required />
// //             </div>

// //             {/* Maturity Date */}
// //             <div className="col-md-6">
// //               <label className="form-label fw-bold">Maturity Date *</label>
// //               <input type="date" className="form-control" name="maturityDate" value={this.state.maturityDate} onChange={this.handleChange} required />
// //             </div>

// //             {/* Quantity */}
// //             <div className="col-md-6">
// //               <label className="form-label fw-bold">Quantity (in grams) *</label>
// //               <input type="number" step="0.01" className="form-control" name="quantity" value={this.state.quantity} onChange={this.handleChange} required />
// //             </div>

// //             {/* Issue Price */}
// //             <div className="col-md-6">
// //               <label className="form-label fw-bold">Issue Price per Gram (₹) *</label>
// //               <input type="number" step="0.01" className="form-control" name="issuePricePerGram" value={this.state.issuePricePerGram} onChange={this.handleChange} required />
// //             </div>

// //             {/* Total Amount */}
// //             <div className="col-md-6">
// //               <label className="form-label fw-bold">Total Amount Invested (₹) *</label>
// //               <input type="number" className="form-control" name="totalAmountInvested" value={this.state.totalAmountInvested} onChange={this.handleChange} required />
// //             </div>

// //             {/* Payment Mode */}
// //             <div className="col-md-6">
// //               <label className="form-label fw-bold">Payment Mode *</label>
// //               <select className="form-select" name="paymentMode" value={this.state.paymentMode} onChange={this.handleChange} required>
// //                 <option value="">Select Mode</option>
// //                 <option value="netbanking">Net Banking</option>
// //                 <option value="upi">UPI</option>
// //                 <option value="cheque">Cheque</option>
// //                 <option value="auto-debit">Auto Debit</option>
// //               </select>
// //             </div>

// //             {/* Next Interest Payment Date */}
// //             <div className="col-md-6">
// //               <label className="form-label fw-bold">Next Interest Payment Date *</label>
// //               <input type="date" className="form-control" name="nextInterestPaymentDate" value={this.state.nextInterestPaymentDate} onChange={this.handleChange} required />
// //             </div>

// //             {/* Receipt */}
// //             <div className="col-md-6">
// //               <label className="form-label fw-bold">Upload Receipt</label>
// //               <input type="file" className="form-control" name="receipt" onChange={this.handleChange} />
// //             </div>

// //             {/* Comments */}
// //             <div className="col-12">
// //               <label className="form-label fw-bold">Any Comments</label>
// //               <textarea className="form-control" rows="3" name="comments" value={this.state.comments} onChange={this.handleChange}></textarea>
// //             </div>

// //             {/* Submit */}
// //             <div className="col-12 text-center">
// //               <button type="submit" className="btn btn-warning px-5 py-2 rounded-pill shadow">Save SGB Entry</button>
// //             </div>

// //           </form>
// //         </div>
// //       </div>
// //     );
// //   }
// // }

// // export default SGB;

// import React, { Component } from 'react';

// export class SGB extends Component {
//   state = {
//     investorName: "",
//     seriesName: "",
//     issueDate: "",
//     maturityDate: "",
//     quantity: "",
//     issuePricePerGram: "",
//     totalAmount: "",
//     paymentMode: "",
//     nextInterestPaymentDate: "",
//     receipt: null,
//     comments: ""
//   };

//   handleChange = (e) => {
//     const { name, value, type, files } = e.target;

//     if (type === "file") {
//       this.setState({ [name]: files[0] });
//     } else {
//       this.setState({ [name]: value }, () => {
//         // Auto-calculate totalAmount
//         if (name === "quantity" || name === "issuePricePerGram") {
//           const quantity = parseFloat(this.state.quantity) || 0;
//           const price = parseFloat(this.state.issuePricePerGram) || 0;
//           this.setState({ totalAmount: (quantity * price).toFixed(2) });
//         }
//       });
//     }
//   };

//   handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     for (const key in this.state) {
//       formData.append(key, this.state[key]);
//     }

//     try {
//       const res = await fetch("http://localhost:5000/sgb", {
//         method: "POST",
//         body: formData
//       });

//       const data = await res.json();
//       if (res.ok) {
//         alert("SGB entry added successfully!");
//         this.setState({
//           investorName: "",
//           seriesName: "",
//           issueDate: "",
//           maturityDate: "",
//           quantity: "",
//           issuePricePerGram: "",
//           totalAmount: "",
//           paymentMode: "",
//           nextInterestPaymentDate: "",
//           receipt: null,
//           comments: ""
//         });
//       } else {
//         alert("Error: " + data.message);
//       }

//     } catch (err) {
//       console.error("Error saving SGB:", err);
//       alert("Error saving SGB entry.");
//     }
//   };

//   render() {
//     return (
//       <div className="container min-h-screen bg-cover bg-center flex items-center justify-center p-4">
//         <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl border border-gray-200">
//           <h2 className="text-2xl font-bold mb-4 text-center text-warning">Sovereign Gold Bond Entry Form</h2>
//           <form className="row g-3" onSubmit={this.handleSubmit}>

//             <div className="col-md-6">
//               <label className="form-label fw-bold">Investor Name *</label>
//               <input type="text" className="form-control" name="investorName" value={this.state.investorName} onChange={this.handleChange} required />
//             </div>

//             <div className="col-md-6">
//               <label className="form-label fw-bold">SGB Series *</label>
//               <input type="text" className="form-control" name="seriesName" value={this.state.seriesName} onChange={this.handleChange} required />
//             </div>

//             <div className="col-md-6">
//               <label className="form-label fw-bold">Issue Date *</label>
//               <input type="date" className="form-control" name="issueDate" value={this.state.issueDate} onChange={this.handleChange} required />
//             </div>

//             <div className="col-md-6">
//               <label className="form-label fw-bold">Maturity Date *</label>
//               <input type="date" className="form-control" name="maturityDate" value={this.state.maturityDate} onChange={this.handleChange} required />
//             </div>

//             <div className="col-md-6">
//               <label className="form-label fw-bold">Quantity (in grams) *</label>
//               <input type="number" step="0.01" className="form-control" name="quantity" value={this.state.quantity} onChange={this.handleChange} required />
//             </div>

//             <div className="col-md-6">
//               <label className="form-label fw-bold">Issue Price per Gram (₹) *</label>
//               <input type="number" step="0.01" className="form-control" name="issuePricePerGram" value={this.state.issuePricePerGram} onChange={this.handleChange} required />
//             </div>

//             <div className="col-md-6">
//               <label className="form-label fw-bold">Total Amount Invested (₹)</label>
//               <input type="number" className="form-control" name="totalAmount" value={this.state.totalAmount} readOnly />
//             </div>

//             <div className="col-md-6">
//               <label className="form-label fw-bold">Payment Mode *</label>
//               <select className="form-select" name="paymentMode" value={this.state.paymentMode} onChange={this.handleChange} required>
//                 <option value="">Select Mode</option>
//                 <option value="Net Banking">Net Banking</option>
//                 <option value="UPI">UPI</option>
//                 <option value="Cheque">Cheque</option>
//                 <option value="Auto Debit">Auto Debit</option>
//               </select>
//             </div>

//             <div className="col-md-6">
//               <label className="form-label fw-bold">Next Interest Payment Date *</label>
//               <input type="date" className="form-control" name="nextInterestPaymentDate" value={this.state.nextInterestPaymentDate} onChange={this.handleChange} required />
//             </div>

//             <div className="col-md-6">
//               <label className="form-label fw-bold">Upload Receipt</label>
//               <input type="file" className="form-control" name="receipt" onChange={this.handleChange} />
//             </div>

//             <div className="col-12">
//               <label className="form-label fw-bold">Any Comments</label>
//               <textarea className="form-control" rows="3" name="comments" value={this.state.comments} onChange={this.handleChange}></textarea>
//             </div>

//             <div className="col-12 text-center">
//               <button type="submit" className="btn btn-warning px-5 py-2 rounded-pill shadow">Save SGB Entry</button>
//             </div>

//           </form>
//         </div>
//       </div>
//     );
//   }
// }

// export default SGB;


import React, { Component } from 'react';

export class SGB extends Component {
  state = {
    investorName: "",
    seriesName: "",
    issueDate: "",
    maturityDate: "",
    quantity: "",
    issuePricePerGram: "",
    totalAmountInvested: "",
    paymentMode: "",
    nextInterestPaymentDate: "",
    receipt: null,
    comments: ""
  };

  handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") this.setState({ [name]: files[0] });
    else this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in this.state) formData.append(key, this.state[key]);

    try {
      const res = await fetch("http://localhost:5000/dashboard/sgb", {
        method: "POST",
        body: formData
      });

      const data = await res.json();
      console.log("SGB Saved:", data);
      alert("SGB entry added successfully!");

      this.setState({
        investorName: "", seriesName: "", issueDate: "", maturityDate: "",
        quantity: "", issuePricePerGram: "", totalAmountInvested: "",
        paymentMode: "", nextInterestPaymentDate: "", receipt: null, comments: ""
      });
    } catch (err) {
      console.error("Error saving SGB:", err);
      alert("Error saving SGB entry.");
    }
  };

  render() {
    return (
      <div className="container py-4">
        <div className="card shadow border-0">
          <div className="card-body p-4">
            <h2 className="text-center text-warning mb-4">Sovereign Gold Bond Entry Form</h2>
            <form className="row g-3" onSubmit={this.handleSubmit}>

              <div className="col-md-6">
                <label className="form-label fw-bold">Investor Name *</label>
                <input type="text" className="form-control" name="investorName" value={this.state.investorName} onChange={this.handleChange} required />
              </div>

              <div className="col-md-6">
                <label className="form-label fw-bold">SGB Series *</label>
                <input type="text" className="form-control" name="seriesName" value={this.state.seriesName} onChange={this.handleChange} required />
              </div>

              <div className="col-md-6">
                <label className="form-label fw-bold">Issue Date *</label>
                <input type="date" className="form-control" name="issueDate" value={this.state.issueDate} onChange={this.handleChange} required />
              </div>

              <div className="col-md-6">
                <label className="form-label fw-bold">Maturity Date *</label>
                <input type="date" className="form-control" name="maturityDate" value={this.state.maturityDate} onChange={this.handleChange} required />
              </div>

              <div className="col-md-6">
                <label className="form-label fw-bold">Quantity (in grams) *</label>
                <input type="number" step="0.01" className="form-control" name="quantity" value={this.state.quantity} onChange={this.handleChange} required />
              </div>

              <div className="col-md-6">
                <label className="form-label fw-bold">Issue Price per Gram (₹) *</label>
                <input type="number" step="0.01" className="form-control" name="issuePricePerGram" value={this.state.issuePricePerGram} onChange={this.handleChange} required />
              </div>

              <div className="col-md-6">
                <label className="form-label fw-bold">Total Amount Invested (₹) *</label>
                <input type="number" className="form-control" name="totalAmountInvested" value={this.state.totalAmountInvested} onChange={this.handleChange} required />
              </div>

              <div className="col-md-6">
                <label className="form-label fw-bold">Payment Mode *</label>
                <select className="form-select" name="paymentMode" value={this.state.paymentMode} onChange={this.handleChange} required>
                  <option value="">Select Mode</option>
                  <option value="netbanking">Net Banking</option>
                  <option value="upi">UPI</option>
                  <option value="cheque">Cheque</option>
                  <option value="auto-debit">Auto Debit</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label fw-bold">Next Interest Payment Date *</label>
                <input type="date" className="form-control" name="nextInterestPaymentDate" value={this.state.nextInterestPaymentDate} onChange={this.handleChange} required />
              </div>

              <div className="col-md-6">
                <label className="form-label fw-bold">Upload Receipt</label>
                <input type="file" className="form-control" name="receipt" onChange={this.handleChange} />
              </div>

              <div className="col-12">
                <label className="form-label fw-bold">Comments</label>
                <textarea className="form-control" name="comments" rows="3" value={this.state.comments} onChange={this.handleChange}></textarea>
              </div>

              <div className="col-12 text-center">
                <button type="submit" className="btn btn-warning px-5 py-2 rounded-pill shadow">Save SGB Entry</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SGB;
