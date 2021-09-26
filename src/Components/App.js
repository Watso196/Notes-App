import React, { Component } from "react";
import PropTypes from "prop-types";
import "../App.css";

import Header from "./Header";
import ListContainer from "./ListContainer";
import NewItemForm from "./NewItemForm";

class App extends Component {
  state = {
    listItems: [],
    deletedStatusMessage: "",
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

  handleDeleteListItem = (id, value) => {
    if (id - 2 >= 2) {
      document.getElementById(id - 2).focus();
    } else {
      document.getElementById("addNew").focus();
    }

    this.setState((prevState) => {
      return {
        listItems: prevState.listItems.filter((listItem) => listItem.id !== id),
        deletedStatusMessage: value + " was removed from your list",
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
          ref={this.deleteButtonRef}
        />
        <div id="live-region" aria-live="polite" aria-relevant="additions">
          {this.state.deletedStatusMessage}
        </div>
        <NewItemForm addListItem={this.handleAddListItem} />
      </div>
    );
  }
}

export default App;
