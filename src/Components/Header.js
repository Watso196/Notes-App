import React, { Component } from "react";

class Header extends Component {
  constructor() {
    super();
    this.handleTextChange = this.handleTextChange.bind(this);
    this.input = React.createRef();
  }

  handleTextChange(event) {
    event.target.value = this.input.current.value;
  }

  render() {
    return (
      <header>
        <h1>
          <input
            type="text"
            defaultValue="My List Title"
            onChange={this.handleTextChange}
            ref={this.input}
          />
        </h1>
      </header>
    );
  }
}

export default Header;
