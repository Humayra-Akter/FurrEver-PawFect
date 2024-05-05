import React from "react";
import adoption from "../../images/adoption.png";
import petCare from "../../images/pet-care.png";
import vet from "../../images/vet-clinic.png";
import forum from "../../images/forum.png";
import events from "../../images/events.png";

const KeyFeatures = () => {
  return (
    <div className="mt-24">
      <h2 className="uppercase font-mono justify-end text-center text-3xl font-black text-secondary">
        Key Features
      </h2>
      <div className="grid grid-cols-5 mt-20">
        <div className="card w-60 bg-base-100 shadow-xl">
          <figure>
            <img
              src={adoption}
              alt="Adoption"
              className="w-32 h-32 rounded-lg"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-bold uppercase font-mono text-accent text-center">
              Adoption Center
            </h2>
            <p className="text-center text-sm">
              Find your new furry friend among our selection of adoptable pets.
            </p>
          </div>
        </div>
        <div className="card w-60 bg-base-100 shadow-xl">
          <figure>
            <img src={vet} alt="Vet" className="w-28 h-28 rounded-lg" />
          </figure>
          <div className="card-body">
            <h2 className="text-bold uppercase font-mono text-accent text-center">
              Vet Clinic Information
            </h2>
            <p className="text-center text-sm">
              Access expert veterinary care tips and information to keep your
              pet healthy and happy.
            </p>
          </div>
        </div>
        <div className="card w-60 bg-base-100 shadow-xl">
          <figure>
            <img
              src={petCare}
              alt="Pet care"
              className="w-28 h-28 rounded-lg"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-bold uppercase font-mono text-accent text-center">
              Pet Care Resources
            </h2>
            <p className="text-center text-sm">
              Explore a wealth of resources and guides on pet care, grooming,
              training, and more.
            </p>
          </div>
        </div>
        <div className="card w-60 bg-base-100 shadow-xl">
          <figure>
            <img src={forum} alt="Forum" className="w-28 h-28 rounded-lg" />
          </figure>
          <div className="card-body">
            <h2 className="text-bold uppercase font-mono text-accent text-center">
              Community Forums
            </h2>
            <p className="text-center text-sm">
              Join our community forums to connect with fellow pet enthusiasts,
              share stories, and seek advice.
            </p>
          </div>
        </div>
        <div className="card w-60 bg-base-100 shadow-xl">
          <figure>
            <img src={events} alt="Events" className="w-28 h-28 rounded-lg" />
          </figure>
          <div className="card-body">
            <h2 className="text-bold uppercase font-mono text-accent text-center">
              Events & Activities
            </h2>
            <p className="text-center text-sm">
              Stay updated on upcoming events, pet-friendly activities, and
              fundraisers in your area.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
