import React from "react";
import { BiBookmark, BiSolidBookmark } from "react-icons/bi";
import { RiFilmFill } from "react-icons/ri";
import { PiTelevisionFill } from "react-icons/pi";
import "./MovieCard.css"
import useAuth from "../../hooks/UseAuth";


const MovieCard = ({ movie, updateUI }) => {
 const {token, user}=useAuth()

  const { _id, title, year, type, rated, image, bookmarkedBy } = movie;

  const bookmarkIcon = bookmarkedBy.includes(user?.id) ? (
    <BiSolidBookmark onClick={()=>{
      updateUI('remove', _id, token, user.id)
    }} className="icon position-absolute top-0 end-0 fs-3 me-3 mt-3" />
  ) : (
    <BiBookmark onClick={()=>{
      updateUI('add',_id, token, user.id)
    }} className="icon  position-absolute top-0 end-0 fs-3 me-3 mt-3" />
  );
  return (
    <div className="position-relative movie_card" >
      <img className="rounded-2" src={movie.image} alt="" />
      {bookmarkIcon}
      <div className="d-flex gap-2 align-items-center mt-3">
        <p className="m-0">{year}</p>
        <span className="d-flex align-items-center gap-1">
          {type === "movie" ? <RiFilmFill /> : <PiTelevisionFill />}
          <p className="m-0">{type === "movie" ? "movie" : "Tv Series"}</p>
        </span>
        <p className="m-0">{rated}</p>
      </div>
      <p className="fw-semibold fs-4">{title}</p>
    </div>
  );
};

export default MovieCard;
