import React, { Component } from "react";
import PropTypes from "prop-types";

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
    const { value, isChecked, changeCheckedState, id } = this.props;
    return (
      <div className="list-item">
        <input
          type="checkbox"
          ref={this.checkbox}
          checked={this.state.isChecked}
          onChange={this.handleChangeCheckedState}
          name={value}
        />
        <li>
          <textarea
            type="text"
            ref={this.textInput}
            defaultValue={value}
            className={this.state.isChecked ? "checked-item" : null}
          />
        </li>
      </div>
    );
  }
}

ListItem.propTypes = {
  value: PropTypes.string,
};

export default ListItem;
