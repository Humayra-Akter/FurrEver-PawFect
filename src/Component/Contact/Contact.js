import React from "react";
import bg from "../../images/card-bg.jpg";
import img5 from "../../images/call.png";
import img6 from "../../images/address.png";
import img7 from "../../images/facebook-app-symbol.png";

const Contact = () => {
  return (
    <div className="bg-black p-8">
      <div className="max-w-4xl mx-auto">
        {/* <h1 className="text-3xl text-secondary font-mono font-bold text-center mb-8">
          Contact Us
        </h1> */}
        <div className=" py-12">
          <div
            style={{
              background: `url(${bg})`,
              backgroundSize: "cover",
            }}
            className="mx-auto border-4 border-accent shadow-lg rounded-lg p-6"
          >
            <div className="flex justify-between mx-40">
              <div>
                <h2 className="text-3xl font-semibold text-secondary mb-6 font-mono">
                  Contact Form
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-mono text-orange-200 font-semibold mb-3">
                      Our Address
                    </h3>
                    <p className="font-mono">1414 Shopper Place, Bangladesh</p>
                  </div>
                  <div>
                    <h3 className="text-xl text-orange-200 font-semibold mb-3 font-mono">
                      Contact Information
                    </h3>
                    <p className="font-mono">Email: contact@example.com</p>
                    <p className=" font-mono">Phone: +880 16292-72142</p>
                  </div>
                </div>
                <form className="mt-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-orange-300 font-mono">
                        Name
                      </label>
                      <input
                        type="text"
                        className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-orange-300 font-mono">
                        Email
                      </label>
                      <input
                        type="email"
                        className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="mt-2">
                    <label className="block text-orange-300 text-sm  font-mono">
                      Message
                    </label>
                    <textarea
                      rows="3"
                      className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    ></textarea>
                  </div>
                  <div className="mt-3 flex items-end justify-end">
                    <button
                      type="submit"
                      className="inline py-2 px-4 border border-transparent shadow-sm text-sm rounded-md text-black font-mono font-bold bg-secondary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            background: `url(${bg})`,
            backgroundSize: "cover",
          }}
        >
          {/* Social Media */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-secondary mb-6 font-mono">
              Social Media
            </h2>
            <div className="grid grid-cols-3">
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
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Map</h2>
          {/* Embed map component goes here */}
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
        {/* Call to Action */}
        <div className="text-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Call to Action
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
