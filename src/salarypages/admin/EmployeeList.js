import React, { useState } from "react";
import "../../components/css/EmployeeList.css";

const Employee_List = () => {
  const [search, setSearch] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState(null); // popup data
  const [showPopup, setShowPopup] = useState(false);

  const employees = [
    { id: "EMP101", name: "Vignesh", dept: "IT", email: "vignesh@example.com", phone: "9876543210" },
    { id: "EMP102", name: "Arun", dept: "HR", email: "arun@example.com", phone: "9876501234" },
    { id: "EMP103", name: "Priya", dept: "Finance", email: "priya@example.com", phone: "9955664477" },
    { id: "EMP104", name: "Karthik", dept: "IT", email: "karthik@example.com", phone: "9090909090" },
  ];

  const filteredEmployees = employees.filter(
    (emp) =>
      emp.name.toLowerCase().includes(search.toLowerCase()) ||
      emp.id.toLowerCase().includes(search.toLowerCase())
  );

  const openPopup = (emp) => {
    setSelectedEmployee(emp);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedEmployee(null);
  };

  return (
    <div className="employee-list-container">
      <h2 className="employee-title">Employee List</h2>

      {/* Search Bar */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search Employee by Name or ID..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <table className="employee-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Payslips</th>
          </tr>
        </thead>

        <tbody>
          {filteredEmployees.map((emp, index) => (
            <tr key={index}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.dept}</td>
              <td>
                <button
                  className="view-btn"
                  onClick={() => openPopup(emp)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}

          {filteredEmployees.length === 0 && (
            <tr>
              <td colSpan="4" className="no-data">
                No matching employees found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Popup */}
      {showPopup && selectedEmployee && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h3>Employee Details</h3>

            <p><strong>ID:</strong> {selectedEmployee.id}</p>
            <p><strong>Name:</strong> {selectedEmployee.name}</p>
            <p><strong>Department:</strong> {selectedEmployee.dept}</p>
            <p><strong>Email:</strong> {selectedEmployee.email}</p>
            <p><strong>Phone:</strong> {selectedEmployee.phone}</p>

            <button className="close-btn" onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Employee_List;
