import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './Pages/Home/Home';
import Volunteer from './Pages/Volunteer/Volunteer';
import Login from './Compment/Form/Login/Login';

import Registerss from './Compment/Form/registration/Registerss';
import AuthProvider from './AuthContext/AuthProvider';
import AddVolunteers from './Compment/Form/AddVolunteer/AddVolunteers';
import PrivtedRoutd from './PrivtedRoutd/PrivtedRoutd';
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/volunteer',
        element: <Volunteer></Volunteer>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/regist',
        element: <Registerss></Registerss>,
      },
      {
        path: '/addpost',
        element: (
          <PrivtedRoutd>
            <AddVolunteers></AddVolunteers>
          </PrivtedRoutd>
        ),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="max-w-7xl mx-auto">
    <AuthProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </AuthProvider>
  </div>
);
