import React from "react";

const OrderHistory = () => {
  return (
    <div className="mt-10 min-h-screen p-4">
      <h2 className="text-xl font-mono font-bold text-secondary mb-4">
        Order History
      </h2>

      {/* Individual order items */}
      <div className="border border-gray-200 rounded-lg p-4 mb-4">
        <div className="flex justify-between items-center text-white font-mono mb-2">
          <span className="text-lg font-semibold">Order #12345</span>
          <span
            className="text-rose-500
          "
          >
            Date: 2024-05-22
          </span>
        </div>
        <div className="text-gray-400 mb-2">Items: Cat food, Dog leash</div>
        <div className="text-gray-400">Total: $25.00</div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-7">
        <button className="bg-primary hover:bg-secondary w-32 hover:text-primary text-secondary font-mono font-bold py-2 px-4 rounded">
          Previous
        </button>
        <button className="bg-primary hover:bg-secondary w-32 hover:text-primary text-secondary font-mono font-bold py-2 px-4 rounded">
          Next
        </button>
      </div>
    </div>
  );
};

export default OrderHistory;
