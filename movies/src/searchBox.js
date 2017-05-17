import React, { Component } from 'react';

class SearchBox extends Component {
    constructor(props) {
        super(props);
    };

  render() {

    return (
      <div className="Search-container">
        <form autoComplete="off" onSubmit={event => {
                event.preventDefault();
                this.props.getMovies(event.target.elements.lname.value);
                }}>
            <input className="Text-Box"  type="text" autoComplete="off" name="lname" placeholder="search for a movie" />
        </form>
    </div> 
    );
  }
}

export default SearchBox;