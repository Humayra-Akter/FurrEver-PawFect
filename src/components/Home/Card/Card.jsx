import React from "react";
import cat from "../../../images/cat.png";
import dog from "../../../images/dog.jpg";
import rabbit from "../../../images/dog-2.png";
import "./Card.css";

const Card = () => {
  const animals = [
    {
      id: 1,
      name: "Catto",
      img: { cat },
      description:
        "minus at porro?ssitatibus laborum minus at porro? culpaalias ullam. Necessitatibus, ut placeat i dolorum  assumenda, sint quam Repudi culpa al minus at porro?ssitatibus laborum minu minus at porro?ssitatibus laborum minus at porro? culpas at porro? culpaias",
    },
    {
      id: 2,
      name: "Doggo",
      img: { dog },
      description:
        "minus at porro?ssitatibus laborum minus at porro? culpaalias ullam. Necessitatibus, ut placeat i dolorum  assumenda, sint quam Repudi culpa al minus at porro?ssitatibus laborum minu minus at porro?ssitatibus laborum minus at porro? culpas at porro? culpaias",
    },
    {
      id: 3,
      name: "Rabbitto",
      img: { rabbit },
      description:
        "minus at porro?ssitatibus laborum minus at porro? culpaalias ullam. Necessitatibus, ut placeat i dolorum  assumenda, sint quam Repudi culpa al minus at porro?ssitatibus laborum minu minus at porro?ssitatibus laborum minus at porro? culpas at porro? culpaias",
    },
  ];
  return (
    <>
      <div class="card">
        <div class="card-content">
          <div class="back">
            <div class="back-content">
              <img src={cat} />
              <strong>Hover Me</strong>
            </div>
          </div>
          <div class="front">
            <div class="img">
              <div class="circle"></div>
              <div class="circle" id="right"></div>
              <div class="circle" id="bottom"></div>
            </div>

            <div class="front-content">
              <small class="badge">Catto</small>
              <div class="description">
                <div class="title">
                  <p class="title">
                    <strong>
                      minus at porro?ssitatibus laborum minus at porro? culpa
                      alias ullam. Necessitatibus, ut placeat i dolorum
                      assumenda, sint quam Repudi culpa alias
                    </strong>
                    <br />
                    <strong>
                      minus at porro?ssitatibus laborum minus at porro? culpa
                      alias ullam. , ut placeat i dolorum assumenda, sint quam
                      Repudi culpa alias
                    </strong>
                    <br />
                    <strong>
                      minus at porro? laborum minus at porro? Repudiandae culpa
                      alias ullam. Necessitatibus, ut placeat i dolorum , sint
                      quam Repudi culpa alias
                    </strong>
                  </p>
                </div>
                <p class="card-footer">30 Mins &nbsp; | &nbsp; 1 Serving</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
