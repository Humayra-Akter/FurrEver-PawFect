import React, { useState, useEffect } from "react";
import bg from "../../../images/card-bg.jpg";

const StaffRescuedAnimal = () => {
  const [rescuedAnimals, setRescuedAnimals] = useState([]);
  const [newAnimal, setNewAnimal] = useState({
    name: "",
    type: "",
    rescueDate: "",
    healthStatus: "",
    caretaker: "",
  });

  useEffect(() => {
    // Fetch rescued animal data from backend (dummy data for now)
    const dummyData = [
      {
        id: 1,
        name: "Bella",
        type: "Dog",
        rescueDate: "2024-01-15",
        healthStatus: "Good",
        caretaker: "John Doe",
      },
      {
        id: 2,
        name: "Max",
        type: "Cat",
        rescueDate: "2024-02-10",
        healthStatus: "Fair",
        caretaker: "Jane Smith",
      },
      {
        id: 3,
        name: "Luna",
        type: "Dog",
        rescueDate: "2024-03-05",
        healthStatus: "Excellent",
        caretaker: "Alice Brown",
      },
      {
        id: 4,
        name: "Charlie",
        type: "Cat",
        rescueDate: "2024-04-01",
        healthStatus: "Poor",
        caretaker: "Bob Johnson",
      },
    ];
    setRescuedAnimals(dummyData);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAnimal((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRescuedAnimals((prev) => [
      ...prev,
      { id: prev.length + 1, ...newAnimal },
    ]);
    setNewAnimal({
      name: "",
      type: "",
      rescueDate: "",
      healthStatus: "",
      caretaker: "",
    });
  };

  return (
    <div
      className="p-6 mt-10 rounded-lg"
      style={{
        fontFamily: "'Concert One', cursive",
      }}
    >
      <h1 className="text-2xl font-bold    text-secondary mb-4">
        Rescued Animals
      </h1>

      <form
        style={{
          background: `url(${bg})`,
          backgroundSize: "cover",
        }}
        className=" border-4 border-accent mb-6 bg-white p-4 shadow-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl text-white    font-bold mb-4">
          Add New Rescued Animal
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-100    font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={newAnimal.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-100    font-bold mb-2">
              Type
            </label>
            <input
              type="text"
              name="type"
              value={newAnimal.type}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-100    font-bold mb-2">
              Rescue Date
            </label>
            <input
              type="date"
              name="rescueDate"
              value={newAnimal.rescueDate}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-100    font-bold mb-2">
              Health Status
            </label>
            <input
              type="text"
              name="healthStatus"
              value={newAnimal.healthStatus}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-gray-100    font-bold mb-2">
              Caretaker
            </label>
            <input
              type="text"
              name="caretaker"
              value={newAnimal.caretaker}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 bg-primary text-white    font-bold py-2 px-4 rounded hover:bg-secondary hover:text-primary"
        >
          Add Animal
        </button>
      </form>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 shadow-md rounded-md">
          <thead className="bg-gray-500">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold    text-white uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold    text-white uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold    text-white uppercase tracking-wider">
                Rescue Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold    text-white uppercase tracking-wider">
                Health Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold    text-white uppercase tracking-wider">
                Caretaker
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {rescuedAnimals.map((animal) => (
              <tr key={animal.id}>
                <td className="px-6 py-4 whitespace-nowrap">{animal.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{animal.type}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {animal.rescueDate}
                </td>
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

export default StaffRescuedAnimal;
