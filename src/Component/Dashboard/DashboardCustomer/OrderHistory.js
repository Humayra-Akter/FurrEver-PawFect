import React from "react";
import bg from "../../../images/card-bg.jpg";

const OrderHistory = () => {
  return (
    <div
      className="mt-10 min-h-screen p-4"
      style={{
        fontFamily: "'Concert One', cursive",
      }}
    >
      <h2 className="text-xl font-bold text-secondary mb-4">
        Order History
      </h2>

      <div
        style={{
          background: `url(${bg})`,
          backgroundSize: "cover",
        }}
        className="border-2 border-gray-700 bg-white rounded-lg p-4 shadow-md mb-4"
      >
        <div className="flex justify-between items-center text-white    mb-2">
          <span className="text-lg    font-semibold">Order #12345</span>
          <span className="text-rose-500">Date: 2024-05-22</span>
        </div>
        <div className="text-gray-400 mb-2">Items: Cat food, Dog leash</div>
        <div className="text-gray-400">Total: $25.00</div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-7">
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

export default OrderHistory;
