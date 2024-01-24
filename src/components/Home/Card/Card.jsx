import React from "react";
import cat from "../../../images/cat.png";
import "./Card.css";

const Card = () => {
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
                      minus at porro?ssitatibus laborum minus at porro?
                      Repudiandae culpa alias ullam. Necessitatibus, ut placeat
                      i dolorum assumenda, sint quam Repudi culpa alias
                    </strong>
                    <br />
                    <strong>
                      minus at porro?ssitatibus laborum minus at porro?
                      Repudiandae culpa alias ullam. Necessitatibus, ut placeat
                      i dolorum assumenda, sint quam Repudi culpa alias
                    </strong>
                  </p>
                  <svg
                    fillRule="nonzero"
                    height="15px"
                    width="15px"
                    viewBox="0,0,256,256"
                    xmlnsLink="http://www.w3.org/1999/xlink"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      style={{
                        mixBlendMode: "normal",
                        textAnchor: "none",
                        fontSize: "none",
                        fontWeight: "none",
                        fontFamily: "none",
                        strokeDashoffset: "0",
                        strokeDasharray: "",
                        strokeMiterlimit: "10",
                        strokeLinejoin: "miter",
                        strokeLinecap: "butt",
                        strokeWidth: "1",
                        stroke: "none",
                        fillRule: "nonzero",
                        fill: "#20c997",
                      }}
                    >
                      <g transform="scale(8,8)">
                        <path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path>
                      </g>
                    </g>
                  </svg>
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
