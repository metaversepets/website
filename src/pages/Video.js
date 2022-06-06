import "../css/Video.css";
import React, { Component } from "react";
import VideoPlayer from "../components/VideoPlayer"

class Video extends Component {
  render() {
    return (
      <div className="videos">
        <VideoPlayer
          videoId="series2lesson1"
          videoName="第一堂：新手飼主須知，寵物訓練的目的與台灣狗醫生介紹"
          seriesName="主子聽我說！貓狗行為訓練講座"
          date="2022/4/10"
          imgSrc={process.env.PUBLIC_URL + "/img/videos/series_2_lesson_1.jpg"}
          videoLink="https://www.youtube-nocookie.com/embed/26DO2qIZ4AI"
          teacher="台灣狗醫生協會"
          teacherInfos={["2001 年正式成立", "台灣早期推廣正向行為訓練的團體"]}
          needOgPass={false}
        />
        <VideoPlayer
          videoId="series2lesson2"
          videoName="第二堂：狗狗的基本需求與日常訓練"
          seriesName="主子聽我說！貓狗行為訓練講座"
          date="2022/4/17"
          imgSrc={process.env.PUBLIC_URL + "/img/videos/series_2_lesson_2.jpg"}
          teacher="唐榮基 Howard"
          teacherInfos={["第十屆 ABRA 認證訓練師 CDT-LE", "台灣歷史博物館、台北市樂齡中心、富邦人壽客座講師", "這隻狗寵物行為訓練所所長"]}
          needOgPass={true}
        />
        <VideoPlayer
          videoId="series2lesson3"
          videoName="第三堂：狗狗常見行為問題與訓練方法"
          seriesName="主子聽我說！貓狗行為訓練講座"
          date="2022/4/24"
          imgSrc={process.env.PUBLIC_URL + "/img/videos/series_2_lesson_3.jpg"}
          teacher="唐榮基 Howard"
          teacherInfos={["第十屆 ABRA 認證訓練師 CDT-LE", "台灣歷史博物館、台北市樂齡中心、富邦人壽客座講師", "這隻狗寵物行為訓練所所長"]}
          needOgPass={true}
        />
        <VideoPlayer
          videoId="series2lesson4"
          videoName="第四堂：貓咬你，是你做得太多了！"
          seriesName="主子聽我說！貓狗行為訓練講座"
          date="2022/5/1"
          imgSrc={process.env.PUBLIC_URL + "/img/videos/series_2_lesson_4.jpg"}
          teacher="單熙汝"
          teacherInfos={["ABRA 國際寵物訓練師資格", "著有《全圖解貓咪行為學》、《全圖解貓咪行為大揭密》", "熙貓樂園創辦人", "斜槓人寵物用品設計師"]}
          needOgPass={true}
        />
        <VideoPlayer
          videoId="series2lesson5"
          videoName="第五堂：貓咬你，是你摸得太多了！"
          seriesName="主子聽我說！貓狗行為訓練講座"
          date="2022/5/8"
          imgSrc={process.env.PUBLIC_URL + "/img/videos/series_2_lesson_5.jpg"}
          teacher="單熙汝"
          teacherInfos={["ABRA 國際寵物訓練師資格", "著有《全圖解貓咪行為學》、《全圖解貓咪行為大揭密》", "熙貓樂園創辦人", "斜槓人寵物用品設計師"]}
          needOgPass={true}
        />
        <VideoPlayer
          videoId="series1lesson1"
          videoName="第一堂：講座簡介與主題概述"
          seriesName="我家毛孩在想啥？大腦與行為科學理論探索講座"
          date="2022/2/20"
          imgSrc={process.env.PUBLIC_URL + "/img/videos/series_1_lesson_1.jpg"}
          videoLink="https://www.youtube-nocookie.com/embed/qZ1ySxqY-Xc"
          teacher="YTC"
          teacherInfos={["美國德州大學西南醫學中心神經科學博士"]}
          needOgPass={false}
        />
        <VideoPlayer
          videoId="series1lesson2"
          videoName="第二堂：自我意識——你家寵物認得自己嗎？"
          seriesName="我家毛孩在想啥？大腦與行為科學理論探索講座"
          date="2022/2/27"
          imgSrc={process.env.PUBLIC_URL + "/img/videos/series_1_lesson_2.jpg"}
          teacher="YTC"
          teacherInfos={["美國德州大學西南醫學中心神經科學博士"]}
          needOgPass={true}
        />
        <VideoPlayer
          videoId="series1lesson3"
          videoName="第三堂：行為理論——如何訓練你的寵物？"
          seriesName="我家毛孩在想啥？大腦與行為科學理論探索講座"
          date="2022/3/6"
          imgSrc={process.env.PUBLIC_URL + "/img/videos/series_1_lesson_3.jpg"}
          teacher="YTC"
          teacherInfos={["美國德州大學西南醫學中心神經科學博士"]}
          needOgPass={true}
        />
        <VideoPlayer
          videoId="series1lesson4"
          videoName="第四堂：科學測量——寵物的情緒與認知"
          seriesName="我家毛孩在想啥？大腦與行為科學理論探索講座"
          date="2022/3/13"
          imgSrc={process.env.PUBLIC_URL + "/img/videos/series_1_lesson_4.jpg"}
          teacher="YTC"
          teacherInfos={["美國德州大學西南醫學中心神經科學博士"]}
          needOgPass={true}
        />
        <VideoPlayer
          videoId="series1lesson5"
          videoName="第五堂：精神醫學——寵物也會憂鬱症嗎？"
          seriesName="我家毛孩在想啥？大腦與行為科學理論探索講座"
          date="2022/3/13"
          imgSrc={process.env.PUBLIC_URL + "/img/videos/series_1_lesson_5.jpg"}
          teacher="YTC"
          teacherInfos={["美國德州大學西南醫學中心神經科學博士"]}
          needOgPass={true}
        />
      </div>
    );
  }
}

export default Video;
