import React from "react";
import image from "../assets/github-logo.png";
import "./box.css";

const Box = () => {
  return (
    <div className="mainBox">
    <img src={image} alt="" />
    <div>
      <div className="topSide">
        <div className="leftTexts"><h2 className="text">The Octocat</h2><p className="text">This profile has no bio</p></div>
        <p className="text">Joined 25 jan 2011</p>
      </div>
      <div className="social">
        <div><p>Repos</p><h2>8</h2></div><div><p>Followers</p><h2>9045</h2></div><div><p>Following</p><h2>9</h2></div>
      </div>
      <div className="links">
        <div><p className="text">San Francisco</p><p className="text">https://github.blog</p></div><div><p className="text">Not Available</p><p className="text">@github</p></div>
      </div>
    </div>
  </div>  
);
};

export default Box;
