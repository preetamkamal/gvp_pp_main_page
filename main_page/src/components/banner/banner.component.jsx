import React from "react";
import { ReactComponent as RightArrow } from "../../assets/right-optional-1.svg";
const Banner = () => {
  return (
    <section className="main">
      <div className="container">
        <div className="row">
          <h2>
            <div className="line">
              <span>Gayatri Vidya Parishad</span>
            </div>
            <div className="line sub-line">
              <span>Placements Website</span>
            </div>
          </h2>
          <div className="btn-row">
            <a href="/">
              view the records <RightArrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
