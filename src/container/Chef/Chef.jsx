import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Cooking is the ultimate giving.</p>
        </div>
        <p className="p__opensans">
          {" "}
          The key to running a successful kitchen is what I call the ‘3 F’s.’ Be
          Firm, Be Fair, and Be Friendly with your staff, your guests, and
          yourself.{" "}
        </p>
      </div>

      <div className="app__chef-sign">
        <p>JK</p>
        <p className="p__opensans">Chef & Founder</p>
      </div>
    </div>
  </div>
);

export default Chef;
