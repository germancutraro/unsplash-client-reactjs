import React, { Component } from "react";
import "./SearchBox.css";

class SearchBox extends Component {

  state = {
    value: ''
  };

  onChangeHandler = e => this.setState({ value: e.target.value })
  onKeyUp = e =>  (e.key === 'Enter') ? this.props.searchHandler(this.state.value) : false;

  render() {
    return (
      <div className="SearchBox-Wrapper">

          <button className="SearchBox-Button fa fa-search" onClick={ () => this.props.searchHandler(this.state.value) }></button>
          <input
            type="text"
            placeholder="Search free high-resolution photos"
            required
            className="SearchBox-Input"
            onChange={ this.onChangeHandler }
            onKeyUp={ this.onKeyUp }
          />
  
      </div>
    );
  }
}

export default SearchBox;
