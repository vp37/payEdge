import { Outlet } from "react-router-dom";
import PaySlips from '../../salarypages/admin/PaySlips'
import '../layout/Admin_Layout.css'

const AdminLayout = () => {
  return (
    <div className="admin-layout">
       <PaySlips/>
        <main className="admin-content">
          <Outlet />
        </main>
    </div>
  );
};

export default AdminLayout;
