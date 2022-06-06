import '../css/Discord.css'
import React, { Component } from "react";

class Discord extends Component {
  render() {
    if (this.props.button) {
      return (
        <a href="https://discord.com/invite/c8BgyUNsJz" target="_blank">
          <button className="discord-button" role="button">
            {this.props.title || "Discord"}
          </button>
        </a>
      )
    } else {
      return (
        <span className="discord-link">
          <a href="https://discord.com/invite/c8BgyUNsJz" target="_blank">
            {this.props.title || "Discord"}
          </a>
        </span>
      );
    }
  }
}

export default Discord;
