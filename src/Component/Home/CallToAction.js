import React from "react";

const CallToAction = () => {
  return (
    <div
      className="mt-24"
      style={{
        fontFamily: "'Concert One', cursive",
      }}
    >
      <h2 className="uppercase justify-end text-center text-3xl font-black text-primary dark:text-secondary">
        Call to Action
      </h2>
      <p className="dark:text-white">
        Ready to find your perfect match? Start browsing our adoption listings
        now!
      </p>
      {/* You can add buttons or links here to direct users to the adoption listings */}
      <button className="dark:text-white border p-2 rounded-lg">
        Browse Adoption Listings
      </button>
    </div>
  );
};

export default CallToAction;
