import React from "react";
import BigStories from "./BigStories";
import TopStories from "./TopStories";
import CenterNews from "./CenterNews";
import OpinionSec from "./OpinionSec";
import Trending from "./Trending";
import Ipl from "./Ipl";
import Koo from "./Koo";
import LatestNews from "../../Components/LatestNews";
import "./Home.css";

const HomeSection = () => (
  <div className="homeContainer">
    <div className="homeMainColumn">
      <div className="homeIntroRow">
        <div className="homeChild1">
          <BigStories />
          <TopStories />
        </div>
        <div className="homeChild2">
          <CenterNews />
        </div>
      </div>
      <div className="homeOpinion">
        <OpinionSec />
      </div>
    </div>
    <div className="homeChild3">
      <LatestNews />
      <Koo />
      <div>
        <img className="homeAdImage" src="https://drop.ndtv.com/images/hpage/300x100.png" alt="" />
      </div>
    </div>
  </div>
);

const Home = () => {
  return (
    <>
      <HomeSection />
      <Ipl />
      <Trending />
      <HomeSection />
      <Ipl />
      <Trending />
      <HomeSection />
      <Ipl />
      <Trending />
    </>
  );
};

export default Home;
