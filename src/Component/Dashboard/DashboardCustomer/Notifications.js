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

  return (
    <div className="p-6 min-h-screen mt-10 rounded-lg">
      <h1 className="text-xl font-mono font-bold text-secondary mb-4">
        Notifications
      </h1>
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
      </div>
    </div>
  );
};

export default Notifications;
