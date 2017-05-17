import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            loading: true,
            movies: []
        };
    }

    //Q: where does componentDidMount come from? What does it mean?
    //A:
    //Q: is search a method in react?
    //A:
    //Q: why is this search written before the search function?
    //A:
    componentDidMount() {
        this.search('Mad Max')
    }
    //Look up set state, why do you set it here?
    //A:
    search(title) {
        this.setState({
            loading: true,
            movies: []
        });
        fetch(`http://www.ombapi.com/?s=${encodeURI(title)}$plot=short&r=json`)
            .then(res => res.json()) //Q: why does this need to come back in json?
            .then(data => data.Search)
            .then(movies => {
                this.setState({
                    movies,
                    loading: false
                });
            });
    }

    render() {
        //why doesn't command KF work in react?
        return (
            <div>
                <h2>Mad Max Movies</h2>
                {/*Q: I know this is a turnery, but look up what it means*/}
                {this.state.loading ? <div>Loading...</div> : null}

                <ul>
                    {/*Q: what is key?*/}
                    {this.state.movies.map((movie, i) => <li key={i}>
                        <img src={movie.Poster} />
                        {movie.Title}
                    </li>)}
                </ul>
                <div>
                    <form onSubmit={event => {
                        event.preventDefault();
                        this.search(event.target.element.search.value);
                    }}>
                        <label>Title: <input name="search" /></label> {/*what is the purpose of this input?*/}
                        <button type="submit">Search</button>
                    </form>
                </div>
            </div>
        );

    }

}




export default App;
