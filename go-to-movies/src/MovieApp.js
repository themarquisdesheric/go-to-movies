import React, { Component } from 'react';
import './App.css';
import  SearchResults from './SearchResults'//because we need to make a tag
import UserSearch from './UserSearch'

class MovieApp extends Component {
    constructor() {
        super();

        this.state = {
            loading: false,
            movies: []
        };
//adding a method to constructor called search that is bound to movie app no matter where it's called, this.search is bound to movie app
//
        this.search = this.search.bind(this); 
    }

    //Q: where does componentDidMount come from? What does it mean?
    //A: Methods prefixed with will are called right before something happens, and methods prefixed with did are called right after something happens.
    //A: s invoked immediately after a component is mounted. Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request. Setting state in this method will trigger a re-rendering.
    //Q: is search a method in react?
    //A:
    //Q: why is this search written before the search function?
    //A:
    // componentDidMount() {
    //     this.search('Mad Max')
    // }
    //Look up set state, why do you set it here?
    //A: Because this is the data you want to render?
    search(title) {
        this.setState({
            loading: true,
            movies: []
        });
        fetch(`http://www.omdbapi.com/?s=${encodeURI(title)}&plot=short&r=json`)
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
        return (
            <div> {/*react can only return one top level html el*/}
            <SearchResults 
                loading={this.state.loading} 
                movies={this.state.movies}
            />
             <UserSearch
                search={this.search}
             /> 
            </div>
        );

    }

}


export default MovieApp;
