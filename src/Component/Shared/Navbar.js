import React from "react";
import { Link, useNavigate } from "react-router-dom";
import icon from "../../images/banner.png";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const userRole = localStorage.getItem("userRole");

  const logout = () => {
    localStorage.removeItem("userRole");
    signOut(auth);
    navigate("/");
  };

  return (
    <div>
      <div className="navbar bg-primary h-16">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/feedback">Feedback</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/donation">Donation</Link>
                <Link to="/contact">Contact</Link>
                {user ? (
                  <button
                    onClick={logout}
                    className="text-white font-bold hover:text-black pr-7 "
                  >
                    <div class="indicator">Logout</div>
                  </button>
                ) : (
                  <Link to="/login">
                    <button className="text-white font-bold hover:text-black pr-7 ">
                      <div class="indicator">Login</div>
                    </button>
                  </Link>
                )}
              </li>

              <li>
                <Link>Contact</Link>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold pl-12 text-sm text-secondary"
          >
            <div className="flex gap-4">
              <img src={icon} className="h-14" />
              <div>
                <p className="uppercase mt-4 font-bold text-left font-mono text-sm text-secondary">
                  {user?.displayName}
                </p>
                <p className="font-mono text-left text-xs text-secondary">
                  {userRole}
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                to="/about"
                className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold text-center text-sm text-secondary"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold text-center text-sm text-secondary"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold text-center text-sm text-secondary"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/feedback"
                className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold text-center text-sm text-secondary"
              >
                Feedback
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold text-center text-sm text-secondary"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/donation"
                className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold text-center text-sm text-secondary"
              >
                Donation
              </Link>
            </li>
            <li>
              {user ? (
                <button
                  onClick={logout}
                  className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold text-center text-sm text-secondary"
                >
                  <div class="indicator">Logout</div>
                </button>
              ) : (
                <Link to="/login">
                  <button className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold text-center text-sm text-secondary">
                    <div class="indicator">Login</div>
                  </button>
                </Link>
              )}
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
