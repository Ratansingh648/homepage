import React from "react";
import { Link } from "react-router-dom";
import "./AboutMe.css";
import SideBar from "../../Components/SideBar/SideBar.js";
import coverPic from "../../Asset/ratan-pic-1.png";
import arrow from "../../Asset/arrow-left.svg";
import resume from "../../Asset/resume.svg";

export default function AboutMe() {
  return (
    <div className="AboutMe">
      <SideBar />
      <div className="content-container">
        <div className="section-1">
          <div className="text-data">
            <h1 className="name">Ratan Singh</h1>
            <h1 className="engineering-role">Machine Learning Engineer</h1>
            <p className="job-description">
              I'm a software engineer specialised in frontend and backend
              development for complex scalable web apps. I write about software
              development on my blog. Want to know how I may help your project?
              Check out my project portfolio and online resume.
            </p>
            <div className="button-selector">
              <Link to="/portfolio" className="view-portfolio-button">
                <img src={arrow} alt="" />
                <h1>View Portfolio</h1>
              </Link>
              <Link to="/resume" className="view-resume-button">
                <img src={resume} alt="" />
                <h1>View Resume</h1>
              </Link>
            </div>
          </div>
          <img id="cover-pic" src={coverPic} alt="" />
        </div>
      </div>
    </div>
  );
}
