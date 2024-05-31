import React, { useState, useEffect } from "react";

const StaffFindCabin = () => {
  const [cabins, setCabins] = useState([]);

  useEffect(() => {
    // Fetch cabin data from backend (dummy data for now)
    const dummyData = [
      {
        id: 1,
        name: "Cabin 101",
        location: "East Wing",
        status: "Available",
        type: "Cat",
        animalCount: 0,
        staff: [
          { name: "John Doe", shift: "Morning" },
          { name: "Jane Smith", shift: "Evening" },
        ],
      },
      {
        id: 2,
        name: "Cabin 102",
        location: "West Wing",
        status: "Occupied",
        type: "Dog",
        animalCount: 3,
        staff: [
          { name: "Alice Brown", shift: "Morning" },
          { name: "Bob Johnson", shift: "Night" },
        ],
      },
      {
        id: 3,
        name: "Cabin 103",
        location: "North Wing",
        status: "Available",
        type: "Cat",
        animalCount: 0,
        staff: [
          { name: "Charlie Davis", shift: "Morning" },
          { name: "Diana Evans", shift: "Evening" },
        ],
      },
      {
        id: 4,
        name: "Cabin 104",
        location: "South Wing",
        status: "Under Maintenance",
        type: "Dog",
        animalCount: 0,
        staff: [
          { name: "Ethan Harris", shift: "Morning" },
          { name: "Fiona Clark", shift: "Night" },
        ],
      },
    ];
    setCabins(dummyData);
  }, []);

  const handleSearch = (event) => {
    // Implement search logic here (if needed)
  };

  return (
    <div className="p-6 mt-10 rounded-lg min-h-screen">
      <h1 className="text-2xl font-bold font-mono text-secondary mb-4">
        Find Cabin
      </h1>
      <input
        type="text"
        placeholder="Search cabins..."
        className="mb-4 p-2 border rounded"
        onChange={handleSearch}
      />
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 shadow-md rounded-md">
          <thead className="bg-gray-500">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold font-mono text-white uppercase tracking-wider">
                Cabin Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold font-mono text-white uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold font-mono text-white uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold font-mono text-white uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold font-mono text-white uppercase tracking-wider">
                Animals
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold font-mono text-white uppercase tracking-wider">
                Staff
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {cabins.map((cabin) => (
              <tr key={cabin.id}>
                <td className="px-6 py-4 whitespace-nowrap">{cabin.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {cabin.location}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{cabin.status}</td>
                <td className="px-6 py-4 whitespace-nowrap">{cabin.type}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {cabin.animalCount}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <ul>
                    {cabin.staff.map((staff, index) => (
                      <li key={index}>
                        {staff.name} ({staff.shift})
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StaffFindCabin;
