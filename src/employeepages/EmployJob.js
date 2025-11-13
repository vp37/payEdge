import { useState } from "react";
import "../components/css/EmployJob.css";

const EmployJob = () => {
  const [formData, setFormData] = useState({
    costCenter: "",
    department: "",
    designation: "",
    division: "",
    grade: "",
    location: "",
    reportingTo: "",
  });

  return (
    <div className="employejob-page">
      {/* === Header Section === */}
      <header className="employejob-header">
        <p>Employment & Job</p>
      </header>

      <main className="employejob-content">
        <section id="employejob" className="employeecard">
          <div className="employeejob_header">
            <p className="employeejob_title">Current Position</p>

            <div className="employeejob_actions">
              <button className="resign_btn">Resign</button>
              <button className="timeline_btn">View Timeline</button>
            </div>
          </div>

          <div className="employeejob-grid">
            <div>
              <label>Cost Center</label>
              <input
                type="text"
                placeholder="Enter cost center"
                value={formData.costCenter}
                onChange={(e) =>
                  setFormData({ ...formData, costCenter: e.target.value })
                }
              />
            </div>
            <div>
              <label>Department</label>
              <input
                type="text"
                placeholder="Enter department"
                value={formData.department}
                onChange={(e) =>
                  setFormData({ ...formData, department: e.target.value })
                }
              />
            </div>
            <div>
              <label>Designation</label>
              <input
                type="text"
                placeholder="Enter designation"
                value={formData.designation}
                onChange={(e) =>
                  setFormData({ ...formData, designation: e.target.value })
                }
              />
            </div>
            <div>
              <label>Division</label>
              <input
                type="text"
                placeholder="Enter division"
                value={formData.division}
                onChange={(e) =>
                  setFormData({ ...formData, division: e.target.value })
                }
              />
            </div>
            <div>
              <label>Grade</label>
              <input
                type="text"
                placeholder="Enter grade"
                value={formData.grade}
                onChange={(e) =>
                  setFormData({ ...formData, grade: e.target.value })
                }
              />
            </div>
            <div>
              <label>Location</label>
              <input
                type="text"
                placeholder="Enter location"
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
              />
            </div>
            <div>
              <label>Reporting To</label>
              <input
                type="text"
                placeholder="Enter reporting person"
                value={formData.reportingTo}
                onChange={(e) =>
                  setFormData({ ...formData, reportingTo: e.target.value })
                }
              />
            </div>
          </div>

          <div className="employejob_submit">
            <button className="save_btn">Save</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default EmployJob;
