import React from "react";
import bg from "../../../images/card-bg.jpg";

const CustomerDonation = () => {
  return (
    <div
      className="mt-10 min-h-screen p-4"
      style={{
        fontFamily: "'Concert One', cursive",
      }}
    >
      <h2 className="text-xl    font-bold text-secondary mb-4">
        My Donations{" "}
      </h2>

      {/* Donation item */}
      <div
        style={{
          background: `url(${bg})`,
          backgroundSize: "cover",
        }}
        className="border-2 border-gray-700 bg-white rounded p-2 shadow-md"
      >
        <div className="p-5 shadow-md rounded-lg">
          <div className="flex justify-between items-center border-b pb-3 mb-3">
            <div className="text-lg    font-semibold">Donation #001</div>
            <div className="text-gray-300   ">2024-05-15</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <div className="text-sm text-gray-300   ">Amount</div>
              <div className="text-lg font-medium   ">$50.00</div>
            </div>
            <div>
              <div className="text-sm text-gray-300   ">Purpose</div>
              <div className="text-lg font-medium   ">Animal Rescue Fund</div>
            </div>
            <div>
              <div className="text-sm text-gray-300   ">Status</div>
              <div className="text-lg font-medium    text-green-500">
                Completed
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10 gap-7">
        <button className="bg-primary hover:bg-secondary w-32 hover:text-primary text-secondary    font-bold py-2 px-4 rounded">
          Previous
        </button>
        <button className="bg-primary hover:bg-secondary w-32 hover:text-primary text-secondary    font-bold py-2 px-4 rounded">
          Next
        </button>
      </div>
    </div>
  );
};

export default CustomerDonation;
