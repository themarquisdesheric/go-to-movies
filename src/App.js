import React, { Component } from 'react';
import './App.css';

function Movie({ movie }) {
  return <li>{ movie.Title }</li>;
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
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
      .then(movies => this.setState({ movies, loading: false }));
  }

  render() {
    return (
      <div>
        <h1 className="App-header">List of Attempts to Cinematize Dune</h1>

        { this.state.loading ? <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="loading" /> : null }

        <ul>
          { this.state.movies.map((movie, idx) => <Movie key={ idx } movie={ movie } /> )}
        </ul>

      </div>
    );
  }
}

export default App;
