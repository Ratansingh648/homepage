import React from "react";
import {Link} from "react-router-dom";
import { Document, Page } from "react-pdf";
import "./Resume.css";
import SideBar from "../../Components/SideBar/SideBar.js";
import coverPic from "../../Asset/ratan-pic-1.png";
import arrow from "../../Asset/arrow-left.svg";
import resume from "../../Asset/resume.svg";


export default function Resume(){
    return(
    <div className="Resume">
        <SideBar />
        <div className="resume-container">
            <div className="section-1">
                <div className="resume-instruction">
                <Link to="/download-resume" className="view-resume-button">
                    <img src={resume} alt="" />
                    <h1>Download PDF</h1>
                </Link>
                </div>
            </div>
        </div>
    </div>
    );
}