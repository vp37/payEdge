import React, { useState } from "react";

const UploadPayslip = () => {
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a PDF file!");
      return;
    }
    alert("Payslip uploaded successfully!");
  };

  return (
    <div className="upload-container">
      <h2 className="upload-title">Upload Payslip PDF</h2>

      <form className="upload-form" onSubmit={handleSubmit}>
        
        {/* Employee ID */}
        <div className="form-group">
          <label>Employee ID</label>
          <input type="text" placeholder="Enter Employee ID" required />
        </div>

        {/* Month */}
        <div className="form-group">
          <label>Month</label>
          <select required>
            <option value="">Select Month</option>
            {[
              "January","February","March","April","May","June",
              "July","August","September","October","November","December"
            ].map((m, i) => (
              <option key={i} value={m}>{m}</option>
            ))}
          </select>
        </div>

        {/* Year */}
        <div className="form-group">
          <label>Year</label>
          <select required>
            <option value="">Select Year</option>
            {[2023, 2024, 2025, 2026].map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </div>

        {/* PDF Upload */}
        <div className="form-group file-upload">
          <label>Payslip PDF</label>
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => setFile(e.target.files[0])}
            required
          />
        </div>

        {/* Submit */}
        <button className="upload-btn" type="submit">Upload</button>
      </form>
    </div>
  );
};

export default UploadPayslip;
