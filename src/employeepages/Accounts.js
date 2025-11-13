import React, { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import "../components/css/Accounts.css";
import { CiEdit } from "react-icons/ci";

const Accounts = () => {
  const [isOpen, setIsOpen] = useState({
    bank: true,
    pf: true,
    other: true,
  });

  const toggleSection = (section) => {
    setIsOpen((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="account-page">
      {/* === Header Section === */}
      <header className="account-header">
        <div className="jump-links">
          <span className="jump-title">JUMP TO</span>
          <a href="#bank">Bank Account</a>
          <a href="#pf">PF Account</a>
          <a href="#other">Other IDs</a>
        </div>
      </header>

      {/* === Bank Details Section === */}
      <section id="bank" className="card">
        <div className="bank-header">
          <p>BANK DETAILS</p>
          <button
            className="toggle-btn"
            onClick={() => toggleSection("bank")}
            aria-label="toggle bank"
          >
            {isOpen.bank ? <FaChevronUp /> : <FaChevronDown />}
          </button>
        </div>

        {isOpen.bank && (
           <div className="profile-content">
          <div className="bank-grid">
            <div><label>Bank Name</label><input type="text" placeholder="Enter bank name" /></div>
            <div><label>Branch</label><input type="text" placeholder="Enter branch" /></div>
            <div><label>Account Number</label><input type="text" placeholder="Enter account number" /></div>
            <div><label>IFSC Code</label><input type="text" placeholder="Enter IFSC code" /></div>
            <div><label>Account Type</label><input type="text" placeholder="Enter account type" /></div>
            <div><label>MICR Code</label><input type="text" placeholder="Enter MICR code" /></div>
          </div>
          <div className="acc_info_button">
                          <button className="editbutton_acc"><CiEdit /></button>
                          <button className="sub_btn_acc">Submit</button>
            </div>
          </div>
        )}
      </section>

      {/* === PF Account Section === */}
      <section id="pf" className="card">
        <div className="pf-header">
          <p>PF ACCOUNT</p>
          <button
            className="toggle-btn"
            onClick={() => toggleSection("pf")}
            aria-label="toggle pf"
          >
            {isOpen.pf ? <FaChevronUp /> : <FaChevronDown />}
          </button>
        </div>

        {isOpen.pf && (
           <div className="profile-content">
          <div className="pf-grid">
            <div><label>UAN Number</label><input type="text" placeholder="Enter UAN number" /></div>
            <div><label>PF Number</label><input type="text" placeholder="Enter PF number" /></div>
            <div><label>Pension Number</label><input type="text" placeholder="Enter pension number" /></div>
            <div><label>PF Office</label><input type="text" placeholder="Enter PF office" /></div>
            <div><label>PF Region</label><input type="text" placeholder="Enter PF region" /></div>
          </div>
          <div className="acc_info_button">
                          <button className="editbutton_acc"><CiEdit /></button>
                          <button className="sub_btn_acc">Submit</button>
                        </div>
          </div>
        )}
      </section>

      {/* === Other IDs Section === */}
      <section id="other" className="card">
        <div className="other-header">
          <p>OTHER IDS</p>
          <button
            className="toggle-btn"
            onClick={() => toggleSection("other")}
            aria-label="toggle other ids"
          >
            {isOpen.other ? <FaChevronUp /> : <FaChevronDown />}
          </button>
        </div>

        {isOpen.other && (
          <div className="profile-content">
          <div className="other-grid">
            <div><label>PAN Number</label><input type="text" placeholder="Enter PAN number" /></div>
            <div><label>Aadhaar Number</label><input type="text" placeholder="Enter Aadhaar number" /></div>
            <div><label>ESI Number</label><input type="text" placeholder="Enter ESI number" /></div>
            <div><label>Driving License</label><input type="text" placeholder="Enter license number" /></div>
            <div><label>Passport Number</label><input type="text" placeholder="Enter passport number" /></div>
          </div>
          <div className="acc_info_button">
                          <button className="editbutton_acc"><CiEdit /></button>
                          <button className="sub_btn_acc">Submit</button>
                        </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Accounts;
