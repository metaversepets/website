import "../css/Login.css"
import React from "react";
import connectWallet from "../utils/connectWallet"

class Login extends React.Component {
  logout() {
    localStorage.removeItem("walletAddress");
    localStorage.removeItem("userId");
  }

  login() {
    connectWallet();
  }

  render() {
    if (localStorage.getItem("walletAddress") != null) {
        return (
          <div className="walletDisonnect">
            <div className="walletDescription">
              您確定要登出嗎？
            </div>
            <button className="logout" role="button" onClick={() => this.logout() }>確定</button>
          </div>
        )
    } else {
      return (
        <div className="walletConnect">
          <div className="walletDescription">
            請連結您的以太坊錢包進行登入
          </div>
          <button className="login" role="button" onClick={() => this.login() }>登入</button>
          <div className="list-group">
            <button type="button" className="login" role="button" onClick={() => this.login()}>
              <span className="walletLogo">
                <img src={process.env.PUBLIC_URL + "/img/metamask.webp"} height="30px" />
              </span>
              <span className="walletName">MetaMask</span>
            </button>
          </div>
        </div>
      );
    }
  }
}

export default Login;
