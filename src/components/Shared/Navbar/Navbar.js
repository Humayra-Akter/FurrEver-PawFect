import "./Navbar.css";
import React, { useEffect } from "react";
import hill1 from "../../../images/hill1.png";
import hill2 from "../../../images/hill2.png";
import hill3 from "../../../images/hill3.png";
import hill4 from "../../../images/hill4.png";
import hill5 from "../../../images/hill5.png";
import tree from "../../../images/tree.png";
import leaf from "../../../images/leaf.png";
import plant from "../../../images/plant.png";
import cat from "../../../images/cat.png";

const Navbar = () => {
  useEffect(() => {
    let text = document.getElementById("text");
    let leaf = document.getElementById("leaf");
    let hill1 = document.getElementById("hill1");
    let hill4 = document.getElementById("hill4");
    let hill5 = document.getElementById("hill5");
    let cat = document.getElementById("cat");

    window.addEventListener("scroll", () => {
      let value = window.scrollY;

      if (text) text.style.marginTop = value * 2.5 + "px";
      if (leaf) leaf.style.top = value * -1.5 + "px";
      if (leaf) leaf.style.left = value * 1.5 + "px";
      if (hill5) hill5.style.left = value * 1.5 + "px";
      if (hill4) hill4.style.left = value * -1.5 + "px";
      if (hill1) hill1.style.top = value * 1 + "px";
      if (cat) cat.style.top = value * 3 + "px";
    });
  }, []);

  return (
    <>
      <header>
        <h2 class="logo">Logo</h2>
        <nav class="navigation">
          <a href="#" class="active">
            {" "}
            Home
          </a>
          <a href="#"> About</a>
          <a href="#"> Service</a>
          <a href="#"> Contact</a>
        </nav>
      </header>

      <section className="parallax">
        <img src={hill1} id="hill1" alt="Hill 1" />
        <img src={hill2} id="hill2" alt="Hill 2" />
        <img src={hill3} id="hill3" alt="Hill 3" />
        <img src={hill4} id="hill4" alt="Hill 4" />
        <img src={hill5} id="hill5" alt="Hill 5" />
        <img src={tree} id="tree" alt="Tree" />{" "}
        <img src={leaf} id="leaf" alt="leaf" />
        <h2 id="text">FuurEver-PawFect</h2>
        <img src={plant} id="plant" alt="Plant" />
      </section>

      <section className="sec">
        <h2>Parsiiiiiiiiiii wahahahah</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Necessitatibus laborum minus at porro? Repudiandae culpa alias ullam.
          Necessitatibus, ut placeat illo ex quas quasi doloribus quisquam,
          impedit dolorem quam nostrum. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Delectus, odit veniam error commodi beatae magnam
          sapiente voluptatem obcaecati quos harum dolorum assumenda, sint quam
          accusantium aperiam quia earum, reprehenderit architecto.Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Necessitatibus laborum
          minus at porro? Repudiandae culpa alias ullam. Necessitatibus, ut
          placeat illo ex quas quasi doloribus quisquam, impedit dolorem quam
          nostrum. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Delectus, odit veniam error commodi beatae magnam sapiente voluptatem
          obcaecati quos harum dolorum assumenda, sint quam accusantium aperiam
          quia earum, reprehenderit architecto.
        </p>
        <br />
        <br />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Necessitatibus laborum minus at porro? Repudiandae culpa alias ullam.
          Necessitatibus, ut placeat illo ex quas quasi doloribus quisquam,
          impedit dolorem quam nostrum. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Delectus, odit veniam error commodi beatae magnam
          sapiente voluptatem obcaecati quos harum dolorum assumenda, sint quam
          accusantium aperiam quia earum, reprehenderit architecto.Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Necessitatibus laborum
          minus at porro? Repudiandae culpa alias ullam. Necessitatibus, ut
          placeat illo ex quas quasi doloribus quisquam, impedit dolorem quam
          nostrum. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Delectus, odit veniam error commodi beatae magnam sapiente voluptatem
          obcaecati quos harum dolorum assumenda, sint quam accusantium aperiam
          quia earum, reprehenderit architecto.
        </p>
        <br />
        <br />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Necessitatibus laborum minus at porro? Repudiandae culpa alias ullam.
          Necessitatibus, ut placeat illo ex quas quasi doloribus quisquam,
          impedit dolorem quam nostrum. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Delectus, odit veniam error commodi beatae magnam
          sapiente voluptatem obcaecati quos harum dolorum assumenda, sint quam
          accusantium aperiam quia earum, reprehenderit architecto.Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Necessitatibus laborum
          minus at porro? Repudiandae culpa alias ullam. Necessitatibus, ut
          placeat illo ex quas quasi doloribus quisquam, impedit dolorem quam
          nostrum. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Delectus, odit veniam error commodi beatae magnam sapiente voluptatem
          obcaecati quos harum dolorum assumenda, sint quam accusantium aperiam
          quia earum, reprehenderit architecto.
        </p>
      </section>
    </>
  );
};

export default Navbar;
