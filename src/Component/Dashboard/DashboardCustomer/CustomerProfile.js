import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const CustomerProfile = () => {
  const [user] = useAuthState(auth);
  const [loggedUser, setLoggedUser] = useState({});
  const [updatedCustomer, setUpdatedCustomer] = useState({});
  const [customerInfo, setCustomerInfo] = useState({});
  const [editable, setEditable] = useState(false);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/user?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.length > 0) {
            console.log(data);
            const matchingUser = data.find(
              (userData) => userData?.email === user?.email
            );
            if (matchingUser) {
              setLoggedUser(matchingUser);
              setUpdatedCustomer({ ...matchingUser });
            }
          }
        });
    }
  }, [user]);

  const handleCancelEdit = () => {
    setEditable(false);
    setUpdatedCustomer({ ...loggedUser });
  };

  const handleUpdateInfo = (field, value) => {
    setCustomerInfo((prevInfo) => ({
      ...prevInfo,
      [field]: value,
    }));
  };

  const handleEdit = () => {
    setEditable(true);
  };

  const handleSave = () => {
    fetch(`http://localhost:5000/user/${loggedUser._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCustomer),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEditable(false);
      });
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
            className={`w-full px-3 py-2 border rounded shadow appearance-none ${
              editable ? "" : "bg-gray-100"
            }`}
            readOnly={!editable}
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
            className={`w-full px-3 py-2 border rounded shadow appearance-none ${
              editable ? "" : "bg-gray-100"
            }`}
            readOnly={!editable}
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
            className={`w-full px-3 py-2 border rounded shadow appearance-none ${
              editable ? "" : "bg-gray-100"
            }`}
            readOnly={!editable}
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
        {/* Show edit button if not already editing */}
        {!editable && (
          <button
            onClick={handleEdit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Edit
          </button>
        )}
        {/* Show save button if editing */}
        {editable && (
          <button
            onClick={handleSave}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Save
          </button>
        )}
      </div>
    </div>
  );
};

export default CustomerProfile;
