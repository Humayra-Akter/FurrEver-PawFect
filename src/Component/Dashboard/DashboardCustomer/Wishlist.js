import React, { useState } from "react";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([
    { id: 1, name: "Grooming session for Bella" },
    { id: 2, name: "Vaccination for Max" },
    { id: 3, name: "Dental check-up for Luna" },
  ]);

  const handleRemoveItem = (id) => {
    if (
      window.confirm(
        "Are you sure you want to remove this item from your wishlist?"
      )
    ) {
      setWishlistItems(wishlistItems.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="p-6 mt-10 rounded-lg min-h-screen">
      <div className="mb-10">
        <h1 className="text-2xl font-bold font-mono text-secondary">
          My Wishlist
        </h1>
        <p className="text-gray-200 mt-2">
          Choose services for your pet and add them to your wishlist.
        </p>
        <p className="text-gray-200 mt-1">
          After adding services to the wishlist, you can view them here and
          remove if needed.
        </p>
        <Link
          to="/services"
          className="mt-4 bg-primary hover:bg-secondary hover:text-primary text-white font-bold py-2 px-4 rounded inline-block"
        >
          Choose Services
        </Link>
      </div>

      {/* Section for Recently Added Items */}
      <section>
        <h2 className="text-xl font-mono font-bold text-secondary mb-4">
          Recently Added
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 shadow-md rounded-md">
            <thead className="bg-gray-500">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold font-mono text-white uppercase tracking-wider">
                  Service Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold font-mono text-white  uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold font-mono text-white  uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {wishlistItems.slice(-3).map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">-</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-red-500 hover:text-red-700 font-medium"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Wishlist;
