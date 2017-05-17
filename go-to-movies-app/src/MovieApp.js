import React, { Component } from 'react';
import logo from '../public/et-image.jpg';
import loading from '../public/loading.gif';
import './App.css';
import Form from './Form';

class MovieApp extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movies: [],
    };

    this.search = this.search.bind(this);
  }

  componentDidMount() {
    this.search('shaolin')
  }

  search(query) {
    this.setState({
      loading: true,
      movies: []
    });
    fetch(`http://www.omdbapi.com/?s=${encodeURI(query)}&plot=short&r=json`)
      .then(res => res.json())
      .then(data => data.Search)
      .then(movies => {
        setTimeout(() => {
          this.setState({
            movies,
            loading: false
          });
        }, 2000);
      });
  }

  render() {
    const { movies } = this.state;
    return (

      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to your friendly movie searching app</h2>
        </div>
        {this.state.loading ? <div><img src={loading} style={{ width: 350, height: 350 }} alt={logo}></img></div> : null}
        <div>
          <ul>
            {movies.map((movie, i) => <li key={i}>
              {movie.Title}, {movie.Year}</li>)}
          </ul>
        </div>
        <Form search={this.search}/>
      </div>
    );
  }
}

export default MovieApp;