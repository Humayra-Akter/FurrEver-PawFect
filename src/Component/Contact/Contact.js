import React from "react";

const Contact = () => {
  return (
    <div className="bg-black p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
        {/* Contact Form */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Contact Form</h2>
          {/* Your contact form component goes here */}
        </div>
        {/* Contact Information */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <ul className="list-disc ml-8">
            <li>Email: example@example.com</li>
            <li>Phone: +1234567890</li>
            <li>Address: 123 Main St, City, Country</li>
          </ul>
        </div>
        {/* Social Media */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Social Media</h2>
          <ul className="list-disc ml-8">
            <li>Facebook: [Link]</li>
            <li>Twitter: [Link]</li>
            <li>Instagram: [Link]</li>
          </ul>
        </div>
        {/* Map */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Map</h2>
          {/* Embed map component goes here */}
        </div>
        {/* Hours of Operation */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Hours of Operation</h2>
          <ul className="list-disc ml-8">
            <li>Monday-Friday: 9am-5pm</li>
            <li>Saturday-Sunday: Closed</li>
          </ul>
        </div>
        {/* FAQs */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">FAQs</h2>
          <ul className="list-disc ml-8">
            <li>[FAQ 1]</li>
            <li>[FAQ 2]</li>
            <li>[FAQ 3]</li>
          </ul>
        </div>
        {/* Call to Action */}
        <div className="text-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Call to Action
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
