import React, { Component } from 'react';

export class RD extends Component {
  state = {
    holderName: "",
    rdType: "",
    bankName: "",
    rdNumber: "",
    startDate: "",
    deductionDate: "",
    maturityDate: "",
    monthlyInstallment: "",
    interestRate: "",
    paymentMode: "",
    receipt: null,
    comments: ""
  };

  handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      this.setState({ [name]: files[0] });
    } else {
      this.setState({ [name]: value });
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (const key in this.state) {
      formData.append(key, this.state[key]);
    }

    try {
      const res = await fetch("http://localhost:5000/rd", {
        method: "POST",
        body: formData
      });

      const data = await res.json();
      console.log("RD Saved:", data);
      alert("RD entry added successfully!");

      // Reset form
      this.setState({
        holderName: "",
        rdType: "",
        bankName: "",
        rdNumber: "",
        startDate: "",
        deductionDate: "",
        maturityDate: "",
        monthlyInstallment: "",
        interestRate: "",
        paymentMode: "",
        receipt: null,
        comments: ""
      });
    } catch (err) {
      console.error("Error saving RD:", err);
      alert("Error saving RD entry.");
    }
  };

  render() {
    return (
      <div className="container min-h-screen bg-cover bg-center flex items-center justify-center p-4"
           style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?money,savings')" }}>
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl border border-gray-200">
          <h2 className="text-2xl font-bold mb-4 text-center text-primary">RD Entry Form</h2>
          <form className="row g-3" onSubmit={this.handleSubmit}>

            {/* RD Holder Name */}
            <div className="col-md-6">
              <label className="form-label fw-bold">RD Holder Name *</label>
              <input type="text" className="form-control" name="holderName" value={this.state.holderName} onChange={this.handleChange} required />
            </div>

            {/* RD Type */}
            <div className="col-md-6">
              <label className="form-label fw-bold">RD Type *</label>
              <select className="form-select" name="rdType" value={this.state.rdType} onChange={this.handleChange} required>
                <option value="">Select RD Type</option>
                <option value="single">Single</option>
                <option value="joint">Joint</option>
              </select>
            </div>

            {/* Bank Name */}
            <div className="col-md-6">
              <label className="form-label fw-bold">Bank Name *</label>
              <input type="text" className="form-control" name="bankName" value={this.state.bankName} onChange={this.handleChange} required />
            </div>

            {/* RD Number */}
            <div className="col-md-6">
              <label className="form-label fw-bold">RD Number *</label>
              <input type="text" className="form-control" name="rdNumber" value={this.state.rdNumber} onChange={this.handleChange} required />
            </div>

            {/* Start Date */}
            <div className="col-md-6">
              <label className="form-label fw-bold">Start Date *</label>
              <input type="date" className="form-control" name="startDate" value={this.state.startDate} onChange={this.handleChange} required />
            </div>

            {/* Deduction Date */}
            <div className="col-md-6">
              <label className="form-label fw-bold">Deduction Date *</label>
              <input type="date" className="form-control" name="deductionDate" value={this.state.deductionDate} onChange={this.handleChange} required />
            </div>

            {/* Maturity Date */}
            <div className="col-md-6">
              <label className="form-label fw-bold">Maturity Date *</label>
              <input type="date" className="form-control" name="maturityDate" value={this.state.maturityDate} onChange={this.handleChange} required />
            </div>

            {/* Monthly Installment */}
            <div className="col-md-6">
              <label className="form-label fw-bold">Monthly Installment (₹) *</label>
              <input type="number" className="form-control" name="monthlyInstallment" value={this.state.monthlyInstallment} onChange={this.handleChange} min="0" required />
            </div>

            {/* Interest Rate */}
            <div className="col-md-6">
              <label className="form-label fw-bold">Interest Rate (%) *</label>
              <input type="number" step="0.01" className="form-control" name="interestRate" value={this.state.interestRate} onChange={this.handleChange} min="0" required />
            </div>

            {/* Payment Mode */}
            <div className="col-md-6">
              <label className="form-label fw-bold">Payment Mode *</label>
              <select className="form-select" name="paymentMode" value={this.state.paymentMode} onChange={this.handleChange} required>
                <option value="">Select Mode</option>
                <option value="cash">Cash</option>
                <option value="cheque">Cheque</option>
                <option value="online">Online Transfer</option>
                <option value="upi">UPI</option>
              </select>
            </div>

            {/* Receipt */}
            <div className="col-md-6">
              <label className="form-label fw-bold">Upload Receipt</label>
              <input type="file" className="form-control" name="receipt" onChange={this.handleChange} />
            </div>

            {/* Comments */}
            <div className="col-12">
              <label className="form-label fw-bold">Any Comments</label>
              <textarea className="form-control" rows="3" name="comments" value={this.state.comments} onChange={this.handleChange}></textarea>
            </div>

            {/* Submit */}
            <div className="col-12 text-center">
              <button type="submit" className="btn btn-success px-5 py-2 rounded-pill shadow">Save RD Entry</button>
            </div>

          </form>
        </div>
      </div>
    );
  }
}

export default RD;
