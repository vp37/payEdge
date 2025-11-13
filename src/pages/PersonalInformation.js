import { NavLink } from "react-router-dom";
import "../components/css/PersonalInformation.css"

const EmployeeSidebar = () => {
  return (
    <aside className="employee-sidebar">
      <nav className="sidebar-nav">
        <NavLink
         end
          to=""
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          Personal
        </NavLink>

        <NavLink
          to="accounts"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          Accounts & Statutory
        </NavLink>

        <NavLink
          to="family"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          Family
        </NavLink>

        <NavLink
          to="employjob"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          Employment & Job
        </NavLink>

        <NavLink
          to="assets"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          Assets
        </NavLink>
      </nav>
    </aside>
  );
};

export default EmployeeSidebar;
