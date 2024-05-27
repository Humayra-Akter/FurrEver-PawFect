import React from "react";

const CustomerPrice = () => {
  return (
    <div className="mx-auto mt-10 p-6 shadow-md rounded-lg">
      <h1 className="text-xl font-mono font-bold text-secondary mb-4">
        Our Pricing
      </h1>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Adoption Fees</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-gray-600 -gray-600 rounded-md p-4 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Cats</h3>
            <p className="text-gray-700 mb-4">
              Includes vaccinations and microchipping.
            </p>
            <p className="text-lg font-bold">$100</p>
          </div>
          <div className="border border-gray-600  rounded-md p-4 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Dogs</h3>
            <p className="text-gray-700 mb-4">
              Includes vaccinations and microchipping.
            </p>
            <p className="text-lg font-bold">$150</p>
          </div>
          <div className="border border-gray-600  rounded-md p-4 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Other Pets</h3>
            <p className="text-gray-700 mb-4">Includes basic health check.</p>
            <p className="text-lg font-bold">$50</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Daycare and Boarding</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-gray-600  rounded-md p-4 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Daycare</h3>
            <p className="text-gray-700 mb-4">Daily care for your pets.</p>
            <p className="text-lg font-bold">$25 per day</p>
          </div>
          <div className="border border-gray-600  rounded-md p-4 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Overnight Boarding</h3>
            <p className="text-gray-700 mb-4">
              Safe and comfortable overnight stay.
            </p>
            <p className="text-lg font-bold">$40 per night</p>
          </div>
          <div className="border border-gray-600  rounded-md p-4 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Extended Stay</h3>
            <p className="text-gray-700 mb-4">
              Discounted rates for extended stays.
            </p>
            <p className="text-lg font-bold">$200 per week</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Healthcare Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-gray-600  rounded-md p-4 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Routine Check-up</h3>
            <p className="text-gray-700 mb-4">
              Includes general health assessment and vaccinations.
            </p>
            <p className="text-lg font-bold">$50</p>
          </div>
          <div className="border border-gray-600  rounded-md p-4 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Emergency Care</h3>
            <p className="text-gray-700 mb-4">
              24/7 emergency veterinary services.
            </p>
            <p className="text-lg font-bold">$150</p>
          </div>
          <div className="border border-gray-600  rounded-md p-4 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Special Treatments</h3>
            <p className="text-gray-700 mb-4">
              Advanced medical treatments and surgeries.
            </p>
            <p className="text-lg font-bold">Varies</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          Promotions and Discounts
        </h2>
        <div className="space-y-4">
          <div className="border border-gray-600  rounded-md p-4 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">
              New Customer Discount
            </h3>
            <p className="text-gray-700 mb-4">
              First-time customers get 10% off on any service.
            </p>
            <p className="text-lg font-bold">
              Automatically applied at checkout
            </p>
          </div>
          <div className="border border-gray-600  rounded-md p-4 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Referral Program</h3>
            <p className="text-gray-700 mb-4">
              Refer a friend and get a $20 discount on your next service.
            </p>
            <p className="text-lg font-bold">Use code REFER20</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Customer Testimonials</h2>
        <div className="space-y-6">
          <div className="border border-gray-600  rounded-md p-4 shadow-sm">
            <p className="text-gray-700 mb-2">
              "Adopting my cat here was a wonderful experience. The staff were
              helpful and caring."
            </p>
            <p className="text-sm text-gray-500">- Sarah L.</p>
          </div>
          <div className="border border-gray-600  rounded-md p-4 shadow-sm">
            <p className="text-gray-700 mb-2">
              "The daycare services are fantastic. My dog always has a great
              time!"
            </p>
            <p className="text-sm text-gray-500">- David K.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomerPrice;
