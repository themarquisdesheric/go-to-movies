import React, { Component } from 'react';


class MovieApp extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movies: []
    };
  }

  componentDidMount() {
    this.search('Moulin Rouge');
  }

  search(title) {
    fetch(`http://www.omdbapi.com/?s=${encodeURI(title)}&plot=short&r=json`)
      .then(res => res.json())
      .then(data => data.Search)
      .then(movies => {
        console.log(movies);
        this.setState({
          movies: movies,
          loading: false
        });
      });
  }


  render() {
    return (
      <div>
        <h2>Mofo's Movies</h2>
        <div>
          <form onSubmit={event => {
            event.preventDefault();
            this.search(event.target.elements.search.value);
          }}>
            <label>Search: <input name="search" /></label>
            <button type="submit">Search</button>
          </form>
        </div>
        {this.state.loading ? <div>Loading...</div> : null}
        <ul>
          {this.state.movies.map((movie, i) => <li key={i}>
            <img src={movie.Poster} /> <br/>
            {movie.Year} <br/>
            {movie.Title}
          </li>)}
        </ul>
      </div>
    );
  }
}
export default MovieApp;
