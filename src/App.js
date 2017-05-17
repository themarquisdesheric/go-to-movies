import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: []
    };
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
          { this.populateMovies() }
          { this.state.movies.map((movie, idx) => <li key={idx}>{ movie.Title }</li> )}
        </ul>

      </div>
    );
  }
}

export default App;
