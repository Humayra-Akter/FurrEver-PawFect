import React, { useState, useEffect } from "react";
import bg from "../../../images/card-bg.jpg";

const StaffInventory = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    // Fetch inventory data from backend (dummy data for now)
    const dummyData = [
      {
        category: "Food Supplies",
        items: [
          { id: 1, name: "Dog Food", quantity: 50, unit: "kg" },
          { id: 2, name: "Cat Food", quantity: 30, unit: "kg" },
          // More items...
        ],
      },
      {
        category: "Medical Supplies",
        items: [
          { id: 1, name: "Bandages", quantity: 100, unit: "pieces" },
          { id: 2, name: "Antibiotics", quantity: 25, unit: "bottles" },
          // More items...
        ],
      },
      {
        category: "Cleaning Supplies",
        items: [
          { id: 1, name: "Disinfectant", quantity: 20, unit: "liters" },
          { id: 2, name: "Gloves", quantity: 200, unit: "pairs" },
          // More items...
        ],
      },
      // More categories...
    ];

    setInventory(dummyData);
  }, []);

  const toggleCollapse = (index) => {
    setInventory((prevInventory) =>
      prevInventory.map((category, catIndex) =>
        catIndex === index
          ? { ...category, isCollapsed: !category.isCollapsed }
          : category
      )
    );
  };

  return (
    <div className="p-6 mt-10 rounded-lg">
      <h1 className="text-2xl font-bold font-mono text-secondary mb-10">
        Inventory Management
      </h1>

      {inventory.map((category, index) => (
        <div key={index} className="mb-6">
          <div
            className="text-white shadow-md rounded-lg cursor-pointer"
            onClick={() => toggleCollapse(index)}
          >
            <h2 className="text-xl font-bold flex justify-between items-center">
              {category.category}
              <span>
                {category.isCollapsed ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 12H4"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 12H4M12 4v16"
                    />
                  </svg>
                )}
              </span>
            </h2>
          </div>
          {!category.isCollapsed && (
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.items.map((item) => (
                <div
                  style={{
                    background: `url(${bg})`,
                    backgroundSize: "cover",
                  }}
                  className=" border-4 border-accent bg-white p-4 shadow-md"
                  key={item.id}
                >
                  <h3 className="text-lg font-bold mb-2">{item.name}</h3>
                  <p>
                    Quantity: {item.quantity} {item.unit}
                  </p>
                  <button className="mt-2 bg-primary text-white py-1 px-3 rounded hover:bg-secondary">
                    Update
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StaffInventory;
