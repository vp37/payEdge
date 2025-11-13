import React, { useState } from "react";
import {
  FaCog,
} from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { BsPersonPlus } from "react-icons/bs";
import { PiMoneyWavyThin } from "react-icons/pi";
import { HiOutlineHome } from "react-icons/hi2";
import { RiTodoLine } from "react-icons/ri";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { NavLink } from "react-router-dom";
import CompanyLogo from "../../images/logo.png"
import "./Navbar.css";

const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <aside className="sidebar">
      {/* === Company Logo === */}
      <div className="sidebar-logo">
        <img
          src={CompanyLogo}
          alt="Company Logo"
          className="company-logo"
        />
        <h1>payEdge</h1>
      </div>

      {/* === Profile Section === */}
      <div className="profile-section">
        <div className="profile-info">
          <img
            src="https://i.pravatar.cc/50"
            alt="Profile"
            className="profile-img"
          />
          <div className="profile-details">
            <h2>Hi,Vignesh</h2>
            <NavLink to="/employeelayout"><p>View my info</p></NavLink>
          </div>
        </div>
        <FaCog className="settings-icon" />
      </div>

      {/* === Navigation === */}
      <nav className="nav-links">
        {/* Home */}
        <NavLink to="/" className="nav-item">
          <HiOutlineHome  className="nav-icon home" />
          Home
        </NavLink>

        {/* To-Do */}
        <div className="dropdown">
          <button
            onClick={() => toggleDropdown("todo")}
            className="nav-item dropdown-btn"
          >
            <span>
              <RiTodoLine  className="nav-icon todo" /> To-Do
            </span>
            {openDropdown === "todo" ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>
          {openDropdown === "todo" && (
            <div className="dropdown-content">
              <NavLink to="/todo/my-tasks">My Tasks</NavLink>
              <NavLink to="/todo/completed">Completed</NavLink>
            </div>
          )}
        </div>

        {/* Salary */}
        <div className="dropdown">
          <button
            onClick={() => toggleDropdown("salary")}
            className="nav-item dropdown-btn"
          >
            <span>
              <PiMoneyWavyThin className="nav-icon salary" /> Salary
            </span>
            {openDropdown === "salary" ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>
          {openDropdown === "salary" && (
            <div className="dropdown-content">
              <NavLink to="/salary/payslips">Payslips</NavLink>
              <NavLink to="/salary/report">Salary Report</NavLink>
            </div>
          )}
        </div>

        {/* Leave */}
        <div className="dropdown">
          <button
            onClick={() => toggleDropdown("leave")}
            className="nav-item dropdown-btn"
          >
            <span>
              <BsPersonPlus  className="nav-icon leave" /> Leave
            </span>
            {openDropdown === "leave" ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>
          {openDropdown === "leave" && (
            <div className="dropdown-content">
              <NavLink to="/leave/apply">Apply Leave</NavLink>
              <NavLink to="/leave/history">Leave History</NavLink>
            </div>
          )}
        </div>

        {/* Attendance */}
        <div className="dropdown">
          <button
            onClick={() => toggleDropdown("attendance")}
            className="nav-item dropdown-btn"
          >
            <span>
              <FaRegCalendarCheck className="nav-icon attendance" /> Attendance
            </span>
            {openDropdown === "attendance" ? (
              <IoIosArrowUp />
            ) : (
              <IoIosArrowDown />
            )}
          </button>
          {openDropdown === "attendance" && (
            <div className="dropdown-content">
              <NavLink to="/attendance/daily-logs">Daily Logs</NavLink>
              <NavLink to="/attendance/summary">Summary</NavLink>
            </div>
          )}
        </div>

        {/* Document Center */}
        <NavLink to="/documents" className="nav-item">
          <IoDocumentAttachOutline  className="nav-icon document" />
          Document Center
        </NavLink>

        {/* People */}
        <NavLink to="/people" className="nav-item">
          <GoPeople className="nav-icon people" />
          People
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
