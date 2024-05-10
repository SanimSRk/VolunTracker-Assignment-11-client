import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Naver = () => {
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
        to={'/volunteer'}
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
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
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
            </ul>
          </div>
          <img className="w-14 mr-3" src="/logo-removebg-preview.png" alt="" />
          <a className=" text-xl font-bold gap-0">
            Volun<span className="text-[#f26837] ">Tracker</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-7">{link}</ul>
        </div>
        <div className="navbar-end gap-4">
          <Link to={'/login'}>
            {' '}
            <button className="bg-[#f26837] text-white btn">Login</button>{' '}
          </Link>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Naver;
