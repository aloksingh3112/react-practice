import React, { Component } from "react";
import withTooltip from "./withTooltip";

class Header extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1>Hello</h1>
        {this.props.tooltip && <h2>Show Tooltip</h2>}
      </React.Fragment>
    );
  }
}

export default withTooltip(Header);
