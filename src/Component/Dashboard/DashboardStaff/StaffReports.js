import React, { useState, useEffect } from "react";

const StaffReports = () => {
  // Dummy data for demonstration
  const [reports, setReports] = useState([]);

  useEffect(() => {
    // Fetch staff reports data from backend (dummy data for now)
    const dummyData = [
      {
        id: 1,
        type: "Attendance",
        data: [
          { date: "2024-06-01", staffName: "John Doe", status: "Present" },
          { date: "2024-06-01", staffName: "Jane Smith", status: "Absent" },
          { date: "2024-06-02", staffName: "John Doe", status: "Present" },
          { date: "2024-06-02", staffName: "Jane Smith", status: "Present" },
          // More data...
        ],
      },
      {
        id: 2,
        type: "Performance",
        data: [
          { staffName: "John Doe", rating: 4.5 },
          { staffName: "Jane Smith", rating: 3.8 },
          // More data...
        ],
      },
      {
        id: 3,
        type: "Tasks Completed",
        data: [
          { staffName: "John Doe", task: "Check-ups", count: 15 },
          { staffName: "Jane Smith", task: "Grooming", count: 10 },
          // More data...
        ],
      },
      // More report types...
    ];

    setReports(dummyData);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "Present":
        return "bg-green-100 text-green-800";
      case "Absent":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-6 mt-10 rounded-lg min-h-screen">
      <h1 className="text-2xl font-bold font-mono text-secondary mb-4">
        Staff Reports
      </h1>
      {reports.map((report) => (
        <div key={report.id} className="mb-8">
          <h2 className="text-xl font-bold mb-4">{report.type}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {report.type === "Attendance" &&
              report.data.map((item, index) => (
                <div
                  key={index}
                  className={`p-4 rounded shadow-md ${getStatusColor(
                    item.status
                  )}`}
                >
                  <h3 className="text-lg font-bold">{item.staffName}</h3>
                  <p className="mt-2">Date: {item.date}</p>
                  <p>Status: {item.status}</p>
                </div>
              ))}
            {report.type === "Performance" &&
              report.data.map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-blue-100 text-blue-800 rounded shadow-md"
                >
                  <h3 className="text-lg font-bold">{item.staffName}</h3>
                  <p className="mt-2">Rating: {item.rating}</p>
                </div>
              ))}
            {report.type === "Tasks Completed" &&
              report.data.map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-yellow-100 text-yellow-800 rounded shadow-md"
                >
                  <h3 className="text-lg font-bold">{item.staffName}</h3>
                  <p className="mt-2">Task: {item.task}</p>
                  <p>Count: {item.count}</p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StaffReports;
