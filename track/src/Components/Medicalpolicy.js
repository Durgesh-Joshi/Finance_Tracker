import React, { Component } from 'react';

export class MedicalPolicy extends Component {
  state = {
    holderName: "",
    policyNumber: "",
    insuranceCompany: "",
    policyType: "",
    coverageAmount: "",
    premiumAmount: "",
    startDate: "",
    expiryDate: "",
    paymentMode: "",
    receipt: null,
    preferredHospitals: "",
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
      const res = await fetch("http://localhost:5000/medicalpolicy", {
        method: "POST",
        body: formData
      });
      const data = await res.json();
      console.log("Medical Policy Saved:", data);
      alert("Medical Policy entry added successfully!");

      // Reset form
      this.setState({
        holderName: "",
        policyNumber: "",
        insuranceCompany: "",
        policyType: "",
        coverageAmount: "",
        premiumAmount: "",
        startDate: "",
        expiryDate: "",
        paymentMode: "",
        receipt: null,
        preferredHospitals: "",
        comments: ""
      });
    } catch (err) {
      console.error("Error saving Medical Policy:", err);
      alert("Error saving Medical Policy entry.");
    }
  };

  render() {
    return (
      <div
        className="container min-h-screen bg-cover bg-center flex items-center justify-center p-4"
        style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?health,insurance')" }}
      >
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl border border-gray-200">
          <h2 className="text-2xl font-bold mb-4 text-center text-primary">Medical Policy Entry Form</h2>
          <form className="row g-3" onSubmit={this.handleSubmit}>

            {/* Policy Holder Name */}
            <div className="col-md-6">
              <label className="form-label fw-bold">Policy Holder Name *</label>
              <input type="text" className="form-control" name="holderName" value={this.state.holderName} onChange={this.handleChange} required />
            </div>

            {/* Policy Number */}
            <div className="col-md-6">
              <label className="form-label fw-bold">Policy Number *</label>
              <input type="text" className="form-control" name="policyNumber" value={this.state.policyNumber} onChange={this.handleChange} required />
            </div>

            {/* Insurance Company */}
            <div className="col-md-6">
              <label className="form-label fw-bold">Insurance Company *</label>
              <input type="text" className="form-control" name="insuranceCompany" value={this.state.insuranceCompany} onChange={this.handleChange} required />
            </div>

            {/* Policy Type */}
            <div className="col-md-6">
              <label className="form-label fw-bold">Policy Type *</label>
              <select className="form-select" name="policyType" value={this.state.policyType} onChange={this.handleChange} required>
                <option value="">Select Type</option>
                <option value="individual">Individual</option>
                <option value="family-floater">Family Floater</option>
                <option value="group">Group Policy</option>
              </select>
            </div>

            {/* Coverage Amount */}
            <div className="col-md-6">
              <label className="form-label fw-bold">Coverage Amount (₹) *</label>
              <input type="number" className="form-control" name="coverageAmount" value={this.state.coverageAmount} onChange={this.handleChange} min="0" required />
            </div>

            {/* Premium Amount */}
            <div className="col-md-6">
              <label className="form-label fw-bold">Premium Amount (₹) *</label>
              <input type="number" className="form-control" name="premiumAmount" value={this.state.premiumAmount} onChange={this.handleChange} min="0" required />
            </div>

            {/* Start Date */}
            <div className="col-md-6">
              <label className="form-label fw-bold">Policy Start Date *</label>
              <input type="date" className="form-control" name="startDate" value={this.state.startDate} onChange={this.handleChange} required />
            </div>

            {/* Expiry Date */}
            <div className="col-md-6">
              <label className="form-label fw-bold">Policy Expiry Date *</label>
              <input type="date" className="form-control" name="expiryDate" value={this.state.expiryDate} onChange={this.handleChange} required />
            </div>

            {/* Payment Mode */}
            <div className="col-md-6">
              <label className="form-label fw-bold">Payment Mode *</label>
              <select className="form-select" name="paymentMode" value={this.state.paymentMode} onChange={this.handleChange} required>
                <option value="">Select Mode</option>
                <option value="netbanking">Net Banking</option>
                <option value="upi">UPI</option>
                <option value="cheque">Cheque</option>
                <option value="auto-debit">Auto Debit</option>
                <option value="credit-card">Credit Card</option>
              </select>
            </div>

            {/* Receipt Upload */}
            <div className="col-md-6">
              <label className="form-label fw-bold">Upload Receipt</label>
              <input type="file" className="form-control" name="receipt" onChange={this.handleChange} />
            </div>

            {/* Preferred Network Hospitals */}
            <div className="col-12">
              <label className="form-label fw-bold">Preferred Network Hospitals</label>
              <textarea className="form-control" rows="2" name="preferredHospitals" value={this.state.preferredHospitals} onChange={this.handleChange}></textarea>
            </div>

            {/* Any Comments */}
            <div className="col-12">
              <label className="form-label fw-bold">Any Comments</label>
              <textarea className="form-control" rows="3" name="comments" value={this.state.comments} onChange={this.handleChange}></textarea>
            </div>

            {/* Submit Button */}
            <div className="col-12 text-center">
              <button type="submit" className="btn btn-success px-5 py-2 rounded-pill shadow">
                Save Medical Policy
              </button>
            </div>

          </form>
        </div>
      </div>
    );
  }
}

export default MedicalPolicy;
