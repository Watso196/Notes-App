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
    if (this.state.listItems.length > 1) {
      //get deleted item from unchanged state
      let deletedItem = this.state.listItems.filter(
        (listItem) => listItem.id == id
      );
      //get index in object array for deleted item
      let deletedItemIndex = this.state.listItems.indexOf(deletedItem[0]);
      //get previous object by array index
      if (deletedItemIndex > 0) {
        //Find the previous list item
        let newFocusObject = this.state.listItems[deletedItemIndex + 1];
        //Get previous list item's id value
        let newFocusElementId = Object.values(newFocusObject)[2];
        console.log(newFocusElementId);
        //Focus button with id value
        document.getElementById(newFocusElementId).focus();
      } else {
        //Find the previous list item
        let newFocusObject = this.state.listItems[deletedItemIndex + 1];
        //Get previous list item's id value
        let newFocusElementValue = Object.values(newFocusObject)[0];
        console.log(newFocusElementValue);
        //Focus button with id value
        document
          .querySelector(
            'input[type="checkbox"][name="' + newFocusElementValue + '"]'
          )
          .focus();
      }
      // let lastItemId = Object.values(lastItemObject)[2];
      // console.log(lastItemId);
      // document.getElementById(lastItemId).focus();
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
