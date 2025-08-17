// import React, { Component } from "react";

// export class Fd extends Component {
//   state = {
//     fdHolderName: "",
//     fdType: "",
//     bankName: "",
//     fdNumber: "",
//     startDate: "",
//     maturityDate: "",
//     principalAmount: "", // renamed from amount
//     interestRate: "",
//     paymentMode: "",
//     receiptUpload: null,
//     comments: "",
//     message: ""
//   };

//   handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (files) {
//       this.setState({ [name]: files[0] });
//     } else {
//       this.setState({ [name]: value });
//     }
//   };

//   handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     for (const key in this.state) {
//       if (key !== "message") formData.append(key, this.state[key]);
//     }

//     try {
//       // Use backend route /fds
//       const res = await fetch("http://localhost:5000/fds", {
//         method: "POST",
//         body: formData
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         this.setState({ message: `Error: ${data.message}` });
//         return;
//       }

//       console.log("FD Saved:", data);
//       this.setState({
//         fdHolderName: "",
//         fdType: "",
//         bankName: "",
//         fdNumber: "",
//         startDate: "",
//         maturityDate: "",
//         principalAmount: "",
//         interestRate: "",
//         paymentMode: "",
//         receiptUpload: null,
//         comments: "",
//         message: "FD saved successfully!"
//       });
//     } catch (err) {
//       console.error(err);
//       this.setState({ message: "Error: Could not connect to server." });
//     }
//   };

//   render() {
//     return (
//       <div className="container">
//         <h2 className="text-center mt-4">FD Entry Form</h2>
//         {this.state.message && <p className="text-center">{this.state.message}</p>}
//         <form onSubmit={this.handleSubmit}>
//           <input type="text" name="fdHolderName" placeholder="FD Holder Name" value={this.state.fdHolderName} onChange={this.handleChange} required />
//           <select name="fdType" value={this.state.fdType} onChange={this.handleChange} required>
//             <option value="">Select FD Type</option>
//             <option value="single">Single</option>
//             <option value="joint">Joint</option>
//           </select>
//           <input type="text" name="bankName" placeholder="Bank Name" value={this.state.bankName} onChange={this.handleChange} required />
//           <input type="text" name="fdNumber" placeholder="FD Number" value={this.state.fdNumber} onChange={this.handleChange} required />
//           <input type="date" name="startDate" value={this.state.startDate} onChange={this.handleChange} required />
//           <input type="date" name="maturityDate" value={this.state.maturityDate} onChange={this.handleChange} required />
//           <input type="number" name="principalAmount" placeholder="Amount" value={this.state.principalAmount} onChange={this.handleChange} required />
//           <input type="number" step="0.01" name="interestRate" placeholder="Interest Rate" value={this.state.interestRate} onChange={this.handleChange} required />
//           <select name="paymentMode" value={this.state.paymentMode} onChange={this.handleChange} required>
//             <option value="">Payment Mode</option>
//             <option value="cash">Cash</option>
//             <option value="cheque">Cheque</option>
//             <option value="online">Online</option>
//             <option value="upi">UPI</option>
//           </select>
//           <input type="file" name="receiptUpload" onChange={this.handleChange} />
//           <textarea name="comments" placeholder="Comments" value={this.state.comments} onChange={this.handleChange}></textarea>
//           <button type="submit">Save FD Entry</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default Fd;











// import React, { Component } from "react";

// export class Fd extends Component {
//   state = {
//     fdHolderName: "",
//     fdType: "",
//     bankName: "",
//     fdNumber: "",
//     startDate: "",
//     maturityDate: "",
//     amount: "",
//     interestRate: "",
//     paymentMode: "",
//     receiptUpload: null,
//     comments: "",
//     message: ""
//   };

//   handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (files) {
//       this.setState({ [name]: files[0] });
//     } else {
//       this.setState({ [name]: value });
//     }
//   };

//   handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     for (const key in this.state) {
//       if (key !== "message") formData.append(key, this.state[key]);
//     }

//     try {
//       // Correct POST URL matching backend route
//       const res = await fetch("http://localhost:5000/dashboard/fds", {
//         method: "POST",
//         body: formData
//       });

//       if (!res.ok) {
//         const errData = await res.json();
//         this.setState({ message: `Error: ${errData.message}` });
//         return;
//       }

