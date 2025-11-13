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
              path: '/employeelayout',
              element: <EmployeeLayout />,
              children:[
                {
                  index: true,
                  element:<Personal/>
                },
                {
                  path:'accounts',
                  element:<Accounts/>
                },
                {
                  path:'family',
                  element:<Family/>
                },
                {
                  path:'employjob',
                  element:<EmployJob/>
                },
                {
                  path:'assets',
                  element:<Assets/>
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