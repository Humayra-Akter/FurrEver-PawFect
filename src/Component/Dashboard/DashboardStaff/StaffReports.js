import React, { useState, useEffect } from "react";

const StaffReports = () => {
  const [reports, setReports] = useState([]);
  const [loggedInStaff, setLoggedInStaff] = useState("John Doe"); // Example logged-in staff member

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

  const getReportByStaffName = (reportType, staffName) => {
    return (
      reports
        .find((report) => report.type === reportType)
        ?.data.filter((item) => item.staffName === staffName) || []
    );
  };

  return (
    <div className="p-6 mt-10 rounded-lg min-h-screen">
      <h1 className="text-2xl font-bold font-mono text-secondary mb-4">
        Staff Reports
      </h1>

      <div className="flex flex-wrap text-black -mx-2">
        {reports.map((report) => (
          <div key={report.id} className="w-full md:w-1/2 lg:w-1/3 p-2">
            <div className="bg-white shadow-md rounded-lg p-4">
              <h2 className="text-xl font-bold mb-4">{report.type}</h2>

              {/* Individual Report Section */}
              <div className="mb-4 ">
                <h3 className="text-lg  font-semibold mb-2">
                  Your Performance
                </h3>
                <div className="space-y-2">
                  {getReportByStaffName(report.type, loggedInStaff).map(
                    (item, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded ${
                          report.type === "Attendance"
                            ? getStatusColor(item.status)
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {report.type === "Attendance" ? (
                          <>
                            <p>Date: {item.date}</p>
                            <p>Status: {item.status}</p>
                          </>
                        ) : report.type === "Performance" ? (
                          <p>Rating: {item.rating}</p>
                        ) : (
                          <>
                            <p>Task: {item.task}</p>
                            <p>Count: {item.count}</p>
                          </>
                        )}
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* General Report Section */}
              <div>
                <h3 className="text-lg font-semibold mb-2">Other Staff</h3>
                <div className="space-y-2">
                  {report.data
                    .filter((item) => item.staffName !== loggedInStaff)
                    .map((item, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded ${
                          report.type === "Attendance"
                            ? getStatusColor(item.status)
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        <h4 className="font-bold">{item.staffName}</h4>
                        {report.type === "Attendance" ? (
                          <>
                            <p>Date: {item.date}</p>
                            <p>Status: {item.status}</p>
                          </>
                        ) : report.type === "Performance" ? (
                          <p>Rating: {item.rating}</p>
                        ) : (
                          <>
                            <p>Task: {item.task}</p>
                            <p>Count: {item.count}</p>
                          </>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaffReports;
