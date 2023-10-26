import React from "react";
import { useFetch } from "../../hooks/useFetch";
import MovieCard from "../../components/MovieCard/MovieCard";
import useAuth from "../../hooks/UseAuth";
import { useCustomParams } from "../../hooks/useCustomParams";
import SearchResult from "../Home/SearchResult";
import Loading from "../../utils/Loading";

const Bookmark = () => {
  const { token } = useAuth();
  const { data, error, loading, updateUI } = useFetch("/api/bookmark", token);
const {userInput, filteredMovies}= useCustomParams(data)


  if (loading) {
    return <Loading/>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  if (userInput) {
    return <SearchResult userInput={userInput} filteredMovies={filteredMovies} />;
  }
  return (
    <div className="grid gap-3 mx-4 text-start">
      {data.map((movie) => {
        const { _id } = movie;

        return <MovieCard key={_id} movie={movie} updateUI={updateUI} />;
      })}
    </div>
  );
};

export default Bookmark;
