import React from "react";
import { Link, Outlet } from "react-router-dom";

const DashboardStaff = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="staff-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-left">
          <h1 className="w-full h-full font-extrabold text-left text-5xl text-secondary font-mono pl-4 pt-7">
            Staff Dashboard
          </h1>
          <Outlet />
          <label
            htmlFor="staff-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side fixed left-0 top-0 h-screen">
          <label htmlFor="staff-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 h-full bg-primary text-base-content">
            <li>
              <Link
                to="/staffDashboard"
                className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full pt-20 uppercase h-full font-bold font-mono text-center text-sm text-secondary"
              >
                👉 Staff Info
              </Link>
            </li>
            <li>
              <Link
                to="/staffDashboard/staffFindCabin"
                className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold font-mono text-center text-sm text-secondary"
              >
                👉 Find Cabin
              </Link>
            </li>
            <li>
              <Link
                to="/staffDashboard/staffDaycareAnimal"
                className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold font-mono text-center text-sm text-secondary"
              >
                👉 Daycare Animal
              </Link>
            </li>
            <li>
              <Link
                to="/staffDashboard/staffRescuedAnimal"
                className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold font-mono text-center text-sm text-secondary"
              >
                👉 Rescued Animal
              </Link>
            </li>
            <li>
              <Link
                to="/staffDashboard/staffSchedules"
                className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold font-mono text-center text-sm text-secondary"
              >
                👉 Staff Schedules
              </Link>
            </li>
            <li>
              <Link
                to="/staffDashboard/staffReports"
                className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold font-mono text-center text-sm text-secondary"
              >
                👉 Reports
              </Link>
            </li>
            <li>
              <Link
                to="/staffDashboard/staffInventory"
                className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold font-mono text-center text-sm text-secondary"
              >
                👉 Inventory
              </Link>
            </li>
            <li>
              <Link
                to="/staffDashboard/staffTasks"
                className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold font-mono text-center text-sm text-secondary"
              >
                👉 Tasks
              </Link>
            </li>
            <li>
              <Link
                to="/staffDashboard/staffMessages"
                className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold font-mono text-center text-sm text-secondary"
              >
                👉 Messages
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardStaff;
