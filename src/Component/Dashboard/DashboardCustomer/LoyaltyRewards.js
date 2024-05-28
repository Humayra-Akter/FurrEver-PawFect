import React, { useState, useEffect } from "react";

const LoyaltyRewards = () => {
  const [points, setPoints] = useState(0);
  const [recentActivities, setRecentActivities] = useState([]);

  useEffect(() => {
    // Fetch points and recent activities from backend
    // Example: fetch('/api/loyalty').then(response => response.json()).then(data => {
    //   setPoints(data.points);
    //   setRecentActivities(data.activities);
    // });

    // Dummy data for example
    setPoints(1200);
    setRecentActivities([
      {
        id: 1,
        date: "2024-05-25",
        description: "Earned 100 points for booking an appointment for Fluffy",
      },
      {
        id: 2,
        date: "2024-05-20",
        description: "Redeemed 200 points for a grooming service for Bella",
      },
      {
        id: 3,
        date: "2024-05-15",
        description: "Earned 50 points for referring a new customer",
      },
    ]);
  }, []);

  return (
    <div className="p-6 shadow-md mt-10 rounded-lg">
      {/* Section for Points Summary */}
      <section className="mb-10">
        <h1 className="text-xl font-mono font-bold text-secondary mb-4">
          Points Summary
        </h1>
        <div className="border rounded-md p-4 shadow-sm">
          <p className="text-gray-200">
            You have <span className="font-bold">{points}</span> points.
          </p>
        </div>
      </section>

      {/* Section for Redemption Options */}
      <section className="mb-10">
        <h1 className="text-xl font-mono font-bold text-secondary mb-4">
          Redemption Options
        </h1>
        <div className="space-y-4">
          <div className="border rounded-md p-4 shadow-sm">
            <p className="text-gray-200">Free Grooming Session - 200 points</p>
            <button className="bg-primary hover:bg-secondary hover:text-primary text-secondary font-bold py-2 px-4 rounded mt-2">
              Redeem
            </button>
          </div>
          <div className="border rounded-md p-4 shadow-sm">
            <p className="text-gray-200">
              One Day of Free Daycare - 300 points
            </p>
            <button className="bg-primary hover:bg-secondary hover:text-primary text-secondary font-bold py-2 px-4 rounded mt-2">
              Redeem
            </button>
          </div>
          <div className="border rounded-md p-4 shadow-sm">
            <p className="text-gray-200">
              10% Discount on Next Appointment - 100 points
            </p>
            <button className="bg-primary hover:bg-secondary  hover:text-primary text-secondary font-bold py-2 px-4 rounded mt-2">
              Redeem
            </button>
          </div>
        </div>
      </section>

      {/* Section for Recent Activities */}
      <section className="mb-10">
        <h1 className="text-xl font-mono font-bold text-secondary mb-4">
          Recent Activities
        </h1>
        <div className="space-y-4">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="border rounded-md p-4 shadow-sm">
              <p className="text-gray-200">
                {activity.date} - {activity.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section for Contact Support */}
      <section className="mb-10">
        <h1 className="text-xl font-mono font-bold text-secondary mb-4">
          Contact Support
        </h1>
        <div className="border rounded-md p-4 shadow-sm">
          <p className="text-gray-200">
            For any issues or questions regarding your loyalty points, please
            contact our support team.
          </p>
          <button className="bg-primary hover:bg-secondary text-secondary hover:text-primary font-bold py-2 px-4 rounded mt-2">
            Contact Support
          </button>
        </div>
      </section>
    </div>
  );
};

export default LoyaltyRewards;
