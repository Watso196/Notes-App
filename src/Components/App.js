import React, { Component } from "react";
import PropTypes from "prop-types";
import "../App.css";

import Header from "./Header";
import ListContainer from "./ListContainer";
import NewItemForm from "./NewItemForm";

class App extends Component {
  state = {
    listItems: [],
  };

  prevListItemId = 0;

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

  handleDeleteListItem = (id) => {
    this.setState((prevState) => {
      return {
        listItems: prevState.listItems.filter((listItem) => listItem.id !== id),
      };
    });
  };

  render() {
    return (
      <div className="app-container">
        <Header />
        <ListContainer
          listItems={this.state.listItems}
          deleteListItem={this.handleDeleteListItem}
        />
        <NewItemForm addListItem={this.handleAddListItem} />
      </div>
    );
  }
}

export default App;
