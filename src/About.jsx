import React from "react";
import "./About.css";
import aboutus from "./assets/aboutus.svg"; 

function About() {
  return (
    <div className="about-section" id="About">
        <div className="about-text">
            <span className="about-tag">About Us</span>
            <h2>Transforming the Way People Learn</h2>
            <p>
            Our mission is to create innovative and accessible learning solutions that empower people of all ages and backgrounds to achieve their full potential. Whether you're a student looking to improve your grades, a professional seeking to upskill, or an organization looking to enhance employee training, we have the tools and resources you need to succeed.
            </p>
            <p>
            If you're looking for an innovative and dynamic learning experience that will help you achieve your goals and unlock your full potential, we invite you to join us on this exciting journey.
            </p>
        </div>
        <div className="about-image">
            <img src={aboutus} alt="Learning Illustration" />
        </div>
    </div>
  );
}

export default About;
