import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../AuthContext/AuthProvider';
import userProfile from '..//..//..//../public/user-profile.png';
import { Tooltip } from 'react-tooltip';

const Naver = () => {
  const { user, logOutUsers } = useContext(AuthContext);
  const [themes, setThemes] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  );

  const hanileThemeSet = e => {
    if (e.target.checked) {
      setThemes('dark');
    } else {
      setThemes('light');
    }
  };

  useEffect(() => {
    localStorage.setItem('theme', themes);
    const lockalTheme = localStorage.getItem('theme');
    document.querySelector('body').setAttribute('data-theme', lockalTheme);
  }, [themes]);

  const link = (
    <>
      <NavLink
        to={'/'}
        className={({ isActive }) =>
          isActive
            ? 'px-4  py-2  text-[#f26837] border border-[#f26837] font-semibold'
            : 'font-semibold px-4  py-2 rounded-lg bg-base-100'
        }
      >
        Home
      </NavLink>
      <NavLink
        to={'/allNeedVolunteerSection'}
        className={({ isActive }) =>
          isActive
            ? 'px-4  py-2  text-[#f26837] border border-[#f26837] font-semibold'
            : 'font-semibold px-4  py-2 rounded-lg bg-base-100'
        }
      >
        Volunteer Needs
      </NavLink>
    </>
  );

  const hadileClickLogout = () => {
    logOutUsers()
      .then(res => {
        console.log(res.user);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div className="">
      <div className="navbar bg-base-100 z-10 ">
        <div className="navbar-start z-20">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {link}
              {user && (
                <div className="dropdown z-0">
                  <div
                    tabIndex={0}
                    role="button"
                    className="font-semibold px-4  py-2 rounded-lg bg-base-100"
                  >
                    My Profile
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <Link to={'/addpost'}>
                      <li>
                        <a>Add Volunteer Post</a>
                      </li>
                    </Link>

                    <Link to={'/allManegeMyPost'}>
                      <li>
                        <a>Manage My Post </a>
                      </li>
                    </Link>
                  </ul>
                </div>
              )}
            </ul>
          </div>
          <img className="w-14 mr-3" src="/logo-removebg-preview.png" alt="" />
          <a className=" text-xl font-bold gap-0">
            Volun<span className="text-[#f26837] ">Tracker</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 gap-4">
            {link}

            {user && (
              <div className="dropdown z-10">
                <div
                  tabIndex={0}
                  role="button"
                  className="font-semibold px-4  py-2 rounded-lg bg-base-100"
                >
                  My Profile
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <Link to={'/addpost'}>
                    <li>
                      <a>Add Volunteer Post</a>
                    </li>
                  </Link>

                  <Link to={'/allManegeMyPost'}>
                    <li>
                      <a>Manage My Post </a>
                    </li>
                  </Link>
                </ul>
              </div>
            )}
          </ul>
        </div>
        <div className="navbar-end gap-4 ">
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              onChange={hanileThemeSet}
              type="checkbox"
              className="theme-controller"
              value="synthwave"
            />

            {/* sun icon */}
            <svg
              className="swap-off fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
          {user ? (
            <>
              <div className="dropdown dropdown-end z-10">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full " id="clickable">
                    <img src={user?.photoURL || userProfile} />
                  </div>

                  <Tooltip anchorSelect="#clickable" clickable>
                    <h2 className=" text-xl">
                      {user?.displayName || 'Name not found'}
                    </h2>
                    <button
                      className="text-xl mt-3 "
                      onClick={hadileClickLogout}
                    >
                      Logout
                    </button>
                  </Tooltip>
                </div>
              </div>
            </>
          ) : (
            <Link to={'/login'}>
              {' '}
              <button className="bg-[#f26837] text-white btn">
                Login
              </button>{' '}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Naver;
