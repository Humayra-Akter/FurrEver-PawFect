import React, { useState } from "react";

const CustomerProfile = () => {
  const [customerInfo, setCustomerInfo] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    password: "********",
    role: "customer",
  });

  const handleUpdateInfo = (field, value) => {
    setCustomerInfo((prevInfo) => ({
      ...prevInfo,
      [field]: value,
    }));
  };

  return (
    <div className="mt-20 min-h-screen p-4">
      <div className="max-w-md mx-auto bg-white rounded p-6 shadow-md">
        <h2 className="text-2xl text-primary font-mono text-center font-bold mb-4">
          Customer Profile
        </h2>
        <div className="mb-4">
          <label className="block text-gray-900 font-mono font-bold mb-2">
            Name:
          </label>
          <input
            type="text"
            value={customerInfo.name}
            onChange={(e) => handleUpdateInfo("name", e.target.value)}
            className="w-full px-3 py-2 border rounded shadow appearance-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-900 font-mono font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            value={customerInfo.email}
            onChange={(e) => handleUpdateInfo("email", e.target.value)}
            className="w-full px-3 py-2 border rounded shadow appearance-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-900 font-mono font-bold mb-2">
            Password:
          </label>
          <input
            type="password"
            value={customerInfo.password}
            onChange={(e) => handleUpdateInfo("password", e.target.value)}
            className="w-full px-3 py-2 border rounded shadow appearance-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-900 font-mono font-bold mb-2">
            Role:
          </label>
          <input
            type="text"
            value={customerInfo.role}
            readOnly
            className="w-full px-3 py-2 border rounded shadow appearance-none bg-gray-100"
          />
        </div>
        {/* Add more fields and functionalities as needed */}
      </div>
    </div>
  );
};

export default CustomerProfile;
