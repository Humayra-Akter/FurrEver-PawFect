import React from "react";
import contactImage from "../../images/banner.png";
import bg from "../../images/card-bg.jpg";

const Contact = () => {
  return (
    <div className=" py-12">
      <div
        style={{
          background: `url(${bg})`,
          backgroundSize: "cover",
          borderWidth: 1,
          borderColor: "darkslategray",
        }}
        className="h-96 mx-auto bg-accent shadow-lg rounded-lg p-6"
      >
        <div className="flex justify-between mx-60">
          <div>
            <img
              src={contactImage}
              alt="Contact Us"
              className="mb-6 w-80 rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-secondary mb-6 font-mono">
              Contact Us
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
  );
};

export default Contact;
