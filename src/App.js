import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import sun from "../src/images/sun.png";
import moon from "../src/images/moon.png";
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
import DashboardCustomer from "./Component/Dashboard/DashboardCustomer/DashboardCustomer";
import CustomerProfile from "./Component/Dashboard/DashboardCustomer/CustomerProfile";
import OrderHistory from "./Component/Dashboard/DashboardCustomer/OrderHistory";
import Blog1 from "./Component/Donation/Blog1";
import Blog2 from "./Component/Donation/Blog2";
import Blog3 from "./Component/Donation/Blog3";
import CustomerCabin from "./Component/Dashboard/DashboardCustomer/CustomerCabin";
import CustomerDonation from "./Component/Dashboard/DashboardCustomer/CustomerDonation";
import CustomerFeedback from "./Component/Dashboard/DashboardCustomer/CustomerFeedback";
import CustomerPrice from "./Component/Dashboard/DashboardCustomer/CustomerPrice";
import Appointments from "./Component/Dashboard/DashboardCustomer/Appointments";
import Notifications from "./Component/Dashboard/DashboardCustomer/Notifications";
import LoyaltyRewards from "./Component/Dashboard/DashboardCustomer/LoyaltyRewards";
import Wishlist from "./Component/Dashboard/DashboardCustomer/Wishlist";
import StaffProfile from "./Component/Dashboard/DashboardStaff/StaffProfile";
import DashboardStaff from "./Component/Dashboard/DashboardStaff/DashboardStaff";
import StaffFindCabin from "./Component/Dashboard/DashboardStaff/StaffFindCabin";
import StaffDaycareAnimal from "./Component/Dashboard/DashboardStaff/StaffDaycareAnimal";
import StaffRescuedAnimal from "./Component/Dashboard/DashboardStaff/StaffRescuedAnimal";
import StaffSchedules from "./Component/Dashboard/DashboardStaff/StaffSchedules";
import StaffReports from "./Component/Dashboard/DashboardStaff/StaffReports";
import StaffInventory from "./Component/Dashboard/DashboardStaff/StaffInventory";
import StaffTasks from "./Component/Dashboard/DashboardStaff/StaffTasks";
import StaffMessages from "./Component/Dashboard/DashboardStaff/StaffMessages";
import Signin from "./Component/Login/Signin";

function App() {
  const [user, setUser] = useState("");
  useEffect(() => {
    const userRole = localStorage.getItem("userRole");
    setUser(userRole);
  }, []);

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = darkMode ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode && "dark"}`}>
      <div className="bg-white dark:bg-black min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/blog1" element={<Blog1 />} />
          <Route path="/blog2" element={<Blog2 />} />
          <Route path="/blog3" element={<Blog3 />} />
          <Route path="/donation" element={<Donation />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          {user === "customer" ? (
            <>
              <Route path="customerDashboard" element={<DashboardCustomer />}>
                <Route index element={<CustomerProfile />}></Route>
                <Route path="orderHistory" element={<OrderHistory />}></Route>
                <Route path="customerCabin" element={<CustomerCabin />}></Route>
                <Route
                  path="customerDonation"
                  element={<CustomerDonation />}
                ></Route>
                <Route
                  path="customerFeedback"
                  element={<CustomerFeedback />}
                ></Route>
                <Route path="customerPrice" element={<CustomerPrice />}></Route>
                <Route path="appointments" element={<Appointments />}></Route>
                <Route path="notifications" element={<Notifications />}></Route>
                <Route path="loyalty" element={<LoyaltyRewards />}></Route>
                <Route path="wishlist" element={<Wishlist />}></Route>
              </Route>
            </>
          ) : (
            <></>
          )}
          {user === "staff" ? (
            <>
              <Route path="staffDashboard" element={<DashboardStaff />}>
                <Route index element={<StaffProfile />} />
                <Route path="staffFindCabin" element={<StaffFindCabin />} />
                <Route
                  path="staffDaycareAnimal"
                  element={<StaffDaycareAnimal />}
                />
                <Route
                  path="staffRescuedAnimal"
                  element={<StaffRescuedAnimal />}
                />
                <Route path="staffSchedules" element={<StaffSchedules />} />
                <Route path="staffReports" element={<StaffReports />} />
                <Route path="staffInventory" element={<StaffInventory />} />
                <Route path="staffTasks" element={<StaffTasks />} />
                <Route path="staffMessages" element={<StaffMessages />} />
              </Route>
            </>
          ) : (
            <></>
          )}
          {user === "admin" ? (
            <>
              <Route path="adminDashboard" element={<Dashboard />}>
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
            </>
          ) : (
            <></>
          )}

          <Route path="*" element={<Error />}></Route>
        </Routes>
        <button
          onClick={toggleDarkMode}
          className="p-2 bg-primary text-secondary fixed bottom-5 left-5 rounded-full"
        >
          {darkMode ? (
            <img className="w-10 h-10" src={sun} alt="Light Mode" />
          ) : (
            <img className="w-10 h-10" src={moon} alt="Dark Mode" />
          )}
        </button>
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
