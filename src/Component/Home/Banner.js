import React from "react";
import banner from "../../images/banner.png";

const Banner = () => {
  return (
    <div className="mt-20">
      <div className="flex items-center justify-center">
        <img src={banner} alt="" />
        <div className="pl-10">
          <h1 className="uppercase font-mono justify-end text-center text-5xl font-black text-secondary">
            FurrEver-PawFect
          </h1>
          <h1 className="uppercase font-mono justify-end text-center text-2xl font-black text-green-500">
          Where Every Pet's Dream Finds a Home!
          </h1>
        </div>
      </div>
      <div>
        <p className=" font-mono text-center px-20 mt-10 font-black text-white ">
          Welcome to FurrEver-PawFect, the ultimate online destination for pet
          lovers worldwide! Explore, connect, and discover the perfect companion
          for your lifestyle. We believe every pet deserves a loving home and
          every owner deserves the perfect furry friend. Join our community and
          make a difference today! Discover a world of endless possibilities at
          FurrEver-PawFect. From adoption to expert care and everything in
          between, we're here to support you on your pet parenting journey.
          Whether you're looking to adopt, volunteer, or simply connect with
          fellow pet enthusiasts, you've come to the right place. Start your
          journey with us today and experience the joy of pet ownership like
          never before. Together, we can make a difference in the lives of
          animals everywhere.FurrEver-PawFect, where every pet's story is unique
          and every connection is meaningful. Start your adventure with us
          today!Let's embark on this journey together and create unforgettable
          memories along the way.
        </p>
      </div>
    </div>
  );
};
export default Banner;
