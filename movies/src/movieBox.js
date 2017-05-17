import React, { Component } from 'react';
import SearchBox from './searchBox'

class MovieBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
        };

        this.getMovies = this.getMovies.bind(this);
    }

    getMovies(query) {
        fetch(`http://www.omdbapi.com/?s=${encodeURI(query)}&plot=short&r=json`)
        .then(res => res.json())
        .then(data => data.Search)
        .then(movies => {
            this.setState({ movies });
        });
    }

    render() {
        

        return (
        <div>
            <div className="movie-container">
                <h1>Movies Database</h1>
                <ul>
                {this.state.movies.map((movie, i) => <li key={i}>{movie.Title}</li>)}
                </ul>
            </div>
            <SearchBox getMovies={this.getMovies}/>
        </div>    
        );
    }
}

export default MovieBox;