import React from "react";

import latestData from "../data/latestdata.json";
import "./LatestNews.css";

const LatestNews = () => {
  return (
    <div className="latestNewsSection">
      <h3 className="latestNewsTitle">Latest News</h3>
      <div className="latestNewsList">
        {latestData.slice(0, 8).map((item, idx) => (
          <a
            key={idx}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="latestNewsLink"
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