//       const data = await res.json();
//       console.log("FD Saved:", data);
//       this.setState({
//         fdHolderName: "",
//         fdType: "",
//         bankName: "",
//         fdNumber: "",
//         startDate: "",
//         maturityDate: "",
//         amount: "",
//         interestRate: "",
//         paymentMode: "",
//         receiptUpload: null,
//         comments: "",
//         message: "FD saved successfully!"
//       });
//     } catch (err) {
//       console.error(err);
//       this.setState({ message: "Error: Could not connect to server." });
//     }
//   };

//   render() {
//     return (
//       <div className="container">
//         <div className="min-h-screen bg-cover bg-center flex items-center justify-center p-4" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?finance,bank')" }}>
//           <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl border border-gray-200">
//             <h2 className="text-2xl font-bold mb-4 text-center text-primary">FD Entry Form</h2>
//             {this.state.message && <p className="text-center mb-4">{this.state.message}</p>}
//             <form className="row g-3" onSubmit={this.handleSubmit}>
//               {/* FD Holder Name */}
//               <div className="col-md-6">
//                 <label className="form-label fw-bold">FD Holder Name *</label>
//                 <input type="text" className="form-control" name="fdHolderName" value={this.state.fdHolderName} onChange={this.handleChange} required />
//               </div>

//               {/* FD Type */}
//               <div className="col-md-6">
//                 <label className="form-label fw-bold">FD Type *</label>
//                 <select className="form-select" name="fdType" value={this.state.fdType} onChange={this.handleChange} required>
//                   <option value="">Select FD Type</option>
//                   <option value="single">Single</option>
//                   <option value="joint">Joint</option>
//                 </select>
//               </div>

//               {/* Bank Name */}
//               <div className="col-md-6">
//                 <label className="form-label fw-bold">Bank Name *</label>
//                 <input type="text" className="form-control" name="bankName" value={this.state.bankName} onChange={this.handleChange} required />
//               </div>

//               {/* FD Number */}
//               <div className="col-md-6">
//                 <label className="form-label fw-bold">FD Number *</label>
//                 <input type="text" className="form-control" name="fdNumber" value={this.state.fdNumber} onChange={this.handleChange} required />
//               </div>

//               {/* Start Date */}
//               <div className="col-md-6">
//                 <label className="form-label fw-bold">Start Date *</label>
//                 <input type="date" className="form-control" name="startDate" value={this.state.startDate} onChange={this.handleChange} required />
//               </div>

//               {/* Maturity Date */}
//               <div className="col-md-6">
//                 <label className="form-label fw-bold">Maturity Date *</label>
//                 <input type="date" className="form-control" name="maturityDate" value={this.state.maturityDate} onChange={this.handleChange} required />
//               </div>

//               {/* Amount */}
//               <div className="col-md-6">
//                 <label className="form-label fw-bold">Amount (₹) *</label>
//                 <input type="number" className="form-control" name="amount" value={this.state.amount} onChange={this.handleChange} required />
//               </div>

//               {/* Interest Rate */}
//               <div className="col-md-6">
//                 <label className="form-label fw-bold">Interest Rate (%) *</label>
//                 <input type="number" step="0.01" className="form-control" name="interestRate" value={this.state.interestRate} onChange={this.handleChange} required />
//               </div>

//               {/* Payment Mode */}
//               <div className="col-md-6">
//                 <label className="form-label fw-bold">Payment Mode *</label>
//                 <select className="form-select" name="paymentMode" value={this.state.paymentMode} onChange={this.handleChange} required>
//                   <option value="">Select Mode</option>
//                   <option value="cash">Cash</option>
//                   <option value="cheque">Cheque</option>
//                   <option value="online">Online Transfer</option>
//                   <option value="upi">UPI</option>
//                 </select>
//               </div>

//               {/* Receipt Upload */}
//               <div className="col-md-6">
//                 <label className="form-label fw-bold">Upload Receipt</label>
//                 <input type="file" className="form-control" name="receiptUpload" onChange={this.handleChange} />
//               </div>

//               {/* Comments */}
//               <div className="col-12">
//                 <label className="form-label fw-bold">Any Comments</label>
//                 <textarea className="form-control" rows="3" name="comments" value={this.state.comments} onChange={this.handleChange}></textarea>
//               </div>

//               {/* Submit */}
//               <div className="col-12 text-center">
//                 <button type="submit" className="btn btn-primary px-5 py-2 rounded-pill shadow">Save FD Entry</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Fd;

