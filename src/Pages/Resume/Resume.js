import React from "react";
import {Link} from "react-router-dom";
import SideBar from "../../Components/SideBar/SideBar.js";
import resume from "../../Asset/resume.svg";
import "./Resume.css";

import cv1 from "../../Asset/Ratan Singh - CV-1.jpg"
import cv2 from "../../Asset/Ratan Singh - CV-1.jpg"

export default function Resume(){
    return(
    <div className="Resume">
        <SideBar />
        <div className="resume-container">
            <div className="download-section">
                <Link to="/download-resume" className="view-resume-button">
                    <img src={resume} alt="" />
                    <h1>Download PDF</h1>
                </Link>
            </div>
            <div className="resume-document">
                <img className="resume-page" src={cv1} alt="CV-1"/>
                <img className="resume-page" src={cv2} alt="CV-2" />
            </div>
        </div>
    </div>
    );
}