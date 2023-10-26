import React from "react";
import "./Home.css";
import { RiFilmFill } from "react-icons/ri";
import { PiTelevisionFill } from "react-icons/pi";
import { BiBookmark, BiSolidBookmark } from "react-icons/bi";
import useAuth from "../../hooks/UseAuth";

const MovieCarousel = ({ data, updateUI}) => {
  const { user, token } = useAuth();

  return (
    <div className="carousel">
      <div className="inner_carousel d-flex gap-3">
        {data.map((movie) => {
          const { _id, title, year, type, rated, image, bookmarkedBy} = movie;
          const bookmarkIcon = bookmarkedBy.includes(user?.id) ? (
            <BiSolidBookmark onClick={()=>{
              updateUI('remove', _id, token, user?.id)
            }} className="icon position-absolute top-0 end-0 fs-3 me-3 mt-3" />
          ) : (
            <BiBookmark onClick={()=>{
              updateUI('add',_id, token, user?.id)
            }} className="icon  position-absolute top-0 end-0 fs-3 me-3 mt-3" />
          );
          return (
            <div key={_id} className="carousel_item position-relative">
              <img className="rounded-2" src={image} alt="" />
              {bookmarkIcon}
              <div className="position-absolute bottom-0 start-0 ps-2 pb-2">
                <div className="d-flex align-items-center gap-2">
                  <p className="m-0">{year}</p>
                  <span className="d-flex align-items-center gap-1">
                    {type === "movie" ? <RiFilmFill /> : <PiTelevisionFill />}
                    <p className="m-0">
                      {type === "movie" ? "movie" : "Tv Series"}
                    </p>
                  </span>
                  <p className="m-0">{rated}</p>
                </div>
                <p className="m-0 fw-semibold fs-6">{title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieCarousel;
