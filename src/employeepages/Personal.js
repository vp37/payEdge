import { useState } from "react";
import { FaChevronUp, FaChevronDown, FaCamera  } from "react-icons/fa";
import "../components/css/Personal.css";
import { CiEdit } from "react-icons/ci";

const Personal = () => {
  const [isOpen, setIsOpen] = useState({
    profile: true,
    personal: true,
    address: true,
    education: true,
  });
  const [photo, setPhoto] = useState(null);

  const toggleSection = (section) => {
    setIsOpen((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
  };


  return (
    <div className="personal-page">
      {/* === Header Section === */}
      <header className="personal-header">
        <div className="jump-links">
          <span className="jump-title">JUMP TO</span>
          <a href="#profile">Profile</a>
          <a href="#personal">Personal</a>
          <a href="#address">Address</a>
          <a href="#education">Education</a>
        </div>
      </header>

      {/* === Main Content === */}
      <main className="personal-content">

        {/* === Profile Section === */}
        <section id="profile" className="card">
          <div className="profile_header">
            <p>PROFILE</p>
            <button
              className="toggle-btn"
              onClick={() => toggleSection("profile")}
              aria-label="toggle profile"
            >
              {isOpen.profile ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          </div>

          {isOpen.profile && (
            <div className="profile-content">
              {/* <div className="profile_fle"> */}
                <div className="profile-photo" onClick={() => document.getElementById("photoInput").click()}>
                  {photo ? (
                    <img src={photo} alt="Profile" className="profile-preview" />
                  ) : (
                    <FaCamera className="profile-icon" />
                  )}
                </div>
                <input
                  type="file"
                  id="photoInput"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handlePhotoChange}
                />
                <div className="profile-grid">
                  <div><label>Name</label><input type="text" placeholder="Enter name" /></div>
                  <div><label>Employee ID</label><input type="text" placeholder="Enter employee ID" /></div>
                  <div><label>Company Mail</label><input type="email" placeholder="Enter company email" /></div>
                  <div><label>Location</label><input type="text" placeholder="Enter location" /></div>
                  <div><label>Primary Contact No.</label><input type="text" placeholder="Enter phone number" /></div>
                  <div><label>Extension</label><input type="text" placeholder="Enter extension" /></div>
                </div>
              {/* </div> */}
              <div className="Emplo_info_button">
                <button className="editbutton"><CiEdit /></button>
                <button className="sub_btn">Submit</button>
              </div>
            </div>
          )}
        
        </section>

        {/* === Personal Section === */}
        <section id="personal" className="card">
          <div className="card-header">
            <p>PERSONAL</p>
            <button
              className="toggle-btn"
              onClick={() => toggleSection("personal")}
              aria-label="toggle personal"
            >
              {isOpen.personal ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          </div>

          {isOpen.personal && (
            <div className="profile-content">
            <div className="personal-grid">
              <div><label>Blood Group</label><input type="text" placeholder="Enter blood group" /></div>
              <div><label>Date of Birth</label><input type="date" /></div>
              <div><label>Nationality</label><input type="text" placeholder="Enter nationality" /></div>
              <div><label>Marital Status</label><input type="text" placeholder="Enter marital status" /></div>
              <div><label>Marriage Date</label><input type="date" /></div>
              <div><label>Spouse</label><input type="text" placeholder="Enter spouse name" /></div>
              <div><label>Place of Birth</label><input type="text" placeholder="Enter place of birth" /></div>
              <div><label>Residential Status</label><input type="text" placeholder="Enter residential status" /></div>
              <div><label>Father Name</label><input type="text" placeholder="Enter father’s name" /></div>
              <div><label>Religion</label><input type="text" placeholder="Enter religion" /></div>
              <div><label>Physically Challenged</label><input type="text" placeholder="Yes / No" /></div>
              <div><label>International Employee</label><input type="text" placeholder="Yes / No" /></div>
              <div><label>Height</label><input type="text" placeholder="Enter height" /></div>
              <div><label>Weight</label><input type="text" placeholder="Enter weight" /></div>
              <div><label>Identification Mark</label><input type="text" placeholder="Enter mark" /></div>
            </div>
             <div className="Emplo_info_button">
                <button className="editbutton"><CiEdit /></button>
                <button className="sub_btn">Submit</button>
              </div>
            </div>
            
          )}
         
        </section>

        {/* === Address Section === */}
        <section id="address" className="card">
          <div className="address-header">
            <p>ADDRESS</p>
            <button
              className="toggle-btn"
              onClick={() => toggleSection("address")}
              aria-label="toggle address"
            >
              {isOpen.address ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          </div>

          {isOpen.address && (
            <div className="address-content">
              <div className="address-select">
                <select>
                  <option>Present Address</option>
                  <option>Permanent Address</option>
                  <option>Office Address</option>
                </select>
              </div>

              <div className="address-grid">
                <div><label>Address</label><input type="text" placeholder="Enter address" /></div>
                <div><label>Email</label><input type="email" placeholder="Enter email" /></div>
                <div><label>Name</label><input type="text" placeholder="Enter name" /></div>
                <div><label>Phone 1</label><input type="text" placeholder="Enter phone" /></div>
                <div><label>Phone 2</label><input type="text" placeholder="Enter alternate phone" /></div>
                <div><label>Mobile</label><input type="text" placeholder="Enter mobile number" /></div>
                <div><label>Extension</label><input type="text" placeholder="Enter extension" /></div>
                <div><label>Fax</label><input type="text" placeholder="Enter fax" /></div>
              </div>
              <div className="Emplo_info_button">
                <button className="editbutton"><CiEdit /></button>
                <button className="sub_btn">Submit</button>
              </div>
            </div>
          )}
        </section>

        {/* === Education Section === */}
        <section id="education" className="card">
          <div className="education-header">
            <p>EDUCATION</p>
            <button
              className="toggle-btn"
              onClick={() => toggleSection("education")}
              aria-label="toggle education"
            >
              {isOpen.education ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          </div>

          {isOpen.education && (
            <div className="profile-content">
            <div className="education-grid">
              <div><label>Qualification</label><input type="text" placeholder="Enter qualification" /></div>
              <div><label>Course</label><input type="text" placeholder="Enter course" /></div>
              <div><label>Specialization</label><input type="text" placeholder="Enter specialization" /></div>
              <div><label>Institution</label><input type="text" placeholder="Enter institution" /></div>
              <div><label>University/Board</label><input type="text" placeholder="Enter university/board" /></div>
              <div><label>Year of Passing</label><input type="text" placeholder="Enter year" /></div>
              <div><label>Percentage / CGPA</label><input type="text" placeholder="Enter marks" /></div>
            </div>
            <div className="Emplo_info_button">
                <button className="editbutton"><CiEdit /></button>
                <button className="sub_btn">Submit</button>
              </div>
            </div>
          )}
        </section>

      </main>
    </div>
  );
};

export default Personal;
