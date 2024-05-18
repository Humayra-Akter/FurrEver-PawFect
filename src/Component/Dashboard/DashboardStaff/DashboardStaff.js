import React from "react";
import { Link, Outlet } from "react-router-dom";

const DashboardStaff = () => {
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
                to="/dashboardStaff"
                className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full pt-20 uppercase h-full font-bold font-mono text-center text-sm text-secondary font mono "
              >
                👉 profile
              </Link>
            </li>
            <li>
              <Link
                to="/dashboardStaff/staffFindCabin"
                className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold font-mono text-center text-sm text-secondary font mono "
              >
                👉 staff find cabin
              </Link>
            </li>{" "}
            <li>
              <Link
                to="/dashboardStaff/staffDaycareAnimal"
                className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold font-mono text-center text-sm text-secondary font mono "
              >
                👉 staff daycare animal
              </Link>
            </li>
            <li>
              <Link
                to="/dashboardStaff/staffRescuedAnimal"
                className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold font-mono text-center text-sm text-secondary font mono "
              >
                👉 staff rescued animal
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardStaff;