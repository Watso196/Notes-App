import React, { Component } from "react";

class NewItemForm extends Component {
  state = {
    value: "",
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
      value: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add new list item..."
          id="add-new"
          value={this.state.value}
          onChange={this.handleChangeValue}
        />
      </form>
    );
  }
}

export default NewItemForm;
