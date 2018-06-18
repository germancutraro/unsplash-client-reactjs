import React from "react";
import "./Banner.css";

const Banner = props => (
  <div className="Banner-Wrapper">
    <div className="Banner">
      <div className="Banner-Content">
        <h1 className="Banner-Title">Unsplash</h1>
        <p className="Banner-Text-1">Beautiful, free photos.</p>
        <p className="Banner-Text-2">
          Gifted by the world’s most generous community of photographers.{" "}
          <span role="img" aria-label="emoji">
            🎁
          </span>
        </p>
        {props.children}
      </div>
    </div>
  </div>
);

export default Banner;
