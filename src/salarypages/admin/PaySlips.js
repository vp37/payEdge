import { NavLink } from "react-router-dom";
import "../../components/css/PaySlips.css";

const EmployeeSidebar = () => {
  return (
    <aside className="admin-sidebar">
      <nav className="admin-nav">
        <NavLink
         end
          to="/salary/payslips/generator"
          className={({ isActive }) =>
            isActive ? "admin-link active" : "admin-link"
          }
        >
          Generate Payslip
        </NavLink>

        <NavLink
          to="/salary/upload"
          className={({ isActive }) =>
            isActive ? "admin-link active" : "admin-link"
          }
        >
          Upload Payslip PDF
        </NavLink>

        <NavLink
          to="/salary/list"
          className={({ isActive }) =>
            isActive ? "admin-link active" : "admin-link"
          }
        >
          Employee List
        </NavLink>

        <NavLink
          to="/salary/arrears"
          className={({ isActive }) =>
            isActive ? "admin-link active" : "admin-link"
          }
        >
          Add Arrears
        </NavLink>

        <NavLink
          to="/salary/salary-structure"
          className={({ isActive }) =>
            isActive ? "admin-link active" : "admin-link"
          }
        >
          Salary Structure
        </NavLink>

        <NavLink
          to="/salary/payslip-history"
          className={({ isActive }) =>
            isActive ? "admin-link active" : "admin-link"
          }
        >
          Payslip History
        </NavLink>
      </nav>
    </aside>
  );
};

export default EmployeeSidebar;
