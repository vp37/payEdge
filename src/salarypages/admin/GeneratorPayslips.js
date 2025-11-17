import React, { useState } from "react";
import "../../components/css/Generated_paySlip.css";

const GeneratePayslip = () => {
  const [form, setForm] = useState({
    employeeId: "",
    month: "",
    year: "",
    basic: "",
    hra: "",
    allowances: "",
    bonus: "",
    arrears: "",
    pf: "",
    esi: "",
    pt: "",
    tds: "",
    loan: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-container">
      <h2 className="page-title">Generate Payslip</h2>

      <div className="grid-wrapper">
        {/* LEFT SIDE */}
        <div className="left-grid">
          {/* Employee */}
          <div className="form-section">
            <label>Select Employee</label>
            <select name="employeeId" onChange={handleChange}>
              <option>Select</option>
            </select>
          </div>

          {/* Earnings */}
          <div className="form-section">
            <h3>Earnings</h3>
            <input name="basic" placeholder="Basic" onChange={handleChange} />
            <input name="hra" placeholder="HRA" onChange={handleChange} />
            <input name="allowances" placeholder="Allowance" onChange={handleChange} />
            <input name="bonus" placeholder="Bonus" onChange={handleChange} />
            <input name="arrears" placeholder="Arrears" onChange={handleChange} />
          </div>

          {/* Buttons */}
          <div className="button-box">
            <button className="btn">Generate PDF</button>
            <button className="btn save">Save Payslip</button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="right-grid">
                      {/* Month / Year */}
          <div className="form-section">
            <label>Month</label>
            <select name="month" onChange={handleChange}>
              <option>January</option>
              <option>February</option>
            </select>

            <label>Year</label>
            <select name="year" onChange={handleChange}>
              <option>2024</option>
              <option>2025</option>
            </select>
          </div>
          <div className="form-section">
            <h3>Deductions</h3>
            <input name="pf" placeholder="PF" onChange={handleChange} />
            <input name="esi" placeholder="ESI" onChange={handleChange} />
            <input name="pt" placeholder="Professional Tax" onChange={handleChange} />
            <input name="tds" placeholder="TDS" onChange={handleChange} />
            <input name="loan" placeholder="Loan EMI" onChange={handleChange} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneratePayslip;
