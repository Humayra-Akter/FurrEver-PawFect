import React from "react";
import { Link, Outlet } from "react-router-dom";

const customerDashboard = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-left">
          <h1 className="w-full h-full font-extrabold text-left text-5xl text-secondary font-mono pl-4 pt-7">
            Dashboard
          </h1>
          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side fixed left-0 top-0 h-screen">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 h-full bg-primary text-base-content">
            <li>
              <Link
                to="/customerDashboard"
                className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full pt-20 uppercase h-full font-bold font-mono text-center text-sm text-secondary"
              >
                👉 Profile
              </Link>
            </li>
            <li>
              <Link
                to="/customerDashboard/orderHistory"
                className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold font-mono text-center text-sm text-secondary"
              >
                👉 Order History
              </Link>
            </li>
            <li>
              <Link
                to="/customerDashboard/customerCabin"
                className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold font-mono text-center text-sm text-secondary"
              >
                👉 Customer Cabin
              </Link>
            </li>
            <li>
              <Link
                to="/customerDashboard/customerDonation"
                className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold font-mono text-center text-sm text-secondary"
              >
                👉 Customer Donation
              </Link>
            </li>
            <li>
              <Link
                to="/customerDashboard/customerFeedback"
                className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold font-mono text-center text-sm text-secondary"
              >
                👉 Customer Feedback
              </Link>
            </li>
            <li>
              <Link
                to="/customerDashboard/customerPrice"
                className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold font-mono text-center text-sm text-secondary"
              >
                👉 Customer Price
              </Link>
            </li>
            <li>
              <Link
                to="/customerDashboard/appointments"
                className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold font-mono text-center text-sm text-secondary"
              >
                👉 Appointments
              </Link>
            </li>
            <li>
              <Link
                to="/customerDashboard/notifications"
                className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold font-mono text-center text-sm text-secondary"
              >
                👉 Notifications
              </Link>
            </li>
            <li>
              <Link
                to="/customerDashboard/loyalty"
                className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold font-mono text-center text-sm text-secondary"
              >
                👉 Loyalty & Rewards
              </Link>
            </li>
            <li>
              <Link
                to="/customerDashboard/wishlist"
                className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold font-mono text-center text-sm text-secondary"
              >
                👉 Wishlist
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default customerDashboard;
