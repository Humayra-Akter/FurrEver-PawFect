import React from "react";
import { Link, Outlet } from "react-router-dom";

const DashboardCustomer = () => {
  return (
    <div className="flex">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <h1 className="w-full h-full font-extrabold text-left text-5xl text-secondary font-mono pl-4 pt-7">
            Dashboard
          </h1>
          <Outlet />
          <label
            for="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label for="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 h-full bg-primary text-base-content">
            <li>
              <Link
                to="/dashboardCustomer"
                className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full pt-20 uppercase h-full font-bold font-mono text-center text-sm text-secondary font mono "
              >
                👉 profile
              </Link>
            </li>
            <li>
              <Link
                to="/dashboardCustomer/customerCabin"
                className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold font-mono text-center text-sm text-secondary font mono "
              >
                👉 customer cabin
              </Link>
            </li>
            <li>
              <Link
                to="/dashboardCustomer/customerDonation"
                className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold font-mono text-center text-sm text-secondary font mono "
              >
                👉 customer donation
              </Link>
            </li>
            <li>
              <Link
                to="/dashboardCustomer/customerFeedback"
                className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold font-mono text-center text-sm text-secondary font mono "
              >
                👉 customer feedback
              </Link>
            </li>
            <li>
              <Link
                to="/dashboardCustomer/customerPrice"
                className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold font-mono text-center text-sm text-secondary font mono "
              >
                👉 customer price
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardCustomer;
