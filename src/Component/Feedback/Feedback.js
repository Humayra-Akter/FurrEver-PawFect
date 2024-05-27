import React from "react";

const Feedback = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Feedback</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Leave Your Feedback</h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="feedback"
              className="block text-sm font-medium text-gray-700"
            >
              Feedback
            </label>
            <textarea
              id="feedback"
              rows="4"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
          >
            Submit
          </button>
        </form>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Recent Feedback</h2>
        <div className="space-y-4">
          <div className="p-4 border rounded-md shadow-sm">
            <p className="text-sm text-gray-700">
              "Great service and very caring staff!"
            </p>
            <p className="text-sm text-gray-500 mt-2">- John Doe</p>
          </div>
          <div className="p-4 border rounded-md shadow-sm">
            <p className="text-sm text-gray-700">
              "The facilities are top-notch and my dog loves the daycare."
            </p>
            <p className="text-sm text-gray-500 mt-2">- Jane Smith</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Rate Us</h2>
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
      </section>
    </div>
  );
};

export default Feedback;
