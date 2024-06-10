import React from "react";
import bg from "../../../images/card-bg.jpg";

const Appointments = () => {
  const upcomingAppointments = [
    {
      doctor: "Dr. Smith",
      date: "2024-06-01",
      time: "10:00 AM",
      service: "general check-up",
      status: "confirmed",
    },
    {
      doctor: "Dr. Brown",
      date: "2024-06-03",
      time: "02:00 PM",
      service: "vaccination",
      status: "pending",
    },
  ];

  const pastAppointments = [
    {
      doctor: "Dr. Green",
      date: "2024-05-15",
      time: "11:00 AM",
      service: "grooming",
      status: "completed",
    },
    {
      doctor: "Dr. White",
      date: "2024-05-10",
      time: "09:00 AM",
      service: "general check-up",
      status: "completed",
    },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case "pending":
        return "text-red-500";
      case "confirmed":
        return "text-yellow-500";
      case "completed":
        return "text-green-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div
      className="p-6 shadow-md mt-10 rounded-lg"
      style={{
        fontFamily: "'Concert One', cursive",
      }}
    >
      {/* Section for Upcoming Appointments */}
      <section className="mb-10">
        <h1 className="text-xl    font-bold text-secondary mb-4">
          Upcoming Appointments
        </h1>
        <div className="space-y-4">
          {upcomingAppointments.map((appointment, index) => (
            <div key={index} className="border rounded-md p-4 shadow-sm">
              <p className="text-gray-100">
                Appointment with {appointment.doctor} on {appointment.date} at{" "}
                {appointment.time} for {appointment.service}.
              </p>
              <p className={`text-sm ${getStatusClass(appointment.status)}`}>
                Status:{" "}
                {appointment.status.charAt(0).toUpperCase() +
                  appointment.status.slice(1)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section for Past Appointments */}
      <section className="mb-10">
        <h1 className="text-xl    font-bold text-secondary mb-4">
          Past Appointments
        </h1>
        <div className="space-y-4">
          {pastAppointments.map((appointment, index) => (
            <div key={index} className="border rounded-md p-4 shadow-sm">
              <p className="text-gray-100">
                Appointment with {appointment.doctor} on {appointment.date} at{" "}
                {appointment.time} for {appointment.service}.
              </p>
              <p className={`text-sm ${getStatusClass(appointment.status)}`}>
                Status:{" "}
                {appointment.status.charAt(0).toUpperCase() +
                  appointment.status.slice(1)}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-2 mt-16 gap-7">
        <div
          style={{
            background: `url(${bg})`,
            backgroundSize: "cover",
          }}
          className="border-2 border-gray-700 bg-white max-w-xl rounded p-4 shadow-md"
        >
          <h2 className="text-xl    font-bold text-secondary mb-4">
            Book an Appointment
          </h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="font-semibold mb-2    block">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full bg-gray-400 border text-black border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="font-semibold mb-2    block">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full border bg-gray-400 text-black border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="date" className="font-semibold mb-2    block">
                Appointment Date
              </label>
              <input
                type="date"
                id="date"
                className="mt-1 block w-full border bg-gray-400 border-gray-300 rounded-md shadow-sm p-2 text-black focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="time" className="font-semibold mb-2    block">
                Appointment Time
              </label>
              <input
                type="time"
                id="time"
                className="mt-1 block w-full border bg-gray-400 border-gray-300 rounded-md shadow-sm p-2 text-black focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="service" className="font-semibold mb-2    block">
                Service
              </label>
              <select
                id="service"
                className="mt-1 block w-full border bg-gray-400 border-gray-300 rounded-md shadow-sm p-2 text-black focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option>General Check-up</option>
                <option>Vaccination</option>
                <option>Grooming</option>
                <option>Daycare</option>
                <option>Other</option>
              </select>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-primary hover:bg-secondary mt-3 hover:text-primary text-secondary    font-bold py-2 px-4 rounded"
              >
                Book Appointment
              </button>
            </div>
          </form>
        </div>

        {/* Section for Contacting Support */}
        <div
          style={{
            background: `url(${bg})`,
            backgroundSize: "cover",
          }}
          className="border-2 border-gray-700 bg-white max-w-xl rounded p-4 shadow-md"
        >
          <h2 className="text-xl    font-bold text-secondary mb-4">
            Need Help?
          </h2>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="contact-name"
                className="font-semibold mb-2    block"
              >
                Name
              </label>
              <input
                type="text"
                id="contact-name"
                className="mt-1 block w-full border  bg-gray-400 border-gray-300 rounded-md shadow-sm p-2 text-black focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="font-semibold mb-2    block"
              >
                Email
              </label>
              <input
                type="email"
                id="contact-email"
                className="mt-1 block w-full border bg-gray-400 border-gray-300 rounded-md shadow-sm p-2 text-black focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="contact-message"
                className="font-semibold mb-2    block"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                rows="4"
                className="mt-1 block w-full border bg-gray-400 border-gray-300 rounded-md shadow-sm p-2 text-black focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-primary hover:bg-secondary mt-3 hover:text-primary text-secondary    font-bold py-2 px-4 rounded"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
