import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const useCustomParams =(data)=>{
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredMovies, setFilteredMovies]=useState([])

  const userInput = searchParams.get("search")
  ? searchParams.get("search")
  : "";

useEffect(() => {
  if (data){
    const searchMovies = data.filter((movies)=>{
      return movies.title.toLowerCase().includes(userInput?.toLowerCase())
    })
    setFilteredMovies(searchMovies)
  }
}, [searchParams, data]);
return { userInput, filteredMovies}
}