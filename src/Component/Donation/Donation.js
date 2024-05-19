import React from "react";
import bg from "../../images/card-bg.jpg";

const Donation = () => {
  return (
    <div className="p-6 space-y-12">
      {/* Donation Form */}
      <section
        style={{
          background: `url(${bg})`,
          backgroundSize: "cover",
        }}
        className=" max-w-4xl border-2 border-accent mx-auto p-6 rounded shadow-md"
      >
        <h2 className="text-2xl font-bold mb-4">Donate to Support Our Cause</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Full Name</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block text-gray-700">Amount</label>
            <input type="number" className="w-full p-2 border rounded" />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Donate
          </button>
        </form>
      </section>

      {/* Recent Donors */}
      <section
        style={{
          background: `url(${bg})`,
          backgroundSize: "cover",
        }}
        className="border-2 max-w-4xl border-accent mx-auto p-6 rounded shadow-md"
      >
        <h2 className="text-2xl font-bold mb-4">Recent Donors</h2>
        <ul className="space-y-2">
          <li className="border-b pb-2">John Doe - $50</li>
          <li className="border-b pb-2">Jane Smith - $100</li>
          <li className="border-b pb-2">Alice Johnson - $75</li>
        </ul>
      </section>

      {/* Blog Posts */}
      <section
        style={{
          background: `url(${bg})`,
          backgroundSize: "cover",
        }}
        className="border-2 border-accent max-w-4xl mx-auto p-6 rounded shadow-md"
      >
        <h2 className="text-2xl font-bold mb-4">Blog Posts</h2>
        <ul className="space-y-2">
          <li className="border-b pb-2">
            <a href="#" className="text-blue-500 hover:underline">
              How Your Donations Help
            </a>
          </li>
          <li className="border-b pb-2">
            <a href="#" className="text-blue-500 hover:underline">
              Success Stories from Our Shelter
            </a>
          </li>
          <li className="border-b pb-2">
            <a href="#" className="text-blue-500 hover:underline">
              Volunteer Spotlight: Making a Difference
            </a>
          </li>
        </ul>
      </section>

      {/* Forum Discussions */}
      <section
        style={{
          background: `url(${bg})`,
          backgroundSize: "cover",
        }}
        className="border-2 border-accent max-w-4xl mx-auto  p-6 rounded shadow-md"
      >
        <h2 className="text-2xl font-bold mb-4">Forum Discussions</h2>
        <ul className="space-y-2">
          <li className="border-b pb-2">
            <a href="#" className="text-blue-500 hover:underline">
              Best Practices for Animal Care
            </a>
          </li>
          <li className="border-b pb-2">
            <a href="#" className="text-blue-500 hover:underline">
              Share Your Adoption Stories
            </a>
          </li>
          <li className="border-b pb-2">
            <a href="#" className="text-blue-500 hover:underline">
              Tips for New Pet Owners
            </a>
          </li>
        </ul>
      </section>

      {/* Donation History */}
      <section
        style={{
          background: `url(${bg})`,
          backgroundSize: "cover",
        }}
        className="border-2 border-accent max-w-4xl mx-auto  p-6 rounded shadow-md"
      >
        <h2 className="text-2xl font-bold mb-4">Donation History</h2>
        <ul className="space-y-2">
          <li className="border-b pb-2">March 2024 - $2000</li>
          <li className="border-b pb-2">April 2024 - $1500</li>
          <li className="border-b pb-2">May 2024 - $2500</li>
        </ul>
      </section>
    </div>
  );
};

export default Donation;
