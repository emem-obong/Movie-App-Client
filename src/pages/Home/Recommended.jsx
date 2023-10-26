import React from "react";
import MovieCard from "../../components/MovieCard/MovieCard";

const Recommended = ({ data, error, loading, updateUI }) => {
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div className="grid gap-3">
      {data.map((movie) => {
        const {_id} = movie
        return <MovieCard key={_id} movie={movie} updateUI={updateUI} />;
      })}
    </div>
  );
};

export default Recommended;
