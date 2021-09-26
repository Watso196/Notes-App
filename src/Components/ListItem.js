import React, { Component } from "react";
import PropTypes from "prop-types";

import { ReactComponent as DeleteIcon } from "../delete.svg";

class ListItem extends Component {
  constructor() {
    super();

    this.state = {
      isChecked: false,
    };

    this.textInput = React.createRef();
    this.checkbox = React.createRef();
  }

  handleChangeCheckedState = () => {
    this.setState((prevState) => ({ isChecked: !prevState.isChecked }));
  };

  render() {
    const { value, id, deleteListItem, deleteButtonRef } = this.props;
    return (
      <div className="list-item">
        <li>
          <input
            type="checkbox"
            ref={this.checkbox}
            checked={this.state.isChecked}
            onChange={this.handleChangeCheckedState}
            name={value}
            aria-label={"List item " + (id - 1) + " " + value + " complete"}
          />
          <textarea
            type="text"
            ref={this.textInput}
            defaultValue={value}
            className={this.state.isChecked ? "checked-item" : null}
          />
          <button
            aria-label={"Delete " + value}
            id={id}
            onClick={() => {
              deleteListItem(id, value);
            }}
          >
            <DeleteIcon />
          </button>
        </li>
      </div>
    );
  }
}

ListItem.propTypes = {
  value: PropTypes.string,
};

export default ListItem;
