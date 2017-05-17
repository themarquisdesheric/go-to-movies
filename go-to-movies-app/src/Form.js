import React, { Component } from 'react';
import './App.css';

class Form extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form onSubmit={event => {
          event.preventDefault();
          this.props.search(event.target.elements.search.value);
        }}>
          <label> Search: <input name="search" /></label>
          <button type="submit">Do the thing</button>
        </form>
      </div>
    );
  }
}

export default Form;