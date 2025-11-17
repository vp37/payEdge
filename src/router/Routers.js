import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from '../pages/Login';
import PrivateRoute from './PrivateRoute';
import Layout from '../components/layout/Layout';
import Home from '../pages/Home';
import Dashboard from '../components/navbar/DashboardNavbar'
import Personal from '../employeepages/Personal'
import Accounts from '../employeepages/Accounts'
import Family from '../employeepages/Family'
import EmployJob from '../employeepages/EmployJob'
import Assets from '../employeepages/Assets'
import EmployeeLayout from '../components/layout/EmployeeLayout'
import PaySlips from '../salarypages/admin/PaySlips';
import AdminLayout from '../components/layout/AdminLayout';
import GeneratorPayslips from '../salarypages/admin/GeneratorPayslips';
import UploadFile from '../salarypages/admin/Upload_File'
import EmployeeList from '../salarypages/admin/EmployeeList'
import ArrearsAdd from '../salarypages/admin/ArrearsAdd'
import SalaryStructure from '../salarypages/admin/SalaryStructure'
import PaySlipHistory from '../salarypages/admin/PaySlipHistory'

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Dashboard />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      element: <PrivateRoute />,
      children: [
        {
          path: '/',
          element: <Layout />, // Layout will wrap around Home
          children: [
            {
              index: true,
              element: <Home />,  // Protected Home page
            },
            {
              path: '/salary/payslips',
              element: <PaySlips />
            },
            {
              path: 'salary',
              element: <AdminLayout />,  // Admin layout here
              children: [
                {
                  index:"true",
                  element: <GeneratorPayslips />,
                },
                {
                  path: 'payslips/generator',
                  element: <GeneratorPayslips />,
                },
                {
                  path: 'upload',
                  element: <UploadFile />,
                },
                {
                  path: 'list',
                  element: <EmployeeList />,
                },
                {
                  path:'arrears',
                  element:<ArrearsAdd/>
                },
                {
                  path:'salary-structure',
                  element:<SalaryStructure/>
                },
                 {
                  path:'payslip-history',
                  element:<PaySlipHistory/>
                }
              ],
            },
            {
              path: '/employeelayout',
              element: <EmployeeLayout />,
              children: [
                {
                  index: true,
                  element: <Personal />
                },
                {
                  path: 'accounts',
                  element: <Accounts />
                },
                {
                  path: 'family',
                  element: <Family />
                },
                {
                  path: 'employjob',
                  element: <EmployJob />
                },
                {
                  path: 'assets',
                  element: <Assets />
                },
              ]
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;


};

export default Router;