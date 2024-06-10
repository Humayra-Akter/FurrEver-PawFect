import React, { useState, useEffect } from "react";
import bg from "../../../images/card-bg.jpg";

const StaffSchedules = () => {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    // Fetch staff schedule data from backend (dummy data for now)
    const dummyData = [
      {
        id: 1,
        name: "John Doe",
        role: "Veterinarian",
        shift: "Morning",
        tasks: ["Check-ups", "Vaccinations"],
      },
      {
        id: 2,
        name: "Jane Smith",
        role: "Groomer",
        shift: "Afternoon",
        tasks: ["Grooming", "Bathing"],
      },
      {
        id: 3,
        name: "Alice Brown",
        role: "Caretaker",
        shift: "Evening",
        tasks: ["Feeding", "Cleaning"],
      },
      {
        id: 4,
        name: "Bob Johnson",
        role: "Receptionist",
        shift: "Morning",
        tasks: ["Appointments", "Customer Service"],
      },
    ];
    setSchedules(dummyData);
  }, []);

  return (
    <div
      className="p-6 mt-10 rounded-lg min-h-screen"
      style={{
        fontFamily: "'Concert One', cursive",
      }}
    >
      <h1 className="text-2xl font-bold    text-secondary mb-4">
        Staff Schedules
      </h1>
      <div></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {schedules.map((schedule) => (
          <div
            key={schedule.id}
            style={{
              background: `url(${bg})`,
              backgroundSize: "cover",
            }}
            className=" border-4 border-accent bg-white p-6 shadow-md"
          >
            <h2 className="text-xl font-bold mb-2">{schedule.name}</h2>
            <p className="text-gray-100 mb-1">
              <strong>Role:</strong> {schedule.role}
            </p>
            <p className="text-gray-100 mb-1">
              <strong>Shift:</strong> {schedule.shift}
            </p>
            <div className="text-gray-100">
              <strong>Tasks:</strong>
              <ul className="list-disc list-inside">
                {schedule.tasks.map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaffSchedules;
