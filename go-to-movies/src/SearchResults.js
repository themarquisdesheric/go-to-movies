import React, { Component } from 'react';

//making a stateless function
//props represents anything we pass on from parent, in this case it's state
function SearchResults(props) {
    return (
        <div>
            <h2>Search Movie Database</h2>
            {/*Q: I know this is a turnery, but look up what it means*/}
            {props.loading ? <div>Loading...</div> : null}

            <ul>
                {/*Q: what is key?*/}
                {props.movies.map((movie, i) => <li key={i}>
                    <img src={movie.Poster} />
                    {movie.Title}
                </li>)}
            </ul>
        </div>
    )
}


export default SearchResults;