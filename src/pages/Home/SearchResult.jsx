import React from "react";
import MovieCard from "../../components/MovieCard/MovieCard";

const SearchResult = ({ userInput, filteredMovies }) => {
  return (
    <div>
      <h2>Found {filteredMovies.length} results for "{userInput}"</h2>

   <div className="grid gap-3">
   {filteredMovies.map((movie) => {
    const {_id}= movie
        return <MovieCard key={_id} movie={movie} />;
      })}   
    </div>   
    </div>
  );
};

export default SearchResult;
