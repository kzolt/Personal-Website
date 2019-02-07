import React, { Component } from 'react';
import loading from './loading.gif'

const Octokit = require('@octokit/rest')
const octokit = new Octokit ()
var count = 6;

var items = [];

class Projects extends Component
{

  state = {
    loading: true,
    size: 0
   }

  componentDidMount() {
    octokit.repos.listForUser({
      username: 'kzolt',
      type: 'all',
      sort: 'pushed'
    }).then(({ data, status, headers }) => {
      // handle data
      console.log(status);
      console.log(headers);

      for (var i = 0; i < count; i++)
      {
        items.push(
          <div className="col-sm p-3">
            <div className="card text-white text-center bg-dark">
              <div className="card-body">
                <h5 className="card-title">{data[i].name}</h5>
                <p className="card-text">{data[i].description}</p>
                <a href={data[i].html_url} className="btn btn-outline-light">View Source</a>
              </div>
            </div>
          </div>);
      }

      this.setState({loading: false, size: data.length});
      console.log(data);
    });
  }

  render() {
    return (
      <div>
        {this.state.loading ? (<img class="mx-auto d-block" src={loading} alt="loading..." />) : (
          <div>
            <div class="row">
              {items[0]}
              {items[1]}
              {items[2]}
            </div>
            <div class="row">
              {items[3]}
              {items[4]}
              {items[5]}
            </div>
          </div>
         )}
      </div>
    );
  }
}

export default Projects
