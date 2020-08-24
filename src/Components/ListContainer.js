import React, { Component } from "react";
import PropTypes from "prop-types";

import ListItem from "./ListItem";

class ListContainer extends Component {
  constructor() {
    super();
  }

  //iterate over listitems array to create a <ListItem /> for each
  //

  render() {
    const { changeCheckedState, deleteListItem } = this.props;
    return (
      <div className="list-container">
        <ul>
          {this.props.listItems.map((listItem, index) => (
            <ListItem
              value={listItem.value}
              key={listItem.id}
              id={listItem.id}
              deleteListItem={deleteListItem}
            />
          ))}
        </ul>
      </div>
    );
  }
}

ListContainer.propTypes = {
  listItems: PropTypes.arrayOf(PropTypes.object),
};

export default ListContainer;
