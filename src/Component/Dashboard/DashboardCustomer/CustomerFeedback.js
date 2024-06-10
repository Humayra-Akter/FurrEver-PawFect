import React from "react";
import bg from "../../../images/card-bg.jpg";

const CustomerFeedback = () => {
  return (
    <div
      className="p-6 mt-10"
      style={{
        fontFamily: "'Concert One', cursive",
      }}
    >
      {/* Feedback History Section */}
      <div className="mb-8">
        <h3 className="text-xl text-secondary    font-semibold mb-4">
          Feedback History
        </h3>
        <div className="space-y-6">
          {/* Individual feedback item */}
          <div
            style={{
              background: `url(${bg})`,
              backgroundSize: "cover",
            }}
            className="border-2 border-accent bg-white rounded p-4 shadow-md"
          >
            <div className="flex justify-between items-center text-white    mb-3 border-b pb-3">
              <span className="text-lg    font-semibold">Feedback #001</span>
              <span className="text-rose-500">Date: 2024-05-22</span>
            </div>
            <div className="text-gray-400 mb-2">
              {" "}
              I am very happy with the service provided. My dog loves the
              daycare!
            </div>
          </div>
        </div>
      </div>
      {/* Submit New Feedback Section */}
      <div
        style={{
          background: `url(${bg})`,
          backgroundSize: "cover",
        }}
        className="border-2 border-accent bg-white rounded p-4 shadow-md"
      >
        <h3 className="text-xl text-secondary mt-5    font-semibold mb-4">
          Submit New Feedback{" "}
        </h3>
        <form className="space-y-4">
          <div>
            <label
              className="block text-orange-300    font-medium mb-2"
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
              className="block text-orange-300    font-medium mb-2"
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
            <button className="bg-primary hover:bg-secondary w-36 hover:text-primary text-secondary    font-bold py-2 px-4 rounded">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomerFeedback;
