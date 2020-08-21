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
    const { changeCheckedState } = this.props;
    return (
      <div className="list-container">
        <ul>
          {this.props.listItems.map((listItem, index) => (
            <ListItem value={listItem.value} key={listItem.id} />
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
