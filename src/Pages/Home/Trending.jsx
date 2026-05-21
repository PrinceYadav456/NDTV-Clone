import React from "react";
import "./HomeSections.css";

const Trending = () => {
  return (
    <div className="trendingSection">
      <div className="sectionLabel">
        TRENDING
      </div>
      <div className="trendingGrid">
        <div className="trendingCard">
          <div>
            <img className="trendingImage" src="https://c.ndtvimg.com/2022-05/ttmr4338_punjab-police-team-stopped-by-haryana-cops_240x180_06_May_22.jpg" alt="" />
          </div>
          <div className="trendingText">
            10-Point Guide To Controversy Over Arrest Of BJP's Tajinder Bagga
          </div>
        </div>

        <div className="trendingCard">
          <div>
            <img className="trendingImage" src="https://c.ndtvimg.com/2022-05/mdh2i1vg_khatija-_120x90_06_May_22.jpg" alt="" />
          </div>
          <div className="trendingText">
            Viral: Inside Pics From AR Rahman's Daughter Khatija's Wedding
          </div>
        </div>

        <div className="trendingCard">
          <div>
            <img className="trendingImage" src="https://c.ndtvimg.com/2022-05/ug925gd8_tajinder-bagga-arrest-ndtv_120x90_06_May_22.jpg" alt="" />
          </div>
          <div className="trendingText">
            Video Shows BJP Leader's Arrest, Father Says "Couldn't Even Wear
            Turban"
          </div>
        </div>

        <div className="trendingCard">
          <div>
            <img className="trendingImage" src="https://c.ndtvimg.com/2021-10/fqr2ofug_ts-tirumurti_120x90_09_October_21.jpg" alt="" />
          </div>
          <div className="trendingText">
            "Don't Patronize Us Ambassador": India's UN Envoy On Tweet Over
            Ukraine
          </div>
        </div>

        <div className="trendingCard">
          <div>
            <img className="trendingImage" src="https://c.ndtvimg.com/2022-05/ecsdaki_amber-heard_240x180_06_May_22.jpg" alt="" />
          </div>
          <div className="trendingText">
            Amber Heard Says Johnny Depp Sexually Assaulted Her With "Bottle"
          </div>
        </div>

        <div className="trendingCard">
          <div>
            <img className="trendingImage" src="https://c.ndtvimg.com/2022-02/670037ko_rahul-gandhi-gujarat-dwarka-ani_120x90_26_February_22.jpg" alt="" />
          </div>
          <div className="trendingText">
            "Science Doesn't Lie, Modi Does": Rahul Gandhi On WHO Covid Deaths
            Report
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
