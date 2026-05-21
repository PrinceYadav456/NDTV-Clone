import React from "react";
import CategoryList from "../../Components/CategoryList";

const Movies = () => {
  const keywords = ["movie", "movies", "bollywood", "hollywood", "film", "actor", "actress", "box office"];
  return <CategoryList title="Movies" keywords={keywords} pageSize={6} />;
};

export default Movies;
