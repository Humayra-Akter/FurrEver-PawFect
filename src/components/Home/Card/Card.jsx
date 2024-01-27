import React from "react";
import cat from "../../../images/cat.png";
import dog from "../../../images/dog-2.png";
import rabbit from "../../../images/rabbit-2.png";
import "./Card.css";

const Card = () => {
  const animals = [
    {
      id: 1,
      name: "Catto",
      img: cat ,
      description:
        "minus at porro?ssitatibus laborum minus at porro? culpaalias ullam. Necessitatibus, ut placeat i dolorum  assumenda, sint quam Repudi culpa al minus at porro?ssitatibus laborum minu minus at porro?ssitatibus laborum minus at porro? culpas at porro? culpaias",
    },
    {
      id: 2,
      name: "Doggo",
      img: dog,
      description:
        "minus at porro?ssitatibus laborum minus at porro? culpaalias ullam. Necessitatibus, ut placeat i dolorum  assumenda, sint quam Repudi culpa al minus at porro?ssitatibus laborum minu minus at porro?ssitatibus laborum minus at porro? culpas at porro? culpaias",
    },
    {
      id: 3,
      name: "Rabbitto",
      img:  rabbit ,
      description:
        "minus at porro?ssitatibus laborum minus at porro? culpaalias ullam. Necessitatibus, ut placeat i dolorum  assumenda, sint quam Repudi culpa al minus at porro?ssitatibus laborum minu minus at porro?ssitatibus laborum minus at porro? culpas at porro? culpaias",
    },
  ];
  return (
    <div className="card-list">
      {animals.map((animal) => (
        <div className="card" key={animal.id}>
          <div className="card-content">
            <div className="back">
              <div className="back-content">
                <img src={animal.img} alt={animal.name} />
                <strong>Hover Me</strong>
              </div>
            </div>
            <div className="front">
              <div className="img">
                <div className="circle"></div>
                <div className="circle" id="right"></div>
                <div className="circle" id="bottom"></div>
              </div>

              <div className="front-content">
                <small className="badge">{animal.name}</small>
                <div className="description">
                  <div className="title">
                    <p className="title">{animal.description}</p>
                  </div>
                  <p className="card-footer">30 Mins &nbsp; | &nbsp; 1 Serving</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  
  );
};

export default Card;
