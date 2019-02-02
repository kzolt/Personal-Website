import React, { Component } from 'react';
import { Github } from 'react-social-github';

var user = 'kzolt';

class Projects extends Component 
{
  render() {
    return (
      <div>
        <h2>Projects</h2>
        <div class="row">
          <div class="col">
            <Github user={user} repo="Mocha"></Github>
          </div>
          <div class="col">
            <Github user={user} repo="RoboticsThings"></Github>
          </div>
          <div class="col">
            <Github user={user} repo="7-Segment-LED-Thing"></Github>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects
