import React, { useState, useEffect } from "react";

const StaffDaycareAnimal = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    // Fetch animal data from backend (dummy data for now)
    const dummyData = [
      {
        id: 1,
        name: "Bella",
        type: "Dog",
        age: 3,
        healthStatus: "Good",
        caretaker: "John Doe",
      },
      {
        id: 2,
        name: "Max",
        type: "Cat",
        age: 2,
        healthStatus: "Fair",
        caretaker: "Jane Smith",
      },
      {
        id: 3,
        name: "Luna",
        type: "Dog",
        age: 1,
        healthStatus: "Excellent",
        caretaker: "Alice Brown",
      },
      {
        id: 4,
        name: "Charlie",
        type: "Cat",
        age: 4,
        healthStatus: "Poor",
        caretaker: "Bob Johnson",
      },
    ];
    setAnimals(dummyData);
  }, []);

  return (
    <div className="p-6 mt-10 rounded-lg min-h-screen">
      <h1 className="text-2xl font-bold font-mono text-secondary mb-4">
        Daycare Animals
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 shadow-md rounded-md">
          <thead className="bg-gray-500">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold font-mono text-white uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold font-mono text-white uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold font-mono text-white uppercase tracking-wider">
                Age
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold font-mono text-white uppercase tracking-wider">
                Health Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold font-mono text-white uppercase tracking-wider">
                Caretaker
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {animals.map((animal) => (
              <tr key={animal.id}>
                <td className="px-6 py-4 whitespace-nowrap">{animal.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{animal.type}</td>
                <td className="px-6 py-4 whitespace-nowrap">{animal.age}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {animal.healthStatus}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {animal.caretaker}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StaffDaycareAnimal;
