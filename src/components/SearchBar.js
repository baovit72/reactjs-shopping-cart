import React, { Component } from "react";
import { connect } from "react-redux";
import { searchTitle } from "./actions/cartActions"; 
class SearchBar extends Component {
  searchChange = (input) => {
    this.props.searchChange(input.target.value);
    console.log(input);
  }
  render() {
    return (
      <div className="input-field col s6">
        <input
          id="input_text"
          type="text"
          data-length="5" 
          onChange={this.searchChange}
        />
        <label htmlFor="input_text">Input text</label>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
    return {
      searchChange: id => {
        dispatch(searchTitle(id));
      }
    };
  };
export default connect(null,mapDispatchToProps)(SearchBar); 