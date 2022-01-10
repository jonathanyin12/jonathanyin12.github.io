import React, { Component } from "react";
import Social from "./Social";

class About extends Component {
  render() {
    return (
      <div className="about-me">
        <img src="headshot.jpg" alt="me" className="headshot" />
        <h1 className="author"> Jonathan Yin </h1>
        <div className="desc">
          I'm an undergrad at Yale studying Computer Science and Statistics. My
          interests broadly lie at the intersection of machine learning, data
          science, and software development.
        </div>
        <div style={{ marginTop: "15px" }}>
          <a
            id="cv"
            className="btn"
            href="Jonathan_Yin_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Résumé
          </a>
        </div>
        <Social />
      </div>
    );
  }
}

export default About;
