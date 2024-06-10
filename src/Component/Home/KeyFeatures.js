import React, { useEffect } from "react";
import adoption from "../../images/adoption.png";
import petCare from "../../images/pet-care.png";
import vet from "../../images/vet-clinic.png";
import forum from "../../images/forum.png";
import events from "../../images/events.png";
import Aos from "aos";
import "aos/dist/aos.css";

const features = [
  {
    img: adoption,
    alt: "Adoption",
    title: "Adoption Center",
    description:
      "Find your new furry friend among our selection of adoptable pets.",
  },
  {
    img: vet,
    alt: "Vet",
    title: "Vet Clinic Information",
    description:
      "Access expert veterinary care tips and information to keep your pet healthy and happy.",
  },
  {
    img: petCare,
    alt: "Pet care",
    title: "Pet Care Resources",
    description:
      "Explore a wealth of resources and guides on pet care, grooming, training, and more.",
  },
  {
    img: forum,
    alt: "Forum",
    title: "Community Forums",
    description:
      "Join our community forums to connect with fellow pet enthusiasts, share stories, and seek advice.",
  },
  {
    img: events,
    alt: "Events",
    title: "Events & Activities",
    description:
      "Stay updated on upcoming events, pet-friendly activities, and fundraisers in your area.",
  },
];

const KeyFeatures = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="mt-24"
      style={{
        fontFamily: "'Concert One', cursive",
      }}
    >
      <h2 className="uppercase justify-end text-center text-3xl font-black text-primary dark:text-secondary">
        Key Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 mt-16 mx-20 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            className="relative card w-full bg-base-100 shadow-xl p-4 items-center transform transition duration-500"
          >
            <div className="absolute -top-10 w-20 h-20 flex justify-center items-center">
              <img
                src={feature.img}
                alt={feature.alt}
                className="w-20 h-20 rounded-full border-4 border-primary bg-white"
              />
            </div>
            <div className="card-body flex flex-col justify-between items-center -mt-10">
              <h2 className="font-black uppercase text-primary text-center mt-10">
                {feature.title}
              </h2>
              <p className="text-center font-bold text-sm">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyFeatures;
