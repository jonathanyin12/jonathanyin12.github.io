import React, { Component } from "react";

class Social extends Component {
  render() {
    return (
      <div className="social">
        <a
          href="https://www.linkedin.com/in/jonathan-yin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-linkedin" />
        </a>
        <a
          href="https://github.com/jonathanyin12"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-github" />
        </a>
        <a
          href="mailto:jonathan.yin@yale.edu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-envelope" />
        </a>
      </div>
    );
  }
}

export default Social;
