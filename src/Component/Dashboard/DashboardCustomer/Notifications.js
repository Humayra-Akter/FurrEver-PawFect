import React, { useState, useEffect } from "react";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    setNotifications([
      {
        id: 1,
        message: "Your appointment with Dr. Smith is confirmed.",
        type: "info",
      },
      {
        id: 2,
        message: "Your appointment with Dr. Brown is pending.",
        type: "warning",
      },
      {
        id: 3,
        message: "Appointment with Dr. Green has been completed.",
        type: "success",
      },
    ]);
  }, []);

  const getTypeClass = (type) => {
    switch (type) {
      case "info":
        return "text-blue-500";
      case "warning":
        return "text-yellow-500";
      case "success":
        return "text-green-500";
      case "error":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

  return (
    <div
      className="p-6 min-h-screen mt-10 rounded-lg"
      style={{
        fontFamily: "'Concert One', cursive",
      }}
    >
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl    font-bold text-secondary">Notifications</h1>
        <button
          onClick={clearNotifications}
          className="bg-primary hover:bg-secondary hover:text-primary text-secondary font-bold py-2 px-4 rounded"
        >
          Clear
        </button>
      </div>
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="border rounded-md p-4 shadow-sm"
          >
            <p className={getTypeClass(notification.type)}>
              {notification.message}
            </p>
          </div>
        ))}
        {notifications.length === 0 && (
          <p className="text-gray-500">No notifications available.</p>
        )}
      </div>
    </div>
  );
};

export default Notifications;
