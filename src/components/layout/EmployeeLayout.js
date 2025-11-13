import { Outlet } from "react-router-dom";
import PersonalInformation from '../../pages/PersonalInformation';
import '../layout/EmployeeLayout.css'

const EmployeeInformationLayout = () => {
  return (
    <div className="employee-container">
      <PersonalInformation />
      <main className="employee-content">
        <Outlet />
      </main>
    </div>
  );
};

export default EmployeeInformationLayout;
