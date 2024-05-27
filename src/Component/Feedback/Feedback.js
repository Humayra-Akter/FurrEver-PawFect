import React from "react";
import bg from "../../images/card-bg.jpg";

const Feedback = () => {
  return (
    <div className="bg-black my-20 mx-40">
      <h2 className="text-3xl font-semibold text-secondary mb-6 text-center font-mono">
        Feedback
      </h2>
      <div className=" py-12">
        <div
          style={{
            background: `url(${bg})`,
            backgroundSize: "cover",
          }}
          className="mx-auto border-4 border-accent shadow-lg rounded-lg p-6"
        >
          <div className="mx-20">
            <div>
              <h2 className="text-3xl font-semibold text-secondary mb-6 font-mono">
                Leave Your Feedback
              </h2>{" "}
              <form className="mt-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-orange-300 font-mono">
                      Name
                    </label>
                    <input
                      type="text"
                      className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-accent rounded-md"
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
                    Feedback
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

      <section className="mb-6">
        {" "}
        <h2 className="text-2xl font-semibold text-secondary mb-2 font-mono">
          Recent Feedback
        </h2>
        <div className="grid grid-cols-2 gap-16">
          <div className="p-4 border h-24 rounded-md shadow-sm">
            <p className="text-sm text-white">
              "Great service and very caring staff!"
            </p>
            <p className="text-sm text-gray-300 mt-2">- John Doe</p>
          </div>
          <div className="p-4 border h-24 rounded-md shadow-sm">
            <p className="text-sm text-white">
              "The facilities are top-notch and my dog loves the daycare."
            </p>
            <p className="text-sm text-gray-300 mt-2">- Jane Smith</p>
          </div>
        </div>
      </section>

      <div className="flex items-center justify-center mt-20">
        <div>
          <h2 className="text-xl text-center font-semibold mb-2">Rate Us</h2>
          <div className="flex items-center space-x-2">
            <button className="text-yellow-500 hover:text-yellow-600">
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 15l-3.09 1.62.58-3.37-2.45-2.38 3.4-.49L10 7l1.56 3.16 3.4.49-2.45 2.38.58 3.37L10 15z" />
              </svg>
            </button>
            <button className="text-yellow-500 hover:text-yellow-600">
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 15l-3.09 1.62.58-3.37-2.45-2.38 3.4-.49L10 7l1.56 3.16 3.4.49-2.45 2.38.58 3.37L10 15z" />
              </svg>
            </button>
            <button className="text-yellow-500 hover:text-yellow-600">
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 15l-3.09 1.62.58-3.37-2.45-2.38 3.4-.49L10 7l1.56 3.16 3.4.49-2.45 2.38.58 3.37L10 15z" />
              </svg>
            </button>
            <button className="text-yellow-500 hover:text-yellow-600">
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 15l-3.09 1.62.58-3.37-2.45-2.38 3.4-.49L10 7l1.56 3.16 3.4.49-2.45 2.38.58 3.37L10 15z" />
              </svg>
            </button>
            <button className="text-yellow-500 hover:text-yellow-600">
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 15l-3.09 1.62.58-3.37-2.45-2.38 3.4-.49L10 7l1.56 3.16 3.4.49-2.45 2.38.58 3.37L10 15z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
