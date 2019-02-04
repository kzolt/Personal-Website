import React, { Component } from 'react';

/*********************************
 * TODO: FIX THIS
 * Data being retreived, but not rendering
 *********************************/

const Octokit = require('@octokit/rest')
const octokit = new Octokit ()
var count = 6;

var items = [];

octokit.repos.listForUser({
  username: 'kzolt',
  type: 'all'
}).then(({ data, status, headers }) => {
  // handle data
  console.log(status);
  console.log(headers);

  for (var i = 0; i < count; i++)
    {
      items.push(
        <div className="col-sm">
          <div className="card text-white text-center bg-dark">
            <div className="card-body">
              <h5 className="card-title">{data[i].name}</h5>
              <p className="card-text">{data[i].description}</p>
              <a href={data[i].html_url} className="btn btn-light">View Source</a>
            </div>
          </div>
        </div>);
    }
});

// TODO: Follow Principles of DRY
class Projects extends Component 
{
  render() {
    return (
      <div>
        <div className="row">
          {items[0]}
          {items[1]}
          {items[2]}
        </div>
        <div className="row">
          {items[3]}
          {items[4]}
          {items[5]}
        </div>
      </div>
    );
  }
}

export default Projects
