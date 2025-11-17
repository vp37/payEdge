import "../../components/css/ArrearsAdd.css";

const Arrears_Add = () => {
  return (
    <div className="arrear-container">

      <h2 className="arrear-title">Add Arrear</h2>

      {/* Employee Details */}
      <section>
        <h3 className="section-title">Employee Details</h3>
        <div className="grid-2">
          <input placeholder="Employee ID" />
          <input placeholder="Employee Name" />
          <input placeholder="Department" />
          <input placeholder="Designation" />
        </div>
      </section>

      {/* Arrear Information */}
      <section>
        <h3 className="section-title">Arrear Information</h3>
        <div className="grid-2">
          <select>
            <option>Select Arrear Type</option>
            <option>Salary Arrear</option>
            <option>Bonus Arrear</option>
            <option>Leave Encashment</option>
            <option>Revision Arrear</option>
          </select>
          <input type="month" />
        </div>
        <textarea placeholder="Description / Remarks" />
      </section>

      {/* Earnings */}
      <section>
        <h3 className="section-title">Earnings Arrear</h3>
        <div className="grid-2">
          <input placeholder="Basic Arrear" type="number" />
          <input placeholder="HRA Arrear" type="number" />
          <input placeholder="Conveyance Arrear" type="number" />
          <input placeholder="Special Allowance Arrear" type="number" />
          <input placeholder="Bonus Arrear" type="number" />
        </div>
      </section>

      {/* Deductions */}
      <section>
        <h3 className="section-title">Deductions Arrear</h3>
        <div className="grid-2">
          <input placeholder="PF Arrear" type="number" />
          <input placeholder="ESI Arrear" type="number" />
          <input placeholder="TDS Arrear" type="number" />
          <input placeholder="Loan EMI Arrear" type="number" />
        </div>
      </section>

      {/* Submit */}
      <button className="save-btn">Save Arrear</button>

    </div>
  );
};

export default Arrears_Add;
