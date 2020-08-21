import React, { Component } from "react";
import PropTypes from "prop-types";
import "../App.css";

import Header from "./Header";
import ListContainer from "./ListContainer";

class App extends Component {
  state = {
    listItems: [
      {
        value: "This is an example list item!",
        id: 0,
      },
    ],
  };

  prevListItemId = 1;

  handleAddListItem = (value) => {
    this.setState((prevState) => {
      return {
        listItems: [
          ...prevState.listItems,
          {
            value,
            isChecked: false,
            id: (this.prevListItemId += 1),
          },
        ],
      };
    });
  };

  render() {
    return (
      <div className="app-container">
        <Header />
        <ListContainer listItems={this.state.listItems} />
        // add text area to create new value for new list item here
        <button onClick={this.handleAddListItem} aria-label="add new list item">
          +
        </button>
      </div>
    );
  }
}

export default App;
