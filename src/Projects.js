import React, { Component } from 'react';
import { Github } from 'react-social-github';

class Projects extends Component {
  render() {
    return (
      <div>
        <h2>Projects</h2>
        <Github user="kzolt" repo="Mocha"></Github>
        <Github user="kzolt" repo="RoboticsThings"></Github>
        <Github user="kzolt" repo="7-Segment-LED-Thing"></Github>
      </div>
    );
  }
}

export default Projects
