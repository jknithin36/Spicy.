import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="pull up a Chair & Take a taste" />
      <h1 className="app__header-h1">Where You Meet The Best TASTE</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        To us, food is as much about the moment, the occasion, the location and
        the company as it is about the taste.{" "}
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
