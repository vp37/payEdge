import "../../components/navbar/Dashboard.css";
import React, { useState } from "react";
import Logo from '../../images/logo.png'

const DashboardTopNavbar = () => {
  const [openMenu, setOpenMenu] = useState(null);{
  };

  return (
    <>
      {/* === Blue Header Bar with Company Name === */}
      <div className="top-header">
        <div className="top-header-content">
          <img src={Logo} alt="payEdge Logo" className="header-logo" />
          <h1>payEdge</h1>
        </div>
      </div>
    </>
  );
};

export default DashboardTopNavbar;

