import React from "react";
import bg from "../../images/card-bg.jpg";
import img5 from "../../images/call.png";
import img6 from "../../images/address.png";
import img7 from "../../images/facebook-app-symbol.png";
import GoogleMapReact from "google-map-react";
import SimpleMap from "./SimpleMap";
import Footer from "../Shared/Footer";

const Contact = () => {
  return (
    <div
      className=" p-8"
      style={{
        fontFamily: "'Concert One', cursive",
      }}
    >
      <div className="lg:max-w-5xl mx-auto">
        <div className=" py-12">
          <div className="mx-auto border-4 border-accent dark:border-white shadow-lg rounded-lg p-6">
            <div className="mx-20">
              <div>
                <h2 className="text-3xl font-semibold text-primary dark:text-secondary mb-6  ">
                  Contact Form
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-xl text-primary dark:text-secondary font-semibold mb-3">
                      Our Address
                    </h3>
                    <p className="dark:text-white">
                      1414 Shopper Place, Bangladesh
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl text-primary dark:text-secondary font-semibold mb-3  ">
                      Contact Information
                    </h3>
                    <p className="dark:text-white">
                      Email: contact@example.com
                    </p>
                    <p className="dark:text-white">Phone: +880 16292-72142</p>
                  </div>
                </div>
                <form className="mt-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-primary dark:text-secondary">
                        Name
                      </label>
                      <input
                        type="text"
                        className="mt-1 focus:ring-primary bg-slate-100 focus:border-primary block w-full shadow-sm sm:text-sm border-accent rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-primary dark:text-secondary">
                        Email
                      </label>
                      <input
                        type="email"
                        className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-slate-100"
                      />
                    </div>
                  </div>
                  <div className="mt-2">
                    <label className="block text-primary dark:text-secondary text-sm   ">
                      Message
                    </label>
                    <textarea
                      rows="3"
                      className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm bg-slate-100 sm:text-sm border-gray-300 rounded-md"
                    ></textarea>
                  </div>
                  <div className="mt-3 flex items-end justify-end">
                    <button
                      type="submit"
                      className="inline py-2 px-4 border shadow-sm text-sm rounded-md text-white hover:text-black bg-primary dark:text-black hover:dark:text-white dark:bg-secondary hover:bg-secondary hover:dark:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transform transition duration-500"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* Social Media */}
          <div className="mx-auto border-4 border-accent shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-secondary mb-6  mx-20">
              Social Media
            </h2>
            <div className="grid grid-cols-3 mx-20">
              <p className="flex mb-4">
                <img src={img5} className="w-6 h-6 bg-white p-1 rounded-2xl" />
                <h1 className="pl-5">+088 16292-72142</h1>
              </p>
              <p className="flex mb-4">
                <img src={img6} className="w-6 h-6 bg-white p-1 rounded-2xl" />
                <h1 className="pl-5">Dhaka</h1>
              </p>
              <p className="flex mb-4">
                <img src={img7} className="w-6 h-6 bg-white p-1 rounded-2xl" />
                <h1 className="pl-5">https://humayraakter.com</h1>
              </p>
            </div>
          </div>
        </div>
        {/* Map */}
        <div className="mx-auto border-4 border-accent shadow-lg rounded-lg p-6 mt-10">
          <h2 className="text-xl font-semibold  text-secondary mb-4 mx-20">
            Map
          </h2>
          <div className="mx-20">
            <SimpleMap />
          </div>
        </div>

        {/* Hours of Operation */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Hours of Operation</h2>
          <ul className="list-disc ml-8">
            <li>Monday-Friday: 9am-5pm</li>
            <li>Saturday-Sunday: Closed</li>
          </ul>
        </div>
        {/* FAQs */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">FAQs</h2>
          <ul className="list-disc ml-8">
            <li>[FAQ 1]</li>
            <li>[FAQ 2]</li>
            <li>[FAQ 3]</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
