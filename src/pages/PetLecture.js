import "../css/PetLecture.css";
import React, { Component } from "react";
import Discord from "../components/Discord";
import PetLectureHistory from "../components/PetLectureHistory";

class PetLecture extends Component {
  render() {
    return (
      <div className="pet-lectures">
        <div className="pl-description">
          <h2>寵物大講堂</h2>
          <p className="pet-lecture-notice">給新手與未來飼主的寵物知識講座！</p>
          <p>自 2022 年二月開始，元宇宙寵物已於 <Discord /> 社群中，舉辦了兩次寵物知識講座。</p>
          <p>講座課程在直播期間為免費參與，供新手與未來飼主們，能有免費的學習管道向專業的行為訓練師、神經與腦科學專家、獸醫師們學習正確觀念與知識。</p>
        </div>
        <div className="pl-items">
          <h4>📌 即將開始的直播課程</h4>
          <PetLectureHistory
            imgSrc={process.env.PUBLIC_URL + "img/petlecture_3.jpg"}
            title="壓力山大！寵物壓力行為與安心減壓講座"
            duration="2022/6/12 ~ 2022/7"
            description="寵物的行為議題，時常與寵物的需求沒有被滿足而在生活中累積了大大小小的壓力而造成，如何辨認寵物的壓力並及早防治，有助於寵物減壓，也避免讓寵物處於長期、慢性的壓力中，可能逐漸導致相關疾病的成因之一。"
            notice="注意！上課時間調整為週日晚上七點整至八點半，從一小時的課程延長至一小時半，讓成員們有機會多與講者討論、詢問問題。"
          />
        </div>
        <div className="pl-items">
          <h4>📌 過往課程回顧（OG Pass 持有者可以進行無限回看）</h4>
          <PetLectureHistory
            imgSrc={process.env.PUBLIC_URL + "img/petlecture_1.jpg"}
            title="我家寵物在想啥？大腦與行為科學理論講座"
            duration="2022/2/20 ~ 2022/3/20"
            description="由留美博士 YTC 替社群成員們準備了五堂內容多元的動物大腦科學課程。從像是哲學問題的自我意識問題到實際上的神經醫學推論寵物患有與人類相仿的精神疾病討論。這一系列的課程是比較少見的寵物相關科普知識，非常值得聽過一輪！"
          />
          <PetLectureHistory
            imgSrc={process.env.PUBLIC_URL + "img/petlecture_2.jpg"}
            title="主子聽我說！貓狗行為訓練講座"
            duration="2022/4/10 ~ 2022/5/8"
            description="第一堂課程邀請台灣最早開始推廣正向行為訓練的團體台灣狗醫師來與成員們講述動物的五大自由與彈性與非彈性需求，課程內容十分豐富，建議可以觀看第一堂有對外公開課程！而後續四堂課則分別邀請 ABRA 認證的貓咪行為導師單熙汝與狗狗正向行為訓練師唐榮基老師，以實務經驗來幫成員們上了各兩堂的狗狗與貓咪日常行為訓練課程，從行為成型到如何著手進行改變都有清楚的脈絡與說明，是新手飼主必聽課程！"
          />
        </div>
      </div>
    );
  }
}

export default PetLecture;
