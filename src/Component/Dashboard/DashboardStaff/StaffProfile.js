import React from "react";

const StaffProfile = () => {
  const staffDetails = {
    name: "John Doe",
    position: "Veterinary Technician",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    address: "123 Animal Care St, Petville, PA 12345",
    workSchedule: [
      { day: "Monday", hours: "9 AM - 5 PM" },
      { day: "Tuesday", hours: "9 AM - 5 PM" },
      { day: "Wednesday", hours: "9 AM - 5 PM" },
      { day: "Thursday", hours: "9 AM - 5 PM" },
      { day: "Friday", hours: "9 AM - 5 PM" },
    ],
    recentActivities: [
      "Administered vaccinations to 15 pets",
      "Assisted in 3 surgeries",
      "Conducted 5 wellness exams",
      "Updated medical records",
    ],
  };

  return (
    <div className="p-6 rounded-lg mt-10">
      <div className="mb-10">
        <h1 className="text-2xl font-bold font-mono text-secondary">
          Staff Profile
        </h1>
        <p className="text-gray-600 mt-2">
          View and manage your profile information.
        </p>
      </div>

      <section className="mb-8">
        <h2 className="text-xl font-bold font-mono text-secondary mb-4">
          Personal Information
        </h2>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <p>
            <strong>Name:</strong> {staffDetails.name}
          </p>
          <p>
            <strong>Position:</strong> {staffDetails.position}
          </p>
          <p>
            <strong>Email:</strong> {staffDetails.email}
          </p>
          <p>
            <strong>Phone:</strong> {staffDetails.phone}
          </p>
          <p>
            <strong>Address:</strong> {staffDetails.address}
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold font-mono text-secondary mb-4">
          Work Schedule
        </h2>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <ul>
            {staffDetails.workSchedule.map((schedule, index) => (
              <li key={index}>
                <strong>{schedule.day}:</strong> {schedule.hours}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold font-mono text-secondary mb-4">
          Recent Activities
        </h2>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <ul className="list-disc list-inside">
            {staffDetails.recentActivities.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default StaffProfile;
