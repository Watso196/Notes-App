import React, { Component } from "react";

class NewItemForm extends Component {
  state = {
    value: "",
    liveValue: "",
  };

  handleChangeValue = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  handleSubmit = (event) => {
    this.props.addListItem(this.state.value);
    event.preventDefault();
    this.setState({
      liveValue: this.state.value + " has been added to your list",
      value: "",
    });
  };

  render() {
    return (
      <form id="add-new" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add new list item..."
          value={this.state.value}
          onChange={this.handleChangeValue}
          aria-label="Add new list item"
          id="addNew"
        />
        <button type="submit">Add Item</button>
        <div id="live-region" aria-live="polite" aria-relevant="additions">
          {this.state.liveValue}
        </div>
      </form>
    );
  }
}

export default NewItemForm;
