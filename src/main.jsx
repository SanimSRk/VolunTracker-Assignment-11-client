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

import AllVolunterDeatils from './Pages/Volunteer/AllVolunterDeatils';

import Updates from './Pages/MangageMyPost/Mange/Updates/Updates';

import NotFound from './Compment/NoutFound/NotFound';
import AllManageMyPost from './AllMangeMyPost/AllManageMyPost';
import ChangeLayout from './Pages/Home/needVolunter/ChangeLayout/ChangeLayout';
import TableLayout from './Pages/Home/needVolunter/ChangeLayout/TableLayout';
const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <NotFound></NotFound>,
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
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

      {
        path: '/allVolunterDeatils/:id',
        element: (
          <PrivtedRoutd>
            <AllVolunterDeatils></AllVolunterDeatils>
          </PrivtedRoutd>
        ),
        loader: ({ params }) =>
          fetch(
            `https://bolunteer-server-site.vercel.app/allVolunteers/${params.id}`,
            {
              credentials: 'include',
            }
          ),
      },

      {
        path: 'updates/:id',
        element: (
          <PrivtedRoutd>
            <Updates></Updates>
          </PrivtedRoutd>
        ),
        loader: ({ params }) =>
          fetch(
            `https://bolunteer-server-site.vercel.app/loderData/${params.id}`,
            {
              credentials: 'include',
            }
          ),
      },

      {
        path: '/allManegeMyPost',
        element: (
          <PrivtedRoutd>
            <AllManageMyPost></AllManageMyPost>
          </PrivtedRoutd>
        ),
      },
      {
        path: '/layoutChange',
        element: <ChangeLayout></ChangeLayout>,
      },
      {
        path: 'allNeedVolunteerSection',
        element: <Volunteer></Volunteer>,
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
