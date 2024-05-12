import React from "react";
import { Link } from "react-router-dom";
import icon from "../../images/banner.png";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <div>
      <div
        className={`navbar ${darkMode ? "bg-primary" : "bg-secondary"} h-16`}
      >
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
            {/* small screen  */}
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow ${
                darkMode ? "bg-base-100" : "bg-neutral"
              } rounded-box w-52`}
            >
              <li>
                <Link
                  to="/about"
                  className={`text-${darkMode ? "base-100" : "base-800"}`}
                >
                  About
                </Link>
                <Link
                  to="/services"
                  className={`text-${darkMode ? "base-100" : "base-800"}`}
                >
                  Services
                </Link>
                <Link
                  to="/feedback"
                  className={`text-${darkMode ? "base-100" : "base-800"}`}
                >
                  Feedback
                </Link>
                <Link
                  to="/dashboard"
                  className={`text-${darkMode ? "base-100" : "base-800"}`}
                >
                  Dashboard
                </Link>
                <Link
                  to="/donation"
                  className={`text-${darkMode ? "base-100" : "base-800"}`}
                >
                  Donation
                </Link>
                <Link
                  to="/contact"
                  className={`text-${darkMode ? "base-100" : "base-800"}`}
                >
                  Contact
                </Link>
                <Link
                  to="/login"
                  className={`text-${darkMode ? "base-100" : "base-800"}`}
                >
                  Login
                </Link>
              </li>
              {/* <li>
                <Link>Dashboard</Link>
                <ul className="p-2">
                  <li>
                    <Link>Submenu 1</Link>
                  </li>
                  <li>
                    <Link>Submenu 2</Link>
                  </li>
                </ul>
              </li> */}
              <li>
                <Link
                  to="/contact"
                  className={`text-${darkMode ? "base-100" : "base-800"}`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold pl-12 text-sm text-secondary"
          >
            <img src={icon} className="h-14" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <button onClick={toggleDarkMode} className="btn btn-ghost">
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </li>
            <li>
              <Link
                to="/login"
                className={`transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold text-center text-sm ${
                  darkMode ? "text-base-100" : "text-base-800"
                }`}
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold text-center text-sm ${
                  darkMode ? "text-base-100" : "text-base-800"
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold text-center text-sm ${
                  darkMode ? "text-base-100" : "text-base-800"
                }`}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className={`transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold text-center text-sm ${
                  darkMode ? "text-base-100" : "text-base-800"
                }`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/feedback"
                className={`transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold text-center text-sm ${
                  darkMode ? "text-base-100" : "text-base-800"
                }`}
              >
                Feedback
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className={`transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold text-center text-sm ${
                  darkMode ? "text-base-100" : "text-base-800"
                }`}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/donation"
                className={`transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold text-center text-sm ${
                  darkMode ? "text-base-100" : "text-base-800"
                }`}
              >
                Donation
              </Link>
            </li>
            {/* <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <Link>Submenu 1</Link>
                  </li>
                  <li>
                    <Link>Submenu 2</Link>
                  </li>
                </ul>
              </details>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
