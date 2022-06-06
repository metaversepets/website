import "./css/Footer.css"
import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <section className="links-section">
        <div className="social-links">
          <h4>社群追蹤｜Follow Us</h4>
          <a href="https://discord.com/invite/c8BgyUNsJz" target="_blank">
            <img src={process.env.PUBLIC_URL + "img/social/discord.png"} />
          </a>
          <a href="https://www.youtube.com/channel/UCGJu_4qHnt52ZwO5HQPPi9Q" target="_blank">
            <img src={process.env.PUBLIC_URL + "img/social/youtube.png"} />
          </a>
          <a href="https://www.instagram.com/metaversepets.game.nft/" target="_blank">
            <img src={process.env.PUBLIC_URL + "img/social/instagram.png"} />
          </a>
          <a href="https://twitter.com/MetaversePets" target="_blank">
            <img src={process.env.PUBLIC_URL + "img/social/twitter.png"} />
          </a>
        </div>
        <div className="warning">
          <h4>敬告｜Warning</h4>
          <p>因區塊鏈不可篡改之特性，鏈上交易一但完成則無法進行退款或取消，請務必再三確認執行之動作是否如預期、所在之網址是否正確。</p>
        </div>
        <div className="empty-area"></div>
      </section>
    );
  }
}

export default Footer;
