import React from "react";

const CustomerFeedback = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">My Feedback</h2>

      {/* Feedback History Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Feedback History</h3>
        <div className="space-y-6">
          {/* Individual feedback item */}
          <div className="p-5 bg-white shadow-md rounded-lg">
            <div className="flex justify-between items-center border-b pb-3 mb-3">
              <div className="text-lg font-semibold">Feedback #001</div>
              <div className="text-gray-500">2024-05-15</div>
            </div>
            <div className="text-gray-700">
              I am very happy with the service provided. My dog loves the
              daycare!
            </div>
          </div>

          <div className="p-5 bg-white shadow-md rounded-lg">
            <div className="flex justify-between items-center border-b pb-3 mb-3">
              <div className="text-lg font-semibold">Feedback #002</div>
              <div className="text-gray-500">2024-04-10</div>
            </div>
            <div className="text-gray-700">
              Great veterinary care! The staff is very friendly and
              professional.
            </div>
          </div>
        </div>
      </div>

      {/* Submit New Feedback Section */}
      <div className="bg-white p-6 shadow-md rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Submit New Feedback</h3>
        <form className="space-y-4">
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="feedbackTitle"
            >
              Title
            </label>
            <input
              className="w-full p-3 border border-gray-300 rounded-lg"
              type="text"
              id="feedbackTitle"
              placeholder="Enter feedback title"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="feedbackContent"
            >
              Feedback
            </label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg"
              id="feedbackContent"
              rows="4"
              placeholder="Enter your feedback"
            ></textarea>
          </div>
          <div className="text-right">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomerFeedback;
