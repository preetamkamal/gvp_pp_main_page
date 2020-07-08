import React from "react";
import { ReactComponent as CasesNext } from "../../assets/right-optional-1.svg";
import { ReactComponent as CasesPrev } from "../../assets/left-optional-1.svg";

const subtitleOptions = [
  {
    id: 1,
    subtitle: "Announcements",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    img: "announcement-min",
  },
  {
    id: 2,
    subtitle: "Dean Message",
    title: '"Every moment is a fresh beginning."',
    img: "officer-min",
  },
  {
    id: 3,
    subtitle: "Albums",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    img: "lumin-min",
  },
];
const Cases = () => {
  return (
    <section className="cases">
      <div className="container-fluid">
        <div className="cases-navigation">
          <div className="cases-arrow prev disabled">
            <CasesPrev />
          </div>
          <div className="cases-arrow next">
            <CasesNext />
          </div>
        </div>
        <div className="row">
          {subtitleOptions.map((option) => (
            <div className="case" key={option.id}>
              <div className="case-details">
                <span><i>{option.subtitle}</i></span>
                <h2>{option.title}</h2>
              </div>
              <div className="case-image">
                <img
                  src={require(`../../assets/${option.img}.png`)}
                  alt={option.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section >
  );
};

export default Cases;
