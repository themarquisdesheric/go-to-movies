import React, { Component } from 'react';
import './App.css';

function Movie({ movie }) {
  return <li>{ movie.Title }</li>;
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    this.populateMovies();
  }

  populateMovies() {
    fetch(`http://www.omdbapi.com/?s=${encodeURI('dune')}&plot=short&r=json`)
      .then(res => res.json())
      .then(data => data.Search)
      .then(movies => {
          this.setState({ movies });
      });
  }

  render() {
    return (
      <div>
        <h1 className="App-header">List of Attempts to Cinematize Dune</h1>

        <ul>
          { this.state.movies.map((movie, idx) => <Movie key={ idx } movie={ movie } /> )}
        </ul>

      </div>
    );
  }
}

export default App;
