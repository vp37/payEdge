import React, { useState } from "react";
import "../../components/css/SalaryStructure.css";

const SalaryStructure = () => {
  const [salary, setSalary] = useState({
    basic: "",
    hra: "",
    conveyance: "",
    special: "",
    medical: "",
    bonus: "",
    pf: "",
    esi: "",
    pt: "",
    tds: "",
    loan: ""
  });

  const handleChange = (e) => {
    setSalary({ ...salary, [e.target.name]: e.target.value });
  };

  const totalEarnings =
    (parseFloat(salary.basic) || 0) +
    (parseFloat(salary.hra) || 0) +
    (parseFloat(salary.conveyance) || 0) +
    (parseFloat(salary.special) || 0) +
    (parseFloat(salary.medical) || 0) +
    (parseFloat(salary.bonus) || 0);

  const totalDeductions =
    (parseFloat(salary.pf) || 0) +
    (parseFloat(salary.esi) || 0) +
    (parseFloat(salary.pt) || 0) +
    (parseFloat(salary.tds) || 0) +
    (parseFloat(salary.loan) || 0);

  const netSalary = totalEarnings - totalDeductions;

  return (
    <div className="salary-container">
      <h2 className="salary-title">Salary Structure</h2>

      {/* Earnings Section */}
      <section>
        <h3 className="section-title">Earnings</h3>
        <div className="grid-2">
          <div className="form-group">
            <label>Basic Salary</label>
            <input name="basic" onChange={handleChange} type="number" />
          </div>
          <div className="form-group">
            <label>HRA</label>
            <input name="hra" onChange={handleChange} type="number" />
          </div>
          <div className="form-group">
            <label>Conveyance</label>
            <input name="conveyance" onChange={handleChange} type="number" />
          </div>
          <div className="form-group">
            <label>Special Allowance</label>
            <input name="special" onChange={handleChange} type="number" />
          </div>
          <div className="form-group">
            <label>Medical Allowance</label>
            <input name="medical" onChange={handleChange} type="number" />
          </div>
          <div className="form-group">
            <label>Bonus</label>
            <input name="bonus" onChange={handleChange} type="number" />
          </div>
        </div>
      </section>

      {/* Deductions Section */}
      <section>
        <h3 className="section-title">Deductions</h3>
        <div className="grid-2">
          <div className="form-group">
            <label>PF</label>
            <input name="pf" onChange={handleChange} type="number" />
          </div>
          <div className="form-group">
            <label>ESI</label>
            <input name="esi" onChange={handleChange} type="number" />
          </div>
          <div className="form-group">
            <label>Professional Tax</label>
            <input name="pt" onChange={handleChange} type="number" />
          </div>
          <div className="form-group">
            <label>TDS</label>
            <input name="tds" onChange={handleChange} type="number" />
          </div>
          <div className="form-group">
            <label>Loan EMI</label>
            <input name="loan" onChange={handleChange} type="number" />
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="summary-box">
        <h3 className="section-title">Salary Summary</h3>
        <div className="summary-row">
          <span>Total Earnings:</span>
          <strong>₹ {totalEarnings}</strong>
        </div>
        <div className="summary-row">
          <span>Total Deductions:</span>
          <strong>₹ {totalDeductions}</strong>
        </div>
        <div className="summary-row net">
          <span>Net Salary:</span>
          <strong>₹ {netSalary}</strong>
        </div>
      </section>

      <button className="save-btn">Save Structure</button>
    </div>
  );
};

export default SalaryStructure;
