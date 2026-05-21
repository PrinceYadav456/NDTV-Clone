import React from "react";
import latestData from "../../data/latestdata.json";
import "./Tech.css";

const Tech = () => {
  const keywords = ["tech", "technology", "gadgets", "mobile", "android", "iphone", "app", "software"];
  const filtered = latestData.filter((item) => {
    const text = (
      (item.title || "") + " " + (item.description || "") + " " + (item.source?.name || "") + " " + (item.content || "")
    ).toLowerCase();
    return keywords.some((k) => text.includes(k));
  });

  const items = filtered.length ? filtered : latestData.slice(0, 8);

  return (
    <div className="techPage">
      <h1>Technology</h1>
      <div className="techList">
        {items.map((it, i) => (
          <a
            key={i}
            href={it.url}
            target="_blank"
            rel="noreferrer"
            className="techLink"
          >
            <div className="techRow">
              {it.urlToImage ? (
                <img src={it.urlToImage} alt="" className="techImage" />
              ) : null}
              <div>
                <h3 className="techTitle">{it.title}</h3>
                <p className="techDate">{it.publishedAt}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Tech;
