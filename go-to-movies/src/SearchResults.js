import React, { Component } from 'react';
import './App.css';

function SearchResults(props) {
    return (
        <div>
            <h2 className="website_title">Search Movie Database</h2>
            {props.loading ? <div>Loading...</div> : null}

            <ul className="movie-list">
                {props.movies.map((movie, i) => <li className="movie-instance" key={i}>
                    <img src={movie.Poster} />
                    <br/>
                    {movie.Title}
                    <br/>
                    {movie.Year}
                </li>)}
            </ul>
        </div>
    )
}


export default SearchResults;