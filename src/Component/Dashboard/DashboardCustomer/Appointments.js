import React from "react";
import bg from "../../../images/card-bg.jpg";

const Appointments = () => {
  return (
    <div className="p-6 shadow-md mt-10 rounded-lg">
      {/* Section for Booking an Appointment */}

      {/* Section for Upcoming Appointments */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Appointments</h2>
        <div className="space-y-4">
          <div className="border rounded-md p-4 shadow-sm">
            <p className="text-gray-700">
              Appointment with Dr. Smith on 2024-06-01 at 10:00 AM for a general
              check-up.
            </p>
            <p className="text-sm text-gray-500">Status: Confirmed</p>
          </div>
          <div className="border rounded-md p-4 shadow-sm">
            <p className="text-gray-700">
              Appointment with Dr. Brown on 2024-06-03 at 02:00 PM for
              vaccination.
            </p>
            <p className="text-sm text-gray-500">Status: Pending</p>
          </div>
        </div>
      </section>

      {/* Section for Past Appointments */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Past Appointments</h2>
        <div className="space-y-4">
          <div className="border rounded-md p-4 shadow-sm">
            <p className="text-gray-700">
              Appointment with Dr. Green on 2024-05-15 at 11:00 AM for grooming.
            </p>
            <p className="text-sm text-gray-500">Status: Completed</p>
          </div>
          <div className="border rounded-md p-4 shadow-sm">
            <p className="text-gray-700">
              Appointment with Dr. White on 2024-05-10 at 09:00 AM for a general
              check-up.
            </p>
            <p className="text-sm text-gray-500">Status: Completed</p>
          </div>
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
          <h2 className="text-xl font-mono font-bold text-secondary mb-4">
            Book an Appointments
          </h2>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="font-semibold mb-2 font-mono block"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full bg-gray-400 border text-black border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="font-semibold mb-2 font-mono bloc"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full border bg-gray-400 text-black border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="date"
                className="font-semibold mb-2 font-mono block"
              >
                Appointment Date
              </label>
              <input
                type="date"
                id="date"
                className="mt-1 block w-full border bg-gray-400 border-gray-300 rounded-md shadow-sm p-2 text-black focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="time"
                className="font-semibold mb-2 font-mono block"
              >
                Appointment Time
              </label>
              <input
                type="time"
                id="time"
                className="mt-1 block w-full border bg-gray-400 border-gray-300 rounded-md shadow-sm p-2 text-black focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="service"
                className="font-semibold mb-2 font-mono block"
              >
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
                className="bg-primary hover:bg-secondary mt-3 hover:text-primary text-secondary font-mono font-bold py-2 px-4 rounded"
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
          <h2 className="text-xl font-mono font-bold text-secondary mb-4">
            Need Help?
          </h2>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="contact-name"
                className="font-semibold mb-2 font-mono block"
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
                className="font-semibold mb-2 font-mono block"
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
                className="font-semibold mb-2 font-mono block"
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
                className="bg-primary hover:bg-secondary mt-3 hover:text-primary text-secondary font-mono font-bold py-2 px-4 rounded"
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
