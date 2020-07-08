import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="row v-center space-between">
          <div className="logo">
            {/* <a href="/">GVP</a> */}

            <img
              src={require(`../../assets/gvp-logo.png`)}
              alt=""
            />
          </div>
          <div className="nav">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
