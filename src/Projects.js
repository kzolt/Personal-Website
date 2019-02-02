import React, { Component } from 'react';
import { Github } from 'react-social-github';

//var ApiGithub = require('api-github'), api = new ApiGithub({});
//var repos = api.users.getRepos('kzolt');

class Projects extends Component {
  render() {
    return (
      <div>
        <h2>Projects</h2>
        <div class="row">
          <div class="col">
            <Github user="kzolt" repo="Mocha"></Github>
          </div>
          <div class="col">
            <Github user="kzolt" repo="RoboticsThings"></Github>
          </div>
          <div class="col">
            <Github user="kzolt" repo="7-Segment-LED-Thing"></Github>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects
