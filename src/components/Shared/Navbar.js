import React, { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      let value = window.scrollY;

      // Adjust these based on your specific layout and requirements
      document.getElementById("text").style.marginTop = value * 2.5 + "px";
      document.getElementById("hill1").style.top = value * 1 + "px";
      document.getElementById("hill4").style.left = value * -1.5 + "px";
      document.getElementById("hill5").style.left = value * 1.5 + "px";
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <header className="absolute top-0 left-0 w-full px-10 py-30 flex justify-start items-center z-100">
        <h2 className="text-2xl text-green-500 font-bold">Logo</h2>
        <nav className="ml-10">
          <a
            href="#"
            className="text-green-500 text-decoration-none px-15 py-6 rounded-full font-semibold"
          >
            Home
          </a>
          <a
            href="#"
            className="text-green-500 text-decoration-none px-15 py-6 rounded-full font-semibold"
          >
            {" "}
            About
          </a>
          <a
            href="#"
            className="text-green-500 text-decoration-none px-15 py-6 rounded-full font-semibold"
          >
            {" "}
            Service
          </a>
          <a
            href="#"
            className="text-green-500 text-decoration-none px-15 py-6 rounded-full font-semibold"
          >
            {" "}
            Contact
          </a>
        </nav>
      </header>

      <section className="parallax relative flex justify-center items-center h-screen">
        <img
          src="../images/hill1.png"
          id="hill1"
          className="absolute top-0 left-0 w-full pointer-events-none"
        />
        {/* Add similar Tailwind classes for other images */}
        <h2
          id="text"
          className="absolute text-5xl text-white"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)" }}
        >
          FurrEver-PawFect
        </h2>
        {/* Add similar Tailwind classes for other elements */}
      </section>

      <section className="sec relative bg-green-900 p-10">
        <h2 className="text-3xl text-white mb-10">
          Parallax scrolling wahahahah
        </h2>
        <p className="text-white text-base font-light">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Necessitatibus laborum minus at porro? Repudiandae culpa alias ullam.
          Necessitatibus, ut placeat illo ex quas quasi doloribus quisquam,
          impedit dolorem quam nostrum. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Delectus, odit veniam error commodi beatae magnam
          sapiente voluptatem obcaecati quos harum dolorum assumenda, sint quam
          accusantium aperiam quia earum, reprehenderit architecto.
        </p>
      </section>
    </div>
  );
};

export default Navbar;
