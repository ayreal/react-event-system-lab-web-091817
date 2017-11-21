import React from "react";

class Keypad extends React.Component {
  handleInput = e => {
    console.log("Entering password...");
  };

  render() {
    return <input type="password" onKeyUp={this.handleInput} />;
  }
}

export default Keypad;
