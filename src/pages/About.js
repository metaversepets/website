import "../css/About.css"
import React, { Component } from "react";
import MvpStory from "../components/MvpStory"

class About extends Component {
  render() {
    return (
      <div className="mvp-about">
        <h2>關於元宇宙寵物｜Metaverse Pets</h2>
        <p className="mvp-points">寵物知識 x 毛孩故事 x 動物似顏繪</p>
        <div className="mvp-stories">
          <MvpStory
            imgSrc={process.env.PUBLIC_URL + "/img/earlysales.jpg"}
            title="失去與勇敢"
            duration="2021/9~2022/3"
            note="將 100 幅以「失去與勇敢」為主題的手繪創作以 NFT 形式發佈至 Polygon 區塊鏈。"
            description="元宇宙寵物的創作者咔啦王因思考到第一隻養的毛小孩年滿七歲、邁入狗狗的老年期，而開始準備面對老犬生活與後事的安排與計畫，過程中，光是想到有一天將失去現在每日相伴的毛孩，就感到十分難過，但只要是毛孩飼主都會懂得，身邊的動物一定曾或多或少地教會飼主的生活處世、思考方法，或者說，讓飼主們因為身邊的這隻動物而對於生命有了更多不一樣的想法。因此，當飼主真正在面臨失去寵物的悲痛時，或許仍需要一段不短的時間自我消化，且可能還會面對身邊親朋好友的不理解，但身邊的毛孩家人曾經教會我們的，是活在當下、不畏懼自然的生命週期，時時刻刻仍願意重新相信身邊的夥伴、付出自己所有的愛，因而在可長可短的時光裡，飼主們會漸漸接受並將悲傷化為更多美好的記憶後，緊緊封存於心，與之共存、勇敢地面對往後的人生。這一百幅創作，都是咔啦王利用工作之餘的時間一點一滴慢慢累積而成，其中也包含了社群朋友在世或已到天上當小天使的毛孩似顏繪。"
            link="https://opensea.io/MetaverseArtisan"
          />
          <MvpStory
            imgSrc={process.env.PUBLIC_URL + "/img/oneoffs.jpg"}
            title="OneOffs 當代藝術展"
            duration="2021/12/24~2021/12/26"
            note="受邀參與 2021 年底聖誕節檔期的 OneOffs 當代藝術展"
            description="OneOffs 在 2021 年底的聖誕節檔期期間，租下了 W Hotel 兩層樓的房間進行當代藝術展的展覽，該場展覽中，開始邀請 NFT 藝術家進行展出，而元宇宙寵物有幸受到浪浪心社的邀請，一起於 OneOffs 展覽期間參與的「失去與勇敢」的作品展出。"
            link="https://youtube.com/shorts/yIhaFhYoJ1Q"
          />
          <MvpStory
            imgSrc={process.env.PUBLIC_URL + "/img/petlectureintro.jpg"}
            title="寵物大講堂"
            duration="2022/2~"
            note="傳遞寵物專業知識的免費線上講座"
            description="咔啦王在即將完成「失去與勇敢」的創作後，便開始規劃寵物知識講座，將創作收入轉化回傳遞專業寵物知識的課程管道，讓更多新手與未來飼主得以學習更多與毛孩有關的專業知識，並期待一起共同學習的夥伴們，能夠再將學習的經驗反饋到社群中，讓這股經驗傳承的效果得以漸漸發酵、讓社群成為成員們將更多的經驗進行傳遞與互相交換意見的知識傳承平台。另外，若成員在直播期間全程參與，或是在講座結束後一個月內完成補課觀看，即可獲得利用區塊鏈技術進行驗證機制的 POAP 發佈的完課證明獎章！"
            link="/#/pet-lecture"
          />
        </div>
      </div>
    );
  }
}

export default About;
