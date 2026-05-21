import React, { useMemo, useState } from "react";
import latestData from "../data/latestdata.json";
import "./CategoryList.css";

const CategoryList = ({ title, keywords = [], pageSize = 6 }) => {
  const normalizedKeywords = keywords.map((k) => k.toLowerCase());

  const filtered = useMemo(() => {
    if (!normalizedKeywords.length) return latestData;
    return latestData.filter((item) => {
      const text = (
        (item.title || "") + " " + (item.description || "") + " " + (item.content || "") + " " + (item.source?.name || "")
      ).toLowerCase();
      return normalizedKeywords.some((k) => text.includes(k));
    });
  }, [normalizedKeywords]);

  const [page, setPage] = useState(0);
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));

  const pageItems = filtered.slice(page * pageSize, page * pageSize + pageSize);

  return (
    <div className="categoryPage">
      <h1>{title}</h1>
      <div className="categoryList">
        {pageItems.map((it, i) => (
          <a
            key={i}
            href={it.url}
            target="_blank"
            rel="noreferrer"
            className="categoryLink"
          >
            <div className="categoryRow">
              {it.urlToImage ? (
                <img src={it.urlToImage} alt="" className="categoryImage" />
              ) : null}
              <div>
                <h3 className="categoryTitle">{it.title}</h3>
                <p className="categoryDate">{it.publishedAt}</p>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="categoryPagination">
        <button onClick={() => setPage((p) => Math.max(0, p - 1))} disabled={page === 0}>
          Prev
        </button>
        <span>
          Page {page + 1} / {totalPages}
        </span>
        <button onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))} disabled={page >= totalPages - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

export default CategoryList;
