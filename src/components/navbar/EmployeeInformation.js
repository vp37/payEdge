import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaBell, FaPowerOff } from "react-icons/fa";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import "../../components/css/EmployeeInformation.css";
import Bubble from '../../images/bubble.png'

const EmployeeTopNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [pageTitle, setPageTitle] = useState("");

  const location = useLocation();

  //  Map routes to page titles
  useEffect(() => {
    const routeTitles = {
      "/": "Home",
      "/todo/my-tasks": "My Tasks",
      "/todo/completed": "Completed Tasks",
      "/salary/payslips": "Payslips",
      "/salary/payslips/generator/": "Payslips",
      "/salary/report": "Salary Report",
      "/leave/apply": "Apply Leave",
      "/leave/history": "Leave History",
      "/attendance/daily-logs": "Daily Logs",
      "/attendance/summary": "Attendance Summary",
      "/documents": "Document Center",
      "/people": "People",
      "/employeelayout": "Employee Information",
    };

     if (
  location.pathname.startsWith("/salary/payslips") ||
  location.pathname.startsWith("/salary/upload") ||
  location.pathname.startsWith("/salary/list") ||
  location.pathname.startsWith("/salary/arrears") ||
  location.pathname.startsWith("/salary/salary-structure") ||
  location.pathname.startsWith("/salary/payslip-history")
) {
  setPageTitle("Payslips");
  return;
}

    // default title if route not listed
    setPageTitle(routeTitles[location.pathname] || "Employee Information");
  }, [location.pathname]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="employee-header">
      {/* === Left Section: Dynamic Title === */}
      <p className="employee-title">{pageTitle}</p>
      <img  src={Bubble} alt="Profile" className="bubbleimg"/>

      {/* === Right Section: Quick Links === */}
      <div className="quick-links">
        <button className="quick-dropdown" onClick={toggleDropdown}>
          Quick Links{" "}
          {isDropdownOpen ? (
            <MdOutlineArrowDropUp className="dropdown-icon" />
          ) : (
            <MdOutlineArrowDropDown className="dropdown-icon" />
          )}
        </button>

        {isDropdownOpen && (
          <div className="dropdown-menu">
            <p>Getting Started with greytHR</p>
            <p>Tasks</p>
          </div>
        )}

        <FaBell className="icon bell-icon" />
        <FaPowerOff className="icon power-icon" />
      </div>
    </header>
  );
};

export default EmployeeTopNavbar;
