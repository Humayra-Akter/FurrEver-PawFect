import React from "react";
import bg from "../../images/about-bg.jpg";

const About = () => {
  return (
    <div
      className="mt-20"
      style={{
        fontFamily: "'Concert One', cursive",
      }}
    >
      <h1 className="text-3xl font-bold text-center text-primary dark:text-secondary my-8">
        About - "FurrEver PawFect"
      </h1>
      <div className="grid lg:grid-cols-2 gap-8 p-8">
        <div
          style={{
            background: `url(${bg})`,
            backgroundSize: "cover",
          }}
          className="bg-accent rounded-lg p-6 flex flex-col items-center justify-center text-center"
        >
          <h2 className="text-xl text-orange-300 mb-4">
            Our Mission
          </h2>
          <p className="text-sm text-justify text-white">
            At FurrEver-PawFect, our mission is to foster a world where every
            pet receives the love, care, and respect they deserve. We're
            dedicated to connecting pets with loving homes, providing essential
            resources for responsible pet ownership, and building a vibrant
            community of passionate pet enthusiasts.
          </p>
          <h2 className="text-xl text-orange-300 my-4">
            Global & Local Impact
          </h2>
          <p className="text-sm text-gray-200 text-justify">
            At FurrEver-PawFect, our mission is to uphold the highest standards
            of quality and authenticity in every interaction, service, and
            resource we provide. We are dedicated to ensuring the well-being of
            pets and fostering genuine connections between animals and their
            human companions, both locally and globally.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-4">
          <div
            style={{
              background: `url(${bg})`,
              backgroundSize: "cover",
            }}
            className="bg-accent rounded-lg p-6 hover:scale-105 hover:bg-secondary hover:shadow-2xl"
          >
            <h2 className="text-xl text-center text-orange-300 mb-4">
              Quality & Authenticity
            </h2>
            <p className="text-sm text-gray-200 text-justify">
              We strive to empower individuals to make a positive impact on the
              lives of pets, one adoption, one caretaker, and one community at a
              time.Through our commitment to global and local initiatives, we
              aim to create a future where every pet thrives in a nurturing
              environment and every owner experiences the joy of unconditional
              companionship.
            </p>
          </div>
          <div
            style={{
              background: `url(${bg})`,
              backgroundSize: "cover",
            }}
            className="bg-accent rounded-lg p-6 hover:scale-105 hover:bg-secondary hover:shadow-2xl"
          >
            <h2 className="text-xl text-orange-300 text-center mb-4">
              Our Vision
            </h2>
            <p className="text-sm text-gray-200 text-justify">
              Our vision is to create a future where no pet is left behind. We
              envision a world where every pet has a safe and loving home, every
              owner is equipped with the knowledge and resources to provide
              optimal care, and every community works together to ensure the
              well-being of all animals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
