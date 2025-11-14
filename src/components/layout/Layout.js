import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "./Layout.css";
import EmployeeInformation from "../navbar/EmployeeInformation";


const Layout = () => {
  return (
    <div className="layout-container">
      {/* Sidebar Navbar */}
      <div className="navbar-sidebar">
        <Navbar />
        <EmployeeInformation />
      </div>

      {/* Routed Page Content */}
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
