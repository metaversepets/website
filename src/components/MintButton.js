import '../css/MintButton.css'
import React from "react";
import connectWallet from "../utils/connectWallet"

class MintButton extends React.Component {
  handleClick() {
    connectWallet();
    console.log('this is:', this);
  }

  render() {
    if (this.props.start_minting) {
      return (
        <button className="mint-button-pushable" role="button" onClick={() => this.handleClick()}>
          <span className="mint-button-shadow"></span>
          <span className="mint-button-edge"></span>
          <span className="mint-button-front text">
            鑄造｜Mint
          </span>
        </button>
      );
    } else {
      return (
        <button className="mint-disable" disabled role="button">
            鑄造日期即將公佈
        </button>
      );
    }
  }
}

export default MintButton;
