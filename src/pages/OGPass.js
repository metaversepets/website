import '../css/OGPass.css';
import React, { Component } from "react";
import MintButton from '../components/MintButton'
import Snowflakes from '../components/Snowflakes'

class OGPass extends Component {
  render() {
    return (
      <div className="og-pass-mint">
        <Snowflakes />
        <div className="minting">
          <img src={process.env.PUBLIC_URL + "/img/ogpass.png"} className="og-pass" alt="OG Pass" />
          <div className="og-pass-usage">
            <ul>
              <li>支持社群持續提供「寵物大講堂」免費直播課程</li>
              <li>獲得無限回看「寵物大講堂」課程影片權限</li>
              <li>寵物相關書籍抽獎資格</li>
              <li>兌換元宇宙寵物周邊商品</li>
            </ul>
          </div>
          <MintButton />
        </div>
      </div>
    );
  }
}

export default OGPass;
