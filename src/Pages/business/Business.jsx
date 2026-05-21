import React from "react";
import CategoryList from "../../Components/CategoryList";

const Business = () => {
  const keywords = ["business", "market", "markets", "stock", "stocks", "economy", "finance", "revenue", "company", "companys", "company's"];
  return <CategoryList title="Business" keywords={keywords} pageSize={6} />;
};

export default Business;