import React, { Component } from "react";

export class Fd extends Component {
  state = {
    fdHolderName: "",
    fdType: "",
    bankName: "",
    fdNumber: "",
    startDate: "",
    maturityDate: "",
    principalAmount: "",
    interestRate: "",
    paymentMode: "",
    receipt: null,
    comments: ""
  };

  handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) this.setState({ [name]: files[0] });
    else this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("fdHolderName", this.state.fdHolderName);
    formData.append("fdType", this.state.fdType);
    formData.append("bankName", this.state.bankName);
    formData.append("fdNumber", this.state.fdNumber);
    formData.append("startDate", this.state.startDate);
    formData.append("maturityDate", this.state.maturityDate);
    formData.append("principalAmount", this.state.principalAmount);
    formData.append("interestRate", this.state.interestRate);
    formData.append("paymentMode", this.state.paymentMode);
    formData.append("comments", this.state.comments);
    if (this.state.receipt) formData.append("receipt", this.state.receipt);

    try {
      const res = await fetch("http://localhost:5000/dashboard/fds/add", {
        method: "POST",
        body: formData
      });

      const data = await res.json(); // safely parse JSON
      if (!res.ok) {
        console.error("Server error:", data);
        alert("Error saving FD: " + data.message);
        return;
      }

      alert("FD Saved Successfully!");
      this.setState({
        fdHolderName: "",
        fdType: "",
        bankName: "",
        fdNumber: "",
        startDate: "",
        maturityDate: "",
        principalAmount: "",
        interestRate: "",
        paymentMode: "",
        receipt: null,
        comments: ""
      });
    } catch (err) {
      console.error("Network or server error:", err);
      alert("Error saving FD. Check console for details.");
    }
  };

  render() {
    return (
      <div className="container">
        <div
          className="min-h-screen bg-cover bg-center flex items-center justify-center p-4"
          style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?finance,bank')" }}
        >
          <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-center text-primary">
              FD Entry Form
            </h2>
            <form className="row g-3" onSubmit={this.handleSubmit}>
              {/* FD Holder Name */}
              <div className="col-md-6">
                <label className="form-label fw-bold">FD Holder Name *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter FD Holder Name"
                  name="fdHolderName"
                  value={this.state.fdHolderName}
                  onChange={this.handleChange}
                  required
                />
              </div>

              {/* FD Type */}
              <div className="col-md-6">
                <label className="form-label fw-bold">FD Type *</label>
                <select
                  className="form-select"
                  name="fdType"
                  value={this.state.fdType}
                  onChange={this.handleChange}
                  required
                >
                  <option value="">Select FD Type</option>
                  <option value="single">Single</option>
                  <option value="joint">Joint</option>
                </select>
              </div>

              {/* Bank Name */}
              <div className="col-md-6">
                <label className="form-label fw-bold">Bank Name *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Bank Name"
                  name="bankName"
                  value={this.state.bankName}
                  onChange={this.handleChange}
                  required
                />
              </div>

              {/* FD Number */}
              <div className="col-md-6">
                <label className="form-label fw-bold">FD Number *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter FD Number"
                  name="fdNumber"
                  value={this.state.fdNumber}
                  onChange={this.handleChange}
                  required
                />
              </div>

              {/* Start Date */}
              <div className="col-md-6">
                <label className="form-label fw-bold">Start Date *</label>
                <input
                  type="date"
                  className="form-control"
                  name="startDate"
                  value={this.state.startDate}
                  onChange={this.handleChange}
                  required
                />
              </div>

              {/* Maturity Date */}
              <div className="col-md-6">
                <label className="form-label fw-bold">Maturity Date *</label>
                <input
                  type="date"
                  className="form-control"
                  name="maturityDate"
                  value={this.state.maturityDate}
                  onChange={this.handleChange}
                  required
                />
              </div>

              {/* Principal Amount */}
              <div className="col-md-6">
                <label className="form-label fw-bold">Amount (₹) *</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Amount"
                  min="0"
                  name="principalAmount"
                  value={this.state.principalAmount}
                  onChange={this.handleChange}
                  required
                />
              </div>

              {/* Interest Rate */}
              <div className="col-md-6">
                <label className="form-label fw-bold">Interest Rate (%) *</label>
                <input
                  type="number"
                  step="0.01"
                  className="form-control"
                  placeholder="Enter Interest Rate"
                  min="0"
                  name="interestRate"
                  value={this.state.interestRate}
                  onChange={this.handleChange}
                  required
                />
              </div>

              {/* Payment Mode */}
              <div className="col-md-6">
                <label className="form-label fw-bold">Payment Mode *</label>
                <select
                  className="form-select"
                  name="paymentMode"
                  value={this.state.paymentMode}
                  onChange={this.handleChange}
                  required
                >
                  <option value="">Select Mode</option>
                  <option value="cash">Cash</option>
                  <option value="cheque">Cheque</option>
                  <option value="online">Online Transfer</option>
                  <option value="upi">UPI</option>
                </select>
              </div>

              {/* Receipt Upload */}
              <div className="col-md-6">
                <label className="form-label fw-bold">Upload Receipt</label>
                <input
                  type="file"
                  className="form-control"
                  name="receipt"
                  onChange={this.handleChange}
                />
              </div>

              {/* Comments */}
              <div className="col-12">
                <label className="form-label fw-bold">Any Comments</label>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Write any additional comments here"
                  name="comments"
                  value={this.state.comments}
                  onChange={this.handleChange}
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="col-12 text-center">
                <button
                  type="submit"
                  className="btn btn-primary px-5 py-2 rounded-pill shadow"
                >
                  Save FD Entry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Fd;




// import React, { useState } from "react";

// const Fd = () => {
//   const [fdHolderName, setFdHolderName] = useState("");
//   const [fdType, setFdType] = useState("");
//   const [bankName, setBankName] = useState("");
//   const [fdNumber, setFdNumber] = useState("");
//   const [principalAmount, setPrincipalAmount] = useState("");
//   const [interestRate, setInterestRate] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [maturityDate, setMaturityDate] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const fdData = {
//       fdHolderName,
//       fdType,
//       bankName,
//       fdNumber,
//       principalAmount: Number(principalAmount),
//       interestRate: Number(interestRate),
//       startDate,
//       maturityDate,
//     };

//     try {
//       const response = await fetch("http://localhost:5000/dashboard/fds", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(fdData),
//       });

//       if (!response.ok) {
//         // Backend returned error (JSON)
//         const errData = await response.json();
//         setMessage(`Error: ${errData.message}`);
//         return;
//       }

//       const data = await response.json();
//       console.log("FD saved:", data);
//       setMessage("FD added successfully!");

//       // Clear form
//       setFdHolderName("");
//       setFdType("");
//       setBankName("");
//       setFdNumber("");
//       setPrincipalAmount("");
//       setInterestRate("");
//       setStartDate("");
//       setMaturityDate("");
//     } catch (err) {
//       console.error("Network or JSON error:", err);
//       setMessage("Error: Could not connect to server or invalid response");
//     }
//   };

//   return (
//     <div style={{ padding: "20px", maxWidth: "600px" }}>
//       <h1>Add New FD</h1>
//       {message && <p>{message}</p>}
//       <form onSubmit={handleSubmit} style={{ display: "grid", gap: "10px" }}>
//         <input
//           type="text"
//           placeholder="FD Holder Name"
//           value={fdHolderName}
//           onChange={(e) => setFdHolderName(e.target.value)}
//           required
//         />
//         <input
//           type="text"
//           placeholder="FD Type"
//           value={fdType}
//           onChange={(e) => setFdType(e.target.value)}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Bank Name"
//           value={bankName}
//           onChange={(e) => setBankName(e.target.value)}
//           required
//         />
//         <input
//           type="text"
//           placeholder="FD Number"
//           value={fdNumber}
//           onChange={(e) => setFdNumber(e.target.value)}
//           required
//         />
//         <input
//           type="number"
//           placeholder="Principal Amount"
//           value={principalAmount}
//           onChange={(e) => setPrincipalAmount(e.target.value)}
//           required
//         />
//         <input
//           type="number"
//           placeholder="Interest Rate"
//           value={interestRate}
//           onChange={(e) => setInterestRate(e.target.value)}
//           required
//         />
//         <input
//           type="date"
//           placeholder="Start Date"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//           required
//         />
//         <input
//           type="date"
//           placeholder="Maturity Date"
//           value={maturityDate}
//           onChange={(e) => setMaturityDate(e.target.value)}
//           required
//         />
//         <button type="submit">Add FD</button>
//       </form>
//     </div>
//   );
// };

// export default Fd;
