import React, { useState } from "react";
import "../../components/css/PaySlipHistory.css";

const Admin_PaySlip_History = () => {
  const [search, setSearch] = useState("");
  const [yearFilter, setYearFilter] = useState("All");

  // Dummy Data (Later: fetch from Django API)
  const payslips = [
    { id: 1, empId: "EMP101", name: "Vignesh", month: "January", year: "2025", net: "45,000", status: "Generated" },
    { id: 2, empId: "EMP102", name: "Arun", month: "February", year: "2025", net: "40,000", status: "Generated" },
    { id: 3, empId: "EMP103", name: "Priya", month: "March", year: "2024", net: "38,500", status: "Downloaded" },
  ];

  const filteredPayslips = payslips.filter((item) => {
    return (
      (yearFilter === "All" || item.year === yearFilter) &&
      (
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.empId.toLowerCase().includes(search.toLowerCase()) ||
        item.month.toLowerCase().includes(search.toLowerCase()) ||
        item.year.includes(search)
      )
    );
  });

  return (
    <div className="admin-history-container">
      <h2 className="admin-history-title">Payslip History (Admin)</h2>

      {/* Filters */}
      <div className="filter-row">
        <input
          type="text"
          placeholder="Search employee, month, year…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={yearFilter}
          onChange={(e) => setYearFilter(e.target.value)}
        >
          <option value="All">All Years</option>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
        </select>
      </div>

      {/* Table */}
      <table className="admin-history-table">
        <thead>
          <tr>
            <th>Emp ID</th>
            <th>Employee Name</th>
            <th>Month</th>
            <th>Year</th>
            <th>Net Salary</th>
            <th>Status</th>
            <th>Download</th>
            <th>View</th>
          </tr>
        </thead>

        <tbody>
          {filteredPayslips.length > 0 ? (
            filteredPayslips.map((item) => (
              <tr key={item.id}>
                <td>{item.empId}</td>
                <td>{item.name}</td>
                <td>{item.month}</td>
                <td>{item.year}</td>
                <td>₹ {item.net}</td>
                <td>
                  <span className={`status ${item.status.toLowerCase()}`}>
                    {item.status}
                  </span>
                </td>
                <td>
                  <button className="download-btn">PDF</button>
                </td>
                <td>
                  <button className="view-btn">View</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="no-data">No payslips found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Admin_PaySlip_History;
