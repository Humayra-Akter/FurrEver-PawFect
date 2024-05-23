import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Navbar from "./Component/Shared/Navbar";
import Login from "./Component/Login/Login";
import Error from "./Component/Shared/Error";
import Register from "./Component/Login/Register";
import Contact from "./Component/Contact/Contact";
import Services from "./Component/Services/Services";
import Dashboard from "./Component/Dashboard/Dashboard";
import Feedback from "./Component/Feedback/Feedback";
import Donation from "./Component/Donation/Donation";
import { ToastContainer } from "react-toastify";
import DashboardStaff from "./Component/Dashboard/DashboardStaff/DashboardStaff";
import DashboardCustomer from "./Component/Dashboard/DashboardCustomer/DashboardCustomer";
import CustomerProfile from "./Component/Dashboard/DashboardCustomer/CustomerProfile";
import OrderHistory from "./Component/Dashboard/DashboardCustomer/OrderHistory";
import Blog1 from "./Component/Donation/Blog1";
import Blog2 from "./Component/Donation/Blog2";
import Blog3 from "./Component/Donation/Blog3";
import CustomerCabin from "./Component/Dashboard/DashboardCustomer/CustomerCabin";
import CustomerDonation from "./Component/Dashboard/DashboardCustomer/CustomerDonation";
import CustomerFeedback from "./Component/Dashboard/DashboardCustomer/CustomerFeedback";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/blog1" element={<Blog1 />} />
        <Route path="/blog2" element={<Blog2 />} />
        <Route path="/blog3" element={<Blog3 />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/customerDashboard" element={<DashboardCustomer />}>
          <Route index element={<CustomerProfile />}></Route>
          <Route path="orderHistory" element={<OrderHistory />}></Route>
          <Route path="customerCabin" element={<CustomerCabin />}></Route>
          <Route path="customerDonation" element={<CustomerDonation />}></Route>
          <Route path="customerFeedback" element={<CustomerFeedback />}></Route>
        </Route>

        <Route path="/staffDashboard" element={<DashboardStaff />}>
          {/* <Route index element={<StaffInfo />}></Route>
          <Route path="staffFindCabin" element={<StaffFindCabin />}></Route>
          <Route
            path="staffDaycareAnimal"
            element={<StaffDaycareAnimal />}
          ></Route>
          <Route
            path="staffRescuedAnimal"
            element={<StaffRescuedAnimal />}
          ></Route> */}
        </Route>

        <Route path="dashboard" element={<Dashboard />}>
          {/* <Route index element={<Admin />}></Route>
          <Route path="staff" element={<Staff />}></Route>
          <Route path="vet" element={<Vet />}></Route>
          <Route path="customers" element={<Customers />}></Route>
          <Route path="rescuer" element={<Rescuer />}></Route>
          <Route path="healthRecord" element={<HealthRecord />}></Route>
          <Route path="cabin" element={<Cabin />}></Route>
          <Route path="donation" element={<Donation />}></Route>
          <Route path="feedback" element={<Feedback />}></Route>
          <Route path="daycareAnimal" element={<DaycareAnimal />}></Route>
          <Route path="rescuedAnimal" element={<RescuedAnimal />}></Route> */}
        </Route>

        <Route path="*" element={<Error />}></Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
